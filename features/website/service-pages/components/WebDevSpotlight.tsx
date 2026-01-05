import React from 'react';
import { useNavigate } from 'react-router-dom';

const WebDevSpotlight: React.FC = () => {
  const navigate = useNavigate();

  return (
    <section id="case-studies" className="py-32 bg-[#FAFAFA] text-slate-900 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center gap-20">
            <div className="lg:w-1/2">
                <span className="text-[#10B981] font-bold tracking-widest text-xs uppercase mb-4 block">Executive-Grade UX</span>
                <h2 className="font-serif text-5xl font-bold mb-8">Dashboards That <br/>Drive Decisions</h2>
                <p className="text-slate-600 text-lg mb-8 leading-relaxed">
                    We don't just build websites; we build command centers. Our "Three-Panel" layout philosophy ensures your users always have Context, Work, and Intelligence in one view.
                </p>
                <ul className="space-y-4 mb-10">
                    {['Real-time data synchronization', 'AI Health Monitoring widgets', 'Custom workflow automation triggers'].map((item, i) => (
                        <li key={i} className="flex items-center text-slate-700 font-medium">
                            <span className="w-5 h-5 rounded-full bg-[#10B981]/20 text-[#10B981] flex items-center justify-center text-xs mr-3">✓</span>
                            {item}
                        </li>
                    ))}
                </ul>
                <button 
                    onClick={() => navigate('/wizard/step-1')}
                    className="px-8 py-3 bg-slate-900 text-white rounded-lg font-bold text-sm uppercase tracking-wider hover:bg-slate-800 transition-colors shadow-lg"
                >
                    Build My Dashboard
                </button>
            </div>
            <div className="lg:w-1/2">
                <div className="relative shadow-2xl rounded-xl overflow-hidden border border-slate-200 bg-white p-2">
                    <img 
                        src="https://placehold.co/800x600/f8fafc/cbd5e1?text=Executive+Dashboard+Mockup" 
                        alt="Dashboard Mockup" 
                        className="w-full h-auto rounded-lg shadow-inner"
                    />
                </div>
            </div>
        </div>
      </section>
  );
};

export default WebDevSpotlight;