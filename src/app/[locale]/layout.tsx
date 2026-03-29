import { NextIntlClientProvider } from 'next-intl';
import { getMessages, setRequestLocale } from 'next-intl/server';
import { Caveat, DM_Sans, Instrument_Serif, Space_Mono, Noto_Sans_SC, Noto_Sans_Arabic } from 'next/font/google';
import { routing } from '@/i18n/routing';
import { notFound } from 'next/navigation';
import '../globals.css';

const caveat = Caveat({ subsets: ['latin'], variable: '--font-caveat' });
const dmSans = DM_Sans({ subsets: ['latin'], variable: '--font-dm-sans' });
const instrumentSerif = Instrument_Serif({ subsets: ['latin'], weight: '400', variable: '--font-instrument-serif' });
const spaceMono = Space_Mono({ subsets: ['latin'], weight: ['400', '700'], variable: '--font-space-mono' });
const notoSC = Noto_Sans_SC({ subsets: ['latin'], variable: '--font-noto-sc' });
const notoArabic = Noto_Sans_Arabic({ subsets: ['arabic'], variable: '--font-noto-arabic' });

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export const metadata = {
  title: 'BDI — Bureau Des Internationaux | Telecom Paris',
  description: "Bureau Des Internationaux — L'association des étudiants internationaux de Télécom Paris. Welcome Home. Bienvenue chez toi.",
};

export default async function RootLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  setRequestLocale(locale);
  const messages = await getMessages();

  return (
    <html lang={locale} dir={locale === 'ar' ? 'rtl' : 'ltr'} className="h-full antialiased">
      <body className={`${dmSans.variable} ${caveat.variable} ${instrumentSerif.variable} ${spaceMono.variable} ${notoSC.variable} ${notoArabic.variable} font-sans bg-bdi-cream text-bdi-dark min-h-full flex flex-col`}>
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
