import React from 'react';
import { Clock, Star } from 'lucide-react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


import Paris from '../assets/Paris.jpg';
import Bali from '../assets/Bali.jpg';
import Japan from '../assets/Japan.jpg';
import USA from '../assets/USA.jpg.jpg';
import bangladesh from '../assets/bangladesh.jpg.jpg';
import next from '../assets/next.png'; 
import back from '../assets/back.png';

const SlickArrowLeft = (props) => {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            onClick={onClick}
            style={{ 
                ...style, 
                display: "flex", 
                alignItems: "center",
                justifyContent: "center",
                left: "-30px",
                top: "50%",
                transform: "translateY(-50%)", 
                zIndex: 10,
                width: '40px', 
                height: '40px',
                borderRadius: '50%', 
                backgroundColor: 'white', 
                boxShadow: '0 2px 5px rgba(0,0,0,0.2)', 
                cursor: 'pointer',
            }}
        >
            <img 
                src={back} 
                alt='Prev' 
                style={{ width: '24px', height: '24px', objectFit: 'contain' }} 
            />
        </div>
    );
};
const SlickArrowRight = (props) => {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            onClick={onClick}
            style={{ 
                ...style, 
                display: "flex", 
                alignItems: "center",
                justifyContent: "center",
                right: "-30px", 
                top: "50%",
                transform: "translateY(-50%)", 
                zIndex: 10,
                width: '40px', 
                height: '40px',
                borderRadius: '50%', 
                backgroundColor: 'white', 
                boxShadow: '0 2px 5px rgba(0,0,0,0.2)', 
                cursor: 'pointer',
            }}
        >
            <img 
                src={next} 
                alt='Next' 
                style={{ width: '24px', height: '24px', objectFit: 'contain' }} 
            />
        </div>
    );
};


const FeatureDestination = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        nextArrow: <SlickArrowRight />,
        prevArrow: <SlickArrowLeft />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ] 
    };

    const destinationJson = [
        { name: 'Paris', img: Paris, time: '5 Days - 4 Nights', star: '3 (12 reviews)', price: '69,999' },
        { name: 'Bali', img: Bali, time: '4 Days - 3 Nights', star: '3 (10 reviews)', price: '50,999' },
        { name: 'Tokyo', img: Japan, time: '5 Days - 4 Nights', star: '3 (12 reviews)', price: '75,999' },
        { name: 'Miami Beach', img: USA, time: '5 Days - 4 Nights', star: '3 (12 reviews)', price: '69,999' },
        { name: 'Sajek Valley', img: bangladesh, time: '5 Days - 4 Nights', star: '4 (50 reviews)', price: '69,999' },
    ];

    return (
        <>
            <section className='w-full py-12 md:py-24 lg:pt-32 px-6 md:px-0'>
                <div className='max-w-7xl mx-auto px-4 md:px-6'>
                    <h2 className='text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-3 font-serif'>
                        Featured Destinations
                    </h2>
                    <hr className='text-red-500 w-[200px] bg-red-500 mx-auto h-1 mb-10' />
                    <div className="slider-container relative"> 
                        <Slider {...settings}>
                            {destinationJson.map((destination) => (
                                <div key={destination.name} className='p-2'>
                                    <div className='overflow-hidden border shadow-lg shadow-gray-500 rounded-lg mb-5 mr-5'>
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
                                                <Star width={20}/> {destination.star}
                                            </p>
                                            <p className='text-gray-600 mb-4 mt-2'>
                                                Explore the beauty and culture of {destination.name}
                                            </p>
                                            <div className='flex gap-4'>
                                                <button className='px-3 py-2 bg-red-500 rounded-md text-white transition-colors duration-800 hover:bg-red-500'>
                                                    ${destination.price}
                                                </button>
                                                <button className='px-3 py-2 bg-black rounded-md text-white transition-colors duration-500 hover:bg-gray-400'>
                                                    Learn More
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </Slider>
                    </div>
                </div>
            </section>
        </>
    )
};

export default FeatureDestination;