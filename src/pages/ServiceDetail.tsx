import { useParams, Link, Navigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowLeft, ArrowRight, Check } from 'lucide-react'
import { services, getServiceById } from '@/data/services'
import { faqItems } from '@/data/faq'
import { ScenarioCard } from '@/components/ui/ScenarioCard'
import { serviceIllustrations } from '@/data/illustrations'

const serviceFaqMap: Record<string, readonly string[]> = {
  strategy: ['進め方'],
  development: ['AI駆動開発'],
  training: ['研修'],
  poc: ['進め方'],
  talent: ['体制'],
  advisory: ['費用・契約'],
  operations: ['選ぶ理由'],
}

export function ServiceDetail() {
  const { id } = useParams<{ id: string }>()
  const service = id ? getServiceById(id) : undefined

  if (!service) {
    return <Navigate to="/" replace />
  }

  const currentIndex = services.findIndex((s) => s.id === service.id)
  const prevService = currentIndex > 0 ? services[currentIndex - 1] : undefined
  const nextService = currentIndex < services.length - 1 ? services[currentIndex + 1] : undefined
  const illustration = serviceIllustrations[service.id]

  const relatedCategories = serviceFaqMap[service.id] ?? []
  const relatedFaq = faqItems.filter((f) => relatedCategories.includes(f.category)).slice(0, 3)

  return (
    <div>
      {/* Back */}
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
        className="flex flex-col md:flex-row items-start md:items-center gap-8 mb-12 pb-10 border-b border-gray-200"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        <div className="flex-1">
          <div className="flex items-baseline gap-3 mb-4">
            <span
              className="text-lg font-black"
              style={{ color: service.color }}
            >
              SERVICE {service.number}
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-black text-gray-900 leading-tight tracking-tight mb-4">
            {service.title}
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 leading-relaxed border-l-4 border-primary-800 pl-5">
            {service.tagline}
          </p>
        </div>

        {illustration && (
          <motion.div
            className="shrink-0 w-36 md:w-48"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.4 }}
          >
            <img src={illustration} alt="" className="w-full h-auto" />
          </motion.div>
        )}
      </motion.div>

      {/* Description */}
      <motion.section
        className="mb-12"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1, duration: 0.35 }}
      >
        <h2 className="text-xl sm:text-2xl font-black text-gray-900 tracking-tight mb-4">
          何をする事業か
        </h2>
        <p className="text-lg sm:text-xl text-gray-700 leading-relaxed">
          {service.description}
        </p>
      </motion.section>

      {/* Concrete scenario */}
      <motion.section
        className="mb-12"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1, duration: 0.35 }}
      >
        <h2 className="text-xl sm:text-2xl font-black text-gray-900 tracking-tight mb-3">
          具体的なシナリオ
        </h2>
        <p className="text-base text-gray-400 mb-4">
          ※ 守秘義務のため、実際の事例をもとに再構成した想定シナリオです。
        </p>
        <ScenarioCard scenario={service.scenario} />
      </motion.section>

      {/* Support + Outcomes side by side */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-12">
        {/* Support contents */}
        <motion.section
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.35 }}
        >
          <h2 className="text-xl font-black text-gray-900 tracking-tight mb-4">
            具体的な支援内容
          </h2>
          <div className="rounded-2xl border border-gray-200 overflow-hidden divide-y divide-gray-100">
            {service.supports.map((item, i) => (
              <motion.div
                key={item}
                className="flex items-center gap-4 px-6 py-5"
                initial={{ opacity: 0, x: -8 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.04, duration: 0.3 }}
              >
                <span
                  className="shrink-0 text-lg font-black"
                  style={{ color: service.color }}
                >
                  {i + 1}.
                </span>
                <span className="text-lg text-gray-700">{item}</span>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Outcomes */}
        <motion.section
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.35 }}
        >
          <h2 className="text-xl font-black text-gray-900 tracking-tight mb-4">
            顧客が得られるもの
          </h2>
          <div className="space-y-3">
            {service.outcomes.map((outcome, i) => (
              <motion.div
                key={outcome}
                className="flex items-start gap-3 p-5 rounded-2xl bg-green-50/50 border border-green-100"
                initial={{ opacity: 0, x: -8 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.04, duration: 0.3 }}
              >
                <Check size={20} className="text-green-500 shrink-0 mt-0.5" />
                <span className="text-lg text-gray-800 font-medium">{outcome}</span>
              </motion.div>
            ))}
          </div>
        </motion.section>
      </div>

      {/* Related FAQ */}
      {relatedFaq.length > 0 && (
        <motion.section
          className="mb-12"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.35 }}
        >
          <h2 className="text-xl font-black text-gray-900 tracking-tight mb-4">
            関連するよくある質問
          </h2>
          <div className="space-y-4">
            {relatedFaq.map((faq) => (
              <div key={faq.id} className="rounded-2xl border border-gray-200 bg-white p-6">
                <p className="text-lg font-bold text-gray-800 mb-3">{faq.question}</p>
                <p className="text-lg text-gray-600 leading-relaxed bg-gray-50 rounded-xl p-5">{faq.answer}</p>
              </div>
            ))}
          </div>
        </motion.section>
      )}

      {/* Navigation */}
      <div className="flex items-center justify-between pt-8 border-t border-gray-200">
        {prevService ? (
          <Link
            to={`/services/${prevService.id}`}
            className="inline-flex items-center gap-2 text-lg font-medium text-gray-500 hover:text-gray-800 transition-colors"
          >
            <ArrowLeft size={16} />
            {prevService.shortTitle}
          </Link>
        ) : (
          <div />
        )}
        {nextService ? (
          <Link
            to={`/services/${nextService.id}`}
            className="inline-flex items-center gap-2 text-lg font-medium text-gray-500 hover:text-gray-800 transition-colors"
          >
            {nextService.shortTitle}
            <ArrowRight size={16} />
          </Link>
        ) : (
          <Link
            to="/faq"
            className="inline-flex items-center gap-2 text-lg font-medium text-gray-500 hover:text-gray-800 transition-colors"
          >
            よくある質問
            <ArrowRight size={16} />
          </Link>
        )}
      </div>
    </div>
  )
}
