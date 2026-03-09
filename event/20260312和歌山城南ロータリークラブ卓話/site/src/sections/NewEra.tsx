import { motion } from 'framer-motion'
import { SectionWrapper } from '../components/SectionWrapper'
import { SectionLabel } from '../components/SectionLabel'
import { ChatBubble } from '../components/ChatBubble'
import { InlineQA } from '../components/InlineQA'

const CAPABILITIES = [
  {
    icon: '/illustrations/s_01.png',
    title: '文章・メールを書く',
    desc: '報告書、提案書、お礼メール、英語の返信…',
  },
  {
    icon: '/illustrations/s_02.png',
    title: 'Webサイトを作る',
    desc: '自社HP、LP、採用ページなど丸ごと',
  },
  {
    icon: '/illustrations/s_03.png',
    title: 'アプリを開発する',
    desc: '業務効率化ツール、顧客向けアプリ',
  },
  {
    icon: '/illustrations/s_04.png',
    title: '画像を生成する',
    desc: 'チラシ素材、SNS投稿画像、ロゴ案',
  },
  {
    icon: '/illustrations/s_05.png',
    title: '動画の台本を作る',
    desc: 'PR動画シナリオ、YouTube台本、字幕',
  },
  {
    icon: '/illustrations/s_06.png',
    title: '資料・書類を作る',
    desc: 'PowerPoint、Word、マニュアル、契約書ひな形',
  },
]

const CHAT_EXAMPLE_1 = [
  { role: 'user' as const, text: '来月の売上報告書のたたき台を作って。\n先月比10%増で、要因は新商品の好調。A4で1枚にまとめて。' },
  { role: 'ai' as const, text: '売上報告書のたたき台を作成しました。\n\n■ 2026年2月 売上報告\n・売上高: 1,850万円（前月比 +10.2%）\n・主要因: 新商品「○○」が初月で320万円を記録\n・既存商品: 前月並みで堅調に推移\n■ 来月の見通し\n・新商品の認知拡大により、さらに5%の上積みを見込む\n\nグラフや数値は実データに差し替えてください。' },
]

const CHAT_EXAMPLE_2 = [
  { role: 'user' as const, text: '「和歌山 白浜」で検索したお客さんが予約したくなるような旅館の紹介文を書いて。ファミリー向け、温泉と食事が自慢。' },
  { role: 'ai' as const, text: '白浜の海を一望できる温泉宿で、家族の思い出をつくりませんか。\n\n目の前に広がる太平洋。潮風を感じながら浸かる露天風呂。そして、紀州の山海の幸をふんだんに使った会席料理。\n\nお子様連れでも安心の貸切風呂や、キッズスペースも完備。「子どもが初めて温泉を気に入った」そんな口コミをいただいています。\n\n▶ 早期予約で最大20%OFF' },
]

export function NewEra() {
  return (
    <SectionWrapper id="new-era" bg="gray">
      <SectionLabel
        category="CHAPTER 01"
        title="結局、AIで何ができるの？"
        subtitle="一番多い質問です。答えは「皆さんが思っている以上に、なんでもできる」。百聞は一見にしかず——具体的にお見せします。"
      />

      {/* Capability grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-12">
        {CAPABILITIES.map((cap, i) => (
          <motion.div
            key={cap.title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.06 }}
            className="relative p-5 rounded-2xl bg-white border border-gray-200 overflow-hidden"
          >
            <img
              src={cap.icon}
              alt=""
              className="w-14 h-14 mb-3 object-contain"
            />
            <h4 className="text-base font-bold text-gray-900 mb-1">{cap.title}</h4>
            <p className="text-sm text-gray-500 leading-relaxed">{cap.desc}</p>
          </motion.div>
        ))}
      </div>

      {/* Key insight - what you actually do */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="p-6 sm:p-8 rounded-2xl bg-white border-2 border-primary-200 mb-12"
      >
        <h3 className="text-xl sm:text-2xl font-black text-gray-900 mb-4">
          やることは<span className="text-gradient">たった2つ</span>だけ。
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div className="p-5 rounded-xl bg-primary-50/50 border border-primary-100">
            <p className="text-sm font-bold text-primary-600 mb-2">その1</p>
            <p className="text-lg font-bold text-gray-900 mb-1">日本語でチャットを送る</p>
            <p className="text-base text-gray-600">「こんなの作って」「こんな文章書いて」と、部下に指示を出す感覚で伝えるだけ。</p>
          </div>
          <div className="p-5 rounded-xl bg-primary-50/50 border border-primary-100">
            <p className="text-sm font-bold text-primary-600 mb-2">その2</p>
            <p className="text-lg font-bold text-gray-900 mb-1">材料（ソース）を渡す</p>
            <p className="text-base text-gray-600">ファイル、画像、データ、URLなど——AIが生成するための「材料」を添えるだけ。</p>
          </div>
        </div>
      </motion.div>

      {/* Chat examples */}
      <div className="space-y-8 mb-12">
        <div>
          <p className="text-lg font-bold text-gray-800 mb-3">
            例1: 毎月の報告書を、5分で下書きさせる
          </p>
          <ChatBubble messages={CHAT_EXAMPLE_1} title="ChatGPT / Claude" />
        </div>

        <div>
          <p className="text-lg font-bold text-gray-800 mb-3">
            例2: 集客用の紹介文を、一発で書かせる
          </p>
          <ChatBubble messages={CHAT_EXAMPLE_2} title="ChatGPT / Claude" />
        </div>
      </div>

      {/* Key message */}
      <motion.div
        initial={{ opacity: 0, x: -12 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className="mt-10 pl-6 border-l-4 border-primary-400"
      >
        <p className="text-xl font-bold text-gray-800 leading-relaxed">
          やっていることは「チャットで日本語を送る」+「材料を渡す」。それだけです。
        </p>
      </motion.div>

      <InlineQA
        avatarOffset={0}
        items={[
          {
            q: 'チャットに打ち込むだけで本当にそんなことができるの？',
            a: 'はい。ChatGPTやClaudeは無料で今すぐ試せます。最初は「明日の会議の挨拶文を考えて」くらいから始めてみてください。10秒で結果が出ます。',
          },
          {
            q: 'パソコンが苦手でも使える？',
            a: 'LINEでメッセージを送れる方なら使えます。スマホのアプリもあるので、キーボードが苦手でも音声入力で「話しかける」こともできます。',
          },
        ]}
      />
    </SectionWrapper>
  )
}
