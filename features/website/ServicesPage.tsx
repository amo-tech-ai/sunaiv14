import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ServicesHero from './components/services/ServicesHero';
import ServicesCatalog from './components/services/ServicesCatalog';
import ServiceSpotlight from './components/services/ServiceSpotlight';
import ServiceCategories from './components/services/ServiceCategories';
import ServicesTimeline from './components/services/ServicesTimeline';
import PricingSection from './components/services/PricingSection';
import ServicesCTA from './components/services/ServicesCTA';

const ServicesPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-indigo-100 selection:text-indigo-900">
      <Navbar />
      <ServicesHero />
      <ServicesCatalog />
      <ServiceSpotlight />
      <ServiceCategories />
      <ServicesTimeline />
      <PricingSection />
      <ServicesCTA />
      <Footer />
    </div>
  );
};

export default ServicesPage;