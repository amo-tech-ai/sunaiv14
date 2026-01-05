
import React from 'react';
import { useNavigate } from 'react-router-dom';

const SaaSCTA: React.FC = () => {
  const navigate = useNavigate();

  return (
    <section className="py-32 bg-[#050508] relative overflow-hidden">
        {/* Subtle matrix rain effect placeholder */}
        <div className="absolute inset-0 opacity-10 bg-[url('https://placehold.co/100x100/000000/ffffff?text=10101')] [mask-image:linear-gradient(to_bottom,transparent,black)]"></div>

        <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
            <h2 className="font-serif text-5xl md:text-6xl font-bold text-white mb-8">
                Ready to Modernize <br/> Your Stack?
            </h2>
            <p className="text-xl text-slate-400 mb-12 font-light">
                Deploy intelligence where it matters. Scale your SaaS without the headcount.
            </p>
            <button 
                onClick={() => navigate('/wizard/step-1')}
                className="px-10 py-5 bg-gradient-to-r from-indigo-600 to-blue-600 hover:from-indigo-500 hover:to-blue-500 text-white rounded-full font-bold text-sm uppercase tracking-wider transition-all hover:-translate-y-1 shadow-[0_0_30px_rgba(79,70,229,0.4)]"
            >
                Start Assessment
            </button>
        </div>
    </section>
  );
};

export default SaaSCTA;
