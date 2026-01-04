import React from 'react';
import { ClientPhase } from '../types';

interface ClientPhaseCardProps {
    phase: ClientPhase;
    index: number;
    isActive: boolean;
    isCompleted: boolean;
    isLocked: boolean;
}

const ClientPhaseCard: React.FC<ClientPhaseCardProps> = ({ phase, index, isActive, isCompleted, isLocked }) => {
    return (
        <div 
            className={`
                group relative rounded-xl border transition-all duration-500 overflow-hidden
                ${isActive 
                    ? 'bg-white border-blue-500/30 shadow-xl shadow-blue-500/5 ring-1 ring-blue-500/20' 
                    : isCompleted
                        ? 'bg-slate-50 border-slate-200 opacity-75 grayscale-[0.5] hover:grayscale-0 hover:opacity-100'
                        : 'bg-white border-slate-100'}
            `}
        >
            {/* Header Section */}
            <div className={`
                px-6 py-5 flex flex-col md:flex-row md:items-center justify-between
                ${isActive ? 'bg-gradient-to-r from-blue-50/50 to-transparent' : ''}
            `}>
                <div className="flex items-start space-x-4">
                    {/* Status Icon/Number */}
                    <div className={`
                        w-12 h-12 rounded-xl flex items-center justify-center font-bold text-lg border-2 shrink-0 transition-transform duration-500
                        ${isActive 
                            ? 'bg-blue-600 text-white border-blue-600 shadow-lg scale-110' 
                            : isCompleted
                                ? 'bg-green-500 text-white border-green-500'
                                : 'bg-slate-100 text-slate-400 border-slate-200'}
                    `}>
                        {isCompleted ? (
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                        ) : (
                            <span>{index + 1}</span>
                        )}
                    </div>

                    <div>
                        <div className="flex items-center gap-3 mb-1">
                            <h3 className={`text-lg font-bold tracking-tight ${isActive ? 'text-slate-900' : 'text-slate-600'}`}>
                                {phase.name}
                            </h3>
                            {isActive && (
                                <span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold bg-blue-100 text-blue-700 uppercase tracking-wide">
                                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mr-1.5 animate-pulse"></span>
                                    Active
                                </span>
                            )}
                            {isLocked && (
                                <span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold bg-slate-100 text-slate-500 uppercase tracking-wide border border-slate-200">
                                    <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
                                    Locked
                                </span>
                            )}
                        </div>
                        <p className="text-sm text-slate-500 max-w-xl leading-relaxed">
                            {phase.id === 'phase-core' && "We are establishing the single source of truth. Analytics, branding, and baseline metrics must be accurate before we automate."}
                            {phase.id === 'phase-advanced' && "Unlocking velocity. Once the foundation is solid, we deploy agents to handle lead routing, content, and operations."}
                            {phase.id === 'phase-scaling' && "Optimizing for market dominance. Predictive models and high-volume experimentation."}
                        </p>
                    </div>
                </div>

                <div className="mt-4 md:mt-0 text-right min-w-[120px]">
                    <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Timeline</div>
                    <div className={`font-mono text-sm ${isActive ? 'text-blue-700 font-bold' : 'text-slate-600'}`}>
                        {phase.startDate}
                    </div>
                    <div className="text-xs text-slate-400 mt-0.5">to {phase.endDate}</div>
                </div>
            </div>

            {/* Active/Completed Content */}
            {!isLocked && (
                <div className="px-6 py-6 border-t border-slate-100 bg-white">
                    {/* Progress Bar */}
                    <div className="mb-8">
                        <div className="flex justify-between text-xs font-semibold text-slate-500 mb-2">
                            <span>Phase Completion</span>
                            <span>{phase.progress}%</span>
                        </div>
                        <div className="w-full bg-slate-100 rounded-full h-2.5 overflow-hidden">
                            <div 
                                className={`h-full rounded-full transition-all duration-1000 ease-out relative ${isActive ? 'bg-blue-600' : 'bg-green-500'}`} 
                                style={{ width: `${phase.progress}%` }}
                            >
                                <div className="absolute inset-0 bg-white/20 w-full h-full animate-[shimmer_2s_infinite]"></div>
                            </div>
                        </div>
                    </div>

                    {/* Milestones Grid */}
                    <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-4">
                        {isCompleted ? 'Completed Deliverables' : 'Current Objectives'}
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {phase.milestones.map((ms, i) => {
                            const isDone = phase.progress > ((i+1) * 20);
                            return (
                                <div key={i} className="flex items-start group/item">
                                    <div className={`
                                        w-5 h-5 rounded-full flex items-center justify-center text-[10px] mr-3 mt-0.5 border transition-colors
                                        ${isDone 
                                            ? 'bg-green-100 text-green-600 border-green-200' 
                                            : 'bg-slate-50 text-slate-300 border-slate-200'}
                                    `}>
                                        {isDone ? '✓' : i + 1}
                                    </div>
                                    <span className={`text-sm transition-colors ${isDone ? 'text-slate-500 line-through' : 'text-slate-700 font-medium'}`}>
                                        {ms}
                                    </span>
                                </div>
                            );
                        })}
                    </div>
                </div>
            )}

            {/* Locked State Visuals */}
            {isLocked && (
                <div className="relative border-t border-slate-100 bg-slate-50/50">
                    {/* Blurred Content Teaser */}
                    <div className="px-6 py-6 opacity-30 blur-[2px] select-none pointer-events-none grayscale">
                         <div className="mb-6">
                            <div className="w-full bg-slate-200 rounded-full h-2.5"></div>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            {[1, 2, 3, 4].map(i => (
                                <div key={i} className="flex items-center">
                                    <div className="w-5 h-5 rounded-full bg-slate-200 mr-3"></div>
                                    <div className="h-4 bg-slate-200 rounded w-3/4"></div>
                                </div>
                            ))}
                        </div>
                    </div>
                    
                    {/* Lock Overlay */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center z-10 bg-white/10">
                        <div className="px-5 py-3 bg-white rounded-full shadow-lg border border-slate-200 flex items-center space-x-3 transform group-hover:scale-105 transition-transform duration-300 cursor-not-allowed">
                            <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-400">
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
                            </div>
                            <div className="flex flex-col">
                                <span className="text-xs font-bold text-slate-900 uppercase tracking-wide">Locked</span>
                                <span className="text-[10px] text-slate-500">Completes after {index === 1 ? 'Foundation' : 'Automation'} Phase</span>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ClientPhaseCard;