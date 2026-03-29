'use client';

import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function EventCardClient({ cardId, innerId }: { cardId: string, innerId: string }) {
  useEffect(() => {
    const el = document.getElementById(cardId);
    const inner = document.getElementById(innerId);
    if (!el || !inner) return;

    const onMouseMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      inner.style.transform = `perspective(800px) rotateY(${x * 12}deg) rotateX(${-y * 8}deg) scale(1.03)`;
    };

    const onMouseLeave = () => {
      inner.style.transform = 'perspective(800px) rotateY(0) rotateX(0) scale(1)';
    };

    el.addEventListener('mousemove', onMouseMove);
    el.addEventListener('mouseleave', onMouseLeave);

    return () => {
      el.removeEventListener('mousemove', onMouseMove);
      el.removeEventListener('mouseleave', onMouseLeave);
    };
  }, [cardId, innerId]);

  return null;
}

export function EventsScrollClient({ sectionId, scrollId }: { sectionId: string, scrollId: string }) {
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
      wrap.addEventListener('mousedown', e => { 
        isDown = true; 
        startX = e.pageX - wrap.offsetLeft; 
        scrollLeft = wrap.scrollLeft; 
      });
      wrap.addEventListener('mouseleave', () => { isDown = false; });
      wrap.addEventListener('mouseup', () => { isDown = false; });
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
