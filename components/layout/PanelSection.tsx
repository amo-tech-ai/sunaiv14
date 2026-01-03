import React from 'react';

export const PanelSection: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
  <div className="mb-8">
    <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">{title}</h3>
    {children}
  </div>
);