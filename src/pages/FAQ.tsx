import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, ArrowLeft } from 'lucide-react'
import { Link } from 'react-router-dom'
import { faqItems, faqCategories } from '@/data/faq'
import { sectionIllustrations } from '@/data/illustrations'

export function FAQPage() {
  const [openId, setOpenId] = useState<string | null>(null)
  const [activeCategory, setActiveCategory] = useState<string | null>(null)

  const filtered = activeCategory
    ? faqItems.filter((item) => item.category === activeCategory)
    : faqItems

  return (
    <div>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mb-8">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-base text-gray-500 hover:text-gray-800 transition-colors"
        >
          <ArrowLeft size={16} />
          ホームに戻る
        </Link>
      </motion.div>

      {/* Header with illustration */}
      <motion.div
        className="flex flex-col md:flex-row items-start md:items-center gap-8 mb-10"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35 }}
      >
        <div className="flex-1">
          <h1 className="text-3xl sm:text-4xl font-black text-gray-900 tracking-tight mb-3">
            よくある質問
          </h1>
          <p className="text-lg text-gray-500 leading-relaxed">
            AI JEDIへの相談を検討されている方からよく聞かれる質問をまとめました。
          </p>
        </div>
        <div className="shrink-0 w-28 md:w-36">
          <img src={sectionIllustrations.faq} alt="" className="w-full h-auto" />
        </div>
      </motion.div>

      {/* Category filter */}
      <motion.div
        className="flex flex-wrap gap-2 mb-8"
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1, duration: 0.3 }}
      >
        <button
          onClick={() => setActiveCategory(null)}
          className={`text-base px-5 py-2.5 rounded-full border font-semibold transition-all ${
            activeCategory === null
              ? 'border-primary-800 bg-primary-900 text-white'
              : 'border-gray-200 text-gray-500 hover:border-gray-400 hover:text-primary-900 hover:bg-primary-50'
          }`}
        >
          すべて
        </button>
        {faqCategories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(activeCategory === cat ? null : cat)}
            className={`text-base px-5 py-2.5 rounded-full border font-semibold transition-all ${
              activeCategory === cat
                ? 'border-primary-800 bg-primary-900 text-white'
                : 'border-gray-200 text-gray-500 hover:border-gray-400 hover:text-primary-900 hover:bg-primary-50'
            }`}
          >
            {cat}
          </button>
        ))}
      </motion.div>

      {/* FAQ list */}
      <div className="space-y-3">
        <AnimatePresence mode="popLayout">
          {filtered.map((item) => {
            const isOpen = openId === item.id

            return (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="rounded-2xl border border-gray-200 bg-white overflow-hidden"
              >
                <button
                  onClick={() => setOpenId(isOpen ? null : item.id)}
                  className="w-full flex items-center gap-4 px-6 py-5 text-left hover:bg-gray-50/50 transition-colors"
                >
                  <div className="flex-1">
                    <span className="text-lg font-semibold text-gray-800 block">{item.question}</span>
                    <span className="text-sm text-gray-400 mt-1 block">{item.category}</span>
                  </div>
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
                        <p className="text-lg text-gray-600 leading-relaxed bg-gray-50 rounded-xl p-5">{item.answer}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            )
          })}
        </AnimatePresence>
      </div>
    </div>
  )
}
