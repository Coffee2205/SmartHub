import { motion } from 'framer-motion'
import { SectionHeading } from '../components/SectionHeading'
import { specifications } from '../utils/data'

export function SpecificationsSection() {
  return (
    <section id="specs" className="px-4 py-20 sm:px-6 lg:px-10">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Specifications"
          title="Flagship hardware for always-on intelligence"
          description="Designed for quiet performance, local privacy, and years of software updates."
        />

        <motion.div
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="overflow-hidden rounded-3xl border border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900"
        >
          <table className="w-full border-collapse text-left">
            <caption className="sr-only">Smart Home Hub technical specifications</caption>
            <tbody>
              {specifications.map((spec, index) => (
                <tr
                  key={spec.label}
                  className={index % 2 === 0 ? 'bg-slate-50/70 dark:bg-slate-800/30' : 'bg-transparent'}
                >
                  <th
                    scope="row"
                    className="w-1/2 px-5 py-4 text-sm font-semibold text-slate-700 sm:w-1/3 dark:text-slate-200"
                  >
                    {spec.label}
                  </th>
                  <td className="px-5 py-4 text-sm text-slate-600 dark:text-slate-300">{spec.value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>
      </div>
    </section>
  )
}
