import React from 'react'
import Hero from '../sections/Hero'
import Featured from '../sections/Featured'
import Testimonials from '../sections/Testimonials'
import CTA from '../sections/CTA'

export default function Home(){
  return (
    <div className="space-y-16">
      <Hero />
      <div className="max-w-6xl mx-auto px-6">
        <p className="text-center text-lg text-gray-600">Timeless beauty. Elevated artistry. Personalized luxury for every bride.</p>
      </div>
      <Featured />
      <Testimonials />
      <CTA />
    </div>
  )
}