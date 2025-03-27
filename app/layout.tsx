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
    
    // Trabzon İli 
    'trabzon taksi',
    'trabzon havalimanı transfer',
    'trabzon şehirlerarası taksi',
    
    // Çevre İlçeler
    'vakfıkebir taksi',
    'çarşıbaşı taksi',
    'eynesil taksi',
    'büyükliman taksi',
    'görele taksi',
    
    // Bölge + Hizmet Kombinasyonları
    'beşikdüzü havalimanı transfer',
    'vakfıkebir havalimanı taksi',
    'çarşıbaşı vip taksi',
    'trabzon beşikdüzü ulaşım',
    'büyükliman bölgesi taksi',
    
    // Uzun Kuyruklu Anahtar Kelimeler
    'beşikdüzü 7/24 taksi hizmeti',
    'trabzon beşikdüzü ekonomik taksi',
    'vakfıkebir güvenilir taksi hizmeti',
    'beşikdüzü trabzon havalimanı ulaşım'
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
        <meta name="geo.region" content="TR-61" />
        <meta name="geo.placename" content="Beşikdüzü, Trabzon" />
        <meta name="geo.position" content="41.0533;39.2316" />
        <meta name="ICBM" content="41.0533, 39.2316" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
} 