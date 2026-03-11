import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { SectionWrapper } from '../components/SectionWrapper'
import { SectionLabel } from '../components/SectionLabel'
import { InlineQA } from '../components/InlineQA'
import paintVisionPreview from '../../../../../assets/captcha/paintvision_preview.png'
import illustrationM08White from '../../../../../assets/png/m_08_white.png'

type LineType = 'text' | 'bullet' | 'file' | 'success' | 'empty'

interface AiLine {
  type: LineType
  text: string
}

const AI_LINES: AiLine[] = [
  { type: 'text',    text: 'PaintVision アプリを作成します。' },
  { type: 'empty',   text: '' },
  { type: 'bullet',  text: '・画像アップロード機能' },
  { type: 'bullet',  text: '・AI画像生成で外壁の色を変更' },
  { type: 'bullet',  text: '・カラーパレットから好みの色を選択' },
  { type: 'bullet',  text: '・ビフォー/アフターの比較表示' },
  { type: 'empty',   text: '' },
  { type: 'file',    text: '+ src/App.tsx' },
  { type: 'file',    text: '+ src/components/ImageEditor.tsx' },
  { type: 'file',    text: '+ src/components/ColorPalette.tsx' },
  { type: 'file',    text: '+ src/services/geminiService.ts' },
  { type: 'empty',   text: '' },
  { type: 'success', text: '✓ 6ファイル作成完了 — PaintVision 完成' },
]

