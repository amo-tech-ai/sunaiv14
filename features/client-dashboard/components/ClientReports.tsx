import React from 'react';
import { ClientDashboardData } from '../types';

interface ClientReportsProps {
    reports: ClientDashboardData['reports'];
}

const ClientReports: React.FC<ClientReportsProps> = ({ reports }) => {
    return (
        <div className="animate-fade-in space-y-8 pb-10">
            <div>
                <h1 className="text-3xl font-serif font-bold text-slate-900 mb-2">Reports & Assets</h1>
                <p className="text-slate-500">Access strategic documents, decks, and audit logs.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {reports.map((report) => (
                    <div key={report.id} className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:shadow-lg transition-all cursor-pointer group flex flex-col items-center text-center">
                        <div className={`
                            w-16 h-16 rounded-2xl flex items-center justify-center text-2xl mb-4 shadow-sm transition-transform group-hover:scale-110
                            ${report.type === 'pdf' ? 'bg-red-50 text-red-500' : 
                              report.type === 'deck' ? 'bg-amber-50 text-amber-500' : 
                              'bg-green-50 text-green-500'}
                        `}>
                            {report.type === 'pdf' && '📄'}
                            {report.type === 'deck' && '📊'}
                            {report.type === 'csv' && '📑'}
                        </div>
                        
                        <h3 className="font-bold text-slate-900 mb-1 group-hover:text-blue-600 transition-colors">{report.title}</h3>
                        <div className="text-xs text-slate-400 mb-4">{report.date} • {report.size}</div>
                        
                        <button className="mt-auto w-full py-2 bg-slate-50 text-slate-600 font-medium rounded-lg text-sm group-hover:bg-slate-900 group-hover:text-white transition-colors flex items-center justify-center">
                            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
                            Download
                        </button>
                    </div>
                ))}

                {/* Placeholder for new report */}
                <div className="border-2 border-dashed border-slate-200 rounded-xl p-6 flex flex-col items-center justify-center text-center hover:border-blue-300 hover:bg-blue-50/10 transition-colors cursor-pointer min-h-[220px]">
                    <div className="w-12 h-12 bg-slate-50 rounded-full flex items-center justify-center text-slate-300 mb-3">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" /></svg>
                    </div>
                    <span className="text-sm font-medium text-slate-500">Request New Report</span>
                    <span className="text-xs text-slate-400 mt-1">Uses 1 Agent Credit</span>
                </div>
            </div>
        </div>
    );
};

export default ClientReports;