'use client';

import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function SchoolFactAnimation({ target, numId, factId, index }: { target: number, numId: string, factId: string, index: number }) {
  useEffect(() => {
    const el = document.getElementById(factId);
    const numEl = document.getElementById(numId);
    if (!el || !numEl) return;

    gsap.from(el, {
      y: 40 + index * 20,
      duration: 0.7,
      delay: index * 0.15,
      scrollTrigger: {
        trigger: '#school',
        start: 'top 80%',
        toggleActions: 'play none none none',
      }
    });

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
          numEl.textContent = current.toString();
        }, 25);
      }
    });
  }, [target, numId, factId, index]);

  return null;
}

export function SchoolSectionAnimation({ sectionId }: { sectionId: string }) {
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
