// import React from 'react';
// // Lucide icons
// import { Clock, Star } from 'lucide-react';

// // ----------------------------------------------------
// // ⭐ ডেটা: আপনার গন্তব্যস্থলের তথ্য (আপনি ইমেজ URL পরিবর্তন করতে পারেন)
// // ----------------------------------------------------
// const destinations = [
//     {
//         id: 1,
//         name: "India",
//         duration: "5 Days - 4 Nights",
//         rating: 3,
//         reviews: 12,
//         price: "69,999",
//         description: "Experience the beauty and culture of India",
//         image: "assests/bangladesh.jpg", 
//     },
//     {
//         id: 2,
//         name: "Paris",
//         duration: "5 Days - 4 Nights",
//         rating: 3,
//         reviews: 12,
//         price: "69,999",
//         description: "Experience the beauty and culture of Paris",
//         image: "https://placehold.co/600x400/ef4444/ffffff?text=Paris+Image", 
//     },
//     {
//         id: 3,
//         name: "Tokyo",
//         duration: "5 Days - 4 Nights",
//         rating: 3,
//         reviews: 12,
//         price: "69,999",
//         description: "Experience the beauty and culture of Tokyo",
//         image: "https://placehold.co/600x400/dc2626/ffffff?text=Tokyo+Image", 
//     },
//     {
//         id: 4,
//         name: "Baliya",
//         duration: "5 Days - 4 Nights",
//         rating: 3,
//         reviews: 12,
//         price: "69,999",
//         description: "Experience the beauty and culture of Baliya",
//         image: "https://placehold.co/600x400/b91c1c/ffffff?text=Baliya+Image", 
//     },
//     // স্লাইডারের পরিবর্তে গ্রিডে আরও সুন্দরভাবে দেখানোর জন্য ডেটা যোগ করা হলো
//     {
//         id: 5,
//         name: "New York",
//         duration: "5 Days - 4 Nights",
//         rating: 4,
//         reviews: 20,
//         price: "75,000",
//         description: "Experience the bustling energy of New York City.",
//         image: "https://placehold.co/600x400/991b1b/ffffff?text=NYC+Image", 
//     },
//     {
//         id: 6,
//         name: "Cox's Bazar",
//         duration: "3 Days - 2 Nights",
//         rating: 5,
//         reviews: 50,
//         price: "15,000",
//         description: "Enjoy the world's longest natural sea beach.",
//         image: "https://placehold.co/600x400/4c0519/ffffff?text=Cox's+Bazar+Image", 
//     },
// ];

// // ----------------------------------------------------
// // ⭐ ডেস্টিনেশন কার্ড কম্পোনেন্ট (ছবির সাথে হুবহু মিল)
// // ----------------------------------------------------
// const DestinationCard = ({ dest }) => {
//     return (
//         // কার্ডের মূল ডিজাইন ও শ্যাডো
//         <div className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-100 group">
            
//             {/* Image Section */}
//             <div className="h-48 overflow-hidden">
//                 <img 
//                     src={dest.image} 
//                     alt={dest.name} 
//                     className="w-full h-full object-cover transition duration-300 group-hover:scale-[1.03]"
//                     onError={(e) => {
//                         e.target.onerror = null; 
//                         e.target.src = "https://placehold.co/600x400/cccccc/000000?text=Image+Missing";
//                     }}
//                 />
//             </div>
            
//             {/* Card Content (Bottom Part) */}
//             <div className="p-4 bg-white">
                
//                 {/* Duration (5 Days - 4 Nights) - ছবির উপরের লেখা */}
//                 <div className="flex items-center text-sm text-gray-500 mb-2">
//                     <Clock className="w-4 h-4 mr-1 text-gray-400" />
//                     <span>{dest.duration}</span>
//                 </div>

//                 {/* Destination Name - ছবির মাঝের লেখা */}
//                 <h3 className="text-xl font-bold text-gray-800 mb-2">
//                     {dest.name}
//                 </h3>

//                 {/* Rating and Reviews - ছবিতে ৩টি স্টার দেখানো হয়েছে */}
//                 <div className="flex items-center text-sm text-red-500 mb-3">
//                     {/* ফিক্সড ৩ স্টার রেন্ডার করা হলো */}
//                     {[...Array(3)].map((_, i) => (
//                         <Star key={i} className="w-4 h-4 fill-red-500 text-red-500" />
//                     ))}
//                     <span className="text-gray-500 ml-1">({dest.reviews} reviews)</span>
//                 </div>
                
