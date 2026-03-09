import { motion } from 'framer-motion'

const particles = Array.from({ length: 6 }, (_, i) => ({
  id: i,
  x: Math.random() * 100,
  y: Math.random() * 100,
}))

export function GridBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Grid lines */}
      <div
        className="absolute inset-0 opacity-[0.04]"
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
        className="absolute w-96 h-96 rounded-full opacity-20"
        style={{
          background: 'radial-gradient(circle, var(--color-accent-200) 0%, transparent 70%)',
          top: '10%',
          left: '60%',
        }}
        animate={{ x: [0, 30, -20, 0], y: [0, -20, 10, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
      />
      <motion.div
        className="absolute w-80 h-80 rounded-full opacity-15"
        style={{
          background: 'radial-gradient(circle, var(--color-primary-200) 0%, transparent 70%)',
          bottom: '20%',
          left: '20%',
        }}
        animate={{ x: [0, -20, 30, 0], y: [0, 10, -20, 0] }}
        transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
      />

      {/* Floating particles */}
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute w-1.5 h-1.5 rounded-full bg-primary-400"
          style={{ left: `${p.x}%`, top: `${p.y}%` }}
          animate={{
            y: [-20, 20, -20],
            x: [-10, 10, -10],
            opacity: [0.2, 0.5, 0.2],
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
