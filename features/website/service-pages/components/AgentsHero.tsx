import React from 'react';
import { useNavigate } from 'react-router-dom';

const AgentsHero: React.FC = () => {
  const navigate = useNavigate();

  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-[#050508] text-white">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-orange-600/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col items-center text-center">
        
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 backdrop-blur-sm mb-8 animate-fade-in">
          <span className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-pulse"></span>
          <span className="text-[10px] font-bold uppercase tracking-widest text-orange-200">24/7 Autonomy</span>
        </div>

        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold leading-[1.1] mb-8 tracking-tight text-white animate-fade-in-up">
          AI Agents That <br/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-purple-600">
            Work While You Sleep
          </span>
        </h1>

        <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-12 font-light leading-relaxed animate-fade-in-up delay-100">
          Scale your workforce instantly without headcount. Deploy autonomous digital employees that handle support, sales, and operations 24/7.
        </p>

        <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-20 animate-fade-in-up delay-200">
          <button 
            onClick={() => navigate('/contact')}
            className="w-full md:w-auto px-8 py-4 bg-[#f57c00] hover:bg-[#e65100] text-white rounded-lg font-bold text-sm uppercase tracking-wider transition-all hover:-translate-y-1 shadow-[0_0_40px_rgba(245,124,0,0.3)]"
          >
            Deploy Agents
          </button>
          <button className="w-full md:w-auto px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 text-white rounded-lg font-bold text-sm uppercase tracking-wider transition-all backdrop-blur-sm">
            See Live Demo
          </button>
        </div>

        {/* Orbit Visualization */}
        <div className="relative w-full max-w-4xl h-[400px] hidden md:flex items-center justify-center animate-fade-in delay-300">
            {/* Core */}
            <div className="absolute w-32 h-32 bg-slate-900 border border-slate-700 rounded-full flex items-center justify-center z-10 shadow-[0_0_50px_rgba(147,51,234,0.2)]">
                <span className="text-4xl">🧠</span>
            </div>
            
            {/* Orbit Rings */}
            <div className="absolute w-[300px] h-[300px] border border-white/5 rounded-full animate-[spin_20s_linear_infinite]"></div>
            <div className="absolute w-[500px] h-[500px] border border-white/5 rounded-full animate-[spin_30s_linear_infinite_reverse]"></div>

            {/* Satellites */}
            <div className="absolute w-[300px] h-[300px] animate-[spin_20s_linear_infinite]">
                <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 bg-slate-800 border border-orange-500 rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(245,124,0,0.4)]">
                    <span className="text-xs">Sales</span>
                </div>
            </div>
            <div className="absolute w-[500px] h-[500px] animate-[spin_30s_linear_infinite_reverse]">
                <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 bg-slate-800 border border-purple-500 rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(168,85,247,0.4)]">
                    <span className="text-xs">Support</span>
                </div>
                <div className="absolute top-1/2 -right-6 -translate-y-1/2 w-12 h-12 bg-slate-800 border border-blue-500 rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(59,130,246,0.4)]">
                    <span className="text-xs">Data</span>
                </div>
            </div>
        </div>

      </div>
    </section>
  );
};

export default AgentsHero;