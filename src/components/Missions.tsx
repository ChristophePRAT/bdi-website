import { getTranslations } from 'next-intl/server';
import { STAMP_COLORS } from '@/data/constants';
import MissionsClient from './MissionsClient';


const rotations = [2, -3, 1.5, -2.5, 3, -1]

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
    <section id={sectionId} className="py-20 px-5 max-w-275 mx-auto text-center">
      <MissionsClient sectionId={sectionId} scrollId={scrollId} />
      <h2 className="font-ranchers text-[clamp(2rem,5vw,3.5rem)] mb-2 relative inline-block w-full">
        {t('Index.missionsTitle')}
      </h2>
      <div className="wavy-underline" />
      <div className="font-ranchers text-xl text-[#888] my-10">{t('Index.missionsSub')}</div>

      <div
        id={scrollId}
        className="overflow-x-auto overflow-y-hidden flex gap-6 pb-10 pt-10 p-20 snap-x snap-mandatory cursor-grab active:cursor-grabbing scrollbar-hide"
      >
        {missions.map((m, i) => {
          const rot = rotations[i % rotations.length];
          const color = STAMP_COLORS[i % STAMP_COLORS.length];
          return (
            <div
              key={i}
              className="stamp-card z-50 snap-center hover:rotate-0 hover:scale-108"
              style={{
                '--stamp-color': color,
                transform: `rotate(${rot}deg)`
              } as React.CSSProperties}
            >
              <div className="text-[2.5rem] mb-2.5 select-none">{m.emoji}</div>
              <h3 className="font-ranchers text-xl mb-2">{m.title}</h3>
              <p className="text-sm text-[#555] leading-relaxed">{m.desc}</p>
            </div>
          );
        })}
      </div>

      <div className="scroll-hint flex items-center justify-center gap-2 font-ranchers text-base text-[#888] mt-2">
        <span>→</span> <span>{t('Index.scrollDrag')}</span> <span>→</span>
      </div>
    </section>
  );
}
