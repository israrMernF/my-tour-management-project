import React from 'react';
import BannerImage from '../assets/banner.jpg'; 

const Banner = () => {
    const backgroundImage = `url(${BannerImage})`; 
    
    return (
        <section 
            className="w-full h-[50vh] flex items-center justify-center text-center relative overflow-hidden"
            style={{ 
                backgroundImage: backgroundImage, 
                backgroundSize: 'cover',         
                backgroundPosition: 'center',    
            }}
        >
            
           
            <div className="absolute inset-0 bg-black opacity-40"></div>
            <div className="relative z-10 max-w-4xl mx-auto px-4">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-4 font-serif">
                    Ready to Start Your Adventure?
                </h2>
                <p className="text-sm sm:text-lg text-white mb-8 max-w-xl mx-auto">
                    Book your dream vacation today and create unforgettable memories.
                </p>
                <button 
                    className="px-8 py-3 bg-red-500 text-white font-bold rounded-md shadow-lg 
                               transition-colors duration-300 hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50"
                >
                    Start Planning
                </button>
            </div>
        </section>
    );
};

export default Banner;