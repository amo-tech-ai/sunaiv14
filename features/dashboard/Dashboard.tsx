import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ThreePanelLayout } from '../../components/Layout';
import { useAppState } from '../../context/AppContext';
import { DashboardSelection, WorkflowLog } from '../../types';
import { startWorkflow, getWorkflowLogs } from '../../services/workflowService';

// Import Modular Components
import DashboardLeftPanel from './components/DashboardLeftPanel';
import DashboardRightPanel from './components/DashboardRightPanel';
import MorningBriefing from './components/MorningBriefing';
import StatsGrid from './components/StatsGrid';
import PhaseLog from './components/PhaseLog';
import AgentTerminal from './components/AgentTerminal';

type DashboardView = 'briefing' | 'strategy' | 'workflows' | 'reports' | 'settings';

const Dashboard: React.FC = () => {
    const { wizardState, resetApp } = useAppState();
    const navigate = useNavigate();
    
    // State
    const [currentView, setCurrentView] = useState<DashboardView>('briefing');
    const [activeSelection, setActiveSelection] = useState<DashboardSelection | null>(null);
    
    // Workflow State
    const [activeWorkflowId, setActiveWorkflowId] = useState<string | null>(null);
    const [executingTaskName, setExecutingTaskName] = useState<string | null>(null);
    const [agentLogs, setAgentLogs] = useState<WorkflowLog[]>([]);
    const [showTerminal, setShowTerminal] = useState(false);

    // Polling Effect for Workflow Logs
    useEffect(() => {
        let intervalId: any;

        if (activeWorkflowId) {
            setShowTerminal(true);
            
            intervalId = setInterval(async () => {
                const logs = await getWorkflowLogs(activeWorkflowId);
                setAgentLogs(logs);

                // Check for completion/failure to stop polling eventually
                // In a real app, we might keep the terminal open but stop polling
                const hasError = logs.some(l => l.type === 'error');
                const hasSuccess = logs.some(l => l.type === 'success');
                
                if (hasError || hasSuccess) {
                    clearInterval(intervalId);
                    // Optional: Auto-close terminal after delay? 
                    // We'll keep it open so user can read the artifact.
                }
            }, 1000);
        }

        return () => {
            if (intervalId) clearInterval(intervalId);
        };
    }, [activeWorkflowId]);

    // Initial selection derived from strategy
    useEffect(() => {
        if (!activeSelection && wizardState.strategy?.phases[0]?.steps[0]) {
            setActiveSelection({
                type: 'briefing_item',
                id: 'task-1',
                title: wizardState.strategy.phases[0].steps[0],
                metadata: { priority: 1 }
            });
        }
    }, [wizardState.strategy]);

    const handleSelect = (selection: DashboardSelection) => {
        setActiveSelection(selection);
    };

    const handleRunWorkflow = async (task: string) => {
        if (activeWorkflowId) return; // Prevent double run
        
        setExecutingTaskName(task);
        setAgentLogs([]); // Clear previous logs
        
        try {
            const id = await startWorkflow(task, wizardState.context);
            setActiveWorkflowId(id);
        } catch (e) {
            console.error("Failed to start workflow", e);
            setExecutingTaskName(null);
        }
    };

    const handleCloseTerminal = () => {
        setShowTerminal(false);
        setActiveWorkflowId(null);
        setExecutingTaskName(null);
    };

    const handleRestart = () => {
        if(confirm("Are you sure you want to reset the entire strategy? This cannot be undone.")) {
            resetApp();
            navigate('/');
        }
    }

    const currentPhase = wizardState.strategy?.phases[0];
    const topTasks = currentPhase?.steps.slice(0, 3) || [];
    const readinessScore = wizardState.readinessAnalysis?.overallScore;
    const pendingActions = currentPhase?.steps.length || 0;

    // View Renderers (Refactored for cleaner code)
    const renderBriefing = () => (
        <div className="relative space-y-8 animate-fade-in">
            <MorningBriefing 
                tasks={topTasks} 
                activeSelectionId={activeSelection?.id}
                onSelect={(task, idx) => handleSelect({
                    type: 'briefing_item',
                    id: `task-${idx+1}`,
                    title: task,
                    metadata: { priority: idx + 1 }
                })}
                onRunWorkflow={handleRunWorkflow}
                executingTask={executingTaskName}
                userName={wizardState.context.fullName}
            />

            <div>
                <h2 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-6">Command Center Stats</h2>
                <StatsGrid 
                    readinessScore={readinessScore} 
                    pendingActions={pendingActions} 
                />
            </div>
            
            {currentPhase && (
                <PhaseLog 
                    phaseName={currentPhase.phaseName} 
                    steps={currentPhase.steps}
                    activeSelectionId={activeSelection?.id}
                    onSelect={(step, idx) => handleSelect({
                        type: 'phase',
                        id: `phase-step-${idx}`,
                        title: step,
                        metadata: { phase: currentPhase.phaseName }
                    })}
                />
            )}
        </div>
    );

    const renderWorkflows = () => (
        <div className="space-y-6 animate-fade-in">
            <h1 className="text-2xl font-serif font-bold text-slate-900">Active Workflows</h1>
            <div className="grid gap-4">
                {[
                    { name: 'Daily Lead Scoring', agent: 'Scorer', status: 'Active', run: '2h ago' },
                    { name: 'Competitor Watch', agent: 'Research', status: 'Idle', run: '1d ago' },
                    { name: 'Weekly Report Gen', agent: 'Analyst', status: 'Scheduled', run: 'In 3h' },
                ].map((wf, i) => (
                    <div key={i} className="bg-white p-4 rounded-xl border border-slate-200 flex justify-between items-center hover:border-blue-300 transition-colors cursor-pointer"
                        onClick={() => handleSelect({ type: 'report', id: `wf-${i}`, title: wf.name })}
                    >
                        <div className="flex items-center space-x-4">
                            <div className={`w-2 h-2 rounded-full ${wf.status === 'Active' ? 'bg-green-500 animate-pulse' : 'bg-slate-300'}`}></div>
                            <div>
                                <h3 className="font-semibold text-slate-900">{wf.name}</h3>
                                <p className="text-xs text-slate-500">Agent: {wf.agent} • Last run: {wf.run}</p>
                            </div>
                        </div>
                        <button className="text-xs font-bold text-blue-600 px-3 py-1 bg-blue-50 rounded hover:bg-blue-100">Configure</button>
                    </div>
                ))}
            </div>
        </div>
    );

    const renderPlaceholder = (title: string) => (
         <div className="flex flex-col items-center justify-center h-[50vh] text-center animate-fade-in">
            <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-slate-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></svg>
            </div>
            <h2 className="text-xl font-bold text-slate-900">{title}</h2>
            <p className="text-slate-500 mt-2 max-w-sm">This module is part of the Enterprise tier. Activate specific agents to enable this view.</p>
        </div>
    );

    const renderView = () => {
        switch(currentView) {
            case 'briefing': return renderBriefing();
            case 'workflows': return renderWorkflows();
            case 'strategy': return renderPlaceholder('Strategy Roadmap');
            case 'reports': return renderPlaceholder('Intelligence Reports');
            case 'settings': return renderPlaceholder('System Settings');
            default: return renderBriefing();
        }
    };

    return (
        <ThreePanelLayout 
            leftPanel={
                <DashboardLeftPanel 
                    wizardState={wizardState} 
                    activeSelectionId={activeSelection?.id}
                    currentView={currentView}
                    onNavigate={setCurrentView}
                    onSelect={(sysId) => handleSelect({
                        type: 'system',
                        id: sysId,
                        title: sysId.replace('_', ' ').toUpperCase(),
                        metadata: { category: 'Infrastructure' }
                    })}
                    onRestart={handleRestart} 
                />
            } 
            centerPanel={
                <div className="relative">
                     {renderView()}
                     <AgentTerminal 
                        isVisible={showTerminal} 
                        taskName={executingTaskName} 
                        logs={agentLogs}
                        onClose={handleCloseTerminal}
                    />
                </div>
            } 
            rightPanel={
                <DashboardRightPanel 
                    wizardState={wizardState} 
                    selection={activeSelection}
                    isWorkflowRunning={!!executingTaskName}
                />
            } 
        />
    );
}

export default Dashboard;