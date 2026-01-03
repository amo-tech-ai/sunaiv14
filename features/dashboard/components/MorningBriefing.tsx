import React from 'react';

interface MorningBriefingProps {
    tasks: string[];
    activeSelectionId?: string;
    onSelect: (task: string, index: number) => void;
    onRunWorkflow: (task: string) => void;
    executingTask: string | null;
    userName?: string;
}

const MorningBriefing: React.FC<MorningBriefingProps> = ({ tasks, activeSelectionId, onSelect, onRunWorkflow, executingTask, userName }) => {
    const firstName = userName ? userName.split(' ')[0] : 'Founder';
    
    return (
        <div className="mb-10 animate-fade-in">
            <div className="mb-8">
                <h1 className="text-3xl font-serif font-bold text-slate-900 leading-tight">
                    Good morning, {firstName}.
                </h1>
                <div className="flex items-center mt-2 text-slate-500">
                    <span className="bg-green-100 text-green-700 text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wide mr-3 border border-green-200">
                        Live Briefing
                    </span>
                    <p>Here are your prioritized actions for today.</p>
                </div>
            </div>
            
            {tasks.length > 0 ? (
                <div className="grid grid-cols-1 gap-4">
                    {tasks.map((task, idx) => {
                        const id = `task-${idx+1}`;
                        const isActive = activeSelectionId === id;
                        
                        return (
                            <div 
                                key={idx} 
                                onClick={() => onSelect(task, idx)}
                                className={`
                                    relative p-5 rounded-xl border transition-all cursor-pointer group
                                    ${isActive 
                                        ? 'bg-white border-blue-500 shadow-md ring-1 ring-blue-500/20' 
                                        : 'bg-white border-slate-200 hover:border-blue-300 hover:shadow-sm'}
                                `}
                            >
                                <div className="flex items-center justify-between">
                                    <div className="flex items-start space-x-4">
                                        <div className="flex-shrink-0 mt-1">
                                            <div className={`
                                                w-6 h-6 rounded-full flex items-center justify-center font-bold text-xs border transition-colors
                                                ${isActive ? 'bg-blue-600 text-white border-blue-600' : 'bg-slate-50 text-slate-500 border-slate-200 group-hover:bg-blue-50 group-hover:text-blue-600'}
                                            `}>
                                                {idx + 1}
                                            </div>
                                        </div>
                                        <div>
                                            <h3 className={`font-semibold text-sm mb-1 leading-snug ${isActive ? 'text-slate-900' : 'text-slate-700'}`}>{task}</h3>
                                            <p className="text-xs text-slate-400 flex items-center">
                                                <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                                                Suggested by {idx === 0 ? 'Orchestrator' : 'Planner'} Agent
                                            </p>
                                        </div>
                                    </div>
                                    
                                    <button 
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            onRunWorkflow(task);
                                        }}
                                        disabled={!!executingTask}
                                        className={`
                                            flex items-center space-x-2 px-3 py-1.5 rounded-lg text-[10px] font-bold uppercase tracking-wider transition-all ml-4 shrink-0
                                            ${executingTask 
                                                ? 'bg-slate-100 text-slate-400 cursor-not-allowed' 
                                                : 'bg-slate-900 text-white hover:bg-slate-800 shadow-md hover:shadow-lg transform hover:-translate-y-0.5'}
                                        `}
                                    >
                                        <span>{executingTask === task ? 'Running...' : 'Run Agent'}</span>
                                        {!executingTask && <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" /></svg>}
                                    </button>
                                </div>
                                {isActive && (
                                    <div className="absolute left-0 top-0 bottom-0 w-1 bg-blue-500 rounded-l-xl"></div>
                                )}
                            </div>
                        );
                    })}
                </div>
            ) : (
                <div className="p-12 bg-slate-50 rounded-xl border border-dashed border-slate-200 text-center">
                    <div className="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4 text-slate-300">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" /></svg>
                    </div>
                    <h3 className="text-slate-900 font-medium mb-1">No pending tasks</h3>
                    <p className="text-slate-500 text-sm">Complete the Strategy Wizard to generate your morning briefing.</p>
                </div>
            )}
        </div>
    );
};

export default MorningBriefing;