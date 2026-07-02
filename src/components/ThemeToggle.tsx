import { Moon, SunMedium } from 'lucide-react'
import { motion } from 'framer-motion'

type ThemeToggleProps = {
  isDark: boolean
  onToggle: () => void
}

export function ThemeToggle({ isDark, onToggle }: ThemeToggleProps) {
  return (
    <button
      type="button"
      onClick={onToggle}
      data-track="toggle-theme"
      className="relative inline-flex h-11 w-24 items-center rounded-full border border-slate-300/70 bg-white/70 px-1 shadow-sm backdrop-blur transition duration-300 hover:shadow-md dark:border-slate-500 dark:bg-slate-950/95 dark:shadow-[0_0_0_1px_rgba(148,163,184,0.14),0_12px_28px_rgba(2,6,23,0.45)]"
      aria-label="Toggle dark mode"
    >
      <motion.span
        animate={{ x: isDark ? 44 : 0 }}
        transition={{ type: 'spring', stiffness: 420, damping: 28, mass: 0.65 }}
        className={`absolute left-1 top-1 h-9 w-11 rounded-full transition-colors duration-300 ${
          isDark
            ? 'bg-gradient-to-br from-slate-100 via-white to-slate-200 shadow-[0_8px_24px_rgba(255,255,255,0.28)] ring-1 ring-white/40'
            : 'bg-gradient-to-br from-slate-900 via-slate-800 to-slate-950 shadow-[0_8px_24px_rgba(15,23,42,0.35)] ring-1 ring-slate-950/10'
        }`}
      />
      <div className={`relative z-10 ml-2 flex h-7 w-7 items-center justify-center transition-colors duration-300 ${isDark ? 'text-blue-300' : 'text-slate-100'}`}>
        <SunMedium size={16} strokeWidth={2.5} />
      </div>
      <div className={`relative z-10 ml-auto mr-2 flex h-7 w-7 items-center justify-center transition-colors duration-300 ${isDark ? 'text-blue-950' : 'text-slate-300'}`}>
        <Moon size={15} strokeWidth={2.3} />
      </div>
    </button>
  )
}
