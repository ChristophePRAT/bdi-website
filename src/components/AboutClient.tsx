'use client';

import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function CounterClient({ target, id }: { target: number, id: string }) {
  useEffect(() => {
    const el = document.getElementById(id);
    if (!el) return;

    ScrollTrigger.create({
      trigger: el,
      start: 'top 85%',
      onEnter: () => {
        let current = 0;
        const step = Math.max(1, Math.floor(target / 60));
        const interval = setInterval(() => {
          current += step;
          if (current >= target) {
            current = target;
            clearInterval(interval);
          }
          el.textContent = current.toString();
        }, 25);
      }
    });
  }, [target, id]);

  return null;
}

export function AboutAnimation({ sectionId }: { sectionId: string }) {
  useEffect(() => {
    const section = document.getElementById(sectionId);
    if (section) {
      gsap.from(section, {
        y: 60,
        duration: 0.8,
        scrollTrigger: {
          trigger: section,
          start: 'top 85%',
          toggleActions: 'play none none none',
        }
      });
    }
  }, [sectionId]);

  return null;
}
