import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { faqItems } from '@/data/faq'
import { sectionIllustrations } from '@/data/illustrations'

const previewItems = faqItems.slice(0, 5)

export function FAQPreview() {
  const [openId, setOpenId] = useState<string | null>(null)

  return (
    <section className="mb-24">
      <div className="flex flex-col md:flex-row items-start gap-8 mb-10">
        <motion.div
          className="flex-1"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.35 }}
        >
          <h2 className="text-2xl sm:text-3xl font-black text-gray-900 tracking-tight mb-3">
            よくある質問
          </h2>
          <p className="text-lg sm:text-xl text-gray-500 leading-relaxed">
            検討段階でよく聞かれる質問にお答えします。
          </p>
        </motion.div>
        <motion.div
          className="shrink-0 w-28 md:w-36"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.4 }}
        >
          <img src={sectionIllustrations.faq} alt="" className="w-full h-auto" />
        </motion.div>
      </div>

      <div className="space-y-3">
        {previewItems.map((item, i) => {
          const isOpen = openId === item.id

          return (
            <motion.div
              key={item.id}
              className="rounded-2xl border border-gray-200 bg-white overflow-hidden"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.04, duration: 0.3 }}
            >
              <button
                onClick={() => setOpenId(isOpen ? null : item.id)}
                className="w-full flex items-center gap-4 px-6 py-5 text-left hover:bg-gray-50/50 transition-colors"
              >
                <span className="flex-1 text-lg font-semibold text-gray-800">{item.question}</span>
                <motion.span
                  animate={{ rotate: isOpen ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                  className="shrink-0"
                >
                  <ChevronDown size={20} className="text-gray-400" />
                </motion.span>
              </button>

              <AnimatePresence>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6">
                      <p className="text-lg text-gray-600 leading-relaxed bg-gray-50 rounded-xl p-5">
                        {item.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          )
        })}
      </div>

      <motion.div
        className="mt-6 text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <Link
          to="/faq"
          className="inline-flex items-center gap-2 text-lg font-semibold text-gray-500 hover:text-gray-800 transition-colors"
        >
          すべての質問を見る
          <ArrowRight size={18} />
        </Link>
      </motion.div>
    </section>
  )
}
