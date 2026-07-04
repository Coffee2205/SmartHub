import { useMemo, useState } from 'react'
import type { FormEvent } from 'react'
import { Bot, SendHorizontal, X } from 'lucide-react'
import { AnimatePresence, motion } from 'framer-motion'
import { getGroqBotReply } from '../../utils/groq'
import type { ChatMessage } from '../../types/chat'

export function ChatbotWidget() {
  const [open, setOpen] = useState(false)
  const [value, setValue] = useState('')
  const [loading, setLoading] = useState(false)
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      role: 'assistant',
      content: 'Welcome to Smart Home Hub. Ask me anything about this product.',
    },
  ])

  const reversed = useMemo(() => [...messages].slice(-6), [messages])

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const trimmed = value.trim()
    if (!trimmed || loading) {
      return
    }

    const userMessage: ChatMessage = {
      role: 'user',
      content: trimmed,
    }

    setMessages((current) => [...current, userMessage])
    setValue('')
    setLoading(true)

    const history: ChatMessage[] = [
      {
        role: 'system',
        content: 'You are Smart Assistant for Smart Home Hub. Answer briefly, clearly and helpfully.',
      },
      ...messages,
      userMessage,
    ]

    const result = await getGroqBotReply(history)

    setMessages((current) => [
      ...current,
      {
        role: 'assistant',
        content: result.text,
      },
    ])
    setLoading(false)
  }

  return (
    <div className="fixed bottom-4 right-4 z-40 sm:bottom-6 sm:right-6">
      <AnimatePresence initial={false}>
        {open ? (
          <motion.section
            key="chat-panel"
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.96 }}
            className="mb-3 w-[calc(100vw-2rem)] max-w-sm rounded-3xl border border-slate-300/60 bg-white/95 p-4 shadow-2xl backdrop-blur dark:border-slate-700 dark:bg-slate-900/95"
          >
            <div className="mb-3 flex items-center justify-between">
              <h3 className="font-display text-sm font-semibold text-slate-900 dark:text-white">Smart Assistant</h3>
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="rounded-full p-2 text-slate-500 transition hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800"
                aria-label="Close chatbot"
              >
                <X size={16} />
              </button>
            </div>

            <div className="mb-3 max-h-64 space-y-2 overflow-y-auto pr-1">
              {reversed.map((message, index) => (
                <div
                  key={`${message.role}-${index}`}
                  className={`rounded-2xl px-3 py-2 text-sm ${
                    message.role === 'user'
                      ? 'ml-8 bg-slate-900 text-white dark:bg-slate-100 dark:text-slate-900'
                      : 'mr-8 bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-200'
                  }`}
                >
                  {message.content}
                </div>
              ))}
            </div>

            <form onSubmit={onSubmit} className="flex items-center gap-2">
              <input
                value={value}
                onChange={(event) => setValue(event.target.value)}
                placeholder="Ask: price, setup, security..."
                className="h-10 flex-1 rounded-xl border border-slate-300 bg-transparent px-3 text-sm text-slate-800 outline-none ring-cyan-300 transition placeholder:text-slate-400 focus:ring-2 dark:border-slate-700 dark:text-slate-100 dark:placeholder:text-slate-500"
              />
              <button
                type="submit"
                disabled={loading}
                className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-500 text-white transition hover:bg-cyan-400 disabled:cursor-not-allowed disabled:opacity-70 dark:bg-cyan-400 dark:text-slate-950 dark:hover:bg-cyan-300"
                aria-label="Send message"
              >
                <SendHorizontal size={16} />
              </button>
            </form>
            <p className="mt-2 text-[11px] text-slate-500 dark:text-slate-400">
               Powered by your local Groq backend.
            </p>
          </motion.section>
        ) : null}
      </AnimatePresence>

      <button
        type="button"
        onClick={() => setOpen((current) => !current)}
        data-track="toggle-chatbot"
        className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-slate-900 text-white shadow-xl transition hover:scale-105 hover:bg-slate-800 dark:bg-white dark:text-slate-900"
        aria-label="Toggle chatbot"
      >
        <Bot size={20} />
      </button>
    </div>
  )
}
