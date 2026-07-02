import { motion } from 'framer-motion'
import { SectionHeading } from '../components/SectionHeading'
import { testimonials } from '../utils/data'

export function TestimonialsSection() {
  return (
    <section className="px-4 py-20 sm:px-6 lg:px-10">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Testimonials"
          title="Trusted by families who care about experience"
          description="Real feedback from early users who upgraded their entire living space with one hub."
        />
        <div className="grid gap-5 lg:grid-cols-3">
          {testimonials.map((item, index) => (
            <motion.blockquote
              key={item.name}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.45, delay: index * 0.07 }}
              className="rounded-3xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-900"
            >
              <p className="text-pretty text-sm leading-relaxed text-slate-600 dark:text-slate-300">“{item.quote}”</p>
              <footer className="mt-5 flex items-center gap-3">
                <img
                  src={item.avatar}
                  alt={`Portrait of ${item.name}`}
                  className="h-11 w-11 rounded-full object-cover"
                  loading="lazy"
                />
                <div>
                  <p className="text-sm font-semibold text-slate-900 dark:text-white">{item.name}</p>
                  <p className="text-xs text-slate-500 dark:text-slate-400">{item.role}</p>
                </div>
              </footer>
            </motion.blockquote>
          ))}
        </div>
      </div>
    </section>
  )
}
