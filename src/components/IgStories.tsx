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
     <div className="relative overflow-hidden w-full min-h-screen pt-40 md:pt-0 z-10 bg-white">
     <h1
        className="absolute top-[5%] left-[10%] text-7xl font-extrabold [writing-mode:vertical-rl]
        bg-gradient-to-b from-[#feda75] via-[#d62976] to-[#4f5bd5]
        bg-clip-text text-transparent opacity-0 lg:opacity-100"
      >
        IG UPLOADS
      </h1>
      <Carousel slides={slideData} />
    </div>
    </>
  );
}
