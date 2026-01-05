
import { GoogleGenAI } from "@google/genai";

// Helper to safely get the API key in both Vite (browser) and Node environments
// This implementation avoids "process is not defined" and "import.meta syntax error"
const getApiKey = (): string => {
  let key = '';

  // 1. Try Vite's import.meta.env
  try {
    // @ts-ignore
    if (import.meta && import.meta.env && import.meta.env.VITE_API_KEY) {
      // @ts-ignore
      key = import.meta.env.VITE_API_KEY;
    }
  } catch (e) {
    // Ignore
  }

  if (key) return key;

  // 2. Try Node's process.env safely
  try {
    // @ts-ignore
    if (typeof process !== 'undefined' && process && process.env && process.env.API_KEY) {
      // @ts-ignore
      key = process.env.API_KEY;
    }
  } catch (e) {
    // Ignore
  }

  return key;
};

const apiKey = getApiKey();

// Initialize the client. If no key is found, use a dummy key to prevent immediate instantiation crashes.
export const ai = new GoogleGenAI({ apiKey: apiKey || 'dummy-key' });

export const hasApiKey = !!apiKey && apiKey !== 'dummy-key';

export const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));
