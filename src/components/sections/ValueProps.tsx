import { motion } from 'framer-motion'
import { sectionIllustrations } from '@/data/illustrations'

const values = [
  {
    number: '01',
    title: '速い',
    description: '意思決定に必要な具体物を早く出す。抽象論で数か月使うのではなく、早い段階で見える形にします。',
    highlight: '2週間でプロトタイプ提示',
    color: '#3b82f6',
  },
  {
    number: '02',
    title: '確実',
    description: 'ただ動くものではなく、運用されるもの、本番で耐えるものを前提に設計します。',
    highlight: '大企業品質で短期間に立ち上げ',
    color: '#10b981',
  },
  {
    number: '03',
    title: '深い',
    description: '要件定義だけ、開発だけ、顧問だけではなく、事業推進に必要な論点に深く入ります。',
    highlight: '企画→実装→運用を一気通貫',
    color: '#f59e0b',
  },
  {
    number: '04',
    title: '人と組織まで強くできる',
    description: '作るだけでなく、研修で組織を強くし、推進人材の確保やチーム組成まで支援します。',
    highlight: '研修後3ヶ月でAI利用率 5%→65%',
    color: '#8b5cf6',
  },
  {
    number: '05',
    title: '経営と現場の両方を見る',
    description: '経営判断の論点と、現場で回る実装の両方をつなげて支援します。',
    highlight: '稟議用資料から実装まで対応',
    color: '#ec4899',
  },
]

export function ValueProps() {
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
            AI JEDIが選ばれる5つの理由
          </h2>
          <p className="text-lg sm:text-xl text-gray-500 leading-relaxed">
            安さではなく、<strong className="text-gray-700">失敗確率の低さ</strong>と<strong className="text-gray-700">推進スピード</strong>で選ばれています。
          </p>
        </motion.div>
        <motion.div
          className="shrink-0 w-36 md:w-48"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.4 }}
        >
          <img src={sectionIllustrations.values} alt="" className="w-full h-auto" />
        </motion.div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {values.map((value, i) => (
          <motion.div
            key={value.number}
            className="relative p-6 sm:p-8 rounded-2xl border border-gray-200 bg-white overflow-hidden group hover:shadow-lg hover:shadow-black/5 transition-all"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.06, duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="absolute -right-2 -top-4 text-8xl font-black text-gray-50 select-none pointer-events-none">
              {value.number}
            </span>

            <div className="relative">
              <span
                className="text-3xl font-black mb-3 block"
                style={{ color: value.color }}
              >
                {value.number}
              </span>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
              <p className="text-base text-gray-600 leading-relaxed mb-4">{value.description}</p>
              <span
                className="inline-block text-sm font-bold px-4 py-1.5 rounded-full"
                style={{ backgroundColor: `${value.color}10`, color: value.color }}
              >
                {value.highlight}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
