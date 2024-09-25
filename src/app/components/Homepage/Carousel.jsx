"use client";

import Image from 'next/image';
import React, { useRef } from 'react';
import Slider from 'react-slick';
import { useLanguage } from '../context/LanguageContext';

const Carousel = () => {
    const sliderRef = useRef(null);

    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
    };

    
    const { language } = useLanguage();

    const content = {
        en: {
            title: ["Sakura", "Alexa", "Sephra"],
            position: ["CEO at Zoom", "CEO at Google Meet", "CEO at Microsoft Team"],
            quote: "The accuracy of the transcriptions is impressive, and the ability to search through meetings."
        },
        bn: {
            title: ["সাকুরা", "অ্যালেক্সা", "সেফরা"],
            position: ["জুমের CEO", "গুগল মিটের CEO", "মাইক্রোসফট টিমের CEO"],
            quote: "রেকর্ডিংয়ের সঠিকতা চমৎকার, এবং মিটিংগুলোর মধ্যে খোঁজার সক্ষমতা."
        },
        es: {
            title: ["Sakura", "Alexa", "Sephra"],
            position: ["CEO en Zoom", "CEO en Google Meet", "CEO en Microsoft Team"],
            quote: "La precisión de las transcripciones es impresionante, y la capacidad de buscar en las reuniones."
        },
        fr: {
            title: ["Sakura", "Alexa", "Sephra"],
            position: ["PDG chez Zoom", "PDG chez Google Meet", "PDG chez Microsoft Team"],
            quote: "La précision des transcriptions est impressionnante, et la capacité de rechercher dans les réunions."
        }
    };

    return (
        <div className="relative md:p-14 p-5 bg-blue-50 z-10 flex justify-between items-center w-full">
            {/* Image Section */}
            <div className="relative w-1/2">
                <Slider ref={sliderRef} {...settings}>
                    {content[language].title.map((name, index) => (
                        <div key={index}>
                            <div>
                                {/* <Image
                                    src={`https://example.com/image${index + 1}.png`}
                                    alt={`Sample ${index + 1}`}
                                    layout="responsive"
                                    width={500}
                                    height={500}
                                    className="object-cover md:rounded-[50px] lg:rounded-[50px] rounded-2xl"
                                    style={{ clipPath: 'polygon(0 0, 100% 0, 100% 75%, 0% 100%)' }}
                                /> */}
                                <div className='text-end md:-mt-20'>
                                    <h3 className='text-xl font-bold'>{name}</h3>
                                    <p className='text-gray-500 text-md'>{content[language].position[index]}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>

            <div className='absolute bg-white p-4 shadow-lg lg:-mt-48 md:-mt-36 lg:ml-[450px] md:ml-[280px] ml-56 space-y-2 rounded-lg mr-5 md:max-w-2xl max-w-36'>
                <p className='lg:text-[38px] md:text-3xl text-lg font-bold inline-block leading-snug rounded-lg'>{content[language].quote}</p>
            </div>

            {/* Control Buttons */}
            <div className="w-1/2 relative flex gap-3 md:justify-start md:items-start pl-5 lg:mt-96 md:mt-80 mt-40">
                <button
                    className="bg-gray-800 text-white p-2 px-4 rounded-full shadow-lg hover:bg-gray-600 transition-colors duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-gray-400"
                    onClick={() => sliderRef.current.slickPrev()} // Go to previous slide
                >
                    <span className="text-2xl">&lt;</span>
                </button>
                <button
                    className="bg-gray-800 text-white p-2 px-4 rounded-full shadow-lg hover:bg-gray-600 transition-colors duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-gray-400"
                    onClick={() => sliderRef.current.slickNext()} // Go to next slide
                >
                    <span className="text-2xl">&gt;</span>
                </button>
            </div>
        </div>
    );
};

export default Carousel;
