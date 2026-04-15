// Prices in USD per 1,000,000 tokens
// Last updated: April 2026 — verify at each provider's pricing page

export interface Model {
  id: string;
  name: string;
  inputPer1M: number;
  outputPer1M: number;
  contextWindow: string;
}

export interface Provider {
  id: string;
  name: string;
  color: string; // hex color for UI accents
  signupUrl: string; // replace with your referral link when available
  docsUrl: string;
  models: Model[];
}

export const providers: Provider[] = [
  {
    id: "openai",
    name: "OpenAI",
    color: "#10a37f",
    signupUrl: "https://platform.openai.com/signup",
    docsUrl: "https://openai.com/api/pricing",
    models: [
      { id: "gpt-4o",       name: "GPT-4o",       inputPer1M: 2.50,  outputPer1M: 10.00, contextWindow: "128K" },
      { id: "gpt-4o-mini",  name: "GPT-4o mini",  inputPer1M: 0.15,  outputPer1M: 0.60,  contextWindow: "128K" },
      { id: "o3",           name: "o3",            inputPer1M: 10.00, outputPer1M: 40.00, contextWindow: "200K" },
      { id: "o4-mini",      name: "o4-mini",       inputPer1M: 1.10,  outputPer1M: 4.40,  contextWindow: "200K" },
    ],
  },
  {
    id: "anthropic",
    name: "Anthropic",
    color: "#c96442",
    signupUrl: "https://console.anthropic.com",
    docsUrl: "https://www.anthropic.com/pricing",
    models: [
      { id: "claude-opus-4",    name: "Claude Opus 4",    inputPer1M: 15.00, outputPer1M: 75.00, contextWindow: "200K" },
      { id: "claude-sonnet-4",  name: "Claude Sonnet 4",  inputPer1M: 3.00,  outputPer1M: 15.00, contextWindow: "200K" },
      { id: "claude-haiku-4",   name: "Claude Haiku 4",   inputPer1M: 0.80,  outputPer1M: 4.00,  contextWindow: "200K" },
    ],
  },
  {
    id: "google",
    name: "Google",
    color: "#4285f4",
    signupUrl: "https://aistudio.google.com",
    docsUrl: "https://ai.google.dev/pricing",
    models: [
      { id: "gemini-2.5-pro",   name: "Gemini 2.5 Pro",   inputPer1M: 1.25,  outputPer1M: 10.00, contextWindow: "1M" },
      { id: "gemini-2.0-flash", name: "Gemini 2.0 Flash",  inputPer1M: 0.075, outputPer1M: 0.30,  contextWindow: "1M" },
      { id: "gemini-1.5-flash", name: "Gemini 1.5 Flash",  inputPer1M: 0.075, outputPer1M: 0.30,  contextWindow: "1M" },
    ],
  },
  {
    id: "mistral",
    name: "Mistral",
    color: "#f7531d",
    signupUrl: "https://console.mistral.ai",
    docsUrl: "https://mistral.ai/technology/#pricing",
    models: [
      { id: "mistral-large",  name: "Mistral Large",  inputPer1M: 2.00, outputPer1M: 6.00, contextWindow: "128K" },
      { id: "mistral-small",  name: "Mistral Small",  inputPer1M: 0.20, outputPer1M: 0.60, contextWindow: "32K" },
      { id: "mistral-nemo",   name: "Mistral Nemo",   inputPer1M: 0.15, outputPer1M: 0.15, contextWindow: "128K" },
    ],
  },
  {
    id: "groq",
    name: "Groq",
    color: "#f55036",
    signupUrl: "https://console.groq.com",
    docsUrl: "https://groq.com/pricing",
    models: [
      { id: "llama-3.3-70b",  name: "Llama 3.3 70B",  inputPer1M: 0.59, outputPer1M: 0.79, contextWindow: "128K" },
      { id: "llama-3.1-8b",   name: "Llama 3.1 8B",   inputPer1M: 0.05, outputPer1M: 0.08, contextWindow: "128K" },
      { id: "gemma2-9b",      name: "Gemma 2 9B",     inputPer1M: 0.20, outputPer1M: 0.20, contextWindow: "8K"   },
    ],
  },
];

export function calcMonthlyCost(
  inputTokens: number,
  outputTokens: number,
  model: Model
): number {
  return (inputTokens / 1_000_000) * model.inputPer1M +
         (outputTokens / 1_000_000) * model.outputPer1M;
}
