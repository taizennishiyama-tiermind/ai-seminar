import { Hero } from '@/components/sections/Hero'
import { PainPoints } from '@/components/sections/PainPoints'
import { ServiceCards } from '@/components/sections/ServiceCards'
import { AnimatedComparison } from '@/components/ui/AnimatedComparison'
import { AnimatedCounter } from '@/components/ui/AnimatedCounter'
import { ValueProps } from '@/components/sections/ValueProps'
import { FAQPreview } from '@/components/sections/FAQPreview'
import { CTASection } from '@/components/sections/CTASection'
import { motion } from 'framer-motion'

const stats = [
  { value: 7, suffix: '領域', label: 'SERVICES', description: '戦略から運用まで一気通貫', color: '#3b82f6' },
  { value: 6, suffix: '週間〜', label: 'SPEED', description: '本番リリースまでの最短期間', color: '#10b981' },
  { value: 3, suffix: '倍', label: 'EFFICIENCY', description: '少数精鋭で高い推進力を実現', color: '#f59e0b' },
  { value: 100, suffix: '%', label: 'COMMITMENT', description: '実装責任まで持って支援する', color: '#8b5cf6' },
]

export function Home() {
  return (
    <div>
      <Hero />

      {/* Stats */}
      <section className="mb-24">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((stat) => (
            <AnimatedCounter
              key={stat.label}
              value={stat.value}
              suffix={stat.suffix}
              label={stat.label}
              description={stat.description}
              color={stat.color}
            />
          ))}
        </div>
      </section>

      {/* Key message */}
      <motion.section
        className="mb-24"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
      >
        <div className="border-l-4 border-primary-800 pl-6 py-2">
          <p className="text-xl sm:text-2xl font-bold text-gray-800 leading-relaxed">
            AI JEDIは、AIを使って安く何かを作る会社ではありません。
          </p>
          <p className="text-base sm:text-lg text-gray-500 mt-3 leading-relaxed">
            AIを事業として成立させるために、速く、深く、確実に実装し、
            必要なら研修で組織を強くし、人材も入れ、経営判断まで支える会社です。
          </p>
        </div>
      </motion.section>

      <PainPoints />

      {/* Comparison */}
      <section className="mb-24">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.35 }}
          className="mb-10"
        >
          <h2 className="text-2xl sm:text-3xl font-black text-gray-900 tracking-tight mb-3">
            従来の開発 vs AI JEDI
          </h2>
          <p className="text-base sm:text-lg text-gray-500 leading-relaxed">
            タブを切り替えて、開発プロセスの違いを比べてみてください。
          </p>
        </motion.div>
        <AnimatedComparison />
      </section>

      <ServiceCards />
      <ValueProps />
      <FAQPreview />
      <CTASection />
    </div>
  )
}
