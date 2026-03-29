'use client';

import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function PhotoWallClient({ containerId }: { containerId: string }) {
  useEffect(() => {
    const container = document.getElementById(containerId);
    const polaroids = container?.querySelectorAll('.polaroid');
    if (polaroids) {
      gsap.from(polaroids, {
        y: 80,
        rotation: () => Math.random() * 20 - 10,
        scale: 0.6,
        duration: 0.6,
        stagger: 0.1,
        scrollTrigger: {
          trigger: container,
          start: 'top 80%',
          toggleActions: 'play none none none',
        }
      });
    }
  }, [containerId]);

  return null;
}
