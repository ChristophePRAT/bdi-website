import { getTranslations } from 'next-intl/server';
import { PHOTOS } from '@/data/photos';
import { EVENT_PHOTOS, EVENT_GRADIENTS, EVENT_EMOJIS, EVENT_LINKS } from '@/data/constants';
import { EventCardClient, EventsScrollClient } from './EventsClient';

function EventCard({ name, desc, stamp, index }: { name: string, desc: string, stamp: string, index: number }) {
  const cardId = `event-card-${index}`;
  const innerId = `event-card-inner-${index}`;
  const photoKey = EVENT_PHOTOS[index];
  const photo = photoKey ? (PHOTOS as any)[photoKey] : null;
  const link = EVENT_LINKS[index];

  return (
    <a 
      href={link} 
      target="_blank" 
      rel="noopener noreferrer"
      id={cardId} 
      className="event-card group block no-underline"
    >
      <EventCardClient cardId={cardId} innerId={innerId} />
      <div id={innerId} className="w-full h-full relative transition-transform duration-500 ease-out">
        <div 
          className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110 select-none"
          style={photo 
            ? { backgroundImage: `url(${photo})` }
            : { background: EVENT_GRADIENTS[index], display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '4rem' }
          }
        >
          {!photo && EVENT_EMOJIS[index]}
        </div>
        <div className="absolute inset-0 bg-linear-to-t from-[rgba(0,0,0,0.75)] via-transparent to-transparent opacity-100 group-hover:opacity-90" />
        <div className="event-stamp">{stamp}</div>
        <div className="relative z-10 p-6 text-left h-full flex flex-col justify-end">
          <h3 className="font-instrument text-2xl mb-1.5">{name}</h3>
          <p className="text-[0.85rem] opacity-90 leading-relaxed">{desc}</p>
        </div>
      </div>
    </a>
  );
}

export default async function Events() {
  const t = await getTranslations();
  const sectionId = 'events-section';
  const scrollId = 'events-scroll';

  const events = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(i => ({
    name: t(`Events.event${i}Name`),
    desc: t(`Events.event${i}Desc`),
    stamp: t(`Events.event${i}Stamp`)
  }));

  return (
    <section id={sectionId} className="py-20 px-5 text-center max-w-none">
      <EventsScrollClient sectionId={sectionId} scrollId={scrollId} />
      <h2 className="font-instrument text-[clamp(2rem,5vw,3.5rem)] mb-2 relative inline-block w-full">
        {t('Index.eventsTitle')}
      </h2>
      <div className="wavy-underline" />
      <div className="font-caveat text-xl text-[#888] my-10">{t('Index.eventsSub')}</div>
      
      <div 
        id={scrollId}
        className="overflow-x-auto flex gap-6 px-10 pb-10 snap-x snap-mandatory cursor-grab active:cursor-grabbing scrollbar-hide"
      >
        {events.map((ev, i) => (
          <EventCard key={i} index={i} {...ev} />
        ))}
      </div>

      <div className="scroll-hint flex items-center justify-center gap-2 font-caveat text-base text-[#888] mt-2">
        <span>→</span> <span>{t('Index.scrollDrag')}</span> <span>→</span>
      </div>
    </section>
  );
}
