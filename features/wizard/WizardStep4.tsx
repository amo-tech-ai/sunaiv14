import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ThreePanelLayout, PanelSection, IntelligenceCard } from '../../components/Layout';
import { WizardStep } from '../../types';
import { useAppState } from '../../context/AppContext';

const WizardStep4: React.FC = () => {
    const { wizardState, setWizardState, runReadinessAnalysis, readinessLoading } = useAppState();
    const navigate = useNavigate();

    useEffect(() => {
        if (!wizardState.readinessAnalysis && !readinessLoading) {
            runReadinessAnalysis();
        }
    }, []);

    const analysis = wizardState.readinessAnalysis;

    const LeftPanel = (
        <>
             <PanelSection title="Selections">
                <div className="flex flex-wrap gap-2 mb-6">
                    {wizardState.selectedSystems.map(sysId => (
                        <span key={sysId} className="px-2 py-1 bg-slate-100 text-xs rounded border border-slate-200 text-slate-600 capitalize">
                            {sysId.replace('_', ' ')}
                        </span>
                    ))}
                </div>
            </PanelSection>

            <PanelSection title="Progress">
                <div className="space-y-4">
                {[1, 2, 3, 4, 5].map(step => (
                    <div key={step} className="flex items-center group">
                    <div className={`
                        w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-bold border transition-colors
                        ${step === 4 ? 'bg-slate-900 text-white border-slate-900' : 
                          step < 4 ? 'bg-green-500 text-white border-green-500' : 'bg-white text-slate-400 border-slate-200'}
                    `}>
                        {step < 4 ? '✓' : step}
                    </div>
                    <span className={`ml-3 text-sm font-medium ${step === 4 ? 'text-slate-900' : 'text-slate-400'}`}>
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
                <h1 className="text-3xl font-serif text-slate-900 mb-2">AI Readiness Assessment</h1>
                <p className="text-slate-500 text-lg">Sun AI Agency has analyzed your digital footprint and operational maturity.</p>
            </div>

            {readinessLoading || !analysis ? (
                <div className="flex flex-col items-center justify-center py-20 space-y-6">
                    <div className="w-24 h-24 border-4 border-slate-100 border-t-blue-500 rounded-full animate-spin"></div>
                    <p className="text-slate-400 animate-pulse">Calculating score...</p>
                </div>
            ) : (
                <div className="space-y-12">
                    {/* Score Section */}
                    <div className="flex items-center justify-center py-8">
                         <div className="relative w-48 h-48 flex items-center justify-center">
                            <svg className="w-full h-full transform -rotate-90">
                                <circle cx="96" cy="96" r="88" className="text-slate-100" strokeWidth="12" stroke="currentColor" fill="none" />
                                <circle 
                                    cx="96" cy="96" r="88" 
                                    className={`${analysis.overallScore > 70 ? 'text-green-500' : analysis.overallScore > 40 ? 'text-blue-500' : 'text-amber-500'} transition-all duration-1000 ease-out`} 
                                    strokeWidth="12" 
                                    stroke="currentColor" 
                                    fill="none" 
                                    strokeDasharray={2 * Math.PI * 88} 
                                    strokeDashoffset={2 * Math.PI * 88 * (1 - analysis.overallScore / 100)}
                                    strokeLinecap="round"
                                />
                            </svg>
                            <div className="absolute flex flex-col items-center">
                                <span className="text-5xl font-bold text-slate-900">{analysis.overallScore}</span>
                                <span className="text-xs uppercase tracking-widest text-slate-500 mt-2">Overall Score</span>
                            </div>
                        </div>
                    </div>

                    {/* Breakdown Section */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {analysis.categoryBreakdown.map((cat, i) => (
                            <div key={i} className="bg-white p-5 rounded-xl border border-slate-100 shadow-sm">
                                <div className="flex justify-between items-end mb-3">
                                    <span className="text-sm font-medium text-slate-700">{cat.category}</span>
                                    <span className="text-xl font-bold text-slate-900">{cat.score}%</span>
                                </div>
                                <div className="w-full bg-slate-100 rounded-full h-2">
                                    <div 
                                        className="bg-slate-800 h-2 rounded-full transition-all duration-1000" 
                                        style={{ width: `${cat.score}%` }}
                                    ></div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Critical Gaps */}
                    <div>
                        <h3 className="text-lg font-bold text-slate-900 mb-4 flex items-center">
                            <svg className="w-5 h-5 text-amber-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
                            Critical Gaps Identified
                        </h3>
                        <div className="space-y-3">
                            {analysis.criticalGaps.map((gap, i) => (
                                <div key={i} className="flex items-start p-4 bg-amber-50/50 rounded-lg border border-amber-100">
                                    <span className="w-6 h-6 rounded-full bg-amber-100 text-amber-600 flex items-center justify-center text-xs font-bold mr-3 shrink-0">{i + 1}</span>
                                    <p className="text-slate-700">{gap}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            )}

            <div className="pt-8 flex justify-end gap-3">
                <button 
                    onClick={() => {
                        setWizardState(s => ({...s, currentStep: WizardStep.SystemSelection}));
                        navigate('/wizard/step-3');
                    }}
                    className="px-6 py-3 rounded-lg border border-slate-200 text-slate-600 hover:bg-slate-50 transition-all font-medium"
                >
                    Back
                </button>
                <button 
                    disabled={!analysis}
                    onClick={() => {
                        setWizardState(s => ({...s, currentStep: WizardStep.StrategySummary}));
                        navigate('/wizard/step-5');
                    }}
                    className={`
                        px-8 py-3 rounded-lg transition-all font-medium flex items-center shadow-lg
                        ${analysis
                            ? 'bg-slate-900 text-white hover:bg-slate-800 shadow-slate-900/10' 
                            : 'bg-slate-200 text-slate-400 cursor-not-allowed shadow-none'}
                    `}
                >
                    Generate Strategy
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                </button>
            </div>
        </div>
    );

    const RightPanel = (
        <div className="space-y-2">
            <IntelligenceCard title="Scorer Agent" loading={readinessLoading}>
                {readinessLoading 
                    ? "Calculating digital maturity against industry baselines..."
                    : "I've compared your operational data against 1,000+ similar companies."}
            </IntelligenceCard>

            {analysis && (
                <div className="animate-fade-in">
                    <IntelligenceCard title="Quick Wins" type="success">
                        <ul className="space-y-2 list-disc list-inside">
                            {analysis.quickWins.map((win, i) => (
                                <li key={i}>{win}</li>
                            ))}
                        </ul>
                    </IntelligenceCard>
                    
                    <IntelligenceCard title="Projected Impact" type="info">
                        {analysis.projectedImpact}
                    </IntelligenceCard>
                </div>
            )}
        </div>
    );

    return <ThreePanelLayout leftPanel={LeftPanel} centerPanel={CenterPanel} rightPanel={RightPanel} />;
};

export default WizardStep4;