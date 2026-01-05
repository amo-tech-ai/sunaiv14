
import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ProcessHero from './components/process/ProcessHero';
import ProcessTimeline from './components/process/ProcessTimeline';
import ProcessMatrix from './components/process/ProcessMatrix';
import ProcessComparison from './components/process/ProcessComparison';
import { useNavigate } from 'react-router-dom';

const ProcessPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-emerald-500 selection:text-white">
      <Navbar />
      <ProcessHero />
      <ProcessTimeline />
      <ProcessMatrix />
      <ProcessComparison />
      
      {/* Footer CTA */}
      <section className="py-24 bg-[#050508] text-center border-t border-white/10">
        <div className="max-w-4xl mx-auto px-6">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-white mb-8">Ready to Start Phase 1?</h2>
            <p className="text-slate-400 text-lg mb-12">
                The first step is a Discovery Audit. We'll map your business logic and tell you if AI is even the right fit.
            </p>
            <button 
                onClick={() => navigate('/wizard/step-1')}
                className="px-10 py-4 bg-emerald-600 text-white rounded-full font-bold text-sm uppercase tracking-wider hover:bg-emerald-500 transition-colors shadow-xl shadow-emerald-900/20"
            >
                Start Discovery
            </button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ProcessPage;
