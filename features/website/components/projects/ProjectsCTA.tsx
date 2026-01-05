
import React from 'react';
import { useNavigate } from 'react-router-dom';

const ProjectsCTA: React.FC = () => {
  const navigate = useNavigate();

  return (
    <section className="py-32 bg-white text-center">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="font-serif text-5xl md:text-6xl font-bold text-slate-900 mb-8">
            Build Your <br/> Masterpiece
        </h2>
        <p className="text-xl text-slate-500 font-light mb-12">
            You've seen the results. Now let's engineer your success story.
            Limited capacity for Q4.
        </p>
        <button 
            onClick={() => navigate('/wizard/step-1')}
            className="px-10 py-5 bg-slate-900 text-white rounded-full font-bold text-sm uppercase tracking-wider hover:bg-slate-800 transition-all hover:-translate-y-1 shadow-2xl hover:shadow-slate-900/20"
        >
            Start Your Project
        </button>
      </div>
    </section>
  );
};

export default ProjectsCTA;
