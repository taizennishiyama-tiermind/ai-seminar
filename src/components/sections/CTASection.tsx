import { motion } from 'framer-motion'
import { ArrowRight, MessageSquare } from 'lucide-react'
import { Link } from 'react-router-dom'
import { sectionIllustrations } from '@/data/illustrations'

export function CTASection() {
  return (
    <section className="mb-12">
      <motion.div
        className="relative rounded-3xl bg-gray-900 overflow-hidden p-10 sm:p-14"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        {/* Background gradient */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'radial-gradient(circle at 80% 20%, rgba(59, 130, 246, 0.15) 0%, transparent 50%)',
          }}
        />

        <div className="relative flex flex-col md:flex-row items-center gap-10">
          <div className="flex-1 space-y-6">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight leading-tight">
              曖昧な状態からでも、
              <br />
              相談できます。
            </h2>
            <p className="text-base sm:text-lg text-white/70 leading-relaxed max-w-lg">
              「何を作るべきか分からない」「PoCの次に進めない」「社内に推進できる人がいない」——
              その状態を事業として前に進む形へ変えることが、AI JEDIの仕事です。
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                to="/contact"
                className="group inline-flex items-center gap-2.5 px-8 py-4 rounded-xl bg-white text-gray-900 text-base font-bold hover:bg-gray-100 transition-colors"
              >
                <MessageSquare size={18} />
                まずは相談する
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
              </Link>
            </div>

            <p className="text-sm text-white/40">
              初回相談は無料です。NDA締結後の詳細なヒアリングも対応可能です。
            </p>
          </div>

          <motion.div
            className="shrink-0 w-40 md:w-52 opacity-80"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 0.8, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <img src={sectionIllustrations.contact} alt="" className="w-full h-auto" />
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
