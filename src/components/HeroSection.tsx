import React from 'react'
import { motion } from 'framer-motion'

const HeroSection = () => (
  <section className="relative flex flex-col items-center justify-center min-h-screen px-2 sm:px-4 bg-gradient-to-r from-blue-400 to-blue-800">
    {/* Content */}
    <div className="relative z-10 flex flex-col items-center justify-center w-full h-full">
      <motion.h1
        className="text-center font-extrabold text-4xl sm:text-6xl md:text-8xl mb-4 drop-shadow-lg text-white max-w-xs sm:max-w-2xl"
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Aro Cafe
      </motion.h1>
      <motion.h2
        className="text-center text-lg sm:text-2xl md:text-3xl font-medium mb-2 text-blue-200 max-w-xs sm:max-w-xl"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 1 }}
      >
        MG Marg, Gangtok
      </motion.h2>
      <motion.p
        className="text-center text-base sm:text-lg md:text-xl mb-8 max-w-xs sm:max-w-xl text-blue-100"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 1 }}
      >
        The first ever Matcha Cafe in town. Experience the taste of Japan in the heart of Sikkim with our signature matcha drinks and desserts.
      </motion.p>
     <motion.p
      className="text-center text-base sm:text-lg md:text-xl mb-8 max-w-xs sm:max-w-xl text-blue-100"
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