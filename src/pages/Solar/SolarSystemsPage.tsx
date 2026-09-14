import React from 'react';
import { SolarSystemsHeroSection } from './sections/systems/SolarSystemsHeroSection';
import { SolarPackagesGridSection } from './sections/systems/SolarPackagesGridSection';
import { SolarHardwareComparisonSection } from './sections/systems/SolarHardwareComparisonSection';
import { SolarSystemsFAQSection } from './sections/systems/SolarSystemsFAQSection';

export const SolarSystemsPage: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <SolarSystemsHeroSection />
      <SolarPackagesGridSection />
      <SolarHardwareComparisonSection />
      <SolarSystemsFAQSection />
    </div>
  );
};

export default SolarSystemsPage;
