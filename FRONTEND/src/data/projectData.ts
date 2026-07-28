import { ProjectData, Hotspot, GalleryItem, FeaturedProject } from '../types';

export const featuredProjects: FeaturedProject[] = [
  {
    id: 'horizon-residence',
    title: 'Horizon Residence',
    location: {
      EN: 'Los Angeles, CA',
      HI: 'लॉस एंजिल्स, कैलिफोर्निया',
      GU: 'લોસ એન્જલસ, કેલિફોર્નિયા',
    },
    category: {
      EN: 'Private Luxury Villa',
      HI: 'निजी लक्जरी विला',
      GU: 'ખાનગી લક્ઝરી વિલા',
    },
    year: '2024',
    area: '480 m²',
    imageUrl: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80',
    description: {
      EN: 'A multi-level minimalist glass residence featuring cantilevered concrete decks and infinite horizon pool views.',
      HI: 'कंक्रीट डेक और अनंत पूल के दृश्यों के साथ एक बहु-स्तरीय न्यूनतम ग्लास निवास।',
      GU: 'કોંક્રિટ ડેક અને ઇન્ફિનિટી પુલના દ્રશ્યો સાથેનું બહુમાળી કાચનું સુંદર વિલા.',
    },
  },
  {
    id: 'aurora-office-tower',
    title: 'Aurora Office Tower',
    location: {
      EN: 'New York, NY',
      HI: 'न्यू यॉर्क, एनवाय',
      GU: 'ન્યુ યોર્ક, એનવાય',
    },
    category: {
      EN: 'Commercial Architecture',
      HI: 'व्यावसायिक वास्तुकला',
      GU: 'કોમર્શિયલ આર્કિટેક્ચર',
    },
    year: '2025',
    area: '12,500 m²',
    imageUrl: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80',
    description: {
      EN: 'Modern corporate headquarters with staggered terrace gardens, smart climate facade, and panoramic city views.',
      HI: 'छत के बगीचों, स्मार्ट जलवायु मुखौटे और शहर के मनोरम दृश्यों के साथ आधुनिक कॉर्पोरेट मुख्यालय।',
      GU: 'ટેરેસ ગાર્ડન્સ, સ્માર્ટ ગ્લાસ અને શહેરના સુંદર દ્રશ્યો સાથેનું આધુનિક કોર્પોરેટ હેડક્વાર્ટર.',
    },
  },
  {
    id: 'edgewood-villa',
    title: 'Edgewood Villa',
    location: {
      EN: 'Austin, TX',
      HI: 'ऑस्टिन, टेक्सस',
      GU: 'ઓસ્ટિન, ટેક્સાસ',
    },
    category: {
      EN: 'Residential Complex',
      HI: 'आवासीय परिसर',
      GU: 'રહેણાંક સંકુલ',
    },
    year: '2023',
    area: '340 m²',
    imageUrl: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
    description: {
      EN: 'Low-slung hillside pavilion integrating warm cedar cladding, floor-to-ceiling glass, and local limestone.',
      HI: 'देवदार की लकड़ी, फर्श से छत तक कांच और स्थानीय चूना पत्थर को एकीकृत करने वाला पहाड़ी मंडप।',
      GU: 'લાકડાના કામ, કાચની ભવ્ય દિવાલો અને કુદરતી પથ્થરોથી બનેલું સુંદર પહાડી મકાન.',
    },
  },
  {
    id: 'maple-street-residences',
    title: 'Maple Street Residences',
    location: {
      EN: 'Seattle, WA',
      HI: 'सिएटल, वाशिंगटन',
      GU: 'સિયેટલ, વોશિંગ્ટન',
    },
    category: {
      EN: 'Urban Living',
      HI: 'शहरी आवास',
      GU: 'અર્બન લિવિંગ',
    },
    year: '2024',
    area: '2,100 m²',
    imageUrl: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=80',
    description: {
      EN: 'High-density luxury urban apartments crafted with dark bronze mullions and modular green rooftop terraces.',
      HI: 'डार्क ब्रॉन्ज और हरे-भरे रूफटॉप टैरेस के साथ निर्मित उच्च घनत्व वाले लक्जरी शहरी अपार्टमेंट।',
      GU: 'ડાર્ક બ્રોન્ઝ અને લીલાછમ રૂફટોપ ટેરેસ સાથે બનેલા આધુનિક લક્ઝરી અર્બન એપાર્ટમેન્ટ્સ.',
    },
  },
];

export const projectInfo: ProjectData = {
  studio: 'ZROBIM architects',
  architects: ['Nikita Abanin', 'Matvey Oleynikov'],
  location: {
    EN: 'Mongolia, Ulaanbaatar',
    HI: 'मंगोलिया, उलानबातार',
    GU: 'મોંગોલિયા, ઉલાનબાતાર',
  },
  area: '173 m²',
  year: '2022',
  category: {
    EN: 'Private Houses',
    HI: 'निजी आवास',
    GU: 'ખાનગી આવાસ',
  },
  features: {
    EN: ['Compactness', 'Protection', 'Minimalism'],
    HI: ['सघनता', 'सुरक्षा', 'न्यूनतमवाद'],
    GU: ['સઘનતા', 'સુરક્ષા', 'મિનિમલિઝમ'],
  },
};

