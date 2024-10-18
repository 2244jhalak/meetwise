"use client";

import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useLanguage } from '../context/LanguageContext'; // Import the useLanguage hook

const OurOffer = () => {
    const translations = {
        en: {
            title: 'What We Offer',
            description: 'At Meetwise, we offer a range of features designed to save you time:',
            features: [
                '1. Smart Calendar Integration: Sync with Google Calendar, Outlook, and more to ensure all your meetings are in one place.',
                '2. Automatic Time Zone Adjustments: No more confusion over time zones – we automatically adjust meeting times based on participants’ locations.',
                '3. Flexible Scheduling: Offer multiple time slots, set buffers between meetings, and avoid double bookings.',
                '4. Group Scheduling: Need to coordinate with a team? Our group scheduling tools make it easy to find a common time.',
                '5. Customizable Meeting Pages: Personalize your meeting links with branding, agendas, and more.',
            ],
        },
        bn: {
            title: 'আমরা কী অফার করি',
            description: 'Meetwise এ, আমরা সময় সঞ্চয়ের জন্য ডিজাইন করা একটি পরিসর বৈশিষ্ট্য অফার করি:',
            features: [
                '১. স্মার্ট ক্যালেন্ডার ইন্টিগ্রেশন: Google Calendar, Outlook এবং আরও অনেকের সাথে সিঙ্ক করুন যাতে আপনার সমস্ত সভা এক জায়গায় থাকে।',
                '২. স্বয়ংক্রিয় সময় অঞ্চলের সামঞ্জস্য: সময় অঞ্চলের বিভ্রান্তি আর নেই – আমরা অংশগ্রহণকারীদের অবস্থানের উপর ভিত্তি করে সভার সময়গুলি স্বয়ংক্রিয়ভাবে সামঞ্জস্য করি।',
                '৩. নমনীয় সময়সূচী: একাধিক সময়ের স্লট অফার করুন, সভার মধ্যে বাফার সেট করুন এবং দ্বিগুণ বুকিং এড়িয়ে চলুন।',
                '৪. গ্রুপ সময়সূচী: একটি টিমের সাথে সমন্বয় করতে চান? আমাদের গ্রুপ সময়সূচী টুলগুলি একটি সাধারণ সময় খুঁজে পেতে সহজ করে তোলে।',
                '৫. কাস্টমাইজেবল মিটিং পেজ: ব্র্যান্ডিং, এজেন্ডা, এবং আরও অনেক কিছু সহ আপনার সভার লিঙ্কগুলি ব্যক্তিগতকরণ করুন।',
            ],
        },
        fr: {
            title: 'Ce Que Nous Offrons',
            description: 'Chez Meetwise, nous proposons une gamme de fonctionnalités conçues pour vous faire gagner du temps :',
            features: [
                '1. Intégration de Calendrier Intelligent : Synchronisez avec Google Calendar, Outlook, et plus pour vous assurer que toutes vos réunions sont au même endroit.',
                '2. Ajustements Automatiques des Fuseaux Horaires : Plus de confusion concernant les fuseaux horaires – nous ajustons automatiquement les heures de réunion en fonction des emplacements des participants.',
                '3. Planification Flexible : Offrez plusieurs créneaux horaires, définissez des délais entre les réunions et évitez les doubles réservations.',
                '4. Planification de Groupe : Besoin de coordonner avec une équipe ? Nos outils de planification de groupe facilitent la recherche d\'un horaire commun.',
                '5. Pages de Réunion Personnalisables : Personnalisez vos liens de réunion avec votre branding, vos ordres du jour, et plus encore.',
            ],
        },
        es: {
            title: 'Lo Que Ofrecemos',
            description: 'En Meetwise, ofrecemos una variedad de funciones diseñadas para ahorrar tiempo:',
            features: [
                '1. Integración de Calendario Inteligente: Sincroniza con Google Calendar, Outlook y más para asegurarte de que todas tus reuniones estén en un solo lugar.',
                '2. Ajustes Automáticos de Zona Horaria: No más confusión sobre zonas horarias: ajustamos automáticamente los horarios de las reuniones según las ubicaciones de los participantes.',
                '3. Programación Flexible: Ofrece múltiples franjas horarias, establece intervalos entre reuniones y evita dobles reservas.',
                '4. Programación en Grupo: ¿Necesitas coordinarte con un equipo? Nuestras herramientas de programación en grupo facilitan encontrar un horario común.',
                '5. Páginas de Reunión Personalizables: Personaliza tus enlaces de reunión con branding, agendas y más.',
            ],
        },
    };

    const { language } = useLanguage(); // Get current language from context

    useEffect(() => {
        AOS.init({
            duration: 1500, // Duration of animations (optional)
            once: false, // Whether animation should happen only once while scrolling down (optional)
        });
    }, []);

    const t = translations[language]; // Get translations for the selected language

    return (
        <div className="text-gray-200 container mx-auto md:p-7 shadow-xl hero-overlay bg-opacity-50 md:my-28 my-10 backdrop-blur-md backdrop-opacity-70" data-aos="fade-up">
            <h1 className="text-2xl pb-3 font-semibold rounded-2xl md:w-1/4 border-b-2 border-green-500 text-center mx-auto text-gray-200 lg:text-3xl dark:text-white">
                {t.title}
            </h1>

            <p className="md:text-xl px-5 my-8">{t.description}</p>
            <ul className="mx-auto md:text-xl px-5 pb-5">
                {t.features.map((feature, index) => (
                    <li className="my-2" key={index}>
                        <span className="font-semibold">{feature}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default OurOffer;
