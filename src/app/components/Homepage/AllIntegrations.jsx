// import Image from 'next/image';
import React, { useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import Image from 'next/image';
import AOS from 'aos';
import 'aos/dist/aos.css';

const AllIntegrations = () => {
    const { language } = useLanguage();

    useEffect(() => {
        AOS.init({
            duration: 1500, // Duration of animations (optional)
            once: false, // Whether animation should happen only once while scrolling down (optional)
        });
    }, []);

    const translations = {
        en: {
            title: "All Integrations",
            description: "Connect effortlessly with popular meeting platforms through our AI-powered recording integrations.",
            googleMeet: {
                title: "Google Meet",
                image: "/all_integrations/google_meet.png",
                description: "Easily integrate our AI-powered recording platform with Google Meet for an enhanced meeting experience."
            },
            zoom: {
                title: "Zoom",
                image: "/all_integrations/zoom.png",
                description: "Enhance your Zoom meetings with seamless integration of our AI-powered recording platform."
            },
            microsoftTeams: {
                title: "Microsoft Teams",
                image: "/all_integrations/microsoft_team.webp",
                description: "Boost your Microsoft Teams meetings with our AI-powered recording integration for smoother collaboration."
            }
        },
        es: {
            title: "Todas las Integraciones",
            description: "Conéctate fácilmente con plataformas de reuniones populares a través de nuestras integraciones de grabación impulsadas por IA.",
            googleMeet: {
                title: "Google Meet",
                image: "/all_integrations/google_meet.png",
                description: "Integra fácilmente nuestra plataforma de grabación impulsada por IA con Google Meet para una mejor experiencia de reunión."
            },
            zoom: {
                title: "Zoom",
                image: "/all_integrations/zoom.png",
                description: "Mejora tus reuniones de Zoom con la integración de nuestra plataforma de grabación impulsada por IA."
            },
            microsoftTeams: {
                title: "Microsoft Teams",
                image: "/all_integrations/microsoft_team.webp",
                description: "Optimiza tus reuniones en Microsoft Teams con nuestra integración de grabación impulsada por IA."
            }
        },
        fr: {
            title: "Toutes les Intégrations",
            description: "Connectez-vous facilement aux plateformes de réunion populaires grâce à nos intégrations d'enregistrement alimentées par IA.",
            googleMeet: {
                title: "Google Meet",
                image: "/all_integrations/google_meet.png",
                description: "Intégrez facilement notre plateforme d'enregistrement alimentée par IA avec Google Meet pour une meilleure expérience de réunion."
            },
            zoom: {
                title: "Zoom",
                image: "/all_integrations/zoom.png",
                description: "Améliorez vos réunions Zoom avec l'intégration de notre plateforme d'enregistrement alimentée par IA."
            },
            microsoftTeams: {
                title: "Microsoft Teams",
                image: "/all_integrations/microsoft_team.webp",
                description: "Boostez vos réunions Microsoft Teams avec notre intégration d'enregistrement alimentée par IA."
            }
        },
        bn: {
            title: "সমস্ত একীকরণ",
            description: "আমাদের AI-চালিত রেকর্ডিং একীকরণের মাধ্যমে জনপ্রিয় বৈঠক প্ল্যাটফর্মগুলির সাথে সহজে সংযুক্ত হোন।",
            googleMeet: {
                title: "গুগল মিট",
                image: "/all_integrations/google_meet.png",
                description: "উন্নত বৈঠকের অভিজ্ঞতার জন্য আমাদের AI-চালিত রেকর্ডিং প্ল্যাটফর্মকে গুগল মিটের সাথে সহজেই একীভূত করুন।"
            },
            zoom: {
                title: "জুম",
                image: "/all_integrations/zoom.png",
                description: "আমাদের AI-চালিত রেকর্ডিং প্ল্যাটফর্মের একীকরণের মাধ্যমে আপনার জুম বৈঠকগুলি উন্নত করুন।"
            },
            microsoftTeams: {
                title: "মাইক্রোসফট টিমস",
                image: "/all_integrations/microsoft_team.webp",
                description: "AI-চালিত রেকর্ডিং একীকরণের মাধ্যমে মাইক্রোসফট টিমস বৈঠকগুলি আরও উন্নত করুন।"
            }
        }


    };

    const { title, googleMeet, zoom, microsoftTeams } = translations[language];

    return (
        <div id='all-Integration' className='container mx-auto  bg-gray-100 py-10'>
            <div className='container  md:py-16 md:px-28 p-5 text-center mx-autorounded-t-xl shadow-t-xl pt-2 dark:text-black' >
                <div className='mb-7 md:mx-auto text-center pb-7 flex md:flex-row flex-col items-center justify-between'>
                    <div className='relative font-raleway font-bold text-center md:text-left text-2xl md:text-5xl md:w-1/2'>
                        <h1 className='mb-5 text-black'>{translations[language].title}</h1>
                        <div className='absolute bottom-0 left-[30%] md:left-0 border-b-2 border-blue-600 w-[40%]  md:hover:w-[50%] transition-all duration-300 ease-in-out p-4 cursor-pointer mb-2'></div>
                    </div>
                    <p className='text-lg font-raleway md:w-1/2 text-gray-700 mt-4 md:text-left text-center'>{translations[language].description}</p>

                </div>
                {/* <h3 className='text-4xl font-bold mb-10'>{title}</h3> */}
                <div className='md:flex justify-center gap-14 mx-auto '>
                    <div className='bg-white p-7 lg:w-96 pr-5 md:w-[370px] rounded-2xl shadow-xl text-start mt-5  shadow-green-900'>
                        <div className='rounded-full p-3 w-16 bg-white shadow-xl lg:hover:scale-105 animate__animated animate__zoomIn'>
                            <Image src={googleMeet.image} alt="" width={1000} height={1000} />
                        </div>
                        <h3 className='text-xl my-2 font-bold'>{googleMeet.title}</h3>
                        <p className='text-slate-500 text-sm'>{googleMeet.description}</p>
                    </div>
                    <div className='bg-white p-7 lg:w-96 pr-5 md:w-[370px] rounded-2xl shadow-xl text-start mt-5  shadow-green-900'>
                        <div className='rounded-full p-3 w-16 bg-white shadow-xl lg:hover:scale-105 animate__animated animate__zoomIn'>
                            {/* <FaVideo className='text-blue-500 text-2xl mb-2' /> */}
                            <Image src={zoom.image} alt="" width={1000} height={1000} />
                        </div>
                        <h3 className='text-xl my-2 font-bold'>{zoom.title}</h3>
                        <p className='text-slate-500 text-sm'>{zoom.description}</p>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default AllIntegrations;