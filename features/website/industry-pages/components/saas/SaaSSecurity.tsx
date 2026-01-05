
import React from 'react';

const SaaSSecurity: React.FC = () => {
  return (
    <section className="py-20 bg-[#020203] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-12">
        <div className="text-center md:text-left">
            <h3 className="text-white font-bold text-xl mb-2">Enterprise-Grade Security</h3>
            <p className="text-slate-500 text-sm">Your data is encrypted, isolated, and never used to train public models.</p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-8 opacity-50 grayscale">
            {['SOC 2 Type II', 'GDPR Compliant', 'HIPAA Ready', 'ISO 27001'].map((badge, i) => (
                <div key={i} className="flex items-center gap-2 px-4 py-2 border border-white/20 rounded-full text-white text-xs font-bold tracking-wider">
                    <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                    {badge}
                </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default SaaSSecurity;
