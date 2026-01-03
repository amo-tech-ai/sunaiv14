import React from 'react';
import { ClientDashboardData } from '../types';

interface ClientOverviewProps {
    data: ClientDashboardData;
    onNavigate: (view: string) => void;
}

const ClientOverview: React.FC<ClientOverviewProps> = ({ data, onNavigate }) => {
    const { stats, approvals, deliverables } = data;

    const inProgress = deliverables.filter(d => d.status === 'in_progress' || d.status === 'in_review');
    const completed = deliverables.filter(d => d.status === 'delivered');

    return (
        <div className="space-y-8 animate-fade-in pb-10">
            {/* Header */}
            <div>
                <h1 className="text-3xl font-serif font-bold text-slate-900 mb-2">Project Overview</h1>
                <p className="text-slate-500">Real-time status of your intelligent infrastructure build.</p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="p-4 bg-white rounded-xl border border-slate-200 shadow-sm">
                    <div className="text-[10px] uppercase tracking-wider text-slate-400 font-bold mb-1">Health</div>
                    <div className="text-2xl font-bold text-slate-900 flex items-center">
                        {stats.health}%
                        <span className="ml-2 w-2 h-2 rounded-full bg-green-500"></span>
                    </div>
                </div>
                <div className="p-4 bg-white rounded-xl border border-slate-200 shadow-sm">
                    <div className="text-[10px] uppercase tracking-wider text-slate-400 font-bold mb-1">Milestones</div>
                    <div className="text-2xl font-bold text-slate-900">{stats.milestonesCompleted}<span className="text-slate-300 text-lg">/{stats.totalMilestones}</span></div>
                </div>
                <div className="p-4 bg-white rounded-xl border border-slate-200 shadow-sm">
                    <div className="text-[10px] uppercase tracking-wider text-slate-400 font-bold mb-1">Next Delivery</div>
                    <div className="text-2xl font-bold text-slate-900 truncate">{stats.nextDeliveryDate}</div>
                </div>
                <div className="p-4 bg-white rounded-xl border border-slate-200 shadow-sm">
                    <div className="text-[10px] uppercase tracking-wider text-slate-400 font-bold mb-1">Approvals</div>
                    <div className={`text-2xl font-bold ${stats.openApprovals > 0 ? 'text-amber-500' : 'text-slate-300'}`}>
                        {stats.openApprovals}
                    </div>
                </div>
            </div>

            {/* Action Required Section */}
            {approvals.length > 0 && (
                <div className="bg-amber-50 border border-amber-100 rounded-xl p-6 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-amber-100/50 rounded-full -mr-10 -mt-10 blur-xl"></div>
                    
                    <div className="flex items-center mb-4 relative z-10">
                        <div className="w-8 h-8 rounded-full bg-amber-100 text-amber-600 flex items-center justify-center mr-3">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" /></svg>
                        </div>
                        <h2 className="text-lg font-bold text-slate-900">Needs Approval ({approvals.length})</h2>
                    </div>

                    <div className="space-y-3 relative z-10">
                        {approvals.map(app => (
                            <div key={app.id} className="bg-white p-4 rounded-lg border border-amber-200 shadow-sm flex flex-col md:flex-row md:items-center justify-between hover:shadow-md transition-shadow cursor-pointer" onClick={() => onNavigate('approvals')}>
                                <div className="mb-3 md:mb-0">
                                    <div className="flex items-center space-x-2 mb-1">
                                        <h3 className="font-semibold text-slate-900">{app.title}</h3>
                                        {app.priority === 'high' && <span className="bg-red-100 text-red-700 text-[10px] font-bold px-1.5 py-0.5 rounded">HIGH</span>}
                                    </div>
                                    <p className="text-sm text-slate-600">{app.description}</p>
                                    <div className="text-xs text-slate-400 mt-2">Due: {app.dueDate}</div>
                                </div>
                                <button className="bg-slate-900 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-slate-800 transition-colors whitespace-nowrap">
                                    Review Now
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            )}

            {/* In Progress & Delivered Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* In Progress */}
                <div>
                    <h3 className="text-sm font-bold text-slate-900 uppercase tracking-widest mb-4 flex items-center">
                        <span className="w-2 h-2 rounded-full bg-blue-500 mr-2 animate-pulse"></span>
                        In Progress
                    </h3>
                    <div className="space-y-3">
                        {inProgress.length > 0 ? inProgress.map(del => (
                            <div key={del.id} className="bg-white p-4 rounded-lg border border-slate-200 shadow-sm flex justify-between items-center group">
                                <div>
                                    <h4 className="font-medium text-slate-900 group-hover:text-blue-600 transition-colors">{del.title}</h4>
                                    <div className="flex items-center space-x-2 mt-1">
                                        <span className="text-[10px] bg-slate-100 text-slate-500 px-1.5 py-0.5 rounded">{del.type}</span>
                                        <span className="text-xs text-slate-400">ETA: {del.date}</span>
                                    </div>
                                </div>
                                <div className="w-5 h-5 border-2 border-slate-200 rounded-full"></div>
                            </div>
                        )) : (
                            <div className="text-slate-400 italic text-sm">No active items.</div>
                        )}
                    </div>
                </div>

                {/* Delivered */}
                <div>
                    <h3 className="text-sm font-bold text-slate-900 uppercase tracking-widest mb-4 flex items-center">
                        <svg className="w-4 h-4 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                        Recently Delivered
                    </h3>
                    <div className="space-y-3">
                        {completed.map(del => (
                            <div key={del.id} className="bg-slate-50 p-4 rounded-lg border border-slate-100 flex justify-between items-center opacity-75 hover:opacity-100 transition-opacity">
                                <div>
                                    <h4 className="font-medium text-slate-700 decoration-slate-400">{del.title}</h4>
                                    <div className="flex items-center space-x-2 mt-1">
                                        <span className="text-[10px] bg-white border border-slate-200 text-slate-400 px-1.5 py-0.5 rounded">{del.type}</span>
                                        <span className="text-xs text-slate-400">{del.date}</span>
                                    </div>
                                </div>
                                <div className="w-5 h-5 bg-green-100 text-green-600 rounded-full flex items-center justify-center">
                                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ClientOverview;