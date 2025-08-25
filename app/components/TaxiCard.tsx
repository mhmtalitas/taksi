'use client';

import { PhoneIcon, StarIcon, InformationCircleIcon } from '@heroicons/react/24/solid';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

interface TaxiCardProps {
  taxi: {
    id: number;
    name: string;
    description: string;
    rating: number;
    isPremium: boolean;
    features: string[];
    phone: string;
    image: string;
    slug?: string; // Taksici sayfası için slug
  };
}

export default function TaxiCard({ taxi }: TaxiCardProps) {
  // Telefon numarasını maskele
  const formatPhone = (phone: string) => {
    // Tüm telefon numaraları zaten +90 555 XXX XX XX formatında
    return phone;
  };

  // Slug oluştur (eğer yoksa)
  const taksiciSlug = taxi.slug || `taksici-${taxi.id}`;

  return (
    <motion.div
      whileHover={{ scale: 1.02, boxShadow: taxi.isPremium ? '0 25px 30px -5px rgba(234, 179, 8, 0.3)' : '0 10px 15px -3px rgba(0, 0, 0, 0.1)' }}
      className={`bg-white rounded-xl overflow-hidden ${
        taxi.isPremium 
          ? 'border-2 border-yellow-400 shadow-[0_10px_20px_-5px_rgba(234,179,8,0.3)]' 
          : 'shadow-lg'
      }`}
    >
      <div className={`relative h-56 group`}>
        <Image 
          src={taxi.image}
          alt={taxi.name}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
        {taxi.isPremium && (
          <motion.div 
            initial={{ x: 100 }}
            animate={{ x: 0 }}
            className="absolute top-4 right-4 bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 text-black px-4 py-2 rounded-full text-sm font-bold shadow-lg z-10"
          >
            Premium
          </motion.div>
        )}
        <div className={`absolute inset-0 bg-gradient-to-t ${
          taxi.isPremium 
            ? 'from-black/60 via-black/30' 
            : 'from-black/50'
        } to-transparent z-[1]`} />

        {/* Reklam Alanı Overlay */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
          <div className="bg-black/75 px-6 py-4 rounded-lg transform -rotate-12 shadow-xl border border-yellow-400/50">
            <p className="text-yellow-400 font-semibold text-sm md:text-base whitespace-nowrap">
              Bu Alana Reklam Verebilirsiniz
            </p>
          </div>
        </div>

        {/* Reklam İletişim Butonu */}
        <motion.a
          href="tel:+905553335555"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="absolute bottom-4 left-4 bg-yellow-400 text-black px-3 py-1.5 rounded-lg text-sm font-semibold hover:bg-yellow-500 transition-all z-20 opacity-0 group-hover:opacity-100 shadow-lg flex items-center gap-2"
        >
          <PhoneIcon className="h-4 w-4" />
          <span>Reklam Ver</span>
        </motion.a>
      </div>

      <div className={`p-8 ${
        taxi.isPremium 
          ? 'bg-gradient-to-b from-yellow-50 via-yellow-50/50 to-white' 
          : ''
      }`}>
        <h3 className={`text-2xl font-bold mb-2 ${
          taxi.isPremium 
            ? 'bg-gradient-to-r from-yellow-600 to-yellow-800 text-transparent bg-clip-text' 
            : 'text-black'
        }`}>
          {taxi.name}
        </h3>
        
        <p className="text-gray-600 text-sm mb-4">
          {taxi.description}
        </p>

        <div className="flex items-center mb-4">
          {[...Array(5)].map((_, index) => (
            <StarIcon 
              key={index} 
              className={`h-5 w-5 ${
                index < Math.floor(taxi.rating) 
                  ? taxi.isPremium ? 'text-yellow-500' : 'text-yellow-400'
                  : 'text-gray-300'
              }`} 
            />
          ))}
          <span className="ml-2 text-sm font-semibold text-gray-700">
            {taxi.rating} / 5.0
          </span>
        </div>

        <div className="space-y-2 mb-6">
          {taxi.features.map((feature, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className={`flex items-center text-sm ${
                taxi.isPremium ? 'text-gray-700' : 'text-gray-600'
              }`}
            >
              <span className={`w-2 h-2 ${
                taxi.isPremium 
                  ? 'bg-gradient-to-r from-yellow-400 to-yellow-600' 
                  : 'bg-gray-400'
              } rounded-full mr-3`} />
              {feature}
            </motion.div>
          ))}
        </div>

        <div className="flex flex-col gap-2 mt-6 mb-4">
          {/* Detay Butonu */}
          <Link href={`/taksici/${taksiciSlug}`} legacyBehavior>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`flex items-center justify-center gap-2 w-full py-4 rounded-lg font-bold transition-all ${
                taxi.isPremium 
                  ? 'bg-gradient-to-r from-gray-100 to-gray-300 text-gray-800 hover:from-gray-200 hover:to-gray-400 shadow-lg' 
                  : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
              }`}
            >
              <InformationCircleIcon className="h-5 w-5" />
              <span>Detaylar</span>
            </motion.a>
          </Link>

          {/* Telefon Butonu */}
          <motion.a
            href={`tel:${formatPhone(taxi.phone)}`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`flex items-center justify-center gap-2 w-full py-4 rounded-lg font-bold transition-all ${
              taxi.isPremium 
                ? 'bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 text-black hover:from-yellow-500 hover:via-yellow-600 hover:to-yellow-700 shadow-lg' 
                : 'bg-yellow-400 text-black hover:bg-yellow-500'
            }`}
          >
            <PhoneIcon className="h-5 w-5" />
            <span>{formatPhone(taxi.phone)}</span>
          </motion.a>
        </div>
      </div>
    </motion.div>
  );
} 