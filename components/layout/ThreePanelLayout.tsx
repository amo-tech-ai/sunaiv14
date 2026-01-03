import React, { useState, useEffect } from 'react';
import { MobileNav, MobileTab } from './MobileNav';

interface LayoutProps {
  leftPanel: React.ReactNode;
  centerPanel: React.ReactNode;
  rightPanel: React.ReactNode;
}

export const ThreePanelLayout: React.FC<LayoutProps> = ({ leftPanel, centerPanel, rightPanel }) => {
  const [leftOpen, setLeftOpen] = useState(true);
  const [activeMobileTab, setActiveMobileTab] = useState<MobileTab>('work');
  const [isMobile, setIsMobile] = useState(false);

  // Responsive check
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <div className="flex h-screen w-full bg-slate-50 overflow-hidden text-slate-900 font-sans relative">
      
      {/* LEFT PANEL: Context */}
      <div 
        className={`
          flex flex-col border-r border-slate-200 bg-white transition-all duration-300 ease-in-out
          ${isMobile 
            ? (activeMobileTab === 'context' ? 'w-full absolute inset-0 z-20' : 'hidden') 
            : (leftOpen ? 'w-[250px] lg:w-[20%]' : 'w-12')
          }
        `}
      >
        <div className="h-16 flex items-center justify-between px-4 border-b border-slate-100">
          {(leftOpen || isMobile) && (
            <span className="font-serif font-bold text-slate-800 tracking-tight truncate">
              SUN AI AGENCY <span className="text-[10px] text-slate-400 font-sans font-normal ml-1">v14</span>
            </span>
          )}
          {!isMobile && (
            <button 
              onClick={() => setLeftOpen(!leftOpen)}
              className="p-1 hover:bg-slate-100 rounded text-slate-400"
            >
              {leftOpen ? (
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
              ) : (
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
              )}
            </button>
          )}
        </div>
        <div className={`flex-1 overflow-y-auto panel-scroll ${leftOpen || isMobile ? 'p-6' : 'p-2 items-center flex flex-col'}`}>
          {(leftOpen || isMobile) ? leftPanel : (
             <div className="space-y-4 mt-4">
                <div className="w-8 h-8 rounded-full bg-slate-100 border border-slate-200"></div>
                <div className="w-8 h-8 rounded-full bg-slate-100 border border-slate-200"></div>
             </div>
          )}
        </div>
      </div>

      {/* CENTER PANEL: Work (Main Area) */}
      <div className={`
        flex-1 flex flex-col h-full relative z-10 shadow-sm md:shadow-none bg-slate-50
        ${isMobile && activeMobileTab !== 'work' ? 'hidden' : 'flex'}
      `}>
        <div className="h-16 flex items-center px-8 border-b border-slate-200/50 bg-slate-50/80 backdrop-blur-sm sticky top-0">
             {isMobile && (
                <div className="font-serif font-bold text-slate-800 mr-4">
                  SUN AI AGENCY
                </div>
             )}
        </div>
        <div className="flex-1 overflow-y-auto p-6 md:p-12 lg:p-16 max-w-4xl mx-auto w-full panel-scroll pb-24 md:pb-6">
          {centerPanel}
        </div>
      </div>

      {/* RIGHT PANEL: Intelligence */}
      <div className={`
        flex flex-col border-l border-slate-200 bg-white
        ${isMobile 
            ? (activeMobileTab === 'intel' ? 'w-full absolute inset-0 z-20' : 'hidden') 
            : 'w-[30%]'
        }
      `}>
        <div className="h-16 flex items-center px-6 border-b border-slate-100">
           <div className="flex items-center space-x-2">
              <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
              <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Sun AI Intelligence</span>
           </div>
        </div>
        <div className="flex-1 overflow-y-auto p-6 panel-scroll bg-gradient-to-b from-white to-slate-50/50 pb-24 md:pb-6">
          {rightPanel}
        </div>
      </div>

      {/* MOBILE BOTTOM NAV */}
      {isMobile && (
        <MobileNav activeTab={activeMobileTab} setActiveTab={setActiveMobileTab} />
      )}
    </div>
  );
};