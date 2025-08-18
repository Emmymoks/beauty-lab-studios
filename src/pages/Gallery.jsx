import React, { useState, useEffect } from "react"

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
  const [currentIndex, setCurrentIndex] = useState(null)
  const [touchStart, setTouchStart] = useState(0)

  const handlePrev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? IMAGES.length - 1 : prev - 1
    )
  }

  const handleNext = () => {
    setCurrentIndex((prev) =>
      prev === IMAGES.length - 1 ? 0 : prev + 1
    )
  }

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (currentIndex !== null) {
        if (e.key === "ArrowRight") handleNext()
        if (e.key === "ArrowLeft") handlePrev()
        if (e.key === "Escape") setCurrentIndex(null)
      }
    }
    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [currentIndex])

  // Touch swipe handling
  const handleTouchStart = (e) => {
    setTouchStart(e.touches[0].clientX)
  }

  const handleTouchEnd = (e) => {
    if (!touchStart) return
    const touchEnd = e.changedTouches[0].clientX
    const diff = touchStart - touchEnd
    if (diff > 50) handleNext() // swipe left
    if (diff < -50) handlePrev() // swipe right
    setTouchStart(0)
  }

  return (
    <section className="max-w-6xl mx-auto px-6 py-12">
      <h2 className="font-serif text-3xl mb-6 text-center">Gallery</h2>

      {/* Responsive Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {IMAGES.map((it, i) => (
          <figure
            key={i}
            className="rounded overflow-hidden shadow-md hover:scale-105 transition-transform duration-300 cursor-pointer"
            onClick={() => setCurrentIndex(i)}
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
      {currentIndex !== null && (
        <div
          className="fixed inset-0 bg-black/90 backdrop-blur flex items-center justify-center z-50 transition-opacity duration-500"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {/* Close button */}
          <button
            className="absolute top-6 right-6 text-white text-4xl font-bold hover:scale-110 transition-transform"
            onClick={() => setCurrentIndex(null)}
            aria-label="Close image viewer"
          >
            ✕
          </button>

          {/* Prev button */}
          <button
            className="absolute left-6 text-white text-5xl font-bold px-2 hover:scale-110 transition-transform"
            onClick={handlePrev}
            aria-label="Previous image"
          >
            ‹
          </button>

          {/* Next button */}
          <button
            className="absolute right-6 text-white text-5xl font-bold px-2 hover:scale-110 transition-transform"
            onClick={handleNext}
            aria-label="Next image"
          >
            ›
          </button>

          {/* Image */}
          <img
            src={IMAGES[currentIndex].src}
            alt={`Selected gallery item ${currentIndex + 1}`}
            className="max-h-[90%] max-w-[90%] rounded-lg shadow-lg transform scale-95 animate-fadeIn"
          />
        </div>
      )}
    </section>
  )
}
