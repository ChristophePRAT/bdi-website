'use client';

import Image from 'next/image';
import { useLocale } from 'next-intl';
import { usePathname, useRouter } from '@/i18n/routing';
import { cn } from '@/lib/utils';

const locales = [
  { code: 'fr', emoji: '🇫🇷' },
  { code: 'en', emoji: '🇬🇧' },
  { code: 'pt', emoji: '🇧🇷' },
  { code: 'de', emoji: '🇩🇪' },
  { code: 'es', emoji: '🇪🇸' },
  { code: 'zh', emoji: '🇨🇳' },
  { code: 'ar', emoji: '🇸🇦' },
];

export function LocaleSwitcher() {
  const currentLocale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const switchLocale = (locale: string) => {
    router.replace(pathname, { locale });
  };

  return (
    <div className="fixed top-3 right-3 z-[9999] flex gap-1.5 bg-[rgba(255,248,240,0.92)] backdrop-blur-md px-2.5 py-1.5 rounded-[40px] border-2 border-dashed border-bdi-yellow rtl:right-auto rtl:left-3 max-md:top-auto max-md:bottom-3 max-md:right-1/2 max-md:translate-x-1/2 max-md:shadow-[0_4px_20px_rgba(0,0,0,0.15)]">
      {locales.map((l) => (
        <button
          key={l.code}
          onClick={() => switchLocale(l.code)}
          className={cn(
            "text-xl cursor-pointer transition-transform duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] border-none bg-none p-0.5 hover:scale-140 hover:-translate-y-1 md:text-2xl select-none",
            currentLocale === l.code && "scale-130 drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]"
          )}
        >
          {l.emoji}
        </button>
      ))}
    </div>
  );
}

export function Logo({ src }: { src: string }) {
  const onLogoClick = () => {
    document.body.classList.add('disco');
    setTimeout(() => document.body.classList.remove('disco'), 3000);
  };

  return (
    <div 
      onClick={onLogoClick}
      className="fixed top-2.5 left-3 z-[9999] w-[50px] h-[50px] rounded-full overflow-hidden cursor-pointer transition-transform duration-300 border-2 border-bdi-yellow hover:rotate-[20deg] hover:scale-110 rtl:left-auto rtl:right-3 md:top-[10px]"
    >
      <Image 
        src={src} 
        alt="BDI Logo"
        width={50}
        height={50}
        className="object-cover"
      />
    </div>
  );
}
