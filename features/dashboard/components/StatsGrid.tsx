import React from 'react';

interface StatsGridProps {
    readinessScore: number | undefined;
    pendingActions: number;
}

const StatsGrid: React.FC<StatsGridProps> = ({ readinessScore, pendingActions }) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="p-6 bg-white rounded-xl border border-slate-100 shadow-sm transition-hover hover:shadow-md">
                <div className="text-slate-500 text-xs uppercase tracking-wider mb-2">Readiness Score</div>
                <div className="text-3xl font-bold text-slate-900">{readinessScore || '--'}</div>
            </div>
            <div className="p-6 bg-white rounded-xl border border-slate-100 shadow-sm transition-hover hover:shadow-md">
                <div className="text-slate-500 text-xs uppercase tracking-wider mb-2">Pending Actions</div>
                <div className="text-3xl font-bold text-slate-900">{pendingActions}</div>
            </div>
            <div className="p-6 bg-white rounded-xl border border-slate-100 shadow-sm transition-hover hover:shadow-md">
                <div className="text-slate-500 text-xs uppercase tracking-wider mb-2">AI Agents</div>
                <div className="text-3xl font-bold text-green-600 flex items-center">
                    Active
                    <span className="w-2 h-2 rounded-full bg-green-500 ml-2 animate-pulse"></span>
                </div>
            </div>
        </div>
    );
};

export default StatsGrid;