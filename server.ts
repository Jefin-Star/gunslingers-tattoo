import express from 'express';
import { createServer as createViteServer } from 'vite';
import { GoogleGenAI, Type } from '@google/genai';
import dotenv from 'dotenv';
import path from 'path';

dotenv.config();

const app = express();
const PORT = 3000;

// Body parser for JSON with image base64
app.use(express.json({ limit: '25mb' }));

// Server-side Gemini initialization following gemini-api skill
const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
  httpOptions: {
    headers: {
      'User-Agent': 'aistudio-build',
    },
  },
});

// AI Vision Tattoo Analysis API Endpoint
app.post('/api/analyze-tattoo', async (req, res) => {
  try {
    const { imageBase64, mimeType = 'image/jpeg' } = req.body;

    if (!imageBase64) {
      return res.status(400).json({ error: 'Image base64 data is required.' });
    }

    // Clean base64 string if data URL prefix was sent
    const cleanBase64 = imageBase64.replace(/^data:image\/[a-z]+;base64,/, '');

    const systemInstruction = `You are a master tattoo artist and art curator at GUNSLINGERS TATTOO SCHOOL & STUDIO in Kochi, Kerala. 
Analyze the uploaded tattoo image with deep technical precision.
Identify:
1. Tattoo Style (e.g., Fine Line, Black & Grey Realism, Botanical Dotwork, Dark Ornamental, Japanese Neo-Traditional, Color Realism, Hand Poke, Laser Removal Before/After, Sacred Geometry).
2. Content / Subject Matter (primary motif, symbols, secondary elements).
3. Technical Execution Details (linework gauge, needle depth/shading, greywash gradients, contrast, anatomy placement, healing stage).
4. Descriptive Tags (3-6 punchy keywords like #FineLine, #BlackAndGrey, #Realism, #AnatomyFit).
5. Engaging Editorial Caption (2-3 sophisticated, poetic sentences describing the artistic mastery, story, and craft).
6. Estimated Session Time & Complexity Assessment.`;

    const response = await ai.models.generateContent({
      model: 'gemini-3.8-flash',
      contents: [
        {
          inlineData: {
            mimeType,
            data: cleanBase64,
          },
        },
        {
          text: 'Analyze this tattoo artwork thoroughly. Return the response strictly as structured JSON conforming to the schema.',
        },
      ],
      config: {
        systemInstruction,
        responseMimeType: 'application/json',
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            title: {
              type: Type.STRING,
              description: 'A stylish, elegant title for the tattoo piece',
            },
            style: {
              type: Type.STRING,
              description: 'The primary tattoo art style or technique',
            },
            contentSubject: {
              type: Type.STRING,
              description: 'The core subject and symbolic imagery identified in the artwork',
            },
            caption: {
              type: Type.STRING,
              description: 'An elegant, editorial caption describing the craft, shading, and narrative',
            },
            placement: {
              type: Type.STRING,
              description: 'Estimated anatomical placement (e.g., Outer Forearm, Clavicle, Tricep)',
            },
            complexity: {
              type: Type.STRING,
              description: 'Complexity grade: Minimalist / Intermediate / Masterclass / Multi-Session',
            },
            sessionEstimate: {
              type: Type.STRING,
              description: 'Approximate session time (e.g., 2.5 - 3.5 hrs)',
            },
            tags: {
              type: Type.ARRAY,
              items: { type: Type.STRING },
              description: '3 to 6 descriptive tags',
            },
          },
          required: ['title', 'style', 'contentSubject', 'caption', 'placement', 'tags'],
        },
      },
    });

    const parsed = JSON.parse(response.text || '{}');
    return res.json({ success: true, analysis: parsed });
  } catch (error: any) {
    console.error('Tattoo Vision AI Error:', error);
    return res.status(500).json({
      error: error.message || 'Failed to analyze tattoo image with Vision AI',
    });
  }
});

async function startServer() {
  const isProduction = process.env.NODE_ENV === 'production';

  if (!isProduction) {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    app.use(express.static(path.resolve(__dirname, 'dist')));
    app.get('*', (_req, res) => {
      res.sendFile(path.resolve(__dirname, 'dist', 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server listening on http://0.0.0.0:${PORT}`);
  });
}

startServer();
