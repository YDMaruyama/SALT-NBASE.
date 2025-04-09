export function Hero() {
  return (
    <div className="relative pt-20">
      <div className="relative h-[80vh] overflow-hidden">
        <div className="absolute inset-0">
          <img src="https://github.com/YDMaruyama/SALT-NBASE./blob/main/images/IMG_2282%202.jpeg?raw=true"
            alt="塩洞窟"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/20"></div>
        </div>

        <div className="absolute left-20 top-1/2 -translate-y-1/2 text-white">
          <h1 className="text-4xl font-serif tracking-wider mb-6">
            楽しく健康に、<br />
            塩洞窟と排毒。
          </h1>
          <p className="text-xl tracking-wider">
            心と体の真の調和を目指して
          </p>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white text-sm flex flex-col items-center">
          <span className="mb-2">Scroll</span>
          <div className="w-px h-8 bg-white/70 animate-bounce"></div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 bg-white/90 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center gap-8">
            <span className="text-sage-600 font-medium">NEWS</span>
            <span className="text-natural-600">2025.04.06</span>
            <span className="text-natural-800">GRAND OPENのお知らせ</span>
            <span className="text-natural-600">2025.04.09</span>
            <span className="text-natural-800">オープニングレセプション開催のお知らせ</span>
          </div>
        </div>
      </div>
    </div>
  );
}