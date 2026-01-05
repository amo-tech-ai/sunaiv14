
import React, { useState, useEffect, useRef } from 'react';

const steps = [
  {
    id: 1,
    title: "1. Scope & Strategy",
    desc: "We don't start with code. We start with business logic. We map your entire data topology and automation goals before writing a single line.",
    visual: "Scope"
  },
  {
    id: 2,
    title: "2. The Blueprint",
    desc: "You get a complete architectural plan. Database schemas, API routes, and UI mockups. You know exactly what you're buying.",
    visual: "Blueprint"
  },
  {
    id: 3,
    title: "3. Dashboard Launch",
    desc: "Deployment isn't the end. We hand over a fully documented, proprietary platform that you own 100%.",
    visual: "Dashboard"
  }
];

const ProcessHero: React.FC = () => {
  const [activeStep, setActiveStep] = useState(1);
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 3;
      
      stepRefs.current.forEach((ref, index) => {
        if (ref && ref.offsetTop <= scrollPosition && ref.offsetTop + ref.offsetHeight > scrollPosition) {
          setActiveStep(index + 1);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="bg-[#050508] text-white relative">
      <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row">
        
        {/* Left Column: Scrollable Narrative */}
        <div className="w-full lg:w-1/2 py-32 lg:pb-[50vh]">
          <h1 className="font-serif text-5xl md:text-7xl font-bold mb-20 leading-tight">
            The Smarter Way <br/>
            <span className="text-emerald-500">To Build Software.</span>
          </h1>

          <div className="space-y-[40vh]">
            {steps.map((step, i) => (
              <div 
                key={step.id} 
                ref={(el) => { stepRefs.current[i] = el; }}
                className={`transition-opacity duration-500 ${activeStep === step.id ? 'opacity-100' : 'opacity-20'}`}
              >
                <h3 className="font-serif text-4xl mb-6">{step.title}</h3>
                <p className="text-xl text-slate-400 leading-relaxed max-w-md">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Sticky Visual */}
        <div className="hidden lg:block w-1/2 relative">
          <div className="sticky top-0 h-screen flex items-center justify-center">
            <div className="relative w-[500px] h-[350px] bg-slate-900 border border-slate-800 rounded-xl shadow-2xl overflow-hidden flex flex-col transition-all duration-700">
              {/* Browser Header */}
              <div className="h-8 bg-slate-800 border-b border-slate-700 flex items-center px-4 gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/20"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500/20"></div>
                <div className="w-3 h-3 rounded-full bg-green-500/20"></div>
              </div>
              
              {/* Browser Content - Changes based on step */}
              <div className="flex-1 bg-[#020203] relative p-8 flex items-center justify-center">
                
                {/* Visual 1: Scope */}
                <div className={`absolute inset-0 flex items-center justify-center transition-opacity duration-500 ${activeStep === 1 ? 'opacity-100' : 'opacity-0'}`}>
                   <div className="w-32 h-32 rounded-full border-2 border-dashed border-slate-700 animate-[spin_10s_linear_infinite] flex items-center justify-center">
                      <div className="w-20 h-20 rounded-full bg-slate-800 flex items-center justify-center text-3xl">🔭</div>
                   </div>
                </div>

                {/* Visual 2: Blueprint */}
                <div className={`absolute inset-0 p-8 transition-opacity duration-500 ${activeStep === 2 ? 'opacity-100' : 'opacity-0'}`}>
                   <div className="grid grid-cols-2 gap-4 h-full">
                      <div className="bg-slate-800/50 rounded h-full animate-pulse"></div>
                      <div className="flex flex-col gap-4 h-full">
                          <div className="bg-slate-800/50 rounded h-1/3 w-full"></div>
                          <div className="bg-slate-800/50 rounded h-2/3 w-full"></div>
                      </div>
                   </div>
                </div>

                {/* Visual 3: Dashboard */}
                <div className={`absolute inset-0 p-6 transition-opacity duration-500 ${activeStep === 3 ? 'opacity-100' : 'opacity-0'}`}>
                   <div className="h-full w-full bg-emerald-500/5 border border-emerald-500/20 rounded flex flex-col p-4">
                      <div className="flex justify-between mb-4">
                          <div className="h-4 w-20 bg-emerald-500/20 rounded"></div>
                          <div className="h-4 w-8 bg-emerald-500/20 rounded"></div>
                      </div>
                      <div className="flex-1 flex items-end gap-2">
                          <div className="w-1/4 h-[40%] bg-emerald-500/20 rounded-t"></div>
                          <div className="w-1/4 h-[70%] bg-emerald-500/40 rounded-t"></div>
                          <div className="w-1/4 h-[50%] bg-emerald-500/20 rounded-t"></div>
                          <div className="w-1/4 h-[90%] bg-emerald-500/60 rounded-t"></div>
                      </div>
                   </div>
                </div>

              </div>

              {/* Ghost Cursor Animation */}
              <div className={`absolute w-4 h-4 transition-all duration-1000 ease-in-out z-20
                  ${activeStep === 1 ? 'top-1/2 left-1/2' : activeStep === 2 ? 'top-1/4 right-1/4' : 'bottom-10 left-10'}
              `}>
                  <svg className="w-full h-full text-emerald-500 drop-shadow-lg" fill="currentColor" viewBox="0 0 24 24"><path d="M7 2l12 11.2-5.8.5 3.3 7.3-2.2.9-3.2-7.4-4.4 4.6z"/></svg>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessHero;
