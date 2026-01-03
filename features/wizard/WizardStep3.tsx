import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ThreePanelLayout, PanelSection, IntelligenceCard } from '../../components/Layout';
import { WizardStep } from '../../types';
import { useAppState } from '../../context/AppContext';

// Updated definition of available systems based on new requirements
const AVAILABLE_SYSTEMS = [
    { id: 'ai_dashboards', title: 'AI Dashboards', description: 'Business Intelligence & Analytics', icon: '📊' },
    { id: 'ai_chat_assistants', title: 'AI Chat Assistants', description: 'Customer & Internal Chatbots', icon: '💬' },
    { id: 'automation_systems', title: 'Automation', description: 'Workflow Automation (Zapier/Make)', icon: '⚡' },
    { id: 'ai_crm', title: 'AI CRM', description: 'Salesforce, HubSpot, Pipedrive', icon: '👥' },
    { id: 'internal_ops', title: 'Internal Ops', description: 'Notion, Linear, Project Mgmt', icon: '⚙️' },
    { id: 'knowledge_base', title: 'Knowledge Base', description: 'Docs & Internal Wiki', icon: '📚' },
    { id: 'comm_social', title: 'Comm & Social', description: 'Marketing & Content Gen', icon: '📢' },
    { id: 'data_infra', title: 'Data Infra', description: 'Warehousing & APIs', icon: '🏗️' },
];

