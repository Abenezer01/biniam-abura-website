
import React, { useState } from 'react';
import { Article } from '../types';
import { ArrowUpRight, ChevronRight } from 'lucide-react';

interface ArticlesSectionProps {
  articles: Article[];
}

export const ArticlesSection: React.FC<ArticlesSectionProps> = ({ articles }) => {
  const [filter, setFilter] = useState<string>('All');
  
  const categories = ['All', 'Politics', 'Culture', 'Philosophy', 'Economy'];
  
  const filteredArticles = filter === 'All' 
    ? articles 
    : articles.filter(a => a.category === filter);

  return (
    <section id="articles" className="py-32 bg-light-gray relative">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header Area */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-[1px] bg-modern-gold"></div>
              <span className="text-[10px] font-bold tracking-[0.4em] uppercase text-modern-gold">The Archive</span>
            </div>
            <h2 className="text-5xl font-serif text-deep-earth">Selected Writing</h2>
            <p className="text-gray-500 font-serif italic max-w-sm">Essays, opinions, and analysis published across global platforms.</p>
          </div>

          {/* Filter Navigation */}
          <div className="flex flex-wrap gap-3">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-6 py-2 text-[10px] font-bold tracking-widest uppercase rounded-full transition-all duration-500 
                  ${filter === cat 
                    ? 'bg-deep-earth text-white shadow-xl shadow-deep-earth/20 translate-y-[-2px]' 
                    : 'bg-white text-gray-400 hover:text-deep-earth border border-transparent hover:border-gray-200'
                  }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Dynamic Article Grid */}
        <div className="grid gap-8">
          {filteredArticles.map((article, idx) => (
            <a 
              key={article.id} 
              href={article.url}
              target="_blank"
              rel="noreferrer"
              className="group block relative bg-white p-10 md:p-12 border border-gray-100 hover:border-transparent transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] hover:-translate-y-3 hover:scale-[1.01] hover:shadow-[0_40px_80px_-20px_rgba(52,78,65,0.15)] active:scale-[0.98]"
              style={{ transitionDelay: `${idx * 50}ms` }}
            >
              {/* Decorative Index */}
              <span className="absolute top-10 right-10 text-6xl font-black text-gray-50 opacity-0 group-hover:opacity-100 transition-opacity duration-700 select-none">
                0{idx + 1}
              </span>

              <div className="relative z-10 flex flex-col md:flex-row justify-between gap-10">
                <div className="space-y-6 flex-1">
                  {/* Meta */}
                  <div className="flex items-center gap-4 text-[10px] font-bold tracking-[0.25em] uppercase text-gray-400 group-hover:text-modern-gold transition-colors duration-500">
                    <span>{article.publication}</span>
                    <span className="w-1 h-1 rounded-full bg-gray-200 group-hover:bg-modern-gold"></span>
                    <span>{article.date}</span>
                    <span className="px-2 py-1 bg-light-gray group-hover:bg-modern-gold/10 rounded text-[9px] transition-colors">
                      {article.category}
                    </span>
                  </div>

                  {/* Title & Underline Animation */}
                  <div className="relative inline-block">
                    <h3 className="text-3xl font-serif text-deep-earth leading-tight pr-8">
                      {article.title}
                    </h3>
                    <div className="absolute -bottom-2 left-0 w-0 h-[2px] bg-modern-gold group-hover:w-full transition-all duration-700 ease-out"></div>
                  </div>

                  <h4 className="text-xl text-gray-400 font-serif italic">
                    {article.titleAmharic}
                  </h4>

                  <p className="text-gray-500 font-serif leading-relaxed max-w-3xl line-clamp-2 group-hover:text-gray-700 transition-colors">
                    {article.excerpt}
                  </p>

                  {/* Call to Action (Reveals on Hover) */}
                  <div className="pt-4 flex items-center gap-2 text-[11px] font-bold uppercase tracking-widest text-modern-gold opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-700 delay-100">
                    Read Full Article <ChevronRight size={14} />
                  </div>
                </div>
                
                {/* Visual Icon */}
                <div className="hidden md:flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full border border-gray-100 flex items-center justify-center text-gray-300 group-hover:border-modern-gold group-hover:text-modern-gold group-hover:bg-modern-gold/5 transition-all duration-500 group-hover:rotate-45">
                    <ArrowUpRight size={28} />
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Empty State */}
        {filteredArticles.length === 0 && (
          <div className="py-20 text-center">
            <p className="text-gray-400 font-serif italic">No articles found in this category.</p>
          </div>
        )}
      </div>
    </section>
  );
};
