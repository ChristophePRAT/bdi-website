'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { fireConfetti } from '@/lib/utils';

gsap.registerPlugin(ScrollTrigger);

const STICKERS = [
  { emoji: '🇫🇷', top: '10%', left: '8%' },
  { emoji: '🇧🇷', top: '15%', right: '12%' },
  { emoji: '🇩🇪', top: '60%', left: '5%' },
  { emoji: '🇯🇵', top: '70%', right: '8%' },
  { emoji: '🇲🇦', top: '30%', left: '15%' },
  { emoji: '🇨🇳', top: '45%', right: '18%' },
  { emoji: '🇪🇸', top: '80%', left: '20%' },
  { emoji: '🇮🇹', top: '25%', right: '25%' },
  { emoji: '🇬🇧', bottom: '20%', left: '30%' },
  { emoji: '🇰🇷', top: '50%', left: '40%' },
];

export default function HeroClient({ titleId }: { titleId: string }) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Sticker parallax
    const stickers = gsap.utils.toArray<HTMLElement>('.sticker');
    stickers.forEach(s => {
      gsap.to(s, {
        y: () => Math.random() * 200 - 100,
        x: () => Math.random() * 60 - 30,
        rotation: () => Math.random() * 30 - 15,
        scrollTrigger: {
          trigger: '#hero',
          start: 'top top',
          end: 'bottom top',
          scrub: 1,
        }
      });
    });

    // Title animation
    const words = document.getElementById(titleId)?.querySelectorAll('.word');
    if (words) {
      gsap.fromTo(words, 
        { y: 60, scale: 0.8 },
        { 
          opacity: 1, 
          y: 0, 
          scale: 1, 
          duration: 0.6, 
          stagger: 0.1, 
          ease: 'back.out(1.7)' 
        }
      );
    }
  }, [titleId]);

  const onHeroClick = (e: React.MouseEvent) => {
    const target = e.target as HTMLElement;
    if (target.closest('button')) return;
    fireConfetti(e.clientX, e.clientY);
  };

  return (
    <div 
      ref={containerRef}
      onClick={onHeroClick}
      className="absolute inset-0 z-1"
    >

      {STICKERS.map((s, i) => (
        <div 
          key={i} 
          className="sticker absolute text-[clamp(1.5rem,4vw,3rem)] z-1 pointer-events-none will-change-transform select-none"
          style={{ top: s.top, left: s.left, right: s.right, bottom: s.bottom }}
        >
          {s.emoji}
        </div>
      ))}
    </div>
  );
}
