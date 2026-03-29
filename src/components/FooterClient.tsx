'use client';

import { useEffect, useState } from 'react';

function FloatingEmoji() {
  const [emoji, setEmoji] = useState('🌍');
  const [left, setLeft] = useState('50vw');
  const [fontSize, setFontSize] = useState('1rem');
  const [duration, setDuration] = useState(8000);

  useEffect(() => {
    const emojis = ['🌍', '🌎', '🌏', '✈️', '🗺️', '🎉', '🌐', '⭐', '🎊', '🌟', '💫', '🎈'];
    setEmoji(emojis[Math.floor(Math.random() * emojis.length)]);
    setLeft(Math.random() * 100 + 'vw');
    setFontSize((Math.random() * 1.2 + 0.8) + 'rem');
    setDuration(6000 + Math.random() * 8000);
  }, []);

  return (
    <div 
      className="fixed pointer-events-none z-0 opacity-0 animate-[floatUp_var(--duration)_linear_infinite] select-none"
      style={{ 
        left, 
        fontSize,
        ['--duration' as any]: `${duration}ms`
      }}
    >
      {emoji}
    </div>
  );
}

export default function FooterClient() {
  const [emojis, setEmojis] = useState<number[]>([]);

  useEffect(() => {
    // Add keyframe for floating animation if not exists
    if (!document.getElementById('footer-animations')) {
      const style = document.createElement('style');
      style.id = 'footer-animations';
      style.innerHTML = `
        @keyframes floatUp {
          0% { transform: translateY(105vh) rotate(0deg); opacity: 0.5; }
          100% { transform: translateY(-20vh) rotate(360deg); opacity: 0; }
        }
        @keyframes fadeInOut {
          0%, 100% { opacity: 0; }
          50% { opacity: 1; }
        }
        @keyframes wiggle {
          0% { transform: rotate(0); }
          25% { transform: rotate(-5deg); }
          50% { transform: rotate(5deg); }
          75% { transform: rotate(-3deg); }
          100% { transform: rotate(0); }
        }
      `;
      document.head.appendChild(style);
    }

    // Spawn emojis periodically
    const interval = setInterval(() => {
      setEmojis(prev => [...prev.slice(-10), Date.now()]);
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {emojis.map(id => (
        <FloatingEmoji key={id} />
      ))}
    </>
  );
}
