import { motion } from 'framer-motion'
import type { ServiceScenario } from '@/data/services'

interface ScenarioCardProps {
  readonly scenario: ServiceScenario
  readonly index?: number
}

export function ScenarioCard({ scenario, index = 0 }: ScenarioCardProps) {
  return (
    <motion.div
      className="rounded-2xl border border-gray-200 bg-white overflow-hidden"
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.06, duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
    >
      {/* Company header */}
      <div className="bg-gray-50 border-b border-gray-200 px-6 py-4">
        <span className="text-sm font-bold text-gray-400 uppercase tracking-widest">
          SCENARIO
        </span>
        <span className="ml-4 text-base font-semibold text-gray-700">{scenario.company}</span>
      </div>

      <div className="p-6 sm:p-8 space-y-6">
        {/* Situation */}
        <div className="space-y-2">
          <span className="text-sm font-black text-amber-600 uppercase tracking-widest">
            課題
          </span>
          <p className="text-lg text-gray-700 leading-relaxed">{scenario.situation}</p>
        </div>

        {/* Action */}
        <div className="space-y-2">
          <span className="text-sm font-black text-accent-500 uppercase tracking-widest">
            AI JEDIの支援
          </span>
          <p className="text-lg text-gray-700 leading-relaxed bg-accent-50/50 rounded-xl p-5 border border-accent-100">
            {scenario.action}
          </p>
        </div>

        {/* Result */}
        <div className="space-y-2">
          <span className="text-sm font-black text-green-600 uppercase tracking-widest">
            成果
          </span>
          <p className="text-lg text-gray-900 font-medium leading-relaxed bg-green-50/50 rounded-xl p-5 border border-green-100">
            {scenario.result}
          </p>
        </div>
      </div>
    </motion.div>
  )
}
