import React, { useEffect, useRef } from 'react';
import { WorkflowLog } from '../../../types';

interface AgentTerminalProps {
    isVisible: boolean;
    taskName: string | null;
    logs: WorkflowLog[];
    onClose: () => void;
}

const AgentTerminal: React.FC<AgentTerminalProps> = ({ isVisible, taskName, logs, onClose }) => {
    const logsEndRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        logsEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [logs]);

    if (!isVisible) return null;

    // Find if there is an artifact
    const artifact = logs.find(l => l.type === 'artifact');
    const isComplete = logs.some(l => l.type === 'success' || l.type === 'error');

    return (
        <div className="absolute inset-0 bg-slate-900/95 backdrop-blur-sm rounded-xl p-6 flex flex-col font-mono text-sm z-50 animate-fade-in shadow-2xl">
            {/* Header */}
            <div className="flex justify-between items-center border-b border-slate-700 pb-3 mb-4 shrink-0">
                <span className="text-green-400 font-bold flex items-center tracking-wider">
                    <span className={`w-2 h-2 bg-green-400 rounded-full mr-3 ${!isComplete ? 'animate-pulse' : ''}`}></span>
                    AGENT TERMINAL // {taskName}
                </span>
                
                {isComplete && (
                    <button 
                        onClick={onClose}
                        className="text-xs bg-slate-800 text-white px-3 py-1 rounded border border-slate-700 hover:bg-slate-700 transition-colors"
                    >
                        CLOSE TERMINAL
                    </button>
                )}
            </div>

            {/* Split View if Artifact Exists */}
            <div className="flex-1 overflow-hidden flex flex-col md:flex-row gap-6">
                
                {/* Logs Column */}
                <div className={`flex-1 overflow-y-auto custom-scrollbar space-y-2 ${artifact ? 'md:w-1/2 border-b md:border-b-0 md:border-r border-slate-700 pb-4 md:pb-0 md:pr-4' : 'w-full'}`}>
                    {logs.map((log) => {
                        if (log.type === 'artifact') return null; // Don't show large artifact in log stream
                        
                        let colorClass = 'text-slate-300';
                        if (log.type === 'error') colorClass = 'text-red-400';
                        if (log.type === 'success') colorClass = 'text-green-400 font-bold';
                        
                        return (
                            <div key={log.id} className={`${colorClass} border-l-2 border-slate-700 pl-2 text-xs md:text-sm break-words`}>
                                <span className="opacity-50 text-[10px] mr-2">[{new Date(log.timestamp).toLocaleTimeString().split(' ')[0]}]</span>
                                {log.message}
                            </div>
                        );
                    })}
                    {!isComplete && (
                        <div ref={logsEndRef} className="w-2 h-4 bg-green-400 animate-pulse inline-block mt-2"></div>
                    )}
                </div>

                {/* Artifact Column (If exists) */}
                {artifact && (
                    <div className="flex-1 flex flex-col animate-fade-in-up h-1/2 md:h-full">
                        <div className="text-xs text-slate-500 uppercase font-bold mb-2">Generated Output</div>
                        <div className="flex-1 bg-slate-800 rounded-lg p-4 text-slate-200 overflow-y-auto custom-scrollbar border border-slate-700 shadow-inner whitespace-pre-wrap font-sans text-sm leading-relaxed">
                            {artifact.artifact_content}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default AgentTerminal;