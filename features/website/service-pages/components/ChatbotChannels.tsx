import React from 'react';

const ChatbotChannels: React.FC = () => {
  return (
    <section className="py-24 bg-white text-slate-900">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4">Omnichannel Presence</h2>
          <p className="text-slate-500">Meet your customers exactly where they are. Build once, deploy everywhere.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
                { name: "WhatsApp", icon: "💬", color: "hover:bg-[#25D366] hover:text-white", border: "hover:border-[#25D366]" },
                { name: "Website", icon: "🌐", color: "hover:bg-blue-600 hover:text-white", border: "hover:border-blue-600" },
                { name: "SMS / Text", icon: "📱", color: "hover:bg-slate-900 hover:text-white", border: "hover:border-slate-900" },
                { name: "Slack / Teams", icon: "🏢", color: "hover:bg-[#4A154B] hover:text-white", border: "hover:border-[#4A154B]" },
            ].map((channel, i) => (
                <div key={i} className={`group p-8 rounded-2xl border border-slate-100 bg-slate-50 transition-all duration-300 ${channel.color} ${channel.border} hover:shadow-xl cursor-default flex flex-col items-center justify-center min-h-[200px]`}>
                    <div className="text-5xl mb-6 transform group-hover:scale-110 transition-transform duration-300">{channel.icon}</div>
                    <h3 className="font-bold text-lg">{channel.name}</h3>
                    <p className="text-xs mt-2 opacity-60 text-center">Seamless Integration</p>
                </div>
            ))}
        </div>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
                { title: "Sentiment Analysis", desc: "Real-time emotion tracking. If a customer gets angry, the bot escalates immediately.", icon: "❤️" },
                { title: "Knowledge Base RAG", desc: "Upload your PDFs and URLs. The bot answers based ONLY on your data. No hallucinations.", icon: "📚" },
                { title: "Lead Capture", desc: "Collects names, emails, and requirements naturally during the conversation.", icon: "🎯" }
            ].map((feature, i) => (
                <div key={i} className="flex gap-4 p-4">
                    <div className="w-12 h-12 rounded-full bg-cyan-50 text-cyan-600 flex items-center justify-center text-xl shrink-0">
                        {feature.icon}
                    </div>
                    <div>
                        <h4 className="font-bold text-slate-900 mb-1">{feature.title}</h4>
                        <p className="text-sm text-slate-500 leading-relaxed">{feature.desc}</p>
                    </div>
                </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default ChatbotChannels;