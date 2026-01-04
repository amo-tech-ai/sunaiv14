import React from 'react';
import { PanelSection } from '../../../components/Layout';
import { ClientDashboardData } from '../types';

interface ClientLeftPanelProps {
    data: ClientDashboardData;
    activeView: string;
    onNavigate: (view: string) => void;
}

const ClientLeftPanel: React.FC<ClientLeftPanelProps> = ({ data, activeView, onNavigate }) => {
    const { context, phases } = data;

    const navItems = [
        { id: 'overview', label: 'Overview', icon: '⚡' },
        { id: 'phases', label: 'Roadmap', icon: '🗺️' },
        { id: 'deliverables', label: 'Deliverables', icon: '📦' },
        { id: 'approvals', label: 'Approvals', icon: '✍️', count: data.stats.openApprovals },
        { id: 'reports', label: 'Reports', icon: '📊' },
    ];

    const currentPhase = phases.find(p => p.id === context.activePhaseId);

    return (
        <div className="space-y-8 flex flex-col h-full animate-fade-in">
            {/* 1. Active Client Card */}
            <div className="bg-slate-900 rounded-xl p-5 text-white shadow-lg relative overflow-hidden shrink-0 group">
                <div className="absolute top-0 right-0 w-24 h-24 bg-white/5 rounded-bl-full -mr-8 -mt-8 transition-transform group-hover:scale-110"></div>
                
                <div className="relative z-10">
                    <div className="flex justify-between items-start mb-3">
                        <span className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider
                            ${context.status === 'On Track' ? 'bg-green-500/20 text-green-400 border border-green-500/30' : 
                              context.status === 'At Risk' ? 'bg-amber-500/20 text-amber-400 border border-amber-500/30' : 
                              'bg-red-500/20 text-red-400 border border-red-500/30'}
                        `}>
                            {context.status}
                        </span>
                        <span className="text-[10px] text-slate-400">Updated {context.lastUpdated}</span>
                    </div>
                    
                    <h2 className="font-serif font-bold text-xl leading-tight mb-1">{context.companyName}</h2>
                    <p className="text-xs text-slate-400 mb-4">{context.industry}</p>

                    <div className="pt-3 border-t border-slate-700/50">
                        <div className="flex justify-between items-center mb-1">
                             <span className="text-[10px] text-slate-400 uppercase tracking-widest">Active Phase</span>
                        </div>
                        <div className="flex items-center space-x-2">
                             <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></div>
                             <span className="text-sm font-bold text-blue-400 truncate">
                                {currentPhase?.name.split(':')[0] || 'CORE'}
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            {/* 2. Navigation */}
            <div className="space-y-1">
                {navItems.map((item) => (
                    <button
                        key={item.id}
                        onClick={() => onNavigate(item.id)}
                        className={`
                            w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-sm font-medium transition-all
                            ${activeView === item.id 
                                ? 'bg-blue-50 text-blue-700 shadow-sm ring-1 ring-blue-100' 
                                : 'text-slate-500 hover:text-slate-900 hover:bg-slate-50'}
                        `}
                    >
                        <div className="flex items-center">
                            <span className="mr-3 text-lg">{item.icon}</span>
                            {item.label}
                        </div>
                        {item.count ? (
                            <span className="bg-amber-100 text-amber-700 px-2 py-0.5 rounded-full text-[10px] font-bold">
                                {item.count}
                            </span>
                        ) : null}
                    </button>
                ))}
            </div>

            {/* 3. Strategic Progress */}
            <div className="flex-1 overflow-y-auto panel-scroll pr-1">
                <PanelSection title="Strategic Roadmap">
                    <div className="space-y-3">
                        {phases.map((phase, idx) => {
                            const isActive = phase.id === context.activePhaseId;
                            const isPast = idx < phases.findIndex(p => p.id === context.activePhaseId);
                            
                            return (
                                <div 
                                    key={phase.id} 
                                    onClick={() => onNavigate('phases')}
                                    className={`
                                        relative p-3 rounded-lg border transition-all cursor-pointer group
                                        ${isActive 
                                            ? 'bg-white border-blue-200 shadow-md ring-1 ring-blue-100' 
                                            : isPast 
                                                ? 'bg-slate-50 border-slate-200 opacity-60' 
                                                : 'bg-white border-slate-100 opacity-50 hover:opacity-80'}
                                    `}
                                >
                                    <div className="flex items-center justify-between mb-1">
                                        <span className={`text-[10px] font-bold uppercase tracking-wider ${isActive ? 'text-blue-700' : 'text-slate-400'}`}>
                                            Phase {idx + 1}
                                        </span>
                                        {isActive && <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>}
                                    </div>
                                    <h4 className={`text-xs font-bold mb-2 truncate ${isActive ? 'text-slate-900' : 'text-slate-500'}`}>
                                        {phase.name.split(':')[1]?.trim() || phase.name}
                                    </h4>
                                    
                                    <div className="w-full bg-slate-100 rounded-full h-1">
                                        <div 
                                            className={`h-1 rounded-full ${isActive ? 'bg-blue-600' : isPast ? 'bg-green-500' : 'bg-transparent'}`} 
                                            style={{ width: `${phase.progress}%` }}
                                        ></div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </PanelSection>

                 {/* 4. Active Tech Stack */}
                 <PanelSection title="Enabled Systems">
                    <div className="flex flex-wrap gap-2">
                        {context.enabledSystems.map(sys => (
                            <span key={sys} className="px-2 py-1 bg-slate-50 border border-slate-200 rounded text-[10px] font-medium text-slate-500 shadow-sm capitalize">
                                {sys.replace('_', ' ')}
                            </span>
                        ))}
                    </div>
                </PanelSection>
            </div>
        </div>
    );
};

export default ClientLeftPanel;