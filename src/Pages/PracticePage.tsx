import React from 'react';
import { Link } from 'react-router-dom';

export default function PracticePage() {
  return (
    <header className="absolute top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-6 py-6 flex justify-between items-center text-white">
        
        {/* Logo */}
        <Link to="/" className="text-3xl font-bold text-white hover:text-gray-300 transition">
          Estate
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex space-x-8">
          <Link to="/" className="text-white font-medium hover:text-gray-300 transition">Home</Link>
          <Link to="/apartments" className="text-white font-medium hover:text-gray-300 transition">Apartments</Link>
          <Link to="/about" className="text-white font-medium hover:text-gray-300 transition">About us</Link>
          <Link to="/blog" className="text-white font-medium hover:text-gray-300 transition">Blog</Link>
        </nav>

        {/* Contact Button */}
        <Link
          to="/contact"
          className="border border-white px-5 py-2 rounded-md text-white font-medium hover:bg-white hover:text-black transition"
        >
          Contact
        </Link>
      </div>
    </header>
  );
}
