
import React, { useRef, useState, useEffect } from 'react';

const ProcessTimeline: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [lineWidth, setLineWidth] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      
      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Calculate scroll progress relative to the section
      // Start: When section top enters bottom 85% of viewport
      // End: When section top reaches top 15% of viewport
      const startY = windowHeight * 0.85;
      const endY = windowHeight * 0.15;
      
      const progress = Math.max(0, Math.min(1, (startY - rect.top) / (startY - endY)));
      
      setLineWidth(progress * 100);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="process" className="py-24 bg-[#FAFAFA] border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4 text-slate-900">Our Battle-Tested Process</h2>
          <p className="text-slate-500">We've delivered 50+ projects using this exact 7-phase methodology.</p>
        </div>

        <div className="relative" ref={containerRef}>
          {/* Connecting Line (Desktop) - Background */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-slate-200 -translate-y-1/2"></div>
          
          {/* Connecting Line (Desktop) - Animated Foreground */}
          <div 
            className="hidden md:block absolute top-1/2 left-0 h-0.5 bg-[#10B981] -translate-y-1/2 transition-all duration-100 ease-linear shadow-[0_0_10px_rgba(16,185,129,0.5)]"
            style={{ width: `${lineWidth}%` }}
          ></div>
          
          <div className="grid grid-cols-1 md:grid-cols-7 gap-6 relative z-10">
            {[
              { step: "01", title: "Discovery", icon: "🔍" },
              { step: "02", title: "Design", icon: "✏️" },
              { step: "03", title: "Frontend", icon: "🎨" },
              { step: "04", title: "Backend", icon: "🗄️" },
              { step: "05", title: "AI Model", icon: "🧠" },
              { step: "06", title: "Polish", icon: "✨" },
              { step: "07", title: "Launch", icon: "🎉" }
            ].map((phase, i) => {
              // Calculate if this node is "active" based on line width
              // 7 steps approx 14.28% each. 
              // Center of step i is approx ((i) / 6) * 100 for a 0-indexed spread, 
              // but grid columns are evenly spaced.
              // Let's approximate activation when line passes the center of the node column.
              const threshold = ((i + 0.2) / 7) * 100; 
              const isActive = lineWidth >= threshold;

              return (
                <div key={i} className="flex flex-row md:flex-col items-center gap-4 md:gap-0">
                  <div className={`
                    w-12 h-12 md:w-16 md:h-16 rounded-full bg-white border flex items-center justify-center text-xl md:text-2xl shadow-[0_4px_10px_rgba(16,185,129,0.15)] md:mb-4 shrink-0 z-10 transition-all duration-500
                    ${isActive 
                      ? 'border-[#10B981] text-[#10B981] scale-110 shadow-[0_0_20px_rgba(16,185,129,0.3)]' 
                      : 'border-slate-200 text-slate-300 scale-100'}
                  `}>
                    {phase.icon}
                  </div>
                  <div className="text-left md:text-center">
                    <div className={`text-[10px] font-bold uppercase tracking-widest mb-1 transition-colors duration-500 ${isActive ? 'text-[#10B981]' : 'text-slate-400'}`}>
                      Week {i+1}
                    </div>
                    <div className={`font-bold transition-colors duration-500 ${isActive ? 'text-slate-900' : 'text-slate-300'}`}>
                      {phase.title}
                    </div>
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

export default ProcessTimeline;
