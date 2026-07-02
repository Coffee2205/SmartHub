import { zodResolver } from '@hookform/resolvers/zod'
import { motion } from 'framer-motion'
import { useForm } from 'react-hook-form'
import toast from 'react-hot-toast'
import { z } from 'zod'
import { submitNewsletter } from '../utils/fakeApi'

const schema = z.object({
  fullName: z
    .string()
    .min(2, 'Please enter your full name.')
    .max(80, 'Name is too long.'),
  email: z.string().email('Please enter a valid email address.'),
})

type NewsletterInput = z.infer<typeof schema>

export function NewsletterSection() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<NewsletterInput>({
    resolver: zodResolver(schema),
    defaultValues: {
      fullName: '',
      email: '',
    },
  })

  const onSubmit = async (values: NewsletterInput) => {
    try {
      await submitNewsletter(values)
      toast.success('Subscribed successfully. Welcome to the future home.')
      reset()
      console.log('[newsletter] submitted', values)
    } catch {
      toast.error('Something went wrong. Please try again.')
    }
  }

  return (
    <section id="newsletter" className="px-4 pb-24 pt-20 sm:px-6 lg:px-10">
      <div className="mx-auto max-w-4xl rounded-3xl border border-slate-200 bg-gradient-to-br from-white to-slate-50 p-8 dark:border-slate-800 dark:from-slate-900 dark:to-slate-900/40 sm:p-10">
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500 dark:text-slate-400">Newsletter</p>
          <h2 className="mt-3 font-display text-3xl font-semibold text-slate-900 sm:text-4xl dark:text-white">
            Get launch updates and early-access offers.
          </h2>
          <p className="mt-4 max-w-xl text-sm leading-relaxed text-slate-600 dark:text-slate-300">
            No spam. Just design stories, rollout timelines, and product drops for Smart Home Hub.
          </p>

          <form onSubmit={handleSubmit(onSubmit)} className="mt-8 grid gap-4 sm:grid-cols-2">
            <div>
              <label
                htmlFor="fullName"
                className="mb-2 block text-xs font-semibold uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400"
              >
                Full Name
              </label>
              <input
                id="fullName"
                type="text"
                {...register('fullName')}
                className="h-11 w-full rounded-xl border border-slate-300 bg-white px-3 text-sm text-slate-900 outline-none ring-cyan-300 transition focus:ring-2 dark:border-slate-700 dark:bg-slate-800 dark:text-white"
                placeholder="Nguyen Van A"
              />
              {errors.fullName ? <p className="mt-2 text-xs text-red-500">{errors.fullName.message}</p> : null}
            </div>

            <div>
              <label
                htmlFor="email"
                className="mb-2 block text-xs font-semibold uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400"
              >
                Email
              </label>
              <input
                id="email"
                type="email"
                {...register('email')}
                className="h-11 w-full rounded-xl border border-slate-300 bg-white px-3 text-sm text-slate-900 outline-none ring-cyan-300 transition focus:ring-2 dark:border-slate-700 dark:bg-slate-800 dark:text-white"
                placeholder="you@email.com"
              />
              {errors.email ? <p className="mt-2 text-xs text-red-500">{errors.email.message}</p> : null}
            </div>

            <button
              type="submit"
              data-track="newsletter-submit"
              className="sm:col-span-2 inline-flex h-11 items-center justify-center rounded-xl bg-slate-900 text-sm font-semibold text-white transition hover:bg-slate-800 disabled:cursor-not-allowed disabled:opacity-70 dark:bg-white dark:text-slate-900"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Submitting...' : 'Join waitlist'}
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  )
}
