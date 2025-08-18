import React from 'react'
import { Link } from 'react-router-dom'

export default function CTA() {
  return (
    <section id="enquire" className="max-w-6xl mx-auto px-6 py-12 text-center">
      <div className="inline-block border p-8 rounded-lg shadow-lg">
        <h4 className="font-serif text-2xl">
          Ready to plan your bridal beauty?
        </h4>
        <p className="mt-2 text-gray-600">
          Every inquiry is personally reviewed to ensure a tailored experience.
        </p>
        <Link
          to="/contact"
          className="mt-6 inline-block px-8 py-3 border rounded-full bg-softgold text-white font-medium hover:scale-105 transition-transform"
        >
          Enquire Now
        </Link>
      </div>
    </section>
  )
}
