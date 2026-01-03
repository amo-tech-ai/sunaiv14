import React from 'react';

export type MobileTab = 'context' | 'work' | 'intel';

interface MobileNavProps {
    activeTab: MobileTab;
    setActiveTab: (tab: MobileTab) => void;
}

export const MobileNav: React.FC<MobileNavProps> = ({ activeTab, setActiveTab }) => {
    return (
        <div className="absolute bottom-0 left-0 right-0 bg-white border-t border-slate-200 z-50 flex justify-around p-3 pb-6 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.05)]">
            <button 
                onClick={() => setActiveTab('context')} 
                className={`flex flex-col items-center space-y-1 ${activeTab === 'context' ? 'text-slate-900' : 'text-slate-400'}`}
            >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
                <span className="text-[10px] font-bold uppercase">Context</span>
            </button>
            <button 
                onClick={() => setActiveTab('work')} 
                className={`flex flex-col items-center space-y-1 ${activeTab === 'work' ? 'text-blue-600' : 'text-slate-400'}`}
            >
                <div className="w-10 h-10 bg-slate-900 rounded-full flex items-center justify-center text-white -mt-6 border-4 border-slate-50 shadow-lg">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                </div>
            </button>
            <button 
                onClick={() => setActiveTab('intel')} 
                className={`flex flex-col items-center space-y-1 ${activeTab === 'intel' ? 'text-slate-900' : 'text-slate-400'}`}
            >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" /></svg>
                <span className="text-[10px] font-bold uppercase">AI Insight</span>
            </button>
        </div>
    );
};