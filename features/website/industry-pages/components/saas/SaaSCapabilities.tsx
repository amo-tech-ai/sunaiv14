
import React from 'react';

const SaaSCapabilities: React.FC = () => {
  return (
    <section className="py-24 bg-white border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-slate-900 mb-4">Engineered for Scale</h2>
            <p className="text-slate-500 max-w-2xl mx-auto">
                Built to handle enterprise loads with consumer-grade polish.
            </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
                { title: "Natural Language SQL", desc: "Empower non-technical users to query your database using plain English.", icon: "🔍" },
                { title: "Intelligent Triage", desc: "Auto-tag and route support tickets based on sentiment and urgency.", icon: "🏷️" },
                { title: "Feature Flagging", desc: "Roll out AI features to specific cohorts with zero deployment risk.", icon: "🚩" },
                { title: "Dynamic Pricing", desc: "Optimize subscription tiers based on usage patterns and market demand.", icon: "💰" },
                { title: "Automated Docs", desc: "Keep your API documentation and help center in sync with code changes.", icon: "📚" },
                { title: "Smart Search", desc: "Vector-based semantic search that actually finds what users are looking for.", icon: "⚡" },
            ].map((cap, i) => (
                <div key={i} className="p-8 rounded-xl border border-slate-100 hover:border-indigo-100 hover:bg-indigo-50/30 transition-colors group">
                    <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">{cap.icon}</div>
                    <h3 className="font-bold text-lg text-slate-900 mb-2">{cap.title}</h3>
                    <p className="text-sm text-slate-500 leading-relaxed">{cap.desc}</p>
                </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default SaaSCapabilities;