function StreamingAiResponse() {
  const [visibleCount, setVisibleCount] = useState(0)
  const ref = useRef<HTMLDivElement>(null)
  const started = useRef(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true
          let i = 0
          const id = setInterval(() => {
            i++
            setVisibleCount(i)
            if (i >= AI_LINES.length) clearInterval(id)
          }, 160)
        }
      },
      { threshold: 0.3 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  const colorClass = (type: LineType) => {
    switch (type) {
      case 'bullet':  return 'text-gray-700'
      case 'file':    return 'text-emerald-600 font-mono'
      case 'success': return 'text-blue-600 font-bold'
      default:        return 'text-gray-800'
    }
  }

  return (
    <div ref={ref} className="rounded-2xl border border-gray-200 bg-white overflow-hidden shadow-sm">
      {/* Header */}
      <div className="px-5 py-3 bg-gray-50 border-b border-gray-200 flex items-center gap-3">
        <span className="w-3 h-3 rounded-full bg-green-400 animate-pulse" />
        <span className="text-sm font-semibold text-gray-700">Google AI Studio</span>
      </div>

      {/* User bubble */}
      <div className="p-5 pb-3">
        <div className="flex justify-end">
          <div className="max-w-[85%] rounded-2xl rounded-br-sm bg-primary-600 text-white px-4 py-3 text-base leading-relaxed whitespace-pre-line">
            家の外壁の画像をアップロードしたら、AIがペンキの色を自動で塗り替えてくれるアプリを作って。色を選べるカラーパレット付きで。
          </div>
        </div>
      </div>

      {/* AI streaming bubble */}
      <div className="px-5 pb-5">
        <div className="flex justify-start">
          <div className="max-w-[85%] rounded-2xl rounded-bl-sm bg-gray-100 text-gray-800 px-4 py-3 text-base leading-relaxed">
            <span className="block text-xs font-bold text-primary-500 mb-2">AI</span>
            <div className="font-mono text-[14px] leading-6 space-y-0.5">
              {AI_LINES.slice(0, visibleCount).map((line, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -6 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.2 }}
                  className={line.type === 'empty' ? 'h-2' : colorClass(line.type)}
                >
                  {line.text}
                </motion.div>
              ))}
              {visibleCount < AI_LINES.length && (
                <motion.span
                  animate={{ opacity: [1, 0] }}
                  transition={{ duration: 0.5, repeat: Infinity, repeatType: 'reverse' }}
                  className="inline-block w-2 h-4 bg-primary-400 align-middle"
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export function DemoTeaser() {
  return (
    <SectionWrapper id="demo">
      <SectionLabel
        category="CHAPTER 04"
        title="AIでアプリも作れる——「PaintVision」を実演"
        subtitle="Webサイトだけじゃない。画像生成AIを使ったアプリケーションも、日本語の指示だけで作れます。"
      />

      {/* What is PaintVision */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="p-6 sm:p-8 rounded-2xl bg-white border border-gray-200 mb-8"
      >
        <div className="flex items-start gap-6">
          <div className="flex-1">
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              PaintVision とは？
            </h3>
            <p className="text-lg text-gray-700 leading-relaxed">
              家の写真をアップロードするだけで、
              <strong className="text-gray-900">AIが外壁のペンキ色を自動で塗り替えた画像</strong>を生成するアプリです。
              塗装業者さんがお客さんに「この色にするとこうなりますよ」とシミュレーション画像を見せられる——
              そんなツールが、AIへの指示だけで作れてしまいます。
            </p>
          </div>
          <motion.img
            src={illustrationM08White}
            alt=""
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="hidden md:block shrink-0 w-32 lg:w-40 h-auto mix-blend-multiply"
          />
        </div>
      </motion.div>

      {/* Tool used */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="p-5 rounded-xl bg-primary-50/50 border border-primary-100 mb-8"
      >
        <p className="text-sm font-bold text-primary-600 uppercase tracking-widest mb-2">
          今回のデモで使うツール
        </p>
        <div className="flex flex-wrap items-center gap-4">
          <a
            href="https://aistudio.google.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white border border-primary-200 hover:border-primary-400 hover:shadow-md transition-all"
          >
            <span className="text-lg font-bold text-gray-900">Google AI Studio</span>
            <span className="text-sm text-primary-500">↗</span>
          </a>
          <p className="text-base text-gray-600">
            Googleが提供するAI開発環境。Geminiモデルを使って画像生成やアプリ開発ができます。
          </p>
        </div>
      </motion.div>

      {/* Chat demo */}
      <StreamingAiResponse />

      {/* Result: PaintVision app screenshot */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
        className="mt-8 rounded-2xl border border-gray-200 overflow-hidden shadow-sm"
      >
        <div className="bg-gray-100 border-b border-gray-200 px-4 py-2.5 flex items-center gap-2">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-red-400" />
            <div className="w-3 h-3 rounded-full bg-yellow-400" />
            <div className="w-3 h-3 rounded-full bg-green-400" />
          </div>
          <div className="flex-1 mx-4">
            <div className="bg-white rounded-md px-3 py-1.5 text-sm text-gray-500 font-mono border border-gray-200">
              localhost:5173 — PaintVision
            </div>
          </div>
        </div>
        <div className="bg-white">
          <img
            src={paintVisionPreview}
            alt="PaintVision アプリのスクリーンショット"
            className="w-full h-auto"
          />
        </div>
      </motion.div>

      {/* Live demo callout */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className="mt-8 p-6 sm:p-8 rounded-2xl bg-accent-50 border border-dashed border-accent-400"
      >
        <p className="text-xs font-bold text-accent-600 uppercase tracking-widest mb-2">
          当日のデモ
        </p>
        <p className="text-lg text-gray-700 leading-relaxed">
          卓話の当日は、会場で<strong className="text-gray-900">リアルタイムにAIでアプリを作る</strong>デモを行います。
          画像生成AIを使って「家の外壁の色を塗り替える」アプリを、その場で一から構築してお見せします。
        </p>
      </motion.div>

      <InlineQA
        avatarOffset={3}
        items={[
          {
            q: 'プログラミングの知識がないとこういうのは無理では？',
            a: 'プログラミングの知識があれば、修正指示の語彙力や「これはできる・できない」の判断力は確かに上がります。ただ、基本的には「何を作りたいか」「ここをこう変えたい」という言語化能力さえあれば、専門用語を知らなくても作り切ることは可能です。',
          },
          {
            q: '作ったWebサイトやアプリは本当にそのまま公開できるの？',
            a: '作っただけでは公開できません。「デプロイ」というインターネット上に公開する作業が必要です。ここは少し専門的な知識が必要ですが、これもAIに聞けば手順を教えてくれます。学ぶ姿勢は必要ですが、ハードルは確実に下がっています。',
          },
        ]}
      />
    </SectionWrapper>
  )
}
