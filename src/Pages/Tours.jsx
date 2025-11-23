import React from 'react';
import { Clock, Star } from 'lucide-react';
import ToursBannerImage from '../assets/TopBanner.jpg'; 


import Bali from '../assets/Bali.jpg';
import Japan from '../assets/Japan.jpg';
import USA from '../assets/India.jpg'; 
import Paris from '../assets/Paris.jpg';
import Venice from '../assets/Venice.jpg'; 
import bangladesh from '../assets/bangladesh.jpg.jpg'; 

const toursData = [
    { name: 'Bali', description: 'Experience the beauty and culture of Bali', img: Bali, time: '4 Days - 3 Nights', star: '3 (10 reviews)', price: '50,999' },
    { name: 'Tokyo', description: 'Experience the beauty and culture of Tokyo', img: Japan, time: '5 Days - 4 Nights', star: '3 (12 reviews)', price: '75,999' },
    { name: 'India', description: 'Experience the beauty and culture of India', img: USA, time: '5 Days - 4 Nights', star: '3 (12 reviews)', price: '69,999' }, 
    { 
        name: 'Venice', 
        description: 'Experience the beauty and culture of Venice', 
        img: Venice, 
        time: '5 Days - 4 Nights', 
        star: '4 (35 reviews)', 
        price: '85,999' 
    }, 
    { name: 'Paris', description: 'Experience the beauty and culture of Paris', img: Paris, time: '5 Days - 4 Nights', star: '3 (12 reviews)', price: '69,999' },
    { 
        name: 'Sajek Valley', 
        description: 'Explore the stunning hills and clouds of Sajek Valley in Bangladesh.', 
        img: bangladesh, 
        time: '3 Days - 2 Nights', 
        star: '5 (75 reviews)', 
        price: '15,999' 
    },
];

function Tours() {

    function TopBanner({ title, backgroundImageSrc }) {
        return (
            <div 
                className="relative w-full h-64 md:h-80 flex items-center justify-center text-white overflow-hidden"
                style={{
                    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${backgroundImageSrc})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            >
                <h1 className="text-4xl md:text-6xl font-extrabold tracking-wider z-10 uppercase">
                    {title}
                </h1>
            </div>
        );
    }

    return (
        <div className="w-full">
            <TopBanner 
                title="TOURS" 
                backgroundImageSrc={ToursBannerImage} 
            />

            <section className='w-full py-12 md:py-16 lg:py-20 px-4 md:px-0'>
                <div className='max-w-7xl mx-auto px-4 md:px-6'>
                    <h2 className='text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-3 font-serif'>
                        Top Destination
                    </h2>
                    <hr className='text-red-500 w-[200px] bg-red-500 mx-auto h-1 mb-10' />
                    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8'>
                        {toursData.map((destination, index) => (
                            <div key={index} className='p-2'>
                                <div className='overflow-hidden border shadow-lg shadow-gray-300 rounded-lg'>
                                    <img 
                                        src={destination.img} 
                                        alt={destination.name} 
                                        width={600} 
                                        height={400} 
                                        className='object-cover w-full h-32 md:h-48 hover:scale-110 transition-all duration-300'
                                    />
                                    <div className='p-4'>
                                        <p className='text-gray-500 flex items-center gap-1 text-sm mb-1'>
                                            <Clock width={15}/> {destination.time}
                                        </p>
                                        <h3 className='text-xl font-bold mb-2'>{destination.name}</h3>
                                        <p className='flex gap-1 items-center'>
                                            <Star width={20} fill='gold' stroke='gold' /> {destination.star}
                                        </p>
                                        <p className='text-gray-600 mb-4 mt-2'>
                                            {destination.description}
                                        </p>
                                        <div className='flex gap-4'>
                                            <button className='px-3 py-2 bg-red-500 rounded-md text-white transition-colors duration-300 hover:bg-red-600'>
                                                ${destination.price}
                                            </button>
                                            <button className='px-3 py-2 bg-black rounded-md text-white transition-colors duration-300 hover:bg-gray-700'>
                                                Learn More
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Tours;