/* eslint-disable react/no-unescaped-entities */

import Image from 'next/image';
import { motion } from 'framer-motion'
import { useLanguage } from '../context/LanguageContext';
import FeatureCard1 from './FeatureCard1';
import FeatureCard2 from './FeatureCard2';
import FeatureCard3 from './FeatureCard3';
import FeatureCard4 from './FeatureCard4';
import FeatureCard5 from './FeatureCard5';
import FeatureCard6 from './FeatureCard6';
import React from "react";
import Slider from "react-slick";
const translations = {
    en: {
        title: 'Our All Features',
        description: 'Discover powerful features designed to simplify scheduling and enhance productivity.'
    },
    bn: {
        title: 'আমাদের সমস্ত বৈশিষ্ট্য',
        description: 'সূচি সহজ ও উৎপাদনশীলতা বৃদ্ধির জন্য শক্তিশালী বৈশিষ্ট্য আবিষ্কার করুন।'
    },
    fr: {
        title: 'Nos toutes les fonctionnalités',
        description: 'Découvrez des fonctionnalités puissantes pour simplifier la planification et améliorer la productivité.'
    },
    es: {
        title: 'Todas nuestras características',
        description: 'Descubre características potentes para simplificar la programación y mejorar la productividad.'
    },


}

const AutoRecord = () => {

    const { language } = useLanguage();
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <div id='feature' className=' bg-gray-100 md:px-14 py-10 pt-20 container mx-auto'>

            <div className='mb-7 md:mx-auto text-center pb-7 flex md:flex-row flex-col items-center justify-between'>
                <div className='relative font-raleway font-bold text-center md:text-left text-2xl md:text-5xl md:w-1/2'>
                    <h1 className='mb-5 text-black'>{translations[language].title}</h1>
                    <div className='absolute bottom-0 left-[30%] md:left-0 border-b-2 border-green-600 w-[40%]  md:hover:w-[50%] transition-all duration-300 ease-in-out p-4 cursor-pointer mb-2'></div>
                </div>
                <p className='text-lg font-raleway md:w-1/2 text-gray-700 mt-4 md:text-left text-center'>{translations[language].description}</p>

            </div>
            <div className="slider-container gap-8">
                <Slider {...settings}>
                    {/* card no 1 create meeting */}
                    <div>
                        <div className="card card-compact m-2 bg-gray-800 md:h-[400px] shadow-xl">
                            <figure className="relative">
                                <Image
                                    className='w-full h-72 object-cover'  // Set fixed height here
                                    src="/banner/banner3.jpg"
                                    alt="Description of the image"
                                    width={1000}
                                    height={1000}
                                />
                                {/* Gradient overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black to-gray-800 opacity-30"></div>
                            </figure>
                            {/* Create meeting card information */}
                            <FeatureCard1 />
                        </div>
                    </div>

                    {/* card no 2 for Time zone setting */}
                    <div>
                        <div className="card card-compact m-2 bg-gray-800 md:h-[400px] shadow-xl">
                            <figure className="relative">
                                <Image
                                    className='w-full h-72 object-cover' // Set fixed height here
                                    src="/banner/different-language-speech-bubble-hello-concept.jpg"
                                    alt="Description of the image"
                                    width={1000}
                                    height={1000}
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black to-gray-800 opacity-30"></div>
                            </figure>
                            {/* Timezone card information */}
                            <FeatureCard2 />
                        </div>
                    </div>

                    {/* card no 3 for meeting library */}
                    <div>
                        <div className="card card-compact m-2 bg-gray-800 md:h-[400px] shadow-xl">
                            <figure className="relative">
                                <Image
                                    className='w-full h-72 object-cover' // Set fixed height here
                                    src="/banner/meetinglibrary.jpg"
                                    alt="Description of the image"
                                    width={1000}
                                    height={1000}
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black to-gray-800 opacity-30"></div>
                            </figure>
                            {/* Meeting library card info */}
                            <FeatureCard3 />
                        </div>
                    </div>

                    {/* card no 4 update profile */}
                    <div>
                        <div className="card card-compact m-2 bg-gray-800 md:h-[400px] shadow-xl">
                            <figure className="relative">
                                <Image
                                    className='w-full h-72 object-cover' // Set fixed height here
                                    src="/banner/banner5.jpg"
                                    alt="Description of the image"
                                    width={1000}
                                    height={1000}
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black to-gray-800 opacity-30"></div>
                            </figure>
                            <FeatureCard4 />
                        </div>
                    </div>

                    {/* card no 5 meeting availability */}
                    <div>
                        <div className="card card-compact m-2 bg-gray-800 md:h-[400px] shadow-xl">
                            <figure className="relative">
                                <Image
                                    className='w-full h-72 object-cover' // Set fixed height here
                                    src="/banner/banner6.jpg"
                                    alt="Description of the image"
                                    width={1000}
                                    height={1000}
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black to-gray-800 opacity-30"></div>
                            </figure>
                            {/* Meeting availability card info */}
                            <FeatureCard5 />
                        </div>
                    </div>

                    {/* card no 6 selecting meeting */}
                    <div>
                        <div className="card card-compact m-2 bg-gray-800 md:h-[400px] shadow-xl">
                            <figure className="relative">
                                <Image
                                    className='w-full h-72 object-cover' // Set fixed height here
                                    src="/banner/calendar-schedule-list.jpg"
                                    alt="Description of the image"
                                    width={1000}
                                    height={1000}
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black to-gray-800 opacity-30"></div>
                            </figure>
                            {/* Selected meeting card info */}
                            <FeatureCard6 />
                        </div>
                    </div>
                </Slider>


            </div>

        </div>
    );
};

export default AutoRecord;
