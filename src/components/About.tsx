import { getTranslations } from 'next-intl/server';
import { CounterClient, AboutAnimation } from './AboutClient';

function Counter({ target, label, id }: { target: number, label: string, id: string }) {
  return (
    <div className="text-center transition-transform duration-300 hover:scale-110 hover:-rotate-2">
      <CounterClient target={target} id={id} />
      <div id={id} className="font-ranchers text-[clamp(2.5rem,6vw,4rem)] text-bdi-red font-bold">0</div>
      <div className="font-ranchers text-[1.2rem] text-[#555]">{label}</div>
    </div>
  );
}

export default async function About() {
  const t = await getTranslations('Index');
  const sectionId = 'about-section';

  return (
    <section id={sectionId} className="py-20 px-5 max-w-[1100px] mx-auto text-center">
      <AboutAnimation sectionId={sectionId} />
      <h2 className="font-ranchers text-[clamp(2rem,5vw,3.5rem)] mb-2 relative inline-block w-full">
        {t('aboutTitle')}
      </h2>
      <div className="wavy-underline" />
      <div className="font-ranchers text-xl text-[#888] my-10">{t('aboutSub')}</div>
      <p className="text-[1.15rem] leading-[1.8] max-w-[700px] mx-auto mb-10">
        {t.rich('aboutText', {
          highlight: (chunks) => <span className="highlight">{chunks}</span>
        })}
      </p>

      <div className="flex justify-center gap-10 flex-wrap">
        <Counter target={50} label={t('statNat')} id="stat-nat" />
        <Counter target={10} label={t('statEvents')} id="stat-events" />
        <Counter target={9} label={t('statBureau')} id="stat-bureau" />
        <Counter target={1} label={t('statFamily')} id="stat-family" />
      </div>
    </section>
  );
}
