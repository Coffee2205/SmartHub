import { chatbotSeed } from './data'
import type { ChatMessage } from '../types/chat'

const API_URL = (import.meta.env.VITE_API_URL ?? 'http://localhost:3000').replace(/\/$/, '')

export function getLocalBotReply(input: string): string {
  const normalized = input.trim().toLowerCase()

  const key = Object.keys(chatbotSeed).find((entry) => normalized.includes(entry))

  if (!key) {
    return 'I can answer about compatibility, setup, security, and pricing.'
  }

  return chatbotSeed[key] ?? 'Hello!'
}

export async function getGroqBotReply(messages: ChatMessage[]) {
  try {
    const response = await fetch(`${API_URL}/chat`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ messages }),
    })

    if (!response.ok) {
      throw new Error('Cannot connect to backend')
    }

    const data = await response.json()
    const text =
      typeof data === 'string'
        ? data
        : (data?.content ?? data?.message?.content ?? '')

    return {
      text: text || getLocalBotReply(messages[messages.length - 1]?.content ?? ''),
      source: 'groq' as const,
    }
  } catch (err) {
    console.error(err)

    const lastUserMessage =
      [...messages].reverse().find((message) => message.role === 'user')?.content ?? ''

    return {
      text: getLocalBotReply(lastUserMessage),
      source: 'local' as const,
    }
  }
}