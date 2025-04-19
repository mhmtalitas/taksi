'use client';

import { useParams } from 'next/navigation';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { PhoneIcon, MapPinIcon, LanguageIcon, ClockIcon, UserIcon, TruckIcon, CalendarIcon, ArrowLeftIcon } from '@heroicons/react/24/solid';
import { motion } from 'framer-motion';

// Taksici verilerini import edelim
import { taxis } from '../../components/TaxiData';

// Taksici verisi için arayüz
interface DriverInfo {
  fullName?: string;
  age?: number;
  experience?: string;
  licensePlate?: string;
  carModel?: string;
  carYear?: string;
  languages?: string[];
  serviceAreas?: string[];
  photo?: string;
  about?: string;
}

interface TaxiInfo {
  id: number;
  name: string;
  description: string;
  rating: number;
  isPremium: boolean;
  features: string[];
  phone: string;
  image: string;
  slug?: string;
  driverInfo?: DriverInfo;
}

export default function TaksiciDetay() {
  const params = useParams();
  const slug = params.slug;
  
  const [taksici, setTaksici] = useState<TaxiInfo | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Premium ve standart taksileri birleştir
    const allTaxis = [...taxis.premium, ...taxis.standard] as TaxiInfo[];
    
    // Slug'a göre taksiyi bul
    const foundTaxi = allTaxis.find(taxi => taxi.slug === slug || `taksici-${taxi.id}` === slug);
    
    if (foundTaxi) {
      setTaksici(foundTaxi);
    }
    
    setLoading(false);
  }, [slug]);

  if (loading) {
    return (
      <div className="min-h-screen bg-yellow-400 flex flex-col">
        <Header />
        <main className="container mx-auto px-4 py-12 flex-grow flex items-center justify-center">
          <div className="text-black font-bold text-2xl">Yükleniyor...</div>
        </main>
        <Footer />
      </div>
    );
  }

  if (!taksici) {
    return (
      <div className="min-h-screen bg-yellow-400 flex flex-col">
        <Header />
        <main className="container mx-auto px-4 py-12 flex-grow">
          <div className="bg-white rounded-xl p-8 shadow-lg max-w-4xl mx-auto">
            <h1 className="text-3xl font-bold text-black mb-4 text-center">Taksici Bulunamadı</h1>
            <p className="text-gray-600 text-center mb-6">
              Aradığınız taksici bilgisi sistemimizde bulunamadı.
            </p>
            <div className="flex justify-center">
              <Link href="/" className="bg-yellow-400 text-black px-6 py-3 rounded-lg font-bold hover:bg-yellow-500 transition-all inline-flex items-center gap-2">
                <ArrowLeftIcon className="h-5 w-5" />
                Ana Sayfaya Dön
              </Link>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-yellow-400 flex flex-col">
      <Header />
      
      <main className="container mx-auto px-4 py-12 flex-grow">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-xl overflow-hidden shadow-xl max-w-4xl mx-auto"
        >
          {/* Üst Bilgi Alanı */}
          <div className="relative h-64 bg-black">
            <Image 
              src={taksici.image}
              alt={taksici.name}
              fill
              className="object-cover opacity-50"
            />
            
            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
            
            <div className="absolute bottom-0 left-0 p-8 w-full">
              <div className="flex items-end gap-6">
                <div className="relative h-32 w-32 rounded-full overflow-hidden border-4 border-yellow-400">
                  <Image 
                    src={taksici.driverInfo?.photo || taksici.image}
                    alt={taksici.driverInfo?.fullName || taksici.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h1 className="text-3xl font-bold text-white">
                    {taksici.driverInfo?.fullName || taksici.name}
                  </h1>
                  <div className="flex items-center gap-2 text-yellow-400 mt-2">
                    {taksici.isPremium && (
                      <span className="bg-yellow-400 text-black px-3 py-1 rounded-full text-sm font-bold">
                        Premium
                      </span>
                    )}
                    <div className="text-gray-300 text-sm">
                      {taksici.description}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* İçerik Alanı */}
          <div className="p-8">
            {/* Geri Dön Butonu */}
            <div className="mb-8">
              <Link href="/" className="inline-flex items-center text-gray-600 hover:text-black transition-colors gap-1">
                <ArrowLeftIcon className="h-4 w-4" />
                <span>Ana Sayfaya Dön</span>
              </Link>
            </div>
            
            {/* Bilgi Kartları */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {/* Kişisel Bilgiler */}
              <div className="bg-gray-50 p-6 rounded-lg shadow-md">
                <h2 className="text-xl font-bold text-gray-800 mb-4">Kişisel Bilgiler</h2>
                
                <div className="space-y-3">
                  {taksici.driverInfo?.fullName && (
                    <div className="flex items-center gap-3">
                      <UserIcon className="h-5 w-5 text-yellow-500" />
                      <div>
                        <div className="text-sm text-gray-500">İsim</div>
                        <div className="font-medium text-gray-800">{taksici.driverInfo.fullName}</div>
                      </div>
                    </div>
                  )}
                  
                  {taksici.driverInfo?.experience && (
                    <div className="flex items-center gap-3">
                      <ClockIcon className="h-5 w-5 text-yellow-500" />
                      <div>
                        <div className="text-sm text-gray-500">Deneyim</div>
                        <div className="font-medium text-gray-800">{taksici.driverInfo.experience}</div>
                      </div>
                    </div>
                  )}
                  
                  {taksici.driverInfo?.languages && (
                    <div className="flex items-center gap-3">
                      <LanguageIcon className="h-5 w-5 text-yellow-500" />
                      <div>
                        <div className="text-sm text-gray-500">Konuştuğu Diller</div>
                        <div className="font-medium text-gray-800">{taksici.driverInfo.languages.join(', ')}</div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
              
              {/* Araç Bilgileri */}
              <div className="bg-gray-50 p-6 rounded-lg shadow-md">
                <h2 className="text-xl font-bold text-gray-800 mb-4">Araç Bilgileri</h2>
                
                <div className="space-y-3">
                  {taksici.driverInfo?.carModel && (
                    <div className="flex items-center gap-3">
                      <TruckIcon className="h-5 w-5 text-yellow-500" />
                      <div>
                        <div className="text-sm text-gray-500">Araç Modeli</div>
                        <div className="font-medium text-gray-800">{taksici.driverInfo.carModel}</div>
                      </div>
                    </div>
                  )}
                  
                  {taksici.driverInfo?.licensePlate && (
                    <div className="flex items-center gap-3">
                      <div className="h-5 w-5 flex items-center justify-center text-yellow-500 font-bold">
                        #
                      </div>
                      <div>
                        <div className="text-sm text-gray-500">Plaka</div>
                        <div className="font-medium text-gray-800">{taksici.driverInfo.licensePlate}</div>
                      </div>
                    </div>
                  )}
                  
                  {taksici.driverInfo?.carYear && (
                    <div className="flex items-center gap-3">
                      <CalendarIcon className="h-5 w-5 text-yellow-500" />
                      <div>
                        <div className="text-sm text-gray-500">Model Yılı</div>
                        <div className="font-medium text-gray-800">{taksici.driverInfo.carYear}</div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
            
            {/* Hizmet Bölgeleri */}
            {taksici.driverInfo?.serviceAreas && (
              <div className="mb-8">
                <h2 className="text-xl font-bold text-gray-800 mb-4">Hizmet Bölgeleri</h2>
                <div className="bg-gray-50 p-6 rounded-lg shadow-md">
                  <div className="flex flex-wrap gap-2">
                    {taksici.driverInfo.serviceAreas.map((area: string, index: number) => (
                      <div key={index} className="flex items-center bg-white px-3 py-2 rounded-full shadow-sm">
                        <MapPinIcon className="h-4 w-4 text-yellow-500 mr-1" />
                        <span className="text-gray-700">{area}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
            
            {/* Hakkında */}
            {taksici.driverInfo?.about && (
              <div className="mb-8">
                <h2 className="text-xl font-bold text-gray-800 mb-4">Hakkında</h2>
                <div className="bg-gray-50 p-6 rounded-lg shadow-md">
                  <p className="text-gray-700 leading-relaxed">
                    {taksici.driverInfo.about}
                  </p>
                </div>
              </div>
            )}
            
            {/* İletişim Alanı */}
            <div className="mt-8">
              <a 
                href={`tel:${taksici.phone}`}
                className="w-full bg-yellow-400 text-black py-4 px-6 rounded-lg font-bold flex items-center justify-center gap-2 hover:bg-yellow-500 transition-all shadow-lg"
              >
                <PhoneIcon className="h-5 w-5" />
                <span>Hemen Ara</span>
              </a>
            </div>
          </div>
        </motion.div>
      </main>
      
      <Footer />
    </div>
  );
} 