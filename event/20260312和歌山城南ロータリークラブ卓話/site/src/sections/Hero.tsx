import { motion } from 'framer-motion'
import { ArrowDown } from 'lucide-react'

export function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-primary-50/60 via-white to-white" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 py-32 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white border border-primary-200 shadow-sm mb-8"
        >
          <span className="text-sm font-semibold text-primary-600">
            2026.03.12 和歌山城南ロータリークラブ 卓話
          </span>
        </motion.div>

        {/* Main title */}
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.7 }}
          className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 leading-[1.25] tracking-[0.01em] mb-8"
        >
          AIが私たちの
          <br />
          <span className="text-gradient">仕事や事業づくり</span>を、
          <br />
          どこまで変えてしまうのか
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="text-lg sm:text-xl text-gray-500 leading-relaxed max-w-2xl mx-auto mb-8"
        >
          「便利ツール」の先にある本当の変化。
          <br />
          経営者の目線で、30分で一緒に整理します。
        </motion.p>

        {/* Illustration */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8, duration: 0.7 }}
          className="flex justify-center mb-12"
        >
          <img
            src="/illustrations/l_01_rectangle_white.png"
            alt=""
            className="w-80 sm:w-[420px] h-auto mix-blend-multiply"
          />
        </motion.div>

        {/* 3 key themes */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0, duration: 0.6 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl mx-auto mb-14"
        >
          {[
            { num: '01', text: 'チャットで何ができるのか' },
            { num: '02', text: '経営者に求められる力とは' },
            { num: '03', text: 'この先、何が起きるのか' },
          ].map((item, i) => (
            <motion.div
              key={item.num}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1 + i * 0.1, duration: 0.5 }}
              className="p-5 rounded-xl border border-gray-200 bg-white/80 backdrop-blur-sm"
            >
              <span className="text-3xl font-black text-gray-100">{item.num}</span>
              <p className="text-base font-bold text-gray-800 mt-1">{item.text}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-sm text-gray-400">スクロールして始める</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          >
            <ArrowDown size={20} className="text-gray-300" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
