import React from 'react';
import { useNavigate } from 'react-router-dom';

const ChatbotPricing: React.FC = () => {
  const navigate = useNavigate();

  return (
    <section className="py-24 bg-white text-slate-900">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4">Transparent Pricing</h2>
          <p className="text-slate-500">Choose the model that fits your volume. No hidden fees.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Starter */}
            <div className="p-8 rounded-2xl border border-slate-200 bg-white hover:shadow-lg transition-shadow">
                <h3 className="font-bold text-xl mb-2">Starter</h3>
                <div className="text-sm text-slate-500 mb-6">For small businesses</div>
                <div className="text-4xl font-serif font-bold mb-1">$1,500</div>
                <div className="text-xs text-slate-400 mb-8">+ $50/mo hosting</div>
                <ul className="space-y-3 text-sm text-slate-600 mb-8">
                    <li className="flex gap-2">✓ 1 Knowledge Base</li>
                    <li className="flex gap-2">✓ Web Widget Only</li>
                    <li className="flex gap-2">✓ 500 Conversations/mo</li>
                    <li className="flex gap-2">✓ Email Handoff</li>
                </ul>
                <button onClick={() => navigate('/contact')} className="w-full py-3 border border-slate-200 rounded-lg font-bold text-sm hover:bg-slate-50">Get Started</button>
            </div>

            {/* Professional */}
            <div className="p-8 rounded-2xl border-2 border-cyan-500 bg-white shadow-xl relative transform md:-translate-y-4">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-cyan-500 text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">Most Popular</div>
                <h3 className="font-bold text-xl mb-2">Growth</h3>
                <div className="text-sm text-slate-500 mb-6">For scaling teams</div>
                <div className="text-4xl font-serif font-bold mb-1">$3,500</div>
                <div className="text-xs text-slate-400 mb-8">+ $150/mo hosting</div>
                <ul className="space-y-3 text-sm text-slate-600 mb-8">
                    <li className="flex gap-2">✓ Unlimited Knowledge</li>
                    <li className="flex gap-2">✓ Web + WhatsApp</li>
                    <li className="flex gap-2">✓ 5,000 Conversations/mo</li>
                    <li className="flex gap-2">✓ Live Chat Dashboard</li>
                </ul>
                <button onClick={() => navigate('/contact')} className="w-full py-3 bg-cyan-600 text-white rounded-lg font-bold text-sm hover:bg-cyan-700">Get Started</button>
            </div>

            {/* Enterprise */}
            <div className="p-8 rounded-2xl border border-slate-200 bg-slate-50 hover:shadow-lg transition-shadow">
                <h3 className="font-bold text-xl mb-2">Enterprise</h3>
                <div className="text-sm text-slate-500 mb-6">For large organizations</div>
                <div className="text-4xl font-serif font-bold mb-1">Custom</div>
                <div className="text-xs text-slate-400 mb-8">Volume pricing</div>
                <ul className="space-y-3 text-sm text-slate-600 mb-8">
                    <li className="flex gap-2">✓ Custom Fine-Tuning</li>
                    <li className="flex gap-2">✓ All Channels (SMS/Slack)</li>
                    <li className="flex gap-2">✓ Unlimited Volume</li>
                    <li className="flex gap-2">✓ SLA & Dedicated Support</li>
                </ul>
                <button onClick={() => navigate('/contact')} className="w-full py-3 border border-slate-200 bg-white rounded-lg font-bold text-sm hover:bg-slate-50">Contact Sales</button>
            </div>
        </div>
      </div>
    </section>
  );
};

export default ChatbotPricing;