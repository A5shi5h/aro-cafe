'use client'

import React, { useState } from 'react'
import HeroSection from '../components/HeroSection'
import AboutSection from '../components/AboutSection'
import MenuSection from '../components/MenuSection'
import GallerySection from '../components/GallerySection'
import HeroArea from '../components/HeroArea'
import ContactSection from '@/components/ContactSection'
import VideoSection from '../components/VideoSection'
import LenisProvider from '../components/LenisProvider'
import Footer from '@/components/Footer'

const Page = () => {
  const [footerVisible, setFooterVisible] = useState(false);
  return (
    <LenisProvider>
        <HeroSection footerVisible={footerVisible} />
        <AboutSection />
        <HeroArea />
        <MenuSection />
        <GallerySection />
        <ContactSection />
        <VideoSection />
        <Footer setFooterVisible={setFooterVisible} />
    </LenisProvider>
  )
}
export default Page
