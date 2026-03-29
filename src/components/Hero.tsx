import { getTranslations } from 'next-intl/server';
import { PHOTOS } from '@/data/photos';
import HeroClient from './HeroClient';
import { HeroCTA } from './HeroCTA';

export default async function Hero() {
  const t = await getTranslations('Index');
  const heroTitle = t('heroTitle');
  const words = heroTitle.split(' ');
  const titleId = 'hero-title-main';

  return (
    <section 
      id="hero"
      className="relative h-screen min-h-[600px] flex items-center justify-center text-center overflow-hidden"
    >
      <div 
        className="absolute inset-0 bg-cover bg-center filter brightness-50"
        style={{ backgroundImage: `url(${PHOTOS.village1})` }}
      />
      <div className="absolute inset-0 bg-linear-to-b from-[rgba(43,24,16,0.1)] to-[rgba(43,24,16,0.6)]" />
      
      <HeroClient titleId={titleId} />

      <div className="relative z-10 text-bdi-cream p-5 pointer-events-none select-none">
        <h1 id={titleId} className="font-instrument text-[clamp(3rem,8vw,7rem)] leading-[1.1] mb-4">
          {words.map((w, i) => (
            <span key={i} className="word inline-block mr-2">{w}</span>
          ))}
        </h1>
        <p className="font-caveat text-[clamp(1.3rem,3vw,2.2rem)] opacity-90 mb-7">
          {t('heroSub')}
        </p>
        <div className="pointer-events-auto">
          <HeroCTA label={t('heroCta')} />
        </div>
      </div>

      <div className="absolute bottom-7.5 left-1/2 -translate-x-1/2 text-[2.5rem] text-white z-10 animate-bounce select-none">
        ↓
      </div>
      <div className="hero-click-hint absolute bottom-[70px] left-1/2 -translate-x-1/2 z-10 font-caveat text-base text-[rgba(255,248,240,0.6)] animate-[fadeInOut_3s_ease_infinite]">
        {t('heroClickHint')}
      </div>
    </section>
  );
}
