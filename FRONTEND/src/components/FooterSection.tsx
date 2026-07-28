import React, { useState } from 'react';
import { Language } from '../types';
import { ArrowUpRight, Mail, Phone, MapPin, Send, Instagram, Linkedin, Youtube, ArrowUp, Globe, CheckCircle2 } from 'lucide-react';

interface FooterSectionProps {
  language: Language;
  onOrderClick: () => void;
}

export const FooterSection: React.FC<FooterSectionProps> = ({
  language,
  onOrderClick,
}) => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 4000);
    }
  };

  const copy = {
    EN: {
      tagline: 'INTERNATIONAL ARCHITECTURAL & INTERIOR DESIGN STUDIO',
      aboutText: 'ZROBIM architects creates bespoke minimalist residential villas, commercial structures, and luxury interiors with precision engineering and sustainable timber technology.',
      quickLinksTitle: 'NAVIGATION',
      links: ['Projects', 'Blueprint Map', 'CAD Plans', 'Interiors', 'Gallery', 'About Us'],
      officesTitle: 'GLOBAL OFFICES',
      offices: [
        { city: 'SURAT', country: 'INDIA', phone: '+81600 82638' },
        { city: 'MUMBAI', country: 'INDIA', phone: '+72850 47081' },
        { city: 'AHEMDABAD', country: 'INDIA', phone: '+81600 82638' },
      ],
      newsletterTitle: 'ARCHITECTURAL INSIGHTS',
      newsletterSub: 'Subscribe for exclusive project reveals, CAD floorplans, and design trends.',
      placeholder: 'Enter your email address',
      subscribeBtn: 'Join',
      subscribedMsg: 'Thank you for subscribing!',
      ctaTitle: 'READY TO START YOUR ARCHITECTURAL DRAFT?',
      ctaBtn: 'REQUEST INDIVIDUAL PROJECT',
      copyright: '© 2026 ZROBIM architects. All rights reserved.',
      privacy: 'Privacy Policy',
      terms: 'Terms of Service',
      backToTop: 'TOP',
    },
    HI: {
      tagline: 'अंतरराष्ट्रीय वास्तुकला और इंटीरियर डिजाइन स्टूडियो',
      aboutText: 'ZROBIM architects सटीक इंजीनियरिंग और टिकाऊ लकड़ी प्रौद्योगिकी के साथ शानदार न्यूनतम आवासीय विला, वाणिज्यिक संरचनाओं और लक्जरी अंदरूनी डिजाइनों का निर्माण करता है।',
      quickLinksTitle: 'नेविगेशन',
      links: ['प्रोजेक्ट्स', 'ब्लूप्रिंट नक्शा', 'CAD प्लान्स', 'इंटीरियर्स', 'गैलरी', 'हमारे बारे में'],
      officesTitle: 'वैश्विक कार्यालय',
      offices: [
        { city: 'सूरत', country: 'भारत', phone: '+81600 82638' },
        { city: 'मुंबई', country: 'भारत', phone: '+72850 47081' },
        { city: 'अहमदाबाद', country: 'भारत', phone: '+81600 82638' }
      ],
      newsletterTitle: 'वास्तुकला समाचार',
      newsletterSub: 'विशेष प्रोजेक्ट्स, CAD प्लान्स और डिज़ाइन रुझानों के लिए सदस्यता लें।',
      placeholder: 'अपना ईमेल दर्ज करें',
      subscribeBtn: 'जुड़ें',
      subscribedMsg: 'सदस्यता लेने के लिए धन्यवाद!',
      ctaTitle: 'क्या आप अपना वास्तुशिल्प ड्राफ्ट शुरू करने के लिए तैयार हैं?',
      ctaBtn: 'व्यक्तिगत प्रोजेक्ट का अनुरोध करें',
      copyright: '© 2026 ZROBIM architects. सर्वाधिकार सुरक्षित।',
      privacy: 'गोपनीयता नीति',
      terms: 'सेवा की शर्तें',
      backToTop: 'ऊपर जाएं',
    },
    GU: {
      tagline: 'આંતરરાષ્ટ્રીય આર્કિટેક્ચરલ અને ઇન્ટિરીયર ડિઝાઇન સ્ટુડિયો',
      aboutText: 'ZROBIM architects ચોક્કસ એન્જિનિયરિંગ અને ટકાઉ લાકડાની ટેકનોલોજી સાથે વિશિષ્ટ મિનિમેલિસ્ટ રજવાડા વિલા, કોમર્શિયલ સ્ટ્રક્ચર્સ અને લક્ઝરી ઇન્ટિરિયર્સનું નિર્માણ કરે છે.',
      quickLinksTitle: 'નેવિગેશન',
      links: ['પ્રોજેક્ટ્સ', 'બ્લૂપ્રિન્ટ નકશો', 'CAD પ્લાન્સ', 'ઇન્ટિરિયર્સ', 'ગેલેરી', 'અમારા વિશે'],
      officesTitle: 'વૈશ્વિક ઓફિસો',
      offices: [
        { city: 'સુરત', country: 'ભારત', phone: '+81600 82638' },
        { city: 'મુંબઈ', country: 'ભારત', phone: '+72850 47081' },
        { city: 'અમદાવાદ', country: 'ભારત', phone: '+81600 82638' }
      ],
      newsletterTitle: 'આર્કિટેક્ચરલ અપડેટ્સ',
      newsletterSub: 'ખાસ પ્રોજેક્ટ્સ, CAD ફ્લોરપ્લાન્સ અને ડિઝાઇન ટ્રેન્ડ્સ માટે સબ્સ્ક્રાઇબ કરો.',
      placeholder: 'તમારું ઇમેઇલ દાખલ કરો',
      subscribeBtn: 'જોડાઓ',
      subscribedMsg: 'સબ્સ્ક્રાઇબ કરવા બદલ આભાર!',
      ctaTitle: 'શું તમે તમારો આર્કિટેક્ચરલ ડ્રાફ્ટ શરૂ કરવા તૈયાર છો?',
      ctaBtn: 'વ્યક્તિગત પ્રોજેક્ટની વિનંતી કરો',
      copyright: '© 2026 ZROBIM architects. સર્વાધિકાર સુરક્ષિત.',
      privacy: 'ગોપનીયતા નીતિ',
      terms: 'સેવાની શરતો',
      backToTop: 'ટોચ પર જાઓ',
    },
  };

  const t = copy[language];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative w-full bg-zinc-950 text-white pt-16 pb-12 border-t border-white/15 overflow-hidden font-sans">
      <div className="absolute inset-0 plan-grid-pattern opacity-10 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">

        <div className="w-full bg-gradient-to-r from-zinc-900 via-zinc-800 to-zinc-900 border border-white/20 rounded-2xl sm:rounded-3xl p-5 sm:p-10 mb-10 sm:mb-16 flex flex-col md:flex-row items-start md:items-center justify-between gap-5 sm:gap-6 shadow-2xl">
          <div className="text-left max-w-2xl">
            <span className="text-[10px] font-bold tracking-widest uppercase text-sky-400 mb-1 block">
              BUILD ARCHITECTS • TAILORED DESIGNS
            </span>
            <h3 className="text-xl sm:text-3xl font-serif font-bold text-white tracking-tight">
              {t.ctaTitle}
            </h3>
          </div>
          <button
            onClick={onOrderClick}
            className="w-full sm:w-auto justify-center px-6 sm:px-8 py-3.5 sm:py-4 rounded-full bg-white text-zinc-950 font-bold hover:bg-sky-400 transition-all text-xs uppercase tracking-widest shadow-xl flex items-center gap-2 group shrink-0 cursor-pointer"
          >
            <span>{t.ctaBtn}</span>
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-16 border-b border-white/10">

          <div className="lg:col-span-2 flex flex-col items-start pr-0 lg:pr-8">
            <div
              onClick={scrollToTop}
              className="flex items-center gap-3 group cursor-pointer mb-5"
            >
              <div className="grid grid-cols-3 gap-0.5 w-6 h-4">
                <span className="bg-white rounded-none w-1.5 h-1.5"></span>
                <span className="bg-white rounded-none w-1.5 h-1.5"></span>
                <span className="bg-white rounded-none w-1.5 h-1.5"></span>
                <span className="bg-white rounded-none w-1.5 h-1.5"></span>
                <span className="bg-white rounded-none w-1.5 h-1.5"></span>
                <span className="bg-white rounded-none w-1.5 h-1.5"></span>
              </div>
              <div className="flex flex-col text-left">
                <span className="text-base font-bold tracking-widest text-white uppercase font-display">
                  BUILD
                </span>
                <span className="text-[11px] font-medium tracking-widest text-white/70 -mt-1 uppercase">
                  architects
                </span>
              </div>
            </div>

            <p className="text-xs text-zinc-400 font-light leading-relaxed mb-6 max-w-md">
              {t.aboutText}
            </p>

            <div className="flex items-center gap-3">
              {[
                { icon: Instagram, href: '#', label: 'Instagram' },
                { icon: Linkedin, href: '#', label: 'LinkedIn' },
                { icon: Youtube, href: '#', label: 'YouTube' },
                { icon: Globe, href: '#', label: 'Website' },
              ].map((social, idx) => (
                <a
                  key={idx}
                  href={social.href}
                  aria-label={social.label}
                  className="w-9 h-9 rounded-full bg-zinc-900 border border-white/10 flex items-center justify-center text-zinc-400 hover:text-white hover:border-white/40 hover:bg-zinc-800 transition-all"
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          <div className="flex flex-col items-start">
            <h4 className="text-xs font-bold tracking-widest uppercase text-white mb-4 border-b border-sky-500/50 pb-1.5 w-full text-left">
              {t.quickLinksTitle}
            </h4>
            <ul className="flex flex-col items-start gap-2.5 text-xs text-zinc-400 font-medium">
              {t.links.map((link, idx) => (
                <li key={idx}>
                  <button
                    onClick={() => {
                      const sections = document.querySelectorAll('section');
                      if (sections[idx]) {
                        sections[idx].scrollIntoView({ behavior: 'smooth' });
                      } else {
                        scrollToTop();
                      }
                    }}
                    className="hover:text-white transition-colors flex items-center gap-1.5 group cursor-pointer"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-sky-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                    <span>{link}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col items-start">
            <h4 className="text-xs font-bold tracking-widest uppercase text-white mb-4 border-b border-sky-500/50 pb-1.5 w-full text-left">
              {t.officesTitle}
            </h4>
            <div className="flex flex-col items-start gap-3 text-xs text-zinc-400">
              {t.offices.map((office, idx) => (
                <div key={idx} className="flex flex-col items-start text-left">
                  <span className="font-bold text-white flex items-center gap-1">
                    <MapPin className="w-3 h-3 text-sky-400" />
                    {office.city}, {office.country}
                  </span>
                  <span className="text-[11px] text-zinc-500 font-mono">{office.phone}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col items-start">
            <h4 className="text-xs font-bold tracking-widest uppercase text-white mb-4 border-b border-sky-500/50 pb-1.5 w-full text-left">
              {t.newsletterTitle}
            </h4>
            <p className="text-xs text-zinc-400 font-light mb-4 text-left leading-relaxed">
              {t.newsletterSub}
            </p>

            <form onSubmit={handleSubscribe} className="w-full flex flex-col gap-2">
              <div className="relative w-full">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={t.placeholder}
                  required
                  className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-900 border border-white/20 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-sky-400 transition-colors"
                />
              </div>
              <button
                type="submit"
                className="w-full py-2.5 px-4 rounded-xl bg-sky-500 hover:bg-sky-400 text-zinc-950 font-bold text-xs uppercase tracking-wider transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-md"
              >
                <span>{t.subscribeBtn}</span>
                <Send className="w-3.5 h-3.5" />
              </button>
              {subscribed && (
                <div className="flex items-center gap-1.5 text-xs text-emerald-400 font-medium mt-1">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>{t.subscribedMsg}</span>
                </div>
              )}
            </form>
          </div>

        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500 font-medium">
          <p className="text-center sm:text-left">{t.copyright}</p>

          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-zinc-300 transition-colors">{t.privacy}</a>
            <a href="#" className="hover:text-zinc-300 transition-colors">{t.terms}</a>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-zinc-900 border border-white/10 text-white hover:bg-zinc-800 transition-all text-[11px] font-bold uppercase tracking-wider cursor-pointer"
            >
              <span>{t.backToTop}</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
