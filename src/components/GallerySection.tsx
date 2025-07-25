"use client";

import React, { useRef, useEffect } from "react";
import {
  DraggableCardBody,
  DraggableCardContainer,
} from "@/components/ui/draggable-card";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import IgStories from "./IgStories";

gsap.registerPlugin(ScrollTrigger);

export default function GallerySection() {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const triggerRef = useRef(null);

  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    const pin = gsap.fromTo(sectionRef.current , {
      translate: 0
    } , {
      translateX: "-100vw",
      ease : "none",
      duration: 1,
      scrollTrigger: {
        trigger: triggerRef.current,
        start :"top top",
        end: "2000 top",
        scrub: 0.6,
        pin: true
      } 
    })

    return () => {
      pin.kill()
    }
  } , [])

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
            trigger: headingRef.current,
            start: "top 50%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  const items = [
    {
      title: "The Team",
      image:"/images/img1.jpg",
      className: "absolute top-10 left-[20%] rotate-[-5deg]",
    },
    {
      title: "Hangout Spot",
      image:
        "/images/img2.jpg",
      className: "absolute top-40 left-[25%] rotate-[-7deg]",
    },
    {
      title: "Great Service",
      image:
        "/images/img3.jpg",
      className: "absolute top-5 left-[40%] rotate-[8deg]",
    },
    {
      title: "Good Vibes",
      image:
        "/images/img4.jpg",
      className: "absolute top-32 left-[55%] rotate-[10deg]",
    },
    {
      title: "Coffee",
      image:
        "/images/img5.jpg",
      className: "absolute top-20 right-[35%] rotate-[2deg]",
    },
    {
      title: "Great Ambiance",
      image:
        "/images/img6.jpg",
      className: "absolute top-24 left-[45%] rotate-[-7deg]",
    },
    {
      title: "Good Food",
      image:
        "/images/img7.jpg",
      className: "absolute top-8 left-[30%] rotate-[4deg]",
    },
  ];
  return (
    <>
      <section ref={triggerRef} className="relative z-10 w-full bg-white shadow-none border-none">
       <div className="overflow-hidden">
       <h1
          ref={headingRef}
          className="text-center text-4xl sm:text-5xl font-bold pb-18 text-black pt-10 opacity-0"
          style={{ fontFamily: 'Arial-BoldMT, Arial, sans-serif' }}
        >
          Our Gallery
        </h1>
        <div ref={sectionRef} className="h-[100vh] w-[200vw] flex flex-row relative hide-horizontal-scrollbar">
            <DraggableCardContainer className="relative flex min-h-[75vh] xl:min-h-screen w-full items-center justify-center overflow-clip">
              <p className="absolute top-1/2 mx-auto max-w-sm -translate-y-3/4 text-center text-2xl font-black text-neutral-400 md:text-4xl">
                Our Gallery is full of Memories
              </p>
              {items.map((item , index) => (
                <DraggableCardBody key={item.title + index} className={item.className}>
                  <Image
                    src={item.image}
                    height={100}
                    width={100}
                    alt={item.title}
                    className="pointer-events-none relative z-10 h-80 w-80 object-cover"
                  />
                  <h3 className="mt-4 text-center text-2xl font-bold text-neutral-700">
                    {item.title}
                  </h3>
                </DraggableCardBody>
              ))}
            </DraggableCardContainer>
            <IgStories />
          </div>
       </div>
      </section>
    </>
  );
}
