import { Type } from "@google/genai";
import { BusinessContext, Question } from "../../types";
import { ai, hasApiKey, delay } from "./client";

export const generateIndustryQuestions = async (context: BusinessContext): Promise<Question[]> => {
    if (!hasApiKey) {
        console.warn("No API Key provided. Returning mock questions.");
        await delay(1500);
        return [
            {
                id: "q1",
                category: "Business",
                text: "What slows down your revenue growth the most right now?",
                type: "radio",
                options: ["Getting enough leads", "Closing deals quickly", "Keeping existing customers", "Setting the right prices"],
                whyThisMatters: "Identifying your main roadblock helps us focus on the one fix that yields the biggest return.",
                industryBenchmark: "60% of similar companies struggle most with closing speed."
            },
            {
                id: "q2",
                category: "AI_Feature",
                text: "Which daily task would you love to automate first?",
                type: "radio",
                options: ["Answering customer emails", "Analyzing sales data", "Creating marketing content", "Writing/Reviewing code"],
                whyThisMatters: "We want to give you back time immediately by automating repetitive work.",
                industryBenchmark: "Support automation typically cuts response times by 70%."
            }
        ];
    }

    try {
        const response = await ai.models.generateContent({
            model: 'gemini-3-flash-preview',
            contents: `
            Context Analysis:
            Industry: ${context.industry}
            Model: ${context.inferredModel}
            Description: ${context.description}
            Search Findings: ${JSON.stringify(context.searchFindings)}

            Task: Act as a Senior Industry Consultant. Generate 4 deep-dive questions to understand this specific business better.

            USER EXPERIENCE RULES (CRITICAL):
            1. **Simple Language**: The user is a business owner, not necessarily a tech expert. Avoid jargon. Use plain English.
            2. **Clear Value**: Instead of "What is your churn rate?", ask "How often do you lose customers?".
            3. **Educational**: In 'whyThisMatters', explain the benefit clearly (e.g., "This helps us save you 10 hours a week").
            4. **Friendly Tone**: Be professional but approachable.

            Target Verticals Logic:
            - If Startups & SaaS: Focus on speed to market, getting users, and technical debt.
            - If Agencies & Consulting: Focus on billable hours, finding clients, and writing proposals.
            - If Real Estate: Focus on managing listings, showing properties, and qualifying leads.
            - If E-commerce & Retail: Focus on inventory, returns, and customer questions.
            - If Fashion & Luxury: Focus on visual trends, brand image, and social media reach.
            - If Travel & Hospitality: Focus on booking ease, itinerary planning, and guest experience.
            - If Professional Services: Focus on compliance, document handling, and client trust.

            REQUIREMENTS:
            1. Use the Context and Search Findings to be hyper-specific to *their* business.
            2. Split questions exactly 50/50 between:
               - "Business": Revenue drivers, operational headaches, market position.
               - "AI_Feature": Specific opportunities for automation (phrased as benefits, not just tech names).
            3. "whyThisMatters" should explain the strategic value simply.
            4. "industryBenchmark" should provide a realistic statistic or standard.
            
            Return JSON.
            `,
            config: {
                responseMimeType: "application/json",
                responseSchema: {
                    type: Type.ARRAY,
                    items: {
                        type: Type.OBJECT,
                        properties: {
                            id: { type: Type.STRING },
                            category: { type: Type.STRING, enum: ["Business", "AI_Feature"] },
                            text: { type: Type.STRING },
                            type: { type: Type.STRING, enum: ["radio", "checkbox"] },
                            options: { type: Type.ARRAY, items: { type: Type.STRING } },
                            whyThisMatters: { type: Type.STRING },
                            industryBenchmark: { type: Type.STRING }
                        }
                    }
                }
            }
        });

        return JSON.parse(response.text || '[]');
    } catch (error) {
        console.error("Gemini Question Gen Error:", error);
        return [];
    }
};
