import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"

const images = [
  "/9293.jpg",
  "/7822.jpg",
  "/13259.jpg",
  "/2150639515.jpg",
  "/2149722043.jpg",
  "/2150637526.jpg",
]

export default function Hero() {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section
      className="relative h-[70vh] md:h-[80vh] flex items-end overflow-hidden"
      aria-label="Hero"
    >
      {/* Background Slideshow */}
      <div className="absolute inset-0">
        {images.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Bridal look ${index + 1}`}
            loading="eager"
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
              index === current ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 py-12 text-center text-white">
        <h1 className="font-serif text-3xl md:text-5xl leading-tight drop-shadow-xl font-bold">
          Luxury Bridal Makeup &amp; Hair — For Your Most Beautiful Day
        </h1>
        <p className="mt-4 text-lg drop-shadow-md font-medium">
          Bespoke bridal styling for timeless, photograph-ready beauty.
        </p>
        <div className="mt-6">
          <Link
            to="/contact"
            className="inline-block px-6 py-3 border border-white rounded-full bg-white/90 text-gray-900 font-medium hover:bg-white transition"
          >
            Book Your Experience
          </Link>
        </div>
      </div>
    </section>
  )
}
