"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Footer from "./Footer";

const FooterReveal = () => {
  const triggerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: triggerRef,
    offset: ["end end", "end 80%"] // Start animating when contact section ends, finish after scrolling 20% past
  });

  // Animate from hidden to visible as you scroll past the end of contact section
  const y = useTransform(scrollYProgress, [0, 1], [60, 0]);

  return (
    <div ref={triggerRef}>
      <motion.div style={{ y }}>
        <Footer />
      </motion.div>
    </div>
  );
};

export default FooterReveal; 