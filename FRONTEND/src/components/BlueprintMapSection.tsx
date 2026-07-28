import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Language } from '../types';
import {
  Layers,
  Sparkles,
  CheckCircle2,
  Info,
  Grid,
  Eye,
  EyeOff,
  ArrowRight,
} from 'lucide-react';
import { InteractiveHotspots } from './InteractiveHotspots';
import { hotspots } from '../data/projectData';

interface BlueprintMapSectionProps {
  language: Language;
  onOrderClick: () => void;
  activeHotspotId: string | null;
  onSelectHotspot: (id: string | null) => void;
}

type BlueprintTheme = 'blueprint' | 'dark';

interface RoomDetail {
  id: string;
  name: { EN: string; HI: string; GU: string };
  area: string;
  specs: { EN: string[]; HI: string[]; GU: string[] };
  description: { EN: string; HI: string; GU: string };
}

export const BlueprintMapSection: React.FC<BlueprintMapSectionProps> = ({
  language,
  onOrderClick,
  activeHotspotId,
  onSelectHotspot,
}) => {
  const [theme, setTheme] = useState<BlueprintTheme>('blueprint');
  const [selectedRoomId, setSelectedRoomId] = useState<string | null>('living');

  // Layer Toggles
  const [showAxes, setShowAxes] = useState(true);
  const [showPiles, setShowPiles] = useState(true);
  const [showDimensions, setShowDimensions] = useState(true);
  const [showLabels, setShowLabels] = useState(true);

  const rooms: Record<string, RoomDetail> = {
    master: {
      id: 'master',
      name: {
        EN: 'Master Bedroom Block',
        HI: 'मास्टर बेडरूम ब्लॉक',
        GU: 'માસ્ટર બેડરૂમ બ્લોક',
      },
      area: '28.4 m²',
      specs: {
        EN: [
          '3.2m Ceiling Height',
          'Soundproof Acoustic Wall Insulation',
          'Built-in Hidden Oak Wardrobes',
          'East Sunrise Orientation',
        ],
        HI: [
          '3.2 मीटर छत की ऊंचाई',
          'ध्वनिरोधी दीवार इन्सुलेशन',
          'इनबिल्ट ओक अलमारियां',
          'पूर्वी सूर्योदय दिशा',
        ],
        GU: [
          '3.2 મીટર છતની ઊંચાઈ',
          'સાઉન્ડપ્રૂફ અવાજ રોધક દિવાલો',
          'બિલ્ટ-ઇન ઓક કબાટો',
          'પૂર્વ સૂર્યોદય દિશા',
        ],
      },
      description: {
        EN: 'Private sanctuary block positioned on the quiet western wing, isolated from living noise.',
        HI: 'मुख्य लिविंग रूम के शोर से अलग शांत पश्चिमी विंग में स्थित निजी शयनकक्ष ब्लॉक।',
        GU: 'મુખ્ય લિવિંગ રૂમના અવાજથી અલગ શાંત પશ્ચિમી ભાગમાં આવેલો ખાનગી બેડરૂમ બ્લોક.',
      },
    },
    living: {
      id: 'living',
      name: {
        EN: 'Living - Kitchen Lounge',
        HI: 'लिविंग - किचन लाउंज',
        GU: 'લિવિંગ - કિચન લાઉન્જ',
      },
      area: '82.6 m²',
      specs: {
        EN: [
          'Full-height Panoramic Glass Wall',
          'Monolithic Concrete Fireplace Pillar',
          'Concealed Kitchen Island & Pantry',
          'Integrated Smart Climate Control',
        ],
        HI: [
          'पूर्ण ऊंचाई वाली कांच की दीवार',
          'कंक्रीट फायरप्लेस स्तंभ',
          'छिपी हुई रसोई द्वीप और पेंट्री',
          'स्मार्ट तापमान नियंत्रण प्रणाली',
        ],
        GU: [
          'પૂર્ણ ઊંચાઈવાળી ગ્લાસ વોલ',
          'કોંક્રિટ ફાયરપ્લેસ પિલર',
          'છુપાયેલું કિચન આઇલેન્ડ',
          'સ્માર્ટ ક્લાઇમેટ કંટ્રોલ',
        ],
      },
      description: {
        EN: 'Open-concept central living space with unobstructed views of the Mongolian steppe and high ceilings.',
        HI: 'मंगोलियाई स्टेपी और ऊंची छतों के निर्बाध दृश्यों के साथ ओपन-कांसेप्ट केंद्रीय लिविंग एरिया।',
        GU: 'મોંગોલિયન મેદાનો અને ઊંચી છત સાથે ખુલ્લી જગ્યાવાળો સેન્ટ્રલ લિવિંગ એરિયા.',
      },
    },
    hallway: {
      id: 'hallway',
      name: {
        EN: 'Hallway & Bath Suite',
        HI: 'हॉलवे और बाथ सुइट',
        GU: 'હોલવે અને બાથ સ્યુટ',
      },
      area: '18.2 m²',
      specs: {
        EN: [
          'Hidden Entrance Door',
          'Natural Stone Sanitary Fixtures',
          'Heated Floor Grid',
          'Technical Utility Closet',
        ],
        HI: [
          'छिपा हुआ मुख्य प्रवेश द्वार',
          'प्राकृतिक पत्थर के सेनेटरी फिटिंग्स',
          'हीटेड फ़्लोर ग्रिड',
          'तकनीकी उपयोगिता अलमारी',
        ],
        GU: [
          'છુપાયેલું મુખ્ય પ્રવેશદ્વાર',
          'કુદરતી પથ્થરની સેનિટરી ફિટિંગ્સ',
          'હીટેડ ફ્લોર ગ્રીડ',
          'ટેકનિકલ યુટિલિટી કબાટ',
        ],
      },
      description: {
        EN: 'Compact entrance foyer with thermal air-lock vestibule protecting house interior from harsh winds.',
        HI: 'कठोर हवाओं से घर के अंदरूनी हिस्से की रक्षा करने वाला थर्मल एयर-लॉक प्रवेश द्वार।',
        GU: 'ઠંડા પવનોથી ઘરની અંદરના ભાગને રક્ષણ આપતું થર્મલ એર-લોક પ્રવેશદ્વાર.',
      },
    },
    terrace: {
      id: 'terrace',
      name: {
        EN: 'Terrace Deck',
        HI: 'टेरेस डेक (छत)',
        GU: 'ટેરેસ ડેક',
      },
      area: '43.8 m²',
      specs: {
        EN: [
          'Siberian Larch Weatherproof Decking',
          'Protected by 2.4m Roof Overhang',
          'Recessed LED Step Lighting',
          'Built-in Steppe View Seating',
        ],
        HI: [
          'साइबेरियन लार्च वेदरप्रूफ डेकिंग',
          '2.4 मीटर छत के ओवरहैंग द्वारा सुरक्षित',
          'छिपी हुई एलईडी स्टेप लाइटिंग',
          'मैदानी दृश्यों के लिए बनी सीटें',
        ],
        GU: [
          'સાયબેરીયન લાર્ચ વેધરપ્રૂફ ડેકિંગ',
          '2.4 મીટર છત ઓવરહેંગ દ્વારા રક્ષિત',
          'એલઇડી સ્ટેપ લાઇટિંગ',
          'મેદાન દ્રશ્યો માટે બેઠક વ્યવસ્થા',
        ],
      },
      description: {
        EN: 'Sheltered outdoor deck extending living room space into the landscape without wind exposure.',
        HI: 'हवा के सीधे संपर्क के बिना लिविंग रूम को बाहरी परिदृश्य से जोड़ने वाला संरक्षित बाहरी डेक।',
        GU: 'પવનના સીધા સંપર્ક વિના લિવિંગ રૂમને બહારના વાતાવરણ સાથે જોડતી સુરક્ષિત ટેરેસ.',
      },
    },
  };

  const copy = {
    EN: {
      badge: 'ARCHITECTURAL VECTOR MAP & BLUEPRINT PLAN',
      title: 'BUILD cotta Floorplan & Axis Map',
      subtitle: 'Interactive architectural blueprint with clickable structural blocks, pile foundation grid, and precise dimensions.',
      themeBlueprint: 'ELECTRIC BLUEPRINT',
      themeDark: 'DARK CAD',
      layersTitle: 'LAYER VISIBILITY CONTROLS',
      axes: 'Grid Axes (A-D / 1-3)',
      piles: 'Foundation Piles',
      dimensions: 'Dimension Lines',
      labels: 'Room Labels & Areas',
      clickRoomHint: 'Click any room or dimension line to inspect architectural specs',
      roomDetailsTitle: 'SELECTED ROOM SPECIFICATIONS',
      techHighlights: 'TECHNICAL HIGHLIGHTS',
      orderBtn: 'ORDER THIS FLOORPLAN',
    },
    HI: {
      badge: 'आर्किटेक्चरल वेक्टर मैप और ब्लूप्रिंट प्लान',
      title: 'बिल्डकोटा फ़्लोर प्लान और नक्शा',
      subtitle: 'संरचनात्मक ब्लॉक, खंभे की नींव और सटीक मापों के साथ इंटरेक्टिव आर्किटेक्चरल ब्लूप्रिंट नक्शा।',
      themeBlueprint: 'इलेक्ट्रिक ब्लूप्रिंट',
      themeDark: 'डार्क सीएडी',
      layersTitle: 'परत (LAYER) नियंत्रण',
      axes: 'ग्रिड अक्ष (A-D / 1-3)',
      piles: 'नींव के खंभे (Piles)',
      dimensions: 'माप की रेखाएं',
      labels: 'कमरे का नाम और क्षेत्रफल',
      clickRoomHint: 'वास्तुकला विवरण देखने के लिए किसी भी कमरे पर क्लिक करें',
      roomDetailsTitle: 'चयनित कमरे का विवरण',
      techHighlights: 'तकनीकी विशेषताएं',
      orderBtn: 'यह फ़्लोरप्लान ऑर्डर करें',
    },
    GU: {
      badge: 'આર્કિટેક્ચરલ વેક્ટર નકશો અને બ્લૂપ્રિન્ટ પ્લાન',
      title: 'બિલ્ડકોટા ફ્લોર પ્લાન અને નકશો',
      subtitle: 'માળખાકીય બ્લોક્સ, પાઇલ ફાઉન્ડેશન અને ચોક્કસ માપો સાથેનો ઇન્ટરેક્ટિવ બ્લૂપ્રિન્ટ નકશો.',
      themeBlueprint: 'ઇલેક્ટ્રિક બ્લૂપ્રિન્ટ',
      themeDark: 'ડાર્ક CAD',
      layersTitle: 'લેયર કંટ્રોલ્સ',
      axes: 'ગ્રીડ અક્ષો (A-D / 1-3)',
      piles: 'પાઇલ્સ ફાઉન્ડેશન',
      dimensions: 'માપ રેખાઓ',
      labels: 'રૂમના નામ અને વિસ્તાર',
      clickRoomHint: 'વિગતો જોવા માટે કોઈપણ રૂમ પર ક્લિક કરો',
      roomDetailsTitle: 'પસંદ કરેલ રૂમ વિગતો',
      techHighlights: 'તકનીકી લાક્ષણિકતાઓ',
      orderBtn: 'આ પ્લાન ઓર્ડર કરો',
    },
  };

  const t = copy[language];
  const selectedRoom = selectedRoomId ? rooms[selectedRoomId] : rooms['living'];

  // Color schemes based on selected theme
  const themeStyles = {
    blueprint: {
      bg: 'bg-[#02182b]',
      cardBg: 'bg-[#01111f]/95 border-sky-500/30 text-white',
      gridColor: 'rgba(56, 189, 248, 0.2)',
      axisColor: 'rgba(56, 189, 248, 0.4)',
      wallColor: '#38bdf8',
      wallFill: 'rgba(56, 189, 248, 0.08)',
      activeRoomFill: 'rgba(56, 189, 248, 0.25)',
      activeRoomStroke: '#38bdf8',
      textColor: '#e0f2fe',
      dimColor: '#7dd3fc',
      pileColor: '#38bdf8',
    },
    dark: {
      bg: 'bg-[#0a0a0d]',
      cardBg: 'bg-zinc-900/95 border-white/20 text-white',
      gridColor: 'rgba(255, 255, 255, 0.08)',
      axisColor: 'rgba(255, 255, 255, 0.2)',
      wallColor: '#ffffff',
      wallFill: 'rgba(255, 255, 255, 0.04)',
      activeRoomFill: 'rgba(255, 255, 255, 0.2)',
      activeRoomStroke: '#ffffff',
      textColor: '#ffffff',
      dimColor: '#d4d4d8',
      pileColor: '#ffffff',
    },
  };

  const currentStyle = themeStyles[theme];

  return (
    <section
      id="blueprint-section"
      className={`relative w-full py-10 sm:py-16 px-3 sm:px-8 lg:px-12 my-8 sm:my-12 rounded-[24px] sm:rounded-[40px] border transition-colors duration-700 shadow-2xl overflow-hidden ${theme === 'blueprint'
        ? 'bg-[#02182b] border-sky-500/40 text-white'
        : 'bg-[#0a0a0d] border-white/20 text-white'
        }`}
    >
      <div className="absolute inset-0 plan-grid-pattern opacity-40 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto flex flex-col gap-6 sm:gap-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b pb-6 border-current/10">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[10px] sm:text-[11px] font-bold tracking-widest uppercase mb-2 sm:mb-3 bg-sky-500/20 text-sky-400 border border-sky-500/30">
              <Layers className="w-3.5 h-3.5" />
              {t.badge}
            </div>
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-serif font-bold tracking-tight">
              {t.title}
            </h2>
            <p className="text-xs sm:text-sm font-light opacity-80 max-w-2xl mt-2 leading-relaxed">
              {t.subtitle}
            </p>
          </div>

          <div className="flex items-center p-1 sm:p-1.5 rounded-full bg-black/30 backdrop-blur-md border border-current/20 gap-1 self-start md:self-auto">
            <button
              onClick={() => setTheme('blueprint')}
              className={`px-3 sm:px-3.5 py-1 sm:py-1.5 rounded-full text-[11px] sm:text-xs font-bold transition-all cursor-pointer ${theme === 'blueprint'
                ? 'bg-sky-500 text-zinc-950 shadow-lg'
                : 'text-current opacity-70 hover:opacity-100'
                }`}
            >
              {t.themeBlueprint}
            </button>
            <button
              onClick={() => setTheme('dark')}
              className={`px-3 sm:px-3.5 py-1 sm:py-1.5 rounded-full text-[11px] sm:text-xs font-bold transition-all cursor-pointer ${theme === 'dark'
                ? 'bg-white text-zinc-950 shadow-lg'
                : 'text-current opacity-70 hover:opacity-100'
                }`}
            >
              {t.themeDark}
            </button>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-3 sm:p-4 rounded-2xl bg-black/20 border border-current/10 text-xs mb-6 sm:mb-8">
          <span className="font-bold tracking-widest uppercase flex items-center gap-2 text-current/80 text-[11px] sm:text-xs">
            <Grid className="w-4 h-4 text-sky-400 shrink-0" />
            {t.layersTitle}:
          </span>

          <div className="flex flex-wrap items-center gap-1.5 sm:gap-3">
            <button
              onClick={() => setShowAxes(!showAxes)}
              className={`px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-xl border transition-all flex items-center gap-1.5 text-[11px] sm:text-xs font-semibold cursor-pointer ${showAxes
                ? 'bg-sky-500/20 border-sky-400 text-sky-300'
                : 'bg-black/20 border-current/20 opacity-50'
                }`}
            >
              {showAxes ? <Eye className="w-3.5 h-3.5 shrink-0" /> : <EyeOff className="w-3.5 h-3.5 shrink-0" />}
              {t.axes}
            </button>

            <button
              onClick={() => setShowPiles(!showPiles)}
              className={`px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-xl border transition-all flex items-center gap-1.5 text-[11px] sm:text-xs font-semibold cursor-pointer ${showPiles
                ? 'bg-sky-500/20 border-sky-400 text-sky-300'
                : 'bg-black/20 border-current/20 opacity-50'
                }`}
            >
              {showPiles ? <Eye className="w-3.5 h-3.5 shrink-0" /> : <EyeOff className="w-3.5 h-3.5 shrink-0" />}
              {t.piles}
            </button>

            <button
              onClick={() => setShowDimensions(!showDimensions)}
              className={`px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-xl border transition-all flex items-center gap-1.5 text-[11px] sm:text-xs font-semibold cursor-pointer ${showDimensions
                ? 'bg-sky-500/20 border-sky-400 text-sky-300'
                : 'bg-black/20 border-current/20 opacity-50'
                }`}
            >
              {showDimensions ? <Eye className="w-3.5 h-3.5 shrink-0" /> : <EyeOff className="w-3.5 h-3.5 shrink-0" />}
              {t.dimensions}
            </button>

            <button
              onClick={() => setShowLabels(!showLabels)}
              className={`px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-xl border transition-all flex items-center gap-1.5 text-[11px] sm:text-xs font-semibold cursor-pointer ${showLabels
                ? 'bg-sky-500/20 border-sky-400 text-sky-300'
                : 'bg-black/20 border-current/20 opacity-50'
                }`}
            >
              {showLabels ? <Eye className="w-3.5 h-3.5 shrink-0" /> : <EyeOff className="w-3.5 h-3.5 shrink-0" />}
              {t.labels}
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

          <div className="lg:col-span-8 relative rounded-3xl border border-current/20 shadow-2xl bg-black/40 p-4 sm:p-6 min-h-[250px] sm:min-h-[460px] flex flex-col justify-between">

            <div className="relative w-full aspect-[1200/650] flex items-center justify-center">
              <InteractiveHotspots
                hotspots={hotspots}
                activeHotspotId={activeHotspotId}
                onSelectHotspot={onSelectHotspot}
                language={language}
              />
              <svg
                viewBox="0 0 1200 650"
                className="w-full h-full select-none"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  <pattern id="sectionGrid" width="40" height="40" patternUnits="userSpaceOnUse">
                    <path d="M 40 0 L 0 0 0 40" fill="none" stroke={currentStyle.gridColor} strokeWidth="1" />
                  </pattern>
                </defs>

                <rect width="1200" height="650" fill="url(#sectionGrid)" />

                {showAxes && (
                  <g stroke={currentStyle.axisColor} strokeWidth="1" strokeDasharray="4 4">
                    <line x1="100" y1="120" x2="1100" y2="120" />
                    <line x1="100" y1="280" x2="1100" y2="280" />
                    <line x1="100" y1="480" x2="1100" y2="480" />
                    <line x1="100" y1="580" x2="1100" y2="580" />

                    <line x1="180" y1="80" x2="180" y2="600" />
                    <line x1="420" y1="80" x2="420" y2="600" />
                    <line x1="780" y1="80" x2="780" y2="600" />
                    <line x1="1020" y1="80" x2="1020" y2="600" />

                    <g fill={currentStyle.dimColor} fontSize="11" fontFamily="sans-serif">
                      <circle cx="180" cy="65" r="12" fill="none" stroke={currentStyle.axisColor} />
                      <text x="180" y="69" textAnchor="middle">A</text>
                      <circle cx="420" cy="65" r="12" fill="none" stroke={currentStyle.axisColor} />
                      <text x="420" y="69" textAnchor="middle">B</text>
                      <circle cx="780" cy="65" r="12" fill="none" stroke={currentStyle.axisColor} />
                      <text x="780" y="69" textAnchor="middle">C</text>
                      <circle cx="1020" cy="65" r="12" fill="none" stroke={currentStyle.axisColor} />
                      <text x="1020" y="69" textAnchor="middle">D</text>

                      <circle cx="140" cy="120" r="12" fill="none" stroke={currentStyle.axisColor} />
                      <text x="140" y="124" textAnchor="middle">1</text>
                      <circle cx="140" cy="280" r="12" fill="none" stroke={currentStyle.axisColor} />
                      <text x="140" y="284" textAnchor="middle">2</text>
                      <circle cx="140" cy="480" r="12" fill="none" stroke={currentStyle.axisColor} />
                      <text x="140" y="484" textAnchor="middle">3</text>
                    </g>
                  </g>
                )}

                <rect
                  x="200"
                  y="140"
                  width="800"
                  height="380"
                  fill="none"
                  stroke={currentStyle.dimColor}
                  strokeWidth="1.5"
                  strokeDasharray="6 6"
                />

                <rect
                  x="250"
                  y="180"
                  width="700"
                  height="300"
                  fill={currentStyle.wallFill}
                  stroke={currentStyle.wallColor}
                  strokeWidth="3.5"
                  rx="4"
                />

                {showPiles && (
                  <g stroke={currentStyle.pileColor} strokeWidth="1.5">
                    {[250, 420, 600, 780, 950].map((x) =>
                      [180, 330, 480].map((y) => (
                        <g key={`pile-${x}-${y}`}>
                          <circle
                            cx={x}
                            cy={y}
                            r="6"
                            fill="#01111f"
                            stroke={currentStyle.pileColor}
                            strokeWidth="1.5"
                          />
                          <line x1={x - 4} y1={y} x2={x + 4} y2={y} />
                          <line x1={x} y1={y - 4} x2={x} y2={y + 4} />
                        </g>
                      ))
                    )}
                  </g>
                )}


                <g
                  onClick={() => setSelectedRoomId('master')}
                  className="cursor-pointer group"
                >
                  <rect
                    x="270"
                    y="200"
                    width="260"
                    height="150"
                    fill={selectedRoomId === 'master' ? currentStyle.activeRoomFill : 'transparent'}
                    stroke={selectedRoomId === 'master' ? currentStyle.activeRoomStroke : currentStyle.dimColor}
                    strokeWidth={selectedRoomId === 'master' ? '3' : '1.5'}
                    className="transition-all duration-300 group-hover:opacity-80"
                  />
                  {showLabels && (
                    <>
                      <text
                        x="285"
                        y="225"
                        fill={selectedRoomId === 'master' ? '#38bdf8' : currentStyle.textColor}
                        fontSize="12"
                        fontWeight="700"
                      >
                        MASTER BEDROOM
                      </text>
                      <text x="285" y="245" fill={currentStyle.dimColor} fontSize="11">
                        28.4 m²
                      </text>
                    </>
                  )}
                </g>

                <g
                  onClick={() => setSelectedRoomId('hallway')}
                  className="cursor-pointer group"
                >
                  <rect
                    x="270"
                    y="370"
                    width="260"
                    height="90"
                    fill={selectedRoomId === 'hallway' ? currentStyle.activeRoomFill : 'transparent'}
                    stroke={selectedRoomId === 'hallway' ? currentStyle.activeRoomStroke : currentStyle.dimColor}
                    strokeWidth={selectedRoomId === 'hallway' ? '3' : '1.5'}
                    className="transition-all duration-300 group-hover:opacity-80"
                  />
                  {showLabels && (
                    <>
                      <text
                        x="285"
                        y="395"
                        fill={selectedRoomId === 'hallway' ? '#38bdf8' : currentStyle.textColor}
                        fontSize="12"
                        fontWeight="700"
                      >
                        HALLWAY & BATH
                      </text>
                      <text x="285" y="415" fill={currentStyle.dimColor} fontSize="11">
                        18.2 m²
                      </text>
                    </>
                  )}
                </g>

                <g
                  onClick={() => setSelectedRoomId('living')}
                  className="cursor-pointer group"
                >
                  <rect
                    x="550"
                    y="200"
                    width="380"
                    height="260"
                    fill={selectedRoomId === 'living' ? currentStyle.activeRoomFill : 'transparent'}
                    stroke={selectedRoomId === 'living' ? currentStyle.activeRoomStroke : currentStyle.dimColor}
                    strokeWidth={selectedRoomId === 'living' ? '3' : '2'}
                    className="transition-all duration-300 group-hover:opacity-80"
                  />
                  {showLabels && (
                    <>
                      <text
                        x="580"
                        y="235"
                        fill={selectedRoomId === 'living' ? '#38bdf8' : currentStyle.textColor}
                        fontSize="14"
                        fontWeight="800"
                      >
                        LIVING - KITCHEN
                      </text>
                      <text x="580" y="255" fill={currentStyle.dimColor} fontSize="12">
                        82.6 m²
                      </text>
                    </>
                  )}
                </g>

                <g onClick={() => setSelectedRoomId('living')} className="cursor-pointer">
                  <line
                    x1="930"
                    y1="200"
                    x2="930"
                    y2="460"
                    stroke="#38bdf8"
                    strokeWidth="5"
                    strokeDasharray="12 4"
                  />
                  <text
                    x="942"
                    y="330"
                    fill="#38bdf8"
                    fontSize="11"
                    fontFamily="sans-serif"
                    writingMode="tb"
                    className="font-bold tracking-widest"
                  >
                    PANORAMIC GLAZING
                  </text>
                </g>

                <g
                  onClick={() => setSelectedRoomId('terrace')}
                  className="cursor-pointer group"
                >
                  <rect
                    x="550"
                    y="480"
                    width="380"
                    height="80"
                    fill={selectedRoomId === 'terrace' ? currentStyle.activeRoomFill : 'transparent'}
                    stroke={selectedRoomId === 'terrace' ? currentStyle.activeRoomStroke : currentStyle.dimColor}
                    strokeWidth={selectedRoomId === 'terrace' ? '3' : '1.5'}
                    strokeDasharray="4 2"
                    className="transition-all duration-300 group-hover:opacity-80"
                  />
                  {showLabels && (
                    <text
                      x="740"
                      y="525"
                      fill={selectedRoomId === 'terrace' ? '#38bdf8' : currentStyle.dimColor}
                      fontSize="12"
                      textAnchor="middle"
                      fontWeight="700"
                    >
                      TERRACE DECK (43.8 m²)
                    </text>
                  )}
                </g>

                {showDimensions && (
                  <g stroke={currentStyle.dimColor} strokeWidth="1">
                    <line x1="250" y1="590" x2="950" y2="590" />
                    <line x1="250" y1="582" x2="250" y2="598" />
                    <line x1="950" y1="582" x2="950" y2="598" />
                    <text
                      x="600"
                      y="612"
                      fill={currentStyle.textColor}
                      fontSize="12"
                      textAnchor="middle"
                      fontFamily="sans-serif"
                      fontWeight="bold"
                    >
                      18 400 mm (18.4 m)
                    </text>

                    <line x1="1070" y1="180" x2="1070" y2="480" />
                    <line x1="1062" y1="180" x2="1078" y2="180" />
                    <line x1="1062" y1="480" x2="1078" y2="480" />
                    <text
                      x="1090"
                      y="335"
                      fill={currentStyle.textColor}
                      fontSize="12"
                      textAnchor="middle"
                      transform="rotate(90 1090 335)"
                      fontWeight="bold"
                    >
                      9 400 mm (9.4 m)
                    </text>
                  </g>
                )}

                <g transform="translate(1080, 110)">
                  <circle cx="0" cy="0" r="22" fill="none" stroke={currentStyle.dimColor} strokeWidth="1" />
                  <path d="M0 -18 L5 0 L0 -5 L-5 0 Z" fill={currentStyle.wallColor} />
                  <text
                    x="0"
                    y="-25"
                    fill={currentStyle.wallColor}
                    fontSize="10"
                    textAnchor="middle"
                    fontWeight="bold"
                  >
                    N
                  </text>
                </g>
              </svg>
            </div>

            <div className="mt-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-[11px] font-mono text-current/70 border-t border-current/10 pt-3">
              <span className="flex items-center gap-1.5">
                <Info className="w-3.5 h-3.5 text-sky-400 shrink-0" />
                {t.clickRoomHint}
              </span>
              <span className="font-bold text-sky-400 uppercase tracking-widest text-left sm:text-right">
                SCALE 1:100 • ZROBIM CAD
              </span>
            </div>
          </div>

          <div className="lg:col-span-4">
            <motion.div
              key={selectedRoom.id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
              className={`p-6 sm:p-8 rounded-3xl border shadow-2xl flex flex-col justify-between gap-6 ${currentStyle.cardBg}`}
            >
              <div>
                <div className="flex items-center justify-between border-b pb-3 border-current/10 mb-4">
                  <span className="text-[10px] font-bold tracking-widest uppercase text-sky-400 flex items-center gap-1.5">
                    <Sparkles className="w-3 h-3" />
                    {t.roomDetailsTitle}
                  </span>
                  <span className="px-2.5 py-1 rounded-full text-xs font-bold bg-sky-500/20 text-sky-400 border border-sky-500/30">
                    {selectedRoom.area}
                  </span>
                </div>

                <h3 className="text-2xl font-serif font-bold tracking-tight mb-2">
                  {selectedRoom.name[language]}
                </h3>

                <p className="text-xs leading-relaxed opacity-80 mb-6 font-light">
                  {selectedRoom.description[language]}
                </p>

                <div className="space-y-2.5">
                  <h4 className="text-[11px] font-bold uppercase tracking-wider text-current/60">
                    {t.techHighlights}:
                  </h4>
                  {selectedRoom.specs[language].map((spec, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs">
                      <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                      <span className="font-medium leading-snug">{spec}</span>
                    </div>
                  ))}
                </div>
              </div>

              <button
                onClick={onOrderClick}
                className="w-full py-3.5 px-5 bg-sky-500 hover:bg-sky-400 text-zinc-950 font-bold rounded-2xl transition-all flex items-center justify-center gap-2 text-xs uppercase tracking-widest shadow-xl group cursor-pointer"
              >
                <span>{t.orderBtn}</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};
