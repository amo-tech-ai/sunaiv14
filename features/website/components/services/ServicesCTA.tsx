import React from 'react';
import { useNavigate } from 'react-router-dom';

const ServicesCTA: React.FC = () => {
  const navigate = useNavigate();

  return (
    <section className="py-32 bg-[#FCFCFC] text-center">
      <div className="max-w-4xl mx-auto px-6">
        <span className="text-[10px] font-bold text-indigo-500 uppercase tracking-widest mb-6 block">
            READY TO TRANSFORM YOUR CRM?
        </span>
        <h2 className="font-serif text-5xl md:text-6xl font-bold text-slate-900 mb-6">
            Start with Intelligence
        </h2>
        <p className="text-xl text-slate-500 font-light mb-12 max-w-2xl mx-auto">
            Book a 30-minute strategy session to discover which services fit your business model.
        </p>
        <div className="flex flex-col md:flex-row items-center justify-center gap-4">
          <button onClick={() => navigate('/wizard/step-1')} className="px-10 py-5 bg-slate-900 text-white rounded-full font-bold text-sm uppercase tracking-wider hover:bg-slate-800 transition-all hover:-translate-y-1 shadow-xl">
            Book Strategy Session
          </button>
          <button onClick={() => navigate('/pricing')} className="px-10 py-5 bg-white border border-slate-200 text-slate-900 rounded-full font-bold text-sm uppercase tracking-wider hover:bg-slate-50 transition-colors">
            View Pricing
          </button>
        </div>
        <p className="mt-8 text-xs text-slate-400">
            No credit card required • 30-day guarantee • Cancel anytime
        </p>
      </div>
    </section>
  );
};

export default ServicesCTA;