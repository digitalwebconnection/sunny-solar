import React from 'react';
import { HeroSection } from './sections/HeroSection';
import { ServicesOverviewSection } from './sections/ServicesOverviewSection';
import { FeaturedProjectsSection } from './sections/FeaturedProjectsSection';
import { TrustBarSection } from './sections/TrustBarSection';
import { CalculatorsTeaserSection } from './sections/CalculatorsTeaserSection';
import { ParallaxBannerSection } from './sections/ParallaxBannerSection';
import { ServiceAreasTeaserSection } from './sections/ServiceAreasTeaserSection';
import { FAQSection } from './sections/FAQSection';

export const HomePage: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <HeroSection />
      <ServicesOverviewSection />
      <TrustBarSection />
      <FeaturedProjectsSection />
      <CalculatorsTeaserSection />
      <ParallaxBannerSection />
      <ServiceAreasTeaserSection />
      <FAQSection />
    </div>
  );
};

export default HomePage;
