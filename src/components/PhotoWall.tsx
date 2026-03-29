import { getTranslations } from 'next-intl/server';
import { PHOTOS } from '@/data/photos';
import { PHOTO_WALL_KEYS, PHOTO_WALL_CAPTIONS } from '@/data/constants';
import PhotoWallClient from './PhotoWallClient';

export default async function PhotoWall() {
  const t = await getTranslations('Index');
  const containerId = 'photo-wall-container';

  return (
    <section id="photos" className="py-20 px-5 relative overflow-hidden">
      <PhotoWallClient containerId={containerId} />
      <h2 className="text-center font-instrument text-[clamp(2rem,5vw,3.5rem)] mb-7 text-bdi-dark">
        {t('photoTitle')}
      </h2>
      <div id={containerId} className="flex flex-wrap justify-center items-center gap-6 max-w-[1200px] mx-auto">
        {PHOTO_WALL_KEYS.map((key, i) => {
          const rot = (Math.random() * 16 - 8).toFixed(1);
          const tapeRot = (Math.random() * 10 - 5).toFixed(1);
          return (
            <div 
              key={key} 
              className="polaroid w-[clamp(180px,22vw,260px)]"
              style={{ transform: `rotate(${rot}deg)` }}
            >
              <div className="tape" style={{ ['--tape-rot' as any]: `${tapeRot}deg` }} />
              <img src={(PHOTOS as any)[key]} alt={PHOTO_WALL_CAPTIONS[i]} className="w-full aspect-4/3 object-cover" />
              <div className="caption">{PHOTO_WALL_CAPTIONS[i]}</div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
