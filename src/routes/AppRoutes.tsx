import React from 'react';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';

// Pages
import HomePage from '../pages/Home';
import SolarLandingPage from '../pages/Solar';
import SolarSystemsPage from '../pages/Solar/subpages/SolarSystemsPage';
import SolarInstallationPage from '../pages/Solar/subpages/SolarInstallationPage';
import SolarUpgradesPage from '../pages/Solar/subpages/SolarUpgradesPage';

import BatteriesLandingPage from '../pages/Batteries';
import SolarBatteriesPage from '../pages/Batteries/subpages/SolarBatteriesPage';
import SolarPlusBatteryPage from '../pages/Batteries/subpages/SolarPlusBatteryPage';
import BatteryBackupPage from '../pages/Batteries/subpages/BatteryBackupPage';

import ExistingSolarLandingPage from '../pages/ExistingSolar';
import HealthCheckPage from '../pages/ExistingSolar/subpages/HealthCheckPage';
import SavingsPage from '../pages/ExistingSolar/subpages/SavingsPage';
import UpgradePage from '../pages/ExistingSolar/subpages/UpgradePage';
import AddBatteryPage from '../pages/ExistingSolar/subpages/AddBatteryPage';

import CalculatorsLandingPage from '../pages/Calculators';
import SolarSavingsCalcPage from '../pages/Calculators/subpages/SolarSavingsCalcPage';
import SystemSizeCalcPage from '../pages/Calculators/subpages/SystemSizeCalcPage';
import PaybackCalcPage from '../pages/Calculators/subpages/PaybackCalcPage';
import BatterySavingsCalcPage from '../pages/Calculators/subpages/BatterySavingsCalcPage';
import BatterySizeCalcPage from '../pages/Calculators/subpages/BatterySizeCalcPage';
import QuoteComparisonCalcPage from '../pages/Calculators/subpages/QuoteComparisonCalcPage';
import SavingsSoFarCalcPage from '../pages/Calculators/subpages/SavingsSoFarCalcPage';
import IsSolarRightCalcPage from '../pages/Calculators/subpages/IsSolarRightCalcPage';

import KnowledgeHubPage from '../pages/Learn/KnowledgeHubPage';
import KnowledgeDetailPage from '../pages/Learn/KnowledgeDetailPage';
import BlogPage from '../pages/Learn/BlogPage';
import BlogDetailPage from '../pages/Learn/BlogDetailPage';

import ProjectsPage from '../pages/Projects/ProjectsPage';
import ProjectDetailPage from '../pages/Projects/ProjectDetailPage';

import ReviewsPage from '../pages/Reviews/ReviewsPage';

import AboutPage from '../pages/About/AboutPage';
import TrentBioPage from '../pages/About/TrentBioPage';

import ServiceAreasPage from '../pages/ServiceAreas/ServiceAreasPage';
import LocationDetailPage from '../pages/ServiceAreas/LocationDetailPage';

import ResourcesLandingPage from '../pages/Resources';
import BuyingChecklistPage from '../pages/Resources/subpages/BuyingChecklistPage';
import BuyerGuidePage from '../pages/Resources/subpages/BuyerGuidePage';
import BatteryDecisionGuidePage from '../pages/Resources/subpages/BatteryDecisionGuidePage';
import QuoteReviewPage from '../pages/Resources/subpages/QuoteReviewPage';
import ElectricityBillReviewPage from '../pages/Resources/subpages/ElectricityBillReviewPage';

import FAQPage from '../pages/FAQ/FAQPage';
import FreeAssessmentPage from '../pages/GetStarted/FreeAssessmentPage';

import PrivacyPolicyPage from '../pages/Legal/PrivacyPolicyPage';
import TermsConditionsPage from '../pages/Legal/TermsConditionsPage';
import TermsOfTradePage from '../pages/Legal/TermsOfTradePage';
import NotFoundPage from '../pages/NotFound/NotFoundPage';

