
import React, { useEffect, useRef, useState } from 'react';

const MVPFeatures: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 bg-[#FCFCFC] border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className={`mb-16 transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-slate-900 mb-6">The MVP Architecture</h2>
            <div className="w-20 h-1 bg-[#10B981]"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
                { icon: "🎨", title: "Modern Interface", desc: "Responsive React/Next.js frontend. Polished UI components, mobile-ready design." },
                { icon: "🗄️", title: "Scalable Logic", desc: "Supabase database setup, authentication (Auth0/Google), and secure API endpoints." },
                { icon: "🧠", title: "AI Integration", desc: "Connection to LLMs (GPT-4o, Claude 3.5), prompt engineering, and context management." }
            ].map((feature, i) => (
                <div 
                    key={i} 
                    className={`group p-8 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-700 ease-out
                        ${isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-95'}
                    `}
                    style={{ transitionDelay: `${i * 150}ms` }}
                >
                    <div className="text-4xl mb-6 bg-slate-50 w-16 h-16 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">{feature.icon}</div>
                    <h3 className="font-serif text-2xl font-bold text-slate-900 mb-3">{feature.title}</h3>
                    <p className="text-slate-500 leading-relaxed text-sm">{feature.desc}</p>
                </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default MVPFeatures;
