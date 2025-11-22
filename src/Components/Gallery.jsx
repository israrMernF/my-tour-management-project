import React from 'react';
import image1 from '../assets/bangladesh.jpg.jpg';
import image2 from '../assets/banner.jpg';
import image3 from '../assets/Hero1.jpg';
import image4 from '../assets/Hero2.jpg';
import image5 from '../assets/India.jpg';
import image6 from '../assets/Japan.jpg';
import image7 from '../assets/USA.jpg.jpg';
import image8 from '../assets/Paris.jpg';
import image9 from '../assets/Indonesia.jpg';


const galleryImages = [
    
    { id: 1, title: 'Taj Mahal', imgSrc: image1 }, 
    { id: 2, title: 'Beach Swing', imgSrc: image2 }, 
    { id: 3, title: 'Venice Colors', imgSrc: image3 },
    { id: 4, title: 'Thai Island', imgSrc: image4 }, 
    { id: 5, title: 'Swiss Alps', imgSrc: image5 }, 
    { id: 6, title: 'Eiffel Tower', imgSrc: image6 },
    { id: 7, title: 'Water Villa', imgSrc: image7 }, 
    { id: 8, title: 'Asian Temple', imgSrc: image8 }, 
    { id: 9, title: 'Fuji Sunset', imgSrc: image9 }, 
];


const Gallery = () => {
    return (
        <section className="py-16 md:py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="text-center mb-12 md:mb-16">
                    <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-2 font-serif">
                        Our Gallery
                    </h2>

                    <div className="mx-auto w-24 h-1 bg-red-500"></div>
                </div>

                
                <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {galleryImages.map((image) => (
                        <div
                            key={image.id}
                            className="overflow-hidden rounded-xl shadow-lg transform transition-transform duration-300 hover:scale-[1.02] cursor-pointer"
                        >
                            <img
                                src={image.imgSrc}
                                alt={image.title}
                                className="w-full h-full object-cover aspect-[4/3] md:aspect-[3/2]"
                                loading="lazy"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Gallery;