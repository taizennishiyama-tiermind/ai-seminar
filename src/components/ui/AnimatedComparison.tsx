import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Clock, Zap, X, Check } from 'lucide-react'
import { sectionIllustrations } from '@/data/illustrations'

interface Step {
  readonly label: string
  readonly duration: string
}

const traditionalSteps: readonly Step[] = [
  { label: 'RFP作成・ベンダー選定', duration: '1〜2ヶ月' },
  { label: '要件定義', duration: '2〜3ヶ月' },
  { label: '基本設計', duration: '1〜2ヶ月' },
  { label: '開発・テスト', duration: '3〜6ヶ月' },
  { label: '受入テスト', duration: '1ヶ月' },
  { label: 'リリース', duration: '合計 8〜14ヶ月' },
]

const aiJediSteps: readonly Step[] = [
  { label: 'ヒアリング＋課題整理', duration: '1週間' },
  { label: 'プロトタイプ提示', duration: '2週間' },
  { label: '現場フィードバック', duration: '1週間' },
  { label: 'イテレーション×3回', duration: '3週間' },
  { label: '本番品質で磨き込み', duration: '2週間' },
  { label: 'リリース', duration: '合計 6〜10週間' },
]

export function AnimatedComparison() {
  const [activeTab, setActiveTab] = useState<'traditional' | 'ai'>('traditional')

  const steps = activeTab === 'traditional' ? traditionalSteps : aiJediSteps
  const isAi = activeTab === 'ai'

  return (
    <motion.div
      className="rounded-3xl border border-gray-200 bg-white overflow-hidden"
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.35 }}
    >
      {/* Header with illustration */}
      <div className="flex items-center justify-between p-6 sm:p-8 pb-0">
        <div className="inline-flex rounded-xl bg-gray-100 p-1.5">
          {(['traditional', 'ai'] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className="relative px-5 py-2.5 text-sm font-bold rounded-lg transition-colors z-10"
            >
              {activeTab === tab && (
                <motion.div
                  layoutId="comparison-tab"
                  className="absolute inset-0 bg-white rounded-lg shadow-sm"
                  transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                />
              )}
              <span className={`relative z-10 flex items-center gap-2 ${activeTab === tab ? 'text-gray-900' : 'text-gray-500'}`}>
                {tab === 'traditional' ? <Clock size={15} /> : <Zap size={15} />}
                {tab === 'traditional' ? '従来の開発' : 'AI JEDI'}
              </span>
            </button>
          ))}
        </div>
        <img src={sectionIllustrations.comparison} alt="" className="w-20 h-20 hidden sm:block" />
      </div>

      {/* Steps */}
      <div className="p-6 sm:p-8">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className={`rounded-2xl border-2 p-6 sm:p-8 ${
              isAi
                ? 'border-green-200/60 bg-gradient-to-b from-green-50/50 to-white'
                : 'border-red-200/60 bg-gradient-to-b from-red-50/50 to-white'
            }`}
          >
            <div className="space-y-4">
              {steps.map((step, i) => {
                const isLast = i === steps.length - 1
                return (
                  <motion.div
                    key={step.label}
                    className="flex items-center gap-4"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.06 }}
                  >
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold shrink-0 ${
                        isAi ? 'bg-green-100 text-green-600' : 'bg-red-100 text-red-500'
                      }`}
                    >
                      {isLast
                        ? (isAi ? <Check size={15} /> : <X size={15} />)
                        : i + 1
                      }
                    </div>
                    <span className={`text-base flex-1 ${isLast ? 'font-bold text-gray-900' : 'text-gray-700'}`}>
                      {step.label}
                    </span>
                    <span
                      className={`text-sm font-bold px-3 py-1 rounded-full ${
                        isAi ? 'text-green-600 bg-green-50' : 'text-red-500 bg-red-50'
                      } ${isLast ? 'text-base' : ''}`}
                    >
                      {step.duration}
                    </span>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </motion.div>
  )
}
