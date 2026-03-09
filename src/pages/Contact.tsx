import { motion } from 'framer-motion'
import { ArrowLeft, Mail } from 'lucide-react'
import { Link } from 'react-router-dom'
import { sectionIllustrations } from '@/data/illustrations'

const contactMethods = [
  {
    title: '初回相談（無料）',
    description: 'オンラインで30分〜1時間。課題の整理と、AI JEDIがお役に立てるかの確認を行います。',
    detail: '平日10:00-18:00対応',
  },
  {
    title: 'NDA締結後の詳細ヒアリング',
    description: '守秘義務契約を締結した上で、具体的な課題・技術要件・体制などを詳しくお聞きします。',
    detail: '訪問・オンライン対応可',
  },
  {
    title: '顧問契約からのスタート',
    description: '月2回の壁打ちから始めて、必要に応じてPoC・本開発・研修と拡大していく進め方もあります。',
    detail: '最小スコープから開始可能',
  },
]

const entryPoints = [
  '何を作るべきか分からない',
  'PoCの次に進めない',
  '社内に推進できる人がいない',
  'AI研修をやっても現場で使われない',
  '安さより、失敗しない進め方を重視したい',
  '開発だけでなく、人材や顧問も含めて相談したい',
]

export function ContactPage() {
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
        className="flex flex-col md:flex-row items-start md:items-center gap-8 mb-12"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35 }}
      >
        <div className="flex-1">
          <h1 className="text-3xl sm:text-4xl font-black text-gray-900 tracking-tight mb-3">
            お問い合わせ
          </h1>
          <p className="text-lg text-gray-500 leading-relaxed">
            曖昧な状態からでも構いません。まずはお気軽にご相談ください。
          </p>
        </div>
        <div className="shrink-0 w-32 md:w-44">
          <img src={sectionIllustrations.contact} alt="" className="w-full h-auto" />
        </div>
      </motion.div>

      {/* Contact methods */}
      <section className="mb-12">
        <h2 className="text-xl sm:text-2xl font-black text-gray-900 tracking-tight mb-6">
          ご相談の進め方
        </h2>
        <div className="space-y-4">
          {contactMethods.map((method, i) => (
            <motion.div
              key={method.title}
              className="p-6 sm:p-8 rounded-2xl border border-gray-200 bg-white"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08, duration: 0.35 }}
            >
              <h3 className="text-xl font-bold text-gray-900 mb-3">{method.title}</h3>
              <p className="text-lg text-gray-600 leading-relaxed mb-3">{method.description}</p>
              <span className="text-sm font-semibold text-gray-400 bg-gray-100 px-3 py-1 rounded-full">
                {method.detail}
              </span>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Entry points */}
      <section className="mb-12">
        <h2 className="text-xl sm:text-2xl font-black text-gray-900 tracking-tight mb-6">
          こんなお悩みからでもOKです
        </h2>
        <div className="rounded-2xl border border-gray-200 overflow-hidden divide-y divide-gray-100">
          {entryPoints.map((point, i) => (
            <motion.div
              key={point}
              className="flex items-center gap-4 px-6 py-5"
              initial={{ opacity: 0, x: -8 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 + i * 0.04, duration: 0.3 }}
            >
              <span className="shrink-0 w-2 h-2 rounded-full bg-accent-400" />
              <span className="text-lg text-gray-700">{point}</span>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <motion.div
        className="rounded-3xl bg-primary-900 p-10 sm:p-14 text-center"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
      >
        <h3 className="text-2xl font-black text-white mb-3">
          まずはご相談ください
        </h3>
        <p className="text-lg text-white/60 mb-8 max-w-md mx-auto leading-relaxed">
          下記メールアドレスまでお気軽にお問い合わせください。
          通常1営業日以内にご返信いたします。
        </p>
        <a
          href="mailto:contact@ai-jedi.co.jp"
          className="inline-flex items-center gap-2.5 px-8 py-4 rounded-xl bg-white text-gray-900 text-lg font-bold hover:bg-gray-100 transition-colors"
        >
          <Mail size={20} />
          contact@ai-jedi.co.jp
        </a>
      </motion.div>
    </div>
  )
}
