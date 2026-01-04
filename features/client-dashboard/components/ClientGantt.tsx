import React from 'react';
import { ClientDashboardData } from '../types';
import ClientPhaseCard from './ClientPhaseCard';

interface ClientGanttProps {
    phases: ClientDashboardData['phases'];
}

const ClientGantt: React.FC<ClientGanttProps> = ({ phases }) => {
    return (
        <div className="animate-fade-in space-y-8 pb-20">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
                <div>
                    <h1 className="text-3xl font-serif font-bold text-slate-900 mb-2">Delivery Roadmap</h1>
                    <p className="text-slate-500 max-w-2xl">
                        A systematic, outcome-driven approach to building your intelligent infrastructure. 
                        We strictly separate <strong className="text-slate-700">Foundation</strong> from <strong className="text-slate-700">Automation</strong> to ensure stability.
                    </p>
                </div>
                <div className="text-right hidden md:block">
                    <div className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Total Progress</div>
                    <div className="text-2xl font-bold text-blue-600">25%</div>
                </div>
            </div>

            {/* Phase Stack */}
            <div className="space-y-6 relative">
                {/* Visual Guide Line */}
                <div className="absolute left-[29px] top-8 bottom-8 w-0.5 bg-slate-200 hidden md:block -z-10"></div>

                {phases.map((phase, idx) => (
                    <ClientPhaseCard 
                        key={phase.id}
                        phase={phase}
                        index={idx}
                        isActive={phase.status === 'active'}
                        isCompleted={phase.status === 'completed'}
                        isLocked={phase.status === 'pending' || phase.status === 'blocked'}
                    />
                ))}
            </div>

            {/* Footer Note */}
            <div className="flex items-center justify-center pt-8 text-slate-400 text-xs">
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                <span>Phases are sequential to prevent technical debt. Automation requires validated data.</span>
            </div>
        </div>
    );
};

export default ClientGantt;