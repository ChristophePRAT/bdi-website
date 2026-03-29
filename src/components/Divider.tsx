'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Divider({ text }: { text: string }) {
  const dividerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (dividerRef.current) {
      gsap.to(dividerRef.current, {
        x: -80,
        scrollTrigger: {
          trigger: dividerRef.current,
          start: 'top 95%',
          end: 'bottom 5%',
          scrub: 2,
        }
      });
    }
  }, []);

  return (
    <div 
      ref={dividerRef}
      className="text-center py-5 text-[1.8rem] tracking-[12px] opacity-35 select-none overflow-hidden whitespace-nowrap"
    >
      {text}
    </div>
  );
}
