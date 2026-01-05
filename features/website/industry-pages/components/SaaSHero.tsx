
import React from 'react';
import { useNavigate } from 'react-router-dom';

const SaaSHero: React.FC = () => {
  const navigate = useNavigate();

  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-gradient-to-b from-slate-50 via-white to-white">
      {/* Background Decor: Clean, architectural lines */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-50/50 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-indigo-50/50 rounded-full blur-[100px] translate-y-1/3 -translate-x-1/4"></div>
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(226,232,240,0.4)_1px,transparent_1px),linear-gradient(90deg,rgba(226,232,240,0.4)_1px,transparent_1px)] bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,black,transparent)]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
        
        {/* Left Column: Typography & CTAs */}
        <div className="lg:w-1/2 text-center lg:text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-slate-200 shadow-sm mb-8 animate-fade-in">
            <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 animate-pulse"></span>
            <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500">Autonomous Growth Infrastructure</span>
          </div>

          <h1 className="font-serif text-5xl md:text-7xl font-bold leading-[1.1] mb-6 tracking-tight text-slate-900 animate-fade-in-up">
            Scale Your SaaS <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-blue-500">
              Without Headcount
            </span>
          </h1>

          <p className="text-xl text-slate-500 mb-10 font-light leading-relaxed max-w-xl mx-auto lg:mx-0 animate-fade-in-up delay-100">
            Break the linear relationship between revenue and support staff. 
            Deploy intelligent agents that handle onboarding, retention, and support—infinitely.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 animate-fade-in-up delay-200">
            <button 
              onClick={() => navigate('/contact')}
              className="px-8 py-4 bg-slate-900 hover:bg-slate-800 text-white rounded-full font-bold text-sm uppercase tracking-wider transition-all hover:-translate-y-1 shadow-xl shadow-slate-900/20"
            >
              Automate Operations
            </button>
            <button 
              onClick={() => navigate('/projects')}
              className="px-8 py-4 bg-white hover:bg-slate-50 border border-slate-200 text-slate-700 rounded-full font-bold text-sm uppercase tracking-wider transition-all shadow-sm hover:shadow-md"
            >
              View SaaS Case Study
            </button>
          </div>
        </div>

        {/* Right Column: Visual Composition */}
        <div className="lg:w-1/2 relative w-full h-[500px] flex items-center justify-center animate-fade-in delay-300">
            {/* Base Platform */}
            <div className="absolute w-full h-[300px] bg-gradient-to-tr from-slate-100 to-white border border-slate-200 rounded-2xl transform rotate-x-12 rotate-y-12 rotate-z-2 shadow-2xl flex items-center justify-center overflow-hidden">
                <div className="w-full h-full opacity-20 bg-[radial-gradient(#6366f1_1px,transparent_1px)] [background-size:16px_16px]"></div>
            </div>

            {/* Floating Card 1: Growth Metric */}
            <div className="absolute top-10 right-10 bg-white/80 backdrop-blur-md p-4 rounded-xl border border-white/50 shadow-lg w-48 animate-[float_6s_ease-in-out_infinite]">
                <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-bold text-slate-400 uppercase">MRR Growth</span>
                    <span className="text-green-500 text-xs font-bold">+24%</span>
                </div>
                <div className="h-12 w-full flex items-end gap-1">
                    {[30, 45, 35, 60, 50, 75, 90].map((h, i) => (
                        <div key={i} className="flex-1 bg-indigo-500 rounded-t-sm opacity-80" style={{ height: `${h}%` }}></div>
                    ))}
                </div>
            </div>

            {/* Floating Card 2: Churn Alert (Resolved) */}
            <div className="absolute bottom-20 left-0 bg-white/80 backdrop-blur-md p-4 rounded-xl border border-white/50 shadow-lg w-56 animate-[float_5s_ease-in-out_infinite_reverse]">
                <div className="flex items-center gap-3 mb-3">
                    <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center text-green-600">✓</div>
                    <div>
                        <div className="text-xs font-bold text-slate-800">Churn Risk Averted</div>
                        <div className="text-[10px] text-slate-400">Agent deployed retention offer</div>
                    </div>
                </div>
                <div className="w-full bg-slate-100 h-1.5 rounded-full overflow-hidden">
                    <div className="bg-green-500 w-[92%] h-full"></div>
                </div>
            </div>

            {/* Floating Card 3: Active Users */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-slate-900 text-white p-5 rounded-2xl shadow-2xl border border-slate-700 w-64 z-20 hover:scale-105 transition-transform duration-500">
                <div className="flex justify-between items-center mb-4">
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Live Users</span>
                    <div className="flex items-center gap-1">
                        <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                        <span className="text-xs font-mono">24,592</span>
                    </div>
                </div>
                <div className="space-y-3">
                    <div className="flex items-center gap-3 text-xs">
                        <div className="w-6 h-6 rounded bg-slate-800 flex items-center justify-center">🇺🇸</div>
                        <div className="flex-1 bg-slate-800 h-1.5 rounded-full overflow-hidden">
                            <div className="bg-blue-500 w-[70%] h-full animate-[shimmer_2s_infinite]"></div>
                        </div>
                    </div>
                    <div className="flex items-center gap-3 text-xs">
                        <div className="w-6 h-6 rounded bg-slate-800 flex items-center justify-center">🇪🇺</div>
                        <div className="flex-1 bg-slate-800 h-1.5 rounded-full overflow-hidden">
                            <div className="bg-purple-500 w-[45%] h-full"></div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
      </div>
    </section>
  );
};

export default SaaSHero;
