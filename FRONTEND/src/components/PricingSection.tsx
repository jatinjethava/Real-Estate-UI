import React from 'react';
import { motion } from 'framer-motion';
import { Check, Sparkles } from 'lucide-react';
import { Language } from '../types';

interface PricingSectionProps {
  language: Language;
  onOrderClick: () => void;
}

export const PricingSection: React.FC<PricingSectionProps> = ({ language, onOrderClick }) => {
  const translations = {
    EN: {
      titleBg: 'OUR PRICES',
      badge: 'TRANSPARENT PRICING',
      heading: 'Choose Your Architectural Plan',
      subheading: 'Tailored architectural drafting, 3D visualization, and CAD packages for your dream estate.',
      startBtn: 'START PROJECT',
      period: '/mo',
      currency: '₹',
      plans: [
        {
          name: 'Basic',
          desc: 'Essential 2D CAD drafting & layout concepts.',
          price: '40000',
          isPopular: false,
          features: [
            '2D CAD Floor Plan Line-Drafts',
            'Basic Site & Axis Orientation',
            'PDF Schematic Export',
            '1 Revision Included',
          ],
        },
        {
          name: 'Premium',
          desc: 'Complete 3D cinematic villa & technical specs.',
          price: '190000',
          isPopular: true,
          features: [
            'Full 3D Cinematic Frame Sequence',
            'Detailed Foundation & Pile Specs',
            'Interior Showcase & Lighting Maps',
            'Unlimited CAD Revision Drafts',
          ],
        },
        {
          name: 'Extended',
          desc: 'Full turnkey architectural CAD & structural engineering.',
          price: '250000',
          isPopular: false,
          features: [
            'Complete BIM Model & Structural CAD',
            'Full Photorealistic 4K Renders',
            'Custom Landscaping & Decking CAD',
            'Dedicated Lead Architect Support',
          ],
        },
      ],
    },
    HI: {
      titleBg: 'हमारी कीमतें',
      badge: 'पारदर्शी मूल्य निर्धारण',
      heading: 'अपनी वास्तुकला योजना चुनें',
      subheading: 'आपके सपनों के घर के लिए अनुकूलित आर्किटेक्चरल ड्राफ्टिंग और 3D विज़ुअलाइज़ेशन पैकेज।',
      startBtn: 'शुरू करें',
      period: '/माह',
      currency: '₹',
      plans: [
        {
          name: 'बेसिक',
          desc: 'आवश्यक 2D CAD फ्लोर प्लान ड्राफ्ट।',
          price: '5000000',
          isPopular: false,
          features: [
            '2D CAD फ्लोर प्लान नक्शा',
            'बुनियादी साइट और अक्ष अभिविन्यास',
            'PDF नक्शा एक्सपोर्ट',
            '1 संशोधन शामिल',
          ],
        },
        {
          name: 'प्रीमियम',
          desc: 'संपूर्ण 3D सिनेमाई विला और तकनीकी विनिर्देश।',
          price: '40000',
          isPopular: true,
          features: [
            '3D सिनेमाई फ्रेम अनुक्रम',
            'विस्तृत नींव और पाइल्स नक्शा',
            'इंटीरियर शोकेस और लाइटिंग प्लान',
            'असीमित CAD संशोधन',
          ],
        },
        {
          name: 'एक्सटेंडेड',
          desc: 'पूर्ण टर्नकी आर्किटेक्चरल CAD और संरचनात्मक इंजीनियरिंग।',
          price: '250000',
          isPopular: false,
          features: [
            'पूर्ण BIM मॉडल और स्ट्रक्चरल CAD',
            'फोटोरीलिस्टिक 4K रेंडरिंग',
            'कस्टम लैंडस्केपिंग और डेकिंग नक्शा',
            'समर्पित मुख्य आर्किटेक्ट सहायता',
          ],
        },
      ],
    },
    GU: {
      titleBg: 'અમારી કિંમતો',
      badge: 'પારદર્શક ભાવ નિરધારણ',
      heading: 'તમારી આર્કિટેક્ચરલ યોજના પસંદ કરો',
      subheading: 'તમારા સ્વપ્નના ઘર માટે ખાસ આર્કિટેક્ચરલ ડ્રાફ્ટિંગ અને 3D વિઝ્યુઅલાઇઝેશન પેકેજો.',
      startBtn: 'શરૂ કરો',
      period: '/મહિનો',
      currency: '₹',
      plans: [
        {
          name: 'બેસિક',
          desc: 'જરૂરી 2D CAD ફ્લોર પ્લાન ડ્રાફ્ટ.',
          price: '40000',
          isPopular: false,
          features: [
            '2D CAD ફ્લોર પ્લાન નકશો',
            'મૂળભૂત સાઇટ અને અક્ષ દિશામાન',
            'PDF નકશો એક્સપોર્ટ',
            '1 ફેરફાર સમાવિષ્ટ',
          ],
        },
        {
          name: 'પ્રીમિયમ',
          desc: 'સંપૂર્ણ 3D સિનેમેટિક વિલા અને ટેકનિકલ નકશા.',
          price: '190000',
          isPopular: true,
          features: [
            '3D સિનેમેટિક ફ્રેમ ક્રમ',
            'વિગતવાર પાયા અને પાઇલ્સ નકશો',
            'ઇન્ટિરિયર શોકેસ અને લાઇટિંગ પ્લાન',
            'અમર્યાદિત CAD ફેરફારો',
          ],
        },
        {
          name: 'એક્સ્ટેન્ડેડ',
          desc: 'સંપૂર્ણ ટર્નકી આર્કિટેક્ચરલ CAD અને સ્ટ્રક્ચરલ એન્જિનિયરિંગ.',
          price: '250000',
          isPopular: false,
          features: [
            'સંપૂર્ણ BIM મોડેલ અને સ્ટ્રક્ચરલ CAD',
            'ફોટોરિયાલિસ્ટિક 4K રેન્ડરિંગ',
            'કસ્ટમ લેન્ડસ્કેપિંગ અને ડેકિંગ નકશો',
            'સમર્પિત મુખ્ય આર્કિટેક્ટ સપોર્ટ',
          ],
        },
      ],
    },
  };

  const t = translations[language];

  return (
    <section id="pricing" className="relative w-full py-10 sm:py-20 px-3 sm:px-8 lg:px-12 my-8 sm:my-12 bg-zinc-950/90 text-white rounded-[24px] sm:rounded-[48px] border border-white/15 shadow-2xl overflow-hidden">
      <div className="absolute inset-0 plan-grid-pattern opacity-20 pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[320px] sm:w-[600px] h-[200px] sm:h-[300px] bg-[#b08d57]/10 blur-[90px] sm:blur-[130px] pointer-events-none rounded-full" />

      <div className="absolute top-6 left-1/2 -translate-x-1/2 w-full text-center pointer-events-none select-none z-0">
        <span className="font-display text-[12vw] sm:text-[14vw] font-black uppercase tracking-tight text-white/5 leading-none block whitespace-nowrap">
          {t.titleBg}
        </span>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto flex flex-col items-center">
        <div className="text-center max-w-2xl mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3 sm:px-3.5 py-1 rounded-full text-[10px] sm:text-[11px] font-bold tracking-widest uppercase mb-2 sm:mb-3 bg-[#b08d57]/15 text-[#e5c185] border border-[#b08d57]/30">
            <Sparkles className="w-3.5 h-3.5 text-[#b08d57]" />
            {t.badge}
          </div>
          <h2 className="text-2xl sm:text-5xl font-display font-extrabold tracking-tight text-white mb-2 sm:mb-3">
            {t.heading}
          </h2>
          <p className="text-xs sm:text-sm text-zinc-400 font-light max-w-lg mx-auto leading-relaxed">
            {t.subheading}
          </p>
        </div>

        <div className="w-full grid grid-cols-1 lg:grid-cols-3 gap-5 sm:gap-8 items-center pt-2">
          {t.plans.map((plan, index) => {
            const isPremium = plan.isPopular;
            return (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className={`relative w-full rounded-[24px] sm:rounded-[44px] p-5 sm:p-9 flex flex-col justify-between transition-all duration-500 backdrop-blur-xl group ${isPremium
                  ? 'bg-zinc-900/90 border-2 border-[#b08d57] shadow-[0_0_50px_rgba(176,141,87,0.3)] lg:-translate-y-4'
                  : 'bg-zinc-900/50 border border-white/15 hover:border-[#b08d57]/60 shadow-xl'
                  }`}
              >
                {isPremium && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-[#b08d57] text-white text-[10px] font-extrabold tracking-widest uppercase shadow-[0_0_20px_rgba(176,141,87,0.6)]">
                    MOST POPULAR
                  </div>
                )}

                <div>
                  <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-white text-center mb-1">
                    {plan.name}
                  </h3>
                  <p className="text-xs text-zinc-400 text-center mb-8 h-8 flex items-center justify-center">
                    {plan.desc}
                  </p>

                  <ul className="space-y-4 mb-10 text-xs text-zinc-300 font-medium">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-3">
                        <span className="w-5 h-5 rounded-full bg-[#b08d57]/20 border border-[#b08d57]/50 flex items-center justify-center shrink-0">
                          <Check className="w-3 h-3 text-[#e5c185] stroke-[3]" />
                        </span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <div className="text-center mb-6">
                    <span className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
                      {plan.price} {t.currency}
                    </span>
                    <span className="text-xs font-semibold text-zinc-400 ml-1">
                      {t.period}
                    </span>
                  </div>

                  <button
                    onClick={onOrderClick}
                    className={`w-full py-3.5 rounded-full font-bold uppercase tracking-widest text-xs transition-all duration-300 cursor-pointer flex items-center justify-center gap-2 ${isPremium
                      ? 'bg-[#b08d57] hover:bg-[#c5a065] text-white shadow-[0_0_25px_rgba(176,141,87,0.5)] scale-[1.02]'
                      : 'bg-white/10 hover:bg-[#b08d57] text-white border border-white/20 hover:border-[#b08d57] shadow-md'
                      }`}
                  >
                    <span>{t.startBtn}</span>
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
