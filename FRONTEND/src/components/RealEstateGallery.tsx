import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { GalleryItem, Language } from '../types';
import { ChevronLeft, ChevronRight, Maximize2, Pause, Play, Sparkles, Building, Layers, X } from 'lucide-react';

interface RealEstateGalleryProps {
  items: GalleryItem[];
  language: Language;
}

export const RealEstateGallery: React.FC<RealEstateGalleryProps> = ({ items, language }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [fullscreenImage, setFullscreenImage] = useState<GalleryItem | null>(null);

  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % items.length);
    }, 4500);
    return () => clearInterval(interval);
  }, [isPlaying, items.length]);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % items.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + items.length) % items.length);
  };

  const currentItem = items[currentIndex];

  const getOffset = (index: number) => {
    const total = items.length;
    let diff = index - currentIndex;
    if (diff > Math.floor(total / 2)) diff -= total;
    if (diff < -Math.floor(total / 2)) diff += total;
    return diff;
  };

  return (
    <section className="relative w-full py-10 sm:py-16 px-3 sm:px-8 lg:px-12 my-8 sm:my-12 overflow-hidden rounded-3xl border border-white/15 bg-zinc-950/90 shadow-2xl">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentItem.id}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0 z-0 pointer-events-none overflow-hidden"
        >
          <img
            src={currentItem.imageUrl}
            alt={currentItem.titleEn}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover scale-110 filter blur-3xl brightness-[0.3] opacity-80"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-zinc-950/90 via-zinc-950/50 to-zinc-950/95" />
          <div className="absolute inset-0 bg-radial from-transparent via-zinc-950/40 to-zinc-950/90" />
        </motion.div>
      </AnimatePresence>

      <div className="relative z-10 max-w-7xl mx-auto flex flex-col items-center">
        <div className="w-full flex flex-col sm:flex-row items-center justify-between gap-4 mb-6 sm:mb-8 text-center sm:text-left border-b border-white/10 pb-4">
          <div className="flex items-center gap-3">
            <div className="p-2 sm:p-2.5 rounded-2xl bg-white/10 border border-white/20 text-white shadow-lg backdrop-blur-md">
              <Layers className="w-4 h-4 sm:w-5 sm:h-5" />
            </div>
            <div>
              <span className="text-[10px] font-bold tracking-widest text-white/70 uppercase">
                {language === 'RU' ? 'ВИЗУАЛИЗАЦИЯ И РЕНДЕРЫ' : 'REAL ESTATE GALLERY'}
              </span>
              <h2 className="text-lg sm:text-2xl font-bold font-display uppercase text-white tracking-tight">
                BUILD cotta — {language === 'RU' ? 'Архитектурный Обзор' : 'Architectural Views'}
              </h2>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="flex items-center gap-2 px-3 sm:px-3.5 py-1.5 rounded-full border border-white/20 bg-zinc-900/80 backdrop-blur-md text-xs font-semibold text-white hover:border-white transition-all shadow-md cursor-pointer"
            >
              {isPlaying ? (
                <>
                  <Pause className="w-3.5 h-3.5 text-white" />
                  <span>{language === 'RU' ? 'ПАУЗА' : 'PAUSE'}</span>
                </>
              ) : (
                <>
                  <Play className="w-3.5 h-3.5 text-white" />
                  <span>{language === 'RU' ? 'АВТО' : 'AUTOPLAY'}</span>
                </>
              )}
            </button>

            <span className="text-xs font-mono font-bold text-white/80 bg-zinc-900/80 border border-white/20 px-3 py-1.5 rounded-full">
              0{currentIndex + 1} / 0{items.length}
            </span>
          </div>
        </div>

        <div className="relative w-full h-[380px] sm:h-[420px] md:h-[480px] flex items-center justify-center my-2 sm:my-4">
          {items.map((item, index) => {
            const offset = getOffset(index);
            const isCenter = offset === 0;
            const isLeft = offset === -1;
            const isRight = offset === 1;
            const isFarLeft = offset === -2;
            const isFarRight = offset === 2;

            let translateX = '0%';
            let scale = 1;
            let zIndex = 30;
            let opacity = 1;
            let rotateY = 0;

            if (isCenter) {
              translateX = '0%';
              scale = 1;
              zIndex = 40;
              opacity = 1;
            } else if (isLeft) {
              translateX = '-52%';
              scale = 0.82;
              zIndex = 20;
              opacity = 0.5;
              rotateY = 10;
            } else if (isRight) {
              translateX = '52%';
              scale = 0.82;
              zIndex = 20;
              opacity = 0.5;
              rotateY = -10;
            } else if (isFarLeft) {
              translateX = '-95%';
              scale = 0.65;
              zIndex = 10;
              opacity = 0.15;
              rotateY = 18;
            } else if (isFarRight) {
              translateX = '95%';
              scale = 0.65;
              zIndex = 10;
              opacity = 0.15;
              rotateY = -18;
            } else {
              opacity = 0;
            }

            return (
              <motion.div
                key={item.id}
                onClick={() => setCurrentIndex(index)}
                animate={{
                  x: translateX,
                  scale: scale,
                  opacity: opacity,
                  rotateY: rotateY,
                }}
                transition={{
                  duration: 0.6,
                  ease: [0.16, 1, 0.3, 1],
                }}
                style={{ zIndex }}
                className={`absolute w-[92%] sm:w-[70%] max-w-[680px] h-full rounded-[24px] sm:rounded-[36px] overflow-hidden border cursor-pointer select-none shadow-2xl transition-all ${isCenter
                  ? 'border-white/50 shadow-[0_20px_50px_rgba(0,0,0,0.8)] ring-1 ring-white/30'
                  : 'border-white/15 hover:border-white/40'
                  }`}
              >
                <img
                  src={item.imageUrl}
                  alt={language === 'RU' ? item.titleRu : item.titleEn}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent opacity-90" />

                <div className="absolute top-4 left-4 sm:top-6 sm:left-6 z-20 flex items-center gap-2">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-zinc-950/80 backdrop-blur-md text-white border border-white/30 shadow-lg">
                    <Sparkles className="w-3 h-3 text-white" />
                    {language === 'RU' ? item.tagRu : item.tagEn}
                  </span>
                  <span className="hidden sm:inline-flex px-3 py-1 rounded-full text-[10px] font-medium uppercase tracking-wider bg-white/10 backdrop-blur-md text-white/90 border border-white/20">
                    {item.spec}
                  </span>
                </div>

                {isCenter && (
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setFullscreenImage(item);
                    }}
                    aria-label="View Fullscreen"
                    className="absolute top-4 right-4 sm:top-6 sm:right-6 z-20 p-2.5 rounded-full bg-zinc-950/80 hover:bg-white hover:text-zinc-950 backdrop-blur-md text-white border border-white/30 transition-all shadow-lg"
                  >
                    <Maximize2 className="w-4 h-4" />
                  </button>
                )}

                <div className="absolute bottom-0 inset-x-0 p-5 sm:p-7 z-20 flex flex-col justify-end text-left bg-gradient-to-t from-zinc-950 via-zinc-950/80 to-transparent">
                  <span className="text-[11px] sm:text-xs font-bold tracking-widest text-white/70 uppercase mb-1">
                    {language === 'RU' ? item.subtitleRu : item.subtitleEn}
                  </span>
                  <h3 className="text-lg sm:text-2xl font-bold font-display uppercase text-white tracking-tight drop-shadow-md mb-1.5">
                    {language === 'RU' ? item.titleRu : item.titleEn}
                  </h3>
                  {isCenter && (
                    <p className="text-xs sm:text-sm text-white/90 leading-relaxed max-w-xl font-normal drop-shadow">
                      {language === 'RU' ? item.descriptionRu : item.descriptionEn}
                    </p>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>

        <div className="flex items-center gap-6 mt-6">
          <button
            onClick={handlePrev}
            aria-label="Previous Slide"
            className="w-12 h-12 rounded-full border border-white/30 bg-zinc-900/80 hover:bg-white hover:text-zinc-950 text-white flex items-center justify-center transition-all duration-300 shadow-xl group"
          >
            <ChevronLeft className="w-6 h-6 transition-transform group-hover:-translate-x-0.5" />
          </button>

          <div className="flex items-center gap-2">
            {items.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                aria-label={`Go to slide ${idx + 1}`}
                className={`h-2 rounded-full transition-all duration-300 ${currentIndex === idx ? 'w-8 bg-white' : 'w-2 bg-white/30 hover:bg-white/60'
                  }`}
              />
            ))}
          </div>

          <button
            onClick={handleNext}
            aria-label="Next Slide"
            className="w-12 h-12 rounded-full border border-white/30 bg-zinc-900/80 hover:bg-white hover:text-zinc-950 text-white flex items-center justify-center transition-all duration-300 shadow-xl group"
          >
            <ChevronRight className="w-6 h-6 transition-transform group-hover:translate-x-0.5" />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {fullscreenImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-zinc-950/95 backdrop-blur-2xl flex items-center justify-center p-4 sm:p-8"
            onClick={() => setFullscreenImage(null)}
          >

            <div
              className="relative max-w-5xl w-full max-h-[90dvh] sm:max-h-[90vh] rounded-3xl overflow-hidden border border-white/20 shadow-2xl flex flex-col bg-zinc-900"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative flex-1 w-full min-h-0 overflow-hidden flex items-center justify-center bg-black">
                <img
                  src={fullscreenImage.imageUrl}
                  alt={fullscreenImage.title[language]}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-contain mx-auto"
                />
                <button
                  onClick={() => setFullscreenImage(null)}
                  className="absolute top-3 right-3 sm:top-4 sm:right-4 p-2 sm:p-2.5 rounded-full bg-black/40 hover:bg-white hover:text-zinc-950 text-white border border-white/20 transition-all z-10 backdrop-blur-md shadow-lg"
                >
                  <X className="w-4 h-4 sm:w-5 sm:h-5" />
                </button>
              </div>
              <div className="shrink-0 p-4 sm:p-6 bg-zinc-900 border-t border-white/10 text-white overflow-y-auto max-h-[30vh]">
                <span className="text-[10px] sm:text-xs font-bold text-white/60 uppercase tracking-widest">
                  {fullscreenImage.tag[language]} • {fullscreenImage.spec}
                </span>
                <h3 className="text-lg sm:text-xl font-bold font-display uppercase mt-1 tracking-tight">
                  {fullscreenImage.title[language]}
                </h3>
                <p className="text-[11px] sm:text-xs text-white/80 mt-1.5 sm:mt-2 leading-relaxed">
                  {fullscreenImage.description[language]}
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
