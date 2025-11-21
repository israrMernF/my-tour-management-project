// import React from 'react';
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import banner1 from '../assets/Hero1.jpg'

// const Hero = () => {
//     const settings = {
//         dots: true,
//         infinite: true,
//         speed: 500,
//         slidesToShow: 1,
//         slidesToScroll: 1
//     };

//     return (
//         <div className="slider-container overflow-hidden">
//             <Slider {...settings}>
//                 <div>
//                     <div className='h-[650px] lg:h-[800px] relative'
//                         style={{
//                             backgroundImage: `url(${banner1})`,
//                             backgroundSize: 'cover',
//                             backgroundPosition: 'center'
//                         }}>
//                         <div className='absolute inset-0 bg-black opacity-60'></div>
//                         <div className='relative max-w-7xl mx-auto'></div>
//                         <div className='flex h-[650px] justify-center items-center lg:pt-0 pt-20'></div>
//                            <div className='flex flex-col space-y-8 justify-center items-center text-center px-5 md:px-0'>
//                             <h1 className='text-white font-bold text-4xl lg:text-6xl'>Discover Your Next Adventure</h1>
//                             <p className='text-white lg:text-lg lg:w-[700px]'>Explore breathtaking destinations,create unforgettable memories and embark on the journey of a lifetime.</p>
//                            </div>
//                     </div>
//                 </div>
//                 <div>
//                     <h3>2</h3>
//                 </div>
//                 <div>
//                     <h3>3</h3>
//                 </div>
//                 <div>
//                     <h3>4</h3>
//                 </div>
//                 <div>
//                     <h3>5</h3>
//                 </div>
//                 <div>
//                     <h3>6</h3>
//                 </div>
//             </Slider>
//         </div>
//     );
// }

// export default Hero;


import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// Heroicons: যদি Heroicons ব্যবহার করতে চান, তাহলে ইন্সটল করুন: npm install @heroicons/react
import { MapPinIcon, CalendarDaysIcon, UsersIcon } from '@heroicons/react/24/outline'; 

// 🚨🚨 আপনার চারটি ইমেজের পাথ (Path) এখানে পরিবর্তন করুন 🚨🚨
// এই ইমেজগুলো আপনার 'assets' ফোল্ডারে আছে ধরে নেওয়া হলো।
import banner1 from '../assets/Hero1.jpg'; 
import banner2 from '../assets/Hero2.jpg'; 
import banner3 from '../assets/Hero3.jpg'; 
import banner4 from '../assets/Hero4.jpg'; 


// ----------------------------------------------------
// ⭐ কাস্টম স্লাইড কন্টেন্ট কম্পোনেন্ট (Title, Button, Search Box)
// এটি সমস্ত স্লাইডের জন্য একই কন্টেন্ট রেন্ডার করবে
// ----------------------------------------------------
const SlideContent = () => (
    // Content Container (Title, Subtitle, Button, Search Form)
    // w-full px-4: সব ডিভাইসে ভালো প্যাডিং নিশ্চিত করে
    <div className='relative z-10 flex flex-col justify-center items-center text-center w-full px-4 sm:px-6 lg:px-8'>
        
        {/* Hero Title: রেসপন্সিভ ফন্ট সাইজ */}
        <h1 className='text-white font-extrabold text-4xl sm:text-6xl md:text-7xl leading-tight drop-shadow-lg mb-4'>
            Discover Your Next Adventure
        </h1>

        {/* Subtitle: রেসপন্সিভ টেক্সট সাইজ */}
        <p className='text-white text-base md:text-xl font-light max-w-3xl drop-shadow-md mb-8 sm:mb-10'>
            Explore breathtaking destinations, create unforgettable memories and embark on the journey of a lifetime.
        </p>
        
        {/* "Start Exploring" Button: ছবির মতো ডিজাইন */}
        <button className='bg-red-500 text-white font-bold py-3 px-8 rounded-full shadow-xl hover:bg-red-600 transition duration-300 text-lg mb-12 md:mb-20'>
            Start Exploring
        </button>

        {/* Multi-field Search Box: ছবির হুবহু লেআউট এবং রেসপন্সিভ গ্রিড */}
        {/* max-w-6xl: বড় স্ক্রিনে চওড়া দেখাবে */}
        <div className='relative bg-white rounded-xl shadow-2xl p-4 w-full max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-5 gap-3 md:gap-4 items-center -mb-20'> 
            
            {/* Location Field: ছোট স্ক্রিনে দুটি কলাম জুড়ে থাকবে */}
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

            {/* Check In Field */}
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

            {/* Check Out Field */}
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

            {/* Guest Field */}
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

            {/* Book Now Button: ছোট স্ক্রিনে দুটি কলাম জুড়ে থাকবে এবং নিচে থাকবে */}
            <div className='flex items-end h-full col-span-2 md:col-span-1'> 
                <button className='w-full bg-red-500 text-white font-bold py-3 md:py-4 px-6 rounded-lg shadow-md hover:bg-red-600 transition duration-300 text-sm md:text-lg'>
                    Book Now
                </button>
            </div>
        </div>
    </div>
);


// ----------------------------------------------------
// ⭐ Hero কম্পোনেন্ট (মূল ফাইল)
// ----------------------------------------------------
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

    // সব স্লাইডের ডেটা এবং ইমেজ পাথ একটি অ্যারেতে রাখা হলো
    const slidesData = [
        { id: 1, image: banner1 }, // 👈 আপনার প্রথম ছবি
        { id: 2, image: banner2 }, // 👈 আপনার দ্বিতীয় ছবি
        { id: 3, image: banner3 }, // 👈 আপনার তৃতীয় ছবি
        { id: 4, image: banner4 }, // 👈 আপনার চতুর্থ ছবি
    ];


    return (
        <div className="slider-container overflow-hidden">
            <Slider {...settings}>
                {/* slidesData অ্যারে লুপ করে চারটি স্লাইড তৈরি করা হলো */}
                {slidesData.map((slide) => (
                    <div key={slide.id}>
                        <div className='h-[650px] md:h-[800px] relative flex justify-center items-center'
                            style={{
                                // 💡 এখানে ডায়নামিকভাবে আপনার ছবির পাথ ব্যবহার করা হচ্ছে
                                backgroundImage: `url(${slide.image})`,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                            }}>
                            {/* Overlay */}
                            <div className='absolute inset-0 bg-black opacity-60'></div>

                            {/* কাস্টম কন্টেন্ট কম্পোনেন্টটি ব্যবহার করা হলো */}
                            <SlideContent />
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
}

export default Hero;