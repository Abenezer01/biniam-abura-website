import { GoogleGenAI } from "@google/genai";

// Initialize the API client
// Note: In a real production app, ensure strict error handling if key is missing.
const apiKey = process.env.API_KEY || '';
const ai = new GoogleGenAI({ apiKey });

export const askBiniamAI = async (
  question: string, 
  contextData: string
): Promise<string> => {
  if (!apiKey) {
    return "I apologize, but I am currently offline. Please contact the site administrator.";
  }

  try {
    const model = 'gemini-2.5-flash';
    
    const systemInstruction = `
      You are an AI assistant for the Ethiopian writer Biniam Abura. 
      Adopt a sophisticated, literary, yet modern and accessible tone.
      Use the following context about his books and articles to answer visitor questions.
      If the answer is not in the context, politely suggest checking the 'Contact' section.
      
      Context:
      ${contextData}
    `;

    const response = await ai.models.generateContent({
      model,
      contents: question,
      config: {
        systemInstruction,
        temperature: 0.7,
      }
    });

    return response.text || "I'm pondering that thought. Please ask again.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Something went wrong while consulting the digital archive. Please try again later.";
  }
};