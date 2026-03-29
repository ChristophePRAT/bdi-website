import { getTranslations } from 'next-intl/server';
import Image from 'next/image';
import { PHOTOS } from '@/data/photos';
import { PHOTO_WALL_KEYS, PHOTO_WALL_CAPTIONS, PHOTO_WALL_ROTATIONS, PHOTO_WALL_TAPE_ROTATIONS, PhotoKey } from '@/data/constants';
import PhotoWallClient from './PhotoWallClient';

export default async function PhotoWall() {
  const t = await getTranslations('Index');
  const containerId = 'photo-wall-container';

  return (
    <section id="photos" className="py-20 px-5 relative overflow-hidden">
      <PhotoWallClient containerId={containerId} />
      <h2 className="text-center font-ranchers text-[clamp(2rem,5vw,3.5rem)] mb-7 text-bdi-dark">
        {t('photoTitle')}
      </h2>
      <div id={containerId} className="flex flex-wrap justify-center items-center gap-6 max-w-[1200px] mx-auto">
        {PHOTO_WALL_KEYS.map((key: PhotoKey, i) => {
          const rot = PHOTO_WALL_ROTATIONS[i];
          const tapeRot = PHOTO_WALL_TAPE_ROTATIONS[i];
          return (
            <div 
              key={key} 
              className="polaroid w-[clamp(180px,22vw,260px)]"
              style={{ transform: `rotate(${rot}deg)` }}
            >
              <div className="tape" style={{ '--tape-rot': `${tapeRot}deg` } as React.CSSProperties} />
              <div className="relative w-full aspect-4/3 overflow-hidden">
                <Image 
                  src={PHOTOS[key]} 
                  alt={PHOTO_WALL_CAPTIONS[i]} 
                  fill
                  sizes="(max-width: 768px) 65vw, 22vw"
                  className="object-cover" 
                />
              </div>
              <div className="caption">{PHOTO_WALL_CAPTIONS[i]}</div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
