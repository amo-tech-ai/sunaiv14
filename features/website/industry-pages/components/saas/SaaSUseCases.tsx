
import React from 'react';

const SaaSUseCases: React.FC = () => {
  return (
    <section className="py-32 bg-[#FCFCFC] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Use Case 1: Onboarding */}
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24 mb-32">
            <div className="lg:w-1/2">
                <div className="inline-block p-3 rounded-2xl bg-indigo-50 text-indigo-600 mb-6">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                </div>
                <h2 className="font-serif text-4xl md:text-5xl font-bold text-slate-900 mb-6">Zero-Touch Onboarding</h2>
                <p className="text-lg text-slate-600 leading-relaxed mb-8">
                    Stop forcing users to watch hour-long demos. Our AI agents guide new sign-ups through your platform interactively, configuring settings and importing data in real-time.
                </p>
                <ul className="space-y-4">
                    {['Context-aware walkthroughs', 'Automated CSV data mapping', 'Instant "Aha!" moments'].map((item, i) => (
                        <li key={i} className="flex items-center gap-3 text-slate-700 font-medium">
                            <span className="w-5 h-5 rounded-full bg-green-100 text-green-600 flex items-center justify-center text-xs">✓</span>
                            {item}
                        </li>
                    ))}
                </ul>
            </div>
            <div className="lg:w-1/2 relative">
                <div className="relative bg-white rounded-2xl shadow-2xl border border-slate-100 p-2 aspect-[4/3] transform rotate-1 hover:rotate-0 transition-transform duration-500">
                    <div className="absolute inset-0 bg-slate-50/50 rounded-xl"></div>
                    <div className="relative h-full w-full bg-white rounded-xl overflow-hidden border border-slate-100 flex flex-col">
                        {/* Mock UI Header */}
                        <div className="h-12 border-b border-slate-100 flex items-center px-4 gap-2">
                            <div className="w-3 h-3 rounded-full bg-slate-200"></div>
                            <div className="w-3 h-3 rounded-full bg-slate-200"></div>
                        </div>
                        {/* Mock UI Body */}
                        <div className="flex-1 p-6 relative">
                            <div className="space-y-4">
                                <div className="h-4 bg-slate-100 rounded w-1/3"></div>
                                <div className="h-32 bg-slate-50 rounded border border-dashed border-slate-200"></div>
                                <div className="h-4 bg-slate-100 rounded w-1/4"></div>
                            </div>
                            
                            {/* Floating Cursor/Tooltip */}
                            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-indigo-600 text-white px-4 py-3 rounded-xl shadow-xl flex items-center gap-3 animate-bounce">
                                <span className="text-xs font-bold">Let's set up your workspace!</span>
                                <div className="w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[8px] border-t-indigo-600 absolute -bottom-2 left-1/2 -translate-x-1/2"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        {/* Use Case 2: Retention */}
        <div className="flex flex-col lg:flex-row-reverse items-center gap-16 lg:gap-24">
            <div className="lg:w-1/2">
                <div className="inline-block p-3 rounded-2xl bg-purple-50 text-purple-600 mb-6">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>
                </div>
                <h2 className="font-serif text-4xl md:text-5xl font-bold text-slate-900 mb-6">Predictive Retention</h2>
                <p className="text-lg text-slate-600 leading-relaxed mb-8">
                    Identify at-risk accounts before they cancel. Our models analyze usage patterns to trigger proactive interventions—saving revenue on autopilot.
                </p>
                <ul className="space-y-4">
                    {['Health score monitoring', 'Automated re-engagement emails', 'Usage drop-off alerts'].map((item, i) => (
                        <li key={i} className="flex items-center gap-3 text-slate-700 font-medium">
                            <span className="w-5 h-5 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center text-xs">✓</span>
                            {item}
                        </li>
                    ))}
                </ul>
            </div>
            <div className="lg:w-1/2 relative">
                <div className="relative bg-white rounded-2xl shadow-2xl border border-slate-100 p-2 aspect-[4/3] transform -rotate-1 hover:rotate-0 transition-transform duration-500">
                    <div className="h-full w-full bg-slate-900 rounded-xl overflow-hidden relative flex items-center justify-center">
                        {/* Abstract Graph */}
                        <div className="w-3/4 space-y-4">
                            <div className="flex justify-between text-slate-400 text-xs font-mono uppercase">
                                <span>Account Health</span>
                                <span className="text-red-400">Risk Detected</span>
                            </div>
                            <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
                                <div className="h-full w-[45%] bg-red-500 rounded-full animate-pulse"></div>
                            </div>
                            
                            {/* Alert Card */}
                            <div className="mt-6 bg-slate-800 border border-slate-700 p-4 rounded-lg flex items-center gap-4">
                                <div className="w-10 h-10 rounded-full bg-red-500/20 text-red-500 flex items-center justify-center">!</div>
                                <div>
                                    <div className="text-white text-sm font-bold">Acme Corp usage down 40%</div>
                                    <div className="text-slate-400 text-xs">Triggering success sequence...</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

      </div>
    </section>
  );
};

export default SaaSUseCases;
