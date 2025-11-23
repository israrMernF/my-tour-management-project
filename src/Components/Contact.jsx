import React from 'react';
import ContactIllustration from '../assets/ContactImg.jpg'; 

const Contact = () => {
    const illustrationSrc = ContactIllustration; 

    return (
        <section className="py-16 md:py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    
                    <div className="hidden lg:block"> 
                        <img 
                            src={illustrationSrc} 
                            alt="Get in Touch Illustration" 
                            width={600}
                            height={400}
                            className="w-full h-auto object-contain rounded-xl shadow-2xl"
                        />
                    </div>
                    <div className="p-4 md:p-8">
                        <h2 className="text-3xl font-bold text-gray-900 mb-8">
                            Get in Touch
                        </h2>
                        
                        <form className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-base font-medium text-gray-700 mb-1">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    placeholder="Enter your name"
                                    className="w-full p-3 border border-gray-300 rounded-md bg-white text-gray-900 placeholder-gray-500 shadow-sm focus:ring-red-500 focus:border-red-500 transition duration-150"
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-base font-medium text-gray-700 mb-1">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    placeholder="Enter your email"
                                    className="w-full p-3 border border-gray-300 rounded-md bg-white text-gray-900 placeholder-gray-500 shadow-sm focus:ring-red-500 focus:border-red-500 transition duration-150"
                                />
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-base font-medium text-gray-700 mb-1">
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    rows="5"
                                    placeholder="Enter your message"
                                    className="w-full p-3 border border-gray-300 rounded-md bg-white text-gray-900 placeholder-gray-500 shadow-sm focus:ring-red-500 focus:border-red-500 resize-none transition duration-150"
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                className="w-full px-4 py-3 bg-red-500 text-white font-bold text-lg rounded-md 
                                        transition-colors duration-300 hover:bg-red-600 shadow-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50"
                            >
                                Send Message
                            </button>

                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;