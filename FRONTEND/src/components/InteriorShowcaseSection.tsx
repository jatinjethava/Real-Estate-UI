import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Language } from '../types';
import { Sparkles, ArrowRight, Maximize2, X, Home } from 'lucide-react';

interface InteriorShowcaseSectionProps {
  language: Language;
  onOrderClick: () => void;
}

export const InteriorShowcaseSection: React.FC<InteriorShowcaseSectionProps> = ({
  language,
  onOrderClick,
}) => {
  const [activeModalImage, setActiveModalImage] = useState<{
    url: string;
    title: string;
    desc: string;
  } | null>(null);

  const copy = {
    EN: {
      badge: 'INTERIOR ARCHITECTURE',
      tagline: 'ZROBIM INTERIORS • 2026',
      panoramaBadge: 'CONCEPT PANORAMA',
      title: 'Estelive',
      subtitle:
        'Crafting serene sanctuary spaces through avant-garde interior architecture, organic textures, and natural light harmony.',
      leftCardTitle: 'Lounge Sanctuary',
      leftCardSubtitle: 'Minimalist window lounge with daylight',
      midCardTitle: 'Central Living',
      midCardSubtitle: 'Sculptural furniture & ambient lighting',
      rightCardTitle: 'Private Suite',
      rightCardSubtitle: 'Tactile linen & acoustic warmth',
      heroTitle: 'Architectural Panorama Living',
      heroSubtitle: 'Floor-to-ceiling glass framing untouched natural landscapes',
      ctaBtn: 'EXPLORE INTERIOR CONCEPTS',
    },
    HI: {
      badge: 'आंतरिक वास्तुकला (INTERIORS)',
      tagline: 'ZROBIM इंटीरियर • 2026',
      panoramaBadge: 'अवधारणा पैनोरमा',
      title: 'Estelive',
      subtitle:
        'अवंत-गार्डे आंतरिक वास्तुकला, प्राकृतिक बनावट और प्राकृतिक रोशनी के सामंजस्य से निर्मित शांत और सुंदर स्थान।',
      leftCardTitle: 'लाउंज अभयारण्य',
      leftCardSubtitle: 'प्राकृतिक प्रकाश के साथ न्यूनतम लाउंज',
      midCardTitle: 'केंद्रीय लिविंग रूम',
      midCardSubtitle: 'मूर्तिकला फर्नीचर और विशेष रोशनी',
      rightCardTitle: 'प्राइवेट मास्टर सुइट',
      rightCardSubtitle: 'प्राकृतिक लिनन और तापीय गर्माहट',
      heroTitle: 'पैनोरामिक लिविंग स्पेस',
      heroSubtitle: 'प्राकृतिक दृश्यों को समेटती फर्श से छत तक की ग्लास दीवारें',
      ctaBtn: 'इंटीरियर डिजाइन देखें',
    },
    GU: {
      badge: 'ઈન્ટિરિયર આર્કિટેક્ચર',
      tagline: 'ZROBIM ઈન્ટિરિયર્સ • 2026',
      panoramaBadge: 'કોન્સેપ્ટ પેનોરેમા',
      title: 'Estelive',
      subtitle:
        'આધુનિક ઈન્ટિરિયર આર્કિટેક્ચર, કુદરતી ટેક્સચર અને પ્રકાશના સમન્વયથી સુંદર અને શાંત જગ્યાઓનું નિર્માણ.',
      leftCardTitle: 'લાઉન્જ વિન્ડો સ્પેસ',
      leftCardSubtitle: 'કુદરતી પ્રકાશ સાથે શાંત ખૂણો',
      midCardTitle: 'સેન્ટ્રલ લિવિંગ રૂમ',
      midCardSubtitle: 'આધુનિક ફર્નિચર અને લાઇટિંગ',
      rightCardTitle: 'પ્રાઇવેટ માસ્ટર સ્વીટ',
      rightCardSubtitle: 'સોફ્ટ લિનન અને વુડન ફિનિશ',
      heroTitle: 'પેનોરેમિક લિવિંગ સ્પેસ',
      heroSubtitle: 'જમીનથી છત સુધીના ગ્લાસમાંથી દેખાતા સુંદર નજારા',
      ctaBtn: 'ઈન્ટિરિયર ડિઝાઇન્સ જુઓ',
    },
  };

  const t = copy[language];

  const leftImage =
    'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=800&q=80';
  const midImage =
    'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=800&q=80';
  const rightImage =
    'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=800&q=80';
  const heroImage =
    'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1600&q=80';

  return (
    <section className="relative w-full py-10 sm:py-16 px-3 sm:px-8 lg:px-12 my-8 sm:my-12 bg-zinc-950/90 text-white rounded-[24px] sm:rounded-[40px] border border-white/15 shadow-2xl overflow-hidden">
      <div className="absolute inset-0 plan-grid-pattern opacity-30 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto flex flex-col items-center">
        <div className="w-full bg-[#f6f4ee] rounded-[20px] sm:rounded-[32px] p-4 sm:p-8 md:p-10 text-zinc-900 border border-stone-300 shadow-xl mb-8 sm:mb-12">

          <div className="flex items-center justify-between mb-4 sm:mb-6 pb-3 sm:pb-4 border-b border-stone-300/80">
            <div className="flex items-center gap-2">
              <span className="p-1.5 sm:p-2 rounded-xl bg-zinc-900 text-[#b08d57]">
                <Home className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              </span>
              <span className="text-[10px] sm:text-xs font-bold tracking-[0.2em] text-[#b08d57] uppercase">
                {t.badge}
              </span>
            </div>
            <span className="text-xs font-mono font-bold text-zinc-600 uppercase tracking-widest hidden sm:inline-block">
              {t.tagline}
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5 lg:gap-8">

            <motion.div
              whileHover={{ y: -6 }}
              transition={{ duration: 0.3 }}
              onClick={() =>
                setActiveModalImage({
                  url: leftImage,
                  title: t.leftCardTitle,
                  desc: t.leftCardSubtitle,
                })
              }
              className="relative group rounded-2xl overflow-hidden h-[380px] sm:h-[440px] bg-zinc-900 border border-stone-400/40 shadow-md cursor-pointer"
            >
              <img
                src={leftImage}
                alt={t.leftCardTitle}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
              <div className="absolute bottom-0 inset-x-0 p-5 text-white flex items-end justify-between">
                <div>
                  <h3 className="text-lg font-serif font-medium text-white drop-shadow">
                    {t.leftCardTitle}
                  </h3>
                  <p className="text-xs text-white/80 font-sans mt-0.5">
                    {t.leftCardSubtitle}
                  </p>
                </div>
                <button aria-label="View Full" className="p-2 rounded-full bg-white/20 backdrop-blur-md text-white group-hover:bg-[#b08d57] transition-colors">
                  <Maximize2 className="w-3.5 h-3.5" />
                </button>
              </div>
            </motion.div>

            <motion.div
              whileHover={{ y: -6 }}
              transition={{ duration: 0.3 }}
              onClick={() =>
                setActiveModalImage({
                  url: midImage,
                  title: t.midCardTitle,
                  desc: t.midCardSubtitle,
                })
              }
              className="relative group rounded-2xl overflow-hidden h-[380px] sm:h-[440px] bg-zinc-900 border border-stone-400/40 shadow-md cursor-pointer"
            >
              <img
                src={midImage}
                alt={t.midCardTitle}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
              <div className="absolute bottom-0 inset-x-0 p-5 text-white flex items-end justify-between">
                <div>
                  <h3 className="text-lg font-serif font-medium text-white drop-shadow">
                    {t.midCardTitle}
                  </h3>
                  <p className="text-xs text-white/80 font-sans mt-0.5">
                    {t.midCardSubtitle}
                  </p>
                </div>
                <button aria-label="View Full" className="p-2 rounded-full bg-white/20 backdrop-blur-md text-white group-hover:bg-[#b08d57] transition-colors">
                  <Maximize2 className="w-3.5 h-3.5" />
                </button>
              </div>
            </motion.div>

            <motion.div
              whileHover={{ y: -6 }}
              transition={{ duration: 0.3 }}
              onClick={() =>
                setActiveModalImage({
                  url: rightImage,
                  title: t.rightCardTitle,
                  desc: t.rightCardSubtitle,
                })
              }
              className="relative group rounded-2xl overflow-hidden h-[380px] sm:h-[440px] bg-zinc-900 border border-stone-400/40 shadow-md cursor-pointer"
            >
              <img
                src={rightImage}
                alt={t.rightCardTitle}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
              <div className="absolute bottom-0 inset-x-0 p-5 text-white flex items-end justify-between">
                <div>
                  <h3 className="text-lg font-serif font-medium text-white drop-shadow">
                    {t.rightCardTitle}
                  </h3>
                  <p className="text-xs text-white/80 font-sans mt-0.5">
                    {t.rightCardSubtitle}
                  </p>
                </div>
                <button aria-label="View Full" className="p-2 rounded-full bg-white/20 backdrop-blur-md text-white group-hover:bg-[#b08d57] transition-colors">
                  <Maximize2 className="w-3.5 h-3.5" />
                </button>
              </div>
            </motion.div>

          </div>
        </div>

        <div className="text-center max-w-3xl my-8 px-4">
          <div className="flex items-center justify-center gap-4 mb-4">
            <span className="w-12 h-[1px] bg-gradient-to-r from-transparent to-[#b08d57]" />
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif text-white tracking-tight font-normal">
              {t.title}
            </h2>
            <span className="w-12 h-[1px] bg-gradient-to-l from-transparent to-[#b08d57]" />
          </div>

          <p className="text-sm sm:text-base text-zinc-300 leading-relaxed font-sans font-light max-w-2xl mx-auto">
            "{t.subtitle}"
          </p>
        </div>

        <div className="w-full relative group rounded-[28px] sm:rounded-[36px] overflow-hidden border border-white/20 shadow-2xl mt-6 min-h-[380px] sm:min-h-[500px] flex items-end">
          <img
            src={heroImage}
            alt={t.heroTitle}
            referrerPolicy="no-referrer"
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-transparent" />

          <div className="relative z-10 p-6 sm:p-10 md:p-12 w-full flex flex-col sm:flex-row items-start sm:items-end justify-between gap-6">
            <div className="max-w-xl">
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-zinc-950/80 backdrop-blur-md text-[#e5c185] border border-[#b08d57]/40 mb-3">
                <Sparkles className="w-3.5 h-3.5" />
                {t.panoramaBadge}
              </span>
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-serif text-white font-medium drop-shadow-md mb-2">
                {t.heroTitle}
              </h3>
              <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed font-sans font-light">
                {t.heroSubtitle}
              </p>
            </div>

            <button
              onClick={onOrderClick}
              className="inline-flex items-center gap-3 px-6 py-3.5 rounded-full bg-white text-zinc-950 font-bold hover:bg-[#b08d57] hover:text-white transition-all duration-300 text-xs uppercase tracking-wider shadow-2xl group shrink-0 cursor-pointer"
            >
              <span>{t.ctaBtn}</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>
          </div>
        </div>

      </div>

      <AnimatePresence>
        {activeModalImage && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveModalImage(null)}
              className="fixed inset-0 bg-zinc-950/90 backdrop-blur-2xl"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative z-10 max-w-4xl w-full bg-zinc-900 border border-white/20 rounded-3xl overflow-hidden shadow-2xl"
            >
              <button
                onClick={() => setActiveModalImage(null)}
                aria-label="Close"
                className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-black/60 text-white hover:bg-white hover:text-black transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
              <img
                src={activeModalImage.url}
                alt={activeModalImage.title}
                referrerPolicy="no-referrer"
                className="w-full max-h-[75vh] object-cover"
              />
              <div className="p-6 bg-zinc-900 text-white border-t border-white/10">
                <h3 className="text-2xl font-serif font-medium">{activeModalImage.title}</h3>
                <p className="text-xs text-zinc-400 mt-1">{activeModalImage.desc}</p>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
