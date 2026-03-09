import { motion } from 'framer-motion'
import { SectionWrapper } from '../components/SectionWrapper'
import { SectionLabel } from '../components/SectionLabel'

const QA_ITEMS = [
  {
    q: 'AIに仕事を奪われるのでは？',
    a: '「AIに奪われる」よりも「AIを使いこなす人に仕事が移る」が正確です。タクシー運転手がカーナビで仕事を失わなかったように、AIは道具。使い方を知っている人が有利になります。',
    questioner: 's_human01',
    answerer: 's_human08',
  },
  {
    q: '年齢的にもう遅いのでは？',
    a: 'むしろ逆です。AIは「若者のツール」ではなく「経験を持つ人のレバレッジ」です。30年の業界経験 + AI = 若手10人分の生産性。経験値こそAI時代の最大のアドバンテージです。',
    questioner: 's_human03',
    answerer: 's_human10',
  },
  {
    q: 'セキュリティは大丈夫？社内の機密情報を入れても？',
    a: '重要なポイントです。①社内導入版（Azure OpenAI等）ならデータは外部に出ません ②公開版でも機密情報は入れない運用ルールを作る ③AI利用ガイドラインを社内で策定する——この3点が基本です。',
    questioner: 's_human04',
    answerer: 's_human12',
  },
  {
    q: 'まず何から始めたらいい？',
    a: 'おすすめの3ステップ:\n① まず ChatGPT や Claude を無料で触ってみる（5分）\n② 日常業務のメール文やレポートの下書きに使う（1週間）\n③ 自社の課題に当てはめて使い方を考える（1ヶ月）\n小さく始めて、徐々に範囲を広げるのがコツです。',
    questioner: 's_human06',
    answerer: 's_human14',
  },
  {
    q: 'AIが間違ったことを言うことがあると聞いたけど？',
    a: 'はい、「ハルシネーション（幻覚）」と呼ばれる現象です。AIは自信満々に嘘をつくことがあります。だからこそ「見極める目」が大切。ファクトチェックは人間の仕事です。ただし、最新モデルでは精度が大幅に向上しています。',
    questioner: 's_human07',
    answerer: 's_human15',
  },
  {
    q: 'コストはどのくらいかかる？',
    a: '無料プランでも十分に始められます。有料プランは月2,000〜3,000円程度（ChatGPT Plus, Claude Pro）。外注費を考えれば驚くほど安い投資です。まずは無料で試して、効果を実感してから有料プランを検討するのがベストです。',
    questioner: 's_human09',
    answerer: 's_human16',
  },
]

export function FAQ() {
  return (
    <SectionWrapper id="faq" bg="gray">
      <SectionLabel
        category="Q&A"
        title="よくある質問"
        subtitle="卓話の中でも質疑応答の時間を設けますが、よくいただく質問を先にお答えします。"
      />

      <div className="space-y-6">
        {QA_ITEMS.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.06, duration: 0.4 }}
          >
            {/* Question */}
            <div className="flex items-start gap-3 mb-3">
              <div className="shrink-0 w-9 h-9 rounded-full bg-gray-50 border border-gray-200 overflow-hidden">
                <img
                  src={`/illustrations/${item.questioner}.png`}
                  alt=""
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="flex-1">
                <span className="text-[9px] font-bold text-gray-400 uppercase tracking-widest">
                  Question
                </span>
                <div className="mt-1 p-3 rounded-2xl rounded-tl-sm bg-gray-50 border border-gray-200">
                  <p className="text-sm font-medium text-gray-800">{item.q}</p>
                </div>
              </div>
            </div>

            {/* Answer */}
            <div className="flex items-start gap-3 pl-6">
              <div className="shrink-0 w-9 h-9 rounded-full bg-primary-50 border border-primary-100 overflow-hidden">
                <img
                  src={`/illustrations/${item.answerer}.png`}
                  alt=""
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="flex-1">
                <span className="text-[9px] font-bold text-primary-400 uppercase tracking-widest">
                  Answer
                </span>
                <div className="mt-1 p-3 rounded-2xl rounded-tl-sm bg-primary-50/50 border border-primary-100">
                  <p className="text-sm text-gray-700 leading-relaxed whitespace-pre-line">
                    {item.a}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  )
}
