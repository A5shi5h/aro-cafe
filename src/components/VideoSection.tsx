import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const VideoSection = () => {
  const sectionRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    if (!sectionRef.current || !textRef.current) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        textRef.current,
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
    <section
      ref={sectionRef}
      id="video-section"
      className="w-full h-screen relative overflow-hidden bg-black z-10"
    >
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src="/videos/coffee.mp4"
        autoPlay
        loop
        muted
        playsInline
      />
      {/* Catchy Text Overlay */}
      <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center z-20 pointer-events-none">
        <h2
          ref={textRef}
          className="text-2xl sm:text-4xl lg:text-6xl font-bold text-white drop-shadow-lg text-center px-4 opacity-0"
          style={{ fontFamily: 'Arial-BoldMT, Arial, sans-serif' }}
        >
          Sip, Savor, Smile.<br />
          Experience Matcha Like Never Before!
        </h2>
      </div>
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/80 bg-opacity-90 pointer-events-none z-10" />
    </section>
  );
};

export default VideoSection; 