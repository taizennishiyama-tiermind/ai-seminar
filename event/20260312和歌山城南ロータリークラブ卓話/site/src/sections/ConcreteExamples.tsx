import { motion } from 'framer-motion'
import { SectionWrapper } from '../components/SectionWrapper'
import { SectionLabel } from '../components/SectionLabel'
import { ChatBubble } from '../components/ChatBubble'
import { InlineQA } from '../components/InlineQA'

const EXAMPLES = [
  {
    number: '01',
    category: '観光・地域PR',
    title: '外国人向けの観光PR動画をAIで作る',
    illustration: 'm_01_white',
    situation:
      '和歌山県のある観光協会。インバウンド向けPR動画を作りたいが、制作会社に頼むと50〜100万円、納品まで2ヶ月。',
    chat: [
      {
        role: 'user' as const,
        text: '高野山・熊野古道・白浜の3スポットを紹介する60秒の英語PR動画を作って。\nターゲットは30代の欧米バックパッカー。\nドローン風の映像と英語ナレーション付きで。',
      },
      {
        role: 'ai' as const,
        text: '和歌山の観光PR動画（60秒・英語）を生成しました。\n\nドローン映像風のシーン構成で、高野山の荘厳な寺院、熊野古道の森の小道、白浜のビーチを順に紹介しています。\n\n英語ナレーション・BGM付きです。',
        video: {
          src: '/movies/sora動画.mp4',
          label: 'AI生成: 和歌山観光PR動画（60秒）',
        },
      },
    ],
    result: 'AIが動画そのものを自動生成。ナレーション・BGM付きの完成品が数分で出力。',
    costBefore: '制作会社に外注: 50〜100万円',
    costAfter: 'ChatGPT / Gemini 月額3,000円で動画生成まで完結。',
    color: 'border-l-blue-400',
  },
  {
    number: '02',
    category: '採用・求人',
    title: '「人が来ない…」を解決する採用ページを自分で書く',
    illustration: 'm_05_white',
    situation:
      '地元の製造業。人手不足だが、求人票は事務的な文章ばかり。ライターに頼む余裕がない。',
    chat: [
      {
        role: 'user' as const,
        text: 'うちは社員30人の金属加工会社。強みは地元密着50年、少数精鋭、若手に裁量あり。\n地元志向の大学生に響く採用ページの原稿を作って。',
      },
      {
        role: 'ai' as const,
        text: '■ キャッチコピー案\n「手のひらサイズの部品が、宇宙に届く。」\n\n■ メインメッセージ\n和歌山で50年。私たちが作る精密部品は、ロケットにも、医療機器にも使われています。\n社員30人だからこそ、入社1年目から設計の最前線へ。\n\n「大企業では10年かかる経験を、うちなら3年で積める。」\n—— 入社2年目 田中（和歌山大学出身）',
      },
    ],
    result: '企業文化を反映した原稿 + キャッチコピー3案 + FAQ集を一気に生成。写真撮影の構図提案まで。',
    costBefore: 'ライター外注: 30〜80万円',
    costAfter: 'Claude Pro 月額3,000円で何回でも書き直し放題。自分の言葉で仕上げられる。',
    color: 'border-l-green-400',
  },
  {
    number: '03',
    category: '新規事業',
    title: '旅館のアプリをClaude Code × Google AI Studioで作る',
    illustration: 'm_06_white',
    situation:
      '白浜の旅館の経営者。宿泊客向けに周辺ガイドアプリが欲しいが、開発見積り200万円と聞いて保留中。',
    chat: [
      {
        role: 'user' as const,
        text: '白浜温泉の旅館の宿泊客向けWebアプリを作って。\n周辺の飲食店とアクティビティを地図付きで紹介。\n予約リンク付き、スマホで使いやすく。',
      },
      {
        role: 'ai' as const,
        text: '白浜温泉の周辺ガイドアプリを作成しました。',
        appPreview: {
          title: '白浜おでかけガイド',
          subtitle: '周辺のグルメ・アクティビティを地図で探せる',
          categories: ['グルメ', 'アクティビティ', '温泉', 'おみやげ'],
          spots: [
            { icon: '🍣', name: 'とれとれ市場', tag: 'グルメ', tagColor: 'bg-orange-100 text-orange-600' },
            { icon: '🛶', name: 'シーカヤック体験', tag: 'アクティビティ', tagColor: 'bg-blue-100 text-blue-600' },
            { icon: '♨️', name: '崎の湯', tag: '温泉', tagColor: 'bg-red-100 text-red-600' },
            { icon: '🎁', name: 'かげろう本店', tag: 'おみやげ', tagColor: 'bg-purple-100 text-purple-600' },
          ],
        },
      },
    ],
    result: '動くプロトタイプが半日で完成。画面デザイン・地図連携・画像生成・レスポンシブ対応まで。そのまま社内プレゼンに使用。',
    costBefore: '開発会社に外注: 200〜500万円',
    costAfter: 'Claude Pro 月額3,000円 + サーバー代 月1,000円。不安なら本開発・保守だけ外注することも可能。',
    color: 'border-l-purple-400',
  },
]

