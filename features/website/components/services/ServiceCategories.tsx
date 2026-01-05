import React from 'react';

const ServiceCategories: React.FC = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Category 1 */}
            <div className="p-12 rounded-[40px] border border-slate-100 bg-white flex flex-col items-center text-center">
                <div className="w-20 h-20 rounded-full bg-indigo-50 flex items-center justify-center text-3xl text-indigo-600 mb-8">
                    ⚡
                </div>
                <h3 className="font-serif text-2xl font-bold text-slate-900 mb-4">Intelligence & <br/> Automation</h3>
                <p className="text-slate-500 font-light text-sm mb-8 leading-relaxed">
                    Core infrastructure to remove manual labor and increase processing speed.
                </p>
                <div className="space-y-3 w-full">
                    {['Post-Call Action Architect', 'Natural Language Command', 'Workflow Orchestrator'].map((s, i) => (
                        <div key={i} className="flex items-center gap-3 p-3 rounded-xl bg-slate-50">
                            <div className="w-1.5 h-1.5 rounded-full bg-indigo-400"></div>
                            <span className="text-xs font-bold text-slate-700 uppercase tracking-wide">{s}</span>
                        </div>
                    ))}
                </div>
            </div>

            {/* Category 2 */}
            <div className="p-12 rounded-[40px] border border-slate-100 bg-white flex flex-col items-center text-center">
                <div className="w-20 h-20 rounded-full bg-indigo-50 flex items-center justify-center text-3xl text-indigo-600 mb-8">
                    🤝
                </div>
                <h3 className="font-serif text-2xl font-bold text-slate-900 mb-4">Lead & Client <br/> Management</h3>
                <p className="text-slate-500 font-light text-sm mb-8 leading-relaxed">
                    Front-line tools to engage, qualify, and convert leads automatically.
                </p>
                <div className="space-y-3 w-full">
                    {['Lead Intelligence Engine', 'WhatsApp Automation', 'Sentiment Monitor'].map((s, i) => (
                        <div key={i} className="flex items-center gap-3 p-3 rounded-xl bg-slate-50">
                            <div className="w-1.5 h-1.5 rounded-full bg-indigo-400"></div>
                            <span className="text-xs font-bold text-slate-700 uppercase tracking-wide">{s}</span>
                        </div>
                    ))}
                </div>
            </div>

             {/* Category 3 */}
             <div className="p-12 rounded-[40px] border border-slate-100 bg-white flex flex-col items-center text-center">
                <div className="w-20 h-20 rounded-full bg-indigo-50 flex items-center justify-center text-3xl text-indigo-600 mb-8">
                    📊
                </div>
                <h3 className="font-serif text-2xl font-bold text-slate-900 mb-4">Planning & <br/> Analytics</h3>
                <p className="text-slate-500 font-light text-sm mb-8 leading-relaxed">
                    Strategic oversight to visualize data and plan complex projects.
                </p>
                <div className="space-y-3 w-full">
                    {['Blueprint Generation', 'Intelligence Dashboard', 'Predictive Reporting'].map((s, i) => (
                        <div key={i} className="flex items-center gap-3 p-3 rounded-xl bg-slate-50">
                            <div className="w-1.5 h-1.5 rounded-full bg-indigo-400"></div>
                            <span className="text-xs font-bold text-slate-700 uppercase tracking-wide">{s}</span>
                        </div>
                    ))}
                </div>
            </div>

        </div>
      </div>
    </section>
  );
};

export default ServiceCategories;