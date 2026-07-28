import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FeaturedProject, Language } from '../types';
import { Plus, ArrowRight, X, MapPin, Layers, Calendar } from 'lucide-react';

interface FeaturedProjectsBentoProps {
  projects: FeaturedProject[];
  language: Language;
  onOrderClick: () => void;
}

export const FeaturedProjectsBento: React.FC<FeaturedProjectsBentoProps> = ({
  projects,
  language,
  onOrderClick,
}) => {
  const [selectedProject, setSelectedProject] = useState<FeaturedProject | null>(null);

  const horizon = projects.find((p) => p.id === 'horizon-residence') || projects[0];
  const aurora = projects.find((p) => p.id === 'aurora-office-tower') || projects[1];
  const edgewood = projects.find((p) => p.id === 'edgewood-villa') || projects[2];
  const maple = projects.find((p) => p.id === 'maple-street-residences') || projects[3];

  const translations = {
    EN: {
      badge: 'FEATURED PROJECTS',
      heading: 'Spaces That Define Excellence',
      subheading: 'Explore our architectural portfolio spanning luxury private villas, sustainable towers, and urban landmarks crafted with avant-garde minimalism.',
      viewAll: 'VIEW ALL PROJECTS',
      close: 'Close',
      inquire: 'Inquire Project',
    },
    HI: {
      badge: 'प्रमुख प्रोजेक्ट्स',
      heading: 'उत्कृष्टता को दर्शाने वाले स्थान',
      subheading: 'लक्जरी विला, संधारणीय टावरों और न्यूनतम वास्तुकला से निर्मित हमारे प्रोजेक्ट पोर्टफोलियो का अन्वेषण करें।',
      viewAll: 'सभी प्रोजेक्ट्स देखें',
      close: 'बंद करें',
      inquire: 'पूछताछ करें',
    },
    GU: {
      badge: 'મુખ્ય પ્રોજેક્ટ્સ',
      heading: 'શ્રેષ્ઠતા દર્શાવતી સુંદર જગ્યાઓ',
      subheading: 'લક્ઝરી વિલા, ટાવર્સ અને આધુનિક આર્કિટેક્ચર સાથે બનેલા અમારા પોર્ટફોલિયોને જુઓ.',
      viewAll: 'બધા પ્રોજેક્ટ્સ જુઓ',
      close: 'બંધ કરો',
      inquire: 'પૂછપરછ કરો',
    },
  };

  const t = translations[language];

  const getLoc = (p: FeaturedProject) => typeof p.location === 'object' ? p.location[language] : p.location;
  const getCat = (p: FeaturedProject) => typeof p.category === 'object' ? p.category[language] : p.category;
  const getDesc = (p: FeaturedProject) => typeof p.description === 'object' ? p.description[language] : p.description;

  return (
    <section className="relative w-full py-10 sm:py-16 px-3 sm:px-8 lg:px-12 my-8 sm:my-12 bg-[#f6f4ee] text-zinc-900 rounded-[24px] sm:rounded-[44px] shadow-2xl border border-stone-300">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-stretch gap-8 lg:gap-10">

        <div className="lg:w-1/4 flex flex-col justify-between py-2 pr-2">
          <div>
            <span className="text-[10px] sm:text-xs font-bold tracking-[0.25em] text-[#b08d57] uppercase block mb-2 sm:mb-3 font-sans">
              {t.badge}
            </span>
            <h2 className="text-2xl sm:text-4xl lg:text-4xl font-serif text-zinc-900 leading-[1.2] font-bold mb-3 sm:mb-4 tracking-tight">
              {t.heading}
            </h2>
            <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed font-sans mb-6 sm:mb-8 font-normal">
              {t.subheading}
            </p>
          </div>

          <div>
            <button
              onClick={onOrderClick}
              className="inline-flex items-center gap-3 px-5 sm:px-6 py-3 sm:py-3.5 rounded-full border border-zinc-900/40 text-zinc-900 hover:border-zinc-900 hover:bg-zinc-900 hover:text-white transition-all duration-300 text-xs font-bold uppercase tracking-wider group shadow-sm cursor-pointer"
            >
              <span>{t.viewAll}</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>
          </div>
        </div>

        <div className="lg:w-3/4 grid grid-cols-1 md:grid-cols-12 gap-4 sm:gap-5 min-h-[460px]">

          <motion.div
            whileHover={{ y: -6 }}
            transition={{ duration: 0.3 }}
            onClick={() => setSelectedProject(horizon)}
            className="md:col-span-5 relative group rounded-[28px] overflow-hidden cursor-pointer min-h-[340px] md:min-h-[460px] shadow-xl border border-black/15 flex flex-col justify-between p-5 sm:p-6"
          >
            <img
              src={horizon.imageUrl}
              alt={horizon.title}
              referrerPolicy="no-referrer"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-black/30" />

            <div className="relative z-10 flex items-center justify-between">
              <span className="px-3.5 py-1 rounded-full bg-black/70 backdrop-blur-md border border-white/20 text-[10px] font-bold uppercase tracking-widest text-[#e5c185]">
                {getCat(horizon)}
              </span>
              <span className="px-3 py-1 rounded-full bg-black/50 backdrop-blur-md border border-white/15 text-[10px] font-mono text-white/90">
                {horizon.year}
              </span>
            </div>

            <div className="relative z-10 bg-zinc-950/80 backdrop-blur-md border border-white/15 rounded-2xl p-4 flex items-end justify-between gap-3 text-white shadow-lg">
              <div>
                <h3 className="text-xl sm:text-2xl font-serif font-bold text-white drop-shadow-md">
                  {horizon.title}
                </h3>
                <p className="text-xs text-zinc-300 font-sans mt-1 flex items-center gap-1.5 font-medium">
                  <MapPin className="w-3.5 h-3.5 text-[#e5c185] shrink-0" />
                  <span>{getLoc(horizon)}</span>
                </p>
              </div>

              <button
                aria-label="View Project Details"
                className="w-10 h-10 rounded-full bg-[#b08d57] text-white flex items-center justify-center shadow-lg shrink-0 group-hover:scale-110 transition-transform"
              >
                <Plus className="w-5 h-5 transition-transform group-hover:rotate-90" />
              </button>
            </div>
          </motion.div>

          <div className="md:col-span-4 flex flex-col gap-4 sm:gap-5">

            <motion.div
              whileHover={{ y: -6 }}
              transition={{ duration: 0.3 }}
              onClick={() => setSelectedProject(aurora)}
              className="relative group rounded-[28px] overflow-hidden cursor-pointer h-1/2 min-h-[220px] shadow-xl border border-black/15 flex flex-col justify-between p-5"
            >
              <img
                src={aurora.imageUrl}
                alt={aurora.title}
                referrerPolicy="no-referrer"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-black/30" />

              <div className="relative z-10 flex items-center justify-between">
                <span className="px-3 py-1 rounded-full bg-black/70 backdrop-blur-md border border-white/20 text-[10px] font-bold uppercase tracking-widest text-[#e5c185]">
                  {getCat(aurora)}
                </span>
              </div>

              <div className="relative z-10 bg-zinc-950/80 backdrop-blur-md border border-white/15 rounded-xl p-3.5 flex items-center justify-between gap-2 text-white shadow-lg">
                <div>
                  <h3 className="text-base font-serif font-bold text-white drop-shadow-md">
                    {aurora.title}
                  </h3>
                  <p className="text-xs text-zinc-300 font-sans mt-0.5 flex items-center gap-1 font-medium">
                    <MapPin className="w-3 h-3 text-[#e5c185] shrink-0" />
                    <span>{getLoc(aurora)}</span>
                  </p>
                </div>

                <button
                  aria-label="View Project Details"
                  className="w-8.5 h-8.5 rounded-full bg-[#b08d57] text-white flex items-center justify-center shadow-md shrink-0 group-hover:scale-110 transition-transform"
                >
                  <Plus className="w-4 h-4 transition-transform group-hover:rotate-90" />
                </button>
              </div>
            </motion.div>

            <motion.div
              whileHover={{ y: -6 }}
              transition={{ duration: 0.3 }}
              onClick={() => setSelectedProject(edgewood)}
              className="relative group rounded-[28px] overflow-hidden cursor-pointer h-1/2 min-h-[220px] shadow-xl border border-black/15 flex flex-col justify-between p-5"
            >
              <img
                src={edgewood.imageUrl}
                alt={edgewood.title}
                referrerPolicy="no-referrer"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-black/30" />

              <div className="relative z-10 flex items-center justify-between">
                <span className="px-3 py-1 rounded-full bg-black/70 backdrop-blur-md border border-white/20 text-[10px] font-bold uppercase tracking-widest text-[#e5c185]">
                  {getCat(edgewood)}
                </span>
              </div>

              <div className="relative z-10 bg-zinc-950/80 backdrop-blur-md border border-white/15 rounded-xl p-3.5 flex items-center justify-between gap-2 text-white shadow-lg">
                <div>
                  <h3 className="text-base font-serif font-bold text-white drop-shadow-md">
                    {edgewood.title}
                  </h3>
                  <p className="text-xs text-zinc-300 font-sans mt-0.5 flex items-center gap-1 font-medium">
                    <MapPin className="w-3 h-3 text-[#e5c185] shrink-0" />
                    <span>{getLoc(edgewood)}</span>
                  </p>
                </div>

                <button
                  aria-label="View Project Details"
                  className="w-8.5 h-8.5 rounded-full bg-[#b08d57] text-[#ffffff] flex items-center justify-center shadow-md shrink-0 group-hover:scale-110 transition-transform"
                >
                  <Plus className="w-4 h-4 transition-transform group-hover:rotate-90" />
                </button>
              </div>
            </motion.div>
          </div>

          <motion.div
            whileHover={{ y: -6 }}
            transition={{ duration: 0.3 }}
            onClick={() => setSelectedProject(maple)}
            className="md:col-span-3 relative group rounded-[28px] overflow-hidden cursor-pointer min-h-[340px] md:min-h-[460px] shadow-xl border border-black/15 flex flex-col justify-between p-5"
          >
            <img
              src={maple.imageUrl}
              alt={maple.title}
              referrerPolicy="no-referrer"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-black/30" />

            <div className="relative z-10 flex items-center justify-between">
              <span className="px-3 py-1 rounded-full bg-black/70 backdrop-blur-md border border-white/20 text-[10px] font-bold uppercase tracking-widest text-[#e5c185]">
                {getCat(maple)}
              </span>
            </div>

            <div className="relative z-10 bg-zinc-950/80 backdrop-blur-md border border-white/15 rounded-xl p-3.5 flex items-end justify-between gap-2 text-white shadow-lg">
              <div>
                <h3 className="text-base font-serif font-bold text-white drop-shadow-md leading-tight">
                  {maple.title}
                </h3>
                <p className="text-xs text-zinc-300 font-sans mt-1 flex items-center gap-1 font-medium">
                  <MapPin className="w-3 h-3 text-[#e5c185] shrink-0" />
                  <span>{getLoc(maple)}</span>
                </p>
              </div>

              <button
                aria-label="View Project Details"
                className="w-8.5 h-8.5 rounded-full bg-[#b08d57] text-white flex items-center justify-center shadow-md shrink-0 group-hover:scale-110 transition-transform"
              >
                <Plus className="w-4 h-4 transition-transform group-hover:rotate-90" />
              </button>
            </div>
          </motion.div>

        </div>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="fixed inset-0 bg-zinc-950/85 backdrop-blur-xl"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3 }}
              className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-zinc-900 border border-white/20 rounded-3xl p-5 sm:p-8 text-white shadow-2xl z-10 my-auto"
            >
              <button
                onClick={() => setSelectedProject(null)}
                aria-label="Close modal"
                className="absolute top-6 right-6 p-2 rounded-full border border-white/20 text-white/70 hover:text-white hover:border-white transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="relative w-full h-64 sm:h-80 rounded-2xl overflow-hidden mb-6 border border-white/10">
                <img
                  src={selectedProject.imageUrl}
                  alt={selectedProject.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4 bg-zinc-950/90 backdrop-blur-md border border-white/20 px-3.5 py-1 rounded-full text-xs font-bold text-[#e5c185] uppercase tracking-wider">
                  {getCat(selectedProject)}
                </div>
              </div>

              <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/10 pb-4 mb-4">
                <div>
                  <h3 className="text-2xl sm:text-3xl font-serif text-white font-bold">
                    {selectedProject.title}
                  </h3>
                  <p className="text-xs text-zinc-300 flex items-center gap-1.5 mt-1 font-medium">
                    <MapPin className="w-3.5 h-3.5 text-[#e5c185]" />
                    <span>{getLoc(selectedProject)}</span>
                  </p>
                </div>

                <div className="flex items-center gap-3 text-xs font-mono font-medium text-white/90">
                  <span className="bg-white/10 border border-white/20 px-3 py-1 rounded-full flex items-center gap-1">
                    <Layers className="w-3 h-3 text-[#b08d57]" />
                    {selectedProject.area}
                  </span>
                  <span className="bg-white/10 border border-white/20 px-3 py-1 rounded-full flex items-center gap-1">
                    <Calendar className="w-3 h-3 text-[#b08d57]" />
                    {selectedProject.year}
                  </span>
                </div>
              </div>

              <p className="text-sm text-zinc-300 leading-relaxed font-sans mb-6 font-light">
                {getDesc(selectedProject)}
              </p>

              <div className="flex items-center justify-end gap-3 pt-2">
                <button
                  onClick={() => setSelectedProject(null)}
                  className="px-6 py-2.5 rounded-full border border-white/30 text-white hover:bg-white/10 transition-colors text-xs font-semibold cursor-pointer"
                >
                  {t.close}
                </button>
                <button
                  onClick={() => {
                    setSelectedProject(null);
                    onOrderClick();
                  }}
                  className="px-6 py-2.5 rounded-full bg-[#b08d57] hover:bg-[#c5a065] text-white font-bold transition-all text-xs uppercase tracking-wider shadow-lg cursor-pointer"
                >
                  {t.inquire}
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
