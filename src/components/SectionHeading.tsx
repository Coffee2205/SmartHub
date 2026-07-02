type SectionHeadingProps = {
  eyebrow: string
  title: string
  description: string
}

export function SectionHeading({ eyebrow, title, description }: SectionHeadingProps) {
  return (
    <header className="mx-auto mb-12 max-w-3xl text-center">
      <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-slate-500 dark:text-slate-400">
        {eyebrow}
      </p>
      <h2 className="text-balance font-display text-3xl font-semibold text-slate-900 sm:text-4xl dark:text-white">
        {title}
      </h2>
      <p className="mt-4 text-pretty text-base text-slate-600 dark:text-slate-300">{description}</p>
    </header>
  )
}
