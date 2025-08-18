import React from 'react'

const videos = [
  "https://player.vimeo.com/video/730853349",
  "https://player.vimeo.com/video/730468085"
]

export default function Featured() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-12">
      <h2 className="font-serif text-2xl mb-6">Featured Work</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {videos.map((src, i) => (
          <div key={i} className="aspect-video rounded-lg overflow-hidden shadow-lg">
            <iframe
              src={src}
              title={`Featured Video ${i + 1}`}
              className="w-full h-full"
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture; encrypted-media"
              allowFullScreen
            ></iframe>
          </div>
        ))}
      </div>
    </section>
  )
}
