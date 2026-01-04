import React from 'react';
import { useNavigate } from 'react-router-dom';

const Hero: React.FC = () => {
  const navigate = useNavigate();

  const handleStart = () => {
    navigate('/wizard/step-1');
  };

  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
      {/* Light Gradient Mesh Background */}
      <div className="absolute top-0 left-0 w-full h-[120vh] -z-10 opacity-60 pointer-events-none">
          <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-blue-100/50 rounded-full blur-[120px] mix-blend-multiply animate-pulse-slow"></div>
          <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-emerald-50 rounded-full blur-[150px] mix-blend-multiply opacity-60"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-slate-200 shadow-sm mb-8 animate-fade-in">
          <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] animate-pulse"></span>
          <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500">Accepting New Clients for Q4</span>
        </div>

        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold leading-[1.1] mb-8 tracking-tight text-slate-900">
          We Build AI Products <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-900 via-slate-700 to-slate-500">
            That Generate Revenue
          </span>
        </h1>

        <p className="text-lg md:text-xl text-slate-500 max-w-2xl mx-auto mb-10 font-light leading-relaxed">
          From chatbots to full-stack platforms—launch production-ready AI in 8-12 weeks. 
          No fluff, just measurable ROI. Trusted by 50+ companies.
        </p>

        <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-20 animate-fade-in-up">
          <button 
            onClick={handleStart}
            className="w-full md:w-auto px-8 py-4 bg-[#10B981] hover:bg-[#059669] text-white rounded-lg font-bold text-sm uppercase tracking-wider transition-all hover:translate-y-[-2px] shadow-[0_10px_40px_rgba(16,185,129,0.3)]"
          >
            Start Your Project
          </button>
          <button className="w-full md:w-auto px-8 py-4 bg-white hover:bg-slate-50 border border-slate-200 text-slate-700 rounded-lg font-bold text-sm uppercase tracking-wider transition-all shadow-sm hover:shadow-md">
            View Case Studies
          </button>
        </div>

        {/* Floating Value Props */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
          {[
            { label: "8-Week Launch", sub: "MVP to Production" },
            { label: "87x Avg ROI", sub: "Real Business Results" },
            { label: "95% On-Time", sub: "Zero Delays" }
          ].map((prop, i) => (
            <div key={i} className="p-4 rounded-xl bg-white border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="text-[#10B981] font-bold text-lg">{prop.label}</div>
              <div className="text-slate-500 text-xs uppercase tracking-wider">{prop.sub}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;