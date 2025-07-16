"use client";
import { motion } from "motion/react";
import { HeroHighlight, Highlight } from "./ui/hero-highlight";

export default function HeroArea() {
  return (
    <HeroHighlight>
      <motion.h1
        initial={{
          opacity: 0,
          y: 20,
        }}
        animate={{
          opacity: 1,
          y: [20, -5, 0],
        }}
        transition={{
          duration: 0.5,
          ease: [0.4, 0.0, 0.2, 1],
        }}
        className="text-2xl px-4 md:text-4xl lg:text-5xl font-bold text-black dark:text-white max-w-4xl leading-relaxed lg:leading-snug text-center mx-auto "
      >
        A Sip of Japan in the Heart of Sikkim. Whisked to Perfection<br/>
        <Highlight className="text-black dark:text-white">
        Only at Aro Cafe.
        </Highlight>
      </motion.h1>
    </HeroHighlight>
  );
}
