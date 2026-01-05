
import React, { useState } from 'react';

const projects = [
    { id: 1, title: "TechNova Platform", category: "SaaS", image: "https://placehold.co/600x450/f1f5f9/94a3b8?text=TechNova", result: "40% Lift" },
    { id: 2, title: "StyleCo AI", category: "E-Commerce", image: "https://placehold.co/600x450/f8fafc/cbd5e1?text=StyleCo", result: "32% AOV" },
    { id: 3, title: "Premier Honda", category: "Automotive", image: "https://placehold.co/600x450/e2e8f0/64748b?text=Premier+Honda", result: "3.2x Leads" },
    { id: 4, title: "GlobalFlow", category: "Finance", image: "https://placehold.co/600x450/f1f5f9/475569?text=GlobalFlow", result: "70% Speed" },
    { id: 5, title: "MediCare Connect", category: "Healthcare", image: "https://placehold.co/600x450/f8fafc/334155?text=MediCare", result: "HIPAA Ready" },
    { id: 6, title: "LegalMind", category: "SaaS", image: "https://placehold.co/600x450/e2e8f0/1e293b?text=LegalMind", result: "Auto-Docs" },
];

const categories = ["All", "SaaS", "E-Commerce", "Healthcare", "Automotive", "Finance"];

const ProjectsGrid: React.FC = () => {
  const [filter, setFilter] = useState("All");
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  const filtered = projects.filter(p => filter === "All" || p.category === filter);

  return (
    <section className="py-24 bg-[#FAFAFA]">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Filter Bar */}
        <div className="flex flex-wrap justify-center gap-2 mb-16">
            {categories.map(cat => (
                <button 
                    key={cat}
                    onClick={() => setFilter(cat)}
                    className={`
                        px-6 py-2 rounded-full text-sm font-medium transition-all
                        ${filter === cat 
                            ? 'bg-slate-900 text-white shadow-lg' 
                            : 'bg-white text-slate-500 hover:text-slate-900 border border-slate-200'}
                    `}
                >
                    {cat}
                </button>
            ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map(project => (
                <div 
                    key={project.id} 
                    onClick={() => setSelectedProject(project)}
                    className="group bg-white rounded-3xl overflow-hidden cursor-pointer shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-slate-100"
                >
                    <div className="relative aspect-[4/3] overflow-hidden">
                        <img 
                            src={project.image} 
                            alt={project.title} 
                            className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                            <span className="px-6 py-3 bg-white text-slate-900 rounded-full font-bold text-xs uppercase tracking-wider transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                View Case Study
                            </span>
                        </div>
                    </div>
                    <div className="p-8">
                        <div className="flex justify-between items-start mb-2">
                            <span className="text-[10px] font-bold text-emerald-600 bg-emerald-50 px-2 py-1 rounded uppercase tracking-wider border border-emerald-100">
                                {project.category}
                            </span>
                            <span className="text-xs font-bold text-slate-400">{project.result}</span>
                        </div>
                        <h3 className="font-serif text-2xl font-bold text-slate-900 group-hover:text-emerald-600 transition-colors">
                            {project.title}
                        </h3>
                    </div>
                </div>
            ))}
        </div>

        {/* Modal Overlay */}
        {selectedProject && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8">
                <div 
                    className="absolute inset-0 bg-black/80 backdrop-blur-sm"
                    onClick={() => setSelectedProject(null)}
                ></div>
                
                <div className="relative bg-white rounded-3xl w-full max-w-5xl max-h-full overflow-y-auto shadow-2xl flex flex-col md:flex-row animate-fade-in-up">
                    <button 
                        onClick={() => setSelectedProject(null)}
                        className="absolute top-4 right-4 z-10 p-2 bg-white/50 backdrop-blur rounded-full hover:bg-slate-100 transition-colors"
                    >
                        <svg className="w-6 h-6 text-slate-900" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                    </button>

                    <div className="w-full md:w-1/2 h-64 md:h-auto">
                        <img src={selectedProject.image} alt={selectedProject.title} className="w-full h-full object-cover" />
                    </div>

                    <div className="w-full md:w-1/2 p-10 md:p-16 flex flex-col">
                        <span className="text-emerald-600 font-bold uppercase tracking-widest text-xs mb-4">{selectedProject.category}</span>
                        <h2 className="font-serif text-4xl font-bold text-slate-900 mb-6">{selectedProject.title}</h2>
                        
                        <div className="space-y-8 mb-10">
                            <div>
                                <h4 className="font-bold text-slate-900 mb-2">The Challenge</h4>
                                <p className="text-slate-500 text-sm leading-relaxed">
                                    The client struggled with fragmented data across multiple legacy systems, leading to a 40% efficiency loss in their core operations.
                                </p>
                            </div>
                            <div>
                                <h4 className="font-bold text-slate-900 mb-2">Our Solution</h4>
                                <p className="text-slate-500 text-sm leading-relaxed">
                                    We implemented a centralized AI data lake using Supabase and built a custom React dashboard with predictive analytics models.
                                </p>
                            </div>
                            <div>
                                <h4 className="font-bold text-slate-900 mb-2">Results</h4>
                                <ul className="space-y-2 text-sm text-slate-600">
                                    <li className="flex items-center gap-2"><span className="text-emerald-500">✓</span> {selectedProject.result} Impact</li>
                                    <li className="flex items-center gap-2"><span className="text-emerald-500">✓</span> 8-Week Delivery</li>
                                    <li className="flex items-center gap-2"><span className="text-emerald-500">✓</span> Zero Downtime Migration</li>
                                </ul>
                            </div>
                        </div>

                        <div className="mt-auto pt-8 border-t border-slate-100 flex items-center justify-between">
                            <div className="flex gap-4 opacity-50 grayscale hover:grayscale-0 transition-all">
                                {/* Tech Stack Placeholders */}
                                <div className="w-6 h-6 bg-slate-200 rounded-full"></div>
                                <div className="w-6 h-6 bg-slate-200 rounded-full"></div>
                                <div className="w-6 h-6 bg-slate-200 rounded-full"></div>
                            </div>
                            <button className="px-6 py-3 bg-slate-900 text-white rounded-lg font-bold text-sm hover:bg-slate-800 transition-colors">
                                Build This
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        )}

      </div>
    </section>
  );
};

export default ProjectsGrid;
