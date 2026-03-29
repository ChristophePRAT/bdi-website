'use client';

export function HeroCTA({ label }: { label: string }) {
  const scrollToContent = () => {
    document.getElementById('photos')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <button 
      onClick={scrollToContent}
      className="inline-block bg-bdi-red text-white px-10 py-4 rounded-[50px] font-bold text-lg border-none cursor-pointer transition-all duration-300 hover:scale-108 hover:shadow-[0_8px_30px_rgba(230,57,70,0.5)]"
    >
      {label}
    </button>
  );
}
