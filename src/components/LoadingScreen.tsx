import { motion } from 'framer-motion'

type LoadingScreenProps = {
  theme: 'light' | 'dark'
}

export function LoadingScreen({ theme }: LoadingScreenProps) {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ delay: 0.7, duration: 0.5 }}
      className={`pointer-events-none fixed inset-0 z-50 grid place-items-center ${
        theme === 'dark' ? 'bg-slate-950' : 'bg-slate-100'
      }`}
    >
      <div className="flex items-center gap-3">
        <motion.div
          className={`h-3 w-3 rounded-full ${theme === 'dark' ? 'bg-cyan-300' : 'bg-cyan-600'}`}
          animate={{ scale: [0.8, 1.4, 0.8], opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 1.1, repeat: Number.POSITIVE_INFINITY }}
        />
        <motion.div
          className={`h-3 w-3 rounded-full ${theme === 'dark' ? 'bg-white' : 'bg-slate-900'}`}
          animate={{ scale: [1.2, 0.8, 1.2], opacity: [1, 0.5, 1] }}
          transition={{ duration: 1.1, repeat: Number.POSITIVE_INFINITY }}
        />
        <motion.p
          className={`ml-2 text-sm tracking-[0.35em] ${theme === 'dark' ? 'text-slate-300' : 'text-slate-700'}`}
          animate={{ opacity: [0.35, 1, 0.35] }}
          transition={{ duration: 1.4, repeat: Number.POSITIVE_INFINITY }}
        >
          HUB
        </motion.p>
      </div>
    </motion.div>
  )
}
