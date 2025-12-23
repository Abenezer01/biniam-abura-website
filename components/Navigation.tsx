
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Section } from '../types';

interface NavigationProps {
  currentSection: Section;
  onNavigate: (section: Section) => void;
}

export const Navigation: React.FC<NavigationProps> = ({ currentSection, onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: Section.HOME, label: 'Home', labelAm: 'መነሻ' },
    { id: Section.ABOUT, label: 'About', labelAm: 'ስለ እኔ' },
    { id: Section.BOOKS, label: 'Books', labelAm: 'መጽሐፍት' },
    { id: Section.ARTICLES, label: 'Articles', labelAm: 'ጽሑፎች' },
    { id: Section.CONTACT, label: 'Contact', labelAm: 'አግኙኝ' },
  ];

  const handleNavClick = (id: Section) => {
    onNavigate(id);
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <nav 
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          isScrolled 
            ? 'bg-white/95 backdrop-blur-md py-4 border-b border-gray-100 shadow-sm' 
            : 'bg-transparent py-8'
        }`}
      >
        <div className="max-w-[1920px] mx-auto px-6 md:px-16 flex justify-between items-center">
          {/* Brand / Logo */}
          <button 
            className="group z-50 relative flex flex-col items-start"
            onClick={() => handleNavClick(Section.HOME)}
          >
            <div className="flex items-baseline gap-1">
              <span className={`text-2xl md:text-3xl font-black tracking-tighter uppercase transition-colors duration-300 text-deep-earth`}>
                Biniam
              </span>
              <div className="w-1.5 h-1.5 bg-modern-gold rounded-full mb-1.5"></div>
              <span className={`text-2xl md:text-3xl font-light tracking-tight uppercase transition-colors duration-300 text-deep-earth`}>
                Abura
              </span>
            </div>
          </button>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-12">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className="relative group block"
              >
                <div className="flex flex-col items-end">
                  <span 
                    className={`text-[11px] font-bold uppercase tracking-[0.25em] transition-colors duration-300 group-hover:text-modern-gold ${
                      isScrolled ? 'text-deep-earth' : 'text-white md:text-deep-earth drop-shadow-sm'
                    }`}
                  >
                    {link.label}
                  </span>
                </div>
                
                <span className={`absolute -bottom-2 right-0 h-[2px] bg-modern-gold transition-all duration-500 ease-out ${
                  currentSection === link.id ? 'w-full' : 'w-0 group-hover:w-full'
                }`} />
              </button>
            ))}
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`md:hidden z-50 transition-colors p-2 rounded-full ${
              isMobileMenuOpen || isScrolled ? 'text-deep-earth' : 'text-deep-earth bg-white/80 backdrop-blur-sm'
            }`}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* Full Screen Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 bg-light-gray z-40 transition-all duration-700 ease-[cubic-bezier(0.87,0,0.13,1)] ${
          isMobileMenuOpen ? 'clip-path-full opacity-100' : 'clip-path-none opacity-0 pointer-events-none'
        }`}
        style={{
          clipPath: isMobileMenuOpen ? 'circle(150% at 100% 0)' : 'circle(0% at 100% 0)',
        }}
      >
        <div className="h-full w-full flex flex-col justify-center px-8 relative overflow-hidden">
           <div className="space-y-6 relative z-10">
            {navLinks.map((link, idx) => (
              <div 
                key={link.id}
                className={`transform transition-all duration-700 ${
                  isMobileMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-12 opacity-0'
                }`}
              >
                <button
                  onClick={() => handleNavClick(link.id)}
                  className="group flex items-center gap-6 w-full text-left"
                >
                  <span className={`text-4xl md:text-6xl font-black font-sans tracking-tight transition-colors duration-300 ${
                    currentSection === link.id ? 'text-deep-earth' : 'text-gray-300 group-hover:text-modern-gold'
                  }`}>
                    {link.label}
                  </span>
                  <div className="h-[1px] bg-gray-200 flex-1"></div>
                  <span className="text-lg font-serif italic text-gray-400">
                    {link.labelAm}
                  </span>
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
