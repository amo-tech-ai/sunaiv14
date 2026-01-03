import React from 'react';
import { PanelSection } from '../../../components/Layout';
import { WizardState } from '../../../types';

interface DashboardLeftPanelProps {
    wizardState: WizardState;
    activeSelectionId?: string;
    currentView: string;
    onNavigate: (view: any) => void;
    onSelect: (sysId: string) => void;
    onRestart: () => void;
}

const DashboardLeftPanel: React.FC<DashboardLeftPanelProps> = ({ 
    wizardState, activeSelectionId, currentView, onNavigate, onSelect, onRestart 
}) => {
    const score = wizardState.readinessAnalysis?.overallScore || 0;
    const currentPhase = wizardState.strategy?.phases[0];
    const totalPhases = wizardState.strategy?.phases.length || 3;
    
    return (
        <div className="space-y-8 flex flex-col h-full">
            {/* Active Client Card */}
            <div className="bg-slate-900 rounded-xl p-4 text-white shadow-lg relative overflow-hidden group shrink-0">
                <div className="absolute top-0 right-0 w-20 h-20 bg-white/5 rounded-bl-full -mr-6 -mt-6 transition-transform group-hover:scale-110"></div>
                
                <div className="relative z-10">
                    <div className="flex justify-between items-start mb-2">
                        <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Active Client</div>
                        <div className={`px-2 py-0.5 rounded text-[10px] font-bold ${score > 70 ? 'bg-green-500 text-white' : 'bg-amber-500 text-white'}`}>
                            {score}/100
                        </div>
                    </div>
                    <div className="font-serif font-bold text-lg leading-tight mb-1 truncate">
                        {wizardState.context.companyName || "New Client"}
                    </div>
                    <div className="text-xs text-slate-400 truncate">
                        {wizardState.context.industry}
                    </div>
                </div>
            </div>

            {/* Navigation Menu */}
            <div className="space-y-1">
                {[
                    { id: 'briefing', label: 'Morning Briefing', icon: '☀️' },
                    { id: 'strategy', label: 'Strategy Roadmap', icon: '🗺️' },
                    { id: 'workflows', label: 'Workflows', icon: '⚡' },
                    { id: 'reports', label: 'Reports', icon: '📊' },
                    { id: 'settings', label: 'Settings', icon: '⚙️' }
                ].map((item) => (
                    <button
                        key={item.id}
                        onClick={() => onNavigate(item.id)}
                        className={`
                            w-full flex items-center px-3 py-2.5 rounded-lg text-sm font-medium transition-all group
                            ${currentView === item.id 
                                ? 'bg-blue-50 text-blue-700 shadow-sm ring-1 ring-blue-100' 
                                : 'text-slate-500 hover:text-slate-900 hover:bg-slate-50'}
                        `}
                    >
                        <span className={`mr-3 text-lg transition-transform ${currentView === item.id ? 'scale-110' : 'group-hover:scale-110'}`}>{item.icon}</span>
                        {item.label}
                    </button>
                ))}
            </div>

            {/* Scrollable Content Area */}
            <div className="flex-1 overflow-y-auto panel-scroll pr-1 space-y-6">
                
                {/* Strategy Progress Tracker */}
                {currentPhase && (
                    <PanelSection title="Strategy Execution">
                        <div className="bg-white rounded-lg border border-slate-200 p-4 shadow-sm relative overflow-hidden group hover:border-blue-200 transition-colors cursor-pointer" onClick={() => onNavigate('strategy')}>
                            <div className="flex justify-between items-baseline mb-2 relative z-10">
                                <span className="text-xs font-bold text-slate-800 uppercase tracking-tight truncate mr-2">
                                    {currentPhase.phaseName.split(':')[0]}
                                </span>
                                <span className="text-[10px] font-bold text-blue-600 bg-blue-50 px-1.5 py-0.5 rounded border border-blue-100">
                                    PHASE 1
                                </span>
                            </div>
                            <p className="text-xs text-slate-500 mb-3 relative z-10 line-clamp-2 leading-relaxed">
                                {currentPhase.objective}
                            </p>
                            
                            <div className="w-full bg-slate-100 rounded-full h-1.5 mb-1.5 overflow-hidden">
                                <div className="bg-blue-600 h-1.5 rounded-full w-[15%] animate-pulse"></div>
                            </div>
                            <div className="flex justify-between text-[10px] text-slate-400 relative z-10 font-medium">
                                <span>1 of {totalPhases} Phases</span>
                                <span>15%</span>
                            </div>
                        </div>
                    </PanelSection>
                )}

                {/* Enabled Systems (Clickable) */}
                <PanelSection title="Enabled Systems">
                     <div className="flex flex-wrap gap-2">
                        {wizardState.selectedSystems.length > 0 ? (
                            wizardState.selectedSystems.map(sysId => (
                                <button 
                                    key={sysId} 
                                    onClick={() => onSelect(sysId)}
                                    className={`
                                        px-2.5 py-1.5 text-[11px] font-medium rounded-lg border transition-all text-left mb-1 flex items-center
                                        ${activeSelectionId === sysId 
                                            ? 'bg-slate-800 text-white border-slate-800 shadow-md transform scale-105' 
                                            : 'bg-white text-slate-600 border-slate-200 hover:border-slate-300 hover:bg-slate-50'}
                                    `}
                                >
                                    <span className="w-1.5 h-1.5 rounded-full bg-green-500 mr-2"></span>
                                    {sysId.replace('_', ' ').replace(/\b\w/g, l => l.toUpperCase())}
                                </button>
                            ))
                        ) : (
                            <div className="text-xs text-slate-400 italic px-2">No systems active</div>
                        )}
                    </div>
                </PanelSection>
            </div>
            
            <div className="pt-4 border-t border-slate-100 shrink-0">
                <button 
                    onClick={onRestart} 
                    className="flex items-center text-xs font-medium text-slate-400 hover:text-red-600 transition-colors w-full px-2 group"
                >
                    <div className="w-6 h-6 rounded bg-slate-50 flex items-center justify-center mr-2 group-hover:bg-red-50 transition-colors">
                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>
                    </div>
                    Reset Dashboard
                </button>
            </div>
        </div>
    );
};

export default DashboardLeftPanel;