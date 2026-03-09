import { motion } from 'framer-motion'
import { sectionIllustrations } from '@/data/illustrations'

const painPoints = [
  {
    title: 'AIをやるべきなのは分かるが、何から着手すべきか決まらない',
    description: '候補は山ほどある。でも「どれが正解か」を判断できる人材がいない。',
  },
  {
    title: 'PoCは作ったのに、本番に進めない',
    description: 'セキュリティ審査、既存システム連携、運用体制…PoCの「その先」で止まる。',
  },
  {
    title: '要件定義が長引き、開発が始まる前に失速する',
    description: '半年かけて仕様書を作っている間に、市場環境も社内体制も変わってしまう。',
  },
  {
    title: 'AI人材が採れない、見極められない、足りない',
    description: '求人を出しても応募がない。面接しても評価できない。社内にAI人材ゼロ。',
  },
  {
    title: '研修をやっても、実務に定着しない',
    description: '「面白かった」で終わる研修。翌週には誰もAIを使っていない。',
  },
  {
    title: '速く作りたいが、品質・セキュリティは落とせない',
    description: '「安く早く」を選ぶと品質が犠牲になる。でも従来の進め方では遅すぎる。',
  },
]

export function PainPoints() {
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
            こんな課題、ありませんか？
          </h2>
          <p className="text-lg sm:text-xl text-gray-500 leading-relaxed">
            多くの企業がAI JEDIに相談する背景にある、共通の課題です。
            <br className="hidden sm:block" />
            一つでも当てはまれば、お力になれるかもしれません。
          </p>
        </motion.div>
        <motion.div
          className="shrink-0 w-32 md:w-40"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.4 }}
        >
          <img src={sectionIllustrations.painPoints} alt="" className="w-full h-auto" />
        </motion.div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {painPoints.map((point, i) => (
          <motion.div
            key={point.title}
            className="p-6 sm:p-8 rounded-2xl border border-gray-200 bg-white hover:border-red-200 hover:bg-red-50/30 transition-all"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.06, duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          >
            <h3 className="text-lg font-bold text-gray-900 leading-snug mb-3">
              {point.title}
            </h3>
            <p className="text-base text-gray-500 leading-relaxed">
              {point.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
