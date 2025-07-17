"use client";
import { MaskContainer } from "./ui/svg-mask-effect";

export default function AboutSection() {
  return (
    <div className="flex min-h-[20rem] sm:min-h-[24rem] h-auto w-full items-center justify-center overflow-hidden px-2 sm:px-0">
      <MaskContainer
        revealText={
          <p className="mx-auto max-w-xs sm:max-w-2xl md:max-w-4xl lg:max-w-7xl text-center text-lg sm:text-2xl md:text-4xl font-semibold text-slate-800 dark:text-white leading-7 sm:leading-[3rem]">
            <span className="bg-gradient-to-r from-blue-400 to-blue-700 bg-clip-text text-transparent text-3xl sm:text-6xl font-extrabold leading-[3rem] sm:leading-[6rem] md:leading-[10rem]">Welcome to Aro Cafe</span><br/>
            The first-ever Matcha cafe in Sikkim. Nestled in the heart of MG Marg, Gangtok, Aro Cafe brings a refreshing twist to the café culture of Sikkim with its unique offering of authentic Japanese matcha-based drinks and desserts. Inspired by the calming essence of Japanese tea rituals and the serene beauty of the Himalayas, we’ve created a space where tradition meets taste.
          </p>
        }
        className="min-h-[20rem] sm:min-h-[24rem] md:h-[40rem] rounded-md border text-white text-base sm:text-xl md:text-2xl lg:text-4xl dark:text-black px-2 sm:px-8 py-4"
      >
        <span className="block mb-2">At Aro Cafe, we believe in quality, creativity, and experience. Every cup of matcha is crafted with precision using premium-grade green tea powder, delivering both health benefits and a rich, earthy flavor unlike anything else in town.</span>
        <span className="text-blue-500 block mb-2">Whether you<span>&apos;</span>re a matcha enthusiast or new to the green magic,</span> 
        <span className="block mb-2">we invite you to step in, slow down, and sip something truly special.</span>
        <span className="text-blue-500 block">Aro Cafe — where Sikkim meets Japan, one cup at a time.</span>
      </MaskContainer>
    </div>
  );
}
