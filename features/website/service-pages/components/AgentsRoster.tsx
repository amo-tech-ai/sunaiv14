import React from 'react';

const AgentsRoster: React.FC = () => {
  return (
    <section className="py-32 bg-[#020203] text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4">Meet Your Digital Team</h2>
          <p className="text-slate-400">Pre-trained roles ready to integrate into your Slack, CRM, and Email.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
                { 
                    role: "Sales Qualifier", 
                    name: "Alex", 
                    icon: "💼", 
                    color: "border-orange-500/50", 
                    skills: ["Lead Scoring", "Calendar Booking", "CRM Updates"] 
                },
                { 
                    role: "Support Specialist", 
                    name: "Sam", 
                    icon: "🛡️", 
                    color: "border-purple-500/50", 
                    skills: ["Ticket Triage", "FAQ Resolution", "Escalation"] 
                },
                { 
                    role: "Research Analyst", 
                    name: "Riley", 
                    icon: "🔎", 
                    color: "border-blue-500/50", 
                    skills: ["Competitor Scan", "Data Enrichment", "Report Gen"] 
                }
            ].map((agent, i) => (
                <div key={i} className={`group relative bg-white/5 backdrop-blur-sm border ${agent.color} rounded-xl p-6 hover:-translate-y-2 transition-transform duration-300 overflow-hidden`}>
                    {/* ID Badge Header */}
                    <div className="flex items-center justify-between mb-6 border-b border-white/10 pb-4">
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 bg-slate-800 rounded-full flex items-center justify-center text-2xl border border-white/10">
                                {agent.icon}
                            </div>
                            <div>
                                <h3 className="font-bold text-lg">{agent.role}</h3>
                                <p className="text-xs text-slate-400 font-mono uppercase">ID: AGENT-{i+1}0{i+1}</p>
                            </div>
                        </div>
                        <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse shadow-[0_0_10px_#22c55e]"></div>
                    </div>

                    {/* Capabilities */}
                    <div className="space-y-3">
                        <p className="text-xs font-bold text-slate-500 uppercase tracking-widest">Capabilities</p>
                        {agent.skills.map((skill, sIdx) => (
                            <div key={sIdx} className="flex items-center text-sm text-slate-300">
                                <span className="w-1.5 h-1.5 bg-slate-500 rounded-full mr-2"></span>
                                {skill}
                            </div>
                        ))}
                    </div>

                    {/* Scanline Effect */}
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/5 to-transparent h-[10px] w-full animate-[scan_3s_linear_infinite] pointer-events-none opacity-20"></div>
                </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default AgentsRoster;