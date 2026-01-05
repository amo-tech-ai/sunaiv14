
import React from 'react';

const SaaSMetrics: React.FC = () => {
  return (
    <section className="py-20 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 divide-y md:divide-y-0 md:divide-x divide-slate-100">
            {[
                { label: "Support Cost Reduction", value: "-40%", trend: "↓" },
                { label: "Feature Adoption", value: "+25%", trend: "↑" },
                { label: "System Uptime", value: "99.9%", trend: "—" },
            ].map((stat, i) => (
                <div key={i} className="flex flex-col items-center justify-center py-4 md:py-0 px-4 text-center group">
                    <div className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-3">{stat.label}</div>
                    <div className="flex items-baseline gap-2">
                        <span className="text-5xl md:text-6xl font-mono font-bold text-slate-900 tracking-tight group-hover:text-indigo-600 transition-colors">
                            {stat.value}
                        </span>
                        <span className={`text-xl font-bold ${stat.trend === '↓' ? 'text-emerald-500' : stat.trend === '↑' ? 'text-emerald-500' : 'text-slate-300'}`}>
                            {stat.trend}
                        </span>
                    </div>
                </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default SaaSMetrics;
