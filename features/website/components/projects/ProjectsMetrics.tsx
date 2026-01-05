
import React from 'react';

const ProjectsMetrics: React.FC = () => {
  return (
    <section className="py-16 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
                { label: "Projects Delivered", value: "50+" },
                { label: "Client Revenue", value: "$47M+" },
                { label: "Avg ROI", value: "87x" },
                { label: "On-Time Rate", value: "95%" },
            ].map((stat, i) => (
                <div key={i} className="flex flex-col items-center md:items-start text-center md:text-left border-r last:border-r-0 border-slate-100">
                    <div className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mb-2">
                        {stat.value}
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                        <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">{stat.label}</span>
                    </div>
                </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsMetrics;
