'use client';

import TaxiCard from './components/TaxiCard';
import Header from './components/Header';
import Footer from './components/Footer';
import { motion } from 'framer-motion';

const taxis = {
  premium: [
    {
      id: 1,
      name: "VIP Taksi Hizmeti",
      description: "Lüks araçlarla konforlu ve güvenli yolculuk",
      rating: 4.9,
      isPremium: true,
      features: ["Lüks Araçlar", "Profesyonel Sürücüler", "7/24 Hizmet"],
      phone: "+90 555 123 4567",
      image: "https://images.unsplash.com/photo-1597007066704-67bf2068d5b2?w=800"
    },
    {
      id: 3,
      name: "Lüks VIP Transfer",
      description: "Özel şoförle konforlu seyahat deneyimi",
      rating: 5.0,
      isPremium: true,
      features: ["Özel Şoför", "Lüks Araçlar", "Rezervasyon İmkanı"],
      phone: "+90 555 345 6789",
      image: "https://images.unsplash.com/photo-1599012307530-1c4e0636f5b9?w=800"
    }
  ],
  standard: [
    {
      id: 2,
      name: "Ekonomik Taksi",
      description: "Uygun fiyatlı, güvenilir ulaşım çözümü",
      rating: 4.5,
      isPremium: false,
      features: ["Uygun Fiyat", "Hızlı Hizmet", "Güvenli Yolculuk"],
      phone: "+90 555 234 5678",
      image: "https://images.unsplash.com/photo-1534520092937-4717c0b18103?w=800"
    },
    {
      id: 4,
      name: "Şehir Turu Taksi",
      description: "Şehri keşfetmek için özel tur hizmeti",
      rating: 4.7,
      isPremium: false,
      features: ["Şehir Turu", "Turistik Gezi", "Rehberlik"],
      phone: "+90 555 456 7890",
      image: "https://images.unsplash.com/photo-1605600659908-0ef719419d41?w=800"
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
    title: "Restaurant",
    description: "Eşsiz lezzetler, unutulmaz anlar",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800",
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
            Beşikdüzü'nün her noktasına 7/24 güvenli ve konforlu ulaşım
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
            className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto"
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
            className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto"
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
            className="text-3xl font-bold text-black text-center mb-12"
          >
            Önerilen İşletmeler
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {ads.map((ad, index) => (
              <motion.div
                key={ad.id}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 + index * 0.1 }}
                className="bg-white rounded-lg overflow-hidden shadow-lg"
              >
                <div className="h-48 relative">
                  <img 
                    src={ad.image} 
                    alt={ad.title}
                    className="w-full h-full object-cover"
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