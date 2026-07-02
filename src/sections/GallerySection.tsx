import { motion } from 'framer-motion'
import { SectionHeading } from '../components/SectionHeading'
import { galleryItems } from '../utils/data'

export function GallerySection() {
  return (
    <section id="gallery" className="px-4 py-20 sm:px-6 lg:px-10">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Gallery"
          title="A product that belongs in beautiful spaces"
          description="Precision materials, sculpted silhouette, and a visual language that feels truly premium."
        />

        <div className="grid gap-6 sm:grid-cols-2">
          {galleryItems.map((item, index) => (
            <motion.figure
              key={item.title}
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.55, delay: index * 0.08 }}
              className="group overflow-hidden rounded-3xl border border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900"
            >
              <div className="overflow-hidden">
                <img
                  src={item.src}
                  alt={item.alt}
                  className="h-72 w-full object-cover transition duration-500 group-hover:scale-105"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <figcaption className="px-5 py-4 text-sm font-medium text-slate-700 dark:text-slate-200">
                {item.title}
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  )
}
