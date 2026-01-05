import React from 'react';

const WebDevFeatures: React.FC = () => {
  return (
    <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
            <div className="mb-20">
                <h2 className="font-serif text-4xl md:text-5xl font-bold text-slate-900 mb-6">Built for Scale & Intelligence</h2>
                <div className="w-20 h-1 bg-[#10B981]"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                    { title: "Frontend Engineering", icon: "🎨", desc: "Pixel-perfect React & Next.js interfaces with Motion animations for a premium feel." },
                    { title: "Backend Infrastructure", icon: "⚙️", desc: "Scalable Supabase architecture with Row-Level Security and Edge Functions." },
                    { title: "AI Integrations", icon: "🤖", desc: "Native GPT-4 and Claude integration with vector embeddings for semantic search." },
                    { title: "Design System", icon: "🎯", desc: "Custom component library (200+ elements) ensuring consistency and speed." },
                    { title: "Dashboard Systems", icon: "📊", desc: "Executive-grade 3-panel layouts for data visualization and management." },
                    { title: "DevOps & Security", icon: "🚀", desc: "Automated CI/CD pipelines on Vercel with enterprise-grade security standards." }
                ].map((feature, i) => (
                    <div key={i} className="group p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:border-[#10B981]/30 hover:bg-white hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                        <div className="text-3xl mb-6 bg-white w-16 h-16 rounded-full flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform">
                            {feature.icon}
                        </div>
                        <h3 className="font-serif text-2xl font-bold text-slate-900 mb-4 group-hover:text-[#10B981] transition-colors">{feature.title}</h3>
                        <p className="text-slate-500 leading-relaxed text-sm">{feature.desc}</p>
                    </div>
                ))}
            </div>
        </div>
      </section>
  );
};

export default WebDevFeatures;