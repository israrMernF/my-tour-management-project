import React from 'react';
import { Facebook, Twitter, Instagram } from 'lucide-react';

import CityScapeIllustration from '../assets/footer-pattern.jpg';

export default function Footer() {
    const backgroundImage = `url(${CityScapeIllustration})`;

    return (
        <footer
            className="relative w-full text-white overflow-hidden"
            style={{
                backgroundImage: backgroundImage,
                backgroundSize: 'contain',
                backgroundPosition: 'bottom center',
                backgroundRepeat: 'no-repeat',
                backgroundColor: '#000000',
            }}
        >
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-16 pb-8 md:pt-24 md:pb-12 relative z-10">
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 md:gap-12 lg:gap-16">
                    <div className="col-span-2 md:col-span-1 lg:col-span-2 space-y-4">
                        <h3 className="text-3xl font-extrabold">
                            <span className="text-red-500">Trip</span>Buddy/
                        </h3>
                        <p className="text-gray-400 text-sm max-w-xs">
                            We're dedicated to making your travel dreams come true with expertly curated unforgettable experiences.
                        </p>
                    </div>
                    <div>
                        <p className="text-lg font-bold mb-3 text-white">Quick Links</p>
                        <ul className="space-y-2 text-sm text-gray-400">
                            <li><a href="/" className="hover:text-red-500 transition duration-150">Home</a></li>
                            <li><a href="/destinations" className="hover:text-red-500 transition duration-150">Destinations</a></li>
                            <li><a href="/tours" className="hover:text-red-500 transition duration-150">Tours</a></li>
                            <li><a href="/about" className="hover:text-red-500 transition duration-150">About Us</a></li>
                            <li><a href="/contact" className="hover:text-red-500 transition duration-150">Contact</a></li>
                        </ul>
                    </div>
                    <div>
                        <p className="text-lg font-bold mb-3 text-white">Contact Us</p>
                        <ul className="space-y-2 text-sm text-gray-400">
                            <li>123 Travel Street, City, Country</li>
                            <li>Phone: +1 234 567 890</li>
                            <li>Email: info@tripbuddy.com</li>
                        </ul>
                    </div>

                    <div>
                        <p className="text-lg font-bold mb-3 text-white">Follow Us</p>
                        <div className="flex space-x-4">
                            <a href="#" className="text-white hover:text-red-500 transition">
                                <Facebook className="w-5 h-5" aria-hidden="true" />
                            </a>
                            <a href="#" className="text-white hover:text-red-500 transition">
                                <Twitter className="w-5 h-5" aria-hidden="true" />
                            </a>
                            <a href="#" className="text-white hover:text-red-500 transition">
                                <Instagram className="w-5 h-5" aria-hidden="true" />
                            </a>
                        </div>
                    </div>
                </div>
                <div className="mt-16 pt-8 border-t border-gray-700 flex flex-col md:flex-row items-center justify-between text-sm text-gray-400">
                    <p className="order-2 md:order-1 mt-4 md:mt-0">
                        &copy; {new Date().getFullYear()} TripBuddy. All rights reserved.
                    </p>
                    <a href="#top" className="order-1 md:order-2 w-10 h-10 bg-red-500 hover:bg-red-600 transition duration-300 rounded-full flex items-center justify-center text-white shadow-lg">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 10l7-7m0 0l7 7m-7-7v18"></path></svg>
                    </a>
                </div>
            </div>
        </footer>
    );
}