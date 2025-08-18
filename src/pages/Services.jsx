import React from "react"

const services = [
  {
    title: "Bridal Makeup and Hair Package",
    img: "/2149722043.jpg",
    desc: "Choice of airbrush makeup or traditional makeup, false eyelashes included. You will be HD camera ready! It is the same products and techniques we use for models and celebrities for their photo shoots and red carpet events. You will look stunning and very photogenic. From sexy loose curls to half up half down. From romantic loose bun to elegant updo. We can make your dream come true.",
  },
  {
    title: "Bridal Party and Attendees Makeup and Hair Services",
    img: "/IMG_5761.jpg",
    desc: "We can accommodate any size bridal party. We have a team of talented hair and makeup artists to assist with larger parties.",
  },
  {
    title: "Touch-up Concierge Services",
    img: "/IMG_5772.jpg",
    desc: "Travel ready team and concierge on standby for any touch up.",
  },
  {
    title: "Additional Notes and Services",
    img: "/IMG_5770.jpg",
    desc: [
      "False Eyelashes included.",
      "Travel and parking fees for hotels or wedding location to be paid by client. (To be determined)",
      "Bridal Party without the bride signing contract with us - $150 for each service.",
      "Early start time before 7am is $50.",
      "Before 6am - $100.",
      "Additional artist - $25.",
      "For Tattoo coverage, determined by size.",
    ],
  },
]

export default function Services() {
  return (
    <section
      className="max-w-6xl mx-auto px-6 py-12"
      aria-label="Services offered"
    >
      <h2 className="font-serif text-3xl mb-10 text-center animate-fadeIn">
        Services
      </h2>

      {/* 2x2 grid on desktop */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
        {services.map((s, i) => (
          <article
            key={i}
            className="border p-6 rounded-lg shadow-lg bg-white/70 backdrop-blur 
                       transform transition duration-500 ease-in-out 
                       hover:scale-105 hover:shadow-2xl animate-fadeUp"
            style={{ animationDelay: `${i * 0.2}s` }}
          >
            {/* Service Image */}
            <div className="overflow-hidden rounded">
              <img
                src={s.img}
                alt={s.title}
                loading="lazy"
                className="w-full h-48 object-cover rounded 
                           transform transition duration-500 hover:scale-110"
              />
            </div>

            {/* Service Title */}
            <h3 className="font-semibold text-lg mt-4">{s.title}</h3>

            {/* Service Description */}
            {Array.isArray(s.desc) ? (
              <ul className="mt-2 text-gray-600 space-y-2 list-disc list-inside">
                {s.desc.map((item, idx) => (
                  <li key={idx} className="animate-fadeIn">
                    {item}
                  </li>
                ))}
              </ul>
            ) : (
              <p className="mt-2 text-gray-600 animate-fadeIn">{s.desc}</p>
            )}

            {/* Pricing only if not "Additional Notes" */}
            {s.title !== "Additional Notes and Services" && (
              <div className="mt-4 text-sm text-gray-500 animate-fadeIn">
                Pricing: upon request
              </div>
            )}
          </article>
        ))}
      </div>
    </section>
  )
}
