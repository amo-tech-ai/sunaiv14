import React, { useState, useEffect } from 'react';
import { IntelligenceCard } from '../../../components/Layout';
import { WizardState, DashboardSelection, IntelligenceResponse } from '../../../types';
import { analyzeDashboardSelection } from '../../../services/geminiService';

interface DashboardRightPanelProps {
    wizardState: WizardState;
    selection: DashboardSelection | null;
    isWorkflowRunning: boolean;
}

const DashboardRightPanel: React.FC<DashboardRightPanelProps> = ({ wizardState, selection, isWorkflowRunning }) => {
    const [intelligence, setIntelligence] = useState<IntelligenceResponse | null>(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        let isMounted = true;

        const fetchIntelligence = async () => {
            if (selection) {
                setLoading(true);
                // Artificial delay for UI feel if API is too fast/mocked
                const result = await analyzeDashboardSelection(wizardState.context, selection);
                if (isMounted) {
                    setIntelligence(result);
                    setLoading(false);
                }
            } else {
                setIntelligence(null);
            }
        };

        fetchIntelligence();

        return () => { isMounted = false; };
    }, [selection, wizardState.context]);

    // Priority View: Workflow Execution
    if (isWorkflowRunning) {
        return (
            <div className="space-y-4 animate-fade-in">
                <IntelligenceCard title="Orchestrator Agent" type="info" loading>
                    Executing workflow sequence. Monitoring API responses...
                </IntelligenceCard>
                <div className="bg-slate-900 rounded-lg p-4 font-mono text-xs text-green-400">
                    <div>> Connection established</div>
                    <div>> Verifying credentials... OK</div>
                    <div className="animate-pulse">> Awaiting agent output...</div>
                </div>
            </div>
        );
    }

    // Default View: No Selection
    if (!selection) {
        return (
            <div className="space-y-4">
                 <IntelligenceCard title="Agent Status">
                    System idle. Select a task or system to view intelligence.
                </IntelligenceCard>
            </div>
        );
    }

    // Intelligence View
    return (
        <div className="space-y-4 animate-fade-in">
            {/* Agent Card */}
            <IntelligenceCard title={`${intelligence?.agent || 'System'} Agent`} loading={loading}>
                {!loading && intelligence?.summary}
            </IntelligenceCard>

            {/* Contextual Intelligence */}
            {intelligence && !loading && (
                <div className="space-y-4 animate-fade-in-up">
                    <IntelligenceCard title="Impact & ROI" type="success">
                        <p className="mb-2">{intelligence.impact}</p>
                        <div className="text-xs font-bold text-slate-500 uppercase mt-2">Est. Time: {intelligence.time_estimate}</div>
                    </IntelligenceCard>

                    {(intelligence.risks?.length > 0) && (
                        <IntelligenceCard title="Risk Assessment" type="alert">
                            <ul className="list-disc list-inside space-y-1">
                                {intelligence.risks.map((risk, i) => (
                                    <li key={i}>{risk}</li>
                                ))}
                            </ul>
                        </IntelligenceCard>
                    )}

                    {(intelligence.next_actions?.length > 0) && (
                        <IntelligenceCard title="Recommended Next Steps" type="info">
                             <div className="space-y-2">
                                {intelligence.next_actions.map((action, i) => (
                                    <div key={i} className="flex items-start">
                                        <span className="text-blue-500 mr-2">→</span>
                                        <span>{action}</span>
                                    </div>
                                ))}
                            </div>
                        </IntelligenceCard>
                    )}
                </div>
            )}
        </div>
    );
};

export default DashboardRightPanel;