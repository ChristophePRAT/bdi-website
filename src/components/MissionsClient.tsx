'use client';

import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function MissionsClient({ sectionId, scrollId }: { sectionId: string, scrollId: string }) {
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

    const wrap = document.getElementById(scrollId);
    if (wrap) {
      let isDown = false, startX: number, scrollLeft: number;
      wrap.addEventListener('mousedown', e => { isDown = true; startX = e.pageX - wrap.offsetLeft; scrollLeft = wrap.scrollLeft; });
      wrap.addEventListener('mouseleave', () => isDown = false);
      wrap.addEventListener('mouseup', () => isDown = false);
      wrap.addEventListener('mousemove', e => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - wrap.offsetLeft;
        wrap.scrollLeft = scrollLeft - (x - startX) * 1.5;
      });
    }
  }, [sectionId, scrollId]);

  return null;
}
