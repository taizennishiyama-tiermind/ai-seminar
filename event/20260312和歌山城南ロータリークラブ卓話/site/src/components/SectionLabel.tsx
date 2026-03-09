import { motion } from 'framer-motion'

interface SectionLabelProps {
  readonly category: string
  readonly title: string
  readonly subtitle?: string
}

export function SectionLabel({ category, title, subtitle }: SectionLabelProps) {
  return (
    <div className="mb-10">
      <motion.span
        initial={{ opacity: 0, y: 8 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="inline-block text-xs font-bold text-primary-500 uppercase tracking-widest mb-3"
      >
        {category}
      </motion.span>
      <motion.h2
        initial={{ opacity: 0, y: 8 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.06 }}
        className="text-[24px] sm:text-3xl lg:text-4xl font-black text-gray-900 leading-[1.3] tracking-[0.01em]"
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.12 }}
          className="mt-4 text-lg text-gray-500 leading-relaxed max-w-2xl"
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  )
}
