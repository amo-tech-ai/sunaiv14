import React from 'react';
import { useNavigate } from 'react-router-dom';

const WebDevHero: React.FC = () => {
  const navigate = useNavigate();

  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-gradient-to-b from-slate-50 to-white">
        {/* Abstract Light Mesh Background */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-indigo-50/60 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3 pointer-events-none mix-blend-multiply"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-emerald-50/60 rounded-full blur-[100px] translate-y-1/3 -translate-x-1/4 pointer-events-none mix-blend-multiply"></div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-slate-200 shadow-sm mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] animate-pulse"></span>
              <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500">8-Week Launch Timeline</span>
            </div>

            <h1 className="font-serif text-5xl md:text-7xl font-bold leading-[1.1] mb-6 tracking-tight text-slate-900">
              AI-Powered <br/> 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-900 via-slate-700 to-slate-500">
                Web Architecture
              </span>
            </h1>
            
            <p className="text-xl text-slate-500 mb-10 font-light leading-relaxed max-w-xl">
              Full-stack web applications with React, Next.js, and deep AI integration. 
              Built for startups that demand excellence.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={() => navigate('/wizard/step-1')}
                className="px-8 py-4 bg-[#10B981] hover:bg-[#059669] text-white rounded-lg font-bold text-sm uppercase tracking-wider transition-all hover:-translate-y-1 shadow-[0_10px_40px_rgba(16,185,129,0.3)]"
              >
                Start Project
              </button>
              <button 
                onClick={() => document.getElementById('case-studies')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-4 bg-white hover:bg-slate-50 border border-slate-200 text-slate-700 rounded-lg font-bold text-sm uppercase tracking-wider transition-all shadow-sm"
              >
                View Portfolio
              </button>
            </div>
          </div>

          <div className="lg:w-1/2 relative">
            <div className="relative z-10 bg-white border border-slate-200 rounded-2xl shadow-2xl p-2 transform rotate-2 hover:rotate-0 transition-transform duration-500">
                <div className="absolute inset-0 bg-gradient-to-tr from-[#10B981]/5 to-transparent rounded-2xl pointer-events-none"></div>
                <img 
                    src="https://placehold.co/800x600/f8fafc/cbd5e1?text=AI+Dashboard+Interface" 
                    alt="Dashboard Interface" 
                    className="rounded-xl w-full h-auto"
                />
            </div>
            {/* Decorative Grid */}
            <div className="absolute -inset-4 border border-slate-100 rounded-3xl -z-10 transform -rotate-2 bg-slate-50"></div>
          </div>
        </div>
      </section>
  );
};

export default WebDevHero;