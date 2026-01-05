import React from 'react';

const AIDevIntegration: React.FC = () => {
  return (
    <section className="py-24 bg-[#020203] border-y border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center gap-12">
        <div className="md:w-1/2">
          <span className="text-purple-500 font-bold uppercase tracking-widest text-xs mb-4 block">Seamless Integration</span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-white mb-6">
            The Neural Layer <br/> of Your Stack
          </h2>
          <p className="text-slate-400 text-lg leading-relaxed mb-8">
            We don't build silos. Our AI engines sit invisibly between your data sources and your user interfaces, processing intelligence in real-time via secure APIs.
          </p>
          <ul className="space-y-4">
            {['REST & GraphQL API Endpoints', 'SOC 2 Compliant Data Handling', 'Real-time WebSocket Streaming', 'Dockerized & Kubernetes Ready'].map((item, i) => (
               <li key={i} className="flex items-center text-slate-300">
                  <span className="w-1.5 h-1.5 rounded-full bg-purple-500 mr-3"></span>
                  {item}
               </li>
            ))}
          </ul>
        </div>

        <div className="md:w-1/2 relative">
            {/* Simple Visual Representation of Flow */}
            <div className="relative p-8 border border-white/10 rounded-2xl bg-white/5 backdrop-blur-sm">
                <div className="flex justify-between items-center relative z-10">
                    {/* Source */}
                    <div className="flex flex-col items-center gap-2">
                        <div className="w-16 h-16 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center text-2xl">🗄️</div>
                        <span className="text-xs text-slate-500 font-mono uppercase">Your Data</span>
                    </div>

                    {/* Arrow 1 */}
                    <div className="flex-1 h-0.5 bg-slate-700 mx-4 relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent w-1/2 animate-[shimmer_2s_infinite]"></div>
                    </div>

                    {/* Brain */}
                    <div className="flex flex-col items-center gap-2 relative">
                        <div className="absolute -inset-4 bg-purple-500/20 blur-xl rounded-full animate-pulse"></div>
                        <div className="w-20 h-20 rounded-full bg-slate-900 border-2 border-purple-500 flex items-center justify-center text-3xl shadow-[0_0_30px_rgba(168,85,247,0.4)] relative z-10">
                            🧠
                        </div>
                        <span className="text-xs text-purple-400 font-mono uppercase font-bold">Sun AI Core</span>
                    </div>

                    {/* Arrow 2 */}
                    <div className="flex-1 h-0.5 bg-slate-700 mx-4 relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent w-1/2 animate-[shimmer_2s_infinite] delay-1000"></div>
                    </div>

                    {/* Output */}
                    <div className="flex flex-col items-center gap-2">
                        <div className="w-16 h-16 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center text-2xl">📱</div>
                        <span className="text-xs text-slate-500 font-mono uppercase">Your App</span>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default AIDevIntegration;