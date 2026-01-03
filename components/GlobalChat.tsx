import React, { useState, useEffect, useRef } from 'react';
import { useAppState } from '../context/AppContext';
import { createAgentChat, sendAgentMessage, ChatMessage } from '../services/ai/chatAgent';
import { Chat } from '@google/genai';

const GlobalChat: React.FC = () => {
    const { wizardState } = useAppState();
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<ChatMessage[]>([
        { role: 'model', text: 'Hi! I\'m your Sun AI Assistant. Ask me anything about your strategy or business profile.' }
    ]);
    const [input, setInput] = useState('');
    const [loading, setLoading] = useState(false);
    const [chatSession, setChatSession] = useState<Chat | null>(null);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    // Initialize/Re-initialize chat when context changes significantly or on open
    useEffect(() => {
        if (isOpen && !chatSession) {
            const session = createAgentChat(wizardState);
            setChatSession(session);
        }
    }, [isOpen, wizardState]);

    // Auto-scroll to bottom
    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages, isOpen]);

    const handleSend = async () => {
        if (!input.trim()) return;

        const userMsg: ChatMessage = { role: 'user', text: input };
        setMessages(prev => [...prev, userMsg]);
        setInput('');
        setLoading(true);

        // If session was lost or never created
        let currentSession = chatSession;
        if (!currentSession) {
             currentSession = createAgentChat(wizardState);
             setChatSession(currentSession);
        }

        const responseText = await sendAgentMessage(currentSession, userMsg.text);
        
        setMessages(prev => [...prev, { role: 'model', text: responseText }]);
        setLoading(false);
    };

    return (
        <div className={`fixed bottom-6 right-6 z-50 flex flex-col items-end pointer-events-none ${isOpen ? 'w-full md:w-[400px]' : 'w-auto'}`}>
            
            {/* Chat Window */}
            <div className={`
                pointer-events-auto
                bg-white border border-slate-200 shadow-2xl rounded-2xl overflow-hidden
                transition-all duration-300 ease-in-out origin-bottom-right
                flex flex-col
                ${isOpen ? 'w-full md:w-[400px] h-[500px] opacity-100 mb-4' : 'w-0 h-0 opacity-0 mb-0'}
            `}>
                {/* Header */}
                <div className="bg-slate-900 text-white p-4 flex justify-between items-center">
                    <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div>
                        <span className="font-semibold text-sm">Sun AI Assistant</span>
                    </div>
                    <button onClick={() => setIsOpen(false)} className="text-slate-400 hover:text-white">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                    </button>
                </div>

                {/* Messages Area */}
                <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-50 panel-scroll">
                    {messages.map((msg, idx) => (
                        <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                            <div className={`
                                max-w-[85%] p-3 rounded-xl text-sm leading-relaxed
                                ${msg.role === 'user' 
                                    ? 'bg-blue-600 text-white rounded-br-none' 
                                    : 'bg-white border border-slate-200 text-slate-700 rounded-bl-none shadow-sm'}
                            `}>
                                {msg.text}
                            </div>
                        </div>
                    ))}
                    {loading && (
                        <div className="flex justify-start">
                            <div className="bg-white border border-slate-200 p-3 rounded-xl rounded-bl-none shadow-sm flex space-x-1">
                                <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce"></div>
                                <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce delay-100"></div>
                                <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce delay-200"></div>
                            </div>
                        </div>
                    )}
                    <div ref={messagesEndRef} />
                </div>

                {/* Input Area */}
                <div className="p-4 bg-white border-t border-slate-100">
                    <div className="relative">
                        <input
                            type="text"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                            placeholder="Ask about your strategy..."
                            className="w-full pl-4 pr-10 py-3 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/10 outline-none text-sm text-slate-800"
                        />
                        <button 
                            onClick={handleSend}
                            disabled={!input.trim() || loading}
                            className="absolute right-2 top-2 p-1.5 bg-slate-100 text-slate-500 rounded-lg hover:bg-slate-200 disabled:opacity-50 transition-colors"
                        >
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" /></svg>
                        </button>
                    </div>
                </div>
            </div>

            {/* Floating Toggle Button */}
            <button 
                onClick={() => setIsOpen(!isOpen)}
                className={`
                    pointer-events-auto
                    w-14 h-14 rounded-full shadow-xl flex items-center justify-center transition-all duration-300 transform hover:scale-105
                    ${isOpen ? 'bg-slate-800 text-white rotate-90' : 'bg-slate-900 text-white'}
                `}
            >
                {isOpen ? (
                     <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                ) : (
                     <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" /></svg>
                )}
            </button>
        </div>
    );
};

export default GlobalChat;
