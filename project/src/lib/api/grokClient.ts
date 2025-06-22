import { GrokResponse } from '../types/api';

const GROK_API_KEY = import.meta.env.VITE_GROK_API_KEY;
const API_BASE_URL = 'https://api.groq.com/openai/v1';

interface GrokError {
  error: {
    message: string;
    type: string;
    code: string;
  };
}

export async function askGrok(prompt: string): Promise<GrokResponse> {
  if (!GROK_API_KEY) {
    throw new Error('Grok API key is not configured');
  }

  try {
    const response = await fetch(`${API_BASE_URL}/chat/completions`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${GROK_API_KEY}`
      },
      body: JSON.stringify({
        model: 'llama-3.3-70b-versatile', // Switching to llama model which doesn't require additional terms
        messages: [{ role: 'user', content: prompt }],
        temperature: 0.7,
        max_tokens: 1024
      })
    });

    const data = await response.json();

    if (!response.ok) {
      const error = data as GrokError;
      throw new Error(error.error?.message || `API Error: ${response.status}`);
    }

    return data as GrokResponse;
  } catch (error) {
    console.error('Grok API Error:', error);
    throw new Error(error instanceof Error ? error.message : 'Failed to connect to Grok API');
  }
}