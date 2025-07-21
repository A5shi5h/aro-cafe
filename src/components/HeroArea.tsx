"use client";
import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { HeroHighlight, Highlight } from "./ui/hero-highlight";

gsap.registerPlugin(ScrollTrigger);

export default function HeroArea() {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);

  useEffect(() => {
    if (!sectionRef.current || !headingRef.current) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        headingRef.current,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
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
    <section ref={sectionRef} className="relative z-10 bg-white dark:bg-slate-900min-h-[30rem] sm:min-h-[30rem] md:min-h-screen">
      <HeroHighlight>
        <h1
          ref={headingRef}
          className="text-2xl px-4 md:text-4xl lg:text-5xl font-bold text-black dark:text-white max-w-4xl leading-relaxed lg:leading-snug text-center mx-auto opacity-0"
        >
          A Sip of Japan in the Heart of Sikkim. Whisked to Perfection<br/>
          <Highlight className="text-black dark:text-white">
            Only at Aro Cafe.
          </Highlight>
        </h1>
      </HeroHighlight>
    </section>
  );
}
