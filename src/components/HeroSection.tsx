import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

const HeroSection = () => (
  <section className="sticky top-0 left-0 w-full h-screen z-0 flex items-center justify-center px-2 sm:px-4 overflow-hidden">
    {/* Background Image on Left */}
    <motion.div
      initial={{ y: '-100%' }}
      animate={{ y: 0 }}
      transition={{ duration: 1, ease: 'easeOut' }}
      className="absolute left-0 top-0 h-full w-1/2 z-0"
    >
      <Image src="/images/macha1.jpg" alt="Matcha Left" fill className="object-cover object-center" priority />
      <div className="absolute inset-0 bg-black opacity-60" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent" />
    </motion.div>
    {/* Background Image on Right */}
    <motion.div
      initial={{ y: '100%' }}
      animate={{ y: 0 }}
      transition={{ duration: 1, ease: 'easeOut' }}
      className="absolute right-0 top-0 h-full w-1/2 z-0"
    >
      <Image src="/images/macha.jpg" alt="Matcha Right" fill className="object-cover object-center" priority />
      <div className="absolute inset-0 bg-black opacity-60" />
      <div className="absolute inset-0 bg-gradient-to-l from-black/40 to-transparent" />
    </motion.div>
    {/* Content */}
    <div className="relative z-10 flex flex-col items-center justify-center w-full h-full text-left sm:text-left">
      <motion.h1
        className="text-center font-extrabold text-4xl sm:text-6xl md:text-8xl mb-4 drop-shadow-lg text-white max-w-xs sm:max-w-2xl"
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Aro Cafe
      </motion.h1>
      <motion.p
      className="text-center text-base sm:text-lg md:text-xl mb-8 max-w-xs sm:max-w-xl text-white"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.6, duration: 1 }}
      >
        Bar And Vibes
      </motion.p>
      <motion.h2
        className="text-center text-lg sm:text-3xl md:text-4xl font-medium mb-2 text-white max-w-xs sm:max-w-xl"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 1 }}
      >
        MG Marg, Gangtok
      </motion.h2>
      <motion.p
        className="text-center text-base sm:text-xl md:text-xl mb-8 max-w-xs sm:max-w-xl text-white"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 1 }}
      >
        The first ever Matcha Cafe in town. Experience the taste of Japan in the heart of Sikkim with our signature matcha drinks and desserts.
      </motion.p>
     <motion.p
      className="text-center text-base sm:text-lg md:text-xl mb-8 max-w-xs sm:max-w-xl text-white"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.6, duration: 1 }}
      >
        Hope to see you all
      </motion.p>
    </div>
  </section>
)

export default HeroSection 