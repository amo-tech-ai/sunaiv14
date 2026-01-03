import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ThreePanelLayout, PanelSection, IntelligenceCard } from '../../components/Layout';
import { WizardStep } from '../../types';
import { useAppState } from '../../context/AppContext';

const WizardStep5: React.FC = () => {
    const { wizardState, runStrategyGeneration, strategyLoading, setWizardState } = useAppState();
    const navigate = useNavigate();

    useEffect(() => {
        if (!wizardState.strategy && !strategyLoading) {
            runStrategyGeneration();
        }
    }, []);

    const strategy = wizardState.strategy;

    const LeftPanel = (
        <>
             <PanelSection title="Final Context">
                <div className="space-y-4 text-sm">
                    <div className="flex justify-between border-b border-slate-100 pb-2">
                        <span className="text-slate-500">Industry</span>
                        <span className="font-medium text-slate-800">{wizardState.context.industry}</span>
                    </div>
                    <div className="flex justify-between border-b border-slate-100 pb-2">
                        <span className="text-slate-500">Readiness</span>
                        <span className="font-medium text-slate-800">{wizardState.readinessAnalysis?.overallScore || 0}/100</span>
                    </div>
                    <div className="flex flex-col border-b border-slate-100 pb-2">
                        <span className="text-slate-500 mb-1">Systems</span>
                        <div className="flex flex-wrap gap-1">
                            {wizardState.selectedSystems.map(s => (
                                <span key={s} className="text-xs px-2 py-0.5 bg-slate-100 rounded text-slate-600 capitalize">{s.replace('_', ' ')}</span>
                            ))}
                        </div>
                    </div>
                </div>
            </PanelSection>

            <PanelSection title="Progress">
                <div className="space-y-4">
                {[1, 2, 3, 4, 5].map(step => (
                    <div key={step} className="flex items-center group">
                    <div className={`
                        w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-bold border transition-colors
                        ${step === 5 ? 'bg-slate-900 text-white border-slate-900' : 
                          step < 5 ? 'bg-green-500 text-white border-green-500' : 'bg-white text-slate-400 border-slate-200'}
                    `}>
                        {step < 5 ? '✓' : step}
                    </div>
                    <span className={`ml-3 text-sm font-medium ${step === 5 ? 'text-slate-900' : 'text-slate-400'}`}>
                        {step === 1 ? 'Business Context' : step === 2 ? 'Industry Deep Dive' : step === 3 ? 'System Selection' : step === 4 ? 'Readiness' : 'Strategy'}
                    </span>
                    </div>
                ))}
                </div>
            </PanelSection>
        </>
    );

    const CenterPanel = (
        <div className="space-y-8 animate-fade-in pb-20">
            <div>
                <h1 className="text-3xl font-serif text-slate-900 mb-2">Strategic Execution Plan</h1>
                <p className="text-slate-500 text-lg">Sun AI Agency has synthesized your inputs into a phased deployment roadmap.</p>
            </div>

            {strategyLoading || !strategy ? (
                <div className="flex flex-col items-center justify-center py-20 space-y-6">
                    <div className="w-24 h-24 border-4 border-slate-100 border-t-blue-500 rounded-full animate-spin"></div>
                    <p className="text-slate-400 animate-pulse">Generative AI is building your roadmap...</p>
                </div>
            ) : (
                <div className="relative border-l-2 border-slate-200 ml-4 space-y-12">
                    {strategy.phases.map((phase, idx) => (
                        <div key={idx} className="relative pl-8 group">
                            {/* Timeline Dot */}
                            <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-white border-2 border-blue-500 group-hover:scale-125 transition-transform duration-300"></div>
                            
                            <div className="flex flex-col md:flex-row md:items-baseline justify-between mb-2">
                                <h3 className="text-xl font-bold text-slate-900">{phase.phaseName}</h3>
                                <span className="text-xs font-bold text-blue-600 bg-blue-50 px-2 py-1 rounded uppercase tracking-wider">{phase.timeline}</span>
                            </div>
                            
                            <p className="text-slate-600 italic mb-4 border-l-2 border-blue-100 pl-3">{phase.objective}</p>
                            
                            <ul className="space-y-3">
                                {phase.steps.map((step, sIdx) => (
                                    <li key={sIdx} className="flex items-start bg-white p-3 rounded-lg border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                                        <svg className="w-5 h-5 text-green-500 mr-3 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                        <span className="text-slate-700">{step}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            )}

            <div className="pt-8 flex justify-end gap-3">
                <button 
                    onClick={() => {
                        setWizardState(s => ({...s, currentStep: WizardStep.ReadinessScore}));
                        navigate('/wizard/step-4');
                    }}
                    className="px-6 py-3 rounded-lg border border-slate-200 text-slate-600 hover:bg-slate-50 transition-all font-medium"
                >
                    Back
                </button>
                <button 
                    disabled={!strategy}
                    onClick={() => {
                        navigate('/dashboard');
                    }}
                    className={`
                        px-8 py-3 rounded-lg transition-all font-medium flex items-center shadow-lg
                        ${strategy
                            ? 'bg-blue-600 text-white hover:bg-blue-700 shadow-blue-500/20' 
                            : 'bg-slate-200 text-slate-400 cursor-not-allowed shadow-none'}
                    `}
                >
                    Initialize Command Center
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                </button>
            </div>
        </div>
    );

    const RightPanel = (
        <div className="space-y-2">
            <IntelligenceCard title="Planner Agent" loading={strategyLoading}>
                {strategyLoading 
                    ? "Reviewing systems and readiness gaps to sequence your roadmap..."
                    : "I've structured this to tackle your critical gaps (Phase 1) before scaling automation (Phase 2)."}
            </IntelligenceCard>

            {strategy && (
                <div className="animate-fade-in">
                    <IntelligenceCard title="Risk Assessment" type="alert">
                        <ul className="space-y-2 list-disc list-inside text-sm">
                            {strategy.risks.map((risk, i) => (
                                <li key={i}>{risk}</li>
                            ))}
                        </ul>
                    </IntelligenceCard>
                    
                    <IntelligenceCard title="Agent Allocation" type="info">
                         <div className="space-y-3">
                            {strategy.agentAllocation.map((alloc, i) => (
                                <div key={i} className="flex flex-col border-b border-blue-100 last:border-0 pb-2 last:pb-0">
                                    <span className="text-xs font-bold text-blue-800 uppercase">{alloc.agentName} Agent</span>
                                    <span className="text-xs text-slate-600">{alloc.task}</span>
                                </div>
                            ))}
                        </div>
                    </IntelligenceCard>
                </div>
            )}
        </div>
    );

    return <ThreePanelLayout leftPanel={LeftPanel} centerPanel={CenterPanel} rightPanel={RightPanel} />;
};

export default WizardStep5;