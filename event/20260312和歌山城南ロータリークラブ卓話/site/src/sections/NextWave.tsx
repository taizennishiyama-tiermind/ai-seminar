import { motion, useSpring, useTransform, useInView } from 'framer-motion'
import { useRef, useEffect } from 'react'
import { SectionWrapper } from '../components/SectionWrapper'
import { SectionLabel } from '../components/SectionLabel'
import { InlineQA } from '../components/InlineQA'

function AnimatedCounter({ value, suffix }: { readonly value: number; readonly suffix: string }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const spring = useSpring(0, { duration: 2000 })
  const rounded = useTransform(spring, (latest) => Math.round(latest))

  useEffect(() => {
    if (isInView) {
      spring.set(value)
    }
  }, [isInView, spring, value])

  return (
    <span ref={ref} className="tabular-nums">
      <motion.span>{rounded}</motion.span>
      {suffix}
    </span>
  )
}

const EVOLUTION = [
  {
    phase: '今ここ',
    title: '文章・画像・コードを作る',
    description: 'ChatGPTやClaudeで文章を書いたり、画像を生成したり、プログラムを書いたりできる。画面の中の作業が中心。',
    active: true,
  },
  {
    phase: '始まっている',
    title: 'AIが「目」を持ち、映像を理解する',
    description: '工場のカメラ映像を見て不良品を発見したり、農作物の生育状態を判断したり。AIが「見る」能力を持ち始めている。',
    active: true,
  },
  {
    phase: 'もうすぐ',
    title: 'AIが「手足」を持ち、動き出す',
    description: 'AIの判断をロボットの動作に変換。配送ロボット、介護支援、自動収穫——「見て、考えて、動く」が一体に。',
    active: false,
  },
]

export function NextWave() {
  return (
    <SectionWrapper id="next-wave">
      <SectionLabel
        category="CHAPTER 07"
        title="この先、何が起きるのか"
        subtitle="AIはチャットだけで終わりません。画面の外に出て、物理的に動き出す未来がすぐそこまで来ています。"
      />

      {/* Stats */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="grid grid-cols-2 gap-4 mb-12"
      >
        {[
          { value: 78, suffix: '%', label: 'の日本企業がAI導入を検討中' },
          { value: 40, suffix: '%', label: 'の業務効率化（AI導入企業の平均）' },
        ].map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="p-6 rounded-2xl border border-gray-200 bg-white text-center"
          >
            <div className="text-3xl sm:text-4xl font-black text-gray-900 mb-2">
              <AnimatedCounter value={stat.value} suffix={stat.suffix} />
            </div>
            <p className="text-base text-gray-500">{stat.label}</p>
          </motion.div>
        ))}
      </motion.div>

      {/* Evolution timeline */}
      <h3 className="text-xl font-bold text-gray-800 mb-6">
        AIの進化——3つのステージ
      </h3>

      <div className="space-y-5 mb-12">
        {EVOLUTION.map((step, i) => (
          <motion.div
            key={step.title}
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.4 }}
            className={`p-6 sm:p-8 rounded-2xl border bg-white ${
              step.active
                ? 'border-primary-200'
                : 'border-amber-200'
            }`}
          >
            <div className="flex flex-wrap items-center gap-3 mb-3">
              <span
                className={`text-sm font-bold px-3 py-1 rounded-full ${
                  step.active
                    ? 'bg-primary-50 text-primary-600'
                    : 'bg-amber-50 text-amber-600 animate-pulse'
                }`}
              >
                {step.phase}
              </span>
            </div>
            <h4 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h4>
            <p className="text-base text-gray-600 leading-relaxed">{step.description}</p>
          </motion.div>
        ))}
      </div>

      {/* Concrete near-future */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="p-6 sm:p-8 rounded-2xl bg-white border border-gray-200 mb-12"
      >
        <h3 className="text-xl font-bold text-gray-900 mb-4">
          5年後、こうなる——身近な変化の例
        </h3>
        <div className="space-y-4">
          {[
            {
              場面: '飲食店',
              変化: '注文受付から調理補助までロボットが担当。人はおもてなしと経営判断に集中。',
            },
            {
              場面: '建設現場',
              変化: 'ドローンが現場を撮影→AIが進捗管理→レポートを自動生成。現場監督の「目」が10倍に。',
            },
            {
              場面: '農業',
              変化: 'AIカメラが生育状態を判定→自動で水やり・収穫ロボットが動く。高齢農家の負担が激減。',
            },
            {
              場面: '小売業',
              変化: '来客データをAIが分析→「明日はカレールーが売れる」と需要予測→自動発注。欠品と廃棄が半減。',
            },
          ].map((item, i) => (
            <motion.div
              key={item.場面}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              className="flex gap-4 p-4 rounded-xl bg-gray-50"
            >
              <span className="shrink-0 text-base font-bold text-primary-600 w-20">
                {item.場面}
              </span>
              <p className="text-base text-gray-700 leading-relaxed">{item.変化}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Key message */}
      <motion.div
        initial={{ opacity: 0, x: -12 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="pl-6 border-l-4 border-primary-400"
      >
        <p className="text-xl font-bold text-gray-800 leading-relaxed">
          恐れるより先に、現実的に理解し、使い方と備え方を考える。
          <br />
          それが今、経営者に求められていることです。
        </p>
      </motion.div>

      <InlineQA
        avatarOffset={5}
        items={[
          {
            q: 'ロボットの話は大企業の話でしょう？うちには関係ない？',
            a: '今は大企業中心ですが、5年で価格は10分の1になると言われています。スマホがそうだったように、「うちには関係ない」が「使わないと負ける」に変わるスピードは速い。今のうちに「何に使えるか」を考えておくことに価値があります。',
          },
          {
            q: '人手不足の解消にはなるけど、既存の社員はどうなる？',
            a: 'AIやロボットが代替するのは「作業」であって「判断」ではありません。むしろ社員の役割が「作業者→管理者・判断者」にシフトし、より付加価値の高い仕事に集中できるようになります。',
          },
        ]}
      />
    </SectionWrapper>
  )
}
