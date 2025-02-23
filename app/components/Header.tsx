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
            className="text-yellow-400 text-2xl font-bold cursor-pointer flex items-center"
          >
            <span className="text-2xl mr-2">🚕</span>
            Beşikdüzü Taksi
          </motion.div>
          
          <div className="flex items-center gap-8">
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="text-yellow-400 flex items-center cursor-pointer"
            >
              <PhoneIcon className="h-5 w-5 mr-2" />
              <span>0850 123 45 67</span>
            </motion.div>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-yellow-400 text-black px-6 py-2 rounded-lg font-bold hover:bg-yellow-500 transition-all"
            >
              Taksi Çağır
            </motion.button>
          </div>
        </div>
      </div>
    </motion.header>
  );
} 