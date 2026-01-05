import React, { useState } from 'react';

const AIDevROI: React.FC = () => {
  const [hours, setHours] = useState(20);
  const [rate, setRate] = useState(50);
  const [employees, setEmployees] = useState(5);

  const weeklySavings = hours * rate * employees;
  const annualSavings = weeklySavings * 52;

  return (
    <section className="py-32 bg-[#050508] relative overflow-hidden">
      {/* Background blobs */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-cyan-900/20 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-white mb-4">Calculate Your Leverage</h2>
          <p className="text-slate-400">Estimate the value of automating cognitive labor in your organization.</p>
        </div>

        <div className="bg-white/5 border border-white/10 rounded-3xl p-8 md:p-12 backdrop-blur-md shadow-2xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            
            {/* Inputs */}
            <div className="space-y-8">
              <div>
                <label className="block text-sm font-bold text-slate-300 mb-4 flex justify-between">
                  <span>Hours Automatable / Week</span>
                  <span className="text-cyan-400">{hours} hrs</span>
                </label>
                <input 
                  type="range" min="1" max="40" value={hours} onChange={(e) => setHours(Number(e.target.value))}
                  className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-cyan-500"
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-slate-300 mb-4 flex justify-between">
                  <span>Avg Hourly Cost</span>
                  <span className="text-cyan-400">${rate}/hr</span>
                </label>
                <input 
                  type="range" min="20" max="200" step="5" value={rate} onChange={(e) => setRate(Number(e.target.value))}
                  className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-cyan-500"
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-slate-300 mb-4 flex justify-between">
                  <span>Employees Affected</span>
                  <span className="text-cyan-400">{employees} people</span>
                </label>
                <input 
                  type="range" min="1" max="50" value={employees} onChange={(e) => setEmployees(Number(e.target.value))}
                  className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-cyan-500"
                />
              </div>
            </div>

            {/* Results */}
            <div className="flex flex-col justify-center items-center bg-black/20 rounded-2xl p-8 border border-white/5">
              <div className="text-sm font-mono text-slate-400 uppercase tracking-widest mb-2">Potential Annual Savings</div>
              <div className="text-5xl md:text-6xl font-mono font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-cyan-200">
                ${annualSavings.toLocaleString()}
              </div>
              <div className="mt-6 text-xs text-slate-500 text-center max-w-xs">
                *Based on conservative estimates. Does not include opportunity cost or revenue gains.
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default AIDevROI;