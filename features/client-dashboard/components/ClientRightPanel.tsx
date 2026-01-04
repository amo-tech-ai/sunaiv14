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
                        Analyzing delivery context...
                    </IntelligenceCard>
                </div>
            )
        }

        switch (activeView) {
            case 'overview':
                return (
                    <>
                        <IntelligenceCard title="Executive Summary" type="info">
                            <strong>Phase 1 (Foundation)</strong> is 75% complete. We are currently validating your data schemas before unlocking Phase 2 (Automation).
                        </IntelligenceCard>
                        <IntelligenceCard title="Strategic Focus">
                            Current focus is on "Visibility" - ensuring you can see all your data in one place.
                        </IntelligenceCard>
                    </>
                );
            case 'phases':
                return (
                    <>
                        <IntelligenceCard title="Why Phased Delivery?">
                            We lock "Advanced Automation" until "Foundation" is stable. Implementing AI on bad data creates chaos faster, not results.
                        </IntelligenceCard>
                        <IntelligenceCard title="Next Phase Preview" type="info">
                             Once Phase 1 is complete, we will enable the <strong>Lead Routing Agent</strong> which typically saves 15 hours/week of manual triage.
                        </IntelligenceCard>
                    </>
                );
            case 'deliverables':
                return (
                    <>
                         <IntelligenceCard title="QA Status">
                            <span className="text-green-600 font-bold">100%</span> of delivered assets have passed automated testing suites.
                        </IntelligenceCard>
                        <IntelligenceCard title="Blockers">
                            No critical blockers detected. Please approve the "Brand Voice Guidelines" to keep us on schedule.
                        </IntelligenceCard>
                    </>
                );
            case 'reports':
                return (
                    <IntelligenceCard title="Document Insights">
                        The "Baseline Performance Audit" identifies a 20% drop-off in your current lead forms. We address this in Deliverable #2.
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