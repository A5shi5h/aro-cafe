"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./page.module.scss";
import Image from "next/image";
import Lenis from "@studio-freight/lenis";
import { motion, useScroll, useTransform, type MotionValue } from "framer-motion";

const images = [
  "/images/menu1.jpg",
  "/images/menu2.jpg",
  "/images/menu3.jpg",
  "/images/menu4.jpg",
  "/images/menu5.jpg",
  "/images/menu6.jpg",
  "/images/menu7.jpg",
  "/images/menu8.jpg",
  "/images/menu9.jpg",
  "/images/menu10.jpg",
  "/images/menu11.jpg",
  "/images/menu1.jpg",
  "/images/menu2.jpg",
  "/images/menu3.jpg",
  "/images/menu4.jpg",
  "/images/menu5.jpg",
  "/images/menu6.jpg",
  "/images/menu7.jpg",
  "/images/menu8.jpg",
  "/images/menu9.jpg",
  "/images/menu10.jpg",
 ];

export default function MenuSection() {
  const gallery = useRef(null);
  const [dimension, setDimension] = useState({ width: 0, height: 0 });

  const { scrollYProgress } = useScroll({
    target: gallery,
    offset: ["start end", "end start"],
  });

  const { height } = dimension;
  const y = useTransform(scrollYProgress, [0, 1], [0, height * 2]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, height * 3.3]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, height * 1.25]);
  const y4 = useTransform(scrollYProgress, [0, 1], [0, height * 3]);

  useEffect(() => {
    const lenis = new Lenis();
    const raf = (time: number) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };
    requestAnimationFrame(raf);

    const resize = () => {
      setDimension({ width: window.innerWidth, height: window.innerHeight });
    };

    window.addEventListener("resize", resize);
    resize();

    return () => {
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <main id="MenuSection" className={styles.main + ' relative z-10 min-h-screen w-full bg-black text-white'}>
      <div className={styles.spacer}></div>
      <div ref={gallery} className={styles.gallery}>
        <div className={styles.galleryWrapper}>
          <Column images={[images[0], images[1], images[2]]} y={y} />
          <Column images={[images[3], images[4], images[5]]} y={y2} />
          <Column images={[images[6], images[7], images[8]]} y={y3} />
          <Column images={[images[9], images[10], images[11]]} y={y4} />
        </div>
      </div>
      <div className={styles.spacer}></div>
    </main>
  );
}

type ColumnProps = {
  images: string[];
  y: MotionValue<number>;
};

const Column = ({ images, y }: ColumnProps) => {
  return (
    <motion.div className={styles.column} style={{ y }}>
      {images.map((src, index) => (
        src ? (
          <div key={index} className="relative aspect-[3/4] w-full rounded-lg overflow-hidden">
            <Image src={src} alt={`Menu image ${index + 1}`} fill className="object-cover" loading="lazy" />
          </div>
        ) : null
      ))}
    </motion.div>
  );
};
