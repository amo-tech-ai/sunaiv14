import React, { useState } from 'react';
import { ThreePanelLayout } from '../../components/Layout';
import { MOCK_CLIENT_DATA } from './mockData';
import ClientLeftPanel from './components/ClientLeftPanel';
import ClientOverview from './components/ClientOverview';
import ClientGantt from './components/ClientGantt';
import ClientDeliverables from './components/ClientDeliverables';
import ClientReports from './components/ClientReports';
import ClientRightPanel from './components/ClientRightPanel';

const ClientDashboard: React.FC = () => {
    // In a real app, this would come from an API based on the authenticated user
    const data = MOCK_CLIENT_DATA;
    const [currentView, setCurrentView] = useState('overview');

    const renderCenterPanel = () => {
        switch(currentView) {
            case 'overview': return <ClientOverview data={data} onNavigate={setCurrentView} />;
            case 'phases': return <ClientGantt phases={data.phases} />;
            case 'deliverables': return <ClientDeliverables deliverables={data.deliverables} />;
            case 'reports': return <ClientReports reports={data.reports} />;
            case 'approvals': 
            case 'messages': 
                return (
                    <div className="flex flex-col items-center justify-center h-[60vh] text-center animate-fade-in">
                        <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mb-4">
                            <span className="text-2xl">{currentView === 'approvals' ? '✍️' : '💬'}</span>
                        </div>
                        <h2 className="text-xl font-bold text-slate-900 capitalize">{currentView} View</h2>
                        <p className="text-slate-500 mt-2">This module is available in the live production build.</p>
                        <button onClick={() => setCurrentView('overview')} className="mt-6 text-blue-600 font-medium hover:underline">Return to Overview</button>
                    </div>
                );
            default: return <ClientOverview data={data} onNavigate={setCurrentView} />;
        }
    }

    return (
        <ThreePanelLayout
            leftPanel={
                <ClientLeftPanel 
                    data={data} 
                    activeView={currentView} 
                    onNavigate={setCurrentView} 
                />
            }
            centerPanel={
                <div className="relative">
                    {/* Tab Bar (Desktop friendly) */}
                    <div className="hidden md:flex border-b border-slate-200 mb-8 overflow-x-auto no-scrollbar">
                        {['overview', 'deliverables', 'phases', 'reports'].map(tab => (
                            <button
                                key={tab}
                                onClick={() => setCurrentView(tab)}
                                className={`
                                    px-6 py-3 text-sm font-medium border-b-2 transition-colors whitespace-nowrap capitalize
                                    ${currentView === tab 
                                        ? 'border-blue-600 text-blue-600' 
                                        : 'border-transparent text-slate-500 hover:text-slate-700 hover:border-slate-300'}
                                `}
                            >
                                {tab}
                            </button>
                        ))}
                    </div>
                    {/* Mobile Title */}
                    <div className="md:hidden mb-6 flex items-center justify-between">
                         <h2 className="text-lg font-bold text-slate-900 capitalize">{currentView}</h2>
                    </div>

                    {renderCenterPanel()}
                </div>
            }
            rightPanel={
                <ClientRightPanel data={data} activeView={currentView} />
            }
        />
    );
};

export default ClientDashboard;