const WizardStep3: React.FC = () => {
    const { wizardState, setWizardState, generateSystemRecommendations, recommendationsLoading } = useAppState();
    const navigate = useNavigate();

    useEffect(() => {
        if (!wizardState.systemRecommendations && !recommendationsLoading) {
            generateSystemRecommendations();
        }
    }, []);

    const toggleSystem = (id: string) => {
        setWizardState(prev => {
            const current = prev.selectedSystems;
            if (current.includes(id)) {
                return { ...prev, selectedSystems: current.filter(s => s !== id) };
            } else {
                if (current.length >= 3) return prev; // Max 3 limit
                return { ...prev, selectedSystems: [...current, id] };
            }
        });
    };

    const isRecommended = (id: string) => wizardState.systemRecommendations?.recommendedIds.includes(id);
    const isSelected = (id: string) => wizardState.selectedSystems.includes(id);

    // Calculate selection impact for right panel
    const selectionCount = wizardState.selectedSystems.length;
    const hasComplexityRisk = selectionCount === 3;

    const LeftPanel = (
        <>
            <PanelSection title="Deep Dive Answers">
                <div className="space-y-4">
                    {wizardState.industryDeepDive.questions.slice(0, 3).map(q => (
                        <div key={q.id} className="p-4 bg-slate-50 rounded-lg border border-slate-100">
                            <div className="text-xs text-slate-400 uppercase tracking-wider mb-1 line-clamp-1">{q.text}</div>
                            <div className="font-semibold text-slate-800 text-sm">{wizardState.industryDeepDive.answers[q.id] || '-'}</div>
                        </div>
                    ))}
                </div>
            </PanelSection>
            
            <PanelSection title="Progress">
                <div className="space-y-4">
                {[1, 2, 3, 4, 5].map(step => (
                    <div key={step} className="flex items-center group">
                    <div className={`
                        w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-bold border transition-colors
                        ${step === 3 ? 'bg-slate-900 text-white border-slate-900' : 
                          step < 3 ? 'bg-green-500 text-white border-green-500' : 'bg-white text-slate-400 border-slate-200'}
                    `}>
                        {step < 3 ? '✓' : step}
                    </div>
                    <span className={`ml-3 text-sm font-medium ${step === 3 ? 'text-slate-900' : 'text-slate-400'}`}>
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
                <h1 className="text-3xl font-serif text-slate-900 mb-2">Select your core systems.</h1>
                <p className="text-slate-500 text-lg">Choose up to 3 systems to prioritize for immediate implementation.</p>
            </div>

            {recommendationsLoading ? (
                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {[1, 2, 3, 4, 5, 6, 7, 8].map(i => (
                        <div key={i} className="h-40 rounded-xl bg-slate-100 animate-pulse"></div>
                    ))}
                 </div>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {AVAILABLE_SYSTEMS.map(sys => {
                        const rec = isRecommended(sys.id);
                        const sel = isSelected(sys.id);
                        const disabled = !sel && selectionCount >= 3;

                        return (
                            <div 
                                key={sys.id}
                                onClick={() => !disabled && toggleSystem(sys.id)}
                                className={`
                                    relative p-6 rounded-xl border-2 cursor-pointer transition-all duration-300 flex flex-col items-center text-center group
                                    ${sel 
                                        ? 'border-slate-900 bg-white shadow-xl shadow-slate-900/5 transform -translate-y-1' 
                                        : disabled 
                                            ? 'border-slate-100 bg-slate-50 opacity-50 cursor-not-allowed'
                                            : 'border-slate-200 bg-white hover:border-slate-300 hover:shadow-md'
                                    }
                                `}
                            >
                                {rec && (
                                    <div className="absolute -top-3 px-3 py-1 bg-green-100 text-green-700 text-xs font-bold uppercase tracking-wider rounded-full shadow-sm border border-green-200 z-10">
                                        AI Recommended
                                    </div>
                                )}
                                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">{sys.icon}</div>
                                <h3 className={`font-bold mb-2 text-sm ${sel ? 'text-slate-900' : 'text-slate-700'}`}>{sys.title}</h3>
                                <p className="text-xs text-slate-500 leading-tight">{sys.description}</p>
                                
                                <div className={`mt-4 w-6 h-6 rounded-full border-2 flex items-center justify-center transition-colors ${sel ? 'border-slate-900 bg-slate-900' : 'border-slate-200'}`}>
                                    {sel && <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>}
                                </div>
                            </div>
                        );
                    })}
                </div>
            )}

            <div className="pt-8 flex justify-end gap-3">
                <button 
                    onClick={() => {
                        setWizardState(s => ({...s, currentStep: WizardStep.IndustryDeepDive}));
                        navigate('/wizard/step-2');
                    }}
                    className="px-6 py-3 rounded-lg border border-slate-200 text-slate-600 hover:bg-slate-50 transition-all font-medium"
                >
                    Back
                </button>
                <button 
                    disabled={selectionCount === 0}
                    onClick={() => {
                        setWizardState(s => ({...s, currentStep: WizardStep.ReadinessScore}));
                        navigate('/wizard/step-4');
                    }}
                    className={`
                        px-8 py-3 rounded-lg transition-all font-medium flex items-center shadow-lg
                        ${selectionCount > 0
                            ? 'bg-slate-900 text-white hover:bg-slate-800 shadow-slate-900/10' 
                            : 'bg-slate-200 text-slate-400 cursor-not-allowed shadow-none'}
                    `}
                >
                    Analyze Readiness
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                </button>
            </div>
        </div>
    );

    const RightPanel = (
        <div className="space-y-2">
            <IntelligenceCard title="Orchestrator Agent" loading={recommendationsLoading}>
                {recommendationsLoading 
                    ? "Evaluating your answers to recommend the optimal system stack..."
                    : wizardState.systemRecommendations?.reasoning || "Select systems to see impact analysis."}
            </IntelligenceCard>

            <div className="animate-fade-in">
                <IntelligenceCard title="Impact Analysis" type={hasComplexityRisk ? 'alert' : 'info'}>
                    {selectionCount === 0 && "Select at least one system to continue."}
                    {selectionCount === 1 && "Single system focus allows for rapid deployment but may leave operational gaps."}
                    {selectionCount === 2 && "Balanced approach. Ensure these two systems have native integrations."}
                    {selectionCount === 3 && "Maximum initial scope. Be aware of implementation complexity with 3 concurrent systems."}
                </IntelligenceCard>

                <div className="mt-4 p-4 rounded-xl bg-slate-50 border border-slate-100">
                    <div className="flex justify-between items-center mb-2">
                        <span className="text-xs font-bold text-slate-400 uppercase">Estimated Implementation</span>
                        <span className="text-xs font-bold text-slate-900">{selectionCount * 2} - {selectionCount * 4} Weeks</span>
                    </div>
                    <div className="w-full bg-slate-200 rounded-full h-1.5">
                        <div 
                            className="bg-slate-900 h-1.5 rounded-full transition-all duration-500" 
                            style={{ width: `${(selectionCount / 3) * 100}%` }}
                        ></div>
                    </div>
                </div>
            </div>
        </div>
    );

    return <ThreePanelLayout leftPanel={LeftPanel} centerPanel={CenterPanel} rightPanel={RightPanel} />;
};

export default WizardStep3;