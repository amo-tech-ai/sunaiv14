
import React from 'react';

const MVPWhy: React.FC = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-slate-900 mb-6">Why Build an MVP?</h2>
            <div className="w-20 h-1 bg-[#10B981]"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
                { title: "Secure Fundraising", desc: "Investors invest in traction, not decks. Show them working tech.", icon: "💰" },
                { title: "Validate Market Fit", desc: "Get real users clicking buttons. Find out if they will pay before scaling.", icon: "🎯" },
                { title: "Internal Efficiency", desc: "Automate a painful internal process quickly to prove ROI.", icon: "⚡" }
            ].map((item, i) => (
                <div key={i}>
                    <div className="text-4xl mb-4">{item.icon}</div>
                    <h3 className="font-bold text-xl text-slate-900 mb-3">{item.title}</h3>
                    <p className="text-slate-500 leading-relaxed">{item.desc}</p>
                </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default MVPWhy;
