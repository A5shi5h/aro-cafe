"use client";

import React, { useRef, useEffect } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MaskContainer } from "./ui/svg-mask-effect";

gsap.registerPlugin(ScrollTrigger);

export default function AboutSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current || !bgRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        bgRef.current,
        { opacity: 0 },
        {
          opacity: 1,
          duration: .1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top",
            toggleActions: "play none none reverse",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={sectionRef}
      className="relative flex min-h-[30rem] sm:min-h-[30rem] md:min-h-screen h-auto w-full items-center justify-center overflow-hidden px-2 sm:px-0 bg-white z-10"
      style={{ fontFamily: 'Arial-BoldMT, Arial, sans-serif' }}
    >
      {/* Fading background image */}
      <div
        ref={bgRef}
        className="absolute inset-0 z-0 opacity-0 transition-opacity duration-1000"
      >
        <Image
          src="/images/matcha3.jpg"
          alt="Test Background"
          fill
          className="object-cover object-center"
          priority
        />
      </div>

      {/* Foreground content */}
      <div className="relative z-10 w-full">
        <MaskContainer
          revealText={
            <p className="text-center text-lg sm:text-xl md:text-2xl lg:text-3xl md:max-w-6xl font-semibold text-slate-800 leading-7 sm:leading-[2.6rem]" style={{ fontFamily: 'Arial-BoldMT, Arial, sans-serif' }}>
              <span className="bg-gradient-to-r from-blue-400 to-blue-700 bg-clip-text text-transparent text-3xl sm:text-5xl md:text-6xl font-extrabold leading-[3.7rem] sm:leading-[5rem] md:leading-[10rem]" style={{ fontFamily: 'Arial-BoldMT, Arial, sans-serif' }}>Welcome to Aro Cafe</span><br/>
              The first-ever Matcha cafe in Sikkim. Nestled in the heart of MG Marg, Gangtok, Aro Cafe brings a refreshing twist to the café culture of Sikkim with its unique offering of authentic Japanese matcha-based drinks and desserts. Inspired by the calming essence of Japanese tea rituals and the serene beauty of the Himalayas, we’ve created a space where tradition meets taste.
            </p>
          }
          className="min-h-[20rem] sm:min-h-[28rem] md:h-[40rem] rounded-md text-white text-base sm:text-xl md:text-2xl lg:text-4xl px-2 sm:px-8 py-4"
        >
          <span className="block mb-2">At Aro Cafe, we believe in quality, creativity, and experience. Every cup of matcha is crafted with precision using premium-grade green tea powder, delivering both health benefits and a rich, earthy flavor unlike anything else in town.</span>
          <span className="text-blue-500 block mb-2">Whether you&apos;re a matcha enthusiast or new to the green magic,</span> 
          <span className="block mb-2">we invite you to step in, slow down, and sip something truly special.</span>
          <span className="text-blue-500 block">Aro Cafe — where Sikkim meets Japan, one cup at a time.</span>
        </MaskContainer>
      </div>
    </div>
  );
}
