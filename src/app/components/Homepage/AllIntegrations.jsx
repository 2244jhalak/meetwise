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
            title: "Meeting Integrations",
            description: "Easily create meetings on our platform using Google Meet and Zoom links with our seamless integration.",
            googleMeet: {
                title: "Google Meet",
                image: "/all_integrations/google_meet.png",
                description: "Easily create meetings using Google Meet links with our platform for a streamlined experience."
            },
            zoom: {
                title: "Zoom",
                image: "/all_integrations/zoom.png",
                description: "Enhance your experience by creating meetings with Zoom links directly on our platform."
            },
            microsoftTeams: {
                title: "Microsoft Teams",
                image: "/all_integrations/microsoft_team.webp",
                description: "Improve collaboration with Microsoft Teams by integrating meeting links directly into our platform."
            }
        },
        es: {
            title: "Integraciones de reuniones",
            description: "Crea reuniones fácilmente en nuestra plataforma utilizando enlaces de Google Meet y Zoom con nuestra integración perfecta.",
            googleMeet: {
                title: "Google Meet",
                image: "/all_integrations/google_meet.png",
                description: "Crea reuniones fácilmente utilizando enlaces de Google Meet en nuestra plataforma para una experiencia fluida."
            },
            zoom: {
                title: "Zoom",
                image: "/all_integrations/zoom.png",
                description: "Mejora tu experiencia creando reuniones con enlaces de Zoom directamente en nuestra plataforma."
            },
            microsoftTeams: {
                title: "Microsoft Teams",
                image: "/all_integrations/microsoft_team.webp",
                description: "Mejora la colaboración en Microsoft Teams integrando enlaces de reuniones directamente en nuestra plataforma."
            }
        },
        fr: {
            title: "Intégrations de réunion",
            description: "Créez facilement des réunions sur notre plateforme en utilisant des liens Google Meet et Zoom avec notre intégration fluide.",
            googleMeet: {
                title: "Google Meet",
                image: "/all_integrations/google_meet.png",
                description: "Créez facilement des réunions en utilisant des liens Google Meet sur notre plateforme pour une expérience sans faille."
            },
            zoom: {
                title: "Zoom",
                image: "/all_integrations/zoom.png",
                description: "Améliorez votre expérience en créant des réunions avec des liens Zoom directement sur notre plateforme."
            },
            microsoftTeams: {
                title: "Microsoft Teams",
                image: "/all_integrations/microsoft_team.webp",
                description: "Améliorez la collaboration avec Microsoft Teams en intégrant des liens de réunion directement dans notre plateforme."
            }
        },
        bn: {
            title: "মিটিং একীকরণ",
            description: "আমাদের প্ল্যাটফর্মে গুগল মিট ও জুম লিংক ব্যবহার করে সহজে মিটিং তৈরি করুন আমাদের নিরবচ্ছিন্ন একীভূতকরণের মাধ্যমে।",
            googleMeet: {
                title: "গুগল মিট",
                image: "/all_integrations/google_meet.png",
                description: "সহজেই গুগল মিট লিংক ব্যবহার করে আমাদের প্ল্যাটফর্মে মিটিং তৈরি করুন একটি মসৃণ অভিজ্ঞতার জন্য।"
            },
            zoom: {
                title: "জুম",
                image: "/all_integrations/zoom.png",
                description: "আমাদের প্ল্যাটফর্মে সরাসরি জুম লিংক ব্যবহার করে মিটিং তৈরি করে আপনার অভিজ্ঞতা উন্নত করুন।"
            },
            microsoftTeams: {
                title: "মাইক্রোসফট টিমস",
                image: "/all_integrations/microsoft_team.webp",
                description: "মাইক্রোসফট টিমসের মিটিং লিংক সরাসরি আমাদের প্ল্যাটফর্মে সংযুক্ত করে সহযোগিতা উন্নত করুন।"
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