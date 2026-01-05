
import React from 'react';

const ContactHero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-[#050508] text-white">
      {/* Background Ambience */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-emerald-900/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
        <h1 className="font-serif text-5xl md:text-7xl font-bold leading-[1.1] mb-8 tracking-tight">
          Let's Engineer <br/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">
            Your Future
          </span>
        </h1>

        <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-12 font-light leading-relaxed">
          We only take on 3 new enterprise clients per quarter to ensure 
          absolute focus and delivery excellence.
        </p>

        <div className="flex justify-center gap-12 text-sm font-medium text-slate-500 uppercase tracking-widest">
            <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                Accepting Q4 Projects
            </div>
            <div>San Francisco • London</div>
        </div>
      </div>
    </section>
  );
};

export default ContactHero;
