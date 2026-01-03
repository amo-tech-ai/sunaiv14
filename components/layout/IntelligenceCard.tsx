import React from 'react';

export const IntelligenceCard: React.FC<{ 
  title: string; 
  children: React.ReactNode; 
  type?: 'default' | 'alert' | 'success' | 'info';
  loading?: boolean;
}> = ({ title, children, type = 'default', loading = false }) => {
  const borderColors = {
    default: 'border-slate-100',
    alert: 'border-amber-200 bg-amber-50/30',
    success: 'border-green-200 bg-green-50/30',
    info: 'border-blue-200 bg-blue-50/30'
  };

  return (
    <div className={`p-5 rounded-xl border ${borderColors[type]} shadow-sm bg-white mb-4 transition-all duration-500`}>
      <h4 className="font-medium text-slate-800 mb-2 flex items-center justify-between">
        {title}
        {loading && <div className="animate-spin h-3 w-3 border-2 border-blue-500 rounded-full border-t-transparent"></div>}
      </h4>
      <div className="text-sm text-slate-600 leading-relaxed">
        {loading ? (
            <div className="space-y-2 animate-pulse">
                <div className="h-2 bg-slate-100 rounded w-3/4"></div>
                <div className="h-2 bg-slate-100 rounded w-1/2"></div>
            </div>
        ) : children}
      </div>
    </div>
  );
};