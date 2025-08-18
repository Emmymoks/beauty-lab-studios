import React, { useState } from "react"

const IMAGES = [
  { src: "/2692.jpg" },
  { src: "/5798.jpg" },
  { src: "/13259.jpg" },
  { src: "/2150639515.jpg" },
  { src: "/IMG_5772.jpg" },
  { src: "/9293.jpg" },
  { src: "/7822.jpg" },
  { src: "/13259.jpg" },
  { src: "/2149722043.jpg" },
  { src: "/2150637526.jpg" },
  { src: "/IMG_5773.jpg" },
  { src: "/IMG_5758.jpg" },
  { src: "/IMG_5761.jpg" },
  { src: "/2147990710.jpg" },
  { src: "/6146.jpg" },
  { src: "/2686.jpg" },
  { src: "/IMG_5771.png" },
  { src: "/4206.jpg" },
  { src: "/9293.jpg" },
  { src: "/9143.jpg" },
]

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null)

  return (
    <section className="max-w-6xl mx-auto px-6 py-12">
      <h2 className="font-serif text-3xl mb-6 text-center">Gallery</h2>

      {/* Responsive Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {IMAGES.map((it, i) => (
          <figure
            key={i}
            className="rounded overflow-hidden shadow-md hover:scale-105 transition-transform duration-300 cursor-pointer"
            onClick={() => setSelectedImage(it.src)}
          >
            <img
              src={it.src}
              alt={`Gallery image ${i + 1}`}
              loading="lazy"
              className="w-full h-64 object-cover"
            />
          </figure>
        ))}
      </div>

      {/* Fullscreen Image Viewer */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/90 backdrop-blur flex items-center justify-center z-50 transition-opacity duration-500">
          <button
            className="absolute top-6 right-6 text-white text-4xl font-bold hover:scale-110 transition-transform"
            onClick={() => setSelectedImage(null)}
            aria-label="Close image viewer"
          >
            ✕
          </button>
          <img
            src={selectedImage}
            alt="Selected gallery item"
            className="max-h-[90%] max-w-[90%] rounded-lg shadow-lg transform scale-95 animate-fadeIn"
          />
        </div>
      )}
    </section>
  )
}
