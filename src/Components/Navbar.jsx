import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="fixed top-0 w-full z-50 backdrop-blur-md bg-black bg-opacity-30 shadow-md transition-all">
      <div className="max-w-7xl mx-auto px-5 flex justify-between items-center py-4">
        <Link to='/'>
          <h1 className="text-3xl font-extrabold text-white">
            Trip<span className="text-red-500">Buddy</span>
          </h1>
        </Link>
        <nav className="hidden md:flex items-center gap-10">
          <ul className="flex gap-8 text-white font-semibold text-lg">
            <li><Link to="/" className="hover:text-red-500 transition">Home</Link></li>
            <li><Link to="/about" className="hover:text-red-500 transition">About Us</Link></li>
            <li><Link to="/tours" className="hover:text-red-500 transition">Tours</Link></li>
            <li><Link to="/gallery" className="hover:text-red-500 transition">Gallery</Link></li>
            <li><Link to="/contact" className="hover:text-red-500 transition">Contact</Link></li>
          </ul>
          <button className="bg-red-500 text-white font-bold px-5 py-2 rounded-lg hover:bg-red-600 transition shadow-md">
            Book Now
          </button>
        </nav>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>
        </div>
      </div>
      {isOpen && (
        <nav className="md:hidden bg-black bg-opacity-95 text-white px-5 py-5">
          <ul className="flex flex-col gap-6 font-semibold text-lg">
            <li><Link to="/" onClick={() => setIsOpen(false)}>Home</Link></li>
            <li><Link to="/about" onClick={() => setIsOpen(false)}>About</Link></li>
            <li><Link to="/tours" onClick={() => setIsOpen(false)}>Tours</Link></li>
            <li><Link to="/gallery" onClick={() => setIsOpen(false)}>Gallery</Link></li>
            <li><Link to="/contact" onClick={() => setIsOpen(false)}>Contact</Link></li>
          </ul>
          <button className="mt-5 w-full bg-red-500 text-white font-bold px-5 py-2 rounded-lg hover:bg-red-600 transition shadow-md">
            Book Now
          </button>
        </nav>
      )}
    </header>
  );
}

export default Navbar;
