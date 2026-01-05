import React from 'react';
import { useNavigate } from 'react-router-dom';

const ChatbotHero: React.FC = () => {
  const navigate = useNavigate();

  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-gradient-to-b from-cyan-50 to-white">
      {/* Background Shapes */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-cyan-100/50 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-green-50/50 rounded-full blur-[100px] translate-y-1/3 -translate-x-1/4 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col lg:flex-row items-center gap-16">
        <div className="lg:w-1/2 text-center lg:text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-cyan-100 shadow-sm mb-8 animate-fade-in">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 animate-pulse"></span>
            <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500">24/7 Intelligent Concierge</span>
          </div>

          <h1 className="font-serif text-5xl md:text-7xl font-bold leading-[1.1] mb-6 tracking-tight text-slate-900">
            Understand, <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-green-500">
              Don't Just Reply
            </span>
          </h1>

          <p className="text-xl text-slate-500 mb-10 font-light leading-relaxed max-w-xl mx-auto lg:mx-0">
            Upgrade from "annoying popups" to intelligent concierges. Our GPT-4 powered bots handle sales, support, and bookings while you sleep.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
            <button 
              onClick={() => navigate('/contact')}
              className="px-8 py-4 bg-slate-900 hover:bg-slate-800 text-white rounded-lg font-bold text-sm uppercase tracking-wider transition-all hover:-translate-y-1 shadow-lg"
            >
              Build Your Bot
            </button>
            <button className="px-8 py-4 bg-white hover:bg-cyan-50 border border-slate-200 text-slate-700 rounded-lg font-bold text-sm uppercase tracking-wider transition-all">
              View Demo
            </button>
          </div>
        </div>

        {/* Live Chat Visual */}
        <div className="lg:w-1/2 relative w-full max-w-md mx-auto">
            <div className="relative bg-white rounded-[3rem] border-8 border-slate-900 shadow-2xl overflow-hidden aspect-[9/19]">
                {/* Phone Notch */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-slate-900 rounded-b-xl z-20"></div>
                
                {/* Screen Content */}
                <div className="h-full bg-slate-50 flex flex-col">
                    {/* Header */}
                    <div className="bg-white p-6 pb-4 border-b border-slate-100 pt-12 flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-cyan-400 to-green-400 flex items-center justify-center text-white font-bold">AI</div>
                        <div>
                            <div className="font-bold text-slate-900 text-sm">Sun Concierge</div>
                            <div className="flex items-center gap-1 text-[10px] text-green-600 font-medium">
                                <span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span> Online
                            </div>
                        </div>
                    </div>

                    {/* Chat Area */}
                    <div className="flex-1 p-4 space-y-4 overflow-hidden relative">
                        {/* Message 1 */}
                        <div className="flex gap-3 animate-fade-in-up delay-100">
                            <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-cyan-400 to-green-400 shrink-0"></div>
                            <div className="bg-white p-3 rounded-2xl rounded-tl-none shadow-sm border border-slate-100 text-xs text-slate-600 leading-relaxed max-w-[80%]">
                                Hi there! 👋 I noticed you're looking at our pricing page. Do you have questions about the Enterprise plan?
                            </div>
                        </div>

                        {/* Message 2 (User) */}
                        <div className="flex gap-3 justify-end animate-fade-in-up delay-[1000ms]">
                            <div className="bg-cyan-600 p-3 rounded-2xl rounded-tr-none shadow-sm text-xs text-white leading-relaxed max-w-[80%]">
                                Yes, does it include custom fine-tuning?
                            </div>
                        </div>

                        {/* Message 3 (Bot) */}
                        <div className="flex gap-3 animate-fade-in-up delay-[2500ms]">
                            <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-cyan-400 to-green-400 shrink-0"></div>
                            <div className="bg-white p-3 rounded-2xl rounded-tl-none shadow-sm border border-slate-100 text-xs text-slate-600 leading-relaxed max-w-[80%]">
                                Absolutely. The Enterprise plan allows us to train a model specifically on your internal documents and brand voice. Would you like to schedule a demo?
                            </div>
                        </div>
                        
                        {/* Typing Indicator */}
                        <div className="absolute bottom-4 left-4 bg-white px-3 py-2 rounded-full border border-slate-100 shadow-sm animate-pulse delay-[3500ms]">
                            <div className="flex gap-1">
                                <div className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce"></div>
                                <div className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce delay-100"></div>
                                <div className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce delay-200"></div>
                            </div>
                        </div>
                    </div>

                    {/* Input Area */}
                    <div className="p-4 bg-white border-t border-slate-100">
                        <div className="h-10 bg-slate-100 rounded-full w-full"></div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default ChatbotHero;