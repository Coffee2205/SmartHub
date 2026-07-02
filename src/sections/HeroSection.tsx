import { motion } from 'framer-motion'
import { ArrowRight, PlayCircle } from 'lucide-react'
import { ThemeToggle } from '../components/ThemeToggle'
import { navItems } from '../utils/data'

type HeroSectionProps = {
  isDark: boolean
  onToggleTheme: () => void
}

export function HeroSection({ isDark, onToggleTheme }: HeroSectionProps) {
  return (
    <section className="relative overflow-hidden px-4 pb-20 pt-6 sm:px-6 lg:px-10">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_20%,rgba(56,189,248,0.22),transparent_45%),radial-gradient(circle_at_80%_12%,rgba(34,197,94,0.14),transparent_35%),linear-gradient(140deg,#f8fafc_0%,#eff6ff_48%,#f8fafc_100%)] dark:bg-[radial-gradient(circle_at_20%_20%,rgba(56,189,248,0.3),transparent_40%),radial-gradient(circle_at_80%_12%,rgba(34,197,94,0.2),transparent_30%),linear-gradient(140deg,#020617_0%,#0b1120_55%,#020617_100%)]" />
      <div className="mx-auto max-w-6xl">
        <header className="mb-16 flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-slate-300/60 bg-white/70 px-4 py-3 backdrop-blur dark:border-slate-700/80 dark:bg-slate-900/70">
          <a href="#" className="font-display text-sm font-semibold tracking-[0.28em] text-slate-800 dark:text-white">
            SMART HUB
          </a>
          <nav className="hidden items-center gap-6 md:flex">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm text-slate-600 transition hover:text-slate-950 dark:text-slate-300 dark:hover:text-white"
              >
                {item.label}
              </a>
            ))}
          </nav>
          <ThemeToggle isDark={isDark} onToggle={onToggleTheme} />
        </header>

        <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
            <p className="mb-5 inline-flex rounded-full border border-cyan-300/60 bg-cyan-100/70 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-900 dark:border-cyan-600/50 dark:bg-cyan-500/10 dark:text-cyan-200">
              Home intelligence, redesigned
            </p>
            <h1 className="font-display text-balance text-4xl font-semibold leading-tight text-slate-950 sm:text-5xl lg:text-6xl dark:text-white">
              The command center for a calmer, smarter home.
            </h1>
            <p className="mt-6 max-w-xl text-pretty text-base leading-relaxed text-slate-600 sm:text-lg dark:text-slate-300">
              Smart Home Hub coordinates every room, sensor, and routine with quiet precision. One elegant device,
              total control, and zero friction.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="#newsletter"
                data-track="hero-cta-primary"
                className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-slate-800 dark:bg-white dark:text-slate-900"
              >
                Pre-order now
                <ArrowRight size={16} />
              </a>
              <a
                href="#gallery"
                data-track="hero-cta-secondary"
                className="inline-flex items-center gap-2 rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-700 transition hover:border-slate-500 hover:text-slate-950 dark:border-slate-600 dark:text-slate-200 dark:hover:text-white"
              >
                <PlayCircle size={16} />
                Watch demo
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotate: -4 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.85, ease: 'easeOut' }}
            className="relative mx-auto w-full max-w-md"
          >
            <div className="absolute -inset-6 rounded-[2.5rem] bg-gradient-to-br from-cyan-300/30 via-transparent to-emerald-300/25 blur-2xl" />
            <div className="relative overflow-hidden rounded-[2.5rem] border border-white/70 bg-gradient-to-b from-white to-slate-100 p-6 shadow-[0_30px_80px_-35px_rgba(2,6,23,0.65)] dark:border-slate-700 dark:from-slate-900 dark:to-slate-800">
              <img
                src="https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&w=1200&q=80"
                alt="Smart Home Hub premium product render"
                className="aspect-[4/5] w-full rounded-[1.75rem] object-cover"
                loading="eager"
              />
              <div className="mt-4 flex items-center justify-between rounded-2xl border border-slate-200 bg-white/70 px-4 py-3 dark:border-slate-700 dark:bg-slate-900/70">
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-slate-500">Starting</p>
                  <p className="font-display text-2xl font-semibold text-slate-900 dark:text-white">$799</p>
                </div>
                <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-700 dark:bg-emerald-500/10 dark:text-emerald-300">
                  Shipping Q4
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
