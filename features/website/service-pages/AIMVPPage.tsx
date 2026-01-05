
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import MVPHero from './components/MVPHero';
import MVPComparison from './components/MVPComparison';
import MVPFeatures from './components/MVPFeatures';
import MVPProcess from './components/MVPProcess';
import MVPUseCases from './components/MVPUseCases';
import MVPResults from './components/MVPResults';
import MVPWhy from './components/MVPWhy';
import MVPCTA from './components/MVPCTA';

const AIMVPPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-[#10B981] selection:text-white">
      <Navbar />
      <MVPHero />
      <MVPComparison />
      <MVPFeatures />
      <MVPProcess />
      <MVPUseCases />
      <MVPResults />
      <MVPWhy />
      <MVPCTA />
      <Footer />
    </div>
  );
};

export default AIMVPPage;
