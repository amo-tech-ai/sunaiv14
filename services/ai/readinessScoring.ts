import { Type } from "@google/genai";
import { BusinessContext, ReadinessAnalysis } from "../../types";
import { ai, hasApiKey, delay } from "./client";

export const calculateReadinessScore = async (
    context: BusinessContext, 
    answers: Record<string, string>, 
    selectedSystems: string[]
): Promise<ReadinessAnalysis> => {
    if (!hasApiKey) {
        console.warn("No API Key provided. Returning mock readiness score.");
        await delay(2500);
        return {
            overallScore: 65,
            categoryBreakdown: [
                { category: "Digital Presence", score: 80 },
                { category: "Operations Automation", score: 45 },
                { category: "Data Maturity", score: 60 }
            ],
            criticalGaps: [
                "Manual data entry between Sales and Finance",
                "Lack of centralized customer knowledge base",
                "Inconsistent lead follow-up process"
            ],
            quickWins: [
                "Integrate CRM with email marketing tools",
                "Set up automated invoice reminders",
                "Create a shared FAQ document"
            ],
            projectedImpact: "Closing these gaps could increase operational efficiency by 30% within 3 months."
        };
    }

    try {
        const response = await ai.models.generateContent({
            model: 'gemini-3-flash-preview', 
            contents: `
                Act as a Digital Transformation Consultant. Calculate an AI Readiness Score (0-100) for this business.
                
                Context:
                Industry: ${context.industry}
                Description: ${context.description}
                Search Findings (Audit Source): ${JSON.stringify(context.searchFindings)}
                Operational Answers (Self-Reported): ${JSON.stringify(answers)}
                Selected Systems: ${selectedSystems.join(', ')}

                CORE TASK: Perform a "Tech Stack Audit" based on the Search Findings and Self-Reported answers, then calculate a readiness score.

                SCORING LOGIC (Audit Rules):
                1. **Digital Presence Score**:
                   - LOOK FOR: Modern website framework (React/Next.js/Shopify), SEO tags, Mobile responsiveness.
                   - PENALIZE IF: "Old copyright year", "Broken links", "No SSL", "Basic HTML/Wordpress template".
                   - BOOST IF: "Active Blog/Resources", "API Documentation", "Client Portal login".

                2. **Data Maturity Score**:
                   - LOOK FOR: Tracking pixels (Meta/Google), Analytics tags, CRM references.
                   - PENALIZE IF: Industry is E-commerce but "No Analytics Pixel found".
                   - PENALIZE IF: Industry is B2B but "No Lead Capture forms" or "PDF-only forms".

                3. **Operations Automation Score**:
                   - LOOK FOR: Scheduling tools (Calendly), Chatbots (Intercom/Drift), Automated checkout.
                   - COMPARE: Does the user's "Operational Answers" match the "Search Findings"? If user claims high automation but site looks static, reduce score (Verification Gap).

                OUTPUT REQUIREMENTS:
                1. Calculate 'overallScore' (0-100).
                2. Provide 'categoryBreakdown' for: "Digital Presence", "Data Maturity", "Operations Automation".
                3. In 'criticalGaps', explicitly mention missing technology detected in the audit (e.g., "Missing analytics tracking", "Manual lead intake").
                4. In 'quickWins', suggest immediate actions using the 'Selected Systems' (${selectedSystems.join(', ')}).
                5. 'projectedImpact': A one-sentence summary of potential ROI.
            `,
            config: {
                responseMimeType: "application/json",
                responseSchema: {
                    type: Type.OBJECT,
                    properties: {
                        overallScore: { type: Type.INTEGER },
                        categoryBreakdown: { 
                            type: Type.ARRAY,
                            items: {
                                type: Type.OBJECT,
                                properties: {
                                    category: { type: Type.STRING },
                                    score: { type: Type.INTEGER }
                                }
                            }
                        },
                        criticalGaps: { type: Type.ARRAY, items: { type: Type.STRING } },
                        quickWins: { type: Type.ARRAY, items: { type: Type.STRING } },
                        projectedImpact: { type: Type.STRING }
                    }
                }
            }
        });

        return JSON.parse(response.text || '{}');
    } catch (error) {
        console.error("Gemini Readiness Error:", error);
        return {
            overallScore: 0,
            categoryBreakdown: [],
            criticalGaps: ["Error calculating score"],
            quickWins: [],
            projectedImpact: "Analysis unavailable"
        };
    }
};