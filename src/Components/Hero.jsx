import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { MapPinIcon, CalendarDaysIcon, UsersIcon } from '@heroicons/react/24/outline'; 


import banner1 from '../assets/Hero1.jpg'; 
import banner2 from '../assets/Hero2.jpg'; 
import banner3 from '../assets/Hero3.jpg'; 
import banner4 from '../assets/Hero4.jpg'; 


const SlideContent = () => (
    <div className='relative z-10 flex flex-col justify-center items-center text-center w-full px-4 sm:px-6 lg:px-8'>
        
        
        <h1 className='text-white font-extrabold text-4xl sm:text-6xl md:text-7xl leading-tight drop-shadow-lg mb-4'>
            Discover Your Next Adventure
        </h1>

        <p className='text-white text-base md:text-xl font-light max-w-3xl drop-shadow-md mb-8 sm:mb-10'>
            Explore breathtaking destinations, create unforgettable memories and embark on the journey of a lifetime.
        </p>
        
        <button className='bg-red-500 text-white font-bold py-3 px-8 rounded-full shadow-xl hover:bg-red-600 transition duration-300 text-lg mb-12 md:mb-20'>
            Start Exploring
        </button>

        <div className='relative bg-white rounded-xl shadow-2xl p-4 w-full max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-5 gap-3 md:gap-4 items-center -mb-20'> 
            
            <div className='flex flex-col col-span-2 md:col-span-1'>
                <label htmlFor="location" className="text-gray-600 text-xs sm:text-sm font-semibold mb-1 flex items-center">
                    <MapPinIcon className="h-4 w-4 md:h-5 md:w-5 mr-1 text-red-500" /> Location
                </label>
                <select id="location" className="w-full p-2 sm:p-3 border border-gray-300 rounded-lg text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-blue-400">
                    <option>Select Options</option>
                    <option>Paris, France</option>
                    <option>Bali, Indonesia</option>
                    <option>Kyoto, Japan</option>
                    <option>Miami Beach, USA</option>
                    <option>Sajek Valley, Bangladesh</option>
                </select>
            </div>

            <div className='flex flex-col'>
                <label htmlFor="check-in" className="text-gray-600 text-xs sm:text-sm font-semibold mb-1 flex items-center">
                    <CalendarDaysIcon className="h-4 w-4 md:h-5 md:w-5 mr-1 text-red-500" /> Check In
                </label>
                <input 
                    type="date" 
                    id="check-in" 
                    className="w-full p-2 sm:p-3 border border-gray-300 rounded-lg text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-blue-400" 
                />
            </div>

            <div className='flex flex-col'>
                <label htmlFor="check-out" className="text-gray-600 text-xs sm:text-sm font-semibold mb-1 flex items-center">
                    <CalendarDaysIcon className="h-4 w-4 md:h-5 md:w-5 mr-1 text-red-500" /> Check Out
                </label>
                <input 
                    type="date" 
                    id="check-out" 
                    className="w-full p-2 sm:p-3 border border-gray-300 rounded-lg text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-blue-400" 
                />
            </div>

            <div className='flex flex-col'>
                <label htmlFor="guests" className="text-gray-600 text-xs sm:text-sm font-semibold mb-1 flex items-center">
                    <UsersIcon className="h-4 w-4 md:h-5 md:w-5 mr-1 text-red-500" /> Guest
                </label>
                <select id="guests" className="w-full p-2 sm:p-3 border border-gray-300 rounded-lg text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-blue-400">
                    <option>1 Guest</option>
                    <option>2 Guests</option>
                    <option>3 Guests</option>
                    <option>4 Guests</option>
                    <option>5+ Guests</option>
                </select>
            </div>

            <div className='flex items-end h-full col-span-2 md:col-span-1'> 
                <button className='w-full bg-red-500 text-white font-bold py-3 md:py-4 px-6 rounded-lg shadow-md hover:bg-red-600 transition duration-300 text-sm md:text-lg'>
                    Book Now
                </button>
            </div>
        </div>
    </div>
);



const Hero = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        cssEase: "ease-in-out"
    };

    const slidesData = [
        { id: 1, image: banner1 }, 
        { id: 2, image: banner2 }, 
        { id: 3, image: banner3 }, 
        { id: 4, image: banner4 }, 
    ];


    return (
        <div className="slider-container overflow-hidden">
            <Slider {...settings}>
                {slidesData.map((slide) => (
                    <div key={slide.id}>
                        <div className='h-[650px] md:h-[800px] relative flex justify-center items-center'
                            style={{
                                backgroundImage: `url(${slide.image})`,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                            }}>
                            <div className='absolute inset-0 bg-black opacity-60'></div>
                            <SlideContent />
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
}

export default Hero;