import React from 'react';

const ChatbotComparison: React.FC = () => {
  return (
    <section className="py-24 bg-[#050508] text-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4">The Intelligence Gap</h2>
          <p className="text-slate-400">Why rule-based bots are costing you customers.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Old Way */}
            <div className="p-8 rounded-2xl border border-red-900/30 bg-red-900/5 relative overflow-hidden">
                <div className="absolute top-0 right-0 p-4 opacity-10">
                    <svg className="w-24 h-24 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                </div>
                <h3 className="text-xl font-bold text-red-400 mb-6 flex items-center">
                    <span className="w-8 h-8 rounded-full bg-red-900/50 flex items-center justify-center mr-3 border border-red-500/50">✕</span>
                    Legacy Chatbots
                </h3>
                <ul className="space-y-4 text-slate-400">
                    <li className="flex gap-3">
                        <span className="text-red-500 mt-1">✕</span>
                        <span><strong>Keyword Matching:</strong> Fails if the customer makes a typo or uses slang.</span>
                    </li>
                    <li className="flex gap-3">
                        <span className="text-red-500 mt-1">✕</span>
                        <span><strong>Rigid Decision Trees:</strong> "I didn't understand that" loops.</span>
                    </li>
                    <li className="flex gap-3">
                        <span className="text-red-500 mt-1">✕</span>
                        <span><strong>Zero Memory:</strong> Forgets context after 2 messages.</span>
                    </li>
                    <li className="flex gap-3">
                        <span className="text-red-500 mt-1">✕</span>
                        <span><strong>Cold & Robotic:</strong> Damages your brand image.</span>
                    </li>
                </ul>
            </div>

            {/* Sun AI Way */}
            <div className="p-8 rounded-2xl border border-cyan-500/30 bg-cyan-900/10 relative overflow-hidden ring-1 ring-cyan-500/20">
                <div className="absolute top-0 right-0 p-4 opacity-10">
                    <svg className="w-24 h-24 text-cyan-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                </div>
                <h3 className="text-xl font-bold text-cyan-400 mb-6 flex items-center">
                    <span className="w-8 h-8 rounded-full bg-cyan-900/50 flex items-center justify-center mr-3 border border-cyan-500/50">✓</span>
                    Sun AI Concierge
                </h3>
                <ul className="space-y-4 text-slate-300">
                    <li className="flex gap-3">
                        <span className="text-cyan-500 mt-1">✓</span>
                        <span><strong>Intent Recognition:</strong> Understands meaning behind "Can I get a refund?" vs "Where is my refund?".</span>
                    </li>
                    <li className="flex gap-3">
                        <span className="text-cyan-500 mt-1">✓</span>
                        <span><strong>Generative Reasoning:</strong> Formulates answers dynamically based on your knowledge base.</span>
                    </li>
                    <li className="flex gap-3">
                        <span className="text-cyan-500 mt-1">✓</span>
                        <span><strong>Infinite Context:</strong> Remembers user history and preferences.</span>
                    </li>
                    <li className="flex gap-3">
                        <span className="text-cyan-500 mt-1">✓</span>
                        <span><strong>Human Handoff:</strong> Detects frustration and alerts a human instantly.</span>
                    </li>
                </ul>
            </div>
        </div>
      </div>
    </section>
  );
};

export default ChatbotComparison;