import { Clock, Shirt, Users } from 'lucide-react';

export function Schedule() {
  return (
    <section className="py-16 bg-sage-50/50 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-serif text-center mb-6 text-sage-800">心と体を癒す浄化瞑想塩洞窟体験プラン</h2>
        <p className="text-center text-natural-700 mb-12">2.5時間のトータルケアで、心と体の真の調和を体験</p>

        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="p-8">
            {/* Time Schedule */}
            <div className="mb-8">
              <h3 className="text-xl font-serif text-sage-800 mb-6 flex items-center gap-2">
                <Clock className="w-5 h-5 text-sage-600" />
                タイムスケジュール（例）
              </h3>
              <div className="space-y-8">
                <div className="grid md:grid-cols-[150px_1fr] gap-4">
                  <div className="text-sage-600 font-medium">10:30-11:10</div>
                  <div>
                    <h4 className="font-medium text-natural-800 mb-2">塩洞窟でのデトックス瞑想（40分）</h4>
                    <ul className="space-y-2 text-natural-700 text-sm">
                      <li>• 天然岩塩に囲まれた洞窟で、マイナスイオンを浴びながら深いリラックス瞑想</li>
                      <li>• 呼吸法と瞑想のガイダンス付き</li>
                      <li>• 快適な温度と湿度で心地よい空間</li>
                    </ul>
                  </div>
                </div>

                <div className="grid md:grid-cols-[150px_1fr] gap-4">
                  <div className="text-sage-600 font-medium">11:15-12:00</div>
                  <div>
                    <h4 className="font-medium text-natural-800 mb-2">循環排毒体操（45分）</h4>
                    <ul className="space-y-2 text-natural-700 text-sm">
                      <li>• 誰でも簡単に扱える排毒棒を使用したセルフマッサージ法が学べる</li>
                      <li>• 深い呼吸法で体内浄化</li>
                    </ul>
                  </div>
                </div>

                <div className="grid md:grid-cols-[150px_1fr] gap-4">
                  <div className="text-sage-600 font-medium">12:00-13:00</div>
                  <div>
                    <h4 className="font-medium text-natural-800 mb-2">お食事（60分）</h4>
                    <p className="text-natural-700 text-sm">
                      100年以上続く、豆腐専門手が作る種類豊富な無農薬有機大豆料理
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Additional Information */}
            <div className="border-t border-sage-100 pt-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-serif text-sage-800 mb-4 flex items-center gap-2">
                    <Shirt className="w-5 h-5 text-sage-600" />
                    ご参加に際して
                  </h3>
                  <ul className="space-y-2 text-natural-700 text-sm">
                    <li>• 動きやすい服装でお越しください</li>
                    <li>• ヨガマットは無料貸出あり</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-serif text-sage-800 mb-4 flex items-center gap-2">
                    <Users className="w-5 h-5 text-sage-600" />
                    参加条件
                  </h3>
                  <p className="text-natural-700 text-sm">
                    お一人様から参加可能です
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}