export const hotspots: Hotspot[] = [
  {
    id: 'overhang',
    x: 58,
    y: 52,
    title: {
      EN: 'Openwork Roof Overhangs',
      HI: 'ओपनवर्क छत के ओवरहैंग',
      GU: 'ઓપનવર્ક છત ઓવરહેંગ્સ',
    },
    tag: {
      EN: 'Sun Protection',
      HI: 'सूर्य संरक्षण',
      GU: 'સૂર્ય રક્ષણ',
    },
    description: {
      EN: 'Deep overhangs shield panoramic glazing from overheating in summer heat and regulate natural light.',
      HI: 'गहरे ओवरहैंग गर्मियों में कांच को गर्म होने से बचाते हैं और प्राकृतिक रोशनी को नियंत्रित करते हैं।',
      GU: 'ઊંડા ઓવરહેંગ્સ ઉનાળાના તાપમાં કાચને ગરમ થવાથી બચાવે છે અને કુદરતી પ્રકાશનું નિયંત્રણ કરે છે.',
    },
  },
  {
    id: 'piles',
    x: 28,
    y: 61,
    title: {
      EN: 'Pile Foundation',
      HI: 'पाई फाउंडेशन (खंभे आधार)',
      GU: 'પાઈલ ફાઉન્ડેશન (થાંભલા આધાર)',
    },
    tag: {
      EN: 'Eco Adaptation',
      HI: 'पर्यावरण अनुकूलन',
      GU: 'ઇકો એડેપ્ટેશન',
    },
    description: {
      EN: 'Elevated structure minimally impacts natural steppe terrain while preserving thermal performance.',
      HI: 'उठी हुई संरचना प्राकृतिक मैदानी परिदृश्य को प्रभावित किए बिना उत्कृष्ट तापीय दक्षता प्रदान करती है।',
      GU: 'ઊંચું માળખું કુદરતી લેન્ડસ્કેપને અસર કર્યા વિના ઉત્તમ થર્મલ કામગીરી પૂરી પાડે છે.',
    },
  },
  {
    id: 'glazing',
    x: 69,
    y: 75,
    title: {
      EN: 'Panoramic Glazing',
      HI: 'पैनोरामिक ग्लेज़िंग',
      GU: 'પેનોરેમિક ગ્લેઝિંગ',
    },
    tag: {
      EN: 'Energy Efficiency',
      HI: 'ऊर्जा दक्षता',
      GU: 'ઊર્જા કાર્યક્ષમતા',
    },
    description: {
      EN: 'Double-chamber energy-efficient argon glass units revealing expansive views of the Mongolian steppe.',
      HI: 'डबल-चैंबर ऊर्जा-कुशल आर्गन ग्लास इकाइयाँ मंगोलियाई स्टेपी के विस्तृत दृश्य प्रदान करती हैं।',
      GU: 'ડબલ-ચેમ્બર એનર્જી-એફિશિયન્ટ આર્ગોન ગ્લાસ એકમો મોંગોલિયન સ્ટેપીના ભવ્ય દ્રશ્યો પ્રદાન કરે છે.',
    },
  },
];

