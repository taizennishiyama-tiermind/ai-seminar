import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { SectionWrapper } from '../components/SectionWrapper'
import { SectionLabel } from '../components/SectionLabel'
import { InlineQA } from '../components/InlineQA'

interface TerminalLine {
  readonly type: 'input' | 'output' | 'ai' | 'system' | 'file-create'
  readonly text: string
}

const TERMINAL_LINES: readonly TerminalLine[] = [
  { type: 'input', text: '$ claude' },
  { type: 'system', text: 'Claude Code v1.2.0 — AI pair programming' },
  { type: 'system', text: '' },
  { type: 'input', text: '> 家の外壁の画像をアップロードしたら、' },
  { type: 'input', text: '  AIがペンキの色を自動で塗り替えてくれるアプリを作って。' },
  { type: 'input', text: '  色を選べるカラーパレット付きで。' },
  { type: 'system', text: '' },
  { type: 'ai', text: 'PaintVision アプリを作成します。' },
  { type: 'ai', text: '  - 画像アップロード機能' },
  { type: 'ai', text: '  - AI画像生成で外壁の色を変更' },
  { type: 'ai', text: '  - カラーパレットから好みの色を選択' },
  { type: 'ai', text: '  - ビフォー/アフターの比較表示' },
  { type: 'system', text: '' },
  { type: 'file-create', text: '+ src/App.tsx' },
  { type: 'file-create', text: '+ src/components/ImageEditor.tsx' },
  { type: 'file-create', text: '+ src/components/ColorPalette.tsx' },
  { type: 'file-create', text: '+ src/services/geminiService.ts' },
  { type: 'system', text: '' },
  { type: 'output', text: '✓ 開発サーバー起動中... localhost:5173' },
  { type: 'output', text: '✓ 6ファイル作成完了 — PaintVision 完成' },
]

export function DemoTeaser() {
  const [visibleLines, setVisibleLines] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)
  const hasStarted = useRef(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted.current) {
          hasStarted.current = true
          let i = 0
          const interval = setInterval(() => {
            i++
            setVisibleLines(i)
            if (i >= TERMINAL_LINES.length) {
              clearInterval(interval)
            }
          }, 200)
        }
      },
      { threshold: 0.3 }
    )

    if (containerRef.current) {
      observer.observe(containerRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const getLineColor = (type: TerminalLine['type']) => {
    switch (type) {
      case 'input': return 'text-[#4ade80]'
      case 'output': return 'text-[#999]'
      case 'ai': return 'text-[#c084fc]'
      case 'system': return 'text-[#569cd6]'
      case 'file-create': return 'text-[#89d185]'
    }
  }

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
            src="/illustrations/m_08_white.png"
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

      {/* VS Code Simulator */}
      <motion.div
        ref={containerRef}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="rounded-2xl shadow-2xl shadow-black/20 border border-gray-800/50 overflow-hidden"
      >
        {/* Title bar */}
        <div className="bg-[#1e1e1e] px-4 py-3 flex items-center gap-3">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
            <div className="w-3 h-3 rounded-full bg-[#febc2e]" />
            <div className="w-3 h-3 rounded-full bg-[#28c840]" />
          </div>
          <span className="text-sm text-gray-400 font-mono">
            paint-vision — Claude Code
          </span>
        </div>

        {/* Terminal */}
        <div className="bg-[#1e1e1e] p-5 sm:p-6 font-mono text-[15px] leading-7 min-h-[420px] overflow-hidden">
          {TERMINAL_LINES.slice(0, visibleLines).map((line, i) => (
            <div key={i} className={getLineColor(line.type)}>
              {line.type === 'ai' && i === 7 && (
                <span className="text-[#c084fc] font-bold">AI: </span>
              )}
              {line.text}
            </div>
          ))}
          {visibleLines < TERMINAL_LINES.length && (
            <motion.span
              animate={{ opacity: [1, 0] }}
              transition={{ duration: 0.6, repeat: Infinity, repeatType: 'reverse' }}
              className="inline-block w-2.5 h-5 bg-[#4ade80] ml-0.5"
            />
          )}
        </div>

        {/* Status bar */}
        <div className="bg-[#007acc] px-4 py-1.5 flex items-center justify-between">
          <span className="text-xs text-white/80 font-mono">main</span>
          <span className="text-xs text-white/80 font-mono">TypeScript React</span>
        </div>
      </motion.div>

      {/* Result: PaintVision app mock */}
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
        <div className="bg-white p-8 sm:p-10">
          <div className="text-center mb-6">
            <h4 className="text-2xl font-black text-gray-900 mb-2">
              PaintVision
            </h4>
            <p className="text-base text-gray-500">
              家の写真をアップロード → AIが外壁の色を塗り替え
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4 max-w-lg mx-auto mb-6">
            <div className="rounded-xl bg-gray-100 p-4 text-center">
              <div className="w-full h-28 rounded-lg bg-gradient-to-br from-gray-200 to-gray-300 mb-3 flex items-center justify-center">
                <span className="text-3xl">🏠</span>
              </div>
              <p className="text-sm font-bold text-gray-600">Before</p>
            </div>
            <div className="rounded-xl bg-blue-50 p-4 text-center">
              <div className="w-full h-28 rounded-lg bg-gradient-to-br from-blue-200 to-blue-300 mb-3 flex items-center justify-center">
                <span className="text-3xl">🏠</span>
              </div>
              <p className="text-sm font-bold text-blue-600">After</p>
            </div>
          </div>
          <div className="flex justify-center gap-2 max-w-xs mx-auto">
            {['#E74C3C', '#3498DB', '#2ECC71', '#F39C12', '#9B59B6', '#1ABC9C'].map((color) => (
              <div
                key={color}
                className="w-8 h-8 rounded-full border-2 border-white shadow-sm"
                style={{ backgroundColor: color }}
              />
            ))}
          </div>
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
