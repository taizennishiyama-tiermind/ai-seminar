import { motion } from 'framer-motion'

const PARTICLES = Array.from({ length: 6 }, (_, i) => ({
  id: i,
  x: Math.random() * 100,
  y: Math.random() * 100,
}))

export function GridBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Grid lines */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(var(--color-primary-400) 1px, transparent 1px),
            linear-gradient(90deg, var(--color-primary-400) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
        }}
      />

      {/* Gradient orbs */}
      <motion.div
        animate={{ x: [0, 30, -20, 0], y: [0, -20, 10, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
        className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full opacity-30"
        style={{
          background: 'radial-gradient(circle, rgba(59, 130, 246, 0.08) 0%, transparent 70%)',
        }}
      />
      <motion.div
        animate={{ x: [0, -30, 20, 0], y: [0, 20, -10, 0] }}
        transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
        className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full opacity-30"
        style={{
          background: 'radial-gradient(circle, rgba(96, 165, 250, 0.06) 0%, transparent 70%)',
        }}
      />

      {/* Floating particles */}
      {PARTICLES.map((p) => (
        <motion.div
          key={p.id}
          className="absolute w-1.5 h-1.5 rounded-full bg-primary-400"
          style={{ left: `${p.x}%`, top: `${p.y}%` }}
          animate={{
            y: [-20, 20, -20],
            x: [-10, 10, -10],
            opacity: [0.15, 0.4, 0.15],
          }}
          transition={{
            duration: 4 + p.id * 1.5,
            repeat: Infinity,
            delay: p.id * 0.8,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  )
}
