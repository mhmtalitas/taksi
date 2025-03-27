'use client';

import TaxiCard from './components/TaxiCard';
import Header from './components/Header';
import Footer from './components/Footer';
import { motion } from 'framer-motion';
import Image from 'next/image';

const taxis = {
  premium: [
    {
      id: 1,
      name: "VIP Taksi Hizmeti",
      description: "Lüks araçlarla konforlu ve güvenli yolculuk",
      rating: 4.9,
      isPremium: true,
      features: ["Lüks Araçlar", "Profesyonel Sürücüler", "7/24 Hizmet"],
      phone: "+90 555 XXX XXXX",
      image: "https://images.unsplash.com/photo-1597007066704-67bf2068d5b2?w=800"
    },
    {
      id: 2,
      name: "Lüks VIP Transfer",
      description: "Özel şoförle konforlu seyahat deneyimi",
      rating: 5.0,
      isPremium: true,
      features: ["Özel Şoför", "Lüks Araçlar", "Rezervasyon İmkanı"],
      phone: "+90 555 XXX XXXX",
      image: "https://images.unsplash.com/photo-1599012307530-1c4e0636f5b9?w=800"
    },
    {
      id: 3,
      name: "Business Transfer",
      description: "İş seyahatleri için özel transfer hizmeti",
      rating: 4.9,
      isPremium: true,
      features: ["Wifi", "İkram Servisi", "Kurumsal Fatura"],
      phone: "+90 555 XXX XXXX",
      image: "https://images.unsplash.com/photo-1632923057155-dd35366509c9?w=800"
    }
  ],
  standard: [
    {
      id: 4,
      name: "Ekonomik Taksi",
      description: "Uygun fiyatlı, güvenilir ulaşım çözümü",
      rating: 4.5,
      isPremium: false,
      features: ["Uygun Fiyat", "Hızlı Hizmet", "Güvenli Yolculuk"],
      phone: "+90 555 XXX XXXX",
      image: "https://images.unsplash.com/photo-1534520092937-4717c0b18103?w=800"
    },
    {
      id: 5,
      name: "Şehir Turu Taksi",
      description: "Şehri keşfetmek için özel tur hizmeti",
      rating: 4.7,
      isPremium: false,
      features: ["Şehir Turu", "Turistik Gezi", "Rehberlik"],
      phone: "+90 555 XXX XXXX",
      image: "https://images.unsplash.com/photo-1617650728468-8581e439c864?w=800"
    },
    {
      id: 6,
      name: "7/24 Taksi",
      description: "Günün her saati hizmetinizdeyiz",
      rating: 4.6,
      isPremium: false,
      features: ["24 Saat", "Hızlı Teslimat", "Güler Yüzlü Hizmet"],
      phone: "+90 555 XXX XXXX",
      image: "https://images.unsplash.com/photo-1511527844068-006b95d162c2?w=800"
    }
  ]
};

const ads = [
  {
    id: 1,
    title: "Lüks Otel",
    description: "5 yıldızlı konaklama deneyimi",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800",
    link: "#"
  },
  {
    id: 2,
    title: "Balık Restaurant",
    description: "Taze deniz ürünleri ve eşsiz Karadeniz lezzetleri",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800",
    link: "#"
  },
  {
    id: 3,
    title: "Sahil Kafe",
    description: "Deniz manzarasına karşı keyifli kahvaltı ve atıştırmalıklar",
    image: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=800",
    link: "#"
  },
  {
    id: 4,
    title: "Manzara Cafe & Bistro",
    description: "Modern atmosferde enfes kahve ve ev yapımı lezzetler",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800",
    link: "#"
  }
];

export default function Home() {
  return (
    <div className="min-h-screen bg-yellow-400 flex flex-col">
      <Header />
      
      <main className="container mx-auto px-4 py-12 flex-grow">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold text-black mb-4">
            Beşikdüzü Taksi Hizmetleri
          </h1>
          <p className="text-xl text-gray-800 max-w-2xl mx-auto">
            Beşikdüzü&apos;nden Türkiye&apos;nin her noktasına 7/24 güvenli ve konforlu ulaşım
          </p>
        </motion.div>

        {/* Premium Taksiler */}
        <div className="mb-16">
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-2xl font-bold text-black mb-8 text-center"
          >
            Premium Taksi Hizmetlerimiz
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto"
          >
            {taxis.premium.map((taxi, index) => (
              <motion.div
                key={taxi.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <TaxiCard taxi={taxi} />
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Standart Taksiler */}
        <div className="mb-16">
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-2xl font-bold text-black mb-8 text-center"
          >
            Standart Taksi Hizmetlerimiz
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto"
          >
            {taxis.standard.map((taxi, index) => (
              <motion.div
                key={taxi.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + index * 0.1 }}
              >
                <TaxiCard taxi={taxi} />
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Reklam Bölümü */}
        <section className="mt-24">
          <motion.h2 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-3xl font-bold text-black text-center mb-4"
          >
            Beşikdüzü&apos;nden Önerilen İşletmeler
          </motion.h2>
          <p className="text-center text-gray-700 mb-12 max-w-2xl mx-auto">
            Size en iyi hizmeti sunmak için güvendiğimiz yerel işletmeler
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {ads.map((ad, index) => (
              <motion.div
                key={ad.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + index * 0.1 }}
                className="bg-white rounded-lg overflow-hidden shadow-lg transform transition-all duration-300 hover:scale-[1.02] hover:shadow-xl"
              >
                <div className="h-48 relative">
                  <Image 
                    src={ad.image} 
                    alt={ad.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-black mb-2">{ad.title}</h3>
                  <p className="text-gray-600 mb-4">{ad.description}</p>
                  <a 
                    href={ad.link}
                    className="inline-block bg-yellow-400 text-black px-6 py-2 rounded-lg font-semibold hover:bg-yellow-500 transition-all"
                  >
                    Detaylar
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
} 