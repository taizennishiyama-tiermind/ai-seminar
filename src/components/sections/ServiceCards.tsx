import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { services } from '@/data/services'
import { serviceIllustrations } from '@/data/illustrations'

export function ServiceCards() {
  return (
    <section className="mb-24">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.35 }}
        className="mb-10"
      >
        <h2 className="text-2xl sm:text-3xl font-black text-gray-900 tracking-tight mb-3">
          7つの事業領域
        </h2>
        <p className="text-lg sm:text-xl text-gray-500 leading-relaxed max-w-2xl">
          開発だけでも、コンサルだけでもない。
          事業として前に進めるために必要な要素を<strong className="text-gray-700">まとめて引き受けます。</strong>
        </p>
      </motion.div>

      <div className="space-y-4">
        {services.map((service, i) => {
          const illustration = serviceIllustrations[service.id]

          return (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            >
              <Link
                to={`/services/${service.id}`}
                className="group flex flex-col sm:flex-row items-start sm:items-center gap-5 p-6 sm:p-8 rounded-2xl border border-gray-200 bg-white hover:border-gray-300 hover:shadow-xl hover:shadow-black/5 transition-all relative overflow-hidden"
              >
                {/* Illustration */}
                {illustration && (
                  <div className="shrink-0 w-20 h-20 sm:w-24 sm:h-24 rounded-2xl overflow-hidden bg-gray-50 flex items-center justify-center">
                    <img src={illustration} alt="" className="w-full h-full object-cover" />
                  </div>
                )}

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-baseline gap-3 mb-1">
                    <span
                      className="text-sm font-black"
                      style={{ color: service.color }}
                    >
                      {service.number}
                    </span>
                    <h3 className="text-xl font-bold text-gray-900 truncate">
                      {service.title}
                    </h3>
                  </div>
                  <p className="text-lg text-gray-600 leading-relaxed mb-2">
                    {service.tagline}
                  </p>
                  <p className="text-base text-gray-400 line-clamp-2 hidden sm:block">
                    {service.description}
                  </p>
                </div>

                {/* Arrow */}
                <div className="shrink-0 hidden sm:flex items-center">
                  <ArrowRight
                    size={20}
                    className="text-gray-300 group-hover:text-gray-600 group-hover:translate-x-1 transition-all"
                  />
                </div>

                {/* Background number */}
                <span className="absolute -right-4 -bottom-6 text-[120px] font-black text-gray-50 select-none pointer-events-none leading-none">
                  {service.number}
                </span>
              </Link>
            </motion.div>
          )
        })}
      </div>
    </section>
  )
}
