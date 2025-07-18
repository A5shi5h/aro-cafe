"use client";

import React, { useRef, useEffect } from "react";
import { PlaceholdersAndVanishInput } from "./ui/placeholders-and-vanish-input";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ContactSection() {
  const placeholders = [
    "What's the bestseller?",
    "What does Aro mean?",
    "What is Matcha?",
    "Where is the Location?",
  ];

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
            start: "top 50%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
  };
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("submitted");
  };
  return (
    <section ref={sectionRef} className="relative z-10 bg-white dark:bg-slate-900 border-none shadow-none">
      <div className="flex flex-col justify-center items-center px-4 py-18 sm:py-10">
        <h2
          ref={headingRef}
          className="mb-10 sm:mb-20 text-3xl text-center sm:text-5xl dark:text-white text-black opacity-0"
        >
          Ask Us Anything....
        </h2>
        <PlaceholdersAndVanishInput
          placeholders={placeholders}
          onChange={handleChange}
          onSubmit={onSubmit}
        />
        <h2 className="mt-10 sm:mb-20 text-xl text-center sm:text-2xl dark:text-white text-black underline">
          Your Queries are valuable
        </h2>
      </div>
    </section>
  );
}
