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

// ─── Consumer subscription plans ────────────────────────────────────────────

export interface ConsumerPlan {
  id: string
  name: string           // e.g. "Plus"
  price: number          // USD/month (0 = free)
  priceLabel: string     // e.g. "Gratis" | "$20/mes"
  features: string[]     // bullet points shown to user
  badge?: string         // e.g. "Más popular"
  highlight?: boolean
  signupUrl: string
}

export interface ConsumerProvider {
  id: string
  name: string
  color: string
  logoEmoji: string
  description: string    // one line: what this AI is best at for consumers
  tags: UseCase[]
  plans: ConsumerPlan[]
}

export const consumerProviders: ConsumerProvider[] = [
  {
    id: "chatgpt",
    name: "ChatGPT",
    color: "#10a37f",
    logoEmoji: "🤖",
    description: "El asistente más popular. Ideal para tareas cotidianas, redacción y preguntas generales.",
    tags: ["everyday", "writing", "coding"],
    plans: [
      {
        id: "free",
        name: "Gratis",
        price: 0,
        priceLabel: "Gratis",
        features: [
          "GPT-4o con límites diarios",
          "Generación de imágenes limitada",
          "Acceso web básico",
        ],
        signupUrl: "https://chat.openai.com",
      },
      {
        id: "plus",
        name: "Plus",
        price: 20,
        priceLabel: "$20/mes",
        badge: "Más popular",
        highlight: true,
        features: [
          "GPT-4o sin límites",
          "o4-mini para razonamiento",
          "Generación de imágenes con DALL·E",
          "Acceso a GPTs y plugins",
          "Memoria personalizada",
        ],
        signupUrl: "https://chat.openai.com",
      },
      {
        id: "pro",
        name: "Pro",
        price: 200,
        priceLabel: "$200/mes",
        features: [
          "Todo lo de Plus",
          "o3 sin límites (el más potente)",
          "Acceso prioritario en horas punta",
          "Para uso profesional intensivo",
        ],
        signupUrl: "https://chat.openai.com",
      },
    ],
  },
  {
    id: "claude",
    name: "Claude",
    color: "#c96442",
    logoEmoji: "🧡",
    description: "El mejor para programar, analizar documentos y razonamiento profundo.",
    tags: ["coding", "research", "writing", "reasoning"],
    plans: [
      {
        id: "free",
        name: "Gratis",
        price: 0,
        priceLabel: "Gratis",
        features: [
          "Claude Sonnet con límites diarios",
          "Contexto de 200K tokens",
          "Sin tarjeta de crédito",
        ],
        signupUrl: "https://claude.ai",
      },
      {
        id: "pro",
        name: "Pro",
        price: 20,
        priceLabel: "$20/mes",
        badge: "Mejor para devs",
        highlight: true,
        features: [
          "Claude Sonnet 4 sin límites",
          "Acceso a Claude Opus 4",
          "Proyectos y memoria",
          "Subir archivos y PDFs",
          "Claude Code incluido",
        ],
        signupUrl: "https://claude.ai",
      },
      {
        id: "max",
        name: "Max",
        price: 100,
        priceLabel: "$100/mes",
        features: [
          "5× más uso que Pro",
          "Opus 4 prioritario",
          "Para uso profesional intensivo",
        ],
        signupUrl: "https://claude.ai",
      },
    ],
  },
  {
    id: "gemini",
    name: "Gemini",
    color: "#4285f4",
    logoEmoji: "♊",
    description: "Integrado con Google. Ideal para investigación, documentos largos y el ecosistema Google.",
    tags: ["research", "long-context", "everyday"],
    plans: [
      {
        id: "free",
        name: "Gratis",
        price: 0,
        priceLabel: "Gratis",
        features: [
          "Gemini 2.0 Flash",
          "Contexto de 1M tokens",
          "Integración con Google Docs/Drive",
        ],
        signupUrl: "https://gemini.google.com",
      },
      {
        id: "advanced",
        name: "Advanced",
        price: 20,
        priceLabel: "$20/mes",
        badge: "Mejor contexto",
        highlight: true,
        features: [
          "Gemini 2.5 Pro (el más avanzado de Google)",
          "1M tokens de contexto",
          "Integración con Gmail, Docs, Drive",
          "Incluye Google One 2TB",
          "Gems personalizados",
        ],
        signupUrl: "https://one.google.com/about/ai-premium",
      },
    ],
  },
  {
    id: "grok",
    name: "Grok",
    color: "#e7e9ea",
    logoEmoji: "𝕏",
    description: "Integrado en X (Twitter). El mejor para analizar tendencias, noticias y contexto social.",
    tags: ["social", "research", "everyday"],
    plans: [
      {
        id: "premium",
        name: "X Premium",
        price: 8,
        priceLabel: "$8/mes",
        features: [
          "Grok 3 con límites",
          "Acceso desde X/Twitter",
          "Análisis de tweets y tendencias",
          "Verificación incluida",
        ],
        signupUrl: "https://x.com/i/premium_sign_up",
      },
      {
        id: "premium-plus",
        name: "X Premium+",
        price: 16,
        priceLabel: "$16/mes",
        badge: "Mejor para X",
        highlight: true,
        features: [
          "Grok 3 sin límites",
          "Modo Think (razonamiento profundo)",
          "Generación de imágenes",
          "Sin anuncios en For You",
          "Máxima visibilidad en X",
        ],
        signupUrl: "https://x.com/i/premium_sign_up",
      },
    ],
  },
  {
    id: "perplexity",
    name: "Perplexity",
    color: "#20b8cd",
    logoEmoji: "🔍",
    description: "Motor de búsqueda con IA. Perfecto para investigar con fuentes verificadas en tiempo real.",
    tags: ["research", "everyday"],
    plans: [
      {
        id: "free",
        name: "Gratis",
        price: 0,
        priceLabel: "Gratis",
        features: [
          "Búsqueda con IA ilimitada",
          "Fuentes citadas en cada respuesta",
          "5 búsquedas Pro al día",
        ],
        signupUrl: "https://perplexity.ai",
      },
      {
        id: "pro",
        name: "Pro",
        price: 20,
        priceLabel: "$20/mes",
        badge: "Mejor para investigar",
        highlight: true,
        features: [
          "Búsquedas Pro ilimitadas",
          "Acceso a GPT-4o, Claude y Sonar",
          "Subir imágenes y archivos",
          "$5 en créditos de API incluidos",
        ],
        signupUrl: "https://perplexity.ai",
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
