
import React, { useState } from 'react';
import { Book } from '../types';
import { X, ShoppingBag, BookOpen, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';

interface BooksSectionProps {
  books: Book[];
}

export const BooksSection: React.FC<BooksSectionProps> = ({ books }) => {
  const [selectedBook, setSelectedBook] = useState<Book | null>(null);
  const [hoveredBookId, setHoveredBookId] = useState<string>(books[0].id);

  // For the sticky preview logic
  const activePreviewBook = books.find(b => b.id === hoveredBookId) || books[0];

  return (
    <section id="books" className="py-24 md:py-32 bg-white relative overflow-hidden">
      <div className="max-w-[1920px] mx-auto px-6 md:px-16">
        
        <div className="flex flex-col md:flex-row gap-16 lg:gap-32">
          
          {/* DESKTOP COLUMN: List (Hidden on Mobile) */}
          <div className="hidden md:flex md:w-1/2 flex-col justify-center z-10">
            <div className="mb-16">
              <span className="text-xs font-bold tracking-[0.4em] uppercase text-modern-gold mb-4 block">
                Selected Works
              </span>
              <h2 className="text-5xl md:text-6xl font-serif text-deep-earth">
                The Bibliography
              </h2>
            </div>

            <div className="flex flex-col">
              {books.map((book, index) => (
                <div 
                  key={book.id}
                  className="group relative border-t border-gray-200 py-10 md:py-16 cursor-pointer transition-colors duration-500 hover:border-deep-earth"
                  onMouseEnter={() => setHoveredBookId(book.id)}
                  onClick={() => setSelectedBook(book)}
                >
                  <div className="flex items-baseline justify-between">
                    <div className="flex items-baseline gap-6 md:gap-10">
                      <span className="text-xs md:text-sm font-bold font-sans text-gray-400 group-hover:text-modern-gold transition-colors">
                        0{index + 1}
                      </span>
                      <div>
                        <h3 className="text-3xl md:text-5xl font-serif font-medium text-deep-earth group-hover:ml-4 transition-all duration-500 ease-out">
                          {book.titleAmharic}
                        </h3>
                        <p className="text-lg md:text-xl text-gray-400 mt-2 font-serif italic group-hover:ml-4 transition-all duration-500 delay-75">
                          {book.title}
                        </p>
                      </div>
                    </div>
                    
                    <div className="opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all duration-500">
                      <ArrowRight size={32} className="text-modern-gold" />
                    </div>
                  </div>
                </div>
              ))}
              <div className="border-t border-gray-200"></div>
            </div>
          </div>

          {/* DESKTOP PREVIEW: Sticky Image (Hidden on Mobile) */}
          <div className="hidden md:block md:w-1/2 relative">
            <div className="sticky top-32 h-[80vh] w-full flex items-center justify-center">
              <div className="relative w-full max-w-md aspect-[2/3]">
                <div className="absolute -inset-4 bg-deep-earth/5 transform rotate-3 scale-105 transition-transform duration-700 ease-out" 
                     style={{ transform: `rotate(${hoveredBookId === books[0].id ? '3deg' : hoveredBookId === books[1].id ? '-2deg' : '4deg'})` }}>
                </div>
                
                {books.map((book) => (
                   <img 
                    key={book.id}
                    src={book.coverUrl} 
                    alt={book.title} 
                    className={`absolute inset-0 w-full h-full object-cover shadow-2xl transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] ${
                      book.id === hoveredBookId 
                        ? 'opacity-100 translate-y-0 scale-100 rotate-0 z-20' 
                        : 'opacity-0 translate-y-12 scale-95 z-10'
                    }`}
                  />
                ))}

                <div className="absolute -bottom-12 -left-12 bg-white/90 backdrop-blur p-6 shadow-xl max-w-xs z-30 border-l-4 border-modern-gold">
                   <p className="font-serif italic text-gray-600 text-sm">
                     {activePreviewBook.synopsis}
                   </p>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* MOBILE: Redesigned Interactive Gallery */}
        <div className="md:hidden">
          <div className="mb-10 text-center">
            <span className="text-[10px] font-bold tracking-[0.4em] uppercase text-modern-gold mb-2 block">Bibliography</span>
            <h2 className="text-4xl font-serif text-deep-earth">Published Books</h2>
          </div>

          <div className="flex overflow-x-auto gap-8 snap-x snap-mandatory no-scrollbar pb-10 px-4 -mx-10">
            {books.map((book, idx) => (
              <div 
                key={book.id}
                className="snap-center shrink-0 w-[80vw] flex flex-col group"
                onClick={() => setSelectedBook(book)}
              >
                <div className="relative aspect-[3/4] w-full bg-light-gray mb-6 shadow-2xl overflow-hidden rounded-sm group-active:scale-95 transition-transform duration-300">
                  <img src={book.coverUrl} alt={book.title} className="w-full h-full object-cover" />
                  
                  {/* Floating index for mobile */}
                  <div className="absolute top-4 left-4 w-10 h-10 bg-white/90 backdrop-blur flex items-center justify-center font-bold text-xs text-deep-earth">
                    0{idx + 1}
                  </div>

                  {/* Glassmorphism Title Plate */}
                  <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
                    <h3 className="text-xl font-serif font-medium text-white mb-1">{book.titleAmharic}</h3>
                    <div className="flex items-center gap-2 text-white/60 text-xs italic">
                      <span>{book.title}</span>
                      <ArrowRight size={12} className="text-modern-gold" />
                    </div>
                  </div>
                </div>

                <div className="flex justify-between items-center px-2">
                   <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-gray-400">{book.year} Edition</span>
                   <button className="text-[10px] font-bold tracking-[0.2em] uppercase text-modern-gold flex items-center gap-1 border-b border-modern-gold/20 pb-1">
                     Details
                   </button>
                </div>
              </div>
            ))}
          </div>
          
          {/* Scroll progress dots */}
          <div className="flex justify-center gap-2 mt-4">
            {books.map((_, i) => (
              <div key={i} className={`h-1.5 rounded-full transition-all duration-300 ${i === 0 ? 'w-8 bg-modern-gold' : 'w-2 bg-gray-200'}`}></div>
            ))}
          </div>
        </div>

      </div>

      {/* Detail Slide-over Modal (Keep as is, it's already mobile-friendly) */}
      {selectedBook && (
        <div className="fixed inset-0 z-[60] flex justify-end">
          <div 
            className="absolute inset-0 bg-deep-earth/80 backdrop-blur-sm transition-opacity duration-500" 
            onClick={() => setSelectedBook(null)}
          ></div>
          
          <div className="relative w-full md:w-[600px] h-full bg-white shadow-2xl overflow-y-auto flex flex-col animate-in slide-in-from-right duration-500 ease-[cubic-bezier(0.23,1,0.32,1)]">
            <button 
              onClick={() => setSelectedBook(null)}
              className="absolute top-6 right-6 p-3 rounded-full bg-light-gray hover:bg-modern-gold hover:text-white transition-all duration-300 z-10"
            >
              <X size={24} />
            </button>

            <div className="flex-1 flex flex-col">
              <div className="min-h-[40vh] bg-light-gray relative flex items-center justify-center p-12">
                <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-deep-earth to-transparent"></div>
                <img 
                  src={selectedBook.coverUrl} 
                  alt={selectedBook.title}
                  className="h-full max-h-[300px] w-auto object-contain shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] z-10"
                />
              </div>
              
              <div className="p-10 md:p-14 space-y-8 flex-1 bg-white">
                <div>
                   <span className="text-xs font-bold tracking-widest text-modern-gold uppercase mb-2 block">{selectedBook.year} Edition</span>
                   <h2 className="text-4xl md:text-5xl font-serif font-medium text-deep-earth leading-tight mb-2">{selectedBook.titleAmharic}</h2>
                   <h3 className="text-2xl text-gray-400 font-serif italic">{selectedBook.title}</h3>
                </div>

                <div className="h-[1px] w-20 bg-gray-200"></div>

                <div className="prose prose-lg text-gray-600 font-serif leading-relaxed text-sm md:text-lg">
                  <p>{selectedBook.fullDescription}</p>
                </div>

                <div className="mt-auto pt-8">
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-2xl font-bold text-deep-earth">{selectedBook.price}</span>
                    <span className="text-sm text-green-600 bg-green-50 px-3 py-1 rounded-full">In Stock</span>
                  </div>
                  <div className="flex flex-col gap-4">
                    <button className="w-full bg-deep-earth text-white px-8 py-5 font-bold tracking-[0.2em] text-sm uppercase hover:bg-modern-gold transition-colors flex items-center justify-center gap-3">
                      <ShoppingBag size={18} /> Purchase Copy
                    </button>
                    <button className="w-full border border-gray-200 text-gray-500 px-8 py-5 font-bold tracking-[0.2em] text-sm uppercase hover:border-deep-earth hover:text-deep-earth transition-colors flex items-center justify-center gap-3">
                      <BookOpen size={18} /> Read Sample
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
