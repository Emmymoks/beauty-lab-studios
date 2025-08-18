import React, { useState } from "react"
import { Link } from "react-router-dom"
// Uncomment the next line if your logo is inside src/assets/
// import Logo from "../assets/logo.avif"

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="bg-white/80 backdrop-blur sticky top-0 z-40 border-b">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-3">
          <img
            // If logo is in public/ use this:
            src="/logo.avif"
            // If logo is in src/assets/ use this:
            // src={Logo}
            alt="Beauty Lab Studios Logo"
            className="h-10 w-auto"
          />
          <span className="font-serif text-2xl tracking-wide">
            Beauty Lab Studios
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="space-x-6 hidden md:flex items-center text-sm">
          <Link to="/" className="hover:underline">Home</Link>
          <Link to="/about" className="hover:underline">About</Link>
          <Link to="/services" className="hover:underline">Services</Link>
          <Link to="/gallery" className="hover:underline">Gallery</Link>
          <Link to="/contact" className="hover:underline">Contact</Link>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            aria-label="Toggle menu"
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-2xl focus:outline-none"
          >
            {menuOpen ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {/* Fullscreen Mobile Drawer */}
      <div
        className={`fixed inset-0 bg-white/80 backdrop-blur z-40 transform transition-transform duration-500 ease-in-out ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        } md:hidden`}
      >
        {/* Close Button inside Drawer */}
        <div className="flex justify-end p-6">
          <button
            aria-label="Close menu"
            onClick={() => setMenuOpen(false)}
            className="text-3xl font-bold focus:outline-none"
          >
            ✕
          </button>
        </div>

        {/* Nav Links */}
        <ul className="flex flex-col items-end space-y-8 px-8 py-8 text-2xl font-bold">
          <li><Link to="/" onClick={() => setMenuOpen(false)} className="block hover:underline">Home</Link></li>
          <li><Link to="/about" onClick={() => setMenuOpen(false)} className="block hover:underline">About</Link></li>
          <li><Link to="/services" onClick={() => setMenuOpen(false)} className="block hover:underline">Services</Link></li>
          <li><Link to="/gallery" onClick={() => setMenuOpen(false)} className="block hover:underline">Gallery</Link></li>
          <li><Link to="/contact" onClick={() => setMenuOpen(false)} className="block hover:underline">Contact</Link></li>
        </ul>
      </div>
    </header>
  )
}
