import { getTranslations } from 'next-intl/server';
import { STAMP_COLORS } from '@/data/constants';
import MissionsClient from './MissionsClient';

export default async function Missions() {
  const t = await getTranslations();
  const sectionId = 'missions-section';
  const scrollId = 'missions-scroll';

  const missions = [1, 2, 3, 4, 5, 6].map(i => ({
    title: t(`Missions.mission${i}Title`),
    desc: t(`Missions.mission${i}Desc`),
    emoji: ['🤝', '🌍', '🗣️', '🎉', '🌉', '💡'][i - 1]
  }));

  return (
    <section id={sectionId} className="py-20 px-5 max-w-[1100px] mx-auto text-center">
      <MissionsClient sectionId={sectionId} scrollId={scrollId} />
      <h2 className="font-instrument text-[clamp(2rem,5vw,3.5rem)] mb-2 relative inline-block w-full">
        {t('Index.missionsTitle')}
      </h2>
      <div className="wavy-underline" />
      <div className="font-caveat text-xl text-[#888] my-10">{t('Index.missionsSub')}</div>
      
      <div 
        id={scrollId}
        className="overflow-x-auto overflow-y-hidden flex gap-6 px-10 pb-10 snap-x snap-mandatory cursor-grab active:cursor-grabbing scrollbar-hide"
      >
        {missions.map((m, i) => {
          const rot = (Math.random() * 6 - 3).toFixed(1);
          const color = STAMP_COLORS[i % STAMP_COLORS.length];
          return (
            <div 
              key={i} 
              className="stamp-card snap-center hover:rotate-0 hover:scale-108"
              style={{ 
                ['--stamp-color' as any]: color,
                transform: `rotate(${rot}deg)`
              }}
            >
              <div className="text-[2.5rem] mb-2.5 select-none">{m.emoji}</div>
              <h3 className="font-instrument text-xl mb-2">{m.title}</h3>
              <p className="text-sm text-[#555] leading-relaxed">{m.desc}</p>
            </div>
          );
        })}
      </div>

      <div className="scroll-hint flex items-center justify-center gap-2 font-caveat text-base text-[#888] mt-2">
        <span>→</span> <span>{t('Index.scrollDrag')}</span> <span>→</span>
      </div>
    </section>
  );
}