export function ConcreteExamples() {
  return (
    <SectionWrapper id="examples" bg="gray">
      <SectionLabel
        category="CHAPTER 06"
        title="「うちでも使えるの？」——はい、使えます。"
        subtitle="月額3,000円のツールさえあれば、これまで外注していたことを自分で内製できます。実際の会話で具体的にお見せします。"
      />

      {/* Tool cost callout */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="p-6 sm:p-8 rounded-2xl bg-white border-2 border-green-200 mb-10"
      >
        <h3 className="text-xl font-bold text-gray-900 mb-3">
          必要なのは<span className="text-green-600">月額3,000円</span>のツールだけ
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {[
            { name: 'ChatGPT Plus', price: '月額 3,000円', note: 'OpenAI社の対話AI' },
            { name: 'Claude Pro', price: '月額 3,000円', note: 'Anthropic社の対話AI' },
            { name: 'Gemini Advanced', price: '月額 2,900円', note: 'Google社の対話AI' },
          ].map((tool) => (
            <div key={tool.name} className="p-4 rounded-xl bg-green-50/50 border border-green-100">
              <p className="text-base font-bold text-gray-800">{tool.name}</p>
              <p className="text-lg font-black text-green-600">{tool.price}</p>
              <p className="text-sm text-gray-500">{tool.note}</p>
            </div>
          ))}
        </div>
        <p className="text-base text-gray-500 mt-4">
          無料プランもあります。まずは無料で試して、効果を実感してから有料プランへ。
        </p>
      </motion.div>

      <div className="space-y-12">
        {EXAMPLES.map((ex, i) => (
          <motion.div
            key={ex.number}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className={`rounded-2xl border border-gray-200 bg-white overflow-hidden border-l-4 ${ex.color}`}
          >
            {/* Header with illustration */}
            <div className="relative p-6 sm:p-8 border-b border-gray-100 overflow-hidden">
              <div className="flex items-baseline gap-4 mb-2">
                <span className="text-3xl font-black text-gray-200">{ex.number}</span>
                <span className="text-sm font-bold text-primary-500 bg-primary-50 px-3 py-1 rounded-full">
                  {ex.category}
                </span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 pr-24 sm:pr-32">
                {ex.title}
              </h3>
              <p className="text-base text-gray-600 leading-relaxed pr-20 sm:pr-28">
                {ex.situation}
              </p>
              {/* Decorative illustration */}
              <motion.img
                src={`/illustrations/${ex.illustration}.png`}
                alt=""
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 0.15, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.15, duration: 0.5 }}
                className="absolute -right-4 -bottom-4 w-28 sm:w-36 h-auto pointer-events-none select-none"
              />
            </div>

            {/* Chat */}
            <div className="p-6 sm:p-8">
              <p className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-4">
                実際の会話イメージ
              </p>
              <ChatBubble messages={ex.chat} />
            </div>

            {/* Result + Cost */}
            <div className="px-6 sm:px-8 pb-6 sm:pb-8">
              <div className="p-5 rounded-xl bg-green-50/50 border border-green-100 mb-4">
                <p className="text-sm font-bold text-green-600 uppercase tracking-widest mb-2">
                  結果
                </p>
                <p className="text-base text-gray-800 leading-relaxed">
                  {ex.result}
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-red-50/40 border border-red-100">
                  <p className="text-sm font-bold text-red-400 mb-1">これまで（外注）</p>
                  <p className="text-base text-gray-500 line-through">{ex.costBefore}</p>
                </div>
                <div className="p-4 rounded-xl bg-green-50/40 border border-green-100">
                  <p className="text-sm font-bold text-green-500 mb-1">AI活用（内製）</p>
                  <p className="text-base font-semibold text-gray-900">{ex.costAfter}</p>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Key message */}
      <motion.div
        initial={{ opacity: 0, x: -12 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="mt-12 pl-6 border-l-4 border-primary-400"
      >
        <p className="text-xl font-bold text-gray-800 leading-relaxed">
          月額3,000円で「外注していたこと」を内製できる。
          <br />
          まずは1つ、試してみてください。
        </p>
      </motion.div>

      <InlineQA
        avatarOffset={4}
        items={[
          {
            q: '機密情報をAIに入れても大丈夫？',
            a: '有料プランでは入力内容が学習に使われない設定が可能です。普段Excelで社内データを扱うときと同じレベルのリスク管理で問題ありません。実際、同様のガイドラインを策定してAIを業務導入している大手企業も増えています。',
          },
          {
            q: 'AIが作った文章や画像って、著作権的にお客さんに出しても大丈夫？',
            a: '著作権の観点は「類似性（似ているか）」と「依拠性（元にしたか）」の2つです。これは人間が作った場合と同じチェックポイント。AI側（ツール提供元）は生成物の権利を主張しないので、自分の成果物として責任を持てる内容であれば外部に出して問題ありません。ただし最終的な確認は人間が行う必要があります。',
          },
        ]}
      />
    </SectionWrapper>
  )
}
