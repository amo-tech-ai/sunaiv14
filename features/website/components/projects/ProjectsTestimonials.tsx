
import React, { useState } from 'react';

const testimonials = [
    {
        quote: "We interviewed 5 agencies. Sun AI was the only one that spoke in terms of revenue, not just code. The result is a masterpiece.",
        author: "Sarah Chen",
        role: "CTO @ TechNova",
        roi: "48x ROI"
    },
    {
        quote: "The speed of delivery was shocking. We went from a sketch to a fully functional AI platform in 7 weeks.",
        author: "Marcus Rodriguez",
        role: "Founder @ GlobalFlow",
        roi: "140x ROI"
    },
    {
        quote: "Our operational costs dropped by 70% within the first month of launch. The AI agents actually work.",
        author: "Emily Watson",
        role: "VP Ops @ StyleCo",
        roi: "76x ROI"
    }
];

const ProjectsTestimonials: React.FC = () => {
  const [active, setActive] = useState(0);

  return (
    <section className="py-24 bg-[#020203] text-white">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="font-serif text-3xl text-slate-400 mb-16 italic">The Patrons</h2>
        
        <div className="relative min-h-[300px]">
            {testimonials.map((t, i) => (
                <div 
                    key={i} 
                    className={`absolute inset-0 transition-all duration-700 flex flex-col items-center justify-center ${i === active ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8 pointer-events-none'}`}
                >
                    <div className="text-3xl md:text-5xl font-serif leading-tight mb-8">
                        "{t.quote}"
                    </div>
                    <div className="flex flex-col items-center gap-2">
                        <div className="font-bold text-lg">{t.author}</div>
                        <div className="text-slate-500 text-sm mb-4">{t.role}</div>
                        <span className="px-3 py-1 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 text-xs font-bold uppercase tracking-wider">
                            {t.roi}
                        </span>
                    </div>
                </div>
            ))}
        </div>

        <div className="flex justify-center gap-3 mt-12">
            {testimonials.map((_, i) => (
                <button 
                    key={i}
                    onClick={() => setActive(i)}
                    className={`w-2 h-2 rounded-full transition-colors ${i === active ? 'bg-white' : 'bg-white/20 hover:bg-white/40'}`}
                />
            ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsTestimonials;
