import { Type } from "@google/genai";
import { ai, hasApiKey, delay } from "./client";

export const analyzeBusinessDescription = async (description: string, url: string) => {
  if (!hasApiKey) {
    console.warn("No API Key provided. Returning mock data.");
    await delay(1500);
    return {
      industry: "Startups & SaaS",
      model: "B2B SaaS",
      services: ["Software Development", "Consulting"],
      maturity: "Medium",
      searchFindings: [
        "Website title suggests Enterprise Solutions",
        "Competitors identified in the CRM space",
        "Recent blog posts focus on AI integration"
      ]
    };
  }

  try {
    // We use gemini-3-pro-preview because it supports tools (search) better for deep reasoning
    const response = await ai.models.generateContent({
      model: 'gemini-3-pro-preview', 
      contents: `
        Analyze this business. 
        User Description: "${description}"
        Website URL: "${url}"

        1. Use Google Search to research the provided URL (if valid) to understand the company's actual offerings, target audience, and industry position.
        2. Infer the Industry, Business Model, and Key Services.
        3. Determine their likely digital maturity based on their web presence.
        4. Provide 3 short "Search Findings" - specific facts found on the web about this entity or its sector.

        Return JSON.
      `,
      config: {
        tools: [{ googleSearch: {} }], // Enable Deep Search Grounding
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            industry: { type: Type.STRING },
            model: { type: Type.STRING },
            services: { type: Type.ARRAY, items: { type: Type.STRING } },
            maturity: { type: Type.STRING },
            searchFindings: { type: Type.ARRAY, items: { type: Type.STRING } }
          }
        }
      }
    });
    
    return JSON.parse(response.text || '{}');
  } catch (error) {
    console.error("Gemini Analysis Error:", error);
    return {
      industry: "Unknown",
      model: "Unknown",
      services: [],
      maturity: "Unknown",
      searchFindings: ["Search unavailable"]
    };
  }
};
