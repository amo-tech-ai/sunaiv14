import React from 'react';

const ProcessTimeline: React.FC = () => {
  return (
    <section id="process" className="py-24 bg-[#FAFAFA] border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4 text-slate-900">Our Battle-Tested Process</h2>
          <p className="text-slate-500">We've delivered 50+ projects using this exact 7-phase methodology.</p>
        </div>

        <div className="relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-slate-200 -translate-y-1/2"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-7 gap-6 relative z-10">
            {[
              { step: "01", title: "Discovery", icon: "🔍" },
              { step: "02", title: "Design", icon: "✏️" },
              { step: "03", title: "Frontend", icon: "🎨" },
              { step: "04", title: "Backend", icon: "🗄️" },
              { step: "05", title: "AI Model", icon: "🧠" },
              { step: "06", title: "Polish", icon: "✨" },
              { step: "07", title: "Launch", icon: "🎉" }
            ].map((phase, i) => (
              <div key={i} className="flex flex-row md:flex-col items-center gap-4 md:gap-0">
                <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-white border border-[#10B981] flex items-center justify-center text-xl md:text-2xl shadow-[0_4px_10px_rgba(16,185,129,0.15)] md:mb-4 shrink-0 z-10">
                  {phase.icon}
                </div>
                <div className="text-left md:text-center">
                  <div className="text-[10px] font-bold text-[#10B981] uppercase tracking-widest mb-1">Week {i+1}</div>
                  <div className="font-bold text-slate-900">{phase.title}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessTimeline;