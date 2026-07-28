import React, { useState } from 'react';
import { Language } from '../types';
import { Ruler, Bed, Bath, ArrowRight, Sparkles, SlidersHorizontal, FileText } from 'lucide-react';

interface PlanFilterSearchSectionProps {
  language: Language;
  onOrderClick: () => void;
}

export const PlanFilterSearchSection: React.FC<PlanFilterSearchSectionProps> = ({
  language,
  onOrderClick,
}) => {
  const [sqftMin, setSqftMin] = useState<string>('1200');
  const [sqftMax, setSqftMax] = useState<string>('3500');
  const [bedrooms, setBedrooms] = useState<string>('3');
  const [baths, setBaths] = useState<string>('2');
  const [selectedPlanId, setSelectedPlanId] = useState<'pagoda' | 'cantilever' | 'zen'>('pagoda');

  const plansData = {
    EN: {
      pagoda: {
        label: 'Pagoda Sanctuary',
        title: 'Pagoda Pavilion CAD Concept',
        img: 'https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=1600&q=80',
        sqft: '2,400 sq ft',
        beds: '3 Bedrooms',
        baths: '2.5 Baths',
        span: '18.4m',
        desc: 'Japanese Pagoda-inspired multi-tiered roofline structure with double overhang timber eaves, raised foundation piles, and floor-to-ceiling glass walls.',
      },
      cantilever: {
        label: 'Modern Steppe Villa',
        title: 'Cantilevered Steppe Villa',
        img: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80',
        sqft: '3,200 sq ft',
        beds: '4 Bedrooms',
        baths: '3 Baths',
        span: '22.8m',
        desc: 'Modern minimalist pavilion featuring massive floating roof overhangs, monolithic concrete core, and panoramic glass facade overlooking open landscapes.',
      },
      zen: {
        label: 'Zen Courtyard House',
        title: 'Zen Courtyard Sanctuary',
        img: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1600&q=80',
        sqft: '1,850 sq ft',
        beds: '2 Bedrooms',
        baths: '2 Baths',
        span: '14.2m',
        desc: 'Inner courtyard design prioritizing privacy, acoustic warmth, natural light wells, and seamless indoor-outdoor living flow.',
      },
    },
    HI: {
      pagoda: {
        label: 'पैगोडा पैवेलियन',
        title: 'पैगोडा पैवेलियन CAD कॉन्सेप्ट',
        img: 'https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=1600&q=80',
        sqft: '2,400 वर्ग फुट',
        beds: '3 बेडरूम',
        baths: '2.5 बाथरूम',
        span: '18.4 मीटर',
        desc: 'जापानी पैगोडा से प्रेरित दोहरे ओवरहैंग वाली लकड़ी की संरचना, खंभे की नींव और फर्श से छत तक कांच की दीवारें।',
      },
      cantilever: {
        label: 'आधुनिक स्टेपी विला',
        title: 'कैंटिलीवर स्टेपी विला',
        img: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80',
        sqft: '3,200 वर्ग फुट',
        beds: '4 बेडरूम',
        baths: '3 बाथरूम',
        span: '22.8 मीटर',
        desc: 'विशाल फ्लोटिंग छत ओवरहैंग, कंक्रीट कोर और प्राकृतिक दृश्यों के साथ आधुनिक न्यूनतम पैवेलियन।',
      },
      zen: {
        label: 'ज़ेन आंगन घर',
        title: 'ज़ेन प्रांगण अभयारण्य',
        img: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1600&q=80',
        sqft: '1,850 वर्ग फुट',
        beds: '2 बेडरूम',
        baths: '2 बाथरूम',
        span: '14.2 मीटर',
        desc: 'आंतरिक प्रांगण डिजाइन जो गोपनीयता, ध्वनिरोधी गर्माहट और प्राकृतिक रोशनी को प्राथमिकता देता है।',
      },
    },
    GU: {
      pagoda: {
        label: 'પેગોડા પેવેલિયન',
        title: 'પેગોડા પેવેલિયન CAD કોન્સેપ્ટ',
        img: 'https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=1600&q=80',
        sqft: '2,400 sq ft',
        beds: '3 બેડરૂમ્સ',
        baths: '2.5 બાથરૂમ્સ',
        span: '18.4m',
        desc: 'જાપાનીઝ પેગોડાથી પ્રેરિત લાકડાની સુંદર રચના, થાંભલાનો આધાર અને જમીનથી છત સુધીના ગ્લાસ.',
      },
      cantilever: {
        label: 'આધુનિક સ્ટેપ વિલા',
        title: 'કેન્ટિલિવર્ડ સ્ટેપ વિલા',
        img: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80',
        sqft: '3,200 sq ft',
        beds: '4 બેડરૂમ્સ',
        baths: '3 બાથરૂમ્સ',
        span: '22.8m',
        desc: 'મોટી છત ઓવરહેંગ, કોંક્રિટ કોર અને સુંદર પહાડી દ્રશ્યો સાથેનું આધુનિક લક્ઝરી ઘર.',
      },
      zen: {
        label: 'ઝેન આંગણું ઘર',
        title: 'ઝેન કોર્ટયાર્ડ સ્પેસ',
        img: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1600&q=80',
        sqft: '1,850 sq ft',
        beds: '2 બેડરૂમ્સ',
        baths: '2 બાથરૂમ્સ',
        span: '14.2m',
        desc: 'અંદરના આંગણા સાથેની ડિઝાઇન જે ખાનગીપણું અને પ્રકાશને પ્રાધાન્ય આપે છે.',
      },
    },
  };

  const currentPlan = plansData[language][selectedPlanId];

  const copy = {
    EN: {
      badge: 'ARCHITECTURAL PLAN FINDER',
      title: 'Explore CAD & Elevation Drafts',
      subtitle: 'Filter bespoke minimalist architectural concepts by area, bedroom layouts, and bath suites.',
      sqftMinLabel: 'SQ FT MIN',
      sqftMaxLabel: 'SQ FT MAX',
      bedroomsLabel: 'BEDROOMS',
      bathsLabel: 'BATHS',
      browseBtn: 'Browse Plans',
      elevationBadge: 'TECHNICAL FRONT ELEVATION SCHEMATIC',
      selectCad: 'SELECT CAD CONCEPT DRAFT:',
      elevationTitle: 'Cantilevered Steppe Pavilion Concept',
      specArea: 'Total Area: 1,840 - 3,200 sq ft',
      specLevels: 'Levels: 1-2 Storey',
      orderCustom: 'REQUEST CUSTOM DRAFT',
      finishedFloor: 'FINISHED FLOOR LEVEL +3.200m',
      totalSpan: 'TOTAL SPAN:',
    },
    HI: {
      badge: 'आर्किटेक्चरल प्लान खोजें',
      title: 'CAD और एलीवेशन ड्राफ्ट देखें',
      subtitle: 'क्षेत्रफल, बेडरूम और बाथरूम लेआउट के अनुसार अनुकूलित वास्तुकला योजनाओं को फ़िल्टर करें।',
      sqftMinLabel: 'न्यूनतम वर्ग फुट',
      sqftMaxLabel: 'अधिकतम वर्ग फुट',
      bedroomsLabel: 'बेडरूम',
      bathsLabel: 'बाथरूम',
      browseBtn: 'प्लान देखें',
      elevationBadge: 'तकनीकी फ्रंट एलीवेशन नक्शा',
      selectCad: 'CAD कॉन्सेप्ट ड्राफ्ट चुनें:',
      elevationTitle: 'कैंटिलीवर स्टेप पैवेलियन कॉन्सेप्ट',
      specArea: 'कुल क्षेत्रफल: 1,840 - 3,200 वर्ग फुट',
      specLevels: 'मंजिलें: 1-2 मंजिला',
      orderCustom: 'कस्टम नक्शा ऑर्डर करें',
      finishedFloor: 'निर्मित मंजिल स्तर +3.200 मीटर',
      totalSpan: 'कुल चौड़ाई:',
    },
    GU: {
      badge: 'આર્કિટેક્ચરલ પ્લાન ફાઇન્ડર',
      title: 'CAD અને એલિવેશન ડ્રાફ્ટ્સ જુઓ',
      subtitle: 'વિસ્તાર, બેડરૂમ અને બાથરૂમ લેઆઉટ અનુસાર ખાસ આર્કિટેક્ચરલ પ્લાન્સ ફિલ્ટર કરો.',
      sqftMinLabel: 'ઓછામાં ઓછું સ્ક્વેર ફીટ',
      sqftMaxLabel: 'વધુમાં વધુ સ્ક્વેર ફીટ',
      bedroomsLabel: 'બેડરૂમ્સ',
      bathsLabel: 'બાથરૂમ્સ',
      browseBtn: 'પ્લાન્સ જુઓ',
      elevationBadge: 'ટેકનિકલ ફ્રન્ટ એલિવેશન નકશો',
      selectCad: 'CAD ડ્રાફ્ટ પસંદ કરો:',
      elevationTitle: 'કેન્ટિલેવર્ડ સ્ટેપ પેવેલિયન કોન્સેપ્ટ',
      specArea: 'કુલ વિસ્તાર: 1,840 - 3,200 sq ft',
      specLevels: 'માળ: 1-2 સ્ટોરી',
      orderCustom: 'કસ્ટમ પ્લાન ઓર્ડર કરો',
      finishedFloor: 'નિર્મિત ફ્લોર સ્તર +3.200m',
      totalSpan: 'કુલ લંબાઈ:',
    },
  };

  const t = copy[language];

  return (
    <section className="relative w-full py-16 px-4 sm:px-8 lg:px-12 my-12 bg-zinc-950/90 text-white rounded-[32px] sm:rounded-[40px] border border-white/15 shadow-2xl overflow-hidden">
      <div className="absolute inset-0 plan-grid-pattern opacity-30 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto flex flex-col items-center">
        <div className="text-center max-w-3xl mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-[11px] font-bold tracking-widest uppercase mb-3 bg-white/10 text-white border border-white/20">
            <SlidersHorizontal className="w-3.5 h-3.5 text-[#b08d57]" />
            {t.badge}
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold tracking-tight text-white mb-3">
            {t.title}
          </h2>
          <p className="text-xs sm:text-sm text-zinc-300 font-light max-w-xl mx-auto leading-relaxed">
            {t.subtitle}
          </p>
        </div>

        <div className="w-full max-w-5xl bg-zinc-900/90 border border-white/20 rounded-3xl sm:rounded-full p-2.5 sm:p-3 backdrop-blur-xl shadow-2xl mb-12">
          <div className="grid grid-cols-2 sm:grid-cols-5 items-center gap-3 sm:gap-2 text-xs">
            <div className="flex items-center gap-2.5 px-3.5 py-2 rounded-2xl sm:rounded-full bg-zinc-950/60 border border-white/10 hover:border-white/30 transition-colors">
              <Ruler className="w-4 h-4 text-[#b08d57] shrink-0" />
              <div className="flex flex-col text-left w-full">
                <span className="text-[9px] font-bold tracking-wider text-zinc-400 uppercase">
                  {t.sqftMinLabel}
                </span>
                <select
                  value={sqftMin}
                  onChange={(e) => setSqftMin(e.target.value)}
                  className="bg-transparent text-xs font-bold text-white focus:outline-none cursor-pointer pr-1"
                >
                  <option value="800" className="bg-zinc-900">800 sq ft</option>
                  <option value="1200" className="bg-zinc-900">1,200 sq ft</option>
                  <option value="1800" className="bg-zinc-900">1,800 sq ft</option>
                  <option value="2500" className="bg-zinc-900">2,500 sq ft</option>
                </select>
              </div>
            </div>

            <div className="flex items-center gap-2.5 px-3.5 py-2 rounded-2xl sm:rounded-full bg-zinc-950/60 border border-white/10 hover:border-white/30 transition-colors">
              <Ruler className="w-4 h-4 text-[#b08d57] shrink-0" />
              <div className="flex flex-col text-left w-full">
                <span className="text-[9px] font-bold tracking-wider text-zinc-400 uppercase">
                  {t.sqftMaxLabel}
                </span>
                <select
                  value={sqftMax}
                  onChange={(e) => setSqftMax(e.target.value)}
                  className="bg-transparent text-xs font-bold text-white focus:outline-none cursor-pointer pr-1"
                >
                  <option value="2000" className="bg-zinc-900">2,000 sq ft</option>
                  <option value="3500" className="bg-zinc-900">3,500 sq ft</option>
                  <option value="5000" className="bg-zinc-900">5,000 sq ft</option>
                  <option value="8000" className="bg-zinc-900">8,000+ sq ft</option>
                </select>
              </div>
            </div>

            <div className="flex items-center gap-2.5 px-3.5 py-2 rounded-2xl sm:rounded-full bg-zinc-950/60 border border-white/10 hover:border-white/30 transition-colors">
              <Bed className="w-4 h-4 text-[#b08d57] shrink-0" />
              <div className="flex flex-col text-left w-full">
                <span className="text-[9px] font-bold tracking-wider text-zinc-400 uppercase">
                  {t.bedroomsLabel}
                </span>
                <select
                  value={bedrooms}
                  onChange={(e) => setBedrooms(e.target.value)}
                  className="bg-transparent text-xs font-bold text-white focus:outline-none cursor-pointer pr-1"
                >
                  <option value="1" className="bg-zinc-900">1 Bedroom</option>
                  <option value="2" className="bg-zinc-900">2 Bedrooms</option>
                  <option value="3" className="bg-zinc-900">3 Bedrooms</option>
                  <option value="4" className="bg-zinc-900">4+ Bedrooms</option>
                </select>
              </div>
            </div>

            <div className="flex items-center gap-2.5 px-3.5 py-2 rounded-2xl sm:rounded-full bg-zinc-950/60 border border-white/10 hover:border-white/30 transition-colors">
              <Bath className="w-4 h-4 text-[#b08d57] shrink-0" />
              <div className="flex flex-col text-left w-full">
                <span className="text-[9px] font-bold tracking-wider text-zinc-400 uppercase">
                  {t.bathsLabel}
                </span>
                <select
                  value={baths}
                  onChange={(e) => setBaths(e.target.value)}
                  className="bg-transparent text-xs font-bold text-white focus:outline-none cursor-pointer pr-1"
                >
                  <option value="1" className="bg-zinc-900">1 Bath</option>
                  <option value="2" className="bg-zinc-900">2 Baths</option>
                  <option value="3" className="bg-zinc-900">3 Baths</option>
                  <option value="4" className="bg-zinc-900">4+ Baths</option>
                </select>
              </div>
            </div>

            <button
              onClick={onOrderClick}
              className="col-span-2 sm:col-span-1 w-full h-full min-h-[44px] px-5 py-2.5 rounded-2xl sm:rounded-full bg-[#b08d57] hover:bg-[#c5a065] text-white font-bold transition-all flex items-center justify-center gap-2 text-xs uppercase tracking-widest shadow-xl group cursor-pointer"
            >
              <span>{t.browseBtn}</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>

          </div>
        </div>

        <div className="w-full relative rounded-3xl sm:rounded-[36px] overflow-hidden border border-white/20 bg-[#f7f6f2] text-zinc-950 shadow-2xl flex flex-col items-center p-6 sm:p-10 md:p-12">

          <div className="absolute inset-0 plan-grid-pattern opacity-20 pointer-events-none" />

          <div className="relative z-10 flex flex-wrap items-center justify-between gap-4 w-full mb-6 pb-4 border-b border-stone-300">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-bold tracking-widest text-zinc-900 bg-stone-200 border border-stone-400 uppercase">
              <FileText className="w-3.5 h-3.5 text-[#b08d57]" />
              {t.elevationBadge}
            </span>
            <div className="flex items-center gap-3 text-xs font-mono font-bold text-stone-600">
              <span>{t.specArea}</span>
              <span className="hidden sm:inline">•</span>
              <span className="hidden sm:inline">{t.specLevels}</span>
            </div>
          </div>

          <div className="relative w-full max-w-5xl rounded-3xl overflow-hidden border border-stone-300 bg-[#f4f3ed] shadow-2xl flex flex-col items-center group">

            <div className="relative z-20 w-full flex flex-wrap items-center justify-between gap-3 p-4 bg-stone-200/90 border-b border-stone-300 backdrop-blur-md">
              <span className="text-xs font-bold text-stone-800 tracking-wider uppercase flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-[#b08d57]" />
                {t.selectCad}
              </span>
              <div className="flex flex-wrap items-center gap-2">
                {(['pagoda', 'cantilever', 'zen'] as const).map((planKey) => {
                  const planItem = plansData[language][planKey];
                  return (
                    <button
                      key={planKey}
                      onClick={() => setSelectedPlanId(planKey)}
                      className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all shadow-sm flex items-center gap-2 cursor-pointer ${selectedPlanId === planKey
                        ? 'bg-zinc-900 text-white shadow-md'
                        : 'bg-white text-stone-800 hover:bg-stone-900 hover:text-white border border-stone-300'
                        }`}
                    >
                      <span>{planItem.label}</span>
                      <span className="text-[10px] opacity-70">({planItem.sqft})</span>
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="relative w-full min-h-[380px] sm:min-h-[500px] lg:min-h-[580px] overflow-hidden flex items-center justify-center bg-[#eae8df]">

              <div className="absolute inset-0 plan-grid-pattern opacity-30 z-10 pointer-events-none" />

              <img
                src={currentPlan.img}
                alt={currentPlan.title}
                referrerPolicy="no-referrer"
                className="w-full h-[80vh] object-cover mix-blend-multiply opacity-85 transition-transform duration-1000 group-hover:scale-105 filter grayscale contrast-125"
              />

              <div className="absolute inset-0 z-20 pointer-events-none p-6 sm:p-12 flex flex-col justify-between">

                <div className="flex justify-between items-center text-[10px] sm:text-xs font-mono font-bold text-stone-900 bg-white/80 backdrop-blur-md px-3 py-1.5 rounded-lg border border-stone-400/60 shadow-md w-fit">
                  <span>ELEVATION AXIS 01-04 • HEIGHT: 8.4m • SLOPE: 28°</span>
                </div>

                <div className="w-full border-t border-dashed border-stone-800/40 relative">
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-stone-100 px-2.5 py-0.5 rounded text-[10px] font-mono font-bold text-stone-800 border border-stone-300">
                    {t.finishedFloor}
                  </span>
                </div>

                <div className="flex items-center justify-between text-[11px] font-mono font-bold text-stone-900 bg-white/90 backdrop-blur-md px-4 py-2 rounded-xl border border-stone-400/60 shadow-md">
                  <span className="flex items-center gap-2">
                    <Ruler className="w-4 h-4 text-[#b08d57]" />
                    {t.totalSpan} {currentPlan.span} ({currentPlan.sqft})
                  </span>
                  <span className="text-[#b08d57] uppercase tracking-widest hidden sm:inline">
                    {currentPlan.beds} • {currentPlan.baths}
                  </span>
                </div>
              </div>

              <div className="absolute inset-x-0 bottom-0 h-32 sm:h-44 bg-gradient-to-t from-[#f7f6f2] via-[#f7f6f2]/90 to-transparent z-30 pointer-events-none" />
            </div>

          </div>

          <div className="relative z-10 mt-8 text-center max-w-2xl">
            <h3 className="text-xl sm:text-2xl font-serif font-bold text-zinc-900 mb-2">
              {currentPlan.title}
            </h3>
            <p className="text-xs sm:text-sm text-stone-700 leading-relaxed font-sans font-normal mb-6">
              {currentPlan.desc}
            </p>
            <button
              onClick={onOrderClick}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-zinc-900 text-white font-bold hover:bg-[#b08d57] transition-colors text-xs uppercase tracking-wider shadow-lg group cursor-pointer"
            >
              <span>{t.orderCustom}</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};
