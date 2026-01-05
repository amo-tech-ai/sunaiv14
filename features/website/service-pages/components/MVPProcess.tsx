
import React, { useRef, useState, useEffect } from 'react';

const phases = [
  { 
    step: "01", 
    title: "Scope & Blueprint", 
    time: "Weeks 1-2",
    desc: "We strip features down to the absolute core value proposition to ensure speed.",
    icon: "📐"
  },
  { 
    step: "02", 
    title: "Build & Integrate", 
    time: "Weeks 3-5",
    desc: "Rapid development of frontend, backend, and AI logic connection.",
    icon: "🔨"
  },
  { 
    step: "03", 
    title: "Test & Refine", 
    time: "Weeks 6-7",
    desc: "User acceptance testing, bug squashing, and prompt tuning.",
    icon: "⚖️"
  },
  { 
    step: "04", 
    title: "Launch", 
    time: "Week 8",
    desc: "Deployment to production environment. Handover of IP.",
    icon: "🚀"
  }
];

const MVPProcess: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [lineWidth, setLineWidth] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      
      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Animation Logic:
      // Start drawing when the section is 75% visible (near bottom of viewport)
      // Finish drawing when the section is 25% visible (near top of viewport)
      const startY = windowHeight * 0.75;
      const endY = windowHeight * 0.25;
      
      const progress = Math.max(0, Math.min(1, (startY - rect.top) / (startY - endY)));
      
      setLineWidth(progress * 100);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="py-24 bg-[#FAFAFA] border-y border-slate-200 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4 text-slate-900">The 8-Week Sprint</h2>
          <p className="text-slate-500 max-w-2xl mx-auto">From concept to functional product in two months. A rigid, high-velocity schedule.</p>
        </div>

        <div className="relative" ref={containerRef}>
          {/* Connecting Line (Desktop) - Background Track */}
          <div className="hidden md:block absolute top-[60px] left-0 w-full h-0.5 bg-slate-200 -z-10"></div>
          
          {/* Connecting Line (Desktop) - Animated Emerald Fill */}
          <div 
            className="hidden md:block absolute top-[60px] left-0 h-0.5 bg-[#10B981] -z-10 transition-all duration-100 ease-linear shadow-[0_0_15px_rgba(16,185,129,0.5)]"
            style={{ width: `${lineWidth}%` }}
          ></div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {phases.map((phase, i) => {
              // Calculate activation threshold based on column index
              const threshold = ((i + 0.2) / phases.length) * 100;
              const isActive = lineWidth >= threshold;

              return (
                <div key={i} className={`flex flex-col items-center text-center transition-opacity duration-700 ${isActive ? 'opacity-100' : 'opacity-40 md:opacity-30'}`}>
                  {/* Node Circle */}
                  <div className={`
                    w-20 h-20 md:w-28 md:h-28 rounded-full bg-white border flex items-center justify-center text-3xl md:text-4xl shadow-lg mb-6 z-10 transition-all duration-500
                    ${isActive 
                      ? 'border-[#10B981] text-slate-900 scale-110 ring-4 ring-[#10B981]/10' 
                      : 'border-slate-200 text-slate-300 scale-100'}
                  `}>
                    {phase.icon}
                  </div>

                  {/* Content */}
                  <div className={`transition-transform duration-500 ${isActive ? 'translate-y-0' : 'translate-y-4'}`}>
                    <div className="inline-block px-3 py-1 rounded-full bg-slate-100 text-slate-500 text-[10px] font-bold uppercase tracking-widest mb-3">
                        {phase.time}
                    </div>
                    <h3 className={`font-serif text-xl font-bold mb-2 transition-colors duration-300 ${isActive ? 'text-slate-900' : 'text-slate-400'}`}>
                        {phase.title}
                    </h3>
                    <p className="text-sm text-slate-500 leading-relaxed max-w-[200px] mx-auto">
                        {phase.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MVPProcess;
