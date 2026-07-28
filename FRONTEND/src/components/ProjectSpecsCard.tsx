import React from 'react';
import { motion } from 'motion/react';
import { ProjectData, Language } from '../types';

interface ProjectSpecsCardProps {
  project: ProjectData;
  language: Language;
}

export const ProjectSpecsCard: React.FC<ProjectSpecsCardProps> = ({ project, language }) => {
  const titles = {
    EN: {
      header: 'PROJECT SPECIFICATIONS',
      studio: 'Studio:',
      architects: 'Architects:',
      location: 'Location:',
      area: 'Area:',
      year: 'Year:',
      category: 'Category:',
    },
    HI: {
      header: 'प्रोजेक्ट विनिर्देश (SPECIFICATIONS)',
      studio: 'स्टूडियो:',
      architects: 'वास्तुकार:',
      location: 'स्थान:',
      area: 'क्षेत्रफल:',
      year: 'वर्ष:',
      category: 'श्रेणी:',
    },
    GU: {
      header: 'પ્રોજેક્ટ માહિતી (SPECIFICATIONS)',
      studio: 'સ્ટુડિયો:',
      architects: 'આર્કિટેક્ટ્સ:',
      location: 'સ્થળ:',
      area: 'વિસ્તાર:',
      year: 'વર્ષ:',
      category: 'કેટેગરી:',
    },
  };

  const t = titles[language];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.3 }}
      className="relative z-30 w-full max-w-sm sm:max-w-md bg-zinc-900/80 backdrop-blur-xl border border-white/20 rounded-2xl p-5 sm:p-6 shadow-2xl hover:border-white/40 transition-all group"
    >
      <div className="flex items-center justify-between mb-3 border-b border-white/10 pb-2">
        <span className="text-[10px] font-bold tracking-widest text-white/60 uppercase">
          {t.header}
        </span>
        <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-semibold bg-white/10 text-white border border-white/20">
          BUILD cotta
        </span>
      </div>

      <div className="space-y-2 text-xs sm:text-[13px] leading-relaxed text-white">
        <div className="flex items-baseline justify-between gap-2">
          <span className="text-white/60 font-medium">{t.studio}</span>
          <span className="font-bold text-white text-right font-display">{project.studio}</span>
        </div>

        <div className="flex items-baseline justify-between gap-2">
          <span className="text-white/60 font-medium">{t.architects}</span>
          <span className="font-semibold text-white text-right">{project.architects.join(', ')}</span>
        </div>

        <div className="flex items-baseline justify-between gap-2">
          <span className="text-white/60 font-medium">{t.location}</span>
          <span className="font-semibold text-white text-right">{project.location[language]}</span>
        </div>

        <div className="flex items-baseline justify-between gap-2">
          <span className="text-white/60 font-medium">{t.area}</span>
          <span className="font-bold text-white text-right font-display text-sm">{project.area}</span>
        </div>

        <div className="flex items-baseline justify-between gap-2">
          <span className="text-white/60 font-medium">{t.year}</span>
          <span className="font-bold text-white text-right font-display">{project.year}</span>
        </div>

        <div className="flex items-baseline justify-between gap-2">
          <span className="text-white/60 font-medium">{t.category}</span>
          <span className="font-semibold text-white text-right">{project.category[language]}</span>
        </div>
      </div>
    </motion.div>
  );
};

