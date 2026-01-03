import { GoogleGenAI } from "@google/genai";

const apiKey = process.env.API_KEY || ''; 

// We permit the app to load even if the key is missing, allowing for "Demo Mode" with mock data.
// The hasApiKey check should be used by services before making calls.
export const ai = new GoogleGenAI({ apiKey: apiKey || 'dummy-key' });

export const hasApiKey = !!apiKey && apiKey !== 'dummy-key';

export const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));