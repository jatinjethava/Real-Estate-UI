import React from 'react';
import { motion } from 'motion/react';
import { Language } from '../types';
import { Send, Instagram } from 'lucide-react';

interface ProjectDescriptionsProps {
  language: Language;
}

export const ProjectDescriptions: React.FC<ProjectDescriptionsProps> = ({ language }) => {
  const col1 = {
    EN: 'Modern minimalism in the Mongolian steppes: a compact house on piles, protected from the heat by openwork overhangs, opening with panoramic windows to endless landscapes.',
    HI: 'मंगोलियाई स्टेपी में आधुनिक न्यूनतमवाद: खंभों पर बना एक सघन घर, जो गहरे ओवरहैंग्स द्वारा गर्मी से सुरक्षित है और अंतहीन दृश्यों के लिए विस्तृत खिड़कियां प्रदान करता है।',
    GU: 'મોંગોલિયન મેદાનોમાં આધુનિક મિનિમલિઝમ: થાંભલાઓ પર બનેલું ઘર, જે ઊંડા ઓવરહેંગ્સ દ્વારા ગરમીથી સુરક્ષિત છે અને વિશાળ બારીઓ સાથે સુંદર દ્રશ્યો પૂરા પાડે છે.',
  };

  const col2 = {
    EN: 'Flexible space with sliding doors and a hidden entrance embodies the dialogue of avant-garde architecture with a harsh climate.',
    HI: 'स्लाइडिंग दरवाजों और गुप्त प्रवेश द्वार के साथ लचीला स्थान जो कठोर जलवायु के साथ आधुनिक वास्तुकला के सामंजस्य को दर्शाता है।',
    GU: 'સ્લાઇડિંગ દરવાજા અને ગુપ્ત પ્રવેશદ્વાર સાથેની જગ્યા જે વિષમ વાતાવરણ સાથે આધુનિક આર્કિટેક્ચરનો ઉત્તમ સમન્વય દર્શાવે છે.',
  };

  return (
    <div className="relative z-30 w-full max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 pt-6 pb-10 flex flex-col md:flex-row items-end justify-between gap-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="flex items-center gap-3"
      >
        <a
          href="https://behance.net"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Behance Portfolio"
          className="w-11 h-11 rounded-full border border-white/25 bg-zinc-900/80 backdrop-blur-md flex items-center justify-center text-white hover:bg-white hover:text-zinc-950 transition-all duration-300 font-bold text-xs group shadow-lg"
        >
          <span className="group-hover:scale-110 transition-transform font-display">Bē</span>
        </a>

        <a
          href="https://t.me"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Telegram Channel"
          className="w-11 h-11 rounded-full border border-white/25 bg-zinc-900/80 backdrop-blur-md flex items-center justify-center text-white hover:bg-white hover:text-zinc-950 transition-all duration-300 group shadow-lg"
        >
          <Send className="w-4 h-4 transition-transform group-hover:scale-110 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </a>

        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram Profile"
          className="w-11 h-11 rounded-full border border-white/25 bg-zinc-900/80 backdrop-blur-md flex items-center justify-center text-white hover:bg-white hover:text-zinc-950 transition-all duration-300 group shadow-lg"
        >
          <Instagram className="w-4 h-4 transition-transform group-hover:scale-110" />
        </a>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.5 }}
        className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl text-xs sm:text-[13px] leading-relaxed text-white/90 font-light"
      >
        <div className="border-l border-white/20 pl-4 py-1">
          <p>{col1[language]}</p>
        </div>

        <div className="border-l border-white/20 pl-4 py-1">
          <p>{col2[language]}</p>
        </div>
      </motion.div>
    </div>
  );
};

