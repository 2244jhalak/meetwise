"use client";
import Image from 'next/image';
import React, { useEffect, useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'aos/dist/aos.css';
import AOS from 'aos';
import { useLanguage } from '../../context/LanguageContext';


const translations = {
    en: {
        title: 'How It Works',
        description: 'Invitees can easily schedule a meeting by selecting a time that works for them, and it will automatically sync with your calendar, preventing conflicts.',
        steps: [
            {
                step: 'Step-1',
                title: 'Create a Scheduling Link',
                description: 'Connect your calendar and Calendly will help you create scheduling links and booking pages based on your availability.'
            },
            {
                step: 'Step-2',
                title: 'Team-based scheduling',
                description: 'Booking links can be based on different event types – from 15-minute Zoom calls to 30-minute in-person meetings.'
            },
            {
                step: 'Step-3',
                title: 'Workflows and integrations',
                description: 'Workflows and integrations connect Calendly to your process and other tools.'
            }
        ],
    },
    bn: {
        title: 'কীভাবে কাজ করে',
        description: 'আমন্ত্রিতরা সহজেই একটি সময় নির্বাচন করে মিটিং সূচি করতে পারে, এবং এটি স্বয়ংক্রিয়ভাবে আপনার ক্যালেন্ডারের সাথে সিঙ্ক হয়ে যাবে, বিরোধিতাগুলি প্রতিরোধ করবে।',
        steps: [
            {
                step: 'ধাপ-১',
                title: 'একটি সময়সূচী লিঙ্ক তৈরি করুন',
                description: 'আপনার ক্যালেন্ডার সংযোগ করুন এবং ক্যালেন্ডি আপনাকে আপনার উপলব্ধতার ভিত্তিতে সময়সূচী লিঙ্ক এবং বুকিং পৃষ্ঠা তৈরি করতে সহায়তা করবে।'
            },
            {
                step: 'ধাপ-২',
                title: 'দল ভিত্তিক সময়সূচী',
                description: 'বুকিং লিঙ্কগুলি বিভিন্ন ইভেন্টের ধরনের উপর ভিত্তি করে হতে পারে – ১৫ মিনিটের জুম কল থেকে ৩০ মিনিটের অফিস মিটিং।'
            },
            {
                step: 'ধাপ-৩',
                title: 'কর্মপ্রবাহ এবং ইন্টিগ্রেশন',
                description: 'কর্মপ্রবাহ এবং ইন্টিগ্রেশন ক্যালেন্ডিকে আপনার প্রক্রিয়া এবং অন্যান্য সরঞ্জামের সাথে সংযুক্ত করে।'
            }
        ],
    },
    fr: {
        title: 'Comment ça marche',
        description: 'Les invités peuvent facilement planifier une réunion en sélectionnant un moment qui leur convient, et cela se synchronisera automatiquement avec votre calendrier, évitant ainsi les conflits.',
        steps: [
            {
                step: 'Étape-1',
                title: 'Créer un lien de planification',
                description: 'Connectez votre calendrier et Calendly vous aidera à créer des liens de planification et des pages de réservation en fonction de votre disponibilité.'
            },
            {
                step: 'Étape-2',
                title: 'Planification en équipe',
                description: 'Les liens de réservation peuvent être basés sur différents types d\'événements – des appels Zoom de 15 minutes aux réunions en personne de 30 minutes.'
            },
            {
                step: 'Étape-3',
                title: 'Flux de travail et intégrations',
                description: 'Les flux de travail et les intégrations connectent Calendly à votre processus et à d\'autres outils.'
            }
        ],
    },
    es: {
        title: 'Cómo funciona',
        description: 'Los invitados pueden programar fácilmente una reunión seleccionando un momento que les convenga, y se sincronizará automáticamente con su calendario, evitando conflictos.',
        steps: [
            {
                step: 'Paso-1',
                title: 'Crear un enlace de programación',
                description: 'Conecte su calendario y Calendly le ayudará a crear enlaces de programación y páginas de reserva según su disponibilidad.'
            },
            {
                step: 'Paso-2',
                title: 'Programación basada en equipo',
                description: 'Los enlaces de reserva pueden basarse en diferentes tipos de eventos, desde llamadas de Zoom de 15 minutos hasta reuniones en persona de 30 minutos.'
            },
            {
                step: 'Paso-3',
                title: 'Flujos de trabajo e integraciones',
                description: 'Los flujos de trabajo y las integraciones conectan Calendly a su proceso y a otras herramientas.'
            }
        ],
    },
};

const settings = {
    vertical: true,
    verticalSwiping: true,
    infinite: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: false,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
};

const Hiw = () => {
    const { language } = useLanguage();

    useEffect(() => {
      AOS.init({
        duration: 2000, // Duration of animations (optional)
        once: false, // Whether animation should happen only once while scrolling down (optional)
      });
    }, []);
  
  const sliderRef = useRef(null);

  useEffect(() => {
    const handleWheel = (event) => {
      if (sliderRef.current) {
        if (event.deltaY < 0) {
          sliderRef.current.slickPrev(); // Move to previous slide
        } else if (event.deltaY > 0) {
          sliderRef.current.slickNext(); // Move to next slide
        }
      }
    };

    window.addEventListener('wheel', handleWheel, { passive: true });

    return () => {
      window.removeEventListener('wheel', handleWheel);
    };
  }, []);

    return (
        <div className='container mx-auto mt-10 bg-[#F8ECFF] px-14 py-10 rounded-lg' data-aos="fade-up">
            <div className='mb-7 mx-auto text-center pb-7 flex flex-row items-center justify-between'>
                <div className='relative font-raleway font-bold text-left text-5xl w-1/2'>
                    <h1 className='mb-3 text-[#2A106B]'>{translations[language].title}</h1>
                    <div className='absolute bottom-0 left-0 border-b-2 border-violet-700 w-[20%] hover:w-[50%] transition-all duration-300 ease-in-out p-4 cursor-pointer'></div>
                </div>
                <p className='text-lg font-raleway w-1/2 text-slate-500 mt-4 text-left'>{translations[language].description}</p>
            </div>
            <div data-aos="fade-up" className='grid md:grid-cols-1 grid-cols-1 lg:grid-cols-2 gap-5 lg:py-8 lg:px-8 bg-violet-100 rounded-xl shadow-xl border border-t-violet-700'>
                <div className="overflow-hidden">
                    <Slider ref={sliderRef} {...settings} className="h-full">
                        {translations[language].steps.map((step, index) => (
                            <div key={index} className="mx-auto mt-4 mb-6 dark:bg-gray-800 overflow-hidden cursor-pointer">
                                <div className="flex flex-col md:flex-row items-center">
                                    <div className="p-6 md:w-1/2">
                                        <div>
                                            <span className="text-xs font-medium text-[#2A106B] uppercase dark:text-blue-400 font-raleway">{step.step}</span>
                                            <a href="#" className="block mt-2 text-xl font-bold font-raleway text-gray-800 transition-colors duration-300 transform dark:text-white hover:text-gray-600 hover:underline" tabIndex="0" role="link">
                                                {step.title}
                                            </a>
                                            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400 font-raleway">{step.description}</p>
                                        </div>
                                        <div className="mt-4">
                                            <button type="button" className="px-8 py-3 border transition-all duration-500 ease-in font-raleway border-violet-700 hover:bg-violet-900 hover:text-white font-semibold rounded-full dark:bg-gray-800 dark:text-gray-00">Learn More</button>
                                        </div>
                                    </div>
                                    <div className="md:w-1/2">
                                        <Image className="object-cover w-full h-full" src={`https://example.com/image-${index + 1}.png`} alt={step.title} layout="responsive" width={500} height={1000} />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
                <div className="relative bg-white rounded-2xl shadow-md p-6" style={{ paddingTop: '56.25%' }}>
                    <iframe src="https://www.youtube.com/embed/HkLQUI_bDik?si=wLnfVaaMvAhsGxtY" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen className="absolute top-0 left-0 w-full h-full p-5 pb-5"></iframe>
                </div>
            </div>
        </div>
    );
};




export default Hiw;