import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ThreePanelLayout, PanelSection, IntelligenceCard } from '../../components/Layout';
import { WizardStep, Question } from '../../types';
import { useAppState } from '../../context/AppContext';

const WizardStep2: React.FC = () => {
    const { wizardState, setWizardState, generateQuestions, questionsLoading } = useAppState();
    const navigate = useNavigate();
    const [lastInteractedQuestionId, setLastInteractedQuestionId] = useState<string | null>(null);

    useEffect(() => {
        // Regenerate questions if we don't have any, or if context changed significantly (optional logic)
        // For now, simple check: if empty, generate.
        if (wizardState.industryDeepDive.questions.length === 0 && !questionsLoading) {
            generateQuestions();
        }
    }, []);

    const handleAnswer = (questionId: string, answer: string) => {
        setWizardState(prev => ({
            ...prev,
            industryDeepDive: {
                ...prev.industryDeepDive,
                answers: {
                    ...prev.industryDeepDive.answers,
                    [questionId]: answer
                }
            }
        }));
        setLastInteractedQuestionId(questionId);
    };

    const isComplete = wizardState.industryDeepDive.questions.length > 0 && 
        wizardState.industryDeepDive.questions.every(q => !!wizardState.industryDeepDive.answers[q.id]);

    const renderQuestionGroup = (questions: Question[], categoryLabel: string) => {
        if (questions.length === 0) return null;
        return (
            <div className="mb-8">
                <h2 className="text-sm font-bold text-slate-500 uppercase tracking-widest mb-4 border-b border-slate-200 pb-2">{categoryLabel}</h2>
                <div className="space-y-8">
                    {questions.map((q, idx) => (
                        <div key={q.id} className="group">
                             <div className="flex items-baseline mb-3">
                                <h3 className="text-lg font-medium text-slate-900">{q.text}</h3>
                            </div>
                            <div className="pl-4 space-y-3">
                                {q.options.map(option => {
                                    const isSelected = wizardState.industryDeepDive.answers[q.id] === option;
                                    return (
                                        <label 
                                            key={option} 
                                            className={`
                                                flex items-center p-3 rounded-lg border cursor-pointer transition-all duration-200
                                                ${isSelected 
                                                    ? 'border-blue-500 bg-blue-50/50 shadow-sm ring-1 ring-blue-500/20' 
                                                    : 'border-slate-200 bg-white hover:border-slate-300 hover:bg-slate-50'
                                                }
                                            `}
                                        >
                                            <input 
                                                type="radio" 
                                                name={q.id} 
                                                value={option}
                                                checked={isSelected}
                                                onChange={() => handleAnswer(q.id, option)}
                                                className="hidden" 
                                            />
                                            <div className={`
                                                w-4 h-4 rounded-full border flex items-center justify-center mr-3 transition-colors
                                                ${isSelected ? 'border-blue-500' : 'border-slate-300'}
                                            `}>
                                                {isSelected && <div className="w-2 h-2 rounded-full bg-blue-500"></div>}
                                            </div>
                                            <span className={`text-sm ${isSelected ? 'text-slate-900 font-medium' : 'text-slate-600'}`}>{option}</span>
                                        </label>
                                    )
                                })}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        );
    }

    const LeftPanel = (
        <>
            <PanelSection title="Context Summary">
                <div className="space-y-4">
                    <div className="p-4 bg-slate-50 rounded-lg border border-slate-100">
                        <div className="text-xs text-slate-400 uppercase tracking-wider mb-1">Industry</div>
                        <div className="font-semibold text-slate-800">{wizardState.context.industry}</div>
                    </div>
                     <div className="p-4 bg-slate-50 rounded-lg border border-slate-100">
                        <div className="text-xs text-slate-400 uppercase tracking-wider mb-1">Model</div>
                        <div className="font-semibold text-slate-800 capitalize">{wizardState.context.inferredModel || 'Not detected'}</div>
                    </div>
                </div>
            </PanelSection>
            
            <PanelSection title="Progress">
                <div className="space-y-4">
                {[1, 2, 3, 4, 5].map(step => (
                    <div key={step} className="flex items-center group">
                    <div className={`
                        w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-bold border transition-colors
                        ${step === 2 ? 'bg-slate-900 text-white border-slate-900' : 
                          step < 2 ? 'bg-green-500 text-white border-green-500' : 'bg-white text-slate-400 border-slate-200'}
                    `}>
                        {step < 2 ? '✓' : step}
                    </div>
                    <span className={`ml-3 text-sm font-medium ${step === 2 ? 'text-slate-900' : 'text-slate-400'}`}>
                        {step === 1 ? 'Business Context' : step === 2 ? 'Industry Deep Dive' : step === 3 ? 'System Selection' : step === 4 ? 'Readiness' : 'Strategy'}
                    </span>
                    </div>
                ))}
                </div>
            </PanelSection>
        </>
    );

    const businessQuestions = wizardState.industryDeepDive.questions.filter(q => q.category === 'Business');
    const aiQuestions = wizardState.industryDeepDive.questions.filter(q => q.category === 'AI_Feature');
    // Fallback for older questions without category
    const otherQuestions = wizardState.industryDeepDive.questions.filter(q => !q.category);

    const CenterPanel = (
        <div className="space-y-8 animate-fade-in pb-20">
            <div>
                <h1 className="text-3xl font-serif text-slate-900 mb-2">Deep Dive Analysis</h1>
                <p className="text-slate-500 text-lg">
                   Based on our research into <span className="font-semibold text-slate-700">{wizardState.context.companyName || "your company"}</span>, 
                   we need to drill down into specifics.
                </p>
            </div>

            {questionsLoading && wizardState.industryDeepDive.questions.length === 0 ? (
                <div className="space-y-8">
                     {[1, 2, 3].map(i => (
                         <div key={i} className="animate-pulse">
                             <div className="h-4 bg-slate-200 rounded w-1/3 mb-4"></div>
                             <div className="space-y-3">
                                 <div className="h-12 bg-slate-100 rounded-lg w-full"></div>
                                 <div className="h-12 bg-slate-100 rounded-lg w-full"></div>
                             </div>
                         </div>
                     ))}
                </div>
            ) : (
                <div className="space-y-2">
                    {renderQuestionGroup(businessQuestions, "Business Operations")}
                    {renderQuestionGroup(aiQuestions, "AI & Technical Readiness")}
                    {renderQuestionGroup(otherQuestions, "General")}
                </div>
            )}

            <div className="pt-8 flex justify-end gap-3">
                <button 
                    onClick={() => {
                        setWizardState(s => ({...s, currentStep: WizardStep.BusinessContext}));
                        navigate('/wizard/step-1');
                    }}
                    className="px-6 py-3 rounded-lg border border-slate-200 text-slate-600 hover:bg-slate-50 transition-all font-medium"
                >
                    Back
                </button>
                <button 
                    disabled={!isComplete}
                    onClick={() => {
                        setWizardState(s => ({...s, currentStep: WizardStep.SystemSelection}));
                        navigate('/wizard/step-3');
                    }}
                    className={`
                        px-8 py-3 rounded-lg transition-all font-medium flex items-center shadow-lg
                        ${isComplete 
                            ? 'bg-slate-900 text-white hover:bg-slate-800 shadow-slate-900/10' 
                            : 'bg-slate-200 text-slate-400 cursor-not-allowed shadow-none'}
                    `}
                >
                    Continue to Systems
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                </button>
            </div>
        </div>
    );

    const activeQuestion = lastInteractedQuestionId 
        ? wizardState.industryDeepDive.questions.find(q => q.id === lastInteractedQuestionId)
        : null;

    const RightPanel = (
        <div className="space-y-2">
            <IntelligenceCard title="Planner Agent" loading={questionsLoading}>
                {questionsLoading 
                    ? "Generating tailored questions based on deep search context..."
                    : "I've split these questions to understand both your business logic and AI readiness."}
            </IntelligenceCard>

            {activeQuestion ? (
                <div className="animate-fade-in-up">
                    <IntelligenceCard title="Why We Ask This" type="info">
                        {activeQuestion.whyThisMatters}
                    </IntelligenceCard>
                    <IntelligenceCard title="Industry Benchmark" type="success">
                        {activeQuestion.industryBenchmark}
                    </IntelligenceCard>
                </div>
            ) : (
                !questionsLoading && (
                    <IntelligenceCard title="Sun AI Agency Insight">
                        Select an option to see how you compare to industry benchmarks.
                    </IntelligenceCard>
                )
            )}
        </div>
    );

    return <ThreePanelLayout leftPanel={LeftPanel} centerPanel={CenterPanel} rightPanel={RightPanel} />;
};

export default WizardStep2;