import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, MapPin, Layers } from 'lucide-react';
import { Language } from '../types';

interface HeroTypographyProps {
  language: Language;
}

export const HeroTypography: React.FC<HeroTypographyProps> = ({ language }) => {
  const subtitles = {
    EN: {
      badge: 'ARCHITECTURAL CONCEPT 2026',
      titleMain: 'BUILD',
      titleSub: 'cotta',
      location: 'Surat, Gujarat, India',
      area: '173 m²',
      tag: 'PRIVATE ESTATE',
    },
    HI: {
      badge: 'वास्तुकला अवधारणा 2026',
      titleMain: 'बिल्ड',
      titleSub: 'कोट्टा',
      location: 'सूरत, गुजरात, भारत',
      area: '173 वर्ग मीटर',
      tag: 'निजी आवास'
    },
    GU: {
      badge: 'આર્કિટેક્ચરલ કન્સેપ્ટ 2026',
      titleMain: 'બિલ્ડ',
      titleSub: 'કોટ્ટા',
      location: 'સુરત, ગુજરાત, ભારત',
      area: '173 ચોરસ મીટર',
      tag: 'ખાનગી નિવાસ'
    },
  };

  const t = subtitles[language];

  return (
    <div className="relative z-20 w-full max-w-7xl mx-auto px-3 sm:px-8 pt-4 sm:pt-6 pb-4">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] sm:w-[800px] h-[180px] sm:h-[250px] bg-gradient-to-r from-[#b08d57]/15 via-white/10 to-[#b08d57]/15 blur-[90px] sm:blur-[120px] pointer-events-none rounded-full" />

      <div className="relative w-full flex flex-col items-center justify-center select-none py-2 sm:py-4 my-1">

        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-center justify-center gap-2 sm:gap-3 mb-3 sm:mb-4 px-2"
        >
          <span className="w-4 sm:w-16 h-[1px] shrink-0 bg-gradient-to-r from-transparent to-[#b08d57]/60" />
          <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-zinc-900/80 border border-[#b08d57]/40 text-[#e5c185] text-[9px] sm:text-[11px] font-bold tracking-widest uppercase shadow-[0_0_20px_rgba(176,141,87,0.15)] backdrop-blur-md whitespace-nowrap">
            <Sparkles className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#b08d57] shrink-0" />
            <span className="pt-[1px]">{t.badge}</span>
          </div>
          <span className="w-4 sm:w-16 h-[1px] shrink-0 bg-gradient-to-l from-transparent to-[#b08d57]/60" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          className="relative w-full text-center py-2"
        >
          <h1 className="font-display text-[18vw] sm:text-[16vw] lg:text-[13vw] font-black leading-[0.9] sm:leading-[0.85] tracking-[-0.04em] uppercase bg-gradient-to-b from-white via-zinc-100 to-white/40 bg-clip-text text-transparent drop-shadow-[0_15px_40px_rgba(255,255,255,0.12)]">
            {t.titleMain}
          </h1>

          <motion.div
            initial={{ opacity: 0, x: 25, rotate: -4 }}
            animate={{ opacity: 1, x: 0, rotate: -3 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="absolute right-0 sm:right-[5%] lg:right-[10%] bottom-[-10%] sm:bottom-[-8%] z-30 pointer-events-none"
          >
            <span className="font-script text-[14vw] sm:text-[12vw] lg:text-[9vw] font-normal text-transparent bg-clip-text bg-gradient-to-r from-[#f4d49a] via-[#b08d57] to-[#e5c185] drop-shadow-[0_12px_25px_rgba(176,141,87,0.7)] tracking-tight">
              {t.titleSub}
            </span>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-8 sm:mt-10 flex flex-wrap items-center justify-center gap-2 sm:gap-4 text-[9px] sm:text-[11px] font-semibold text-zinc-400 uppercase tracking-widest px-1 sm:px-2"
        >
          <div className="flex items-center gap-1 sm:gap-1.5 px-2 sm:px-3 py-1 sm:py-1.5 rounded-full bg-zinc-900/60 border border-white/10 text-white/80">
            <MapPin className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-[#b08d57]" />
            <span>{t.location}</span>
          </div>

          <span className="text-zinc-700 hidden sm:inline">•</span>

          <div className="flex items-center gap-1 sm:gap-1.5 px-2 sm:px-3 py-1 sm:py-1.5 rounded-full bg-zinc-900/60 border border-white/10 text-white/80">
            <Layers className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-[#b08d57]" />
            <span>{t.area}</span>
          </div>

          <span className="text-zinc-700 hidden sm:inline">•</span>

          <div className="px-2 sm:px-3 py-1 sm:py-1.5 rounded-full bg-[#b08d57]/10 border border-[#b08d57]/30 text-[#e5c185] font-bold">
            {t.tag}
          </div>
        </motion.div>
      </div>
    </div>
  );
};