export const realEstateGallery: GalleryItem[] = [
  {
    id: 'facade-cantilever',
    title: {
      EN: 'Cantilever Facade & Overhangs',
      HI: 'कैंटिलीवर मुखौटा और ओवरहैंग',
      GU: 'કેન્ટિલિવર ફાસાડ અને ઓવરહેંગ્સ',
    },
    subtitle: {
      EN: 'Main entrance & avant-garde silhouette',
      HI: 'मुख्य प्रवेश द्वार और आधुनिक रूप',
      GU: 'મુખ્ય પ્રવેશદ્વાર અને આધુનિક દેખાવ',
    },
    description: {
      EN: 'Architectural volume on a pile foundation with roof overhangs protecting panoramic windows from wind and harsh steppe sun.',
      HI: 'पाई फाउंडेशन पर बनी स्थापत्य संरचना जो विशाल खिड़कियों को हवा और तेज धूप से बचाती है।',
      GU: 'પાઈલ ફાઉન્ડેશન પર બનેલી આર્કિટેક્ચરલ રચના જે મોટી બારીઓને પવન અને તડકાથી રક્ષણ આપે છે.',
    },
    tag: {
      EN: 'Exterior',
      HI: 'बाहरी दृश्य',
      GU: 'બહારનો ભાગ',
    },
    imageUrl: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80',
    spec: '173 m² • Structural Steel & Concrete',
  },
  {
    id: 'panoramic-living',
    title: {
      EN: 'Panoramic Living Lounge',
      HI: 'पैनोरामिक लिविंग लाउंज',
      GU: 'પેનોરેમિક લિવિંગ લાઉન્જ',
    },
    subtitle: {
      EN: 'Full height 3.2m glazing',
      HI: 'पूर्ण ऊंचाई 3.2 मीटर ग्लास',
      GU: 'પૂર્ણ ઊંચાઈ 3.2 મીટર ગ્લાસ',
    },
    description: {
      EN: 'Spacious open-plan living room and kitchen with seamless views of the wild steppe and Ulaanbaatar mountains.',
      HI: 'उलानबातार के पहाड़ों और खुले मैदानों के निर्बाध दृश्यों के साथ विशाल लिविंग रूम और रसोई।',
      GU: 'ઉલાનબાતારના પહાડો અને ખુલ્લા મેદાનોના સુંદર દ્રશ્યો સાથેનો વિશાળ લિવિંગ રૂમ અને રસોડું.',
    },
    tag: {
      EN: 'Interior',
      HI: 'आंतरिक दृश्य',
      GU: 'અંદરનો ભાગ',
    },
    imageUrl: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1600&q=80',
    spec: '82.6 m² • Argon Glass & Minimal Wood',
  },
  {
    id: 'terrace-deck',
    title: {
      EN: 'Steppe Panoramic Terrace',
      HI: 'मैदानी पैनोरामिक छत',
      GU: 'પેનોરેમિક ટેરેસ',
    },
    subtitle: {
      EN: 'Open deck made of Siberian larch',
      HI: 'साइबेरियन लार्च लकड़ी का खुला डेक',
      GU: 'સાયબેરીયન લાર્ચ લાકડાની ખુલ્લી ટેરેસ',
    },
    description: {
      EN: 'Secluded cantilevered space under the roof overhang with views of sunsets and natural landscape.',
      HI: 'सूर्यास्त और प्राकृतिक परिदृश्य के दृश्यों के साथ छत के नीचे एकांत स्थान।',
      GU: 'સૂર્યાસ્ત અને કુદરતી નજારાઓના દ્રશ્યો સાથે છત નીચે એકાંત જગ્યા.',
    },
    tag: {
      EN: 'Terrace',
      HI: 'टेरेस',
      GU: 'ટેરેસ',
    },
    imageUrl: 'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1600&q=80',
    spec: '43.8 m² • Weather-proof Larch Decking',
  },
  {
    id: 'night-illumination',
    title: {
      EN: 'Night Architectural Illumination',
      HI: 'रात्रिकालीन वास्तुकला रोशनी',
      GU: 'રાત્રિ આર્કિટેક્ચરલ લાઇટિંગ',
    },
    subtitle: {
      EN: 'Warm light through dark silhouettes',
      HI: 'डार्क सिल्हूट के बीच गर्म रोशनी',
      GU: 'ડાર્ક સિલુએટ્સ વચ્ચે ગરમ પ્રકાશ',
    },
    description: {
      EN: 'Concealed LED strips beneath openwork overhangs emphasize the home geometry at night.',
      HI: 'छत के नीचे छिपी हुई एलईडी स्ट्रिप्स रात में घर के आकार को खूबसूरती से उभारती हैं।',
      GU: 'છત નીચે છુપાયેલી એલઇડી લાઇટો રાત્રે ઘરના આકારને સુંદર રીતે વધારે છે.',
    },
    tag: {
      EN: 'Lighting',
      HI: 'प्रकाश व्यवस्था',
      GU: 'લાઇટિંગ',
    },
    imageUrl: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1600&q=80',
    spec: '3000K Soft Glow • Smart Automation',
  },
  {
    id: 'master-bedroom',
    title: {
      EN: 'Master Suite & Textures',
      HI: 'मास्टर सुइट और बनावट',
      GU: 'માસ્ટર સ્વીટ અને ટેક્સચર',
    },
    subtitle: {
      EN: 'Monolithic concrete & natural oak',
      HI: 'कंक्रीट और प्राकृतिक ओक की लकड़ी',
      GU: 'કોંક્રિટ અને કુદરતી ઓકની લાકડા',
    },
    description: {
      EN: 'Cozy private master suite featuring a panoramic window, built-in hidden storage, and shadow gaps.',
      HI: 'पैनोरामिक खिड़की और छिपी हुई अलमारियों के साथ आरामदायक निजी मास्टर बेडरूम।',
      GU: 'પેનોરેમિક બારી અને છુપાયેલા કબાટો સાથે આરામદાયક ખાનગી માસ્ટર બેડરૂમ.',
    },
    tag: {
      EN: 'Private Suite',
      HI: 'निजी कक्ष',
      GU: 'ખાનગી સ્યુટ',
    },
    imageUrl: 'https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&w=1600&q=80',
    spec: '28.4 m² • Soundproof Insulation',
  },
];
