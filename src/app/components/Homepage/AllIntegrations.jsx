// import Image from 'next/image';
import React from 'react';
import { FaVideo } from "react-icons/fa";
import { useLanguage } from '../context/LanguageContext';
import Image from 'next/image';


const AllIntegrations = () => {
    const { language } = useLanguage();

    const translations = {
        en: {
            title: "All Integrations",
            googleMeet: {
                title: "Google Meet",
                image: "/all_integrations/google_meet.png",
                description: "Effortlessly integrate our AI-powered recording website with Google Meet for an enhanced meeting experience."
            },
            zoom: {
                title: "Zoom",
                image: "/all_integrations/zoom.png",
                description: "Transform your Zoom meetings with the integration of our AI-powered recording website. By seamlessly connecting our platform..."
            },
            microsoftTeams: {
                title: "Microsoft Teams",
                image: "/all_integrations/microsoft_team.webp",
                description: "Elevate your Microsoft Teams meetings with the integration of our AI-powered recording website. Connecting seamlessly with Microsoft Teams..."
            }
        },
        es: {
            title: "Todas las Integraciones",
            googleMeet: {
                title: "Google Meet",
                image: "/all_integrations/google_meet.png",
                description: "Integra sin esfuerzo nuestro sitio web de grabación impulsado por IA con Google Meet para una experiencia de reunión mejorada."
            },
            zoom: {
                title: "Zoom",
                image: "/all_integrations/zoom.png",
                description: "Transforma tus reuniones de Zoom con la integración de nuestro sitio web de grabación impulsado por IA..."
            },
            microsoftTeams: {
                title: "Microsoft Teams",
                image: "/all_integrations/microsoft_team.webp",
                description: "Eleva tus reuniones de Microsoft Teams con la integración de nuestro sitio web de grabación impulsado por IA..."
            }
        },
        fr: {
            title: "Toutes les Intégrations",
            googleMeet: {
                title: "Google Meet",
                image: "/all_integrations/google_meet.png",
                description: "Intégrez facilement notre site Web d'enregistrement alimenté par IA avec Google Meet pour une expérience de réunion améliorée."
            },
            zoom: {
                title: "Zoom",
                image: "/all_integrations/zoom.png",
                description: "Transformez vos réunions Zoom avec l'intégration de notre site Web d'enregistrement alimenté par IA..."
            },
            microsoftTeams: {
                title: "Microsoft Teams",
                image: "/all_integrations/microsoft_team.webp",
                description: "Améliorez vos réunions Microsoft Teams avec l'intégration de notre site Web d'enregistrement alimenté par IA..."
            }
        },
        bn: {
            title: "সমস্ত একীকরণ",
            googleMeet: {
                title: "গুগল মিট",
                image: "/all_integrations/google_meet.png",
                description: "গুগল মিটের সাথে আমাদের AI-চালিত রেকর্ডিং ওয়েবসাইটকে সহজেই একীভূত করুন একটি উন্নত বৈঠক অভিজ্ঞতার জন্য।"
            },
            zoom: {
                title: "জুম",
                image: "/all_integrations/zoom.png",
                description: "আমাদের AI-চালিত রেকর্ডিং ওয়েবসাইটের সাথে একীভূত হয়ে আপনার জুম বৈঠকগুলি রূপান্তর করুন। আমাদের প্ল্যাটফর্মের সাথে সহজেই সংযোগ স্থাপন..."
            },
            microsoftTeams: {
                title: "মাইক্রোসফট টিমস",
                image: "/all_integrations/microsoft_team.webp",
                description: "আমাদের AI-চালিত রেকর্ডিং ওয়েবসাইটের একীকরণের মাধ্যমে আপনার মাইক্রোসফট টিমস বৈঠকগুলি উন্নীত করুন।"
            }
        }
    };

    const { title, googleMeet, zoom, microsoftTeams } = translations[language];

    return (
        <div className='bg-fuchsia-50 md:py-16 md:px-28 p-4 text-center mx-auto'>
            <div className='flex flex-col items-center justify-center mb-6'>
                <div className='relative font-raleway font-bold mx-auto text-5xl text-center'>
                    <h1 className="text-2xl pb-3 font-semibold text-center mx-auto text-gray-800 lg:text-3xl dark:text-white">
                        {title}
                    </h1>
                    <div className='absolute bottom-0 left-1/2 transform -translate-x-1/2 mx-auto border-b-2 border-violet-700 w-[50%] hover:w-[100%] transition-all duration-300 ease-in-out p-4 cursor-pointer'></div>
                </div>
            </div>
            {/* <h3 className='text-4xl font-bold mb-10'>{title}</h3> */}
            <div className='md:flex justify-between gap-5 mx-auto'>
                <div className='bg-white p-7 w-96 rounded-2xl shadow-2xl text-start mt-5'>
                    <div className='rounded-full p-3 w-16 bg-white shadow-xl'>
                        {/* <FaVideo className='text-green-500 text-2xl mb-2' /> */}
                        <Image src={googleMeet.image} alt="" width={1000} height={1000} />
                    </div>
                    <h3 className='text-xl my-2 font-bold'>{googleMeet.title}</h3>
                    <p>{googleMeet.description}</p>
                </div>
                <div className='bg-white p-7 w-96 rounded-2xl shadow-2xl text-start mt-5'>
                    <div className='rounded-full p-3 w-16 bg-white shadow-xl'>
                        {/* <FaVideo className='text-blue-500 text-2xl mb-2' /> */}
                        <Image src={zoom.image} alt="" width={1000} height={1000} />
                    </div>
                    <h3 className='text-xl my-2 font-bold'>{zoom.title}</h3>
                    <p>{zoom.description}</p>
                </div>
                <div className='bg-white p-7 w-96 rounded-2xl shadow-2xl text-start mt-5'>
                    <div className='rounded-full p-3 w-16 bg-white shadow-xl'>
                        {/* <FaVideo className='text-red-500 text-2xl mb-2' /> */}
                        <Image src={microsoftTeams.image} alt="" width={1000} height={1000} />
                    </div>
                    <h3 className='text-xl my-2 font-bold'>{microsoftTeams.title}</h3>
                    <p>{microsoftTeams.description}</p>
                </div>
            </div>
        </div>
    );
};

export default AllIntegrations;
