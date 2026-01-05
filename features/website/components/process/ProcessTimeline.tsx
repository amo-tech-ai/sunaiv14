
import React from 'react';

const phases = [
  { step: "01", title: "Discovery Workshop", time: "Week 1", desc: "We align on business goals, user personas, and technical constraints. No code is written until we agree on the 'Definition of Done'." },
  { step: "02", title: "System Architecture", time: "Week 2", desc: "Database schema design (Supabase), API route planning, and selecting the right AI models for your specific use case." },
  { step: "03", title: "Frontend Implementation", time: "Week 3-4", desc: "Building the high-fidelity UI in React/Next.js. We implement the '3-Panel Layout' for maximum productivity." },
  { step: "04", title: "Backend & Logic", time: "Week 5", desc: "Connecting the plumbing. Edge functions, authentication, and secure data pipelines." },
  { step: "05", title: "AI Integration", time: "Week 6", desc: "The brain transplant. Connecting GPT-4/Claude, setting up vector stores, and prompt engineering." },
  { step: "06", title: "Polish & QA", time: "Week 7", desc: "Rigorous testing. Mobile responsiveness check, speed optimization, and security audit." },
  { step: "07", title: "Launch & Handoff", time: "Week 8", desc: "Deployment to Vercel. We transfer full IP ownership and provide training documentation." }
];

const ProcessTimeline: React.FC = () => {
  return (
    <section className="py-32 bg-[#FAFAFA] text-slate-900 border-b border-slate-200">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4">From Idea to Launch in 8 Weeks</h2>
          <p className="text-slate-500">A rigorous, rhythmic manufacturing process for software.</p>
        </div>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-[28px] md:left-1/2 top-0 bottom-0 w-0.5 bg-slate-200 -translate-x-1/2"></div>

          <div className="space-y-12">
            {phases.map((phase, i) => (
              <div key={i} className={`flex flex-col md:flex-row items-center gap-8 ${i % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                
                {/* Content Side */}
                <div className={`w-full md:w-1/2 pl-20 md:pl-0 ${i % 2 === 0 ? 'md:text-left' : 'md:text-right'}`}>
                  <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow relative">
                    {/* Mobile Connector */}
                    <div className="absolute top-8 -left-[52px] md:hidden w-8 h-0.5 bg-slate-200"></div>
                    
                    <span className="inline-block px-2 py-1 rounded bg-slate-100 text-slate-500 text-[10px] font-bold uppercase tracking-widest mb-3">{phase.time}</span>
                    <h3 className="font-serif text-xl font-bold text-slate-900 mb-2">{phase.title}</h3>
                    <p className="text-sm text-slate-500 leading-relaxed">{phase.desc}</p>
                  </div>
                </div>

                {/* Center Node */}
                <div className="absolute left-[28px] md:left-1/2 -translate-x-1/2 w-14 h-14 rounded-full bg-white border-4 border-slate-100 flex items-center justify-center z-10 shadow-sm">
                  <span className="font-bold text-emerald-600 font-serif">{phase.step}</span>
                </div>

                {/* Empty Side for Desktop Balance */}
                <div className="hidden md:block w-1/2"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessTimeline;
