import { motion } from 'framer-motion'
import { ArrowRight, Play } from 'lucide-react'
import { Link } from 'react-router-dom'
import { GridBackground } from '@/components/ui/GridBackground'
import { heroIllustration } from '@/data/illustrations'

export function Hero() {
  return (
    <section className="relative -mx-6 sm:-mx-10 -mt-10 lg:-mt-16 px-6 sm:px-10 pt-20 pb-24 overflow-hidden">
      <GridBackground />

      <div className="relative z-10 flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
        <div className="flex-1 space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.4 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-semibold bg-accent-50 text-accent-600 border border-accent-100">
              <span className="w-2 h-2 rounded-full bg-accent-500 animate-pulse" />
              AI時代の事業実装パートナー
            </span>
          </motion.div>

          <motion.h1
            className="text-4xl sm:text-5xl lg:text-6xl font-black text-gray-900 leading-[1.15] tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            AIを、
            <br />
            <span className="text-gradient">事業成果</span>に変える。
          </motion.h1>

          <motion.p
            className="text-lg sm:text-xl text-gray-600 leading-relaxed max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            企画から実装、研修、運用、人材、顧問まで——
            <br className="hidden sm:block" />
            AI JEDIは、企業がAIを事業成果につなげるために
            <br className="hidden sm:block" />
            必要な機能を、<strong className="text-gray-900">実装責任まで持って</strong>提供します。
          </motion.p>

          <motion.div
            className="flex flex-wrap gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            <Link
              to="/services/strategy"
              className="group inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl bg-gray-900 text-white text-base font-bold hover:bg-gray-800 transition-colors shadow-lg shadow-gray-900/20"
            >
              <Play size={16} />
              事業内容を見る
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl border-2 border-gray-200 text-gray-700 text-base font-semibold hover:bg-gray-50 hover:border-gray-300 transition-all"
            >
              お問い合わせ
            </Link>
          </motion.div>
        </div>

        <motion.div
          className="shrink-0 w-full max-w-xs sm:max-w-sm lg:max-w-md"
          initial={{ opacity: 0, scale: 0.9, x: 30 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <img src={heroIllustration} alt="" className="w-full h-auto" />
        </motion.div>
      </div>
    </section>
  )
}
