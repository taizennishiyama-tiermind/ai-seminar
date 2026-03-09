import { motion } from 'framer-motion'

const QUESTIONER_AVATARS = [
  's_human03', // bob hair woman
  's_human10', // ponytail woman green
  's_human16', // navy profile woman
  's_human18', // gray hair man profile
  's_human01', // curly hair person
  's_human12', // dark curly side profile
]

interface QAItem {
  readonly q: string
  readonly a: string
}

interface InlineQAProps {
  readonly items: readonly QAItem[]
  readonly avatarOffset?: number
}

export function InlineQA({ items, avatarOffset = 0 }: InlineQAProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="mt-12 p-6 sm:p-8 rounded-2xl bg-gray-50 border border-gray-200"
    >
      <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-6">
        ここで気になるギモン
      </p>
      <div className="space-y-8">
        {items.map((item, i) => {
          const avatarIdx = (i + avatarOffset) % QUESTIONER_AVATARS.length
          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
            >
              {/* Question with avatar */}
              <div className="flex items-start gap-4 mb-3">
                <div className="shrink-0 w-11 h-11 rounded-full bg-gray-100 border-2 border-gray-200 overflow-hidden">
                  <img
                    src={`/illustrations/${QUESTIONER_AVATARS[avatarIdx]}.png`}
                    alt=""
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <div className="flex-1 p-4 rounded-2xl rounded-tl-sm bg-white border border-gray-200">
                  <p className="text-base font-bold text-gray-800 leading-relaxed">
                    {item.q}
                  </p>
                </div>
              </div>
              {/* Answer */}
              <div className="flex items-start gap-4 pl-4">
                <div className="shrink-0 w-11 h-11 rounded-full bg-primary-50 border-2 border-primary-100 flex items-center justify-center">
                  <span className="text-sm font-black text-primary-500">A</span>
                </div>
                <div className="flex-1 p-4 rounded-2xl rounded-tl-sm bg-primary-50/50 border border-primary-100">
                  <p className="text-base text-gray-700 leading-relaxed">
                    {item.a}
                  </p>
                </div>
              </div>
            </motion.div>
          )
        })}
      </div>
    </motion.div>
  )
}
