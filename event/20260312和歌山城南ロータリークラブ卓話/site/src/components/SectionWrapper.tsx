import { type ReactNode } from 'react'
import { motion } from 'framer-motion'

interface SectionWrapperProps {
  readonly id: string
  readonly children: ReactNode
  readonly className?: string
  readonly bg?: 'white' | 'gray' | 'primary'
}

export function SectionWrapper({ id, children, className = '', bg = 'white' }: SectionWrapperProps) {
  const bgClass = {
    white: 'bg-surface-0',
    gray: 'bg-surface-50',
    primary: 'bg-primary-50/30',
  }[bg]

  return (
    <section id={id} className={`relative py-20 sm:py-28 ${bgClass} ${className}`}>
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className="max-w-4xl mx-auto px-6 sm:px-8"
      >
        {children}
      </motion.div>
    </section>
  )
}
