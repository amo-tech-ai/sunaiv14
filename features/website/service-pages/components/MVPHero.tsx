
import React from 'react';
import { useNavigate } from 'react-router-dom';

const MVPHero: React.FC = () => {
  const navigate = useNavigate();

  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-[#050508] text-white">
      {/* Background Ambience - Emerald & Indigo */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-emerald-900/20 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3 pointer-events-none animate-pulse-slow"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-indigo-900/20 rounded-full blur-[120px] translate-y-1/3 -translate-x-1/4 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm mb-8 animate-fade-in">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
          <span className="text-[10px] font-bold uppercase tracking-widest text-emerald-200">Trusted by 50+ Founders</span>
        </div>

        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold leading-[1.1] mb-8 tracking-tight text-white animate-fade-in-up">
          Launch Your AI Product <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-indigo-400">
            In 8 Weeks
          </span>
        </h1>

        <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-12 font-light leading-relaxed animate-fade-in-up delay-100">
          Move beyond slide decks. We build production-ready AI MVPs that validate your idea, secure funding, and onboard real users.
        </p>

        <div className="flex flex-col md:flex-row items-center justify-center gap-4 animate-fade-in-up delay-200">
          <button 
            onClick={() => navigate('/wizard/step-1')}
            className="w-full md:w-auto px-8 py-4 bg-[#10B981] hover:bg-[#059669] text-white rounded-lg font-bold text-sm uppercase tracking-wider transition-all hover:-translate-y-1 shadow-[0_0_40px_rgba(16,185,129,0.3)]"
          >
            Start Your AI MVP
          </button>
          <button 
            onClick={() => navigate('/projects')}
            className="w-full md:w-auto px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 text-white rounded-lg font-bold text-sm uppercase tracking-wider transition-all backdrop-blur-sm"
          >
            See Examples
          </button>
        </div>

        {/* 3D Card Visual Placeholder */}
        <div className="mt-20 mx-auto max-w-4xl relative group animate-fade-in delay-300">
            <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500 to-indigo-500 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
            <div className="relative bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden shadow-2xl aspect-video flex items-center justify-center">
                <div className="text-center">
                    <div className="text-6xl mb-4">🚀</div>
                    <div className="text-slate-500 font-mono text-sm uppercase tracking-widest">Version 1.0 Live</div>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default MVPHero;
