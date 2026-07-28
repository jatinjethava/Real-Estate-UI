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
    <div className="relative z-30 w-full max-w-7xl mx-auto px-2 sm:px-8 lg:px-12 pt-4 sm:pt-6 pb-6 sm:pb-10 flex flex-col md:flex-row items-start md:items-end justify-between gap-6 md:gap-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="flex items-center gap-3"
      >
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram Profile"
          className="w-10 h-10 sm:w-11 sm:h-11 rounded-full border border-white/25 bg-zinc-900/80 backdrop-blur-md flex items-center justify-center text-white hover:bg-[#E1306C] hover:border-[#E1306C] transition-all duration-300 group shadow-lg"
        >
          <Instagram className="w-4 h-4 transition-transform group-hover:scale-110" />
        </a>

        <a
          href="https://wa.me/1234567890"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="WhatsApp"
          className="w-10 h-10 sm:w-11 sm:h-11 rounded-full border border-white/25 bg-zinc-900/80 backdrop-blur-md flex items-center justify-center text-white hover:bg-[#25D366] hover:border-[#25D366] transition-all duration-300 group shadow-lg"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" stroke="none" className="w-4 h-4 transition-transform group-hover:scale-110">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
        </a>

        <a
          href="https://t.me"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Telegram Channel"
          className="w-10 h-10 sm:w-11 sm:h-11 rounded-full border border-white/25 bg-zinc-900/80 backdrop-blur-md flex items-center justify-center text-white hover:bg-[#0088cc] hover:border-[#0088cc] transition-all duration-300 group shadow-lg"
        >
          <Send className="w-4 h-4 transition-transform group-hover:scale-110 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </a>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.5 }}
        className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 max-w-2xl text-xs sm:text-[13px] leading-relaxed text-white/90 font-light"
      >
        <div className="border-l border-white/20 pl-3.5 sm:pl-4 py-0.5 sm:py-1">
          <p>{col1[language]}</p>
        </div>

        <div className="border-l border-white/20 pl-3.5 sm:pl-4 py-0.5 sm:py-1">
          <p>{col2[language]}</p>
        </div>
      </motion.div>
    </div>
  );
};

