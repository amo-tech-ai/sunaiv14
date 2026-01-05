
import React from 'react';
import { useNavigate } from 'react-router-dom';

const MVPCTA: React.FC = () => {
  const navigate = useNavigate();

  return (
    <section className="py-32 bg-[#FAFAFA] text-center border-t border-slate-200">
      <div className="max-w-4xl mx-auto px-6">
        <div className="bg-white rounded-[3rem] p-12 md:p-20 shadow-2xl border border-slate-100 relative overflow-hidden">
            {/* Background Decor */}
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-emerald-50 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>

            <div className="relative z-10">
                <h2 className="font-serif text-4xl md:text-6xl font-bold text-slate-900 mb-6">Ready to Test Your Hypothesis?</h2>
                <p className="text-xl text-slate-500 font-light mb-12 max-w-2xl mx-auto">
                    Stop guessing. Start building. Get a production-ready AI MVP in 8 weeks.
                </p>
                <div className="flex flex-col md:flex-row items-center justify-center gap-6">
                    <button 
                        onClick={() => navigate('/wizard/step-1')}
                        className="px-10 py-4 bg-[#10B981] hover:bg-[#059669] text-white rounded-full font-bold text-sm uppercase tracking-wider transition-all hover:-translate-y-1 shadow-lg shadow-emerald-500/30"
                    >
                        Start Your Project
                    </button>
                    <button 
                        onClick={() => navigate('/contact')}
                        className="text-slate-600 font-bold hover:text-[#10B981] transition-colors underline decoration-2 decoration-transparent hover:decoration-[#10B981]"
                    >
                        Book Strategy Call
                    </button>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default MVPCTA;
