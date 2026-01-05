
import React from 'react';

const SaaSArchitecture: React.FC = () => {
  return (
    <section className="py-24 bg-[#050508] text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
            <span className="text-indigo-500 font-bold uppercase tracking-widest text-xs mb-4 block">System Architecture</span>
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6">The Neural Layer</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
                We don't replace your stack; we enhance it. Sun AI sits between your database and your frontend, processing intelligence in real-time.
            </p>
        </div>

        {/* Diagram */}
        <div className="relative max-w-4xl mx-auto">
            {/* Connecting Lines */}
            <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-transparent via-indigo-500/50 to-transparent -translate-x-1/2 hidden md:block"></div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative z-10">
                
                {/* Layer 1: Data */}
                <div className="flex flex-col items-center text-center">
                    <div className="w-24 h-24 rounded-2xl bg-slate-900 border border-slate-700 flex items-center justify-center text-4xl shadow-lg mb-6 relative group">
                        <div className="absolute inset-0 bg-indigo-500/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
                        🗄️
                    </div>
                    <h3 className="font-bold text-lg mb-2">Your Data</h3>
                    <p className="text-xs text-slate-500 font-mono">Postgres / Redis / S3</p>
                </div>

                {/* Layer 2: Sun AI Core */}
                <div className="flex flex-col items-center text-center md:mt-24">
                    <div className="w-32 h-32 rounded-full bg-[#050508] border-2 border-indigo-500 flex items-center justify-center text-5xl shadow-[0_0_50px_rgba(99,102,241,0.3)] mb-6 relative animate-pulse-slow">
                        🧠
                    </div>
                    <h3 className="font-bold text-xl text-indigo-400 mb-2">Sun AI Core</h3>
                    <p className="text-xs text-slate-500 font-mono">
                        Vector Embeddings<br/>
                        LLM Orchestration<br/>
                        Semantic Caching
                    </p>
                </div>

                {/* Layer 3: Experience */}
                <div className="flex flex-col items-center text-center">
                    <div className="w-24 h-24 rounded-2xl bg-slate-900 border border-slate-700 flex items-center justify-center text-4xl shadow-lg mb-6 relative group">
                        <div className="absolute inset-0 bg-purple-500/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
                        🖥️
                    </div>
                    <h3 className="font-bold text-lg mb-2">Frontend</h3>
                    <p className="text-xs text-slate-500 font-mono">React / Mobile / API</p>
                </div>

            </div>
        </div>
      </div>
    </section>
  );
};

export default SaaSArchitecture;
