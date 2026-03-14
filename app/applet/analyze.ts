import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

async function analyzeImage() {
  const response = await fetch('https://i.ibb.co/Rk6yQ82k/i543406.webp');
  const buffer = await response.arrayBuffer();
  const base64 = Buffer.from(buffer).toString('base64');

  const result = await ai.models.generateContent({
    model: 'gemini-3.1-pro-preview',
    contents: [
      {
        inlineData: {
          data: base64,
          mimeType: 'image/webp'
        }
      },
      "What is the exact text written on this image? What is the font style (e.g., cursive, sans-serif, serif)? What is the exact color of the text (in HEX)? Describe the text style."
    ]
  });

  console.log(result.text);
}

analyzeImage();