export const AppRoutes: React.FC = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.24, ease: [0.25, 1, 0.5, 1] }}
      >
        <Routes location={location}>
      {/* 1. Home */}
      <Route path="/" element={<HomePage />} />

      {/* 2. Solar */}
      <Route path="/solar" element={<SolarLandingPage />} />
      <Route path="/solar/systems" element={<SolarSystemsPage />} />
      <Route path="/solar/installation" element={<SolarInstallationPage />} />
      <Route path="/solar/upgrades" element={<SolarUpgradesPage />} />

      {/* 3. Batteries */}
      <Route path="/batteries" element={<BatteriesLandingPage />} />
      <Route path="/batteries/solar-batteries" element={<SolarBatteriesPage />} />
      <Route path="/batteries/solar-plus-battery" element={<SolarPlusBatteryPage />} />
      <Route path="/batteries/battery-backup" element={<BatteryBackupPage />} />

      {/* 4. Existing Solar */}
      <Route path="/existing-solar" element={<ExistingSolarLandingPage />} />
      <Route path="/existing-solar/health-check" element={<HealthCheckPage />} />
      <Route path="/existing-solar/savings" element={<SavingsPage />} />
      <Route path="/existing-solar/upgrade" element={<UpgradePage />} />
      <Route path="/existing-solar/add-battery" element={<AddBatteryPage />} />

      {/* 5. Calculators */}
      <Route path="/calculators" element={<CalculatorsLandingPage />} />
      <Route path="/calculators/solar-savings" element={<SolarSavingsCalcPage />} />
      <Route path="/calculators/system-size" element={<SystemSizeCalcPage />} />
      <Route path="/calculators/payback" element={<PaybackCalcPage />} />
      <Route path="/calculators/battery-savings" element={<BatterySavingsCalcPage />} />
      <Route path="/calculators/battery-size" element={<BatterySizeCalcPage />} />
      <Route path="/calculators/quote-comparison" element={<QuoteComparisonCalcPage />} />
      <Route path="/calculators/savings-so-far" element={<SavingsSoFarCalcPage />} />
      <Route path="/calculators/is-solar-right-for-me" element={<IsSolarRightCalcPage />} />

      {/* 6. Learn */}
      <Route path="/learn" element={<Navigate to="/learn/knowledge-hub" replace />} />
      <Route path="/learn/knowledge-hub" element={<KnowledgeHubPage />} />
      <Route path="/learn/knowledge-hub/:slug" element={<KnowledgeDetailPage />} />
      <Route path="/learn/blog" element={<BlogPage />} />
      <Route path="/learn/blog/:slug" element={<BlogDetailPage />} />

      {/* 7. Projects */}
      <Route path="/projects" element={<ProjectsPage />} />
      <Route path="/projects/:slug" element={<ProjectDetailPage />} />

      {/* 8. Reviews */}
      <Route path="/reviews" element={<ReviewsPage />} />

      {/* 9. About */}
      <Route path="/about" element={<AboutPage />} />
      <Route path="/about/trent" element={<TrentBioPage />} />

      {/* 10. Service Areas */}
      <Route path="/service-areas" element={<ServiceAreasPage />} />
      <Route path="/service-areas/:location" element={<LocationDetailPage />} />

      {/* 11. Resources */}
      <Route path="/resources" element={<ResourcesLandingPage />} />
      <Route path="/resources/buying-checklist" element={<BuyingChecklistPage />} />
      <Route path="/resources/buyer-guide" element={<BuyerGuidePage />} />
      <Route path="/resources/battery-decision-guide" element={<BatteryDecisionGuidePage />} />
      <Route path="/resources/quote-review" element={<QuoteReviewPage />} />
      <Route path="/resources/electricity-bill-review" element={<ElectricityBillReviewPage />} />

      {/* 12. FAQ */}
      <Route path="/faq" element={<FAQPage />} />

      {/* 13. Get Started & Contact */}
      <Route path="/get-started" element={<Navigate to="/get-started/free-assessment" replace />} />
      <Route path="/get-started/free-assessment" element={<FreeAssessmentPage />} />
      <Route path="/contact" element={<FreeAssessmentPage />} />

      {/* 14. Legal */}
      <Route path="/legal/privacy-policy" element={<PrivacyPolicyPage />} />
      <Route path="/legal/terms-conditions" element={<TermsConditionsPage />} />
      <Route path="/legal/terms-of-trade" element={<TermsOfTradePage />} />

      {/* 404 Catch All */}
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
    </motion.div>
  </AnimatePresence>
  );
};

export default AppRoutes;
