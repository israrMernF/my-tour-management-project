import React from 'react';
import TopBanner from '../assets/TopBanner.jpg'; 
import BOAT_IMAGE from '../assets/about.jpeg'; 
import TRIP_GIF from '../assets/best-price.gif'; 
import BEST_PRICE_GIF from '../assets/trip.gif'; 
import FIRE_TIME_GIF from '../assets/fire-time.gif'; 


function FeatureCard({ iconSrc, customIconText, title, description }) {
    return (
        <div className="bg-white p-6 rounded-lg shadow-md flex items-start space-x-4 transition duration-300 hover:shadow-lg border border-gray-100">
            <div className="flex-shrink-0 w-12 h-12 rounded-full flex flex-col items-center justify-center text-red-500 relative bg-red-100/50"> 
                <img src={iconSrc} alt={title} className="w-8 h-8 object-contain" />
                {customIconText && (
                    <div 
                        className="absolute bottom-0 text-xs font-bold text-white bg-blue-500 rounded-full px-1.5 py-0.5"
                        style={{ transform: 'translateY(50%) scale(0.8)' }} 
                    >
                        {customIconText}
                    </div>
                )}
            </div>
            <div>
                <h4 className="text-lg font-semibold text-gray-800 mb-1">{title}</h4>
                <p className="text-sm text-gray-500">{description}</p>
            </div>
        </div>
    );
}


export default function About() {
    const longText = `
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Voluptatibus incidunt aperiam vel 
        laborum dolor officia, tenetur sint qui! Officiis placeat iste natus ratione perspiciatis rerum 
        quo magnam commodi pariatur minimis dicta maiores dolor laborum debitis minus exercitationem 
        quid adipisci. Aut, tempor. Suscipit iste impedit soluta omnis laborum quaspmem esse. 
        Eos ipsam sed eligendi architecto. Libero nostrum tempore repellit iste assumenda nulla 
        mollitia quidem maxime totam delectus itaque? Quibusdam impedit, cum quo tempore et velit! 
        Voluptate rerum possimus vel numquam perspiciatis sint aliquid iusto iure sequi alias similique 
        ea pariatur officiis laborum eligendi porro eos perferendis consectetur, et ex tempore. Facilis, 
        incidunt? Libero nostrum tempore repellit iste assumenda nulla mollitia quidem maxime totam 
        delectus itaque? Quibusdam impedit, cum quo tempore et velit! Voluptate rerum possimus vel 
        numquam perspiciatis sint aliquid iusto iure sequi alias similique ea pariatur officiis 
        laborum eligendi porro eos perferendis consectetur, et ex tempore. Facilis, incidunt? 
        Libero nostrum tempore repellit iste assumenda nulla mollitia quidem maxime totam delectus 
        itaque? Quibusdam impedit, cum quo tempore et velit! Voluptate rerum possimus vel numquam 
        perspiciatis sint aliquid iusto iure sequi alias similique ea pariatur officiis laborum 
        eligendi porro eos perferendis consectetur, et ex tempore. Facilis, incidunt? Laborum, officiis a!
    `;

    return (
        <div className="w-full">
            <div 
                className="relative w-full h-64 md:h-80 flex items-center justify-center text-white"
                style={{
                    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${TopBanner})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            >
                <h1 className="text-4xl md:text-6xl font-extrabold z-10">
                    ABOUT US
                </h1>
            </div>
            <section className="py-12 md:py-20 bg-gray-50">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col lg:flex-row lg:space-x-12 mb-12 md:mb-16">
                        <div className="relative w-full lg:w-3/5 mb-8 lg:mb-0">
                            <img 
                                src={BOAT_IMAGE}
                                alt="Adventure trip on a boat" 
                                className="w-full h-auto object-cover rounded-lg shadow-xl"
                            />
                            <div 
                                className="absolute top-1/2 -translate-y-1/2 left-0 transform -translate-x-4 bg-red-500 text-white font-bold px-8 py-3 rounded-md shadow-lg text-lg"
                                style={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0% 100%, 8% 50%)' }}
                            >
                                HOW WE ARE BEST <br/> FOR TRAVEL!
                            </div>
                        </div>
                        <div className="w-full lg:w-2/5 space-y-6">
                            <FeatureCard
                                iconSrc={BEST_PRICE_GIF}
                                customIconText="50+" 
                                title="50+ Destination"
                                description="We offer the best travel experiences with personalized services and unbeatable prices."
                            />
                            
                            <FeatureCard
                                iconSrc={TRIP_GIF}
                                customIconText="PRICE" 
                                title="Best Price"
                                description="We offer the best travel experiences with personalized services and unbeatable prices."
                            />
                            
                            <FeatureCard
                                iconSrc={FIRE_TIME_GIF}
                                title="Super Fast Booking"
                                description="We offer the best travel experiences with personalized services and unbeatable prices."
                            />
                        </div>
                    </div>
                    <div className="w-full mt-8 pt-4">
                        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-6">
                            How We Are Best For Travel!
                        </h2>
                        <p className="text-gray-600 leading-relaxed text-base">
                            {longText}
                        </p>
                    </div>

                </div>
            </section>
        </div>
    );
}