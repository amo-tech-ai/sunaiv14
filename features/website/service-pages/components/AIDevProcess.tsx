import React from 'react';

const AIDevProcess: React.FC = () => {
  return (
    <section className="py-24 bg-[#020203] text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4">Engineering Methodology</h2>
          <p className="text-slate-400">From raw data to deployed intelligence in 3 sprints.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            {/* Connector Line Desktop */}
            <div className="hidden md:block absolute top-[28px] left-0 w-full h-0.5 bg-gradient-to-r from-purple-900 via-purple-500 to-cyan-500 opacity-30"></div>

            {[
                { step: "01", title: "Discovery & Data Audit", desc: "We map your data topology, security constraints, and high-value automation targets.", icon: "🔍" },
                { step: "02", title: "Prototype & Fine-Tune", desc: "We select base models (Llama, GPT-4) and train them on your proprietary datasets.", icon: "⚙️" },
                { step: "03", title: "Production Deployment", desc: "Containerized deployment to your cloud or on-prem environment with monitoring pipelines.", icon: "🚀" }
            ].map((p, i) => (
                <div key={i} className="relative flex flex-col items-center text-center">
                    <div className="w-14 h-14 rounded-full bg-[#050508] border border-purple-500/50 flex items-center justify-center text-xl relative z-10 shadow-[0_0_20px_rgba(168,85,247,0.3)] mb-6">
                        {p.icon}
                    </div>
                    <h3 className="font-bold text-xl mb-3">{p.title}</h3>
                    <p className="text-slate-400 text-sm leading-relaxed max-w-xs">{p.desc}</p>
                </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default AIDevProcess;