'use client';

import { PhoneIcon } from '@heroicons/react/24/solid';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Header() {
  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="bg-black sticky top-0 z-50 shadow-lg"
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16 sm:grid sm:grid-cols-3">
          {/* Logo - mobilde solda, tablet/desktop'ta ortada */}
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="text-yellow-400 font-bold cursor-pointer flex items-center sm:justify-center sm:col-start-2"
          >
            <Image 
              src="/besikduzutaksi.png" 
              width={30} 
              height={30} 
              alt="Beşikdüzü Taksi Logo" 
              className="mr-2"
              unoptimized
              priority
            />
            <span className="text-base md:text-lg lg:text-2xl">Beşikdüzü Taksi</span>
          </motion.div>
          
          {/* Sol Kısım - mobilde görünmez */}
          <div className="hidden sm:flex sm:justify-start sm:col-start-1 sm:row-start-1"></div>
          
          {/* Sağ Kısım - Taksi Çağır Butonu */}
          <div className="flex justify-end sm:col-start-3 sm:row-start-1">
            <motion.a
              href="tel:+905553335555"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-yellow-400 text-black px-3 sm:px-4 md:px-6 py-1.5 sm:py-2 rounded-lg text-xs sm:text-sm md:text-base font-bold hover:bg-yellow-500 transition-all whitespace-nowrap flex items-center"
            >
              <PhoneIcon className="h-3.5 w-3.5 sm:h-4 sm:w-4 md:h-5 md:w-5 mr-1 sm:mr-1.5 md:mr-2" />
              <span>Taksi Çağır</span>
            </motion.a>
          </div>
        </div>
      </div>
    </motion.header>
  );
} 