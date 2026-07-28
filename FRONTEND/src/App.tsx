import React, { useState } from 'react';
import { HeaderNav } from './components/HeaderNav';
import { HeroTypography } from './components/HeroTypography';
import { VillaSequenceShowcase } from './components/VillaSequenceShowcase';
import { ProjectSpecsCard } from './components/ProjectSpecsCard';
import { ProjectDescriptions } from './components/ProjectDescriptions';
import { OrderProjectModal } from './components/OrderProjectModal';
import { RealEstateGallery } from './components/RealEstateGallery';
import { FeaturedProjectsBento } from './components/FeaturedProjectsBento';
import { InteriorShowcaseSection } from './components/InteriorShowcaseSection';
import { BlueprintMapSection } from './components/BlueprintMapSection';
import { PlanFilterSearchSection } from './components/PlanFilterSearchSection';
import { PricingSection } from './components/PricingSection';
import { FooterSection } from './components/FooterSection';
import { projectInfo, hotspots, realEstateGallery, featuredProjects } from './data/projectData';
import { Language, BackgroundMode } from './types';

export default function App() {
  const [language, setLanguage] = useState<Language>('EN');
  const [bgMode, setBgMode] = useState<BackgroundMode>('plan');
  const [activeHotspotId, setActiveHotspotId] = useState<string | null>(null);
  const [isOrderModalOpen, setIsOrderModalOpen] = useState(false);

  return (
    <div className="relative min-h-screen bg-[#0a0a0d] text-white font-sans flex flex-col justify-between overflow-x-clip select-none">
      <HeaderNav
        language={language}
        setLanguage={setLanguage}
        bgMode={bgMode}
        setBgMode={setBgMode}
        onOrderClick={() => setIsOrderModalOpen(true)}
      />

      <main className="relative z-20 flex-1 flex flex-col justify-between pt-2 pb-6">
        <div id="home" className="px-2 sm:px-8 scroll-mt-24">
          <HeroTypography language={language} />
        </div>

        <VillaSequenceShowcase language={language} />

        <div id="about" className="relative z-30 w-full max-w-7xl mx-auto px-2 sm:px-8 pt-4 sm:pt-6 flex flex-col lg:flex-row items-start lg:items-end justify-between gap-6 scroll-mt-24">
          <ProjectSpecsCard project={projectInfo} language={language} />

          <div className="w-full lg:w-auto">
            <ProjectDescriptions language={language} />
          </div>
        </div>

        <div id="blueprint-section" className="w-full max-w-7xl mx-auto px-2 sm:px-8 pt-4 sm:pt-8 scroll-mt-24">
          <BlueprintMapSection
            language={language}
            onOrderClick={() => setIsOrderModalOpen(true)}
            activeHotspotId={activeHotspotId}
            onSelectHotspot={setActiveHotspotId}
          />
        </div>

        <div id="featured-projects" className="w-full max-w-7xl mx-auto px-2 sm:px-8 pt-6 sm:pt-10 scroll-mt-24">
          <FeaturedProjectsBento
            projects={featuredProjects}
            language={language}
            onOrderClick={() => setIsOrderModalOpen(true)}
          />
        </div>

        <div id="gallery" className="w-full max-w-7xl mx-auto px-2 sm:px-8 pt-4 scroll-mt-24">
          <RealEstateGallery items={realEstateGallery} language={language} />
        </div>

        <div id="publications" className="w-full max-w-7xl mx-auto px-2 sm:px-8 pt-4 sm:pt-6 scroll-mt-24">
          <InteriorShowcaseSection
            language={language}
            onOrderClick={() => setIsOrderModalOpen(true)}
          />
        </div>

        <div id="plan-finder" className="w-full max-w-7xl mx-auto px-2 sm:px-8 pt-4 sm:pt-6 scroll-mt-24">
          <PlanFilterSearchSection
            language={language}
            onOrderClick={() => setIsOrderModalOpen(true)}
          />
        </div>

        <div id="pricing" className="w-full max-w-7xl mx-auto px-2 sm:px-8 pt-4 sm:pt-6 scroll-mt-24">
          <PricingSection
            language={language}
            onOrderClick={() => setIsOrderModalOpen(true)}
          />
        </div>
      </main>

      <FooterSection
        language={language}
        onOrderClick={() => setIsOrderModalOpen(true)}
      />

      <OrderProjectModal
        isOpen={isOrderModalOpen}
        onClose={() => setIsOrderModalOpen(false)}
        language={language}
      />
    </div>
  );
}
