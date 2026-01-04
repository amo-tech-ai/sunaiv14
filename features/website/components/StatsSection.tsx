import React from 'react';

const StatsSection: React.FC = () => {
  return (
    <section className="py-24 relative overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
              {[
                  { value: "50+", label: "Projects Delivered" },
                  { value: "$47M+", label: "Client Revenue" },
                  { value: "87x", label: "Average ROI" },
                  { value: "95%", label: "On-Time Delivery" }
              ].map((stat, i) => (
                  <div key={i} className="text-center p-6 bg-slate-50 rounded-2xl border border-slate-100">
                      <div className="font-serif text-4xl md:text-5xl font-bold text-slate-900 mb-2">{stat.value}</div>
                      <div className="text-xs font-bold text-[#10B981] uppercase tracking-widest">{stat.label}</div>
                  </div>
              ))}
          </div>

          {/* Logo Ticker Placeholder */}
          <div className="border-t border-b border-slate-100 py-12">
              <div className="flex justify-between items-center opacity-40 grayscale hover:grayscale-0 transition-all duration-500 px-10">
                  <span className="text-2xl font-bold font-serif text-slate-400 hover:text-slate-800">TechNova</span>
                  <span className="text-2xl font-bold font-serif text-slate-400 hover:text-slate-800">Acme Corp</span>
                  <span className="text-2xl font-bold font-serif text-slate-400 hover:text-slate-800">GlobalFlow</span>
                  <span className="text-2xl font-bold font-serif text-slate-400 hover:text-slate-800">Starlight</span>
                  <span className="text-2xl font-bold font-serif text-slate-400 hover:text-slate-800">Velociti</span>
              </div>
          </div>
      </div>
    </section>
  );
};

export default StatsSection;