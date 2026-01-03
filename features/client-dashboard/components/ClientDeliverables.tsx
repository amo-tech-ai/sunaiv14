import React from 'react';
import { ClientDashboardData } from '../types';

interface ClientDeliverablesProps {
    deliverables: ClientDashboardData['deliverables'];
}

const ClientDeliverables: React.FC<ClientDeliverablesProps> = ({ deliverables }) => {
    // Sort: In Review -> In Progress -> Scheduled -> Delivered
    const sorted = [...deliverables].sort((a, b) => {
        const priority = { 'in_review': 0, 'in_progress': 1, 'scheduled': 2, 'delivered': 3 };
        return priority[a.status] - priority[b.status];
    });

    const getStatusStyle = (status: string) => {
        switch(status) {
            case 'delivered': return 'bg-green-100 text-green-700 border-green-200';
            case 'in_progress': return 'bg-blue-100 text-blue-700 border-blue-200 animate-pulse';
            case 'in_review': return 'bg-amber-100 text-amber-700 border-amber-200';
            default: return 'bg-slate-100 text-slate-500 border-slate-200';
        }
    };

    return (
        <div className="animate-fade-in space-y-8 pb-10">
            <div>
                <h1 className="text-3xl font-serif font-bold text-slate-900 mb-2">Deliverables</h1>
                <p className="text-slate-500">Track the status of all assets and integrations being built.</p>
            </div>

            <div className="space-y-4">
                {sorted.map((del) => (
                    <div key={del.id} className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-all group">
                        <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                            <div className="flex-1">
                                <div className="flex items-center space-x-3 mb-2">
                                    <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors">{del.title}</h3>
                                    <span className={`text-[10px] font-bold px-2 py-0.5 rounded uppercase tracking-wider border ${getStatusStyle(del.status)}`}>
                                        {del.status.replace('_', ' ')}
                                    </span>
                                </div>
                                <p className="text-slate-600 text-sm mb-3">{del.description}</p>
                                <div className="flex items-center space-x-4 text-xs text-slate-400">
                                    <span className="flex items-center bg-slate-50 px-2 py-1 rounded border border-slate-100">
                                        <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" /></svg>
                                        {del.type}
                                    </span>
                                    <span>{del.status === 'delivered' ? 'Delivered on' : 'Due by'} {del.date}</span>
                                </div>
                            </div>

                            <div className="flex items-center space-x-2 shrink-0">
                                {del.status === 'in_review' && (
                                    <button className="px-4 py-2 bg-amber-500 hover:bg-amber-600 text-white text-sm font-medium rounded-lg transition-colors shadow-sm">
                                        Review
                                    </button>
                                )}
                                <button className="p-2 text-slate-400 hover:text-slate-900 bg-slate-50 hover:bg-slate-100 rounded-lg transition-colors">
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
                                </button>
                                <button className="p-2 text-slate-400 hover:text-blue-600 bg-slate-50 hover:bg-blue-50 rounded-lg transition-colors">
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ClientDeliverables;