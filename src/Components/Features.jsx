import React from 'react';
// প্রয়োজনীয় আইকনগুলো lucide-react থেকে ইমপোর্ট করা হলো
import { Plane, Hotel, ClipboardList, Camera, Headset, Shield } from 'lucide-react';

// ------------------------------------------------------------------
// ফিচার ডেটা
// ------------------------------------------------------------------
const features = [
    { 
        icon: Plane, 
        title: 'Exclusive Flight Deals', 
        description: 'Access to premium airlines and discounted airfares for your journey.' 
    },
    { 
        icon: Hotel, 
        title: 'Luxury Accommodations', 
        description: 'Hand-picked hotels and resorts for a comfortable and memorable stay.' 
    },
    { 
        icon: ClipboardList, // কাস্টমাইজড ইটারনারির জন্য
        title: 'Customized Itineraries', 
        description: 'Tailor-made travel plans to suit your preferences and interests.' 
    },
    { 
        icon: Camera, 
        title: 'Guided Tours', 
        description: 'Expert local guides to enhance your travel experience and knowledge.' 
    },
    { 
        icon: Headset, 
        title: '24/7 Customer Support', 
        description: 'Round-the-clock assistance for any queries or emergencies during your trip.' 
    },
    { 
        icon: Shield, 
        title: 'Travel Insurance', 
        description: 'Comprehensive coverage options for a worry-free vacation.' 
    },
];

// ------------------------------------------------------------------
// ✅ WhyChooseUs কম্পোনেন্ট (কম্পোনেন্ট নেম: WhyChooseUs)
// ------------------------------------------------------------------
const WhyChooseUs = () => {
    return (
        <section className="py-16 md:py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                
                {/* 1. হেডার সেকশন */}
                <div className="text-center mb-12 md:mb-16">
                    <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
                        Why Choose Our Travel Services
                    </h2>
                    <p className="text-xl text-gray-600">
                        Discover the unique features that make your journey with us extraordinary
                    </p>
                </div>

                {/* 2. ফিচার কার্ডের গ্রিড (Responsive) */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <div 
                            key={index} 
                            // ছবিতে দেখানো স্টাইল: হালকা গোলাপি ব্যাকগ্রাউন্ড, শ্যাডো, এবং হোভার ইফেক্ট
                            className="bg-pink-50 p-6 rounded-xl shadow-md transition-shadow duration-300 hover:shadow-lg h-full"
                        >
                            {/* আইকন */}
                            <feature.icon className="w-8 h-8 text-red-500 mb-4" />
                            
                            {/* টাইটেল */}
                            <h3 className="text-xl font-bold text-gray-900 mb-2">
                                {feature.title}
                            </h3>
                            
                            {/* বিবরণ */}
                            <p className="text-gray-700">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;