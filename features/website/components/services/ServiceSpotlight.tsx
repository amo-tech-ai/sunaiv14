import React from 'react';

const ServiceSpotlight: React.FC = () => {
  return (
    <section className="py-24 bg-[#FCFCFC] border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Block 1: Image Left */}
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24 mb-32">
          <div className="w-full lg:w-1/2">
            <div className="aspect-[4/3] bg-white rounded-[40px] border border-slate-200 shadow-xl overflow-hidden relative group">
                {/* Abstract UI representation */}
                <div className="absolute inset-0 bg-slate-50 flex items-center justify-center">
                    <div className="w-3/4 h-3/4 bg-white rounded-2xl shadow-sm border border-slate-200 p-8 flex flex-col gap-4">
                        <div className="h-4 bg-slate-100 rounded w-1/3"></div>
                        <div className="h-24 bg-indigo-50/50 rounded w-full"></div>
                        <div className="flex gap-2">
                             <div className="h-8 bg-slate-100 rounded w-1/4"></div>
                             <div className="h-8 bg-slate-100 rounded w-1/4"></div>
                        </div>
                    </div>
                </div>
            </div>
          </div>
          
          <div className="w-full lg:w-1/2">
            <span className="text-[10px] font-bold text-indigo-500 uppercase tracking-widest mb-4 block">Featured Service</span>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Post-Call Action Architect
            </h2>
            <p className="text-lg text-slate-600 font-light leading-relaxed mb-8">
              Sales conversations are gold mines of data, but 90% of that value is lost the moment the call ends. 
              Our Architect captures, transcribes, and extracts actionable tasks instantly.
            </p>
            
            <ul className="space-y-4 mb-10">
              {[
                "Automatic CRM field updates based on conversation",
                "Instant follow-up email drafts generated",
                "Slack notifications for key objections or wins",
                "Meeting summary synced to Notion/Linear"
              ].map((item, i) => (
                <li key={i} className="flex items-start">
                  <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center text-xs mr-4 mt-1">✓</span>
                  <span className="text-slate-700">{item}</span>
                </li>
              ))}
            </ul>

            <button className="px-8 py-3 bg-white border border-slate-200 text-slate-900 rounded-full font-bold text-xs uppercase tracking-wider hover:bg-slate-50 transition-colors shadow-sm">
              Explore Feature →
            </button>
          </div>
        </div>

        {/* Block 2: Content Left */}
        <div className="flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-24">
          <div className="w-full lg:w-1/2">
            <span className="text-[10px] font-bold text-indigo-500 uppercase tracking-widest mb-4 block">Featured Service</span>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Automated Workflow Orchestrator
            </h2>
            <p className="text-lg text-slate-600 font-light leading-relaxed mb-8">
              Stop stitching together Zapier hacks. We build self-healing, intelligent workflows that 
              adapt to your business rules and error-correct automatically.
            </p>
            
            <ul className="space-y-4 mb-10">
              {[
                "Multi-step approval routing with human-in-the-loop",
                "Intelligent error handling and retries",
                "Cross-platform synchronization (Salesforce ↔ Slack)",
                "Performance analytics and bottleneck detection"
              ].map((item, i) => (
                <li key={i} className="flex items-start">
                  <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center text-xs mr-4 mt-1">✓</span>
                  <span className="text-slate-700">{item}</span>
                </li>
              ))}
            </ul>

            <button className="px-8 py-3 bg-white border border-slate-200 text-slate-900 rounded-full font-bold text-xs uppercase tracking-wider hover:bg-slate-50 transition-colors shadow-sm">
              Explore Feature →
            </button>
          </div>

          <div className="w-full lg:w-1/2">
            <div className="aspect-[4/3] bg-white rounded-[40px] border border-slate-200 shadow-xl overflow-hidden relative group">
                <div className="absolute inset-0 bg-slate-50 flex items-center justify-center">
                    <div className="flex items-center gap-4">
                        <div className="w-16 h-16 rounded-full bg-white border border-slate-200 shadow-sm flex items-center justify-center text-2xl">⚡</div>
                        <div className="w-12 h-1 bg-slate-300 rounded-full"></div>
                         <div className="w-16 h-16 rounded-full bg-white border border-slate-200 shadow-sm flex items-center justify-center text-2xl">🤖</div>
                         <div className="w-12 h-1 bg-slate-300 rounded-full"></div>
                          <div className="w-16 h-16 rounded-full bg-white border border-slate-200 shadow-sm flex items-center justify-center text-2xl">✅</div>
                    </div>
                </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ServiceSpotlight;