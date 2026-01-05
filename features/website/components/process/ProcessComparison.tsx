
import React from 'react';

const ProcessComparison: React.FC = () => {
  return (
    <section className="py-32 bg-slate-50 text-slate-900 border-t border-slate-200">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl font-bold mb-4">The Delivery Gap</h2>
          <p className="text-slate-500">Why software projects usually fail, and why ours don't.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Sun AI */}
            <div className="bg-[#050508] text-white p-8 rounded-2xl shadow-xl transform md:-translate-y-4 border border-slate-800">
                <div className="flex items-center gap-3 mb-8">
                    <div className="w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center font-bold text-white">✓</div>
                    <h3 className="font-bold text-lg">Sun AI Agency</h3>
                </div>
                <ul className="space-y-6 text-sm">
                    {[
                        "Fixed Price & Timeline",
                        "Proprietary AI Modules",
                        "Executive Dashboards",
                        "You Own the Code",
                        "Commercial Grade Security"
                    ].map((item, i) => (
                        <li key={i} className="flex items-center gap-3">
                            <span className="text-emerald-500">✓</span>
                            <span className="text-slate-200">{item}</span>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Traditional Agency */}
            <div className="bg-white p-8 rounded-2xl border border-slate-200 opacity-70 hover:opacity-100 transition-opacity">
                <div className="flex items-center gap-3 mb-8">
                    <div className="w-8 h-8 bg-slate-200 rounded-full flex items-center justify-center font-bold text-slate-500">~</div>
                    <h3 className="font-bold text-lg text-slate-700">Traditional Agency</h3>
                </div>
                <ul className="space-y-6 text-sm text-slate-500">
                    {[
                        "Hourly Billing (Scope Creep)",
                        "Built from Scratch (Slow)",
                        "Generic Admin Panels",
                        "Vendor Lock-in Risk",
                        "Standard Security"
                    ].map((item, i) => (
                        <li key={i} className="flex items-center gap-3">
                            <span className="text-slate-300">•</span>
                            <span>{item}</span>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Freelancer */}
            <div className="bg-white p-8 rounded-2xl border border-slate-200 opacity-70 hover:opacity-100 transition-opacity">
                <div className="flex items-center gap-3 mb-8">
                    <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center font-bold text-red-500">✕</div>
                    <h3 className="font-bold text-lg text-slate-700">Freelancer</h3>
                </div>
                <ul className="space-y-6 text-sm text-slate-500">
                    {[
                        "Unpredictable Availability",
                        "Spaghetti Code",
                        "Zero Documentation",
                        "High 'Bus Factor' Risk",
                        "Basic Auth Only"
                    ].map((item, i) => (
                        <li key={i} className="flex items-center gap-3">
                            <span className="text-red-300">✕</span>
                            <span>{item}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessComparison;
