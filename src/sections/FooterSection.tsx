import { Globe, Heart, Play, Share2 } from 'lucide-react'

export function FooterSection() {
  return (
    <footer className="border-t border-slate-200 px-4 py-10 sm:px-6 lg:px-10 dark:border-slate-800">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
        <div>
          <p className="font-display text-sm font-semibold tracking-[0.3em] text-slate-800 dark:text-white">SMART HUB</p>
          <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">Designed for intentional living spaces.</p>
        </div>

        <div className="flex items-center gap-3 text-slate-500 dark:text-slate-300">
          <a href="#" aria-label="Instagram" className="rounded-full border border-slate-300 p-2 transition hover:bg-slate-100 dark:border-slate-700 dark:hover:bg-slate-800">
            <Globe size={16} />
          </a>
          <a href="#" aria-label="LinkedIn" className="rounded-full border border-slate-300 p-2 transition hover:bg-slate-100 dark:border-slate-700 dark:hover:bg-slate-800">
            <Share2 size={16} />
          </a>
          <a href="#" aria-label="YouTube" className="rounded-full border border-slate-300 p-2 transition hover:bg-slate-100 dark:border-slate-700 dark:hover:bg-slate-800">
            <Play size={16} />
          </a>
        </div>

        <p className="inline-flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
          Crafted with <Heart size={14} className="text-rose-500" /> for modern homes.
        </p>
      </div>
    </footer>
  )
}
