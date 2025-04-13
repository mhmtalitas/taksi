import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Script from 'next/script';

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
    
    // Beşikdüzü Organize Sanayi
    'beşikdüzü organize sanayi bölgesi taksi',
    'beşikdüzü osb taksi',
    'beşikdüzü organize sanayi ulaşım',
    'organize sanayi servis taksi',
    'beşikdüzü sanayi bölgesine taksi',
    'beşikdüzü fabrika taksi servisi',
    'organize sanayi personel servisi',
    'beşikdüzü osb işçi servisi',
    'beşikdüzü sanayi bölgesi transfer',
    
    // Beşikdüzü Cezaevi
    'beşikdüzü cezaevi taksi',
    'beşikdüzü cezaevine taksi',
    'beşikdüzü cezaevi ziyaretçi taksi',
    'beşikdüzü kapalı cezaevi taksi',
    'cezaevi ziyaret transfer',
    'beşikdüzü cezaevi ulaşım',
    'trabzon beşikdüzü cezaevi taksi',
    'beşikdüzünden cezaevine ulaşım',
    
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
    icon: '/besikduzutaksi.png',
    shortcut: '/besikduzutaksi.png',
    apple: '/besikduzutaksi.png',
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
        <link rel="icon" href="/besikduzutaksi.png" type="image/png" />
        <meta name="geo.region" content="TR-61" />
        <meta name="geo.placename" content="Beşikdüzü, Trabzon" />
        <meta name="geo.position" content="41.0533;39.2316" />
        <meta name="ICBM" content="41.0533, 39.2316" />
        
        {/* Google için JSON-LD yapısal verisi */}
        <Script
          id="schema-org-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'Beşikdüzü Taksi',
              alternateName: 'Beşikdüzü Taksi Hizmetleri',
              url: 'https://besikduzutaksi.com',
              logo: 'https://besikduzutaksi.com/besikduzutaksi.png',
              description: 'Beşikdüzü ve Trabzon bölgesinde 7/24 güvenilir taksi hizmeti.',
              areaServed: {
                '@type': 'GeoCircle',
                geoMidpoint: {
                  '@type': 'GeoCoordinates',
                  latitude: '41.0533',
                  longitude: '39.2316'
                },
                geoRadius: '50000'
              },
              sameAs: [
                'https://besikduzutaksi.com'
              ],
              contactPoint: {
                '@type': 'ContactPoint',
                telephone: '+90-555-XXX-XXXX',
                contactType: 'customer service',
                areaServed: 'TR',
                availableLanguage: 'Turkish'
              }
            })
          }}
        />
        
        {/* WebSite yapısal verisi */}
        <Script
          id="website-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'WebSite',
              name: 'Beşikdüzü Taksi',
              url: 'https://besikduzutaksi.com',
              potentialAction: {
                '@type': 'SearchAction',
                target: {
                  '@type': 'EntryPoint',
                  urlTemplate: 'https://besikduzutaksi.com/search?q={search_term_string}'
                },
                'query-input': 'required name=search_term_string'
              }
            })
          }}
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
} 