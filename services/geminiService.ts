
import { GoogleGenAI } from "@google/genai";

export const analyzeText = async (prompt: string, task: string) => {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
  
  const systemInstructions = {
    verifier: "Você é um especialista em fact-checking. Analise o texto fornecido e determine a veracidade, citando possíveis vieses e fontes confiáveis para verificação.",
    translator: "Você é um tradutor diplomático de elite. Traduza o discurso fornecido mantendo o tom original, as nuances culturais e a intenção do orador. Identifique termos-chave.",
    proposals: "Você é um analista de políticas públicas e contratos. Analise a proposta fornecida, destacando pontos positivos, riscos ocultos e impacto potencial de longo prazo."
  };

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: prompt,
      config: {
        systemInstruction: systemInstructions[task as keyof typeof systemInstructions] || "Você é um assistente de análise inteligente.",
        temperature: 0.7,
      },
    });

    return response.text;
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Ocorreu um erro ao processar sua solicitação. Verifique sua conexão ou tente novamente mais tarde.";
  }
};
