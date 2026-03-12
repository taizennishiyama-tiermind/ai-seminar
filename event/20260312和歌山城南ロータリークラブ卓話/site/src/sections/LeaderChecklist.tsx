import { motion } from 'framer-motion'
import { SectionWrapper } from '../components/SectionWrapper'
import { SectionLabel } from '../components/SectionLabel'
import { InlineQA } from '../components/InlineQA'
import illustrationM05 from '../../../../../assets/png/m_05_white.png'
import illustrationM06 from '../../../../../assets/png/m_06_white.png'
import illustrationM07 from '../../../../../assets/png/m_07_white.png'
import illustrationM08 from '../../../../../assets/png/m_08_white.png'

const ILLUSTRATIONS = [illustrationM05, illustrationM06, illustrationM07, illustrationM08]

export function LeaderChecklist() {
  return (
    <SectionWrapper id="leader-checklist" bg="gray">
      <SectionLabel
        category="CHAPTER 06"
        title="経営者として、これだけは押さえてほしい。"
        subtitle="AIを「導入する」のは簡単です。大事なのは、組織として使える状態を作ること。経営判断として外せない4つのポイントをお伝えします。"
      />

      {/* Point 01 */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="relative p-6 sm:p-8 rounded-2xl bg-white border border-gray-200 mb-6 overflow-hidden"
      >
        <motion.img
          src={ILLUSTRATIONS[0]}
          alt=""
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 0.12, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="absolute -right-4 -top-4 w-28 sm:w-36 h-auto pointer-events-none select-none"
        />
        <div className="flex items-baseline gap-4 mb-4">
          <span className="text-5xl font-black text-primary-100">01</span>
          <h3 className="text-xl font-bold text-gray-900">研修より先に、ツールに課金する</h3>
        </div>
        <p className="text-base text-gray-700 leading-relaxed mb-4 pr-20 sm:pr-28">
          AI研修を仕事にしている私が言うのだから間違いありません——
          <strong className="text-gray-900">まず社員全員にツールのライセンスを渡すことが最優先です。</strong>
        </p>
        <p className="text-base text-gray-600 leading-relaxed mb-5">
          いろんな企業で研修や開発をしてきましたが、ライセンスの課金を渋る会社ほどAIの浸透が進みません。
          無料版では一昔前のレベルのことしかできず「大したことないな」で終わる。
          社員が「使いたい」と申請しても却下されると、やる気そのものがなくなっていきます。
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="p-5 rounded-xl bg-gray-50 border border-gray-100">
            <p className="text-sm font-bold text-gray-400 mb-2">Step 1</p>
            <p className="text-base font-bold text-gray-800 mb-1">まずツールを入れる</p>
            <p className="text-base text-gray-600">有料プランで自由に使える環境を整える</p>
          </div>
          <div className="p-5 rounded-xl bg-gray-50 border border-gray-100">
            <p className="text-sm font-bold text-gray-400 mb-2">Step 2</p>
            <p className="text-base font-bold text-gray-800 mb-1">困ったらプロに相談</p>
            <p className="text-base text-gray-600">運用が回らなくなった時に初めて研修を検討</p>
          </div>
        </div>
      </motion.div>

      {/* Point 02 */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.06 }}
        className="relative p-6 sm:p-8 rounded-2xl bg-white border border-gray-200 mb-6 overflow-hidden"
      >
        <motion.img
          src={ILLUSTRATIONS[1]}
          alt=""
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 0.12, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="absolute -right-4 -top-4 w-28 sm:w-36 h-auto pointer-events-none select-none"
        />
        <div className="flex items-baseline gap-4 mb-4">
          <span className="text-5xl font-black text-primary-100">02</span>
          <h3 className="text-xl font-bold text-gray-900">ガイドラインという「ガードレール」を敷く</h3>
        </div>
        <p className="text-base text-gray-700 leading-relaxed mb-3 pr-20 sm:pr-28">
          ガチガチのルールブックを作る必要はありません。
          あくまで<strong className="text-gray-900">「大きく逸脱しないためのガードレール」</strong>です。
          最低限これだけ決めておけば安心して使えます。
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {[
            'どのツールを使うか（ChatGPT / Claude / Gemini）',
            '社外秘情報はチームプラン以上で扱う',
            'AI出力は必ず人間が最終確認する',
            '対外的に出す文書は法務チェックを通す',
          ].map((rule) => (
            <div key={rule} className="flex items-start gap-3 p-4 rounded-xl bg-gray-50 border border-gray-100">
              <span className="shrink-0 w-5 h-5 rounded-full bg-primary-100 text-primary-600 text-xs font-bold flex items-center justify-center mt-0.5">&#x2713;</span>
              <span className="text-base text-gray-700">{rule}</span>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Point 03 */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.06 }}
        className="relative p-6 sm:p-8 rounded-2xl bg-white border border-gray-200 mb-6 overflow-hidden"
      >
        <motion.img
          src={ILLUSTRATIONS[2]}
          alt=""
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 0.12, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="absolute -right-4 -top-4 w-28 sm:w-36 h-auto pointer-events-none select-none"
        />
        <div className="flex items-baseline gap-4 mb-4">
          <span className="text-5xl font-black text-primary-100">03</span>
          <h3 className="text-xl font-bold text-gray-900">機密データには「チームプラン」を使う</h3>
        </div>
        <p className="text-base text-gray-700 leading-relaxed mb-4 pr-20 sm:pr-28">
          「会社のデータを入れて大丈夫？」——経営者として当然の心配です。
          各ツールには<strong className="text-gray-900">チームプラン・ビジネスプラン</strong>が用意されており、
          <strong className="text-gray-900">入力データがAIの学習に使われない設計</strong>になっています。
        </p>
        <div className="p-5 rounded-xl bg-primary-50/40 border border-primary-100">
          <p className="text-base text-gray-700 leading-relaxed">
            普段WordやExcelに社内データを入れて作業しているのと同じ感覚です。
            大企業でも同様の運用で業務データをどんどんAIに投入しています。
            「AIだから特別に危険」ということはありません。
          </p>
        </div>
      </motion.div>

      {/* Point 04 */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.06 }}
        className="relative p-6 sm:p-8 rounded-2xl bg-white border border-gray-200 mb-10 overflow-hidden"
      >
        <motion.img
          src={ILLUSTRATIONS[3]}
          alt=""
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 0.12, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="absolute -right-4 -top-4 w-28 sm:w-36 h-auto pointer-events-none select-none"
        />
        <div className="flex items-baseline gap-4 mb-4">
          <span className="text-5xl font-black text-primary-100">04</span>
          <h3 className="text-xl font-bold text-gray-900">著作権の考え方を押さえておく</h3>
        </div>
        <p className="text-base text-gray-700 leading-relaxed mb-4 pr-20 sm:pr-28">
          AIが作った成果物の<strong className="text-gray-900">著作権はユーザー（あなた）側に帰属</strong>します。
          ツール提供元（OpenAI・Anthropic・Google）は生成物の権利を主張しません。
        </p>
        <p className="text-base text-gray-700 leading-relaxed mb-5">
          ただし、<strong className="text-gray-900">他者の著作権を侵害していないか</strong>のチェックは必要です。ここで重要な2つの観点：
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-5">
          <div className="p-5 rounded-xl bg-gray-50 border border-gray-100 text-center">
            <p className="text-2xl font-black text-primary-200 mb-2">類似性</p>
            <p className="text-base text-gray-600">他者の著作物に<br />「似ていないか」を確認</p>
          </div>
          <div className="p-5 rounded-xl bg-gray-50 border border-gray-100 text-center">
            <p className="text-2xl font-black text-primary-200 mb-2">依拠性</p>
            <p className="text-base text-gray-600">他者の著作物を<br />「元にしていないか」を確認</p>
          </div>
        </div>
        <div className="p-5 rounded-xl bg-primary-50/40 border border-primary-100">
          <p className="text-base text-gray-700 leading-relaxed">
            これは<strong className="text-gray-900">人間が作った成果物でもまったく同じ</strong>チェックポイントです。
            自分の成果物として対外的に出しても問題ないと責任を持てる範囲であれば、AIで作ろうが人間が作ろうが同じ。
            大企業でもこの考え方で運用されています。
          </p>
        </div>
      </motion.div>

      {/* ROI mini column */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="p-6 sm:p-8 rounded-2xl bg-white border border-gray-200 mb-10"
      >
        <div className="flex items-start gap-4 mb-4">
          <div className="shrink-0 w-12 h-12 rounded-xl bg-primary-50 border border-primary-100 flex items-center justify-center">
            <span className="text-lg font-black text-primary-400">?</span>
          </div>
          <div>
            <p className="text-xs font-bold text-primary-500 uppercase tracking-widest mb-1">Column</p>
            <h3 className="text-xl font-bold text-gray-900">AI導入の効果、どう測る？</h3>
          </div>
        </div>
        <p className="text-base text-gray-700 leading-relaxed mb-4">
          「AIに投資して元が取れるのか」——これが見えにくいことが、AI導入をためらう大きな理由の一つです。
          大手企業でも完全な答えはまだ出ていません。それでも、現場で使われている測り方をいくつかご紹介します。
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
          <div className="p-4 rounded-xl bg-gray-50 border border-gray-100">
            <p className="text-base font-bold text-gray-800 mb-1">削減時間で見る</p>
            <p className="text-sm text-gray-500">「資料作成に2時間→30分」のように、作業時間のビフォーアフターを記録</p>
          </div>
          <div className="p-4 rounded-xl bg-gray-50 border border-gray-100">
            <p className="text-base font-bold text-gray-800 mb-1">アンケートで見る</p>
            <p className="text-sm text-gray-500">精神的な負担やクオリティの変化を、1週間のアンケートで定性的に把握</p>
          </div>
          <div className="p-4 rounded-xl bg-gray-50 border border-gray-100">
            <p className="text-base font-bold text-gray-800 mb-1">工数管理で見る</p>
            <p className="text-sm text-gray-500">工数管理をしている会社は、タスクごとの所要時間の推移で効果を可視化</p>
          </div>
        </div>
        <p className="text-base text-gray-500 leading-relaxed">
          大手企業でも「まず1週間アンケートを取る」ところから始めるケースが大半です。
          完璧な数字を出そうとするより、まず使い始めて体感することが一番の投資判断材料になります。
        </p>
      </motion.div>

      {/* Key message */}
      <motion.div
        initial={{ opacity: 0, x: -12 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className="pl-6 border-l-4 border-primary-400 mb-8"
      >
        <p className="text-xl font-bold text-gray-800 leading-relaxed">
          「まずツールを渡す。ルールを決める。あとは任せる。」
          <br />
          これがAI導入で成功する経営者の共通パターンです。
        </p>
      </motion.div>

      {/* Continuous investment message */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="p-6 sm:p-8 rounded-2xl bg-primary-50/30 border-2 border-primary-200"
      >
        <h3 className="text-lg font-bold text-gray-900 mb-3">
          月3,000円の課金と、毎日10分触る時間。<br />
          <span className="text-gradient">この2つの投資が、最大のリターンを生む。</span>
        </h3>
        <p className="text-base text-gray-700 leading-relaxed">
          金額的な投資（ツールへの課金）だけでなく、<strong className="text-gray-900">時間的な投資（日頃から触り続けること）</strong>も同じくらい重要です。
          触り続けることで「AIにこれをやらせよう」という発想が自然に湧くようになり、
          必要なデータの準備もスムーズにできるようになります。
          <strong className="text-gray-900">「触れる時間」こそが、AI活用の最大の差になります。</strong>
        </p>
      </motion.div>

      <InlineQA
        avatarOffset={3}
        items={[
          {
            q: '月3,000円×社員数って、コストとしてどう考えればいい？',
            a: '1人月3,000円で、毎月の資料作成が半分の時間になるとしたら？社員の時給で計算すれば、初月から元が取れるケースがほとんどです。「コスト」ではなく「投資」として見てください。',
          },
          {
            q: 'ガイドラインって、ゼロから作るの大変じゃない？',
            a: '実はAIにガイドラインの素案を作ってもらうのが一番早いです。「中小企業向けのAI利用ガイドラインを作って」と指示すれば、ひな形が出てきます。それを自社に合わせて修正すればOK。',
          },
        ]}
      />
    </SectionWrapper>
  )
}
