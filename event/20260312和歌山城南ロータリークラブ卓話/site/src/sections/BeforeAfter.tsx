import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { SectionWrapper } from '../components/SectionWrapper'
import { SectionLabel } from '../components/SectionLabel'
import { InlineQA } from '../components/InlineQA'

type Tab = 'before' | 'after'

const BEFORE_STEPS = [
  { step: 1, label: '企画会議で要件を決める', time: '1日' },
  { step: 2, label: 'デザイナーに発注・打合せ', time: '3日' },
  { step: 3, label: 'デザイン初稿が届く → 修正依頼', time: '1週間' },
  { step: 4, label: 'エンジニアに開発を依頼', time: '2週間' },
  { step: 5, label: 'テスト・バグ修正', time: '1週間' },
  { step: 6, label: 'やっとリリース', time: '数日' },
]

const AFTER_STEPS = [
  { step: 1, label: 'やりたいことを文章にまとめる', time: '30分' },
  { step: 2, label: 'AIに指示を出す（チャットで送るだけ）', time: '5分' },
  { step: 3, label: '出てきた結果を確認し、調整を指示', time: '30分' },
  { step: 4, label: '微修正を繰り返して完成！', time: '1〜2時間' },
]

const SITE_SHOWCASES = [
  {
    title: 'ホームページサンプル',
    description: 'AIとの会話だけで制作したWebサイト。デザインからコーディングまで全てAIが担当。',
    image: '/captures/homepage_sample.png',
    url: 'https://tier-mind-dev-lp-v2.vercel.app/',
    badge: 'AIで制作',
  },
]

export function BeforeAfter() {
  const [activeTab, setActiveTab] = useState<Tab>('before')

  return (
    <SectionWrapper id="before-after" bg="gray">
      <SectionLabel
        category="CHAPTER 03"
        title="たとえば「自社のWebサイトを作りたい」場合"
        subtitle="外注に出すか、AIに任せるか。同じゴールでも、かかる時間もお金もまるで違います。"
      />

      {/* Tab switcher */}
      <div className="flex justify-center mb-8">
        <div className="inline-flex rounded-xl bg-gray-100 p-1.5 gap-1">
          {(['before', 'after'] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className="relative px-8 py-3 text-base font-bold rounded-lg transition-colors z-10"
            >
              {activeTab === tab && (
                <motion.div
                  layoutId="comparison-tab"
                  className="absolute inset-0 bg-white rounded-lg shadow-sm"
                  transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                />
              )}
              <span
                className={`relative z-10 ${
                  activeTab === tab
                    ? tab === 'before'
                      ? 'text-red-500'
                      : 'text-green-600'
                    : 'text-gray-400'
                }`}
              >
                {tab === 'before' ? '従来のやり方' : 'AI活用後'}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Content panels */}
      <AnimatePresence mode="wait">
        {activeTab === 'before' ? (
          <motion.div
            key="before"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            transition={{ duration: 0.3 }}
            className="rounded-2xl border-2 border-red-200/60 bg-gradient-to-b from-red-50/50 to-white p-6 sm:p-8"
          >
            <div className="flex flex-wrap items-center gap-3 mb-8">
              <span className="text-lg font-bold text-red-500">
                合計: 約1ヶ月〜1.5ヶ月
              </span>
              <span className="text-base text-red-300">
                外注費 50万〜200万円
              </span>
            </div>
            <div className="space-y-4">
              {BEFORE_STEPS.map((s, i) => (
                <motion.div
                  key={s.step}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.06 }}
                  className="flex items-center gap-4"
                >
                  <span className="shrink-0 w-9 h-9 rounded-full bg-red-100 text-red-500 text-sm font-bold flex items-center justify-center">
                    {s.step}
                  </span>
                  <span className="flex-1 text-base text-gray-700">{s.label}</span>
                  <span className="text-sm text-red-500 bg-red-50 rounded-full px-3 py-1">
                    {s.time}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="after"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            className="rounded-2xl border-2 border-green-200/60 bg-gradient-to-b from-green-50/50 to-white p-6 sm:p-8"
          >
            <div className="flex flex-wrap items-center gap-3 mb-8">
              <span className="text-lg font-bold text-green-600">
                合計: 半日〜2日
              </span>
              <motion.span
                animate={{ scale: [1, 1.08, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="text-sm font-bold text-green-600 bg-green-100 px-3 py-1 rounded-full"
              >
                10倍以上 速い
              </motion.span>
            </div>
            <div className="space-y-4">
              {AFTER_STEPS.map((s, i) => (
                <motion.div
                  key={s.step}
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.06 }}
                  className="flex items-center gap-4"
                >
                  <span className="shrink-0 w-9 h-9 rounded-full bg-green-100 text-green-600 text-sm font-bold flex items-center justify-center">
                    {s.step}
                  </span>
                  <span className="flex-1 text-base text-gray-700">{s.label}</span>
                  <span className="text-sm text-green-600 bg-green-50 rounded-full px-3 py-1">
                    {s.time}
                  </span>
                </motion.div>
              ))}
            </div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="mt-8 p-5 rounded-xl bg-green-50/50 border border-green-100"
            >
              <p className="text-base text-green-700 leading-relaxed">
                <strong>ポイント:</strong> ステップ3と4を繰り返すだけで、どんどん完成度が上がります。
                修正のたびに外注先とやりとりする必要はありません。
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Site showcases */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-12"
      >
        <h3 className="text-xl font-bold text-gray-800 mb-6">
          実際にAIで作ったサイトがこちら
        </h3>
        <div className="grid grid-cols-1 gap-6">
          {SITE_SHOWCASES.map((site) => (
            <a
              key={site.title}
              href={site.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group block rounded-2xl border border-gray-200 bg-white overflow-hidden hover:border-primary-300 hover:shadow-lg transition-all"
            >
              <div className="relative">
                <img
                  src={site.image}
                  alt={site.title}
                  className="w-full h-auto object-cover"
                />
                <span className="absolute top-4 right-4 text-xs font-bold text-white bg-primary-500 px-3 py-1.5 rounded-full shadow-sm">
                  {site.badge}
                </span>
              </div>
              <div className="p-5">
                <p className="text-lg font-bold text-gray-900 group-hover:text-primary-600 transition-colors mb-1">
                  {site.title}
                </p>
                <p className="text-base text-gray-500">{site.description}</p>
                <p className="text-sm text-primary-500 font-medium mt-2 group-hover:underline">
                  クリックしてサイトを見る →
                </p>
              </div>
            </a>
          ))}
        </div>
      </motion.div>

      <InlineQA
        avatarOffset={2}
        items={[
          {
            q: 'AIが作ったものって、そのまま使えるレベルなの？',
            a: '正直に言うと「80点」くらいです。ただ、ゼロから100点を目指すより、80点を受け取って100点に仕上げる方がはるかに速い。この「80点からスタートできる」のがAIの最大の価値です。',
          },
          {
            q: 'うちは小さい会社だけど、大企業向けの話じゃないの？',
            a: 'むしろ逆です。大企業は既存の仕組みがあって動きが遅い。少人数の会社こそ「社長がAIに指示→即実行」ができる。意思決定が速い会社ほど恩恵が大きいです。',
          },
        ]}
      />
    </SectionWrapper>
  )
}
