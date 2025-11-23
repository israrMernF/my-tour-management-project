import React from 'react';
import GalleryBannerImage from '../assets/TopBanner.jpg'; 
import GalleryContentComponent from '../Components/Gallery.jsx'; 


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


function Gallery() {
    return (
        <div className="w-full">
            
            <TopBanner 
                title="GALLERY" 
                backgroundImageSrc={GalleryBannerImage} 
            />
            <GalleryContentComponent />
        </div>
    );
}

export default Gallery;