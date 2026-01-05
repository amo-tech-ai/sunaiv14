import React from 'react';

const ChatbotAnalytics: React.FC = () => {
  return (
    <section className="py-24 bg-[#050508] border-y border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center gap-16">
        <div className="md:w-1/2">
          <span className="text-cyan-500 font-bold uppercase tracking-widest text-xs mb-4 block">Visual Intelligence</span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-white mb-6">
            See What Your <br/> Customers Are Asking
          </h2>
          <p className="text-slate-400 text-lg leading-relaxed mb-8">
            Don't fly blind. Our dashboards reveal conversation topics, sentiment trends, and drop-off points so you can optimize your business.
          </p>
          <div className="flex gap-8">
              <div>
                  <div className="text-3xl font-bold text-white mb-1">78%</div>
                  <div className="text-xs text-slate-500 uppercase tracking-wider">Resolution Rate</div>
              </div>
              <div>
                  <div className="text-3xl font-bold text-white mb-1">1.2s</div>
                  <div className="text-xs text-slate-500 uppercase tracking-wider">Avg Response</div>
              </div>
              <div>
                  <div className="text-3xl font-bold text-white mb-1">4.9</div>
                  <div className="text-xs text-slate-500 uppercase tracking-wider">CSAT Score</div>
              </div>
          </div>
        </div>

        <div className="md:w-1/2 w-full">
            {/* Mock Dashboard */}
            <div className="bg-slate-900 border border-slate-700 rounded-xl p-6 shadow-2xl relative">
                <div className="flex items-center justify-between mb-6">
                    <h4 className="text-sm font-bold text-slate-300">Conversation Volume</h4>
                    <div className="flex gap-2">
                        <div className="w-3 h-3 rounded-full bg-red-500"></div>
                        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                        <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    </div>
                </div>
                
                {/* Graph Area */}
                <div className="h-40 flex items-end justify-between gap-2 mb-6">
                    {[40, 65, 45, 80, 55, 90, 70].map((h, i) => (
                        <div key={i} className="w-full bg-cyan-900/30 rounded-t-sm relative group cursor-pointer">
                            <div 
                                className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-cyan-600 to-cyan-400 rounded-t-sm transition-all duration-500 group-hover:bg-cyan-300" 
                                style={{ height: `${h}%` }}
                            ></div>
                        </div>
                    ))}
                </div>

                {/* Topics List */}
                <div className="space-y-3">
                    <div className="text-xs text-slate-500 uppercase font-bold">Trending Topics</div>
                    {[
                        { topic: "Pricing Inquiry", count: 432, color: "bg-cyan-500" },
                        { topic: "Technical Support", count: 215, color: "bg-purple-500" },
                        { topic: "Account Access", count: 180, color: "bg-green-500" }
                    ].map((t, i) => (
                        <div key={i} className="flex items-center justify-between text-sm text-slate-300">
                            <div className="flex items-center gap-3">
                                <div className={`w-2 h-2 rounded-full ${t.color}`}></div>
                                {t.topic}
                            </div>
                            <span className="font-mono text-slate-500">{t.count}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default ChatbotAnalytics;