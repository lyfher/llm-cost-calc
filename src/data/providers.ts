// Prices in USD per 1,000,000 tokens
// Last updated: April 2026 — verify at each provider's pricing page

export type UseCase =
  | "coding"
  | "writing"
  | "research"
  | "social"
  | "cheap"
  | "fast"
  | "long-context"
  | "reasoning"
  | "everyday"

export interface Model {
  id: string
  name: string
  inputPer1M: number
  outputPer1M: number
  contextWindow: string
  tags: UseCase[]        // what this model is best at
  bestFor: string        // one-line human description
  badge?: string         // optional highlight label e.g. "Best for coding"
}

export interface Provider {
  id: string
  name: string
  color: string
  signupUrl: string
  docsUrl: string
  models: Model[]
}

export const providers: Provider[] = [
  {
    id: "openai",
    name: "OpenAI",
    color: "#10a37f",
    signupUrl: "https://platform.openai.com/signup",
    docsUrl: "https://openai.com/api/pricing",
    models: [
      {
        id: "gpt-4o",
        name: "GPT-4o",
        inputPer1M: 2.50,
        outputPer1M: 10.00,
        contextWindow: "128K",
        tags: ["writing", "everyday", "coding"],
        bestFor: "Tareas cotidianas, redacción y asistente general",
        badge: "Mejor para uso diario",
      },
      {
        id: "gpt-4o-mini",
        name: "GPT-4o mini",
        inputPer1M: 0.15,
        outputPer1M: 0.60,
        contextWindow: "128K",
        tags: ["cheap", "everyday", "fast"],
        bestFor: "Automatizaciones simples y chatbots de bajo costo",
      },
      {
        id: "o3",
        name: "o3",
        inputPer1M: 10.00,
        outputPer1M: 40.00,
        contextWindow: "200K",
        tags: ["reasoning", "research"],
        bestFor: "Razonamiento complejo, matemáticas y ciencia",
      },
      {
        id: "o4-mini",
        name: "o4-mini",
        inputPer1M: 1.10,
        outputPer1M: 4.40,
        contextWindow: "200K",
        tags: ["reasoning", "coding", "cheap"],
        bestFor: "Razonamiento avanzado a precio accesible",
      },
    ],
  },
  {
    id: "anthropic",
    name: "Anthropic",
    color: "#c96442",
    signupUrl: "https://console.anthropic.com",
    docsUrl: "https://www.anthropic.com/pricing",
    models: [
      {
        id: "claude-opus-4",
        name: "Claude Opus 4",
        inputPer1M: 15.00,
        outputPer1M: 75.00,
        contextWindow: "200K",
        tags: ["coding", "reasoning", "research", "writing"],
        bestFor: "Proyectos de código complejos y análisis profundo",
      },
      {
        id: "claude-sonnet-4",
        name: "Claude Sonnet 4",
        inputPer1M: 3.00,
        outputPer1M: 15.00,
        contextWindow: "200K",
        tags: ["coding", "writing", "reasoning"],
        bestFor: "Programación, análisis y redacción de alta calidad",
        badge: "Mejor para programar",
      },
      {
        id: "claude-haiku-4",
        name: "Claude Haiku 4",
        inputPer1M: 0.80,
        outputPer1M: 4.00,
        contextWindow: "200K",
        tags: ["cheap", "fast", "coding"],
        bestFor: "Automatización de código a bajo costo y alta velocidad",
      },
    ],
  },
  {
    id: "google",
    name: "Google",
    color: "#4285f4",
    signupUrl: "https://aistudio.google.com",
    docsUrl: "https://ai.google.dev/pricing",
    models: [
      {
        id: "gemini-2.5-pro",
        name: "Gemini 2.5 Pro",
        inputPer1M: 1.25,
        outputPer1M: 10.00,
        contextWindow: "1M",
        tags: ["long-context", "research", "reasoning"],
        bestFor: "Analizar documentos largos, PDFs y bases de código enteras",
        badge: "Mayor contexto (1M tokens)",
      },
      {
        id: "gemini-2.0-flash",
        name: "Gemini 2.0 Flash",
        inputPer1M: 0.075,
        outputPer1M: 0.30,
        contextWindow: "1M",
        tags: ["cheap", "fast", "everyday"],
        bestFor: "Respuestas rápidas y baratas con contexto enorme",
        badge: "Mejor precio/velocidad",
      },
      {
        id: "gemini-1.5-flash",
        name: "Gemini 1.5 Flash",
        inputPer1M: 0.075,
        outputPer1M: 0.30,
        contextWindow: "1M",
        tags: ["cheap", "fast"],
        bestFor: "Alternativa estable y económica de Google",
      },
    ],
  },
  {
    id: "xai",
    name: "xAI",
    color: "#ffffff",
    signupUrl: "https://console.x.ai",
    docsUrl: "https://docs.x.ai/docs/models",
    models: [
      {
        id: "grok-3",
        name: "Grok 3",
        inputPer1M: 3.00,
        outputPer1M: 15.00,
        contextWindow: "131K",
        tags: ["social", "research", "everyday", "reasoning"],
        bestFor: "Análisis de tendencias, noticias y contexto de X/Twitter",
        badge: "Mejor para redes sociales",
      },
      {
        id: "grok-3-mini",
        name: "Grok 3 Mini",
        inputPer1M: 0.30,
        outputPer1M: 0.50,
        contextWindow: "131K",
        tags: ["cheap", "fast", "social"],
        bestFor: "Consultas rápidas con conocimiento del ecosistema X",
      },
    ],
  },
  {
    id: "mistral",
    name: "Mistral",
    color: "#f7531d",
    signupUrl: "https://console.mistral.ai",
    docsUrl: "https://mistral.ai/technology/#pricing",
    models: [
      {
        id: "mistral-large",
        name: "Mistral Large",
        inputPer1M: 2.00,
        outputPer1M: 6.00,
        contextWindow: "128K",
        tags: ["writing", "coding", "research"],
        bestFor: "Alternativa europea potente para coding y redacción",
      },
      {
        id: "mistral-small",
        name: "Mistral Small",
        inputPer1M: 0.20,
        outputPer1M: 0.60,
        contextWindow: "32K",
        tags: ["cheap", "everyday"],
        bestFor: "Tareas simples con privacidad (puede correr local)",
      },
      {
        id: "mistral-nemo",
        name: "Mistral Nemo",
        inputPer1M: 0.15,
        outputPer1M: 0.15,
        contextWindow: "128K",
        tags: ["cheap", "fast"],
        bestFor: "El modelo más barato de Mistral, ideal para volumen alto",
      },
    ],
  },
  {
    id: "groq",
    name: "Groq",
    color: "#f55036",
    signupUrl: "https://console.groq.com",
    docsUrl: "https://groq.com/pricing",
    models: [
      {
        id: "llama-3.3-70b",
        name: "Llama 3.3 70B",
        inputPer1M: 0.59,
        outputPer1M: 0.79,
        contextWindow: "128K",
        tags: ["fast", "cheap", "everyday"],
        bestFor: "Velocidad extrema — respuestas en milisegundos",
        badge: "Más rápido del mercado",
      },
      {
        id: "llama-3.1-8b",
        name: "Llama 3.1 8B",
        inputPer1M: 0.05,
        outputPer1M: 0.08,
        contextWindow: "128K",
        tags: ["cheap", "fast"],
        bestFor: "El modelo más barato disponible para alto volumen",
      },
      {
        id: "gemma2-9b",
        name: "Gemma 2 9B",
        inputPer1M: 0.20,
        outputPer1M: 0.20,
        contextWindow: "8K",
        tags: ["cheap", "fast"],
        bestFor: "Modelo ligero de Google corriendo en hardware de Groq",
      },
    ],
  },
]

