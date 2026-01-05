
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SaaSHero from './components/SaaSHero';

const SaaSPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-indigo-500 selection:text-white">
      <Navbar />
      <SaaSHero />
      {/* Additional sections will be added here (Use Cases, Metrics, Architecture) */}
      <Footer />
    </div>
  );
};

export default SaaSPage;
