
import React from 'react';
import { TiletPattern } from './TiletPattern';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 md:py-32 bg-light-gray relative overflow-hidden">
      <TiletPattern opacity={0.02} className="text-deep-earth" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 md:gap-24">
          
          {/* Professional Photo Container */}
          <div className="w-full lg:w-1/2 relative group px-4 md:px-0">
            {/* Decorative frames that appear around the image */}
            <div className="absolute -inset-2 md:-inset-4 border border-modern-gold/20 translate-x-2 translate-y-2 md:translate-x-4 md:translate-y-4 -z-10 transition-transform duration-500"></div>
            
            <div className="relative aspect-[3/4] md:aspect-[4/5] overflow-hidden shadow-2xl rounded-sm">
              <img 
                src="https://res.cloudinary.com/duijvdn0m/image/upload/v1766493058/IMG_20251204_191929_638_kevnai.jpg" 
                alt="Biniam Abura" 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000 scale-105 hover:scale-100"
              />
              {/* Overlay for "too much modern" look */}
              <div className="absolute inset-0 bg-deep-earth/10 mix-blend-overlay"></div>
            </div>

            {/* In-image label for mobile sophistication */}
            <div className="absolute bottom-6 left-0 bg-white py-2 px-6 shadow-xl -translate-x-2">
               <span className="text-[9px] font-black tracking-[0.3em] uppercase text-deep-earth">The Author</span>
            </div>
          </div>

          {/* Biography Content */}
          <div className="w-full lg:w-1/2 space-y-8 md:space-y-10">
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-6 h-[1px] bg-modern-gold"></div>
                <span className="text-[10px] font-bold tracking-[0.4em] uppercase text-modern-gold">
                  Who is Biniam?
                </span>
              </div>
              <h2 className="text-4xl md:text-6xl font-serif text-deep-earth leading-[1.1]">
                ስለ እኔ <br/>
                <span className="italic font-light text-3xl md:text-5xl">The Voice of Modern Ethiopia</span>
              </h2>
            </div>

            <div className="prose prose-lg text-gray-600 font-serif leading-relaxed space-y-6">
              <p className="text-lg md:text-xl font-medium text-deep-earth/80 border-l-2 border-modern-gold/30 pl-6 py-1">
                A critically acclaimed writer and intellectual exploring the intersections of tradition and digital modernism.
              </p>
              <p className="text-sm md:text-base opacity-90">
                Born and raised in Addis Ababa, Biniam has dedicated his life to capturing the nuances of the human experience. His writing challenges readers to confront the complexities of silence, connection, and social evolution in East Africa.
              </p>
              <p className="text-sm md:text-base opacity-90">
                Biniam believes literature is a "social contract" — a way for a community to remember its past while architecting its future.
              </p>
            </div>

            <div className="pt-8 grid grid-cols-2 gap-8 border-t border-gray-200/60">
              <div>
                <span className="text-[9px] font-bold tracking-[0.2em] uppercase text-modern-gold block mb-1">Origin</span>
                <p className="text-deep-earth font-sans text-xs md:text-sm font-semibold">Addis Ababa, ET</p>
              </div>
              <div>
                <span className="text-[9px] font-bold tracking-[0.2em] uppercase text-modern-gold block mb-1">Practice</span>
                <p className="text-deep-earth font-sans text-xs md:text-sm font-semibold">Literary Fiction</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
