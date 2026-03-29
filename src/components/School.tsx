import { getTranslations } from 'next-intl/server';
import { SchoolFactAnimation, SchoolSectionAnimation } from './SchoolClient';

function SchoolFact({ target, label, index }: { target: number, label: string, index: number }) {
  const factId = `school-fact-${index}`;
  const numId = `school-fact-num-${index}`;

  return (
    <div id={factId} className="max-w-[200px] text-center">
      <SchoolFactAnimation target={target} numId={numId} factId={factId} index={index} />
      <div id={numId} className="font-ranchers text-[clamp(2.5rem,5vw,3.5rem)] text-bdi-blue">0</div>
      <div className="text-[0.95rem] text-[#555]">{label}</div>
    </div>
  );
}

export default async function School() {
  const t = await getTranslations('Index');
  const sectionId = 'school-section';

  return (
    <section id={sectionId} className="py-20 px-5 max-w-[1100px] mx-auto text-center">
      <SchoolSectionAnimation sectionId={sectionId} />
      <h2 className="font-ranchers text-[clamp(2rem,5vw,3.5rem)] mb-2 relative inline-block w-full">
        {t('schoolTitle')}
      </h2>
      <div className="wavy-underline" />
      <div className="font-ranchers text-xl text-[#888] my-10">Telecom Paris — Institut Polytechnique de Paris</div>

      <div id="school" className="flex justify-center gap-12 flex-wrap">
        <SchoolFact target={1878} label={t('schoolYear')} index={0} />
        <SchoolFact target={1} label={t('schoolRank')} index={1} />
        <SchoolFact target={40} label={t('schoolInt')} index={2} />
      </div>
    </section>
  );
}