//                 {/* Description - ছবির নিচের লেখা */}
//                 <p className="text-gray-600 mb-4 text-sm line-clamp-2 h-10">
//                     {dest.description}
//                 </p>

//                 {/* Action Buttons - দুটি বাটন (লাল এবং কালো) */}
//                 <div className="flex space-x-3 mt-4">
//                     {/* Price Button (Red) */}
//                     <button className="flex-1 bg-red-500 text-white font-bold py-2 rounded-lg shadow-md hover:bg-red-600 transition duration-200 text-sm">
//                         ${dest.price}
//                     </button>
//                     {/* Learn More Button (Black) */}
//                     <button className="flex-1 bg-gray-900 text-white font-bold py-2 rounded-lg shadow-md hover:bg-gray-700 transition duration-200 text-sm">
//                         Learn More
//                     </button>
//                 </div>
//             </div>
//         </div>
//     );
// };


// // ----------------------------------------------------
// // ⭐ মূল কম্পোনেন্ট: FeaturedDestinationsSlider (এখন গ্রিড হিসেবে কাজ করবে)
// // ----------------------------------------------------
// const FeaturedDestinationsSlider = () => {
    
//     // react-slick এর সমস্যা সমাধানের জন্য স্লাইডার ফাংশনগুলো রিমুভ করা হলো
//     // এখন এটি একটি রেসপন্সিভ গ্রিড হিসেবে কাজ করবে।

//     return (
//         <section className="py-16 md:py-24 bg-white font-['Inter']">
//             <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                
//                 {/* Section Header - ছবির মতো স্টাইল */}
//                 <div className="text-center mb-12 md:mb-16">
//                     <h2 className="text-4xl font-serif font-extrabold text-gray-900 mb-4 inline-block relative">
//                         Featured Destinations
//                         {/* ছবির নিচের লাল লাইন */}
//                         <span className="absolute left-1/2 transform -translate-x-1/2 bottom-0 h-1 w-20 bg-red-500 rounded-full"></span>
//                     </h2>
//                 </div>

//                 {/* Destinations Grid (Slider এর পরিবর্তে Responsive Grid) */}
//                 {/* এটি মোবাইলে ১ কলাম, ট্যাবলেটে ২ কলাম এবং ডেস্কটপে ৪ কলাম দেখাবে, যা ছবির মতো লেআউট দেবে */}
//                 <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
//                     {destinations.map((dest) => (
//                         <DestinationCard key={dest.id} dest={dest} />
//                     ))}
//                 </div>
                
//                 {/* ছবিতে তীর চিহ্ন (Arrows) ছিল, যা এখন স্লাইডার না থাকায় দেখানো সম্ভব নয়। 
//                     তাই নিচে একটি View More বাটন যোগ করা হলো।
//                 */}
//                 <div className="mt-16 text-center">
//                     <button className="bg-red-500 text-white font-bold py-3 px-10 rounded-full shadow-lg hover:bg-red-600 transition duration-300 text-lg">
//                         View More Destinations
//                     </button>
//                 </div>

//             </div>
//         </section>
//     );
// }

// export default FeaturedDestinationsSlider;


import React from 'react'

function FeatureDestination = () => {
    const destinationJson = [
        { name: 'Paris', img: Paris, time: '5 Days - 4 Nights', star:'3 (12 reviews)', price:'69,999' },
        { name: 'Bali', img: Bali, time: '4 Days - 3 Nights', star:'3 (10 reviews)', price:'50,999' },
        { name: 'Tokyo', img: Paris, time: '5 Days - 4 Nights', star:'3 (12 reviews)', price:'75,999' },
        { name: 'Miami Beach', img: USA, time: '5 Days - 4 Nights', star:'3 (12 reviews)', price:'69,999' },
        { name: 'Sajek Valley', img: bangladesh, time: '5 Days - 4 Nights', star:'4 (50 reviews)', price:'69,999' },
    ]
  return (
    <div>

    </div>
  )
}

export default FeatureDestination