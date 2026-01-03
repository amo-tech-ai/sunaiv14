import { Type } from "@google/genai";
import { BusinessContext, ReadinessAnalysis, Strategy } from "../../types";
import { ai, hasApiKey, delay } from "./client";

export const generateStrategy = async (
    context: BusinessContext,
    selectedSystems: string[],
    readiness: ReadinessAnalysis | null
): Promise<Strategy> => {
    if (!hasApiKey) {
        console.warn("No API Key provided. Returning mock strategy.");
        await delay(3000);
        return {
            phases: [
                {
                    phaseName: "Phase 1: Foundation & Data",
                    timeline: "Weeks 1-4",
                    objective: "Establish single source of truth and basic automation.",
                    steps: ["Migrate customer data to CRM", "Standardize tagging taxonomy", "Connect website forms to lead database"]
                },
                {
                    phaseName: "Phase 2: Workflow Automation",
                    timeline: "Weeks 5-8",
                    objective: "Reduce manual operational load by 40%.",
                    steps: ["Automate email follow-up sequences", "Implement project status alerts", "Set up financial dashboard reporting"]
                },
                {
                    phaseName: "Phase 3: Intelligence Scaling",
                    timeline: "Weeks 9-12",
                    objective: "Leverage AI for predictive insights.",
                    steps: ["Deploy chatbot for L1 support", "Enable predictive lead scoring", "Train custom knowledge base agent"]
                }
            ],
            risks: [
                "Team adoption resistance if training is insufficient.",
                "Data quality issues from legacy spreadsheets.",
                "Scope creep during Phase 2 implementation."
            ],
            agentAllocation: [
                { agentName: "Orchestrator", task: "Monitor cross-system data integrity" },
                { agentName: "Analyst", task: "Weekly KPI reporting and gap detection" },
                { agentName: "Assistant", task: "Staff Q&A for new processes" }
            ]
        };
    }

    try {
        const response = await ai.models.generateContent({
            model: 'gemini-3-flash-preview',
            contents: `
                Act as a Strategic AI Consultant. Generate a 3-Phase Execution Roadmap for a client.
                
                Client Context:
                Industry: ${context.industry}
                Selected Systems: ${selectedSystems.join(', ')}
                Readiness Gaps: ${readiness?.criticalGaps.join(', ') || 'None specified'}

                Task:
                1. Create 3 distinct implementation phases (Foundation, Automation, Scaling).
                2. Identify top 3 risks to success.
                3. Allocate Nexus AI Agents (Orchestrator, Analyst, Assistant) to specific roles in this plan.

                Structure the output strictly as JSON.
            `,
            config: {
                responseMimeType: "application/json",
                responseSchema: {
                    type: Type.OBJECT,
                    properties: {
                        phases: {
                            type: Type.ARRAY,
                            items: {
                                type: Type.OBJECT,
                                properties: {
                                    phaseName: { type: Type.STRING },
                                    timeline: { type: Type.STRING },
                                    objective: { type: Type.STRING },
                                    steps: { type: Type.ARRAY, items: { type: Type.STRING } }
                                }
                            }
                        },
                        risks: { type: Type.ARRAY, items: { type: Type.STRING } },
                        agentAllocation: {
                            type: Type.ARRAY,
                            items: {
                                type: Type.OBJECT,
                                properties: {
                                    agentName: { type: Type.STRING },
                                    task: { type: Type.STRING }
                                }
                            }
                        }
                    }
                }
            }
        });

        return JSON.parse(response.text || '{}');
    } catch (error) {
        console.error("Gemini Strategy Error:", error);
        return { phases: [], risks: ["Strategy generation failed"], agentAllocation: [] };
    }
};
