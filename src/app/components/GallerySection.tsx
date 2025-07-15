import React from 'react'

const images = [
  '/hero.jpg',
  'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80',
  'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80',
  'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80',
]

const GallerySection = () => (
  <section id="gallery" className="py-20 bg-white text-primary flex flex-col items-center">
    <h2 className="text-4xl font-bold mb-8">Gallery</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl w-full">
      {images.map((src, i) => (
        <img
          key={i}
          src={src}
          alt={`Aro Cafe gallery ${i + 1}`}
          className="rounded-xl shadow-md object-cover w-full h-48"
        />
      ))}
    </div>
  </section>
)

export default GallerySection 