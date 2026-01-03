import React from 'react';
import { ClientDashboardData } from '../types';

interface ClientGanttProps {
    phases: ClientDashboardData['phases'];
}

const ClientGantt: React.FC<ClientGanttProps> = ({ phases }) => {
    return (
        <div className="animate-fade-in space-y-8 pb-10">
            <div>
                <h1 className="text-3xl font-serif font-bold text-slate-900 mb-2">Delivery Roadmap</h1>
                <p className="text-slate-500">A phased approach to building your intelligent infrastructure.</p>
            </div>

            <div className="space-y-6">
                {phases.map((phase, idx) => {
                    const isActive = phase.status === 'active';
                    const isCompleted = phase.status === 'completed';
                    const isLocked = phase.status === 'pending' || phase.status === 'blocked';

                    return (
                        <div 
                            key={phase.id} 
                            className={`
                                rounded-xl border transition-all duration-300 overflow-hidden
                                ${isActive 
                                    ? 'bg-white border-blue-200 shadow-lg ring-1 ring-blue-500/10' 
                                    : isCompleted
                                        ? 'bg-slate-50 border-slate-200 opacity-80'
                                        : 'bg-slate-50 border-slate-200 opacity-60'}
                            `}
                        >
                            {/* Phase Header */}
                            <div className={`
                                px-6 py-5 flex flex-col md:flex-row md:items-center justify-between
                                ${isActive ? 'bg-blue-50/30' : ''}
                            `}>
                                <div className="flex items-start space-x-4">
                                    <div className={`
                                        w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm border-2 shrink-0
                                        ${isActive 
                                            ? 'bg-blue-600 text-white border-blue-600 shadow-md' 
                                            : isCompleted
                                                ? 'bg-green-500 text-white border-green-500'
                                                : 'bg-white text-slate-400 border-slate-300'}
                                    `}>
                                        {isCompleted ? '✓' : idx + 1}
                                    </div>
                                    <div>
                                        <div className="flex items-center space-x-3 mb-1">
                                            <h3 className={`text-lg font-bold ${isActive ? 'text-slate-900' : 'text-slate-600'}`}>
                                                {phase.name}
                                            </h3>
                                            {isActive && (
                                                <span className="bg-blue-100 text-blue-700 text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wide">
                                                    In Progress
                                                </span>
                                            )}
                                            {isLocked && (
                                                <span className="bg-slate-100 text-slate-500 text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wide flex items-center">
                                                    <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
                                                    Locked
                                                </span>
                                            )}
                                        </div>
                                        <p className="text-sm text-slate-500">
                                            {phase.id === 'phase-core' && "Establishing the technical foundation, branding, and measurement systems."}
                                            {phase.id === 'phase-advanced' && "Scaling efficiency through automated workflows and AI integration."}
                                            {phase.id === 'phase-scaling' && "Optimizing for maximum growth and market expansion."}
                                        </p>
                                    </div>
                                </div>

                                <div className="mt-4 md:mt-0 text-right">
                                    <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Timeline</div>
                                    <div className={`font-mono text-sm ${isActive ? 'text-blue-700 font-bold' : 'text-slate-600'}`}>
                                        {phase.startDate} - {phase.endDate}
                                    </div>
                                </div>
                            </div>

                            {/* Detailed Content (Only if Active or Completed) */}
                            {!isLocked && (
                                <div className="px-6 py-6 border-t border-slate-100">
                                    <div className="mb-6">
                                        <div className="flex justify-between text-xs font-semibold text-slate-500 mb-2">
                                            <span>Completion Status</span>
                                            <span>{phase.progress}%</span>
                                        </div>
                                        <div className="w-full bg-slate-100 rounded-full h-2">
                                            <div 
                                                className={`h-2 rounded-full transition-all duration-1000 ${isActive ? 'bg-blue-600' : 'bg-green-500'}`} 
                                                style={{ width: `${phase.progress}%` }}
                                            ></div>
                                        </div>
                                    </div>

                                    <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">Phase Deliverables</h4>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        {phase.milestones.map((ms, i) => (
                                            <div key={i} className="flex items-start p-3 rounded-lg hover:bg-slate-50 transition-colors">
                                                <div className={`
                                                    w-5 h-5 rounded-full flex items-center justify-center text-[10px] mr-3 mt-0.5 border
                                                    ${phase.progress > ((i+1) * 20) 
                                                        ? 'bg-green-100 text-green-600 border-green-200' 
                                                        : 'bg-white text-slate-300 border-slate-200'}
                                                `}>
                                                    {phase.progress > ((i+1) * 20) ? '✓' : i + 1}
                                                </div>
                                                <span className={`text-sm ${phase.progress > ((i+1) * 20) ? 'text-slate-700 line-through decoration-slate-300' : 'text-slate-700'}`}>
                                                    {ms}
                                                </span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {/* Locked State Teaser */}
                            {isLocked && (
                                <div className="px-6 py-4 bg-slate-50/50 border-t border-slate-100 flex items-center justify-center">
                                    <span className="text-xs text-slate-400 font-medium italic">
                                        Completes after {phases[idx-1]?.name} is delivered.
                                    </span>
                                </div>
                            )}
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default ClientGantt;