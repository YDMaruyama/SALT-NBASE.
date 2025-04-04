export function Schedule() {
  return (
    <section className="py-10 bg-sage-50/50 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-serif text-center mb-12 text-sage-800">1日のプラン概要</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {/* Plan A */}
          <div>
            <p className="text-xl text-sage-600 font-medium text-center mb-6">浄化瞑想塩洞窟排毒プラン</p>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="space-y-4">
                <div className="grid grid-cols-[120px_1fr] gap-4">
                  <div className="text-right font-medium text-natural-500">10:00 - 11:00</div>
                  <div className="border-l-4 border-sage-400 pl-4 pb-8">
                    <h4 className="font-semibold text-natural-800">ドライヘッドスパ</h4>
                    <p className="text-sm text-natural-600">個別施術</p>
                  </div>

                  <div className="text-right font-medium text-natural-500">11:00 - 12:00</div>
                  <div className="border-l-4 border-sage-400 pl-4 pb-8">
                    <h4 className="font-semibold text-natural-800">フェイシャルマッサージ</h4>
                    <p className="text-sm text-natural-600">個別施術</p>
                  </div>

                  <div className="text-right font-medium text-natural-500">12:00 - 13:15</div>
                  <div className="border-l-4 border-sage-400 pl-4 pb-8">
                    <h4 className="font-semibold text-natural-800">ランチタイム</h4>
                    <p className="text-sm text-natural-600">精進料理・オーガニックメニュー</p>
                  </div>

                  <div className="text-right font-medium text-natural-500">13:15 - 14:00</div>
                  <div className="border-l-4 border-sage-400 pl-4 pb-8">
                    <h4 className="font-semibold text-natural-800">排毒運動レッスン</h4>
                    <p className="text-sm text-natural-600">グループセッション</p>
                  </div>

                  <div className="text-right font-medium text-natural-500">14:00 - 15:00</div>
                  <div className="border-l-4 border-sage-400 pl-4 pb-8">
                    <h4 className="font-semibold text-natural-800">チベット漢方薬マッサージ</h4>
                    <p className="text-sm text-natural-600">個別施術</p>
                  </div>

                  <div className="text-right font-medium text-natural-500">15:00 - 16:00</div>
                  <div className="border-l-4 border-sage-400 pl-4">
                    <h4 className="font-semibold text-natural-800">チベット漢方薬蒸し</h4>
                    <p className="text-sm text-natural-600">個別施術</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Plan B */}
          <div>
            <p className="text-xl text-sage-600 font-medium text-center mb-6">深部リンパマッサージ排毒プラン</p>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="space-y-4">
                <div className="grid grid-cols-[120px_1fr] gap-4">
                  <div className="text-right font-medium text-natural-500">10:15 - 11:00</div>
                  <div className="border-l-4 border-sage-400 pl-4 pb-8">
                    <h4 className="font-semibold text-natural-800">排毒運動</h4>
                    <p className="text-sm text-natural-600">グループセッション</p>
                    <p className="text-xs text-natural-600 mt-1">軽い運動を取り入れて、体内の血流循環を促進し、毒素の排出をサポート</p>
                  </div>

                  <div className="text-right font-medium text-natural-500">11:00 - 12:00</div>
                  <div className="border-l-4 border-sage-400 pl-4 pb-8">
                    <h4 className="font-semibold text-natural-800">深部リンパマッサージ</h4>
                    <p className="text-sm text-natural-600">個別施術</p>
                    <p className="text-xs text-natural-600 mt-1">筋肉の深部に働きかけ、リンパの流れを促進する1時間の施術</p>
                  </div>

                  <div className="text-right font-medium text-natural-500">12:00 - 12:30</div>
                  <div className="border-l-4 border-sage-400 pl-4 pb-8">
                    <h4 className="font-semibold text-natural-800">ヘッドスパ</h4>
                    <p className="text-sm text-natural-600">個別施術</p>
                    <p className="text-xs text-natural-600 mt-1">頭皮のケアを中心に、血行促進とリラクゼーション効果を実感</p>
                  </div>

                  <div className="text-right font-medium text-natural-500">12:40 - 13:20</div>
                  <div className="border-l-4 border-sage-400 pl-4">
                    <h4 className="font-semibold text-natural-800">浄化瞑想洞窟</h4>
                    <p className="text-sm text-natural-600">個別体験</p>
                    <p className="text-xs text-natural-600 mt-1">自然の塩を利用した静寂な瞑想空間で、心身をリセットする体験</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}