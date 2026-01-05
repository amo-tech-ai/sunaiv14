import React from 'react';
import { useNavigate } from 'react-router-dom';

const PricingSection: React.FC = () => {
  const navigate = useNavigate();

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
            
            {/* Tier 1 */}
            <div className="p-12 rounded-[40px] border border-slate-100 bg-white">
                <span className="inline-block px-3 py-1 rounded-full bg-slate-100 text-[10px] font-bold uppercase tracking-widest text-slate-500 mb-6">Starter</span>
                <h3 className="font-serif text-3xl font-bold text-slate-900 mb-2">Automate</h3>
                <div className="flex items-baseline gap-1 mb-8">
                    <span className="text-5xl font-serif font-bold text-slate-900">$2,500</span>
                    <span className="text-slate-400 text-sm">/mo</span>
                </div>
                <ul className="space-y-4 mb-10 text-sm text-slate-600">
                    <li className="flex items-center gap-3"><span className="text-emerald-500">✓</span> 3 Core Workflows</li>
                    <li className="flex items-center gap-3"><span className="text-emerald-500">✓</span> Basic CRM Integration</li>
                    <li className="flex items-center gap-3"><span className="text-emerald-500">✓</span> Email Support</li>
                </ul>
                <button onClick={() => navigate('/wizard/step-1')} className="w-full py-4 rounded-full border border-slate-200 font-bold text-xs uppercase tracking-wider hover:bg-slate-50 transition-colors">
                    Choose Starter
                </button>
            </div>

            {/* Tier 2 (Recommended) */}
            <div className="p-12 rounded-[40px] border-2 border-indigo-500 bg-white shadow-2xl relative scale-105 z-10">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-indigo-500 text-white px-4 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest">
                    Recommended
                </div>
                <span className="inline-block px-3 py-1 rounded-full bg-indigo-50 text-[10px] font-bold uppercase tracking-widest text-indigo-600 mb-6">Professional</span>
                <h3 className="font-serif text-3xl font-bold text-slate-900 mb-2">Scale</h3>
                <div className="flex items-baseline gap-1 mb-8">
                    <span className="text-5xl font-serif font-bold text-slate-900">$5,000</span>
                    <span className="text-slate-400 text-sm">/mo</span>
                </div>
                <ul className="space-y-4 mb-10 text-sm text-slate-600">
                    <li className="flex items-center gap-3"><span className="text-emerald-500">✓</span> Unlimited Workflows</li>
                    <li className="flex items-center gap-3"><span className="text-emerald-500">✓</span> Full CRM Sync</li>
                    <li className="flex items-center gap-3"><span className="text-emerald-500">✓</span> Custom AI Agents</li>
                    <li className="flex items-center gap-3"><span className="text-emerald-500">✓</span> Priority Slack Support</li>
                </ul>
                <button onClick={() => navigate('/wizard/step-1')} className="w-full py-4 rounded-full bg-indigo-600 text-white font-bold text-xs uppercase tracking-wider hover:bg-indigo-700 transition-colors shadow-md">
                    Get Started
                </button>
            </div>

            {/* Tier 3 */}
            <div className="p-12 rounded-[40px] border border-slate-100 bg-white">
                <span className="inline-block px-3 py-1 rounded-full bg-slate-100 text-[10px] font-bold uppercase tracking-widest text-slate-500 mb-6">Enterprise</span>
                <h3 className="font-serif text-3xl font-bold text-slate-900 mb-2">Dominate</h3>
                <div className="flex items-baseline gap-1 mb-8">
                    <span className="text-5xl font-serif font-bold text-slate-900">Custom</span>
                </div>
                <ul className="space-y-4 mb-10 text-sm text-slate-600">
                    <li className="flex items-center gap-3"><span className="text-emerald-500">✓</span> Custom LLM Fine-tuning</li>
                    <li className="flex items-center gap-3"><span className="text-emerald-500">✓</span> On-premise Deployment</li>
                    <li className="flex items-center gap-3"><span className="text-emerald-500">✓</span> Dedicated Success Manager</li>
                </ul>
                <button onClick={() => navigate('/contact')} className="w-full py-4 rounded-full border border-slate-200 font-bold text-xs uppercase tracking-wider hover:bg-slate-50 transition-colors">
                    Contact Sales
                </button>
            </div>

        </div>
      </div>
    </section>
  );
};

export default PricingSection;