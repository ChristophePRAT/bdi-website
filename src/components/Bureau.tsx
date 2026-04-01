import { getTranslations } from 'next-intl/server';
import Image from 'next/image';
import { PHOTOS } from '@/data/photos';
import { BUREAU_MEMBERS, BureauMember } from '@/data/constants';
import BureauClient from './BureauClient';

export default async function Bureau() {
  const t = await getTranslations('Index');
  const sectionId = 'bureau-section';
  const nametagsId = 'nametags-container';

  return (
    <section id={sectionId} className="py-20 px-5 max-w-[1200px] mx-auto text-center">
      <BureauClient sectionId={sectionId} nametagsId={nametagsId} />
      <h2 className="font-ranchers text-[clamp(2rem,5vw,3.5rem)] mb-2 relative inline-block w-full">
        {t('bureauTitle')}
      </h2>
      <div className="wavy-underline" />
      <div className="font-ranchers text-xl text-[#888] my-10">{t('bureauSub')}</div>

      <div className="flex gap-7 justify-center flex-wrap mb-10">
        <div className="bg-white p-2 pb-10 shadow-[2px_4px_15px_rgba(0,0,0,0.15)] max-w-[420px] transition-transform duration-400 hover:-rotate-1 hover:scale-103 bureau-polaroid">
          <div className="relative w-full aspect-4/3 overflow-hidden">
            <Image
              src={PHOTOS.bureau1}
              alt="Bureau BDI"
              fill
              sizes="(max-width: 768px) 90vw, 420px"
              className="object-cover"
            />
          </div>
          <div className="font-ranchers text-base text-[#555] mt-2 text-center">{t('bureauCaption1')}</div>
        </div>
        <div className="bg-white p-2 pb-10 shadow-[2px_4px_15px_rgba(0,0,0,0.15)] max-w-[420px] transition-transform duration-400 hover:-rotate-1 hover:scale-103 bureau-polaroid">
          <div className="relative w-full aspect-4/3 overflow-hidden">
            <Image
              src={PHOTOS.bureau2}
              alt="Respos BDI"
              fill
              sizes="(max-width: 768px) 90vw, 420px"
              className="object-cover"
            />
          </div>
          <div className="font-ranchers text-base text-[#555] mt-2 text-center">{t('bureauCaption2')}</div>
        </div>
      </div>

      <div className="flex flex-col gap-5 md:gap-6">
        {/* First row: 4 members */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
          {BUREAU_MEMBERS.slice(0, 4).map((m: BureauMember, i) => (
            <div
              key={i}
              className="relative w-full flex nametag"
            >
              <div className="relative flex flex-col w-full rounded-xl overflow-hidden shadow-md border border-black/5 bg-white">
                {/* Header */}
                <div className="bg-bdi-red text-white text-center py-3.5 px-3 font-mono text-xs md:text-sm uppercase font-bold flex-none">
                    {m.role}
                </div>
                <div className="text-center py-8 md:py-10 px-4 flex flex-col items-center justify-center flex-1 min-h-40">
                  <div className="font-ranchers text-4xl md:text-5xl text-bdi-dark leading-tight break-words w-full">
                    {m.name}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Second row: 5 members */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-5 md:gap-6">
          {BUREAU_MEMBERS.slice(4).map((m: BureauMember, i) => (
            <div
              key={i + 4}
              className="relative w-full flex nametag"
            >
              <div className="relative flex flex-col w-full rounded-xl overflow-hidden shadow-md border border-black/5 bg-white">
                {/* Header */}
                <div className="bg-bdi-red text-white text-center py-3.5 px-3 font-mono text-xs md:text-sm uppercase font-bold flex-none">
                    {m.role}
                </div>
                <div className="text-center py-8 md:py-10 px-4 flex flex-col items-center justify-center flex-1 min-h-40">
                  <div className="font-ranchers text-4xl md:text-5xl text-bdi-dark leading-tight break-words w-full">
                    {m.name}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}
