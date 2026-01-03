import React from 'react';

interface PhaseLogProps {
    phaseName: string;
    steps: string[];
    activeSelectionId?: string;
    onSelect: (step: string, index: number) => void;
}

const PhaseLog: React.FC<PhaseLogProps> = ({ phaseName, steps, activeSelectionId, onSelect }) => {
    return (
        <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
            <div className="bg-slate-50 px-6 py-4 border-b border-slate-100 flex justify-between items-center">
                <h3 className="text-sm font-bold text-slate-800 uppercase tracking-wide">Phase Log: {phaseName}</h3>
                <span className="text-[10px] font-medium text-slate-500 bg-white border border-slate-200 px-2 py-0.5 rounded">Strategy</span>
            </div>
            <ul className="divide-y divide-slate-50">
                {steps.map((step, i) => {
                    const id = `phase-step-${i}`;
                    const isActive = activeSelectionId === id;
                    
                    return (
                        <li 
                            key={i} 
                            onClick={() => onSelect(step, i)}
                            className={`
                                flex items-start px-6 py-4 cursor-pointer transition-colors
                                ${isActive ? 'bg-blue-50/50' : 'hover:bg-slate-50'}
                            `}
                        >
                            <div className="mr-3 pt-0.5">
                                <div className={`w-4 h-4 rounded border flex items-center justify-center ${isActive ? 'border-blue-500 bg-blue-500' : 'border-slate-300'}`}>
                                    {isActive && <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>}
                                </div>
                            </div>
                            <span className={`text-sm leading-relaxed ${isActive ? 'text-slate-900 font-medium' : 'text-slate-600'}`}>{step}</span>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};

export default PhaseLog;