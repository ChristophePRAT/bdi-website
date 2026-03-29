'use client';

import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function BureauClient({ sectionId, nametagsId }: { sectionId: string, nametagsId: string }) {
  useEffect(() => {
    const section = document.getElementById(sectionId);
    if (!section) return;

    // Bureau polaroids entrance
    const polaroids = section.querySelectorAll('.bureau-polaroid');
    polaroids.forEach((p, i) => {
      gsap.from(p, {
        x: i % 2 === 0 ? -80 : 80,
        rotation: i % 2 === 0 ? -8 : 8,
        duration: 0.8,
        scrollTrigger: {
          trigger: p,
          start: 'top 80%',
          toggleActions: 'play none none none',
        }
      });
    });

    // Nametags staggered entrance
    const nametags = section.querySelectorAll('.nametag');
    gsap.from(nametags, {
      y: 50,
      rotation: () => Math.random() * 10 - 5,
      scale: 0.8,
      duration: 0.5,
      stagger: 0.08,
      scrollTrigger: {
        trigger: `#${nametagsId}`,
        start: 'top 85%',
        toggleActions: 'play none none none',
      }
    });
  }, [sectionId, nametagsId]);

  return null;
}
