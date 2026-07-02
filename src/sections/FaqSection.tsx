import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { AnimatePresence, motion } from 'framer-motion'
import { SectionHeading } from '../components/SectionHeading'
import { faqs } from '../utils/data'

export function FaqSection() {
  const [activeQuestion, setActiveQuestion] = useState(0)

  return (
    <section id="faq" className="px-4 py-20 sm:px-6 lg:px-10">
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          eyebrow="FAQ"
          title="Answers for before you pre-order"
          description="Everything you need to know about setup, privacy, and compatibility."
        />

        <div className="space-y-3">
          {faqs.map((item, index) => {
            const open = index === activeQuestion
            return (
              <article key={item.question} className="overflow-hidden rounded-2xl border border-slate-200 dark:border-slate-800">
                <button
                  type="button"
                  onClick={() => setActiveQuestion(open ? -1 : index)}
                  data-track={`faq-${index + 1}`}
                  className="flex w-full items-center justify-between bg-white px-5 py-4 text-left text-sm font-semibold text-slate-900 dark:bg-slate-900 dark:text-white"
                >
                  {item.question}
                  <motion.span animate={{ rotate: open ? 180 : 0 }}>
                    <ChevronDown size={16} className="text-slate-500 dark:text-slate-400" />
                  </motion.span>
                </button>

                <AnimatePresence initial={false}>
                  {open ? (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.28 }}
                    >
                      <p className="bg-slate-50 px-5 py-4 text-sm leading-relaxed text-slate-600 dark:bg-slate-800/40 dark:text-slate-300">
                        {item.answer}
                      </p>
                    </motion.div>
                  ) : null}
                </AnimatePresence>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
