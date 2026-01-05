import React from 'react';

const ServicesTimeline: React.FC = () => {
  return (
    <section className="py-24 bg-[#FAFAFA] border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
            {/* Connecting Line (Desktop) */}
            <div className="hidden md:block absolute top-[40px] left-0 w-full h-0.5 border-t-2 border-dotted border-slate-300 -z-10"></div>

            {[
                { step: "01", title: "Discover", desc: "Explore our AI-powered services and identify your needs." },
                { step: "02", title: "Configure", desc: "Customize workflows and intelligence parameters for your business." },
                { step: "03", title: "Activate", desc: "AI begins learning your patterns and automating processes." },
                { step: "04", title: "Optimize", desc: "Continuous improvement through machine learning and feedback." }
            ].map((s, i) => (
                <div key={i} className="flex flex-col items-center text-center bg-[#FAFAFA]">
                    <div className="w-20 h-20 rounded-full bg-white border border-slate-200 flex items-center justify-center shadow-sm mb-6 z-10 relative">
                        <span className={`font-serif text-2xl font-bold ${i === 0 ? 'text-indigo-600' : 'text-slate-400'}`}>{s.step}</span>
                    </div>
                    <h3 className="font-serif text-xl font-bold text-slate-900 mb-3">{s.title}</h3>
                    <p className="text-sm text-slate-500 font-light leading-relaxed max-w-[200px]">
                        {s.desc}
                    </p>
                </div>
            ))}
        </div>

      </div>
    </section>
  );
};

export default ServicesTimeline;