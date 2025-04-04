import { Sparkles, Brain, Cloud, Mountain, Salad, Dumbbell, Heart, Flower2, Wind, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export function Services() {
  const [selectedService, setSelectedService] = useState<string | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const planAServices = [
    {
      icon: Sparkles,
      title: "ドライヘッドスパとフェイシャルマッサージ",
      description: "頭部と顔のケアを通じ、リラクゼーションと血行促進を実現。ストレス軽減、肌の引き締めや集中力向上に効果が期待されます。",
      image: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&q=80&w=1920"
    },
    {
      icon: Brain,
      title: "チベット医学療法",
      description: "古来のチベット伝統に基づくアプローチで、体内のエネルギーバランスを整え、自己治癒力を引き出します。",
      image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=1920"
    },
    {
      icon: Cloud,
      title: "チベット漢方蒸し",
      description: "蒸気と漢方の力を融合した温熱療法。漢方成分を含む蒸気が体内に染み込み、老廃物の排出とデトックス、血行促進とリラクゼーションを促します。",
      image: "https://images.unsplash.com/photo-1519415510236-718bdfcd89c8?auto=format&fit=crop&q=80&w=1920"
    },
    {
      icon: Mountain,
      title: "浄化瞑想塩洞窟",
      description: "自然の塩のミネラル効果と瞑想による静寂な空間が融合。塩の浄化作用で呼吸器や皮膚の健康をサポートし、心身のバランスを整え、深いリラクゼーションをもたらします。",
      image: "https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?auto=format&fit=crop&q=80&w=1920"
    },
    {
      icon: Salad,
      title: "食事療法",
      description: "100年以上続く老舗の豆腐専門店が手がける無農薬有機大豆料理をはじめ、グルテンフリーを基本に腸内環境を改善する腸活・排毒料理を提供します。鉄や銅など調理器具にもこだわり、内側からの美と健康を促進する食事をお楽しみいただけます。",
      image: "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&q=80&w=1920"
    },
    {
      icon: Dumbbell,
      title: "排毒運動レッスン",
      description: "軽い運動で体内の血流循環を促進し、毒素の排出をサポート。健康的な体内環境の維持に寄与します。",
      image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&q=80&w=1920"
    }
  ];

  const planBServices = [
    {
      icon: Heart,
      title: "深部リンパマッサージ",
      description: "筋肉の深部に働きかけ、リンパの流れを促進。老廃物の排出を助け、むくみ軽減や免疫力向上に貢献する施術です。",
      image: "https://images.unsplash.com/photo-1519823551278-64ac92734fb1?auto=format&fit=crop&q=80&w=1920"
    },
    {
      icon: Flower2,
      title: "ヘッドスパ",
      description: "頭皮を中心としたケアで、血行促進とリラクゼーション効果を実感。頭部の爽快感とともに、精神的なリフレッシュが期待されます。",
      image: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&q=80&w=1920"
    },
    {
      icon: Wind,
      title: "排毒運動",
      description: "軽い運動を取り入れ、体内の血流循環を促進。体内の毒素排出をサポートし、健康維持を目指します。",
      image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&q=80&w=1920"
    },
    {
      icon: Mountain,
      title: "浄化瞑想洞窟",
      description: "自然の塩を利用した静寂な瞑想空間。心身をリセットし、深いリラクゼーションと浄化効果を提供します。",
      image: "https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?auto=format&fit=crop&q=80&w=1920"
    }
  ];

  const handleServiceClick = (title: string) => {
    setSelectedService(selectedService === title ? null : title);
    setIsAutoPlaying(false);
  };

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % planAServices.length);
  }, [planAServices.length]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + planAServices.length) % planAServices.length);
  }, [planAServices.length]);

  useEffect(() => {
    let intervalId: number;
    
    if (isAutoPlaying) {
      intervalId = window.setInterval(() => {
        nextSlide();
      }, 5000);
    }

    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, [isAutoPlaying, nextSlide]);

  const ServiceList = ({ services }: { services: typeof planAServices }) => {
    const ITEMS_TO_SHOW = 3;
    const TRANSITION_DURATION = 0.3;

    const getVisibleServices = () => {
      const result = [];
      for (let i = -1; i <= ITEMS_TO_SHOW; i++) {
        const index = (currentIndex + i + services.length) % services.length;
        result.push({ ...services[index], position: i });
      }
      return result;
    };

    const getCardStyle = (position: number) => {
      if (position === -1) return "opacity-20 blur-[2px] -translate-x-1/4 scale-90";
      if (position === 0) return "opacity-80 blur-[1px] -translate-x-1/8";
      if (position === 1) return "z-20";
      if (position === 2) return "opacity-80 blur-[1px] translate-x-1/8";
      return "opacity-20 blur-[2px] translate-x-1/4 scale-90";
    };

    return (
      <div 
        className="relative"
        onMouseEnter={() => setIsAutoPlaying(false)}
        onMouseLeave={() => setIsAutoPlaying(true)}
      >
        <div className="overflow-hidden px-8">
          <div className="flex items-center justify-center gap-4">
            <AnimatePresence initial={false}>
              {getVisibleServices().map((service, index) => (
                <motion.div
                  key={`${service.title}-${index}`}
                  className={`flex-shrink-0 w-[320px] bg-white rounded-xl shadow-[0_2px_8px_rgba(0,0,0,0.12)] 
                    ${getCardStyle(service.position)}`}
                  initial={{ opacity: 0, x: service.position > 0 ? 100 : -100 }}
                  animate={{ 
                    opacity: 1,
                    x: 0,
                    scale: service.position === 1 ? 1 : 0.9,
                    filter: service.position === 1 ? 'blur(0px)' : 'blur(2px)'
                  }}
                  exit={{ 
                    opacity: 0,
                    x: service.position > 0 ? 100 : -100,
                    transition: { duration: TRANSITION_DURATION }
                  }}
                  transition={{
                    duration: TRANSITION_DURATION,
                    ease: 'easeInOut'
                  }}
                >
                  {/* Image Area */}
                  <div className="h-[200px] w-full overflow-hidden rounded-t-xl">
                    <img 
                      src={service.image} 
                      alt={service.title}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Content Area */}
                  <div className="p-4 h-[220px] flex flex-col">
                    <div className="flex items-start gap-3 mb-3">
                      <service.icon className="w-6 h-6 text-sage-600 flex-shrink-0" />
                      <h4 className="text-[18px] font-semibold text-[#333333] leading-tight">
                        {service.title}
                      </h4>
                    </div>
                    <p className="text-[14px] text-[#666666] leading-[1.5] flex-grow">
                      {service.description}
                    </p>
                    <button
                      onClick={() => handleServiceClick(service.title)}
                      className="mt-4 w-full h-[40px] bg-sage-600 text-white rounded-lg hover:bg-sage-700 transition-colors duration-300"
                    >
                      詳細を見る
                    </button>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>

        <div className="flex justify-center items-center gap-4 mt-8">
          <button
            onClick={() => {
              prevSlide();
              setIsAutoPlaying(false);
            }}
            className="p-2 rounded-full bg-sage-100 text-sage-600 hover:bg-sage-200 transition-colors"
            aria-label="Previous services"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <div className="flex gap-2">
            {services.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setCurrentIndex(index);
                  setIsAutoPlaying(false);
                }}
                className={`w-2.5 h-2.5 rounded-full transition-colors ${
                  index === currentIndex ? 'bg-sage-600' : 'bg-sage-200 hover:bg-sage-300'
                }`}
                aria-label={`Go to service group ${index + 1}`}
              />
            ))}
          </div>

          <button
            onClick={() => {
              nextSlide();
              setIsAutoPlaying(false);
            }}
            className="p-2 rounded-full bg-sage-100 text-sage-600 hover:bg-sage-200 transition-colors"
            aria-label="Next services"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>
    );
  };

  return (
    <section className="py-10 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-serif text-center mb-16 text-sage-800">サービス内容</h2>
        
        {/* Plan A */}
        <div className="mb-16">
          <h3 className="text-2xl font-serif mb-12 text-center text-natural-700">浄化瞑想塩洞窟排毒プラン</h3>
          <ServiceList services={planAServices} />
        </div>

        {/* Plan B */}
        <div>
          <h3 className="text-2xl font-serif mb-12 text-center text-natural-700">深部リンパマッサージ排毒プラン</h3>
          <ServiceList services={planBServices} />
        </div>
      </div>
    </section>
  );
}