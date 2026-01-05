
import React from 'react';

const MVPComparison: React.FC = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-slate-900 mb-4">Prototype vs. Product</h2>
          <p className="text-slate-500">Don't confuse a Figma mockup with working software.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* The Old Way */}
            <div className="p-10 rounded-3xl border border-slate-200 bg-slate-50 text-slate-500 grayscale opacity-80 hover:opacity-100 transition-all">
                <div className="text-4xl mb-6">🖼️</div>
                <h3 className="font-serif text-2xl font-bold text-slate-700 mb-2">The Clickable Mockup</h3>
                <p className="text-sm mb-8 leading-relaxed">Looks pretty, does nothing. Good for pitch decks, bad for user testing. Investors know the difference.</p>
                <ul className="space-y-3">
                    <li className="flex items-center gap-3"><span className="text-slate-400">✕</span> Static screens</li>
                    <li className="flex items-center gap-3"><span className="text-slate-400">✕</span> Zero logic</li>
                    <li className="flex items-center gap-3"><span className="text-slate-400">✕</span> Fake data</li>
                </ul>
            </div>

            {/* The Sun AI Way */}
            <div className="p-10 rounded-3xl border-2 border-emerald-500 bg-white shadow-xl transform md:-translate-y-4">
                <div className="text-4xl mb-6">🧠</div>
                <h3 className="font-serif text-2xl font-bold text-slate-900 mb-2">The Intelligent Core</h3>
                <p className="text-slate-600 text-sm mb-8 leading-relaxed">Real data processing. Real AI models. Real user accounts. A living product you can charge for.</p>
                <ul className="space-y-3">
                    <li className="flex items-center gap-3 font-medium text-slate-900"><span className="text-emerald-500">✓</span> Functional Auth</li>
                    <li className="flex items-center gap-3 font-medium text-slate-900"><span className="text-emerald-500">✓</span> Live Database</li>
                    <li className="flex items-center gap-3 font-medium text-slate-900"><span className="text-emerald-500">✓</span> Connected LLMs (GPT-4/Claude)</li>
                </ul>
            </div>
        </div>
      </div>
    </section>
  );
};

export default MVPComparison;
