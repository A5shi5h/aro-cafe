'use client'

import React from 'react'
import HeroSection from '../components/HeroSection'
import AboutSection from '../components/AboutSection'
import MenuSection from '../components/MenuSection'
import GallerySection from '../components/GallerySection'
import HeroArea from '../components/HeroArea'
import ContactSection from '@/components/ContactSection'
import VideoSection from '../components/VideoSection'
import LenisProvider from '../components/LenisProvider';
import Footer from '@/components/Footer'

const Page = () => {
  return (
    <LenisProvider>
        <HeroSection />
        <AboutSection />
        <HeroArea />
        <MenuSection />
        <GallerySection />
        <ContactSection />
        <VideoSection />
        <Footer/>
    </LenisProvider>
  )
}

export default Page
