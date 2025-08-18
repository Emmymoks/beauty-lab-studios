import React from 'react'
import { FaInstagram, FaFacebookF, FaTiktok } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className="border-t mt-12">
      <div className="max-w-6xl mx-auto px-6 py-8 text-sm text-gray-600 flex flex-col md:flex-row justify-between items-center">
        
        {/* Left Side: Brand */}
        <div className="text-center md:text-left">
          <div className="font-serif text-lg">Beauty Lab Studios</div>
          <div className="mt-2">© 2025 by Beauty Lab Studios, LLC.</div>
        </div>

        {/* Middle: Contact */}
        <div className="mt-4 md:mt-0 text-center md:text-left">
          <div className="font-medium">Contact</div>
          <div className="mt-1">Phone: (951) 640-7349</div>
          <div>Email: info@beautylabstudiosllc.com</div>
        </div>

        {/* Right Side: Social Icons */}
        <div className="flex space-x-4 mt-4 md:mt-0">
          <a
            href="https://www.instagram.com/beautylabstudios"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-pink-500 transition"
          >
            <FaInstagram size={20} />
          </a>
          <a
            href="https://www.facebook.com/BeautyLabStudios"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-blue-600 transition"
          >
            <FaFacebookF size={20} />
          </a>
          <a
            href="https://www.tiktok.com/@beautylabstudios"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-black transition"
          >
            <FaTiktok size={20} />
          </a>
        </div>
      </div>
    </footer>
  )
}
