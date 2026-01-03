import React, { useEffect, useState } from 'react';
import { IntelligenceCard } from '../../../components/Layout';
import { ClientDashboardData } from '../types';

interface ClientRightPanelProps {
    data: ClientDashboardData;
    activeView: string;
}

const ClientRightPanel: React.FC<ClientRightPanelProps> = ({ data, activeView }) => {
    const [loading, setLoading] = useState(false);

    // Simulate AI loading effect when view changes
    useEffect(() => {
        setLoading(true);
        const timer = setTimeout(() => setLoading(false), 600);
        return () => clearTimeout(timer);
    }, [activeView]);

    const renderContent = () => {
        if (loading) {
            return (
                <div className="space-y-4">
                    <IntelligenceCard title="Sun AI Analyst" loading={true}>
                        Analyzing view context...
                    </IntelligenceCard>
                </div>
            )
        }

        switch (activeView) {
            case 'overview':
                return (
                    <>
                        <IntelligenceCard title="Executive Summary" type="info">
                            Project is currently <strong>{data.context.status}</strong>. 
                            We are ahead of schedule on Phase 2 automation deliverables.
                        </IntelligenceCard>
                        <IntelligenceCard title="Risk Radar" type={data.stats.risksDetected > 0 ? 'alert' : 'success'}>
                            {data.stats.risksDetected === 0 
                                ? "No critical risks detected in the current sprint."
                                : `${data.stats.risksDetected} risks require attention.`}
                        </IntelligenceCard>
                    </>
                );
            case 'deliverables':
                return (
                    <>
                         <IntelligenceCard title="Quality Assurance">
                            <span className="text-green-600 font-bold">100%</span> of delivered assets have passed automated testing suites.
                        </IntelligenceCard>
                        <IntelligenceCard title="Next Up" type="info">
                            The "Customer Support Chatbot" requires your input on tone of voice guidelines before we begin training.
                        </IntelligenceCard>
                    </>
                );
            case 'phases':
                return (
                    <>
                        <IntelligenceCard title="Timeline Analyst">
                            Phase 2 is 45% complete. We estimate full completion by {data.phases[1].endDate}.
                        </IntelligenceCard>
                        <IntelligenceCard title="Critical Path">
                            The "Lead Scoring Agent" milestone is on the critical path. Any delay here will impact Phase 3 start date.
                        </IntelligenceCard>
                    </>
                );
            case 'reports':
                return (
                    <IntelligenceCard title="Document Insights">
                        The "Initial Strategy Audit" was viewed by 3 stakeholders. We recommend sharing the "Phase 1 Completion Deck" with your board.
                    </IntelligenceCard>
                );
            case 'approvals':
                return (
                    <IntelligenceCard title="Approval Bot" type="alert">
                         You have {data.stats.openApprovals} pending approvals. Clearing these today ensures no blockers for the weekend sprint.
                    </IntelligenceCard>
                );
            default:
                return (
                    <IntelligenceCard title="Sun AI Assistant">
                        I'm monitoring your project status 24/7.
                    </IntelligenceCard>
                );
        }
    };

    return (
        <div className="space-y-4 animate-fade-in">
            {renderContent()}
        </div>
    );
};

export default ClientRightPanel;