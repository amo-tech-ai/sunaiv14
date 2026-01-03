import { Type } from "@google/genai";
import { BusinessContext, SystemRecommendation } from "../../types";
import { ai, hasApiKey, delay } from "./client";

export const recommendSystems = async (context: BusinessContext, answers: Record<string, string>): Promise<SystemRecommendation> => {
    // These IDs must match AVAILABLE_SYSTEMS in WizardStep3.tsx
    const validSystems = [
        'ai_dashboards', 'ai_chat_assistants', 'automation_systems', 'ai_crm', 
        'internal_ops', 'knowledge_base', 'comm_social', 'data_infra'
    ];

    if (!hasApiKey) {
        console.warn("No API Key provided. Returning mock recommendations.");
        await delay(2000);
        return {
            recommendedIds: ['ai_crm', 'automation_systems', 'ai_dashboards'],
            reasoning: "Based on your focus on scaling sales, a CRM is critical. Marketing automation will support your lead generation, and Analytics will track your conversion rates."
        };
    }

    try {
        const response = await ai.models.generateContent({
            model: 'gemini-3-flash-preview',
            contents: `
                Act as a Senior AI Solutions Architect.
                Recommend the optimal 3-system stack for a client based on their context.

                Context:
                - Industry: ${context.industry}
                - Business Model: ${context.inferredModel}
                - Digital Maturity: ${context.digitalMaturity || 'Unknown'}
                - Deep Search Findings: ${JSON.stringify(context.searchFindings)}
                - Deep Dive Answers: ${JSON.stringify(answers)}

                Available Systems (Choose exactly 3 IDs):
                - ai_dashboards: Business Intelligence & Analytics
                - ai_chat_assistants: Customer & Internal Chatbots
                - automation_systems: Workflow Automation (Zapier/Make)
                - ai_crm: AI-Enhanced CRM (Salesforce, HubSpot)
                - internal_ops: Internal Ops Tools (Notion, Linear)
                - knowledge_base: Knowledge Bases & Training Data
                - comm_social: Communication & Social Media
                - data_infra: Data Warehousing & APIs

                Reasoning Logic:
                1. Analyze Digital Maturity:
                   - If Maturity is "Low" or "Nascent": Prioritize high-visibility, low-code wins. Favor 'ai_chat_assistants' (immediate support relief) and 'automation_systems' (time savings) or 'comm_social'. Avoid complex 'data_infra'.
                   - If Maturity is "High" or "Advanced": Prioritize data leverage and scale. Favor 'data_infra', 'ai_dashboards', and 'ai_crm'.
                
                2. Analyze Search Findings:
                   - If findings mention "high volume support" -> 'ai_chat_assistants' + 'knowledge_base'.
                   - If findings mention "scaling team" or "remote" -> 'internal_ops'.
                   - If findings mention "social growth" -> 'comm_social'.

                3. Analyze Industry:
                   - Fashion/Retail -> 'comm_social' + 'ai_chat_assistants'.
                   - SaaS/B2B -> 'ai_crm' + 'ai_dashboards'.
                   - Real Estate -> 'ai_crm' + 'automation_systems'.

                4. Cohesion: Ensure the selected systems form a logical stack (e.g. CRM + Automation + Communication).

                Output Requirements:
                - Return JSON with 'recommendedIds' (array of 3 strings) and 'reasoning' (string).
                - The reasoning MUST explicitly reference the 'Digital Maturity' level and how it influenced the decision.
            `,
            config: {
                responseMimeType: "application/json",
                responseSchema: {
                    type: Type.OBJECT,
                    properties: {
                        recommendedIds: { 
                            type: Type.ARRAY, 
                            items: { type: Type.STRING } 
                        },
                        reasoning: { type: Type.STRING }
                    }
                }
            }
        });

        return JSON.parse(response.text || '{"recommendedIds": [], "reasoning": ""}');
    } catch (error) {
        console.error("Gemini System Rec Error:", error);
        return { recommendedIds: [], reasoning: "AI Service unavailable." };
    }
};