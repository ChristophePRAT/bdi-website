import { getTranslations } from 'next-intl/server';
import { PHOTOS } from '@/data/photos';
import { BUREAU_MEMBERS } from '@/data/constants';
import BureauClient from './BureauClient';

export default async function Bureau() {
  const t = await getTranslations('Index');
  const sectionId = 'bureau-section';
  const nametagsId = 'nametags-container';

  return (
    <section id={sectionId} className="py-20 px-5 max-w-[1100px] mx-auto text-center">
      <BureauClient sectionId={sectionId} nametagsId={nametagsId} />
      <h2 className="font-instrument text-[clamp(2rem,5vw,3.5rem)] mb-2 relative inline-block w-full">
        {t('bureauTitle')}
      </h2>
      <div className="wavy-underline" />
      <div className="font-caveat text-xl text-[#888] my-10">{t('bureauSub')}</div>
      
      <div className="flex gap-7 justify-center flex-wrap mb-10">
        <div className="bg-white p-2 pb-10 shadow-[2px_4px_15px_rgba(0,0,0,0.15)] max-w-[420px] transition-transform duration-400 hover:-rotate-1 hover:scale-103 bureau-polaroid">
          <img src={PHOTOS.bureau1} alt="Bureau BDI" className="w-full aspect-4/3 object-cover" />
          <div className="font-caveat text-base text-[#555] mt-2 text-center">{t('bureauCaption1')}</div>
        </div>
        <div className="bg-white p-2 pb-10 shadow-[2px_4px_15px_rgba(0,0,0,0.15)] max-w-[420px] transition-transform duration-400 hover:-rotate-1 hover:scale-103 bureau-polaroid">
          <img src={PHOTOS.bureau2} alt="Respos BDI" className="w-full aspect-4/3 object-cover" />
          <div className="font-caveat text-base text-[#555] mt-2 text-center">{t('bureauCaption2')}</div>
        </div>
      </div>

      <div id={nametagsId} className="flex flex-wrap justify-center gap-4">
        {BUREAU_MEMBERS.map((m, i) => (
          <div key={i} className="nametag group">
            <div className="group-hover:animate-[wiggle_0.4s_ease] transition-transform duration-400 group-hover:rotate-y-8 group-hover:rotate-x--5">
              <div className="bg-bdi-red text-white text-center p-1.5 font-mono text-[0.55rem] uppercase tracking-[2px]">
                Hello my name is
              </div>
              <div className="bg-white text-center py-3.5 px-2">
                <div className="font-caveat text-2xl text-bdi-dark">{m.name}</div>
                <div className="font-mono text-[0.6rem] text-[#888] mt-0.5">{m.role}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
