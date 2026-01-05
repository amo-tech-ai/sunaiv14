import React from 'react';

const WebDevTechStack: React.FC = () => {
  return (
    <section className="py-12 border-y border-slate-100 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
            <p className="text-center text-xs font-bold uppercase tracking-[0.2em] text-slate-400 mb-8">Powering Next-Gen Platforms</p>
            <div className="flex justify-center flex-wrap gap-12 opacity-40 grayscale hover:grayscale-0 transition-all duration-500">
                {['Next.js', 'React', 'TypeScript', 'Supabase', 'Tailwind', 'Vercel', 'OpenAI'].map(tech => (
                    <span key={tech} className="text-xl font-bold font-serif text-slate-400 hover:text-slate-900 cursor-default transition-colors">{tech}</span>
                ))}
            </div>
        </div>
      </section>
  );
};

export default WebDevTechStack;