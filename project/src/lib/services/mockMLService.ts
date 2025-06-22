// Mock ML service implementations
export const mockServices = {
  analyzeText(text: string) {
    const sentiment = Math.random() > 0.5 ? 'Positive' : 'Negative';
    const words = text.split(/\s+/);
    return {
      sentiment,
      keywords: words.slice(0, 3),
      language: 'English',
      wordCount: words.length
    };
  },

  analyzeImage(url: string) {
    return {
      objects: ['person', 'building', 'nature'],
      colors: ['blue', 'green'],
      tags: ['outdoor', 'daytime']
    };
  },

  parseLogs(logs: string) {
    return logs.split('\n').map(line => ({
      timestamp: new Date().toISOString(),
      level: 'INFO',
      message: line
    }));
  },

  moderateContent(content: string) {
    return {
      inappropriate: Math.random() > 0.8,
      spam: Math.random() > 0.9,
      harmful: Math.random() > 0.95,
      sensitive: Math.random() > 0.7
    };
  },

  chatResponse(message: string) {
    const responses = [
      "I understand your question about " + message.slice(0, 20) + "...",
      "That's an interesting point about " + message.slice(0, 20) + "...",
      "Let me help you with " + message.slice(0, 20) + "..."
    ];
    return responses[Math.floor(Math.random() * responses.length)];
  }
};