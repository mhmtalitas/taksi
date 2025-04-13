'use client';

import { PhoneIcon, MapPinIcon, EnvelopeIcon } from '@heroicons/react/24/solid';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-black text-yellow-400 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Hakkımızda */}
          <div>
            <h3 className="text-xl font-bold mb-4 flex items-center">
              <Image 
                src="/besikduzutaksi.png" 
                width={24} 
                height={24} 
                alt="Beşikdüzü Taksi Logo" 
                className="mr-2"
                unoptimized
                priority
              />
              Beşikdüzü Taksi
            </h3>
            <p className="text-gray-400">
              7/24 güvenli ve konforlu yolculuk için yanınızdayız. Beşikdüzü&apos;nün her noktasına hızlı ulaşım sağlıyoruz.
            </p>
          </div>

          {/* İletişim */}
          <div>
            <h3 className="text-xl font-bold mb-4">İletişim</h3>
            <div className="space-y-3">
              <div className="flex items-center">
                <PhoneIcon className="h-5 w-5 mr-2" />
                <span>+90 555 XXX XXXX</span>
              </div>
              <div className="flex items-center">
                <MapPinIcon className="h-5 w-5 mr-2" />
                <span>Beşikdüzü, Trabzon</span>
              </div>
              <div className="flex items-center">
                <EnvelopeIcon className="h-5 w-5 mr-2" />
                <span>info@besikduzutaksi.com</span>
              </div>
            </div>
          </div>

          {/* Hizmetler */}
          <div>
            <h3 className="text-xl font-bold mb-4">Hizmetlerimiz</h3>
            <ul className="space-y-2">
              <li>• VIP Taksi Hizmeti</li>
              <li>• Havalimanı Transfer</li>
              <li>• Şehir İçi Ulaşım</li>
              <li>• 7/24 Taksi Hizmeti</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-yellow-400/20 mt-8 pt-8 text-center text-sm">
          <p className="text-gray-400">© 2025 Beşikdüzü Taksi. Tüm hakları saklıdır.</p>
          <p className="mt-2 text-gray-500">
            Beşikdüzü Taksi{' '}
            <a 
              href="https://www.mehmetalitas.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-yellow-400 hover:text-yellow-500 transition-colors"
            >
              Mehmet Ali Taş
            </a>
            {' '}tarafından geliştirilmiştir.
          </p>
        </div>
      </div>
    </footer>
  );
} 