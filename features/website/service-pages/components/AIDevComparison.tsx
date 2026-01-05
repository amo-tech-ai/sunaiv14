import React from 'react';

const AIDevComparison: React.FC = () => {
  return (
    <section className="py-32 bg-[#050508] text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4">Choose Your Intelligence</h2>
          <p className="text-slate-400">We don't just wrap GPT-4. We select the right architecture for your constraints.</p>
        </div>

        <div className="overflow-x-auto">
          <div className="min-w-[800px] border border-white/10 rounded-2xl bg-white/5 backdrop-blur-sm">
            <div className="grid grid-cols-4 p-6 border-b border-white/10 font-bold text-sm uppercase tracking-wider text-slate-400">
              <div className="col-span-1">Criteria</div>
              <div className="col-span-1 text-center">Public APIs (GPT-4)</div>
              <div className="col-span-1 text-center text-cyan-400">Custom Fine-Tune</div>
              <div className="col-span-1 text-center">Open Source (Llama)</div>
            </div>

            {[
              { label: "Data Privacy", gpt: "Shared Infrastructure", custom: "100% Private / On-Prem", open: "100% Private" },
              { label: "Domain Expertise", gpt: "Generalist", custom: "Specialist (Your Data)", open: "Generalist" },
              { label: "Latency", gpt: "Variable (API)", custom: "Optimized (<50ms)", open: "High Performance" },
              { label: "Cost at Scale", gpt: "High ($$$)", custom: "Low ($)", open: "Medium ($$)" },
              { label: "Ownership", gpt: "Rented Intelligence", custom: "Owned IP Asset", open: "Owned IP Asset" },
            ].map((row, i) => (
              <div key={i} className="grid grid-cols-4 p-6 border-b border-white/5 last:border-0 hover:bg-white/5 transition-colors">
                <div className="col-span-1 font-bold text-slate-300">{row.label}</div>
                <div className="col-span-1 text-center text-slate-500">{row.gpt}</div>
                <div className="col-span-1 text-center text-cyan-400 font-medium bg-cyan-500/10 rounded py-1 border border-cyan-500/20">{row.custom}</div>
                <div className="col-span-1 text-center text-slate-500">{row.open}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIDevComparison;