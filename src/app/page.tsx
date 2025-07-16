'use client'

import React from 'react'
import HeroSection from '../components/HeroSection'
import AboutSection from '../components/AboutSection'
import MenuSection from '../components/MenuSection'
import GallerySection from '../components/GallerySection'
import HeroArea from '../components/HeroArea'
import FooterReveal from '../components/FooterReveal'
import ContactSection from '@/components/ContactSection'
import LenisProvider from '../components/LenisProvider';

const Page = () => {
  return (
    <LenisProvider>
      <div className="relative">
        <HeroSection />
        <AboutSection />
        <HeroArea />
        <MenuSection />
        <GallerySection />
        <ContactSection />
        <FooterReveal />
      </div>
    </LenisProvider>
  )
}

export default Page
