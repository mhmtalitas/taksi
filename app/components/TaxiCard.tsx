'use client';

import { PhoneIcon, StarIcon } from '@heroicons/react/24/solid';
import { motion } from 'framer-motion';
import Image from 'next/image';

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
  };
}

export default function TaxiCard({ taxi }: TaxiCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.02, boxShadow: taxi.isPremium ? '0 20px 25px -5px rgba(234, 179, 8, 0.2)' : '0 10px 15px -3px rgba(0, 0, 0, 0.1)' }}
      className={`bg-white rounded-xl overflow-hidden ${taxi.isPremium ? 'border-2 border-yellow-400' : 'shadow-lg'}`}
    >
      <div className={`relative h-56`}>
        <Image 
          src={taxi.image}
          alt={taxi.name}
          fill
          className="object-cover transition-transform duration-700 hover:scale-105"
        />
        {taxi.isPremium && (
          <motion.div 
            initial={{ x: 100 }}
            animate={{ x: 0 }}
            className="absolute top-4 right-4 bg-gradient-to-r from-yellow-400 to-yellow-500 text-black px-4 py-2 rounded-full text-sm font-bold shadow-lg z-10"
          >
            Premium
          </motion.div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-[1]" />
      </div>

      <div className={`p-8 ${taxi.isPremium ? 'bg-gradient-to-b from-yellow-50 to-white' : ''}`}>
        <h3 className={`text-2xl font-bold mb-2 ${taxi.isPremium ? 'text-yellow-600' : 'text-black'}`}>
          {taxi.name}
        </h3>
        
        <p className="text-gray-600 text-sm mb-4">
          {taxi.description}
        </p>

        <div className="flex items-center mb-4">
          {[...Array(5)].map((_, index) => (
            <StarIcon 
              key={index} 
              className={`h-5 w-5 ${index < Math.floor(taxi.rating) ? 'text-yellow-400' : 'text-gray-300'}`} 
            />
          ))}
          <span className="ml-2 text-sm font-semibold text-gray-700">
            {taxi.rating} / 5.0
          </span>
        </div>

        <div className="space-y-3 mb-6">
          {taxi.features.map((feature, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className={`flex items-center text-sm ${taxi.isPremium ? 'text-gray-700' : 'text-gray-600'}`}
            >
              <span className={`w-2 h-2 ${taxi.isPremium ? 'bg-yellow-400' : 'bg-gray-400'} rounded-full mr-3`} />
              {feature}
            </motion.div>
          ))}
        </div>

        <motion.a
          href={`tel:${taxi.phone}`}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className={`flex items-center justify-center gap-2 w-full py-4 rounded-lg font-bold transition-all
            ${taxi.isPremium 
              ? 'bg-gradient-to-r from-yellow-400 to-yellow-500 text-black hover:from-yellow-500 hover:to-yellow-600 shadow-lg' 
              : 'bg-yellow-400 text-black hover:bg-yellow-500'}`}
        >
          <PhoneIcon className="h-5 w-5" />
          <span>{taxi.phone}</span>
        </motion.a>
      </div>
    </motion.div>
  );
} 