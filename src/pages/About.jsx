import React from "react"

export default function About() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Profile Image */}
        <div className="flex justify-center">
          <img
            src="/IMG_5772.jpg"
            alt="Mary Giron-Dalida, Founder of Beauty Lab Studios"
            loading="eager"
            className="rounded-lg object-cover w-full max-w-md h-auto max-h-[28rem] shadow-md"
          />
        </div>

        {/* Bio Section */}
        <div>
          <h2 className="font-serif text-3xl md:text-4xl font-semibold text-gray-900">
            Mary Giron-Dalida
          </h2>

          <p className="mt-4 text-gray-700 leading-relaxed">
            Mary is the owner and founder of Beauty Lab Studios and has been passionate
            about makeup and hair for over 14 years. She was trained by renowned artists
            including Scott Barnes, Nicky Posley, Hair By Teresa, Senada, Nicquel Artistry,
            and Hrush Achemyan. Her work has graced red carpet events such as the Emmys
            and Oscars, fashion bloggers, and the runway of LA Fashion Week’s
            “The Model Experience.”
          </p>

          <p className="mt-4 text-gray-700 leading-relaxed">
            Over the years, she has chosen to focus on the bridal industry, transforming
            beautiful fiancés into radiant brides for their happily ever after. Mary has
            built an exceptional team of hair and makeup artists to assist with larger
            bridal parties — trusted professionals she has developed strong relationships
            with throughout her career.
          </p>

          <p className="mt-4 text-gray-700 leading-relaxed">
            Mary believes every bride deserves a relaxed, stress-free atmosphere and should
            feel like royalty on their wedding day. She and her glam squad often act as
            honorary bridesmaids — offering hype, support, and calm, while ensuring an
            unforgettable “happily ever after” experience.
          </p>

          <p className="mt-4 text-gray-700 leading-relaxed">
            Fun fact: Mary loves boba — yes, the tapioca drink! Outside of beauty, she
            enjoys family time with her two sons and her husband, Mike — lovingly nicknamed
            her “boba prince.”
          </p>

          {/* Awards Section */}
          <div className="mt-8">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Awards & Recognition
            </h3>
            <div className="grid grid-cols-3 sm:grid-cols-4 gap-4">
              <img
                src="/2019.avif"
                alt="Award 2019"
                loading="lazy"
                className="h-16 mx-auto object-contain"
              />
              <img
                src="/2020.avif"
                alt="Award 2020"
                loading="lazy"
                className="h-16 mx-auto object-contain"
              />
              <img
                src="/2022.avif"
                alt="Award 2022"
                loading="lazy"
                className="h-16 mx-auto object-contain"
              />
              <img
                src="/2023.avif"
                alt="Award 2023"
                loading="lazy"
                className="h-16 mx-auto object-contain"
              />
              <img
                src="/lovestoriestv_badge.avif"
                alt="Love Stories TV Badge"
                loading="lazy"
                className="h-16 mx-auto object-contain"
              />
              <img
                src="/prefered_vendor2023.png"
                alt="Preferred Vendor 2023"
                loading="lazy"
                className="h-16 mx-auto object-contain"
              />
              <img
                src="/prefered_vendor2024.png"
                alt="Preferred Vendor 2024"
                loading="lazy"
                className="h-16 mx-auto object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
