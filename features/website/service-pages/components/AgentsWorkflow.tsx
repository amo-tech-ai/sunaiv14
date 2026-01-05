import React from 'react';

const AgentsWorkflow: React.FC = () => {
  return (
    <section className="py-24 bg-[#050508] border-y border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-white mb-6">Orchestrated Autonomy</h2>
            <p className="text-slate-400 max-w-2xl">
                Agents don't just chat; they perform actions. Watch how a single trigger initiates a multi-step workflow across your stack.
            </p>
        </div>

        <div className="relative p-10 border border-white/10 rounded-2xl bg-[#020203]">
            {/* Animated Connector Line */}
            <div className="absolute top-1/2 left-10 right-10 h-0.5 bg-slate-800 -translate-y-1/2 z-0 hidden md:block">
                <div className="absolute top-0 left-0 h-full w-20 bg-gradient-to-r from-transparent via-orange-500 to-transparent animate-[shimmer_3s_infinite]"></div>
            </div>

            <div className="relative z-10 grid grid-cols-1 md:grid-cols-4 gap-8">
                {[
                    { title: "Trigger", desc: "New Lead (HubSpot)", icon: "⚡" },
                    { title: "Research Agent", desc: "Enrich Data (LinkedIn)", icon: "🔎" },
                    { title: "Sales Agent", desc: "Draft Email (Gmail)", icon: "✉️" },
                    { title: "Result", desc: "Meeting Booked", icon: "✅" },
                ].map((step, i) => (
                    <div key={i} className="flex flex-col items-center text-center">
                        <div className={`w-16 h-16 rounded-2xl border flex items-center justify-center text-2xl mb-4 bg-slate-900 shadow-xl transition-all duration-500 ${i === 1 || i === 2 ? 'border-orange-500/50 shadow-orange-500/20' : 'border-slate-700'}`}>
                            {step.icon}
                        </div>
                        <h4 className="font-bold text-white mb-1">{step.title}</h4>
                        <p className="text-xs text-slate-500 font-mono">{step.desc}</p>
                    </div>
                ))}
            </div>
        </div>
      </div>
    </section>
  );
};

export default AgentsWorkflow;