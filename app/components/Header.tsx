'use client';

import { PhoneIcon } from '@heroicons/react/24/solid';
import { motion } from 'framer-motion';

export default function Header() {
  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="bg-black sticky top-0 z-50 shadow-lg"
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="text-yellow-400 text-lg md:text-2xl font-bold cursor-pointer flex items-center"
          >
            <span className="text-lg md:text-2xl mr-2">🚕</span>
            <span>Beşikdüzü Taksi</span>
          </motion.div>
          
          <div className="flex items-center gap-2 sm:gap-8">
            <motion.a
              href="tel:08501234567"
              whileHover={{ scale: 1.05 }}
              className="text-yellow-400 flex items-center cursor-pointer text-sm sm:text-base"
            >
              <PhoneIcon className="h-4 w-4 sm:h-5 sm:w-5 mr-1 sm:mr-2" />
              <span className="hidden sm:inline">0850 123 45 67</span>
              <span className="sm:hidden">Ara</span>
            </motion.a>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-yellow-400 text-black px-3 sm:px-6 py-1.5 sm:py-2 rounded-lg text-sm sm:text-base font-bold hover:bg-yellow-500 transition-all whitespace-nowrap"
            >
              <span>Taksi Çağır</span>
            </motion.button>
          </div>
        </div>
      </div>
    </motion.header>
  );
} 