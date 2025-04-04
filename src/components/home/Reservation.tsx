import { Calendar, MessageCircle, ExternalLink } from 'lucide-react';

export function Reservation() {
  return (
    <section className="py-16 bg-sage-50/50">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <h2 className="text-3xl font-serif mb-8 text-sage-800 text-center">ご予約について</h2>
        
        <div className="bg-white rounded-xl shadow-lg p-8 max-w-3xl mx-auto">
          <div className="prose prose-sage mx-auto">
            <p className="text-natural-800 leading-relaxed mb-6">
              SALT'N BASE.では、お客様一人一人に寄り添った最適なケアをご提供させていただきます。心と体の調和を目指す特別な時間をご一緒できることを、スタッフ一同心よりお待ちしております。
            </p>

            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-serif text-sage-800 mb-3 flex items-center gap-2">
                  <Calendar className="w-5 h-5" />
                  ご予約方法
                </h3>
                <div className="space-y-4 text-natural-700">
                  <div className="bg-[#00B900]/10 p-4 rounded-lg">
                    <div className="flex items-center gap-2 mb-2">
                      <MessageCircle className="w-5 h-5 text-[#00B900]" />
                      <span className="font-medium">LINE公式アカウント</span>
                    </div>
                    <p className="text-sm mb-2">
                      24時間いつでもご予約可能です。友だち追加後、トーク画面からスムーズにご予約いただけます。
                      ご不明な点がございましたら、LINEでお気軽にお問い合わせください。
                    </p>
                    <a 
                      href="https://lin.ee/nug2WAF"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-[#00B900] text-white px-4 py-2 rounded-md text-sm hover:bg-[#00A000] transition-colors"
                    >
                      <MessageCircle className="w-4 h-4" />
                      LINEで予約する
                    </a>
                  </div>

                  <div className="bg-sage-50 p-4 rounded-lg">
                    <div className="flex items-center gap-2 mb-2">
                      <ExternalLink className="w-5 h-5 text-sage-600" />
                      <span className="font-medium">アイテマス予約システム</span>
                    </div>
                    <p className="text-sm mb-2">
                      アイテマスの予約システムからも24時間いつでもご予約いただけます。
                      空き状況の確認や希望の日時の指定が簡単に行えます。
                    </p>
                    <a 
                      href="https://app.aitemasu.me/u/saltnbase/yoyaku"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-sage-600 text-white px-4 py-2 rounded-md text-sm hover:bg-sage-700 transition-colors"
                    >
                      <Calendar className="w-4 h-4" />
                      アイテマスで予約する
                    </a>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-serif text-sage-800 mb-3">キャンセルについて</h3>
                <p className="text-natural-700">
                  ご予約のキャンセルは、前日までにご連絡いただけますようお願いいたします。当日のキャンセルは、キャンセル料（50%）を申し受けます。
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}