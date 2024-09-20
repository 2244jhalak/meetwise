/* eslint-disable react/no-unescaped-entities */
"use client";

import Image from 'next/image';
import React, { useRef } from 'react';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';

const Carousel = () => {
    const sliderRef = useRef(null);

    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
    };

    return (
        <div className="relative md:p-14 p-5 bg-blue-50 z-10 flex justify-between items-center w-full">
            {/* Image Section */}
            <div className="relative w-1/2">
                <Slider ref={sliderRef} {...settings}>
                    <div className='mt-1'>
                        <div>
                            <Image
                                src="https://i.postimg.cc/6646C3GF/freepik-export-2024091804480677-VZ.png"
                                alt="Sample 1"
                                layout="responsive"
                                width={500}
                                height={500}
                                className="object-cover md:rounded-[50px] lg:rounded-[50px] rounded-2xl" // Rounded corners
                                style={{ clipPath: 'polygon(0 0, 100% 0, 100% 75%, 0% 100%)' }}
                            />
                            <div className='text-end md:-mt-20'>
                                <h3 className='text-xl font-bold'>Sakura</h3>
                                <p className='text-gray-500 text-md'>CEO at Zoom</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div>
                            <Image
                                src="https://i.postimg.cc/HnV2GrPX/brunette-businesswoman-with-coffee.jpg"
                                alt="Sample 2"
                                layout="responsive"
                                width={500}
                                height={500}
                                className="object-cover md:rounded-[50px] lg:rounded-[50px] rounded-2xl" // Rounded corners
                                style={{ clipPath: 'polygon(0 0, 100% 0, 100% 75%, 0% 100%)' }}
                            />
                            <div className='text-end md:-mt-20'>
                                <h3 className='text-xl font-bold'>Alexa</h3>
                                <p className='text-gray-500 text-md'>CEO at Google Meet</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div>
                            <Image
                                src="https://i.postimg.cc/76M1Jpfs/brunette-businesswoman-showing-her-tablet.jpg"
                                alt="Sample 3"
                                layout="responsive"
                                width={500}
                                height={500}
                                className="object-cover md:rounded-[50px] lg:rounded-[50px] rounded-2xl" // Rounded corners
                                style={{ clipPath: 'polygon(0 0, 100% 0, 100% 75%, 0% 100%)' }}
                            />
                            <div className='text-end md:-mt-20'>
                                <h3 className='text-xl font-bold'>Sephra</h3>
                                <p className='text-gray-500 text-md'>CEO at Microsoft Team</p>
                            </div>
                        </div>
                    </div>
                </Slider>
            </div>

            <div className='absolute bg-white p-4 shadow-lg lg:-mt-48 md:-mt-36 lg:ml-[450px] md:ml-[280px] ml-56 space-y-2 rounded-lg mr-5 md:max-w-2xl max-w-36'>
                <p className='lg:text-[38px] md:text-3xl text-lg  font-bold inline-block leading-snug rounded-lg'>"The accuracy of the transcryptions is impressive, and the ability to search through meetings"</p>
            </div>


            {/* Control Buttons */}
            <div className="w-1/2 relative flex gap-3 md:justify-start md:items-start pl-5 lg:mt-96 md:mt-80 mt-40">
                <button
                    className="bg-gray-800 text-white p-2 px-4 rounded-full shadow-lg hover:bg-gray-600 transition-colors duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-gray-400"
                    onClick={() => sliderRef.current.slickPrev()} // Go to previous slide
                >
                    <span className="text-2xl">&lt;</span> {/* Stylish left arrow (<) */}
                </button>
                <button
                    className="bg-gray-800 text-white p-2 px-4 rounded-full shadow-lg hover:bg-gray-600 transition-colors duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-gray-400"
                    onClick={() => sliderRef.current.slickNext()} // Go to next slide
                >
                    <span className="text-2xl">&gt;</span> {/* Stylish right arrow (>) */}
                </button>
            </div>
        </div>
    );
};

export default Carousel;