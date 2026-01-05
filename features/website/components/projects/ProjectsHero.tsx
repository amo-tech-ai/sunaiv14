
import React, { useState, useEffect } from 'react';

const slides = [
  {
    id: 1,
    client: "TechNova",
    type: "SaaS Platform",
    metric: "40% Conversion Lift",
    image: "https://placehold.co/1200x800/1e293b/10B981?text=TechNova+Dashboard",
    desc: "A unified AI command center for enterprise resource planning."
  },
  {
    id: 2,
    client: "Velociti",
    type: "Automotive",
    metric: "3.2x Lead Volume",
    image: "https://placehold.co/1200x800/0f172a/3b82f6?text=Velociti+Chatbot",
    desc: "Intelligent dealership concierge handling 24/7 test drive bookings."
  },
  {
    id: 3,
    client: "Aura Health",
    type: "Healthcare",
    metric: "90% Admin Reduction",
    image: "https://placehold.co/1200x800/312e81/a5b4fc?text=Aura+Patient+Portal",
    desc: "HIPAA-compliant patient intake system with automated triage."
  }
];

const ProjectsHero: React.FC = () => {
  const [current, setCurrent] = useState(0);

  // Auto-rotate
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-[#050508] text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-24 relative z-10">
          
          {/* Text Content */}
          <div className="w-full md:w-5/12 order-2 md:order-1">
            <div className="flex items-center gap-2 mb-6">
                <span className="h-px w-8 bg-emerald-500"></span>
                <span className="text-emerald-500 font-bold text-xs uppercase tracking-widest">Featured Case Study</span>
            </div>
            
            <h1 className="font-serif text-5xl md:text-6xl font-bold leading-tight mb-6 transition-all duration-500">
              {slides[current].client}
            </h1>
            
            <div className="flex flex-col gap-1 mb-8">
                <span className="text-xl text-slate-300 font-light">{slides[current].type}</span>
                <span className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">
                    {slides[current].metric}
                </span>
            </div>

            <p className="text-slate-400 text-lg mb-10 leading-relaxed min-h-[3.5rem]">
                {slides[current].desc}
            </p>

            <button className="group flex items-center gap-3 text-white font-bold uppercase tracking-widest text-xs hover:text-emerald-400 transition-colors">
                View Case Study
                <span className="group-hover:translate-x-1 transition-transform">→</span>
            </button>

            {/* Pagination */}
            <div className="flex gap-3 mt-12">
                {slides.map((_, idx) => (
                    <button 
                        key={idx}
                        onClick={() => setCurrent(idx)}
                        className={`h-1 rounded-full transition-all duration-500 ${idx === current ? 'w-12 bg-emerald-500' : 'w-4 bg-slate-800 hover:bg-slate-700'}`}
                    />
                ))}
            </div>
          </div>

          {/* Visual Content */}
          <div className="w-full md:w-7/12 order-1 md:order-2">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl border border-white/10 group">
                <div className="absolute inset-0 bg-gradient-to-tr from-emerald-500/10 to-purple-500/10 mix-blend-overlay z-10"></div>
                {slides.map((slide, idx) => (
                    <img 
                        key={idx}
                        src={slide.image} 
                        alt={slide.client} 
                        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${idx === current ? 'opacity-100 scale-105' : 'opacity-0 scale-100'}`}
                    />
                ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ProjectsHero;
