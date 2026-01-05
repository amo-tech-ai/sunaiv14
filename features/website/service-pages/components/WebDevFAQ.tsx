import React from 'react';

const WebDevFAQ: React.FC = () => {
  return (
    <section className="py-24 bg-[#FAFAFA] border-t border-slate-100">
        <div className="max-w-4xl mx-auto px-6">
            <h2 className="font-serif text-4xl font-bold text-slate-900 mb-12 text-center">Frequently Asked Questions</h2>
            <div className="space-y-4">
                {[
                    { q: "What is the typical timeline?", a: "Most projects launch in 8-10 weeks. MVP phases are often ready in 6 weeks." },
                    { q: "Do you offer ongoing maintenance?", a: "Yes, we offer maintenance packages starting at $2,500/mo for updates and monitoring." },
                    { q: "Can I scale the platform later?", a: "Absolutely. We build on Supabase and Vercel, which auto-scale to millions of users." },
                    { q: "Do I own the code?", a: "Yes. Once paid in full, you own 100% of the IP and codebase." }
                ].map((item, i) => (
                    <details key={i} className="group bg-white rounded-xl border border-slate-200 open:shadow-md transition-all">
                        <summary className="flex justify-between items-center p-6 cursor-pointer font-medium text-slate-900">
                            {item.q}
                            <span className="text-[#10B981] transition-transform group-open:rotate-180">↓</span>
                        </summary>
                        <div className="px-6 pb-6 text-slate-500 leading-relaxed text-sm">
                            {item.a}
                        </div>
                    </details>
                ))}
            </div>
        </div>
      </section>
  );
};

export default WebDevFAQ;