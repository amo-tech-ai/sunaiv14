import { Chat } from "@google/genai";
import { WizardState } from "../../types";
import { ai, hasApiKey, delay } from "./client";

export interface ChatMessage {
    role: 'user' | 'model';
    text: string;
}

export const createAgentChat = (state: WizardState): Chat | null => {
    if (!hasApiKey) return null;

    const contextString = `
    CLIENT PROFILE:
    - Company: ${state.context.companyName || 'Unnamed'}
    - Industry: ${state.context.industry}
    - Description: ${state.context.description}
    - Digital Maturity: ${state.context.digitalMaturity || 'Unknown'}
    
    STRATEGY STATUS:
    - Current Phase: ${state.strategy?.phases[0]?.phaseName || 'Planning'}
    - Key Objective: ${state.strategy?.phases[0]?.objective || 'N/A'}
    
    READINESS AUDIT:
    - Score: ${state.readinessAnalysis?.overallScore || 'N/A'}
    - Critical Gaps: ${state.readinessAnalysis?.criticalGaps.join('; ') || 'None'}
    
    SYSTEM STACK:
    - Selected: ${state.selectedSystems.join(', ')}
    `;

    return ai.chats.create({
        model: 'gemini-3-flash-preview',
        config: {
            systemInstruction: `You are the Sun AI Agency Global Assistant. 
            Your goal is to help the founder/operator execute their AI strategy.
            
            ${contextString}
            
            GUIDELINES:
            1. Be concise, professional, and industry-aware.
            2. Reference the client's specific context (e.g. "Since you are in Real Estate...").
            3. If asked about tasks, refer to the current Strategy Phase.
            4. If the user asks to "Do" something (write email, analyze data), draft it for them.
            `
        }
    });
};

export const sendAgentMessage = async (chat: Chat | null, message: string): Promise<string> => {
    if (!chat) {
        await delay(1000);
        return "I'm in demo mode (No API Key). I can help you understand your strategy once connected.";
    }
    try {
        const result = await chat.sendMessage({ message });
        return result.text || "I processed that but couldn't generate a text response.";
    } catch (e) {
        console.error("Chat Error:", e);
        return "I encountered a connection error. Please try again.";
    }
};
