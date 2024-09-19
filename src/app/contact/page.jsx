import Image from 'next/image';
import React from 'react';

const page = () => {
    return (
        <div>
            <div className="relative w-full h-[250px] my-5">
                <Image
                    src="https://i.postimg.cc/rmHyqt55/meeting-business-colleagues-brainstorm-word.jpg"
                    alt="image"
                    width={1200}  // Set appropriate width
                    height={280}  // Set appropriate height
                    className="w-full h-[280px]"
                />
                <div className="absolute items-center w-full h-[280px] left-0 top-0 bg-gradient-to-r from-[#151515]/70 to-[#151515]/0">
                    <div className="text-white bg-white/20 p-5 pl-12 text-center mt-24">
                        <h2 className="text-6xl font-bold mb-2">Contact Us</h2>
                        <p>Meetwise | Contact Us</p>
                    </div>
                </div>
            </div>
            <section className="py-6 bg-[#6b579c]/20 text-gray-900 my-6">
                <div className="grid max-w-6xl grid-cols-1 px-6 mx-auto lg:px-8 md:grid-cols-2 md:divide-x">
                    <div className="py-6 md:py-0 md:px-6 mt-16">
                        <h1 className="text-4xl font-bold">Get in touch</h1>
                        <p className="pt-2 pb-4">Fill in the form to start a conversation</p>
                        <div className="space-y-4">
                            <p className="flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mr-2 sm:mr-6">
                                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"></path>
                                </svg>
                                <span>Fake address, 9999 City</span>
                            </p>
                            <p className="flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mr-2 sm:mr-6">
                                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
                                </svg>
                                <span>123456789</span>
                            </p>
                            <p className="flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mr-2 sm:mr-6">
                                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                                </svg>
                                <span>contact@ecodomain.com</span>
                            </p>
                        </div>
                    </div>
                    <form noValidate="" className="flex flex-col py-6 space-y-6 md:py-0 md:px-6">
                        <label className="block">
                            <span className="mb-1">Full name</span>
                            <input type="text" placeholder="ECO DOMAIN" className="block w-full rounded-md shadow-sm focus:ring focus:ring-opacity-75 focus:ring-violet-600 bg-white p-2" />
                        </label>
                        <label className="block">
                            <span className="mb-1">Email address</span>
                            <input type="email" placeholder="eco@domain.com" className="block w-full rounded-md shadow-sm focus:ring focus:ring-opacity-75 focus:ring-violet-600 bg-white p-2" />
                        </label>
                        <label className="block">
                            <span className="mb-1">Message</span>
                            <textarea rows="3" className="block w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-600 bg-white"></textarea>
                        </label>
                        <button type="button" className="self-center px-8 py-3 text-lg rounded focus:ring hover:ring focus:ring-opacity-75 bg-[#6b579c] text-gray-50 focus:ring-[#6b579c] hover:ring-[#6b579c]">Submit</button>
                    </form>
                </div>
            </section>
        </div>
        // <div>
        //     <div className="relative w-full h-[250px]  my-5">
        //         <Image
        //             src="https://i.postimg.cc/rmHyqt55/meeting-business-colleagues-brainstorm-word.jpg"
        //             alt="image"
        //             className="w-full h-[280px]" />
        //         <div className="absolute items-center w-full h-[280px] left-0 top-0 bg-gradient-to-r from-[#151515]/70 to-[#151515]/0">
        //             <div className="text-white pl-12 text-center mt-24">
        //                 <h2 className="text-6xl font-bold mb-2">Contact Us</h2>
        //                 <p>Meetwise | Contact Us</p>
        //             </div>
        //         </div>
        //     </div>
        //     <section className="py-6 bg-blue-50 text-gray-900 my-6">
        //         <div className="grid max-w-6xl grid-cols-1 px-6 mx-auto lg:px-8 md:grid-cols-2 md:divide-x">
        //             <div className="py-6 md:py-0 md:px-6 mt-16">
        //                 <h1 className="text-4xl font-bold">Get in touch</h1>
        //                 <p className="pt-2 pb-4">Fill in the form to start a conversation</p>
        //                 <div className="space-y-4">
        //                     <p className="flex items-center">
        //                         <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mr-2 sm:mr-6">
        //                             <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"></path>
        //                         </svg>
        //                         <span>Fake address, 9999 City</span>
        //                     </p>
        //                     <p className="flex items-center">
        //                         <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mr-2 sm:mr-6">
        //                             <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
        //                         </svg>
        //                         <span>123456789</span>
        //                     </p>
        //                     <p className="flex items-center">
        //                         <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mr-2 sm:mr-6">
        //                             <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
        //                             <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
        //                         </svg>
        //                         <span>contact@ecodomain.com</span>
        //                     </p>
        //                 </div>
        //             </div>
        //             <form noValidate="" className="flex flex-col py-6 space-y-6 md:py-0 md:px-6">
        //                 <label className="block">
        //                     <span className="mb-1">Full name</span>
        //                     <input type="text" placeholder="ECO DOMAIN" className="block w-full rounded-md shadow-sm focus:ring focus:ring-opacity-75 focus:ring-violet-600 bg-white p-2" />
        //                 </label>
        //                 <label className="block">
        //                     <span className="mb-1">Email address</span>
        //                     <input type="email" placeholder="eco@domain.com" className="block w-full rounded-md shadow-sm focus:ring focus:ring-opacity-75 focus:ring-violet-600 bg-white p-2" />
        //                 </label>
        //                 <label className="block">
        //                     <span className="mb-1">Message</span>
        //                     <textarea rows="3" className="block w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-600 bg-white"></textarea>
        //                 </label>
        //                 <button type="button" className="self-center px-8 py-3 text-lg rounded focus:ring hover:ring focus:ring-opacity-75 bg-[#23BE0A] text-gray-50 focus:ring-[#23BE0A] hover:ring-[#23BE0A]">Submit</button>
        //             </form>
        //         </div>
        //     </section>
        // </div>
    );
};

export default page;