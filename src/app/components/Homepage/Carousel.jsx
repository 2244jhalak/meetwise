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
            heading: "Testimonials",
            paragraph: "Our users’ feedback is the driving force behind everything we do. Here’s what they have to say about how our platform has made scheduling meetings easier and more efficient for their businesses.",
            slides: [
                {
                    title: "Sakura",
                    position: "CEO at Zoom",
                    image: "/carousel/freepik-export-2024091804480677VZ.png",
                    quote: "The accuracy of the transcriptions is impressive, and the ability to search through meetings.",
                },
                {
                    title: "Alexa",
                    position: "CEO at Google Meet",
                    image: "/carousel/brunette-businesswoman-with-coffee.jpg",
                    quote: "It's incredibly easy to schedule meetings and avoid conflicts.",
                },
                {
                    title: "Sephra",
                    position: "CEO at Microsoft Team",
                    image: "/carousel/brunette-businesswoman-showing-her-tablet.jpg",
                    quote: "The user experience is outstanding, allowing seamless communication.",
                },
            ],
        },
        bn: {
            heading: "প্রশংসাপত্র",
            paragraph: "আমাদের ব্যবহারকারীদের প্রতিক্রিয়া আমাদের কাজের পেছনের মূল চালিকা শক্তি। তারা কীভাবে আমাদের প্ল্যাটফর্ম তাদের ব্যবসার জন্য মিটিং নির্ধারণ করা সহজ এবং আরও দক্ষ করে তুলেছে তা এখানে বলা হয়েছে।",
            slides: [
                {
                    title: "সাকুরা",
                    position: "জুম-এর সিইও",
                    image: "/carousel/freepik-export-2024091804480677VZ.png",
                    quote: "ট্রান্সক্রিপশনগুলির নির্ভুলতা চমৎকার এবং মিটিংগুলির মধ্যে অনুসন্ধান করার ক্ষমতা।",
                },
                {
                    title: "আলেক্সা",
                    position: "গুগল মিট-এর সিইও",
                    image: "/carousel/brunette-businesswoman-with-coffee.jpg",
                    quote: "মিটিংগুলি নির্ধারণ করা এবং দ্বন্দ্ব এড়ানো অবিশ্বাস্যভাবে সহজ।",
                },
                {
                    title: "সেফ্রা",
                    position: "মাইক্রোসফ্ট টিমের সিইও",
                    image: "/carousel/brunette-businesswoman-showing-her-tablet.jpg",
                    quote: "ব্যবহারকারীর অভিজ্ঞতা অসাধারণ, যা নিরবচ্ছিন্ন যোগাযোগকে সম্ভব করে।",
                },
            ],
        },
        fr: {
            heading: "Témoignages",
            paragraph: "Les retours de nos utilisateurs sont la force motrice derrière tout ce que nous faisons. Voici ce qu'ils ont à dire sur la façon dont notre plateforme a facilité la planification des réunions et amélioré leur efficacité.",
            slides: [
                {
                    title: "Sakura",
                    position: "PDG de Zoom",
                    image: "/carousel/freepik-export-2024091804480677VZ.png",
                    quote: "La précision des transcriptions est impressionnante, et la capacité à rechercher dans les réunions.",
                },
                {
                    title: "Alexa",
                    position: "PDG de Google Meet",
                    image: "/carousel/brunette-businesswoman-with-coffee.jpg",
                    quote: "C'est incroyablement facile de programmer des réunions et d'éviter les conflits.",
                },
                {
                    title: "Sephra",
                    position: "PDG de Microsoft Team",
                    image: "/carousel/brunette-businesswoman-showing-her-tablet.jpg",
                    quote: "L'expérience utilisateur est exceptionnelle, permettant une communication fluide.",
                },
            ],
        },
        es: {
            heading: "Testimonios",
            paragraph: "Los comentarios de nuestros usuarios son la fuerza impulsora detrás de todo lo que hacemos. Aquí está lo que tienen que decir sobre cómo nuestra plataforma ha facilitado la programación de reuniones y mejorado la eficiencia de sus negocios.",
            slides: [
                {
                    title: "Sakura",
                    position: "CEO de Zoom",
                    image: "/carousel/freepik-export-2024091804480677VZ.png",
                    quote: "La precisión de las transcripciones es impresionante, y la capacidad de buscar en las reuniones.",
                },
                {
                    title: "Alexa",
                    position: "CEO de Google Meet",
                    image: "/carousel/brunette-businesswoman-with-coffee.jpg",
                    quote: "Es increíblemente fácil programar reuniones y evitar conflictos.",
                },
                {
                    title: "Sephra",
                    position: "CEO de Microsoft Team",
                    image: "/carousel/brunette-businesswoman-showing-her-tablet.jpg",
                    quote: "La experiencia del usuario es sobresaliente, permitiendo una comunicación fluida.",
                },
            ],
        },
    };

    const currentContent = content[language] || {};

    return (
        <div className='bg-gray-100 lg:p-14 p-5 '>
            <div className='flex flex-col items-center justify-center '>
               
                <h1 className="text-2xl pb-3 font-semibold my-4 md:my-8 rounded-2xl  border-b-2 border-blue-500 text-center mx-auto text-black lg:text-3xl md:w-1/4 dark:text-white">  {currentContent.heading || "Testimonials"}</h1>
            
                   
             

                <p className='text-lg font-raleway md:w-1/2 text-gray-500 mt-4 text-center my-8'>
                    {currentContent.paragraph || "Our users’ feedback is the driving force behind everything we do. Here’s what they have to say about how our platform has made scheduling meetings easier and more efficient for their businesses."}
                </p>
            </div>
            <div className="relative  flex justify-between items-center w-full">
                {/* Image, Name, Position, and Quote in one slider */}
                <div className="relative w-full">
                    <Slider ref={sliderRef} {...settings}>
                        {currentContent.slides?.map((slide, index) => (
                            <div key={index} className="flex flex-col md:flex-row items-center justify-between">
                                <div className="relative w-1/2">
                                    <Image
                                        src={slide.image}
                                        alt={`Slide ${index + 1}`}
                                        layout="responsive"
                                        width={500}
                                        height={500}
                                        className="object-cover md:rounded-[50px] lg:rounded-[50px] rounded-2xl"
                                        style={{ clipPath: 'polygon(0 0, 100% 0, 100% 75%, 0% 100%)' }}
                                    />
                                      <div className="absolute top-0 left-0 right-0 h-1/3 bg-gradient-to-b from-black/40 to-transparent rounded-t-[50px]" />
                                    <div className="text-end md:-mt-20">
                                        <h3 className="text-xl text-black font-bold">{slide.title}</h3>
                                        <p className="text-gray-400 text-md">{slide.position}</p>
                                    </div>
                                </div>

                                <div className='absolute bg-gray-800 text-slate-100 p-4 shadow-lg lg:-mt-96 md:-mt-60 -mt-52 lg:ml-[450px] md:ml-[280px] ml-44 space-y-2 rounded-lg mr-5 md:max-w-xl max-w-36 shadow-green-900'>
                                    <p className="lg:text-[38px] md:text-3xl text-[10px] font-bold inline-block leading-snug rounded-lg ">{slide.quote}</p>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>

                {/* Control Buttons */}
                <div className="w-full relative flex lg:-ml-[550px] md:-ml-[380px] -ml-[170px] gap-3 md:justify-start md:items-start pl-5 lg:mt-96 md:mt-[305px] mt-40">
                    <button
                        className="bg-green-600 text-white p-2 px-4 rounded-full shadow-lg hover:bg-gray-600 transition-colors duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-gray-400"
                        onClick={() => sliderRef.current.slickPrev()} // Go to previous slide
                    >
                        <span className="text-2xl">&lt;</span>
                    </button>
                    <button
                        className="bg-green-600 text-white p-2 px-4 rounded-full shadow-lg hover:bg-gray-600 transition-colors duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-gray-400"
                        onClick={() => sliderRef.current.slickNext()} // Go to next slide
                    >
                        <span className="text-2xl">&gt;</span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Carousel;
