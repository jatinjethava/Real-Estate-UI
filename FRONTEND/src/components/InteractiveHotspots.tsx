import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Hotspot, Language } from '../types';
import { Info, X, Sparkles } from 'lucide-react';

interface InteractiveHotspotsProps {
  hotspots: Hotspot[];
  activeHotspotId: string | null;
  onSelectHotspot: (id: string | null) => void;
  language: Language;
}

export const InteractiveHotspots: React.FC<InteractiveHotspotsProps> = ({
  hotspots,
  activeHotspotId,
  onSelectHotspot,
  language,
}) => {
  return (
    <>
      {hotspots.map((spot) => {
        const isActive = activeHotspotId === spot.id;
        return (
          <div
            key={spot.id}
            style={{ left: `${spot.x}%`, top: `${spot.y}%` }}
            className="absolute z-40 -translate-x-1/2 -translate-y-1/2"
          >
            <button
              onClick={() => onSelectHotspot(isActive ? null : spot.id)}
              aria-label={spot.title[language]}
              className="relative group focus:outline-none"
            >
              <span className="absolute -inset-3 rounded-full bg-white/20 animate-ping opacity-75 group-hover:bg-white/40" />
              <span className={`relative flex items-center justify-center w-6 h-6 rounded-full border-2 transition-all duration-300 ${isActive
                ? 'bg-white text-zinc-950 border-white scale-125 shadow-[0_0_15px_rgba(255,255,255,0.8)]'
                : 'bg-zinc-900/90 text-white border-white/80 hover:border-white hover:bg-white hover:text-zinc-950 scale-100'
                }`}>
                <span className="w-2 h-2 rounded-full bg-current" />
              </span>
            </button>

            <AnimatePresence>
              {isActive && (
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 5, scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                  className={`absolute bottom-full mb-3 w-56 sm:w-72 p-3.5 sm:p-4 rounded-xl bg-zinc-950/95 border border-white/30 text-white shadow-2xl backdrop-blur-2xl pointer-events-auto ${spot.x < 30
                    ? 'left-0 translate-x-0'
                    : spot.x > 70
                      ? 'right-0 left-auto translate-x-0'
                      : 'left-1/2 -translate-x-1/2'
                    }`}
                >
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <span className="inline-flex items-center gap-1 text-[10px] font-bold tracking-widest text-zinc-950 bg-white px-2 py-0.5 rounded-full uppercase">
                      <Sparkles className="w-2.5 h-2.5" />
                      {spot.tag[language]}
                    </span>
                    <button
                      onClick={() => onSelectHotspot(null)}
                      className="text-white/60 hover:text-white p-0.5 cursor-pointer"
                    >
                      <X className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  <h4 className="text-xs sm:text-sm font-bold text-white font-display mb-1">
                    {spot.title[language]}
                  </h4>

                  <p className="text-[11px] sm:text-xs text-white/80 leading-relaxed">
                    {spot.description[language]}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </>
  );
};

