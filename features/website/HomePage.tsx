import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ServicesGrid from './components/ServicesGrid';
import ProcessTimeline from './components/ProcessTimeline';
import StatsSection from './components/StatsSection';
import CTASection from './components/CTASection';
import Footer from './components/Footer';

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#FAFAFA] text-slate-900 font-sans overflow-x-hidden selection:bg-[#10B981] selection:text-white">
      <Navbar />
      <Hero />
      <ServicesGrid />
      <ProcessTimeline />
      <StatsSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default HomePage;