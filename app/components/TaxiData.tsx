export const taxis = {
  premium: [
    {
      id: 1,
      name: "VIP Taksi Hizmeti",
      description: "Lüks araçlarla konforlu ve güvenli yolculuk",
      rating: 4.9,
      isPremium: true,
      features: ["Lüks Araçlar", "Profesyonel Sürücüler", "7/24 Hizmet"],
      phone: "+90 555 XXX XXXX",
      image: "https://images.unsplash.com/photo-1597007066704-67bf2068d5b2?w=800",
      slug: "ahmet-yilmaz",
      driverInfo: {
        fullName: "Ahmet Yılmaz",
        age: 45,
        experience: "20 yıl",
        licensePlate: "61 ABC 123",
        carModel: "Mercedes E-Class",
        carYear: "2022",
        languages: ["Türkçe", "İngilizce"],
        serviceAreas: ["Beşikdüzü", "Vakfıkebir", "Trabzon Havalimanı", "Çarşıbaşı"],
        photo: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=800",
        about: "20 yıllık deneyimli bir sürücüyüm. Lüks ve konforlu araçlarla VIP hizmet sunmaktayım. Trabzon'un tüm ilçelerine ve havalimanına transfer hizmeti veriyorum. Yabancı dil bilgim ile turistlere de rehberlik edebiliyorum.",
      }
    },
    {
      id: 2,
      name: "Lüks VIP Transfer",
      description: "Özel şoförle konforlu seyahat deneyimi",
      rating: 5.0,
      isPremium: true,
      features: ["Özel Şoför", "Lüks Araçlar", "Rezervasyon İmkanı"],
      phone: "+90 555 XXX XXXX",
      image: "https://images.unsplash.com/photo-1550355291-bbee04a92027?w=800"
    },
    {
      id: 3,
      name: "Business Transfer",
      description: "İş seyahatleri için özel transfer hizmeti",
      rating: 4.9,
      isPremium: true,
      features: ["Wifi", "İkram Servisi", "Kurumsal Fatura"],
      phone: "+90 555 XXX XXXX",
      image: "https://images.unsplash.com/photo-1550355291-bbee04a92027?w=800"
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
      image: "https://images.unsplash.com/photo-1550355291-bbee04a92027?w=800"
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