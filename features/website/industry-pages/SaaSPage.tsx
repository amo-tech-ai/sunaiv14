
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SaaSHero from './components/SaaSHero';
import SaaSMetrics from './components/saas/SaaSMetrics';
import SaaSUseCases from './components/saas/SaaSUseCases';
import SaaSCapabilities from './components/saas/SaaSCapabilities';
import SaaSArchitecture from './components/saas/SaaSArchitecture';
import SaaSSecurity from './components/saas/SaaSSecurity';
import SaaSCaseStudy from './components/saas/SaaSCaseStudy';
import SaaSCTA from './components/saas/SaaSCTA';

const SaaSPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-indigo-500 selection:text-white">
      <Navbar />
      <SaaSHero />
      <SaaSMetrics />
      <SaaSUseCases />
      <SaaSCapabilities />
      <SaaSArchitecture />
      <SaaSSecurity />
      <SaaSCaseStudy />
      <SaaSCTA />
      <Footer />
    </div>
  );
};

export default SaaSPage;
