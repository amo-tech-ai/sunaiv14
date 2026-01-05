
import React, { useState } from 'react';

const ContactBooking: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'calendar' | 'email'>('calendar');

  return (
    <section className="py-20 bg-white text-slate-900 relative">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="flex flex-col lg:flex-row gap-16">
            
            {/* Left Column: Context */}
            <div className="lg:w-1/3 space-y-10">
                <div>
                    <h3 className="font-serif text-3xl font-bold mb-4">The Strategy Session</h3>
                    <p className="text-slate-500 leading-relaxed mb-6">
                        This is not a sales pitch. It is a 30-minute architectural review of your business logic to see if AI is a viable lever for growth.
                    </p>
                    <ul className="space-y-4">
                        {[
                            "No commitment required",
                            "Technical feasibility audit",
                            "Rough ROI calculation",
                            "Implementation roadmap sketch"
                        ].map((item, i) => (
                            <li key={i} className="flex items-center gap-3 text-sm font-medium text-slate-700">
                                <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center text-xs">✓</span>
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="p-6 bg-slate-50 rounded-xl border border-slate-100">
                    <h4 className="font-bold text-sm uppercase tracking-widest text-slate-400 mb-4">Direct Contact</h4>
                    <div className="space-y-3">
                        <a href="mailto:hello@sunai.agency" className="block text-lg font-serif font-bold text-slate-900 hover:text-emerald-600 transition-colors">
                            hello@sunai.agency
                        </a>
                        <div className="text-slate-500 text-sm">
                            +1 (415) 555-0123
                        </div>
                    </div>
                </div>
            </div>

            {/* Right Column: The Engine */}
            <div className="lg:w-2/3">
                <div className="bg-white rounded-3xl border border-slate-200 shadow-2xl overflow-hidden min-h-[600px] flex flex-col">
                    
                    {/* Toggle Header */}
                    <div className="flex border-b border-slate-100">
                        <button 
                            onClick={() => setActiveTab('calendar')}
                            className={`flex-1 py-4 text-sm font-bold uppercase tracking-wider transition-colors ${activeTab === 'calendar' ? 'bg-slate-900 text-white' : 'bg-slate-50 text-slate-400 hover:bg-slate-100'}`}
                        >
                            Book a Call
                        </button>
                        <button 
                            onClick={() => setActiveTab('email')}
                            className={`flex-1 py-4 text-sm font-bold uppercase tracking-wider transition-colors ${activeTab === 'email' ? 'bg-slate-900 text-white' : 'bg-slate-50 text-slate-400 hover:bg-slate-100'}`}
                        >
                            Send Message
                        </button>
                    </div>

                    {/* Content Area */}
                    <div className="flex-1 bg-white relative">
                        {activeTab === 'calendar' ? (
                            <div className="absolute inset-0 w-full h-full bg-slate-50 flex items-center justify-center">
                                {/* Simulated Calendly Iframe */}
                                <div className="text-center p-8">
                                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 text-3xl mb-4 mx-auto">
                                        📅
                                    </div>
                                    <h3 className="font-bold text-slate-900 mb-2">Calendar Integration</h3>
                                    <p className="text-slate-500 text-sm max-w-sm mx-auto mb-6">
                                        In a production environment, your Calendly or Cal.com widget would render here fully interactive.
                                    </p>
                                    <button className="px-6 py-2 bg-blue-600 text-white rounded-lg text-sm font-bold shadow-md hover:bg-blue-700 transition-colors">
                                        Open Calendar Overlay
                                    </button>
                                </div>
                            </div>
                        ) : (
                            <div className="p-8 md:p-12">
                                <form className="space-y-6">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div>
                                            <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">First Name</label>
                                            <input type="text" className="w-full p-3 bg-slate-50 border border-slate-200 rounded-lg focus:border-emerald-500 outline-none transition-colors" placeholder="Jane" />
                                        </div>
                                        <div>
                                            <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">Last Name</label>
                                            <input type="text" className="w-full p-3 bg-slate-50 border border-slate-200 rounded-lg focus:border-emerald-500 outline-none transition-colors" placeholder="Doe" />
                                        </div>
                                    </div>
                                    <div>
                                        <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">Work Email</label>
                                        <input type="email" className="w-full p-3 bg-slate-50 border border-slate-200 rounded-lg focus:border-emerald-500 outline-none transition-colors" placeholder="jane@company.com" />
                                    </div>
                                    <div>
                                        <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">Project Brief</label>
                                        <textarea className="w-full p-3 bg-slate-50 border border-slate-200 rounded-lg focus:border-emerald-500 outline-none transition-colors h-32 resize-none" placeholder="Tell us about your challenges..."></textarea>
                                    </div>
                                    <button type="button" className="w-full py-4 bg-slate-900 text-white rounded-lg font-bold uppercase tracking-wider hover:bg-emerald-600 transition-colors shadow-lg">
                                        Send Application
                                    </button>
                                </form>
                            </div>
                        )}
                    </div>

                </div>
            </div>

        </div>
      </div>
    </section>
  );
};

export default ContactBooking;
