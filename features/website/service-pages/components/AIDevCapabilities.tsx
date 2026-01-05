import React from 'react';

const AIDevCapabilities: React.FC = () => {
  return (
    <section id="capabilities" className="py-32 bg-[#020203] text-white border-y border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-20">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-white mb-6">Engineering Capabilities</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-cyan-500"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { title: "Natural Language", icon: "🧠", desc: "Custom LLMs fine-tuned for legal, medical, or technical jargon analysis." },
            { title: "Computer Vision", icon: "👁️", desc: "Automated quality control, document OCR, and visual asset generation." },
            { title: "Predictive Analytics", icon: "📈", desc: "Forecasting models for inventory, sales, and risk management." },
            { title: "Voice Agents", icon: "🎙️", desc: "Real-time speech-to-text and text-to-speech for customer support." },
            { title: "Vector Search", icon: "🔍", desc: "Semantic search engines that understand intent, not just keywords." },
            { title: "Autonomous Agents", icon: "🤖", desc: "Self-governing systems that execute complex multi-step workflows." },
            { title: "Data Pipelines", icon: "⚡", desc: "ETL infrastructure to feed your models with clean, real-time data." },
            { title: "Edge AI", icon: "📱", desc: "Optimized models running locally on devices for zero-latency privacy." }
          ].map((cap, i) => (
            <div key={i} className="group p-8 rounded-xl bg-white/5 border border-white/10 hover:border-purple-500/50 hover:bg-white/[0.07] transition-all duration-300">
              <div className="text-3xl mb-6 bg-white/10 w-14 h-14 rounded-lg flex items-center justify-center group-hover:bg-purple-500/20 transition-colors">
                {cap.icon}
              </div>
              <h3 className="font-bold text-white mb-3 tracking-wide">{cap.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{cap.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AIDevCapabilities;