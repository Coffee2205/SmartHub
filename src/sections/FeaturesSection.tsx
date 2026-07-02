import { motion } from 'framer-motion'
import { Bell, Brain, ShieldCheck, Sparkles, Wifi, Zap } from 'lucide-react'
import { SectionHeading } from '../components/SectionHeading'
import { features } from '../utils/data'

const iconMap = {
  shield: ShieldCheck,
  zap: Zap,
  wifi: Wifi,
  brain: Brain,
  bell: Bell,
  sparkles: Sparkles,
}

export function FeaturesSection() {
  return (
    <section id="features" className="px-4 py-20 sm:px-6 lg:px-10">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Features"
          title="Every detail engineered for modern life"
          description="Powerful automations and security-first design wrapped in a calm, tactile interface."
        />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => {
            const Icon = iconMap[feature.icon]
            return (
              <motion.article
                key={feature.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -6, scale: 1.01 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.45, delay: index * 0.06 }}
                className="group rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-xl dark:border-slate-800 dark:bg-slate-900"
              >
                <div className="mb-4 inline-flex rounded-2xl bg-slate-100 p-3 text-slate-700 transition group-hover:bg-cyan-500 group-hover:text-white dark:bg-slate-800 dark:text-slate-300">
                  <Icon size={20} />
                </div>
                <h3 className="font-display text-xl font-semibold text-slate-900 dark:text-white">{feature.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-300">{feature.description}</p>
              </motion.article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
