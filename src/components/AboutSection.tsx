"use client";
import { MaskContainer } from "./ui/svg-mask-effect";

export default function AboutSection() {
  return (
    <div className="flex min-h-[24rem] h-auto w-full items-center justify-center overflow-hidden px-2 sm:px-0">
      <MaskContainer
        revealText={
          <p className="mx-auto max-w-xs sm:max-w-7xl text-center text-2xl sm:text-4xl font-bold text-slate-800 dark:text-white">
            Welcome to Aro Cafe — the first-ever Matcha cafe in Sikkim.
            <br />
            Nestled in the heart of MG Marg, Gangtok, Aro Cafe brings a refreshing twist to the café culture of Sikkim with its unique offering of authentic Japanese matcha-based drinks and desserts. Inspired by the calming essence of Japanese tea rituals and the serene beauty of the Himalayas, we’ve created a space where tradition meets taste.
          </p>
        }
        className="min-h-[24rem] sm:h-[40rem] rounded-md border text-white dark:text-black"
      >
       At Aro Cafe, we believe in quality, creativity, and experience. Every cup of matcha is crafted with precision using premium-grade green tea powder, delivering both health benefits and a rich, earthy flavor unlike anything else in town. 
        <span className="text-blue-500">Whether you<span>&apos;</span>re a matcha enthusiast or new to the green magic,</span> we invite you to step in, slow down, and sip something truly special.
        <span className="text-blue-500">Aro Cafe — where Sikkim meets Japan, one cup at a time.</span>.
      </MaskContainer>
    </div>
  );
}
