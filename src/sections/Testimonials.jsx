import React, { useState, useEffect } from 'react'

const items = [
  {
    name: 'Angelina A.',
    quote:
      "I can't express how grateful I am to have had Mary and her incredible team as the hair and makeup artists for my wedding. From the very beginning, Mary's communication and professionalism stood out. I knew I was in capable hands even before my trial.",
  },
  {
    name: 'Saida R.',
    quote:
      "Mary is super sweet , patient , & a skillful makeup and hair artist! She really helped me relax after so much stress to plan my wedding so last minute. I felt like a true princess the entire process. The results were absolutely amazing. Also, she’s super quick to respond to all her emails in a very timely manner ! Thank you again !!",
  },
  {
    name: 'Carmen C.',
    quote:
      "Mary made my experience amazing. She was very quick to respond, took the time to answer all of my questions and shared tips to prepare my skin for my wedding day. And most importantly made me look beautiful for one of the most important days of my life. My hair and makeup were flawless. I couldn’t have picked a better hair/makeup stylist. She also brought a team of makeup artists and stylists who took care of my bridesmaids, flower girls and mother.",
  },
  {
    name: 'Angelie T.',
    quote:
      "Mary is amazing to work with! She responds quickly to any questions or requests that I had regarding her services. When I had her make-up trial, she was professional and skilled in creating the look that I wanted. On the day-of my wedding, I was impressed with how efficient she was in sticking to the make-up schedule for myself, my bridesmaids, and my mothers all while nailing each look flawlessly.",
  },
  {
    name: 'Rachelle',
    quote:
      "Mary made me look so glamorous for my daughter’s wedding. She made the bridal party look spectacular. She’s very professional and i will definitely recommend her and use her services again.",
  },
]

export default function Testimonials() {
  const [current, setCurrent] = useState(0)

  // Auto-advance every 6 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % items.length)
    }, 6000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section className="bg-champagne/40 py-12">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h3 className="font-serif text-xl mb-6">What Brides Say</h3>

        <div className="relative overflow-hidden">
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${current * 100}%)` }}
          >
            {items.map((t, i) => (
              <div key={i} className="w-full flex-shrink-0 px-4">
                <blockquote className="bg-white p-6 rounded-lg shadow-sm">
                  <p className="text-gray-800 italic">“{t.quote}”</p>
                  <cite className="block mt-3 text-sm text-gray-600">— {t.name}</cite>
                </blockquote>
              </div>
            ))}
          </div>
        </div>

        {/* Slider dots */}
        <div className="flex justify-center mt-6 space-x-2">
          {items.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`w-3 h-3 rounded-full ${
                current === i ? 'bg-gray-800' : 'bg-gray-400'
              }`}
              aria-label={`Go to testimonial ${i + 1}`}
            ></button>
          ))}
        </div>
      </div>
    </section>
  )
}
