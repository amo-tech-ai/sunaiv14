
import React from 'react';

const ProcessMatrix: React.FC = () => {
  return (
    <section className="py-32 bg-white text-slate-900">
      <div className="max-w-5xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
            <div>
                <h2 className="font-serif text-4xl font-bold mb-4">Your Involvement</h2>
                <p className="text-slate-500 max-w-xl">
                    We know you're busy. We've optimized our process to require minimum viable input for maximum output.
                </p>
            </div>
            <div className="text-right">
                <div className="text-sm font-bold text-slate-400 uppercase tracking-widest">Total Time Required</div>
                <div className="text-3xl font-serif font-bold text-emerald-600">~12 Hours</div>
                <div className="text-xs text-slate-400">Over 8 weeks</div>
            </div>
        </div>

        <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
                <thead>
                    <tr className="border-b-2 border-slate-100">
                        <th className="py-4 pl-4 font-bold text-slate-900 w-1/3">Phase</th>
                        <th className="py-4 font-bold text-slate-900 w-1/6">Your Time</th>
                        <th className="py-4 pr-4 font-bold text-slate-900">Your Activity</th>
                    </tr>
                </thead>
                <tbody className="text-sm">
                    {[
                        { phase: "Discovery", time: "4 Hours", activity: "Deep dive workshop to download your brain." },
                        { phase: "Architecture", time: "1 Hour", activity: "Approve the blueprint and tech stack." },
                        { phase: "Development", time: "0 Hours", activity: "Sit back. We post weekly Loom updates." },
                        { phase: "Review", time: "3 Hours", activity: "UAT (User Acceptance Testing) of the beta." },
                        { phase: "Launch", time: "2 Hours", activity: "Training session for your team." },
                        { phase: "Handover", time: "2 Hours", activity: "IP transfer and admin key exchange." },
                    ].map((row, i) => (
                        <tr key={i} className="border-b border-slate-50 hover:bg-slate-50 transition-colors">
                            <td className="py-6 pl-4 font-medium text-slate-700">{row.phase}</td>
                            <td className="py-6 font-mono text-emerald-600 font-bold">{row.time}</td>
                            <td className="py-6 pr-4 text-slate-500">{row.activity}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
      </div>
    </section>
  );
};

export default ProcessMatrix;
