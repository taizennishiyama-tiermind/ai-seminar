import { motion } from 'framer-motion'
import { SectionWrapper } from '../components/SectionWrapper'
import { SectionLabel } from '../components/SectionLabel'
import { ChatBubble } from '../components/ChatBubble'
import { InlineQA } from '../components/InlineQA'

const BAD_PROMPT = [
  { role: 'user' as const, text: '売上報告の資料作って' },
  { role: 'ai' as const, text: '売上報告資料のテンプレートを作成します。\n\n【売上報告書】\n報告期間：〇〇年〇月\n\n■ 売上サマリー\n・当月売上：〇〇円\n・前月比：+〇%\n・目標達成率：〇%\n\n■ 主要トピックス\n（ここに主な増減要因を記載）\n\n■ 来月の見通し\n（ここに見込みを記載）\n\n---\n数値や期間を埋めて使ってください。グラフや詳細が必要であれば教えてください。' },
]


const GOOD_PROMPT = [
  {
    role: 'user' as const,
    text: '来月の取締役会で使う売上報告資料を作って。\n\n・報告先: 取締役5名（数字に厳しい人が多い）\n・期間: 2025年度 第3四半期\n・必要な内容: 売上推移グラフ、前年比、商品別内訳\n・トーン: 簡潔で数字重視、結論ファースト',
    attachments: [
      { name: '2025_Q3_売上データ.xlsx', size: '2.4 MB' },
      { name: '2024_前年データ.xlsx', size: '1.8 MB' },
    ],
  },
  {
    role: 'ai' as const,
    text: '添付の2ファイルを分析しました。\n\n■ Q3 サマリー\n・売上合計: 5,420万円（前年比 +8.3%）\n・最も成長: 新製品A（+42%、320万円）\n・課題: 既存商品Bが -12%で下落傾向\n\n■ 商品別の売上推移（添付データより生成）',
    charts: [
      { label: '新製品A', value: 32000, max: 50000, color: '#3b82f6' },
      { label: '主力商品', value: 42000, max: 50000, color: '#10b981' },
      { label: '既存品B', value: 18000, max: 50000, color: '#f59e0b' },
      { label: 'その他', value: 12000, max: 50000, color: '#8b5cf6' },
    ],
  },
]

const SKILL_ILLUSTRATIONS = ['m_02_white', 'm_03_white', 'm_04_white', 'm_09_white']

const SKILLS = [
  {
    number: '01',
    title: '「何のために」を決める力',
    description: 'AIは「作り方」は知っていますが「何を作るべきか」は知りません。目的を定義するのは経営者の仕事です。',
    analogy: '料理人に「美味しいもの作って」ではなく「接待用に、和食で、アレルギー配慮して」と伝える感覚です。',
  },
  {
    number: '02',
    title: '「これでいいか」を判断する目',
    description: 'AIは80点の成果物を瞬時に出します。それを「良い・やり直し」と判断できるのは、業界を知っているあなただけです。',
    analogy: '部下が持ってきた企画書を見て「方向性はOK、ここだけ直して」と言える感覚と同じです。',
  },
  {
    number: '03',
    title: '的確に伝える力',
    description: '「いい感じに」ではなく「誰に・何を・どうしたいか」を具体的に伝える。この言語化能力が結果の質を決めます。',
    analogy: '下の2つのチャット例を見比べてください。指示の出し方で結果がまるで違います。',
  },
  {
    number: '04',
    title: '材料をしっかり渡す力',
    description: 'AIは渡された情報からしか判断できません。決算データ、過去資料、参考URLなど——必要な材料を漏れなく渡せるかが結果を左右します。',
    analogy: '料理人に「カレー作って」と言うだけでなく、食材・調味料・レシピの参考を渡すのと同じ。材料が揃えば、AIの出力精度は格段に上がります。',
  },
]

