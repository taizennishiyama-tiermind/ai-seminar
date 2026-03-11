import { motion } from 'framer-motion'
import { SectionWrapper } from '../components/SectionWrapper'
import { SectionLabel } from '../components/SectionLabel'
import { ChatBubble } from '../components/ChatBubble'
import { InlineQA } from '../components/InlineQA'

const CHAT_PPTX = [
  {
    role: 'user' as const,
    text: '来月の経営会議で使うプレゼン資料を作って。\n\n・テーマ: 2026年度の事業計画\n・スライド10枚以内\n・売上目標、重点施策3つ、スケジュールを含む\n・添付の決算データ(Excel)を参照して数字を入れて',
  },
  {
    role: 'ai' as const,
    text: 'プレゼン資料を作成しました。PowerPointファイルをダウンロードできます。\n\n[スライド構成]\n1. 表紙: 2026年度 事業計画\n2. 2025年度振り返り（添付データより売上推移グラフ）\n3. 市場環境と課題\n4. 2026年度 売上目標: 2.4億円（前年比115%）\n5. 重点施策①: 新商品ラインの拡充\n6. 重点施策②: EC販路の強化\n7. 重点施策③: 人材採用・育成\n8. 投資計画と収支見込み\n9. 実行スケジュール（ガントチャート）\n10. まとめ・質疑応答',
  },
]

const CHAT_WORD = [
  {
    role: 'user' as const,
    text: '取引先に送る業務委託契約書のひな形を作って。\nWord形式で、一般的な条項を入れて。\n委託内容の部分は空欄にしておいて。',
  },
  {
    role: 'ai' as const,
    text: '業務委託契約書のひな形をWord形式で作成しました。\n\n[含まれる条項]\n・第1条 目的\n・第2条 委託内容（空欄）\n・第3条 委託期間\n・第4条 報酬および支払方法\n・第5条 秘密保持\n・第6条 知的財産権の帰属\n・第7条 再委託の禁止\n・第8条 契約解除\n・第9条 損害賠償\n・第10条 合意管轄\n\n※ 法的な最終確認は専門家にご依頼ください。',
  },
]

const DOC_TYPES = [
  { label: 'プレゼン資料', format: 'PowerPoint (.pptx)', color: 'bg-orange-50 border-orange-200 text-orange-700' },
  { label: '報告書・企画書', format: 'Word (.docx)', color: 'bg-blue-50 border-blue-200 text-blue-700' },
  { label: '見積書・請求書', format: 'Excel (.xlsx)', color: 'bg-green-50 border-green-200 text-green-700' },
  { label: 'マニュアル・手順書', format: 'PDF / Word', color: 'bg-purple-50 border-purple-200 text-purple-700' },
]

export function DocumentCreation() {
  return (
    <SectionWrapper id="doc-creation">
      <SectionLabel
        category="CHAPTER 02"
        title="資料・ドキュメントもAIが作る時代"
        subtitle="PowerPoint、Word、Excel——いつも時間がかかる書類作成を、AIに任せてみませんか。"
      />

      {/* Document types */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-10">
        {DOC_TYPES.map((doc, i) => (
          <motion.div
            key={doc.label}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.06 }}
            className={`p-4 rounded-xl border text-center ${doc.color}`}
          >
            <p className="text-base font-bold mb-1">{doc.label}</p>
            <p className="text-sm opacity-70">{doc.format}</p>
          </motion.div>
        ))}
      </div>

      {/* Chat examples */}
      <div className="space-y-12 mb-12">
        <div>
          <p className="text-lg font-bold text-gray-800 mb-3">
            例1: 経営会議のプレゼン資料を作らせる
          </p>
          <ChatBubble messages={CHAT_PPTX} title="Claude" />
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-4 p-4 rounded-xl bg-orange-50/50 border border-orange-100"
          >
            <p className="text-base text-gray-700 leading-relaxed">
              <strong className="text-orange-600">ポイント:</strong> Excelの決算データを添付するだけで、AIがグラフ入りのスライドを自動生成。
              あとは数字と表現を確認して微調整するだけ。
            </p>
          </motion.div>

          {/* Actual output: PowerPoint */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-6 p-6 rounded-2xl bg-white border-2 border-primary-200"
          >
            <h3 className="text-lg font-bold text-gray-900 mb-4">
              実際にAIが作った資料がこちら
            </h3>
            <p className="text-base text-gray-500 mb-4">
              ChatGPTやClaudeに指示するだけで、このレベルの資料が数分で出てきます。
              あとは自社のデータに差し替えて、表現を微調整すれば完成。
            </p>
            <a
              href="/downloads/pptx_sample.pptx"
              download
              className="group block rounded-xl border border-gray-200 bg-white overflow-hidden hover:border-orange-300 hover:shadow-md transition-all"
            >
              <img
                src="/captures/pptx_sample.png"
                alt="AIが作成したプレゼン資料"
                className="w-full h-auto"
              />
              <div className="p-4 text-center border-t border-gray-100">
                <p className="text-base font-bold text-gray-700 group-hover:text-orange-600 transition-colors">プレゼン資料（.pptx）</p>
                <p className="text-sm text-primary-500 mt-1">クリックでダウンロード →</p>
              </div>
            </a>
          </motion.div>
        </div>

        <div>
          <p className="text-lg font-bold text-gray-800 mb-3">
            例2: 契約書のひな形をWordで作らせる
          </p>
          <ChatBubble messages={CHAT_WORD} title="Claude" />

          {/* Actual output: Word */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-6 p-6 rounded-2xl bg-white border-2 border-primary-200"
          >
            <h3 className="text-lg font-bold text-gray-900 mb-4">
              実際にAIが作った資料がこちら
            </h3>
            <div className="rounded-xl border border-gray-200 bg-white overflow-hidden">
              <img
                src="/captures/docx_samole.png"
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

      {/* Key message */}
      <motion.div
        initial={{ opacity: 0, x: -12 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className="pl-6 border-l-4 border-primary-400"
      >
        <p className="text-xl font-bold text-gray-800 leading-relaxed">
          「PowerPointに丸一日」はもう終わり。
          AIに下書きを任せて、あなたは中身の判断に集中する。
        </p>
      </motion.div>

      <InlineQA
        avatarOffset={1}
        items={[
          {
            q: 'AIが作った資料って、そのまま会議に出せるレベル？',
            a: '「80点の下書き」が一瞬で出てくるイメージです。そこから自社のデータを入れて、表現を直して仕上げる。ゼロから作るより圧倒的に速い。',
          },
          {
            q: 'Excelのデータを渡すって、情報漏洩は大丈夫？',
            a: '有料プランでは入力データが学習に使われない設定があります。また、社名や個人名を伏せて渡す工夫も有効です。「まず架空データで試す」のがおすすめです。',
          },
        ]}
      />
    </SectionWrapper>
  )
}
