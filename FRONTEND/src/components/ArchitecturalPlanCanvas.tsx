import React from 'react';
import { motion } from 'framer-motion';
import { BackgroundMode, Language } from '../types';

interface ArchitecturalPlanCanvasProps {
  bgMode: BackgroundMode;
  language: Language;
  activeHotspotId: string | null;
  onSelectHotspot: (id: string | null) => void;
}

export const ArchitecturalPlanCanvas: React.FC<ArchitecturalPlanCanvasProps> = ({
  bgMode,
  isBlueprint = bgMode === 'blueprint',
}) => {
  return (
    <div className={`absolute inset-0 z-0 overflow-hidden pointer-events-none select-none transition-colors duration-700 ${isBlueprint ? 'bg-[#02182b]' : 'bg-[#0a0a0d]'}`}>
      <div className={`absolute inset-0 transition-opacity duration-700 ${bgMode === 'minimal' ? 'opacity-10' : isBlueprint ? 'opacity-80' : 'opacity-20'
        } plan-grid-pattern`} />

      <div className={`absolute inset-0 bg-radial from-transparent ${isBlueprint ? 'via-[#02182b]/60 to-[#010e1a]/95' : 'via-zinc-950/70 to-zinc-950/98'
        }`} />

      {bgMode !== 'minimal' && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.7 }}
          transition={{ duration: 1 }}
          className="absolute top-24 left-1/2 -translate-x-1/2 w-full max-w-6xl h-[70vh] flex items-center justify-center p-4 sm:p-8 pointer-events-none opacity-60"
        >
          <svg
            viewBox="0 0 1200 650"
            className="w-full h-full opacity-80 transition-all duration-700"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke={isBlueprint ? 'rgba(56, 189, 248, 0.12)' : 'rgba(255, 255, 255, 0.04)'} strokeWidth="1" />
              </pattern>
              <linearGradient id="wallGlow" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor={isBlueprint ? '#38bdf8' : '#ffffff'} stopOpacity="0.8" />
                <stop offset="100%" stopColor={isBlueprint ? '#0284c7' : '#ffffff'} stopOpacity="0.4" />
              </linearGradient>
            </defs>

            <rect width="1200" height="650" fill="url(#grid)" />

            <g stroke={isBlueprint ? 'rgba(56, 189, 248, 0.3)' : 'rgba(255, 255, 255, 0.12)'} strokeWidth="1" strokeDasharray="4 4">
              <line x1="100" y1="120" x2="1100" y2="120" />
              <line x1="100" y1="280" x2="1100" y2="280" />
              <line x1="100" y1="480" x2="1100" y2="480" />
              <line x1="100" y1="580" x2="1100" y2="580" />

              <line x1="180" y1="80" x2="180" y2="600" />
              <line x1="420" y1="80" x2="420" y2="600" />
              <line x1="780" y1="80" x2="780" y2="600" />
              <line x1="1020" y1="80" x2="1020" y2="600" />
            </g>

            <g fill={isBlueprint ? 'rgba(56, 189, 248, 0.7)' : 'rgba(255,255,255,0.5)'} fontSize="11" fontFamily="sans-serif">
              <circle cx="180" cy="65" r="12" fill="none" stroke={isBlueprint ? '#38bdf8' : 'rgba(255,255,255,0.25)'} />
              <text x="180" y="69" textAnchor="middle">A</text>
              <circle cx="420" cy="65" r="12" fill="none" stroke={isBlueprint ? '#38bdf8' : 'rgba(255,255,255,0.25)'} />
              <text x="420" y="69" textAnchor="middle">B</text>
              <circle cx="780" cy="65" r="12" fill="none" stroke={isBlueprint ? '#38bdf8' : 'rgba(255,255,255,0.25)'} />
              <text x="780" y="69" textAnchor="middle">C</text>
              <circle cx="1020" cy="65" r="12" fill="none" stroke={isBlueprint ? '#38bdf8' : 'rgba(255,255,255,0.25)'} />
              <text x="1020" y="69" textAnchor="middle">D</text>

              <circle cx="140" cy="120" r="12" fill="none" stroke={isBlueprint ? '#38bdf8' : 'rgba(255,255,255,0.25)'} />
              <text x="140" y="124" textAnchor="middle">1</text>
              <circle cx="140" cy="280" r="12" fill="none" stroke={isBlueprint ? '#38bdf8' : 'rgba(255,255,255,0.25)'} />
              <text x="140" y="284" textAnchor="middle">2</text>
              <circle cx="140" cy="480" r="12" fill="none" stroke={isBlueprint ? '#38bdf8' : 'rgba(255,255,255,0.25)'} />
              <text x="140" y="484" textAnchor="middle">3</text>
            </g>

            <rect
              x="200"
              y="140"
              width="800"
              height="380"
              fill="none"
              stroke={isBlueprint ? 'rgba(56, 189, 248, 0.5)' : 'rgba(255, 255, 255, 0.25)'}
              strokeWidth="1.5"
              strokeDasharray="6 6"
            />

            <rect
              x="250"
              y="180"
              width="700"
              height="300"
              fill={isBlueprint ? 'rgba(56, 189, 248, 0.04)' : 'rgba(255, 255, 255, 0.01)'}
              stroke="url(#wallGlow)"
              strokeWidth="3.5"
              rx="4"
            />
          </svg>
        </motion.div>
      )}

      <div className={`absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t ${isBlueprint ? 'from-[#010e1a] via-[#010e1a]/80' : 'from-zinc-950 via-zinc-950/80'
        } to-transparent pointer-events-none`} />
    </div>
  );
};
