import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { SectionWrapper } from '../components/SectionWrapper'
import illustrationL01SquareWhite from '../../../../../assets/png/l_01_square_white.png'

const TAKEAWAYS = [
  {
    number: '01',
    title: 'チャットで日本語を送るだけで、資料も画像もWebサイトも作れる',
    detail: '特別な知識はいらない。LINEを送る感覚で使える。',
  },
  {
    number: '02',
    title: '大切なのは「何をさせるか」を決める経営者の判断力',
    detail: 'AIは超優秀な部下。でも「何をやるか」を決めるのは社長の仕事。',
  },
  {
    number: '03',
    title: '「何ができるか」は、触り続けた人にしか見えない',
    detail: 'AIの能力を知ること＝部下の得意分野を知ること。日頃から触り続ける時間の投資が、「これをAIにやらせよう」という判断力を育てる。',
  },
  {
    number: '04',
    title: 'AIは画面の外に出て、物理的に動き出す',
    detail: '恐れるより先に理解する。「使えるところ」から小さく始める。',
  },
]

const FIRST_STEPS = [
  { step: '今日', action: 'ChatGPT か Claude をスマホにインストールする（無料）' },
  { step: '明日', action: '「明日の挨拶文を考えて」と話しかけてみる' },
  { step: '1週間後', action: 'メールの下書きや議事録の整理に使ってみる' },
  { step: '1ヶ月後', action: '毎日10分でも触り続ける。「これもAIでできるかも？」が自然に浮かぶようになる' },
]

export function Closing() {
  return (
    <SectionWrapper id="closing" bg="primary">
      <div className="text-center mb-12">
        <motion.span
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-block text-xs font-bold text-primary-500 uppercase tracking-widest mb-3"
        >
          CLOSING
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.06 }}
          className="text-2xl sm:text-3xl lg:text-4xl font-black text-gray-900 leading-[1.3] tracking-[0.01em]"
        >
          今日のまとめ
        </motion.h2>
      </div>

      {/* 3 takeaways */}
      <div className="space-y-5 mb-14">
        {TAKEAWAYS.map((item, i) => (
          <motion.div
            key={item.number}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-start gap-5 p-6 sm:p-8 rounded-2xl border border-white/60 bg-white/80 backdrop-blur-sm"
          >
            <span className="shrink-0 text-4xl font-black text-primary-200">
              {item.number}
            </span>
            <div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-1">
                {item.title}
              </h3>
              <p className="text-base text-gray-600 leading-relaxed">{item.detail}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* First steps */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="p-6 sm:p-8 rounded-2xl bg-white border border-gray-200 mb-12"
      >
        <h3 className="text-xl font-bold text-gray-900 mb-6">
          まずはここから——4ステップ
        </h3>
        <div className="space-y-4">
          {FIRST_STEPS.map((item, i) => (
            <motion.div
              key={item.step}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="flex items-baseline gap-4"
            >
              <span className="shrink-0 text-sm font-bold text-primary-500 bg-primary-50 px-3 py-1 rounded-full w-20 text-center">
                {item.step}
              </span>
              <p className="text-base text-gray-700 leading-relaxed">{item.action}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Final message */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className="text-center p-8 sm:p-10 rounded-2xl bg-white border border-gray-200"
      >
        <img
          src={illustrationL01SquareWhite}
          alt=""
          className="w-36 h-36 mx-auto mb-6 mix-blend-multiply"
        />
        <h3 className="text-xl sm:text-2xl font-black text-gray-900 mb-4">
          便利さの話にとどまらない、
          <br />
          <span className="text-gradient">"AI時代の前提"</span>を
          <br />
          一緒に整理する30分。
        </h3>
        <p className="text-base text-gray-500 leading-relaxed max-w-lg mx-auto mb-8">
          この卓話が、AIとの付き合い方を考えるきっかけになれば幸いです。
          <br />
          <strong className="text-gray-700">触り続けることが、最高の投資です。</strong>
          <br />
          ご質問やデモのリクエストもお気軽にどうぞ。
        </p>

        <motion.div
          whileHover={{ scale: 1.02 }}
          className="group inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-gray-900 text-white text-base font-semibold hover:bg-gray-800 transition-colors cursor-default"
        >
          まず触ってみよう。そして、触り続けよう。
          <ArrowRight
            size={18}
            className="group-hover:translate-x-0.5 transition-transform"
          />
        </motion.div>
      </motion.div>

      {/* Footer */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5 }}
        className="mt-16 text-center"
      >
        <p className="text-sm text-gray-400">
          2026年3月12日 和歌山城南ロータリークラブ 卓話
        </p>
        <p className="text-xs text-gray-300 mt-1">
          このサイト自体も AI (Claude Code) で制作されています
        </p>
      </motion.div>
    </SectionWrapper>
  )
}
