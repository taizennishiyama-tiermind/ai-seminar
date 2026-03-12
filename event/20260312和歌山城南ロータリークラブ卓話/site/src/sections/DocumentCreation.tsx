import { motion } from 'framer-motion'
import { SectionWrapper } from '../components/SectionWrapper'
import { SectionLabel } from '../components/SectionLabel'
import { ChatBubble } from '../components/ChatBubble'
import { InlineQA } from '../components/InlineQA'
import docxSamplePreview from '../../../../../assets/captcha/docx_samole.png'
import pptxSamplePreview from '../../../../../assets/captcha/pptx_sample.png'
import pptxSampleFile from '../../../../../assets/claude_output/pptx_sample.pptx?url'

const CHAT_INTERNAL = [
  {
    role: 'user' as const,
    text: '来月の経営会議で使う事業計画の資料を作って。\n\n・スライド10枚以内\n・売上目標、重点施策3つ、スケジュールを含む\n・添付の決算データを参照してグラフも入れて',
    attachments: [
      { name: '2025年度_決算データ.xlsx', size: '2.4 MB', format: 'xlsx' },
    ],
  },
  {
    role: 'ai' as const,
    text: '添付データを分析し、プレゼン資料を作成しました。\n\n[スライド構成]\n1. 表紙: 2026年度 事業計画\n2. 2025年度振り返り（売上推移グラフ）\n3. 市場環境と課題\n4. 売上目標: 2.4億円（前年比115%）\n5. 重点施策①: 新商品ラインの拡充\n6. 重点施策②: EC販路の強化\n7. 重点施策③: 人材採用・育成\n8. 投資計画と収支見込み\n9. 実行スケジュール\n10. まとめ',
    downloadFile: {
      name: '2026年度_事業計画.pptx',
      format: 'pptx',
      formatColor: 'bg-primary-100 text-primary-700',
    },
  },
]

const CHAT_EXTERNAL = [
  {
    role: 'user' as const,
    text: '取引先に送る業務委託契約書のひな形を作って。\nWord形式で、一般的な条項を入れて。\n委託内容の部分は空欄にしておいて。\nうちの会社名「山田商事株式会社」で作って。',
  },
  {
    role: 'ai' as const,
    text: '業務委託契約書のひな形をWord形式で作成しました。\n\n[含まれる条項]\n・第1条 目的\n・第2条 委託内容（空欄）\n・第3条 委託期間\n・第4条 報酬および支払方法\n・第5条 秘密保持\n・第6条 知的財産権の帰属\n・第7条 再委託の禁止\n・第8条 契約解除\n・第9条 損害賠償\n・第10条 合意管轄\n\n※ 法的な最終確認は専門家にご依頼ください。',
    downloadFile: {
      name: '業務委託契約書_山田商事.docx',
      format: 'docx',
      formatColor: 'bg-primary-100 text-primary-700',
    },
  },
]

const CHAT_TEMPLATE = [
  {
    role: 'user' as const,
    text: 'この見積書のひな形に、以下の情報を入れて完成させて。\n\n・件名: Webサイトリニューアル\n・宛先: 株式会社田中工務店 御中\n・見積金額の内訳は添付のメモを参照して',
    attachments: [
      { name: '見積書ひな形.xlsx', size: '340 KB', format: 'xlsx' },
      { name: '見積メモ.txt', size: '2 KB', format: 'txt' },
    ],
  },
  {
    role: 'ai' as const,
    text: 'ひな形のレイアウトを維持したまま、情報を入力しました。\n\n[入力内容]\n・件名: Webサイトリニューアル\n・宛先: 株式会社田中工務店 御中\n・小計: 850,000円\n・消費税: 85,000円\n・合計: 935,000円（税込）\n\nレイアウトや書式はひな形のまま変更していません。',
    downloadFile: {
      name: '見積書_田中工務店様.xlsx',
      format: 'xlsx',
      formatColor: 'bg-primary-100 text-primary-700',
    },
  },
]

