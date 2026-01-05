
import React from 'react';

const MVPResults: React.FC = () => {
  return (
    <section className="py-16 bg-[#0A1628] text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-white/10">
            {[
                { value: "8 Weeks", label: "Avg. Time to Market" },
                { value: "100%", label: "IP Ownership" },
                { value: "Production", label: "Grade Infrastructure" }
            ].map((stat, i) => (
                <div key={i} className="py-4 md:py-0 md:px-4">
                    <div className="font-serif text-4xl md:text-5xl font-bold text-emerald-400 mb-2">{stat.value}</div>
                    <div className="text-sm font-medium text-slate-400 uppercase tracking-widest">{stat.label}</div>
                </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default MVPResults;
