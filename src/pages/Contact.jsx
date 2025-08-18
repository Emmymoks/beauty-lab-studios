import React, { useState } from "react";

export default function Contact() {
  const [activeMap, setActiveMap] = useState("Riverside");

  return (
    <section className="max-w-4xl mx-auto px-6 py-12">
      <h2 className="font-serif text-3xl mb-6">Contact & Enquiry</h2>
      <div className="grid md:grid-cols-2 gap-8">
        {/* Left Column */}
        <div>
          <h3 className="font-semibold">Locations</h3>
          <ul className="mt-2 text-gray-700 space-y-1">
            <li>3840 Lemon St. Riverside, CA 92501</li>
            <li>505 N Tustin St. Ste #4 Orange, CA 92867</li>
            <li>5450 W Pico Blvd. Unit 104 Los Angeles, CA 90019</li>
          </ul>
          <div className="mt-6">
            <h4 className="font-semibold">Contact</h4>
            <div className="mt-1">Phone: (951) 640-7349</div>
            <div>Email: beautylabstudios@yahoo.com</div>
          </div>

          {/* Maps Section */}
          <div className="mt-8">
            {/* Mobile - Tabs */}
            <div className="block md:hidden">
              <div className="flex space-x-2 mb-4">
                {["Riverside", "Orange", "Los Angeles"].map((loc) => (
                  <button
                    key={loc}
                    onClick={() => setActiveMap(loc)}
                    className={`px-3 py-1 rounded text-sm ${
                      activeMap === loc
                        ? "bg-gray-800 text-white"
                        : "bg-gray-200 text-gray-700"
                    }`}
                  >
                    {loc}
                  </button>
                ))}
              </div>
              {/* Show only active map */}
              {activeMap === "Riverside" && (
                <iframe
                  title="Riverside Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3306.186265599021!2d-117.37244148478256!3d33.98168188062143!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dcbf7e9e1f9a4f%3A0x6c2f6bb9d927d0a6!2s3840%20Lemon%20St%2C%20Riverside%2C%20CA%2092501!5e0!3m2!1sen!2sus!4v1679950000000!5m2!1sen!2sus"
                  width="100%"
                  height="200"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                ></iframe>
              )}
              {activeMap === "Orange" && (
                <iframe
                  title="Orange Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3304.823073882265!2d-117.85257848478136!3d33.79952968067979!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dcdee07d88dbf7%3A0x90c1f4abcb9f7e68!2s505%20N%20Tustin%20St%20%234%2C%20Orange%2C%20CA%2092867!5e0!3m2!1sen!2sus!4v1679950500000!5m2!1sen!2sus"
                  width="100%"
                  height="200"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                ></iframe>
              )}
              {activeMap === "Los Angeles" && (
                <iframe
                  title="Los Angeles Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3309.919149882009!2d-118.36173928478573!3d34.056639980604115!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2b92c69f5d8c7%3A0xb3c8158f88d179bd!2s5450%20W%20Pico%20Blvd%20Unit%20104%2C%20Los%20Angeles%2C%20CA%2090019!5e0!3m2!1sen!2sus!4v1679950800000!5m2!1sen!2sus"
                  width="100%"
                  height="200"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                ></iframe>
              )}
            </div>

            {/* Desktop - All Maps stacked */}
            <div className="hidden md:block space-y-6">
              <div>
                <h5 className="font-medium text-gray-800 mb-2">Riverside</h5>
                <iframe
                  title="Riverside Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3306.186265599021!2d-117.37244148478256!3d33.98168188062143!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dcbf7e9e1f9a4f%3A0x6c2f6bb9d927d0a6!2s3840%20Lemon%20St%2C%20Riverside%2C%20CA%2092501!5e0!3m2!1sen!2sus!4v1679950000000!5m2!1sen!2sus"
                  width="100%"
                  height="200"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                ></iframe>
              </div>

              <div>
                <h5 className="font-medium text-gray-800 mb-2">Orange</h5>
                <iframe
                  title="Orange Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3304.823073882265!2d-117.85257848478136!3d33.79952968067979!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dcdee07d88dbf7%3A0x90c1f4abcb9f7e68!2s505%20N%20Tustin%20St%20%234%2C%20Orange%2C%20CA%2092867!5e0!3m2!1sen!2sus!4v1679950500000!5m2!1sen!2sus"
                  width="100%"
                  height="200"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                ></iframe>
              </div>

              <div>
                <h5 className="font-medium text-gray-800 mb-2">Los Angeles</h5>
                <iframe
                  title="Los Angeles Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3309.919149882009!2d-118.36173928478573!3d34.056639980604115!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2b92c69f5d8c7%3A0xb3c8158f88d179bd!2s5450%20W%20Pico%20Blvd%20Unit%20104%2C%20Los%20Angeles%2C%20CA%2090019!5e0!3m2!1sen!2sus!4v1679950800000!5m2!1sen!2sus"
                  width="100%"
                  height="200"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                ></iframe>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column - Form */}
        <form
          className="space-y-4 bg-white p-6 rounded-lg shadow-sm"
          onSubmit={(e) => {
            e.preventDefault();
            alert(
              "Form submission is disabled in this demo. Replace with real backend."
            );
          }}
        >
          <div className="grid grid-cols-2 gap-4">
            <input
              placeholder="First Name"
              className="border p-2 rounded"
              required
            />
            <input
              placeholder="Last Name"
              className="border p-2 rounded"
              required
            />
          </div>
          <input
            placeholder="Email"
            type="email"
            className="border p-2 rounded w-full"
            required
          />
          <input placeholder="Phone" className="border p-2 rounded w-full" />

          {/* Type of Event */}
          <label className="block">
            Type of Event
            <select className="border p-2 rounded w-full mt-1" required>
              <option>Wedding! I am the Bride.</option>
              <option>Engagement Shoot.</option>
              <option>Special Events.</option>
              <option>Bridal Party Services.</option>
              <option>Family/Maternity Shoot.</option>
              <option>Prom.</option>
              <option>Quincenera/ Debut.</option>
              <option>Branding/Headshots.</option>
              <option>Collaboration.</option>
              <option>Other (please specify).</option>
            </select>
          </label>

          {/* Wedding Date */}
          <label className="block">
            Wedding Date
            <input type="date" className="border p-2 rounded w-full" />
          </label>

          {/* Ready Time */}
          <label className="block">
            Ready Time
            <input
              type="text"
              placeholder="Enter ready time"
              className="border p-2 rounded w-full"
            />
          </label>

          {/* Getting Ready Location */}
          <label className="block">
            Getting Ready Location (City, Hotel, Venue)
            <input className="border p-2 rounded w-full" />
          </label>

          {/* Number of Services */}
          <label className="block">
            Number of Services Requested
            <input type="number" className="border p-2 rounded w-full" />
          </label>

          {/* Types of Services */}
          <label className="block">
            Types of Services
            <select className="border p-2 rounded w-full mt-1" required>
              <option>Make Up + Hair.</option>
              <option>Make Up Only.</option>
              <option>Hair Only.</option>
            </select>
          </label>

          {/* Vision Board Upload */}
          <label className="block">
            Vision Board Upload
            <input type="file" className="border p-2 rounded w-full" />
          </label>

          {/* Right now I am */}
          <label className="block">
            Right now, I am
            <select className="border p-2 rounded w-full mt-1" required>
              <option>I am Ready to Book.</option>
              <option>Ready, but I have a question.</option>
              <option>Just looking around.</option>
            </select>
          </label>

          {/* Additional Notes */}
          <label className="block">
            Anything else that you would like to share?
            <textarea
              className="border p-2 rounded w-full mt-1 h-28 resize-y"
              placeholder="Share details about your vision, special requests, or other info..."
            />
          </label>

          <button
            className="inline-block px-6 py-3 rounded-full bg-softgold text-white font-medium hover:scale-105 transition-transform"
          >
            Reserve Your Date
          </button>
        </form>
      </div>
    </section>
  );
}
