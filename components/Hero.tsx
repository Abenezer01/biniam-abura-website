
import React from 'react';
import { TiletPattern } from './TiletPattern';
import { ArrowRight, MoveDown } from 'lucide-react';

interface HeroProps {
  onExplore: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExplore }) => {
  return (
    <section className="relative min-h-[100svh] w-full flex flex-col items-center justify-center overflow-hidden bg-white">
      
      {/* BACKGROUND ELEMENTS */}
      <div className="absolute inset-0 z-0">
        <TiletPattern opacity={0.03} className="text-deep-earth" />
        {/* Huge Stylized Amharic Watermark */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 select-none pointer-events-none opacity-[0.02] transform -rotate-12">
          <span className="text-[40rem] font-black whitespace-nowrap leading-none text-deep-earth">
            ኢትዮጵያ
          </span>
        </div>
      </div>

      {/* MAIN CONTENT CONTAINER */}
      <div className="max-w-[1920px] w-full mx-auto px-6 md:px-16 flex flex-col lg:flex-row items-center justify-between gap-12 relative z-10 py-20 lg:py-0">
        
        {/* TEXT CONTENT */}
        <div className="w-full lg:w-[55%] space-y-8 md:space-y-12">
          
          {/* Label */}
          <div className="flex items-center gap-4 overflow-hidden group">
             <div className="w-8 md:w-12 h-[1px] bg-modern-gold transition-all duration-700 group-hover:w-20"></div>
             <span className="text-[10px] md:text-xs font-bold tracking-[0.5em] uppercase text-gray-400">
               Contemporary Ethiopian Letters
             </span>
          </div>

          {/* Headline with Overlap Potential */}
          <div className="relative">
            <h1 className="font-serif text-6xl md:text-8xl lg:text-9xl text-deep-earth leading-[0.85] font-black tracking-tighter">
              <span className="block overflow-hidden">
                <span className="inline-block animate-in slide-in-from-bottom-full duration-700 delay-100">ARCHITECTS</span>
              </span>
              <span className="block italic font-light text-modern-gold/90 -mt-2 md:-mt-4 overflow-hidden">
                <span className="inline-block animate-in slide-in-from-bottom-full duration-700 delay-300">OF SILENCE</span>
              </span>
            </h1>
            
            {/* Amharic Translation as Sub-headline */}
            <div className="mt-4 md:mt-6 animate-in fade-in duration-1000 delay-500">
              <span className="text-xl md:text-3xl font-serif text-gray-300 font-light italic">
                የዝምታ አርክቴክቶች
              </span>
            </div>
          </div>

          {/* Description & CTA */}
          <div className="flex flex-col md:flex-row items-start md:items-center gap-10 pt-4 md:pt-8">
            <p className="font-sans text-gray-500 max-w-sm leading-relaxed text-sm md:text-base">
              Exploring the delicate balance between ancient tradition and the rapid digital evolution of East African identity.
            </p>
            
            <button 
              onClick={onExplore}
              className="group relative flex items-center gap-6 overflow-hidden"
            >
              <div className="w-14 h-14 md:w-16 md:h-16 rounded-full border border-deep-earth flex items-center justify-center group-hover:bg-deep-earth transition-all duration-500 group-hover:scale-110">
                <ArrowRight className="text-deep-earth group-hover:text-white transition-colors duration-500" size={24} />
              </div>
              <div className="flex flex-col items-start">
                <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-deep-earth">Explore</span>
                <span className="text-xs font-serif italic text-modern-gold">The Bibliography</span>
              </div>
            </button>
          </div>
        </div>

        {/* IMAGE CONTENT - MAGAZINE STYLE */}
        <div className="w-full lg:w-[40%] relative">
          <div className="relative group">
            {/* Floating Frame */}
            <div className="absolute -inset-6 border border-modern-gold/10 -z-10 translate-x-4 translate-y-4 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-1000"></div>
            
            {/* Main Image Container */}
            <div className="aspect-[4/5] overflow-hidden shadow-[0_50px_100px_-20px_rgba(52,78,65,0.25)] relative">
              <img 
                src="https://res.cloudinary.com/duijvdn0m/image/upload/v1766493058/IMG_20251204_191929_638_kevnai.jpg" 
                alt="Biniam Abura Portrait" 
                className="w-full h-full object-cover grayscale brightness-110 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000 ease-out"
              />
              {/* Image Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-deep-earth/40 to-transparent mix-blend-multiply opacity-60"></div>
            </div>

            {/* Vertical Signature / Title Plate */}
            <div className="absolute -right-4 md:-right-8 top-1/2 -translate-y-1/2 vertical-text hidden md:block">
              <span className="text-[10px] font-bold tracking-[0.5em] uppercase text-deep-earth/30">
                ADDIS ABABA • EST. 1988
              </span>
            </div>

            {/* Inset Quote Card */}
            <div className="absolute -bottom-8 -left-8 md:-left-12 bg-white p-6 md:p-8 shadow-2xl max-w-[240px] md:max-w-[280px] hidden sm:block">
              <div className="w-8 h-[2px] bg-modern-gold mb-4"></div>
              <p className="text-xs md:text-sm font-serif italic text-gray-600 leading-relaxed">
                "Literature is the social contract we sign to remember our future."
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* SCROLL INDICATOR */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 animate-bounce opacity-40">
        <span className="text-[9px] font-bold tracking-[0.3em] uppercase text-deep-earth">Scroll</span>
        <MoveDown size={14} className="text-modern-gold" />
      </div>

      <style>{`
        .vertical-text {
          writing-mode: vertical-rl;
          text-orientation: mixed;
        }
      `}</style>
    </section>
  );
};
