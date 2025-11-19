import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import banner1 from '../assets/Hero1.jpg'

const Hero = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    return (
        <div className="slider-container overflow-hidden">
            <Slider {...settings}>
                <div>
                    <div className='h-[650px] lg:h-[800px] relative'
                        style={{
                            backgroundImage: `url(${banner1})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center'
                        }}>
                        <div className='absolute inset-0 bg-black opacity-60'></div>
                        <div className='relative max-w-7xl mx-auto'></div>
                        <div className='flex h-[650px] justify-center items-center lg:pt-0 pt-20'></div>
                           <div className='flex flex-col space-y-8 justify-center items-center text-center px-5 md:px-0'>
                            <h1 className='text-white font-bold text-4xl lg:text-6xl'>Discover Your Next Adventure</h1>
                            <p className='text-white lg:text-lg lg:w-[700px]'>Explore breathtaking destinations,create unforgettable memories and embark on the journey of a lifetime.</p>
                           </div>
                    </div>
                </div>
                <div>
                    <h3>2</h3>
                </div>
                <div>
                    <h3>3</h3>
                </div>
                <div>
                    <h3>4</h3>
                </div>
                <div>
                    <h3>5</h3>
                </div>
                <div>
                    <h3>6</h3>
                </div>
            </Slider>
        </div>
    );
}

export default Hero;
