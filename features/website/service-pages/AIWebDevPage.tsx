import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import WebDevHero from './components/WebDevHero';
import WebDevTechStack from './components/WebDevTechStack';
import WebDevFeatures from './components/WebDevFeatures';
import WebDevSpotlight from './components/WebDevSpotlight';
import WebDevPricing from './components/WebDevPricing';
import WebDevFAQ from './components/WebDevFAQ';

const AIWebDevPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-[#10B981] selection:text-white">
      <Navbar />
      <WebDevHero />
      <WebDevTechStack />
      <WebDevFeatures />
      <WebDevSpotlight />
      <WebDevPricing />
      <WebDevFAQ />
      <Footer />
    </div>
  );
};

export default AIWebDevPage;