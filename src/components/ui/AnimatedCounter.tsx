import { useEffect, useRef } from 'react'
import { motion, useSpring, useTransform, useInView } from 'framer-motion'

interface AnimatedCounterProps {
  readonly value: number
  readonly suffix?: string
  readonly label: string
  readonly description: string
  readonly color?: string
}

export function AnimatedCounter({ value, suffix = '', label, description, color }: AnimatedCounterProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true })
  const spring = useSpring(0, { duration: 2000 })
  const rounded = useTransform(spring, (latest) => Math.round(latest))

  useEffect(() => {
    if (isInView) {
      spring.set(value)
    }
  }, [isInView, spring, value])

  return (
    <motion.div
      ref={ref}
      className="p-6 rounded-2xl border border-gray-200 bg-white"
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.35 }}
    >
      <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">
        {label}
      </p>
      <div className="flex items-baseline gap-1.5">
        <motion.span
          className="text-4xl font-black tabular-nums"
          style={{ color: color ?? 'var(--color-gray-900)' }}
        >
          {rounded}
        </motion.span>
        {suffix && (
          <span className="text-lg font-bold text-gray-500">{suffix}</span>
        )}
      </div>
      <p className="text-sm text-gray-500 mt-2">{description}</p>
    </motion.div>
  )
}
