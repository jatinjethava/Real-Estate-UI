import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Language } from '../types';
import { X, CheckCircle, ArrowRight, Building2, Mail, Phone, MapPin } from 'lucide-react';

interface OrderProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  language: Language;
}

export const OrderProjectModal: React.FC<OrderProjectModalProps> = ({
  isOpen,
  onClose,
  language,
}) => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    area: '150-250 m²',
    notes: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const copy = {
    EN: {
      receivedTitle: 'APPLICATION RECEIVED',
      receivedDesc: 'Thank you for your interest in BUILD cotta! The lead architect from ZROBIM architects will contact you shortly.',
      close: 'CLOSE',
      modalTitle: 'ORDER ARCHITECTURAL PROJECT',
      modalDesc: 'Request a customized architectural concept calculation for an avant-garde minimalist residence.',
      nameLabel: 'Full Name',
      namePlaceholder: 'John Doe',
      phoneLabel: 'Phone',
      emailLabel: 'Email Address',
      areaLabel: 'Target House Area',
      notesLabel: 'Project Notes',
      notesPlaceholder: 'Site requirements, glazing options, terrain details...',
      submitBtn: 'SUBMIT SPECIFICATION',
      locations: 'New Delhi • Mumbai • Global',
    },
    HI: {
      receivedTitle: 'आवेदन प्राप्त हुआ',
      receivedDesc: 'बिल्ड कोट्टा में आपकी रुचि के लिए धन्यवाद! ZROBIM architects के मुख्य वास्तुकार जल्द ही आपसे संपर्क करेंगे।',
      close: 'बंद करें',
      modalTitle: 'आर्किटेक्चरल प्रोजेक्ट ऑर्डर करें',
      modalDesc: 'अवांत-गार्डे न्यूनतम आवासीय परियोजना के लिए अनुकूलित वास्तुकला अवधारणा की दरें प्राप्त करें।',
      nameLabel: 'पूरा नाम',
      namePlaceholder: 'राहुल शर्मा',
      phoneLabel: 'फोन नंबर',
      emailLabel: 'ईमेल पता',
      areaLabel: 'इच्छित मकान का क्षेत्रफल',
      notesLabel: 'प्रोजेक्ट टिप्पणियाँ',
      notesPlaceholder: 'भूमि संबंधी आवश्यकताएं, कांच के विकल्प, इत्यादि...',
      submitBtn: 'आवेदन जमा करें',
      locations: 'नई दिल्ली • मुंबई • वैश्विक',
    },
    GU: {
      receivedTitle: 'અરજી પ્રાપ્ત થઈ',
      receivedDesc: 'બિલ્ડ કોટ્ટા માં તમારા રસ બદલ આભાર! ZROBIM architects ના મુખ્ય આર્કિટેક્ટ ટૂંક સમયમાં તમારો સંપર્ક કરશે.',
      close: 'બંધ કરો',
      modalTitle: 'આર્કિટેક્ચરલ પ્રોજેક્ટ ઓર્ડર કરો',
      modalDesc: 'આધુનિક ઘર માટે ખાસ આર્કિટેક્ચરલ વિગતો મેળવવા માટે તમારી માહિતી ભરો.',
      nameLabel: 'પૂરું નામ',
      namePlaceholder: 'હર્ષ પટેલ',
      phoneLabel: 'ફોન નંબર',
      emailLabel: 'ઈમેલ સરનામું',
      areaLabel: 'ઘરનો વિસ્તાર',
      notesLabel: 'પ્રોજેક્ટ નોંધો',
      notesPlaceholder: 'જમીન વિગતો, સાધન સામગ્રી, ખાસ પસંદગીઓ...',
      submitBtn: 'વિગતો સબમિટ કરો',
      locations: 'અમદાવાદ • મુંબઈ • ગ્લોબલ',
    },
  };

  const t = copy[language];

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-zinc-950/80 backdrop-blur-xl"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3 }}
            className="relative w-full max-w-xl bg-zinc-900 border border-white/20 rounded-3xl p-6 sm:p-8 text-white shadow-2xl z-10 my-8 overflow-hidden"
          >
            <button
              onClick={onClose}
              className="absolute top-6 right-6 p-2 rounded-full border border-white/20 text-white/70 hover:text-white hover:border-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {submitted ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-16 h-16 bg-white text-zinc-950 rounded-full flex items-center justify-center mx-auto shadow-xl">
                  <CheckCircle className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold font-display uppercase tracking-wider">
                  {t.receivedTitle}
                </h3>
                <p className="text-sm text-white/70 max-w-md mx-auto leading-relaxed">
                  {t.receivedDesc}
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    onClose();
                  }}
                  className="mt-6 px-8 py-3 bg-white text-zinc-950 font-bold rounded-full hover:bg-white/90 transition-all text-xs tracking-widest uppercase"
                >
                  {t.close}
                </button>
              </div>
            ) : (
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <Building2 className="w-5 h-5 text-white/70" />
                  <span className="text-xs font-bold tracking-widest uppercase text-white/60">
                    ZROBIM ARCHITECTS — BUILD COTTA
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-bold font-display uppercase tracking-tight mb-2">
                  {t.modalTitle}
                </h3>

                <p className="text-xs text-white/70 mb-6 leading-relaxed">
                  {t.modalDesc}
                </p>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs uppercase font-semibold text-white/80 mb-1">
                      {t.nameLabel}
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder={t.namePlaceholder}
                      className="w-full bg-zinc-950/80 border border-white/20 rounded-xl px-4 py-3 text-xs text-white placeholder-white/30 focus:outline-none focus:border-white transition-colors"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs uppercase font-semibold text-white/80 mb-1">
                        {t.phoneLabel}
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+91 98765 43210"
                        className="w-full bg-zinc-950/80 border border-white/20 rounded-xl px-4 py-3 text-xs text-white placeholder-white/30 focus:outline-none focus:border-white transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs uppercase font-semibold text-white/80 mb-1">
                        {t.emailLabel}
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="client@zrobim.com"
                        className="w-full bg-zinc-950/80 border border-white/20 rounded-xl px-4 py-3 text-xs text-white placeholder-white/30 focus:outline-none focus:border-white transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs uppercase font-semibold text-white/80 mb-1">
                      {t.areaLabel}
                    </label>
                    <select
                      value={formData.area}
                      onChange={(e) => setFormData({ ...formData, area: e.target.value })}
                      className="w-full bg-zinc-950/80 border border-white/20 rounded-xl px-4 py-3 text-xs text-white focus:outline-none focus:border-white transition-colors"
                    >
                      <option value="100-170 m²">100 - 170 m² (BUILD cotta scale)</option>
                      <option value="170-250 m²">170 - 250 m²</option>
                      <option value="250-400 m²">250 - 400 m²</option>
                      <option value="400+ m²">400+ m² Premium Villa</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs uppercase font-semibold text-white/80 mb-1">
                      {t.notesLabel}
                    </label>
                    <textarea
                      rows={3}
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                      placeholder={t.notesPlaceholder}
                      className="w-full bg-zinc-950/80 border border-white/20 rounded-xl px-4 py-3 text-xs text-white placeholder-white/30 focus:outline-none focus:border-white transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 bg-white text-zinc-950 font-bold rounded-xl hover:bg-white/90 transition-all flex items-center justify-center gap-2 text-xs uppercase tracking-widest shadow-xl group cursor-pointer"
                  >
                    <span>{t.submitBtn}</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </button>
                </form>

                <div className="mt-6 pt-4 border-t border-white/10 flex flex-wrap items-center justify-between text-[11px] text-white/60 gap-3">
                  <span className="flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5" />
                    {t.locations}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Mail className="w-3.5 h-3.5" />
                    info@zrobim.com
                  </span>
                </div>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

