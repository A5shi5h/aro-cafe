"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ContactSection from "./ContactSection";
import Footer from "./Footer";

gsap.registerPlugin(ScrollTrigger);

const ContactWithFooterReveal = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const footerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current || !footerRef.current) return;
    const footer = footerRef.current;
    gsap.set(footer, { y: 100 });
    ScrollTrigger.create({
      trigger: containerRef.current,
      start: "top top",
      end: "bottom bottom",
      scrub: true,
      markers:true,
      onUpdate: (self) => {
        gsap.to(footer, { y: 100 - self.progress * 100, overwrite: 'auto', duration: 0.1 });
      },
    });
    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return (
    <div ref={containerRef} className="relative">
      <div className="relative z-10">
        <ContactSection />
      </div>
      <div ref={footerRef} className="absolute left-0 bottom-0 w-full z-0 pointer-events-auto">
        <Footer />
      </div>
    </div>
  );
};

export default ContactWithFooterReveal; 