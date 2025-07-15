import React from 'react'
import { motion } from 'framer-motion'

const HeroSection = () => (
  <section className="relative flex flex-col items-center justify-center min-h-screen px-4">
    {/* Background image */}
    <div className="absolute inset-0 w-full h-full">
      <img
        src="/hero.jpg"
        alt="Aro Cafe Hero"
        className="w-full h-full object-cover object-center"
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60" />
    </div>
    {/* Content */}
    <div className="relative z-10 flex flex-col items-center justify-center w-full h-full">
      <motion.h1
        className="text-center font-extrabold text-6xl md:text-8xl mb-4 drop-shadow-lg text-white"
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Aro Cafe
      </motion.h1>
      <motion.h2
        className="text-center text-2xl md:text-3xl font-medium mb-2 text-blue-200"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 1 }}
      >
        MG Marg, Gangtok
      </motion.h2>
      <motion.p
        className="text-center text-lg md:text-xl mb-8 max-w-xl text-blue-100"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 1 }}
      >
        The first ever Matcha Cafe in town. Experience the taste of Japan in the heart of Sikkim with our signature matcha drinks and desserts.
      </motion.p>
      <motion.a
        href="#menu"
        className="px-8 py-3 rounded-full bg-primary text-white font-semibold shadow-lg hover:bg-primary-dark transition-colors text-lg"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
      >
        View Menu
      </motion.a>
    </div>
  </section>
)

export default HeroSection 