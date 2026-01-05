import React from 'react';

const services = [
  {
    icon: "📞",
    title: "Post-Call Action Architect",
    desc: "Transform sales calls into automated action sequences with AI-powered insight extraction and workflow triggers.",
    features: ["TRANSCRIPTION", "ACTION EXTRACTION", "AUTO-SCHEDULING"]
  },
  {
    icon: "🪄",
    title: "Natural Language Command Bar",
    desc: "Query your entire CRM using plain English. No SQL, no filters, just ask and receive instant intelligence.",
    features: ["PLAIN ENGLISH", "INSTANT RESULTS", "CONTEXT AWARE"]
  },
  {
    icon: "🧠",
    title: "Lead Intelligence Engine",
    desc: "Automatic lead scoring, enrichment, and prioritization powered by neural networks and real-time data.",
    features: ["AUTO-SCORING", "ENRICHMENT", "PRIORITY ALERTS"]
  },
  {
    icon: "💬",
    title: "WhatsApp Automation Suite",
    desc: "24/7 intelligent response system that qualifies leads, schedules viewings, and handles inquiries autonomously.",
    features: ["AUTO-REPLY", "QUALIFICATION", "SCHEDULING"]
  },
  {
    icon: "📐",
    title: "Blueprint Generation System",
    desc: "AI generates complete project blueprints from brief descriptions, including tasks, timelines, and resource allocation.",
    features: ["AUTO-GENERATE", "TASK BREAKDOWN", "TIMELINES"]
  },
  {
    icon: "💓",
    title: "Sentiment Analysis Monitor",
    desc: "Real-time emotional intelligence tracking across all client communications to identify opportunities and risks.",
    features: ["EMOTION TRACKING", "RISK DETECTION", "OPPORTUNITY"]
  },
  {
    icon: "⚡",
    title: "Automated Workflow Orchestrator",
    desc: "Self-optimizing workflows that adapt based on success patterns and business outcomes.",
    features: ["OPTIMIZATION", "LEARNING", "SMART TRIGGERS"]
  },
  {
    icon: "📊",
    title: "Intelligence Dashboard Hub",
    desc: "Executive-grade visual intelligence with real-time metrics, predictive insights, and actionable recommendations.",
    features: ["REAL-TIME", "PREDICTIONS", "RECOMMENDATIONS"]
  }
];

const ServicesCatalog: React.FC = () => {
  return (
    <section id="catalog" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <div key={i} className="group p-10 rounded-[40px] border border-slate-100 bg-white hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] hover:scale-[1.02] transition-all duration-500 cursor-pointer flex flex-col items-center text-center">
              
              {/* Icon */}
              <div className="w-16 h-16 rounded-full bg-indigo-50 flex items-center justify-center text-2xl mb-8 group-hover:bg-indigo-100 transition-colors">
                {service.icon}
              </div>

              {/* Title */}
              <h3 className="font-serif text-2xl font-bold text-slate-900 mb-4 leading-tight">
                {service.title}
              </h3>

              {/* Desc */}
              <p className="text-slate-500 font-light leading-relaxed mb-8 min-h-[80px]">
                {service.desc}
              </p>

              {/* Pills */}
              <div className="flex flex-wrap justify-center gap-2 mb-8">
                {service.features.map(f => (
                  <span key={f} className="text-[10px] font-bold text-slate-400 bg-slate-50 px-2 py-1 rounded-full uppercase tracking-wider border border-slate-100">
                    {f}
                  </span>
                ))}
              </div>

              {/* Link */}
              <div className="mt-auto pt-4 border-t border-slate-50 w-full">
                <span className="text-xs font-bold text-slate-900 uppercase tracking-widest group-hover:text-indigo-600 transition-colors">
                  Learn More →
                </span>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesCatalog;