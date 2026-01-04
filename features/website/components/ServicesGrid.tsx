import React from 'react';

const ServicesGrid: React.FC = () => {
  return (
    <section id="services" className="py-24 relative bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4 text-slate-900">AI Solutions That Solve <br/>Real Problems</h2>
          <div className="w-20 h-1 bg-[#10B981]"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { icon: "💻", title: "Full-Stack AI Apps", desc: "React/Next.js platforms with GPT-4 integration. From MVP to enterprise.", stat: "8-week delivery" },
            { icon: "💬", title: "Multi-Channel Chatbots", desc: "Web, WhatsApp, SMS automation. 70% cost reduction, 24/7 support.", stat: "15-30x ROI" },
            { icon: "🤖", title: "Autonomous Agents", desc: "Multi-agent systems that handle complex workflows automatically.", stat: "70% ticket reduction" },
            { icon: "⚙️", title: "AI Integration", desc: "Connect GPT-4, Claude, or Gemini into your existing legacy systems.", stat: "40% efficiency gain" },
            { icon: "🚀", title: "8-Week AI MVPs", desc: "Launch your product idea fast. Perfect for startups & validation.", stat: "48-76x ROI" },
            { icon: "📈", title: "Sales Automation", desc: "Lead qualification, funnel automation, and pipeline intelligence.", stat: "7.8x more deals" }
          ].map((service, i) => (
            <div key={i} className="group p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:border-[#10B981]/50 hover:bg-white hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-default">
              <div className="text-4xl mb-6 group-hover:scale-110 transition-transform duration-300 drop-shadow-sm">{service.icon}</div>
              <h3 className="font-serif text-2xl font-bold mb-3 text-slate-900 group-hover:text-[#10B981] transition-colors">{service.title}</h3>
              <p className="text-slate-500 leading-relaxed mb-6 group-hover:text-slate-600">{service.desc}</p>
              <div className="flex items-center justify-between border-t border-slate-200 pt-4 group-hover:border-slate-100">
                <span className="text-xs font-bold text-[#10B981] uppercase tracking-wider">{service.stat}</span>
                <span className="text-slate-300 group-hover:text-[#10B981] transition-colors">→</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;