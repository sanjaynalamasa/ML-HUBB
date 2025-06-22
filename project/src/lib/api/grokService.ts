import { askGrok } from './grokClient';
import { createAPIError } from '../utils/errorHandling';
import type { AnalysisResult, ModerationResult } from '../types/api';

export async function analyzeText(text: string): Promise<AnalysisResult> {
  try {
    const prompt = `Analyze this text and provide sentiment, keywords, and language: "${text}"`;
    const response = await askGrok(prompt);
    return parseAnalysisResponse(response.choices[0].message.content);
  } catch (error) {
    const apiError = createAPIError(error);
    return { error: apiError.message };
  }
}

export async function analyzeImage(url: string): Promise<string> {
  try {
    const prompt = `Analyze this image at ${url}. Describe what you see, including objects, colors, and scene.`;
    const response = await askGrok(prompt);
    return response.choices[0].message.content;
  } catch (error) {
    throw createAPIError(error);
  }
}

export async function parseLogs(logs: string): Promise<string> {
  try {
    const prompt = `Parse and analyze these logs, identify important patterns and issues:\n${logs}`;
    const response = await askGrok(prompt);
    return response.choices[0].message.content;
  } catch (error) {
    throw createAPIError(error);
  }
}

export async function chatCompletion(message: string): Promise<string> {
  try {
    const response = await askGrok(message);
    return response.choices[0].message.content;
  } catch (error) {
    throw createAPIError(error);
  }
}

export async function moderateContent(content: string): Promise<ModerationResult> {
  try {
    const prompt = `Analyze this content for moderation. Check for: inappropriate content, spam, harmful content, and sensitive topics. Format the response as JSON with boolean values:\n${content}`;
    const response = await askGrok(prompt);
    return parseModerationResponse(response.choices[0].message.content);
  } catch (error) {
    throw createAPIError(error);
  }
}

function parseAnalysisResponse(content: string): AnalysisResult {
  try {
    return {
      sentiment: content.match(/sentiment[:\s]+([^\n.,]+)/i)?.[1] || 'Unknown',
      keywords: content.match(/keywords?[:\s]+([^\n.]+)/i)?.[1]?.split(',').map(k => k.trim()) || [],
      language: content.match(/language[:\s]+([^\n.,]+)/i)?.[1] || 'Unknown'
    };
  } catch (error) {
    return { error: 'Failed to parse analysis response' };
  }
}

function parseModerationResponse(content: string): ModerationResult {
  try {
    const parsed = JSON.parse(content);
    return {
      inappropriate: Boolean(parsed.inappropriate),
      spam: Boolean(parsed.spam),
      harmful: Boolean(parsed.harmful),
      sensitive: Boolean(parsed.sensitive)
    };
  } catch {
    return {
      error: 'Failed to parse moderation response'
    };
  }
}