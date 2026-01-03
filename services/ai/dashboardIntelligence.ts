import { Type } from "@google/genai";
import { BusinessContext, DashboardSelection, IntelligenceResponse } from "../../types";
import { ai, hasApiKey, delay } from "./client";

export const analyzeDashboardSelection = async (
    context: BusinessContext,
    selection: DashboardSelection
): Promise<IntelligenceResponse> => {
    if (!hasApiKey) {
        await delay(1000);
        return {
            agent: selection.type === 'system' ? 'Orchestrator' : 'Planner',
            status: 'Active',
            summary: `Analyzing ${selection.title} for ${context.companyName || 'your business'}.`,
            impact: "High strategic relevance based on current roadmap.",
            risks: ["Implementation bandwidth", "Data integration latency"],
            dependencies: ["CRM Access", "Admin Privileges"],
            next_actions: ["Review documentation", "Assign owner", "Schedule kickoff"],
            time_estimate: "2-3 days"
        };
    }

    try {
        const response = await ai.models.generateContent({
            model: 'gemini-3-flash-preview',
            contents: `
                ROLE:
                You are the Sun AI Intelligence Agent. You explain why the selected item matters, risks, dependencies, and next actions.

                CONTEXT:
                Client: ${context.companyName} (${context.industry})
                Selected Item Type: ${selection.type}
                Selected Item Title: ${selection.title}
                Metadata: ${JSON.stringify(selection.metadata || {})}

                RULES:
                - Output STRICT JSON only.
                - No extra text.
                - Keep items short and actionable.
                - Focus on business outcomes + implementation reality.
                - Status should be "Active" if it's a task being analyzed, "Monitoring" if it's a system.

                OUTPUT JSON SCHEMA:
                {
                  "agent": "Orchestrator | Planner | Scorer",
                  "status": "Monitoring | Active | Waiting",
                  "summary": "One sentence overview",
                  "impact": "Business value justification",
                  "risks": ["Risk 1", "Risk 2"],
                  "dependencies": ["Dep 1", "Dep 2"],
                  "next_actions": ["Action 1", "Action 2"],
                  "time_estimate": "e.g. 2 weeks"
                }
            `,
            config: {
                responseMimeType: "application/json",
                responseSchema: {
                    type: Type.OBJECT,
                    properties: {
                        agent: { type: Type.STRING },
                        status: { type: Type.STRING, enum: ["Monitoring", "Active", "Waiting"] },
                        summary: { type: Type.STRING },
                        impact: { type: Type.STRING },
                        risks: { type: Type.ARRAY, items: { type: Type.STRING } },
                        dependencies: { type: Type.ARRAY, items: { type: Type.STRING } },
                        next_actions: { type: Type.ARRAY, items: { type: Type.STRING } },
                        time_estimate: { type: Type.STRING }
                    }
                }
            }
        });

        return JSON.parse(response.text || '{}');
    } catch (error) {
        console.error("Dashboard Intelligence Error:", error);
        return {
            agent: "System",
            status: "Waiting",
            summary: "Intelligence service temporarily unavailable.",
            impact: "Unknown",
            risks: [],
            dependencies: [],
            next_actions: [],
            time_estimate: "N/A"
        };
    }
};