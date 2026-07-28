import React, { useState, useEffect } from 'react';
import { Language, BackgroundMode } from '../types';
import { ArrowUpRight, Menu, X, Layers, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface HeaderNavProps {
  language: Language;
  setLanguage: (lang: Language) => void;
  bgMode: BackgroundMode;
  setBgMode: (mode: BackgroundMode) => void;
  onOrderClick: () => void;
}

export const HeaderNav: React.FC<HeaderNavProps> = ({
  language,
  setLanguage,
  bgMode,
  setBgMode,
  onOrderClick,
}) => {
  const [activeTab, setActiveTab] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navTranslations: Record<Language, string[]> = {
    EN: ['HOME', 'ABOUT', 'PROJECTS', 'PUBLICATIONS', 'PRICING'],
    HI: ['होम', 'हमारे बारे में', 'प्रोजेक्ट्स', 'प्रकाशन', 'कीमत'],
    GU: ['હોમ', 'અમારા વિશે', 'પ્રોજેક્ટ્સ', 'પ્રકાશનો', 'કિંમત'],
  };

  const navItems = navTranslations[language];
  const sectionIds = ['home', 'about', 'featured-projects', 'publications', 'pricing'];

  const handleNavClick = (idx: number) => {
    setActiveTab(idx);
    setIsMobileMenuOpen(false);
    const targetId = sectionIds[idx];
    if (targetId === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const el = document.getElementById(targetId);
      if (el) {
        const yOffset = -90;
        const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: 'smooth' });
      }
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 140;
      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const el = document.getElementById(sectionIds[i]);
        if (el) {
          const top = el.offsetTop;
          if (scrollPosition >= top) {
            setActiveTab(i);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="sticky top-0 z-50 w-full px-4 sm:px-8 lg:px-12 py-3 lg:py-4 border-b border-white/10 bg-zinc-950/85 backdrop-blur-xl shadow-xl transition-all">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
        {/* Brand Logo */}
        <div
          onClick={() => {
            setIsMobileMenuOpen(false);
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="flex items-center gap-3 group cursor-pointer shrink-0 select-none"
        >
          <div className="grid grid-cols-3 gap-0.5 w-5 h-3.5">
            <span className="bg-white rounded-none w-1.5 h-1.5 transition-transform group-hover:scale-110"></span>
            <span className="bg-white rounded-none w-1.5 h-1.5 transition-transform group-hover:scale-110"></span>
            <span className="bg-white rounded-none w-1.5 h-1.5 transition-transform group-hover:scale-110"></span>
            <span className="bg-white rounded-none w-1.5 h-1.5 transition-transform group-hover:scale-110"></span>
            <span className="bg-white rounded-none w-1.5 h-1.5 transition-transform group-hover:scale-110"></span>
            <span className="bg-white rounded-none w-1.5 h-1.5 transition-transform group-hover:scale-110"></span>
          </div>
          <div className="flex flex-col text-left">
            <span className="text-sm font-bold tracking-widest text-white uppercase font-display">
              BUILD
            </span>
            <span className="text-[10px] font-medium tracking-widest text-white/70 -mt-1 uppercase">
              architects
            </span>
          </div>
        </div>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center justify-center gap-2">
          {navItems.map((item, idx) => {
            const isActive = activeTab === idx;
            return (
              <button
                key={item}
                onClick={() => handleNavClick(idx)}
                className={`px-4 xl:px-5 py-2 text-xs font-semibold tracking-wider rounded-full transition-all duration-300 uppercase cursor-pointer ${
                  isActive
                    ? 'bg-white text-zinc-950 shadow-lg shadow-white/10 scale-105 font-bold'
                    : 'bg-zinc-900/80 text-white/80 border border-white/20 hover:border-white/60 hover:text-white hover:bg-zinc-800'
                }`}
              >
                {item}
              </button>
            );
          })}
        </nav>

        {/* Desktop Right Controls & CTA */}
        <div className="hidden lg:flex items-center gap-4 text-xs font-semibold tracking-wider uppercase text-white">
          <div className="flex items-center bg-zinc-900 border border-white/20 rounded-full p-1 gap-1">
            {(['EN', 'HI', 'GU'] as Language[]).map((lang) => (
              <button
                key={lang}
                onClick={() => setLanguage(lang)}
                className={`px-2.5 py-1 rounded-full text-[11px] font-bold transition-all cursor-pointer ${
                  language === lang ? 'bg-[#b08d57] text-white shadow-md' : 'text-white/70 hover:text-white'
                }`}
              >
                {lang}
              </button>
            ))}
          </div>

          <button
            onClick={onOrderClick}
            className="group flex items-center gap-2 border border-white/30 hover:border-white px-4 sm:px-5 py-2 rounded-full text-xs font-bold text-white hover:bg-white hover:text-zinc-950 transition-all duration-300 cursor-pointer"
          >
            <span>
              {language === 'EN' && 'ORDER PROJECT'}
              {language === 'HI' && 'ऑर्डर प्रोजेक्ट'}
              {language === 'GU' && 'ઓર્ડર પ્રોજેક્ટ'}
            </span>
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </button>
        </div>

        {/* Mobile Controls (Language Pill + Order Button + Hamburger Toggle) */}
        <div className="flex lg:hidden items-center gap-2">
          <div className="flex items-center bg-zinc-900 border border-white/20 rounded-full p-0.5">
            {(['EN', 'HI', 'GU'] as Language[]).map((lang) => (
              <button
                key={lang}
                onClick={() => setLanguage(lang)}
                className={`px-2 py-1 rounded-full text-[10px] font-bold transition-all ${
                  language === lang ? 'bg-[#b08d57] text-white' : 'text-white/70'
                }`}
              >
                {lang}
              </button>
            ))}
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle Mobile Navigation"
            className="p-2 rounded-xl bg-zinc-900 border border-white/20 text-white hover:bg-zinc-800 transition-colors cursor-pointer"
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="lg:hidden overflow-hidden bg-zinc-950/95 border-t border-white/10 mt-3 pt-4 pb-6 px-4 rounded-2xl shadow-2xl"
          >
            <div className="flex flex-col gap-3">
              <nav className="flex flex-col gap-2">
                {navItems.map((item, idx) => {
                  const isActive = activeTab === idx;
                  return (
                    <button
                      key={item}
                      onClick={() => handleNavClick(idx)}
                      className={`w-full py-3 px-5 text-left text-xs font-bold tracking-widest rounded-xl transition-all uppercase cursor-pointer flex items-center justify-between ${
                        isActive
                          ? 'bg-white text-zinc-950 font-extrabold shadow-md'
                          : 'bg-zinc-900/60 text-white/90 border border-white/10 hover:bg-zinc-800'
                      }`}
                    >
                      <span>{item}</span>
                      <span className="text-[10px] opacity-60">0{idx + 1}</span>
                    </button>
                  );
                })}
              </nav>

              <div className="pt-3 border-t border-white/10 flex flex-col gap-3">
                <button
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    onOrderClick();
                  }}
                  className="w-full flex items-center justify-center gap-2 py-3 px-5 rounded-xl bg-[#b08d57] text-white text-xs font-bold tracking-widest uppercase hover:bg-[#c49e62] transition-colors shadow-lg cursor-pointer"
                >
                  <span>
                    {language === 'EN' && 'ORDER PROJECT'}
                    {language === 'HI' && 'ऑर्डर प्रोजेक्ट'}
                    {language === 'GU' && 'ઓર્ડર પ્રોજેક્ટ'}
                  </span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