export function calcMonthlyCost(
  inputTokens: number,
  outputTokens: number,
  model: Model,
): number {
  return (
    (inputTokens / 1_000_000) * model.inputPer1M +
    (outputTokens / 1_000_000) * model.outputPer1M
  )
}

export const USE_CASES: { id: UseCase; label: string; emoji: string; description: string }[] = [
  { id: "coding",       label: "Programar",       emoji: "💻", description: "Escribir, revisar y depurar código" },
  { id: "everyday",     label: "Uso diario",       emoji: "☀️", description: "Preguntas, redacción y asistente general" },
  { id: "social",       label: "Redes sociales",   emoji: "🐦", description: "X/Twitter, tendencias y análisis de contenido" },
  { id: "research",     label: "Investigación",    emoji: "🔬", description: "Análisis profundo, papers y documentos largos" },
  { id: "writing",      label: "Redacción",        emoji: "✍️", description: "Emails, artículos y contenido creativo" },
  { id: "cheap",        label: "Económico",        emoji: "💸", description: "Bajo costo para proyectos con presupuesto ajustado" },
  { id: "fast",         label: "Velocidad",        emoji: "⚡", description: "Respuestas en tiempo real y baja latencia" },
  { id: "long-context", label: "Documentos largos",emoji: "📄", description: "Analizar libros, bases de código o PDFs completos" },
  { id: "reasoning",    label: "Razonamiento",     emoji: "🧠", description: "Matemáticas, lógica y problemas complejos" },
]
