import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function fireConfetti(x: number, y: number) {
  const colors = ['#E63946', '#FFB703', '#3D5AFE', '#2EC4B6', '#7B2FF7', '#FF6B6B'];
  for (let i = 0; i < 60; i++) {
    const piece = document.createElement('div');
    piece.className = 'fixed w-[10px] h-[10px] z-[99999] pointer-events-none rounded-[2px]';
    piece.style.left = x + 'px';
    piece.style.top = y + 'px';
    piece.style.background = colors[Math.floor(Math.random() * colors.length)];
    piece.style.width = (Math.random() * 8 + 5) + 'px';
    piece.style.height = (Math.random() * 8 + 5) + 'px';
    if (Math.random() > 0.5) piece.style.borderRadius = '50%';
    document.body.appendChild(piece);

    const angle = Math.random() * Math.PI * 2;
    const velocity = Math.random() * 400 + 200;
    const vx = Math.cos(angle) * velocity;
    const vy = Math.sin(angle) * velocity - 300;
    const rotation = Math.random() * 720;

    piece.animate([
      { transform: 'translate(0,0) rotate(0deg)', opacity: 1 },
      { transform: `translate(${vx}px, ${vy + 600}px) rotate(${rotation}deg)`, opacity: 0 }
    ], { 
      duration: 1200 + Math.random() * 800, 
      easing: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
      fill: 'forwards'
    });

    setTimeout(() => piece.remove(), 2200);
  }
}
