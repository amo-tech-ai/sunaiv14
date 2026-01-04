import React from 'react';
import { useNavigate } from 'react-router-dom';

const CTASection: React.FC = () => {
  const navigate = useNavigate();

  const handleStart = () => {
    navigate('/wizard/step-1');
  };

  return (
    <section className="py-24 bg-[#FAFAFA]">
      <div className="max-w-5xl mx-auto px-6">
        <div className="relative rounded-3xl p-12 md:p-20 overflow-hidden text-center shadow-2xl group">
            {/* Dark Card for Contrast */}
            <div className="absolute inset-0 bg-[#050508] -z-20"></div>
            {/* Glow Effect */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#10B981] rounded-full blur-[150px] mix-blend-overlay opacity-20 group-hover:opacity-30 transition-opacity duration-700 -z-10"></div>

            <h2 className="font-serif text-4xl md:text-6xl font-bold mb-6 text-white">Ready to Build AI That <br/> Generates Revenue?</h2>
            <p className="text-lg text-slate-400 mb-10 max-w-2xl mx-auto">Book a free 30-minute strategy call. No sales pitch—just expert guidance on your AI roadmap.</p>
            
            <div className="flex flex-col md:flex-row items-center justify-center gap-4">
              <button onClick={handleStart} className="w-full md:w-auto px-8 py-4 bg-[#10B981] hover:bg-[#059669] text-white rounded-lg font-bold text-sm uppercase tracking-wider transition-all shadow-lg hover:shadow-[#10B981]/25 hover:-translate-y-1">
                Start Free Assessment
              </button>
              <button className="w-full md:w-auto px-8 py-4 bg-white/5 border border-white/20 hover:bg-white/10 text-white rounded-lg font-bold text-sm uppercase tracking-wider transition-all backdrop-blur-sm">
                View Pricing
              </button>
            </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;