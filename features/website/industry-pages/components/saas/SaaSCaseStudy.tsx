
import React from 'react';

const SaaSCaseStudy: React.FC = () => {
  return (
    <section className="py-24 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-6">
            <div className="bg-slate-900 rounded-[2.5rem] overflow-hidden text-white flex flex-col md:flex-row">
                <div className="md:w-1/2 p-12 md:p-20 flex flex-col justify-center">
                    <div className="flex items-center gap-3 mb-8">
                        <div className="w-10 h-10 bg-indigo-600 rounded-lg flex items-center justify-center font-bold">Tn</div>
                        <span className="font-bold text-xl tracking-wide">TechNova</span>
                    </div>
                    <h3 className="font-serif text-3xl md:text-4xl leading-tight mb-6">
                        "We reduced our customer support volume by 40% while doubling our user base."
                    </h3>
                    <div className="space-y-1 text-slate-400 mb-8">
                        <p className="font-bold text-white">Sarah Chen</p>
                        <p className="text-sm">CTO, TechNova</p>
                    </div>
                    <div className="flex gap-12 border-t border-white/10 pt-8">
                        <div>
                            <div className="text-3xl font-bold text-indigo-400 mb-1">40%</div>
                            <div className="text-xs text-slate-500 uppercase tracking-wider">Deflection</div>
                        </div>
                        <div>
                            <div className="text-3xl font-bold text-indigo-400 mb-1">8 Weeks</div>
                            <div className="text-xs text-slate-500 uppercase tracking-wider">Time to Launch</div>
                        </div>
                    </div>
                </div>
                <div className="md:w-1/2 bg-slate-800 relative min-h-[400px]">
                    <img 
                        src="https://placehold.co/800x800/1e293b/6366f1?text=TechNova+Dashboard" 
                        alt="Case Study" 
                        className="absolute inset-0 w-full h-full object-cover opacity-80 mix-blend-overlay"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-slate-900 to-transparent"></div>
                </div>
            </div>
        </div>
    </section>
  );
};

export default SaaSCaseStudy;
