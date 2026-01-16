
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || "" });

export const getPizzaRecommendation = async (mood: string, preferences: string): Promise<string> => {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `Sei un esperto pizzaiolo italiano di Pizza Split. Un cliente è di umore "${mood}" e preferisce "${preferences}". Suggerisci la pizza perfetta dal nostro menu immaginario o inventane una speciale sul momento spiegando il perché. Sii caloroso e invitante. Rispondi in italiano in massimo 300 caratteri.`,
    });

    return response.text || "Sembra che il nostro pizzaiolo sia un po' timido oggi. Ti consigliamo una classica Margherita!";
  } catch (error) {
    console.error("Error getting recommendation:", error);
    return "Non riusciamo a connetterci con il forno AI, ma una Margherita va sempre bene!";
  }
};