export function HumanSide() {
  return (
    <SectionWrapper id="human-side" bg="gray">
      <SectionLabel
        category="CHAPTER 05"
        title="AIは優秀な部下。でも「何をやるか」は社長が決める。"
        subtitle="「何でも作ってくれる」からこそ大切なのは、人間側の力です。経営者がAIを使いこなすために必要な4つのことをお伝えします。"
      />

      {/* Analogy card with illustration */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="relative p-6 sm:p-8 rounded-2xl bg-white border-2 border-primary-200 mb-12 overflow-hidden"
      >
        <div className="flex items-start gap-6">
          <div className="flex-1">
            <p className="text-lg sm:text-xl text-gray-700 leading-relaxed">
              AIは<strong className="text-gray-900">超有能な新入社員</strong>のようなものです。
              頭の回転は速いし、何でもこなす。でも
              <strong className="text-gray-900">「今日のお客さんに何を提案するか」を決めるのは、あなた</strong>です。
              <br /><br />
              目標を定め、具体的に伝え、必要な材料を渡し、出てきた結果を判断する——この
              <strong className="text-gray-900">「経営判断」</strong>がAI時代に最も価値を持ちます。
            </p>
          </div>
          <motion.img
            src="/illustrations/l_02_rectangle_white.png"
            alt=""
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="hidden md:block shrink-0 w-40 lg:w-52 h-auto mix-blend-multiply"
          />
        </div>
      </motion.div>

      {/* 4 Skills with illustrations */}
      <div className="space-y-8 mb-12">
        {SKILLS.map((skill, i) => (
          <motion.div
            key={skill.number}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08, duration: 0.4 }}
            className="relative p-6 sm:p-8 rounded-2xl border border-gray-200 bg-white overflow-hidden"
          >
            <div className="flex items-baseline gap-4 mb-3">
              <span className="text-4xl font-black text-gray-200">{skill.number}</span>
              <h3 className="text-xl font-bold text-gray-900">{skill.title}</h3>
            </div>
            <p className="text-base text-gray-600 leading-relaxed mb-4 pr-20 sm:pr-28">
              {skill.description}
            </p>
            <div className="p-4 rounded-xl bg-primary-50/50 border border-primary-100">
              <p className="text-base text-gray-700 leading-relaxed">
                <strong className="text-primary-700">たとえると: </strong>
                {skill.analogy}
              </p>
            </div>
            {/* Decorative illustration */}
            <motion.img
              src={`/illustrations/${SKILL_ILLUSTRATIONS[i]}.png`}
              alt=""
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 0.15, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="absolute -right-2 -top-2 w-24 sm:w-32 h-auto pointer-events-none select-none"
            />
          </motion.div>
        ))}
      </div>

      {/* Good vs Bad prompt comparison */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h3 className="text-xl font-bold text-gray-800 mb-2">
          「伝え方」+「材料」でここまで変わる
        </h3>
        <p className="text-base text-gray-500 mb-6">
          同じ「資料を作って」でも、指示の具体性と添付データの有無で結果がまるで違います。
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div>
            <p className="text-base font-bold text-red-500 mb-3">
              ざっくりした指示 → ざっくりした結果
            </p>
            <ChatBubble messages={BAD_PROMPT} title="ぼんやり指示の場合" />
          </div>
          <div>
            <p className="text-base font-bold text-green-600 mb-3">
              具体的な指示 + データ添付 → 即戦力の結果
            </p>
            <ChatBubble messages={GOOD_PROMPT} title="具体的な指示の場合" />
          </div>
        </div>
      </motion.div>

      {/* Key message */}
      <motion.div
        initial={{ opacity: 0, x: -12 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className="mt-10 pl-6 border-l-4 border-primary-400"
      >
        <p className="text-xl font-bold text-gray-800 leading-relaxed">
          「目的を決め、具体的に伝え、材料を渡し、結果を判断する」
          ——これは経営者が日頃やっていることと同じです。
        </p>
      </motion.div>

      <InlineQA
        avatarOffset={4}
        items={[
          {
            q: 'そもそも最初の指示文すら思いつかないんだけど…',
            a: '大丈夫です。AIに「〇〇をやりたいんだけど、どういう情報を伝えたらいい？」と聞けば、必要な項目をAIが教えてくれます。AIに「聞き方」を聞く、これが第一歩です。',
          },
          {
            q: 'こういう能力って、若い人の方が有利じゃない？',
            a: '技術に詳しいのは若い人かもしれません。でも「何をすべきか判断する力」「業界の常識を知っている力」は経験豊富な方が圧倒的に有利。30年の経験 × AI = 若手10人分の生産性です。',
          },
        ]}
      />
    </SectionWrapper>
  )
}
