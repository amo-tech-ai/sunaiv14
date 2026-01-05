import React from 'react';
import { useNavigate } from 'react-router-dom';

const AgentsPricing: React.FC = () => {
  const navigate = useNavigate();

  return (
    <section className="py-24 bg-[#020203] text-white">
      <div className="max-w-5xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center bg-white/5 rounded-3xl p-8 md:p-12 border border-white/10">
            
            {/* Left: Pitch */}
            <div>
                <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6">The Economics of Automation</h2>
                <p className="text-slate-400 mb-8 leading-relaxed">
                    Hiring a full human team for 24/7 coverage costs $150k+/year. Sun AI Agents provide the same coverage for a fraction of the cost, with zero training downtime.
                </p>
                <button 
                    onClick={() => navigate('/contact')}
                    className="px-8 py-3 bg-white text-black rounded-lg font-bold text-sm uppercase tracking-wider hover:bg-slate-200 transition-colors"
                >
                    Get a Quote
                </button>
            </div>

            {/* Right: Receipt */}
            <div className="bg-white text-slate-900 p-6 rounded-xl font-mono text-sm shadow-2xl rotate-1 hover:rotate-0 transition-transform duration-300 max-w-sm mx-auto w-full">
                <div className="text-center border-b-2 border-dashed border-slate-300 pb-4 mb-4">
                    <div className="font-bold text-lg">MONTHLY COST</div>
                    <div className="text-xs text-slate-500">Comparison Estimate</div>
                </div>
                
                <div className="space-y-3 mb-6">
                    <div className="flex justify-between text-slate-400 line-through">
                        <span>3 Human Reps (24/7)</span>
                        <span>$12,500</span>
                    </div>
                    <div className="flex justify-between font-bold text-slate-900">
                        <span>Sun AI Agent Team</span>
                        <span>$2,000</span>
                    </div>
                </div>

                <div className="border-t-2 border-slate-900 pt-4 flex justify-between items-center">
                    <span className="font-bold">MONTHLY SAVINGS</span>
                    <span className="text-xl font-bold text-green-600">$10,500</span>
                </div>
                
                <div className="mt-6 text-center text-[10px] text-slate-400">
                    *Based on avg support salaries
                </div>
            </div>

        </div>
      </div>
    </section>
  );
};

export default AgentsPricing;