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
            { icon: '🍣', name: 'とれとれ市場', tag: 'グルメ', tagColor: 'bg-primary-50 text-primary-600' },
            { icon: '🛶', name: 'シーカヤック体験', tag: 'アクティビティ', tagColor: 'bg-primary-50 text-primary-600' },
            { icon: '♨️', name: '崎の湯', tag: '温泉', tagColor: 'bg-primary-50 text-primary-600' },
            { icon: '🎁', name: 'かげろう本店', tag: 'おみやげ', tagColor: 'bg-primary-50 text-primary-600' },
          ],
        },
      },
    ],
    result: '動くプロトタイプが半日で完成。画面デザイン・地図連携・画像生成・レスポンシブ対応まで。そのまま社内プレゼンに使用。',
    costBefore: '開発会社に外注: 200〜500万円',
    costAfter: 'Claude Pro 月額3,000円 + サーバー代 月1,000円。不安なら本開発・保守だけ外注することも可能。',
  },
]

export function ConcreteExamples() {
  return (
    <SectionWrapper id="examples" bg="gray">
      <SectionLabel
        category="CHAPTER 07"
        title="「うちでも使えるの？」——はい、使えます。"
        subtitle="月額3,000円のツールさえあれば、これまで外注していたことを自分で内製できます。実際の会話で具体的にお見せします。"
      />

      {/* Tool cost callout */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="p-6 sm:p-8 rounded-2xl bg-white border-2 border-primary-200 mb-10"
      >
        <h3 className="text-xl font-bold text-gray-900 mb-3">
          必要なのは<span className="text-gradient">月額3,000円</span>のツールだけ
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {[
            { name: 'ChatGPT Plus', price: '月額 3,000円', note: 'OpenAI社の対話AI', recommended: false },
            { name: 'Claude Pro', price: '月額 3,000円', note: 'Anthropic社の対話AI', recommended: true },
            { name: 'Gemini Advanced', price: '月額 2,900円', note: 'Google社の対話AI', recommended: false },
          ].map((tool) => (
            <div key={tool.name} className={`relative p-4 rounded-xl ${
              tool.recommended
                ? 'bg-primary-50/50 border-2 border-primary-300'
                : 'bg-gray-50 border border-gray-100'
            }`}>
              {tool.recommended && (
                <span className="absolute -top-2.5 left-3 inline-flex items-center gap-1 text-[10px] font-black px-2 py-0.5 rounded-full bg-primary-500 text-white">
                  ★ おすすめ
                </span>
              )}
              <p className={`text-base font-bold ${tool.recommended ? 'text-primary-700' : 'text-gray-800'}`}>{tool.name}</p>
              <p className="text-lg font-black text-primary-600">{tool.price}</p>
              <p className="text-sm text-gray-500">{tool.note}</p>
            </div>
          ))}
        </div>
        <p className="text-base text-gray-500 mt-4">
          無料プランもあります。まずは無料で試して、効果を実感してから有料プランへ。
        </p>
      </motion.div>

      {/* Tool selection guide */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-10"
      >
        <h3 className="text-xl font-bold text-gray-800 mb-2">どれを使えばいいの？</h3>
        <p className="text-base text-gray-500 mb-6">
          どれも「日本語でチャットするだけ」で使えます。得意分野が微妙に違うので、用途に合わせて選ぶと効果的です。
        </p>
        <div className="space-y-4">
          {[
            {
              tool: 'ChatGPT',
              company: 'OpenAI',
              badge: '万能型・検索精度が高い',
              recommended: false,
              summary: '「とにかく何でも聞いてみる」感覚で使えるオールラウンダー。検索精度が高く、最新ニュースや文書に強い。',
              uses: ['業界・市場のリサーチ・調査', 'メール・提案書・議事録の下書き', 'アイデア出し・企画のブレスト', 'ウェブ検索と組み合わせた情報収集'],
            },
            {
              tool: 'Claude',
              company: 'Anthropic',
              badge: '文章・資料作成の精度が高い',
              recommended: true,
              summary: 'PowerPointやWordなどファイルを直接作成・編集する能力が高い。文章の推敲や言い回しの改善も得意。',
              uses: ['提案書・事業計画書の文章磨き', 'パンフレット・HPの原稿作成', 'クレーム対応など繊細なメール文', '契約書・規約の要点まとめ'],
            },
            {
              tool: 'Gemini',
              company: 'Google',
              badge: 'Google連携・画像生成が得意',
              recommended: false,
              summary: 'Googleワークスペースと直接連携でき、画像生成のクオリティも高い。Gmail上で直接AIを呼び出せる。',
              uses: ['Gmailの返信をAIが自動提案', 'Googleドキュメントで文章をAI編集', 'スプレッドシートのデータ分析・グラフ化', 'チラシ・SNS用の高品質な画像生成'],
            },
          ].map((item, i) => (
            <motion.div
              key={item.tool}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              className={`relative rounded-2xl p-5 sm:p-6 ${
                item.recommended
                  ? 'border-2 border-primary-400 bg-primary-50/30 shadow-md shadow-primary-100/50 ring-1 ring-primary-200/50'
                  : 'border border-gray-200 bg-white'
              }`}
            >
              {item.recommended && (
                <span className="absolute -top-3 left-5 inline-flex items-center gap-1.5 text-xs font-black px-3 py-1 rounded-full bg-primary-500 text-white shadow-sm">
                  <span className="text-sm">★</span> おすすめ
                </span>
              )}
              <div className="flex flex-wrap items-center gap-3 mb-3">
                <p className={`text-lg font-bold ${item.recommended ? 'text-primary-700' : 'text-gray-900'}`}>{item.tool}</p>
                <span className="text-xs text-gray-400 font-medium">{item.company}</span>
                <span className={`text-xs font-bold px-2.5 py-1 rounded-full ${
                  item.recommended
                    ? 'bg-primary-100 text-primary-700'
                    : 'bg-primary-50 text-primary-600'
                }`}>{item.badge}</span>
              </div>
              <p className="text-base text-gray-700 leading-relaxed mb-4">{item.summary}</p>
              <div className="flex flex-wrap gap-2">
                {item.uses.map((u) => (
                  <span key={u} className={`text-sm font-medium px-3 py-1.5 rounded-lg border ${
                    item.recommended
                      ? 'border-primary-200 bg-white text-gray-700'
                      : 'border-gray-200 bg-gray-50 text-gray-700'
                  }`}>
                    {u}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <h3 className="text-xl font-bold text-gray-800 mb-6">具体的な活用イメージ</h3>

      <div className="space-y-8">
        {EXAMPLES.map((ex, i) => (
          <motion.div
            key={ex.number}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="rounded-2xl border border-gray-200 bg-white overflow-hidden"
          >
            {/* Header with illustration */}
            <div className="relative p-6 sm:p-8 border-b border-gray-100 overflow-hidden">
              <div className="flex items-baseline gap-4 mb-2">
                <span className="text-4xl font-black text-primary-100">{ex.number}</span>
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
                whileInView={{ opacity: 0.12, x: 0 }}
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
              <div className="p-5 rounded-xl bg-primary-50/30 border border-primary-100 mb-4">
                <p className="text-sm font-bold text-primary-500 uppercase tracking-widest mb-2">
                  結果
                </p>
                <p className="text-base text-gray-800 leading-relaxed">
                  {ex.result}
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-gray-50 border border-gray-100">
                  <p className="text-sm font-bold text-gray-400 mb-1">これまで（外注）</p>
                  <p className="text-base text-gray-400 line-through">{ex.costBefore}</p>
                </div>
                <div className="p-4 rounded-xl bg-primary-50/40 border border-primary-100">
                  <p className="text-sm font-bold text-primary-500 mb-1">AI活用（内製）</p>
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
