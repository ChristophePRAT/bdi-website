'use client';

import { useEffect, useState, useCallback } from 'react';

const EMOJIS = ['🌍', '🌎', '🌏', '✈️', '🗺️', '🎉', '🌐', '⭐', '🎊', '🌟', '💫', '🎈'];

interface EmojiConfig {
  emoji: string;
  left: string;
  fontSize: string;
  duration: number;
}

function FloatingEmoji() {
  const [mounted, setMounted] = useState(false);
  const [config, setConfig] = useState<EmojiConfig | null>(null);

  useEffect(() => {
    requestAnimationFrame(() => {
      setConfig({
        emoji: EMOJIS[Math.floor(Math.random() * EMOJIS.length)],
        left: Math.random() * 100 + 'vw',
        fontSize: (Math.random() * 1.2 + 0.8) + 'rem',
        duration: 6000 + Math.random() * 8000
      });
      setMounted(true);
    });
  }, []);

  if (!mounted || !config) return null;

  return (
    <div 
      className="fixed pointer-events-none z-0 opacity-0 animate-[floatUp_var(--duration)_linear_infinite] select-none"
      style={{ 
        left: config.left, 
        fontSize: config.fontSize,
        '--duration': `${config.duration}ms`
      } as React.CSSProperties}
    >
      {config.emoji}
    </div>
  );
}

export default function FooterClient() {
  const [emojis, setEmojis] = useState<number[]>([]);

  const addEmoji = useCallback(() => {
    setEmojis(prev => [...prev.slice(-10), Date.now()]);
  }, []);

  useEffect(() => {
    // Add keyframe for floating animation if not exists
    if (typeof document !== 'undefined' && !document.getElementById('footer-animations')) {
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
    const interval = setInterval(addEmoji, 2500);

    return () => clearInterval(interval);
  }, [addEmoji]);

  return (
    <>
      {emojis.map(id => (
        <FloatingEmoji key={id} />
      ))}
    </>
  );
}