export function DocumentCreation() {
  return (
    <SectionWrapper id="doc-creation">
      <SectionLabel
        category="CHAPTER 02"
        title="「最終成果物」をAIが作る時代"
        subtitle="チャットの文章をコピペして自分で資料を作る——もうその時代は終わりました。AIがPowerPointもWordもExcelも、ファイルごと作ってくれます。"
      />

      {/* Paradigm shift intro */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="p-6 sm:p-8 rounded-2xl bg-white border-2 border-primary-200 mb-12"
      >
        <h3 className="text-xl font-bold text-gray-900 mb-4">
          コピペの時代から、<span className="text-gradient">完成品が出てくる時代</span>へ
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div className="p-5 rounded-xl bg-gray-50 border border-gray-200">
            <p className="text-sm font-bold text-gray-400 mb-2">これまで</p>
            <p className="text-base text-gray-600 leading-relaxed">
              AIに聞いた文章を<strong className="text-gray-800">コピー&ペースト</strong>して、自分でWordやPowerPointに貼り付けて整形。結局、体裁を整えるのに時間がかかる。
            </p>
          </div>
          <div className="p-5 rounded-xl bg-primary-50/50 border border-primary-200">
            <p className="text-sm font-bold text-primary-600 mb-2">これから</p>
            <p className="text-base text-gray-600 leading-relaxed">
              AIに指示を出すだけで、<strong className="text-gray-800">ファイルそのものが出てくる</strong>。あとは中身を確認して、必要な箇所だけ直すだけ。
            </p>
          </div>
        </div>
      </motion.div>

      {/* Output formats */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="p-6 sm:p-8 rounded-2xl bg-white border border-gray-200 mb-12"
      >
        <h3 className="text-xl font-bold text-gray-800 mb-2">
          出力されるファイル形式
        </h3>
        <p className="text-base text-gray-500 mb-5">
          普段お使いの形式を、そのままダウンロードできます。
        </p>
        <div className="flex flex-wrap gap-3">
          {[
            { format: '.pptx', label: 'PowerPoint' },
            { format: '.docx', label: 'Word' },
            { format: '.xlsx', label: 'Excel' },
            { format: '.pdf', label: 'PDF' },
            { format: '.csv', label: 'CSV' },
            { format: '.html', label: 'HTML' },
          ].map((item) => (
            <span key={item.format} className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gray-50 border border-gray-200">
              <span className="text-sm font-mono font-bold text-primary-600">{item.format}</span>
              <span className="text-sm text-gray-500">{item.label}</span>
            </span>
          ))}
        </div>
      </motion.div>

      {/* Purpose determines approach */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="p-6 sm:p-8 rounded-2xl bg-white border border-gray-200 mb-12"
      >
        <h3 className="text-xl font-bold text-gray-900 mb-2">
          クオリティを上げるコツは「目的」を伝えること
        </h3>
        <p className="text-base text-gray-500 mb-6">
          同じ「資料を作って」でも、<strong className="text-gray-700">誰に・何のために</strong>渡すかで、AIの作り方が変わります。
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div className="p-5 rounded-xl bg-gray-50 border border-gray-200">
            <p className="text-sm font-bold text-gray-500 mb-3">社内向け資料</p>
            <ul className="space-y-2 text-base text-gray-700 leading-relaxed">
              <li className="flex items-start gap-2">
                <span className="shrink-0 text-primary-300 mt-1">&#x25CF;</span>
                <span>数字やデータが正確に伝わることが最優先</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="shrink-0 text-primary-300 mt-1">&#x25CF;</span>
                <span>デザインは二の次でOK</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="shrink-0 text-primary-300 mt-1">&#x25CF;</span>
                <span><strong>スピード重視</strong>で素早く共有・議論に進む</span>
              </li>
            </ul>
          </div>
          <div className="p-5 rounded-xl bg-primary-50/50 border border-primary-200">
            <p className="text-sm font-bold text-primary-600 mb-3">社外・お客様向け資料</p>
            <ul className="space-y-2 text-base text-gray-700 leading-relaxed">
              <li className="flex items-start gap-2">
                <span className="shrink-0 text-primary-400 mt-1">&#x25CF;</span>
                <span>会社のイメージを損ねない表現・デザイン</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="shrink-0 text-primary-400 mt-1">&#x25CF;</span>
                <span>言葉選びや数字の見せ方を丁寧に確認</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="shrink-0 text-primary-400 mt-1">&#x25CF;</span>
                <span><strong>人間が最終チェック</strong>してから送る</span>
              </li>
            </ul>
          </div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-5 p-4 rounded-xl bg-primary-50/50 border border-primary-100"
        >
          <p className="text-base text-gray-700 leading-relaxed">
            <strong className="text-primary-700">ポイント:</strong> 社内向けなら「AIの下書きをベースに素早く議論」。社外向けなら「AIの下書きを人間がしっかり仕上げる」。どちらもゼロから作るより圧倒的に速い。
          </p>
        </motion.div>
      </motion.div>

      {/* Chat examples */}
      <div className="space-y-12 mb-12">
        <div>
          <p className="text-lg font-bold text-gray-800 mb-1">
            例1: 社内の経営会議資料をサクッと作る
          </p>
          <p className="text-base text-gray-500 mb-3">
            Excelのデータを渡して、グラフ入りのスライドを自動生成。資料作りではなく「議論」に時間を使う。
          </p>
          <ChatBubble messages={CHAT_INTERNAL} title="Claude" />

          {/* Actual output: PowerPoint */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-6 p-6 rounded-2xl bg-white border-2 border-primary-200"
          >
            <h3 className="text-lg font-bold text-gray-900 mb-2">
              実際にAIが作った資料
            </h3>
            <p className="text-base text-gray-500 mb-4">
              指示を出すだけで、このレベルの資料が数分で出てきます。
            </p>
            <a
              href={pptxSampleFile}
              download
              className="group block rounded-xl border border-gray-200 bg-white overflow-hidden hover:border-primary-300 hover:shadow-md transition-all"
            >
              <img
                src={pptxSamplePreview}
                alt="AIが作成したプレゼン資料"
                className="w-full h-auto"
              />
              <div className="p-4 text-center border-t border-gray-100">
                <p className="text-base font-bold text-gray-700 group-hover:text-primary-600 transition-colors">プレゼン資料（.pptx）</p>
                <p className="text-sm text-primary-500 mt-1">クリックでダウンロード →</p>
              </div>
            </a>
          </motion.div>
        </div>

        <div>
          <p className="text-lg font-bold text-gray-800 mb-1">
            例2: 取引先に送る契約書を整えて作る
          </p>
          <p className="text-base text-gray-500 mb-3">
            社外向けの書類も、ひな形を一瞬で用意。あとは内容を確認して、必要な箇所を修正するだけ。
          </p>
          <ChatBubble messages={CHAT_EXTERNAL} title="Claude" />

          {/* Actual output: Word */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-6 p-6 rounded-2xl bg-white border-2 border-primary-200"
          >
            <h3 className="text-lg font-bold text-gray-900 mb-2">
              実際にAIが作った契約書
            </h3>
            <div className="rounded-xl border border-gray-200 bg-white overflow-hidden">
              <img
                src={docxSamplePreview}
                alt="AIが作成したWord文書"
                className="w-full h-auto"
              />
              <div className="p-4 text-center border-t border-gray-100">
                <p className="text-base font-bold text-gray-700">Word文書（.docx）</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Template fill-in */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="p-6 sm:p-8 rounded-2xl bg-white border-2 border-primary-200 mb-12"
      >
        <h3 className="text-xl font-bold text-gray-900 mb-2">
          もうひとつ重要なこと：<span className="text-gradient">既存のひな形にも対応</span>
        </h3>
        <p className="text-base text-gray-500 mb-6">
          ゼロから作るだけでなく、<strong className="text-gray-700">すでにお使いのExcelやWordのひな形に、然るべき情報を埋めてくれる</strong>こともできます。
          レイアウトや書式はそのまま、中身だけ入れ替え。毎月同じフォーマットで作る書類に最適です。
        </p>

        <div className="mb-6">
          <p className="text-lg font-bold text-gray-800 mb-1">
            例: 見積書のひな形に情報を流し込む
          </p>
          <p className="text-base text-gray-500 mb-3">
            いつも使っているExcelのひな形 + 見積メモを渡すだけで、完成した見積書が返ってきます。
          </p>
          <ChatBubble messages={CHAT_TEMPLATE} title="Claude" />
        </div>

        <div className="p-4 rounded-xl bg-primary-50/50 border border-primary-100">
          <p className="text-base text-gray-700 leading-relaxed">
            <strong className="text-primary-700">活用例:</strong> 見積書、請求書、月次報告書、議事録、稟議書——毎回同じフォーマットで作る書類ほど、ひな形 + AIの組み合わせが効きます。
          </p>
        </div>
      </motion.div>

      {/* What changes for you */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="p-6 sm:p-8 rounded-2xl bg-gray-50 border border-gray-200 mb-10"
      >
        <h3 className="text-xl font-bold text-gray-800 mb-4">
          何が変わるのか？
        </h3>
        <div className="space-y-4">
          {[
            {
              title: '資料を「作る時間」が激減する',
              desc: '今まで半日かけていた資料が、数分で下書きが出てくる。残りの時間は中身の検討や議論に使えます。',
            },
            {
              title: '意思決定のスピードが上がる',
              desc: '資料がすぐ手に入るので「来週までに用意して」ではなく「今から見て判断しよう」になります。経営判断の回数そのものが増えます。',
            },
            {
              title: '指示の出し方がそのままクオリティになる',
              desc: '「誰に・何のために・どんなトーンで」を伝えるほど、出てくる資料の精度が上がります。Chapter 01でお伝えした「部下への指示」と同じです。',
            },
          ].map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              className="flex items-start gap-4"
            >
              <span className="shrink-0 w-8 h-8 rounded-full bg-primary-100 text-primary-600 text-sm font-bold flex items-center justify-center mt-0.5">
                {i + 1}
              </span>
              <div>
                <p className="text-base font-bold text-gray-800 mb-1">{item.title}</p>
                <p className="text-base text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Key message */}
      <motion.div
        initial={{ opacity: 0, x: -12 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className="pl-6 border-l-4 border-primary-400"
      >
        <p className="text-xl font-bold text-gray-800 leading-relaxed">
          「資料を作る」時間を減らして、「判断する」時間を増やす。
          <br />
          それがAI時代の仕事の進め方です。
        </p>
      </motion.div>

      <InlineQA
        avatarOffset={1}
        items={[
          {
            q: 'AIが作った資料って、そのまま会議に出せるレベル？',
            a: '社内向けなら、ほぼそのまま使えます。社外向けの場合は表現や数字を人間が最終確認してください。どちらにせよ「ゼロから作る」のとは比べものにならない速さです。',
          },
          {
            q: '会社の機密データを渡して大丈夫？',
            a: '有料プランでは入力データがAIの学習に使われない設定があります。心配な場合は、まず架空データで試してみるのがおすすめです。',
          },
        ]}
      />
    </SectionWrapper>
  )
}
