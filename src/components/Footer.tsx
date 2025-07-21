/* eslint-disable react-hooks/exhaustive-deps */
// ✅ Scroll-triggered footer animation using GSAP

"use client";

import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faFacebook,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";

gsap.registerPlugin(ScrollTrigger);

type FooterProps = {
  setFooterVisible: (visible: boolean) => void;
};

const Footer = ({ setFooterVisible }: FooterProps) => {
  const footerRef = useRef(null);

  useEffect(() => {
    const section = document.getElementById("video-section");
    if (!section || !footerRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        footerRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: section,
            start: "top center",
            toggleActions: "play none none reverse",
            onToggle: (self) => setFooterVisible(self.isActive),
          },
        }
      );
    }, [footerRef]);

    return () => ctx.revert();
  }, []);

  return (
    <motion.footer
      ref={footerRef}
      className="sticky bottom-0 w-full bg-black text-white px-6 py-10 z-0"
      style={{ opacity: 0 }}
    >
      <div className="max-w-4xl mx-auto flex flex-col items-center gap-4">
        <p className="text-sm sm:text-lg font-semibold text-center">
          Aro Cafe — The first ever Matcha Cafe in MG Marg, Gangtok. Experience the taste of Japan in Sikkim!
        </p>
        <div className="flex items-center gap-2 text-blue-200">
          <FontAwesomeIcon icon={faMapMarkerAlt} className="text-xl" />
          <span>MG Marg, Gangtok, Sikkim</span>
        </div>
        <div className="flex gap-6 mt-2">
          <a href="https://www.instagram.com/_aro.cafe_/?hl=en" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <FontAwesomeIcon icon={faInstagram} className="text-2xl hover:text-pink-400 transition" />
          </a>
          <a href="https://www.facebook.com/reel/1098216575471727/" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
            <FontAwesomeIcon icon={faFacebook} className="text-2xl hover:text-blue-400 transition" />
          </a>
          <a href="https://wa.me/" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
            <FontAwesomeIcon icon={faWhatsapp} className="text-2xl hover:text-green-400 transition" />
          </a>
        </div>
        <p className="text-xs text-neutral-400 mt-4">&copy; {new Date().getFullYear()} Aro Cafe. All rights reserved.</p>
      </div>
    </motion.footer>
  );
}

export default Footer;
