import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Beşikdüzü Taksi - 7/24 Güvenli ve Konforlu Ulaşım',
  description: 'Beşikdüzü\'nün güvenilir taksi hizmeti. VIP transfer, şehir turu ve 7/24 taksi hizmetleri. En uygun fiyatlarla güvenli yolculuk için bizi tercih edin.',
  keywords: [
    'taksi',
    'beşikdüzü taksi',
    'beşikdüzü',
    'taxi',
    'beşikdüzü taxi',
    'vip taksi',
    'transfer hizmeti',
    'şehir turu',
    'havalimanı transfer',
    'trabzon taksi',
    '7/24 taksi',
    'güvenli taksi',
    'ekonomik taksi'
  ],
  authors: [{ name: 'Mehmet Ali Taş' }],
  creator: 'Mehmet Ali Taş',
  publisher: 'Beşikdüzü Taksi',
  metadataBase: new URL('https://besikduzutaksi.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Beşikdüzü Taksi - 7/24 Güvenli ve Konforlu Ulaşım',
    description: 'Beşikdüzü\'nün güvenilir taksi hizmeti. VIP transfer, şehir turu ve 7/24 taksi hizmetleri. En uygun fiyatlarla güvenli yolculuk için bizi tercih edin.',
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
        <meta name="geo.placename" content="Beşikdüzü" />
        <meta name="geo.position" content="41.0533;39.2316" />
        <meta name="ICBM" content="41.0533, 39.2316" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
} 