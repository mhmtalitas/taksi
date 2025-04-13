import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Beşikdüzü Taksi - Trabzon Bölgesi 7/24 Güvenli ve Konforlu Ulaşım',
  description: 'Beşikdüzü, Vakfıkebir, Çarşıbaşı, Eynesil ve Büyükliman bölgesi için 7/24 güvenilir taksi hizmeti. Trabzon\'un tüm ilçelerine ve Türkiye\'nin her noktasına konforlu ulaşım.',
  keywords: [
    // Ana Anahtar Kelimeler
    'taksi',
    'beşikdüzü taksi',
    'beşikdüzü',
    'taxi',
    'beşikdüzü taxi',
    
    // Hizmet Çeşitleri
    'vip taksi',
    'transfer hizmeti',
    'şehir turu',
    'havalimanı transfer',
    '7/24 taksi',
    'güvenli taksi',
    'ekonomik taksi',
    'özel taksi',
    'kurumsal taksi',
    'düğün taksi',
    'gelin arabası',
    
    // Trabzon İli 
    'trabzon taksi',
    'trabzon havalimanı transfer',
    'trabzon şehirlerarası taksi',
    'trabzon havaalanı taksi',
    'trabzon gece taksi',
    'trabzon ucuz taksi',
    'trabzon beşikdüzü arası taksi',
    
    // Çevre İlçeler
    'vakfıkebir taksi',
    'çarşıbaşı taksi',
    'eynesil taksi',
    'büyükliman taksi',
    'görele taksi',
    'tirebolu taksi',
    'espiye taksi',
    'şalpazarı taksi',
    'tonya taksi',
    
    // Bölge + Hizmet Kombinasyonları
    'beşikdüzü havalimanı transfer',
    'vakfıkebir havalimanı taksi',
    'çarşıbaşı vip taksi',
    'trabzon beşikdüzü ulaşım',
    'büyükliman bölgesi taksi',
    'karadeniz taksi',
    'karadeniz tur taksi',
    
    // Uzun Kuyruklu Anahtar Kelimeler
    'beşikdüzü 7/24 taksi hizmeti',
    'trabzon beşikdüzü ekonomik taksi',
    'vakfıkebir güvenilir taksi hizmeti',
    'beşikdüzü trabzon havalimanı ulaşım',
    'beşikdüzü taksi telefon numarası',
    'beşikdüzü ucuz taksi fiyatları',
    'beşikdüzüde taksi nasıl çağırılır',
    'beşikdüzü merkez taksi durağı',
    'trabzon havalimanından beşikdüzüne taksi ücreti',
    
    // Özel Durumlar
    'beşikdüzü taksi durağı',
    'beşikdüzü merkez taksi',
    'engelli taksi beşikdüzü',
    'büyük bagajlı taksi',
    'klimalı taksi',
    'beşikdüzü online taksi çağırma',
    'beşikdüzü taksi ücretleri',
    'beşikdüzü taksi siparişi'
  ],
  authors: [{ name: 'Mehmet Ali Taş' }],
  creator: 'Mehmet Ali Taş',
  publisher: 'Beşikdüzü Taksi',
  metadataBase: new URL('https://besikduzutaksi.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Beşikdüzü Taksi - Trabzon Bölgesi 7/24 Güvenli ve Konforlu Ulaşım',
    description: 'Beşikdüzü, Vakfıkebir, Çarşıbaşı, Eynesil ve Büyükliman bölgesi için 7/24 güvenilir taksi hizmeti. Trabzon\'un tüm ilçelerine ve Türkiye\'nin her noktasına konforlu ulaşım.',
    url: 'https://besikduzutaksi.com',
    siteName: 'Beşikdüzü Taksi',
    locale: 'tr_TR',
    type: 'website',
  },
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'google-site-verification-code', // Google Search Console doğrulama kodu eklenecek
  },
  category: 'transportation'
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr">
      <head>
        <link rel="canonical" href="https://besikduzutaksi.com" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <meta name="geo.region" content="TR-61" />
        <meta name="geo.placename" content="Beşikdüzü, Trabzon" />
        <meta name="geo.position" content="41.0533;39.2316" />
        <meta name="ICBM" content="41.0533, 39.2316" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
} 