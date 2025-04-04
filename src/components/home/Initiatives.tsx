
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Leaf, Heart, Globe, Users } from 'lucide-react';

interface Initiative {
  title: string;
  description: string;
  image: string;
  icon: typeof Leaf;
}

export function Initiatives() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const initiatives: Initiative[] = [
    {
      title: "浄化瞑想塩洞窟",
      description: " 浄化作用の高い、自然岩塩と海塩をバランスよく配合した塩洞窟が、瞑想に入りやすい環境を作り出します.天然塩のエアロゾルが気道に入り、気管支の粘膜に作用し、呼吸器系の排毒に良いとされています.遮断された空間で導入瞑想を行うことで、瞑想が苦手な方でもプロの誘導によりネガティブをポジティブに変えていく極上の瞑想体験が可能となり、マインドフルネスで精神の排毒も行えます.また、快適な睡眠や便通改善など、内側からの健康サポートにも効果が期待でき、喘息の方や花粉症、アレルギー、皮膚炎に悩む方、肺機能改善、自律神経の乱れ、慢性的な疲労を感じている方などにもおすすめです。",
      image: "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?auto=format&fit=crop&q=80&w=1920",
      icon: Leaf
    },
    {
      title: "部活 =遊び体験",
      description: "大人たちが本気で取り組み、本気で遊ぶための場所・コミュニティーを提供します.独身会、ワイン会、スーパーカーの会など、さまざまな部活やイベントを通じて、健康と楽しみの両立を実現します.",
      image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&q=80&w=1920",
      icon: Heart
    },
    {
      title: "チベット医学療法",
      description: "チベット医学は約2500年の歴史を持つ伝統医療で、古来インドのアーユルヴェーダや中国医学の影響を受けつつ独自に発展しました.SALT'NBASE.は、チベット漢方蒸しをはじめ、チベット現地から直輸入したオイルを使用しています.現地から直輸入した天然100%のチベット漢方薬から抽出したオイルを使用しています.チベットではこの薬草の抽出オイルを essence extraction medicinと呼び、薬草として使用されています。このオイルは皮膚から直接浸透し、血液や体液の循環を活性化することで体を温め、施術効果を向上・長時間持続させ、自分への意識に集中しやすい心と体の基盤を作ります.",
      image: "https://images.unsplash.com/photo-1507904953637-96429b49d9f5?auto=format&fit=crop&q=80&w=1920",
      icon: Globe
    },
    {
      title: "腸内活性料理",
      description: " 100年以上続く老舗の豆腐専門店が誇る無農薬有機大豆料理をはじめ、腸内環境の整備に重点を置いた精進料理をベースに提供します.調理器具にもこだわり、テフロン加工不使用・グルテンフリーが基本です.健康的な食生活をサポートし、内側からの美と健康を促進します.",
      image: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&q=80&w=1920",
      icon: Users
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section ref={sectionRef} className="py-16 bg-natural-50/50">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <h2 className="text-3xl font-serif text-center mb-16 text-sage-800">SALT'NBASE.の取り組み</h2>
        
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="space-y-24 md:space-y-32"
        >
          {initiatives.map((initiative, index) => (
            <motion.div
              key={initiative.title}
              variants={itemVariants}
              className={`flex flex-col ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              } gap-8 md:gap-16 items-center`}
            >
              <div className="w-full md:w-1/2">
                <div className="relative rounded-2xl overflow-hidden aspect-[4/3] shadow-xl">
                  <img
                    src={initiative.image}
                    alt={initiative.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                </div>
              </div>

              <div className="w-full md:w-1/2">
                <div className="flex items-center gap-4 mb-6">
                  <initiative.icon className="w-8 h-8 text-sage-600" />
                  <h3 className="text-2xl font-serif text-sage-800">{initiative.title}</h3>
                </div>
                <p className="text-natural-700 leading-relaxed">
                  {initiative.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}