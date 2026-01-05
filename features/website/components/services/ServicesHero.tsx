import React from 'react';

const ServicesHero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-gradient-to-b from-[#FCFCFC] to-white">
      {/* Subtle Background Elements */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-indigo-50/40 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3 pointer-events-none mix-blend-multiply"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-slate-100/50 rounded-full blur-[100px] translate-y-1/3 -translate-x-1/4 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
        <h1 className="font-serif text-5xl md:text-7xl lg:text-[72px] font-bold leading-[1.1] mb-6 tracking-tight text-slate-900">
          Intelligence-First <br/> CRM Services
        </h1>
        
        <p className="text-2xl md:text-3xl font-serif text-slate-400 mb-8 italic">
          AI that works for your business, not against it.
        </p>

        <p className="text-lg text-slate-600 max-w-2xl mx-auto mb-12 font-light leading-relaxed">
          Zero manual data entry. Zero busywork. Pure strategic leverage.
          We build systems that turn your CRM into a revenue engine.
        </p>

        <div className="flex flex-col md:flex-row items-center justify-center gap-4">
          <a href="#catalog" className="px-8 py-4 bg-slate-900 hover:bg-slate-800 text-white rounded-full font-bold text-sm uppercase tracking-wider transition-all hover:-translate-y-1 shadow-lg">
            Explore Services
          </a>
          <a href="#consultation" className="px-8 py-4 bg-white hover:bg-slate-50 border border-slate-200 text-slate-900 rounded-full font-bold text-sm uppercase tracking-wider transition-all hover:shadow-md">
            Book Consultation
          </a>
        </div>
      </div>
    </section>
  );
};

export default ServicesHero;