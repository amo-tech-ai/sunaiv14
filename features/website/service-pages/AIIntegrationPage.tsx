import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import AIDevHero from './components/AIDevHero';
import AIDevCapabilities from './components/AIDevCapabilities';
import AIDevComparison from './components/AIDevComparison';
import AIDevIntegration from './components/AIDevIntegration';
import AIDevROI from './components/AIDevROI';
import AIDevProcess from './components/AIDevProcess';

const AIIntegrationPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#050508] text-white font-sans selection:bg-purple-500 selection:text-white">
      <Navbar />
      <AIDevHero />
      <AIDevCapabilities />
      <AIDevComparison />
      <AIDevIntegration />
      <AIDevROI />
      <AIDevProcess />
      
      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-b from-[#020203] to-purple-900/20 text-center">
        <div className="max-w-4xl mx-auto px-6">
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-8">Ready to Build Your Brain?</h2>
            <p className="text-slate-400 text-lg mb-12">
                Stop relying on generic models. Let's engineer a solution that owns your vertical.
            </p>
            <button className="px-10 py-4 bg-white text-black rounded-full font-bold text-sm uppercase tracking-wider hover:bg-slate-200 transition-colors shadow-xl">
                Start Engineering
            </button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AIIntegrationPage;