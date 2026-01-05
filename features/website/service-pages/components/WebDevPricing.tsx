import React from 'react';
import { useNavigate } from 'react-router-dom';

const WebDevPricing: React.FC = () => {
  const navigate = useNavigate();

  return (
    <section className="py-32 bg-white relative">
        <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-20">
                <h2 className="font-serif text-4xl md:text-5xl font-bold text-slate-900 mb-6">Investment & Timeline</h2>
                <p className="text-slate-500">Transparent pricing. No hidden fees. Production-ready in weeks.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Starter */}
                <div className="p-10 rounded-3xl border border-slate-100 bg-slate-50 flex flex-col hover:border-slate-200 transition-colors">
                    <h3 className="font-serif text-3xl text-slate-900 mb-2">Starter</h3>
                    <div className="text-[#10B981] font-bold mb-6">MVP / Single Product</div>
                    <div className="text-5xl font-bold text-slate-900 mb-1">$25k</div>
                    <div className="text-slate-400 text-sm mb-8">8 Weeks Delivery</div>
                    
                    <ul className="space-y-4 mb-10 flex-1">
                        {['Frontend + Backend', 'Up to 3 AI Integrations', 'Basic Dashboard', 'Mobile Responsive'].map(f => (
                            <li key={f} className="flex items-center text-slate-600 text-sm">
                                <span className="text-[#10B981] mr-3">✓</span> {f}
                            </li>
                        ))}
                    </ul>
                    <button onClick={() => navigate('/wizard/step-1')} className="w-full py-4 border border-slate-200 rounded-xl text-slate-900 font-bold hover:bg-white hover:shadow-md transition-all">Start Project</button>
                </div>

                {/* Professional */}
                <div className="p-10 rounded-3xl border-2 border-[#10B981] bg-white relative flex flex-col transform md:-translate-y-4 shadow-2xl">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#10B981] text-white px-4 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest">Best Value</div>
                    <h3 className="font-serif text-3xl text-slate-900 mb-2">Professional</h3>
                    <div className="text-[#10B981] font-bold mb-6">Full Platform</div>
                    <div className="text-5xl font-bold text-slate-900 mb-1">$40k</div>
                    <div className="text-slate-400 text-sm mb-8">10-12 Weeks Delivery</div>
                    
                    <ul className="space-y-4 mb-10 flex-1">
                        {['Everything in Starter', 'Unlimited AI Integrations', 'Custom Design System', 'Advanced Workflows', '90-Day Support'].map(f => (
                            <li key={f} className="flex items-center text-slate-600 text-sm">
                                <span className="text-[#10B981] mr-3">✓</span> {f}
                            </li>
                        ))}
                    </ul>
                    <button onClick={() => navigate('/wizard/step-1')} className="w-full py-4 bg-[#10B981] rounded-xl text-white font-bold hover:bg-[#059669] transition-colors shadow-lg">Start Project</button>
                </div>

                {/* Enterprise */}
                <div className="p-10 rounded-3xl border border-slate-100 bg-slate-50 flex flex-col hover:border-slate-200 transition-colors">
                    <h3 className="font-serif text-3xl text-slate-900 mb-2">Enterprise</h3>
                    <div className="text-[#10B981] font-bold mb-6">Scale & White-Label</div>
                    <div className="text-5xl font-bold text-slate-900 mb-1">$60k+</div>
                    <div className="text-slate-400 text-sm mb-8">12-16 Weeks Delivery</div>
                    
                    <ul className="space-y-4 mb-10 flex-1">
                        {['White-Label Solution', 'Custom AI Training', 'Dedicated PM', '24/7 Priority Support', 'SLA Guarantees'].map(f => (
                            <li key={f} className="flex items-center text-slate-600 text-sm">
                                <span className="text-[#10B981] mr-3">✓</span> {f}
                            </li>
                        ))}
                    </ul>
                    <button onClick={() => navigate('/contact')} className="w-full py-4 border border-slate-200 rounded-xl text-slate-900 font-bold hover:bg-white hover:shadow-md transition-all">Contact Sales</button>
                </div>
            </div>
        </div>
      </section>
  );
};

export default WebDevPricing;