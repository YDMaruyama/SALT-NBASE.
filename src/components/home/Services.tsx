import { Mountain, Wind, Salad, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export function Services() {
  const [selectedService, setSelectedService] = useState<string | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const planAServices = [
    {
      icon: Mountain,
      title: "天然塩洞窟でのデトックス瞑想",
      description: "天然岩塩から放出されるマイナスイオンで深いリラックス効果を体験。専門インストラクターによる呼吸法・瞑想ガイダンスのもと、最適温度・湿度管理された快適空間で施術を行います。",
      image: "https://github.com/YDMaruyama/SALT-NBASE./blob/main/images/IMG_2282%202.jpeg?raw=true"
    },
    {
      icon: Wind,
      title: "循環デトックスセッション",
      description: "初心者でも簡単な専用デトックス棒によるセルフケア指導と、デトックス効果を高める呼吸法レッスンを提供。老廃物排出を促す特別マッサージ技法で、体内浄化を促進します。",
      image: "https://github.com/YDMaruyama/SALT-NBASE./blob/main/images/IMG_1955%202.jpeg?raw=true"
    },
    {
      icon: Salad,
      title: "オーガニック薬膳料理",
      description: "創業100年以上の豆腐専門店による無農薬有機大豆料理を提供。デトックス効果を高める薬膳メニューと、季節の食材を活かした豊富な料理内容で、体の内側からの浄化をサポートします。",
      image: "https://github.com/YDMaruyama/SALT-NBASE./blob/main/images/IMG_2284.JPG?raw=true"
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
          <h3 className="text-2xl font-serif mb-12 text-center text-natural-700">心と体を浄化する塩洞窟デトックスプログラム</h3>
          <ServiceList services={planAServices} />
        </div>
      </div>
    </section>
  );
}