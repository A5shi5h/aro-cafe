"use client";

import Carousel from "./ui/carousel";


export default function IgStories() {
  const slideData = [
    {
      title: "Good",
      src: "/images/ig1.png",
    },
    {
      title: "Vibes",
      src: "/images/ig2.png",
    },
    {
      title: "Matcha",
      src: "/images/ig3.png",
    },
    {
      title: "Cafe & Bar",
      src: "/images/ig4.png",
    },
  ];
  return (
    <>
     <div className="relative overflow-hidden w-full min-h-screen pt-20 z-10 bg-white">
      <Carousel slides={slideData} />
    </div>
    </>
  );
}
