"use client";

import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useLanguage } from '../context/LanguageContext'; // Import the useLanguage hook

const OurOffer = () => {
    const translations = {
        en: {
            title: 'What We Offer',
            description: 'At Meetwise, we provide features that make scheduling seamless and efficient:',
            features: [
                '1. Create Meetings: Easily set up meetings with just a few clicks.',
                '2. Book Meetings: Users can book meetings with others, ensuring seamless scheduling without conflicts.',
                '3. Meeting Analytics: Track attendance, duration, and engagement for your meetings to gain insights and improve future scheduling.',
                '4. View Scheduled Meetings: Organizers can see all booked meetings, making it easy to manage schedules.',
                '5. Set Availability: Define your availability for streamlined scheduling and avoid double bookings.',
                '6. Time Zone Compatibility: Meeting times are adjusted automatically based on participants’ time zones.',
                '7. User Profile Management: Update profile settings for personalized scheduling and availability.',
                '8. Integration with Google Meet & Zoom: Create meetings with direct links from Google Meet or Zoom for easy access.',
            ],
        },
        bn: {
            title: 'আমরা কী অফার করি',
            description: 'Meetwise এ, আমরা বৈশিষ্ট্য প্রদান করি যা সময়সূচী নির্ধারণকে নির্বিঘ্ন এবং কার্যকর করে তোলে:',
            features: [
                '১. মিটিং তৈরি করুন: কয়েকটি ক্লিকের মাধ্যমে সহজেই মিটিং সেট আপ করুন।',
                '২. মিটিং বুক করুন: ব্যবহারকারীরা অন্যদের সাথে মিটিং বুক করতে পারে, সময়সূচী নির্ধারণকে নির্বিঘ্ন করে তোলে।',
                '৩. মিটিং বিশ্লেষণ: উপস্থিতি, সময়কাল এবং অংশগ্রহণ ট্র্যাক করুন এবং ভবিষ্যতের সময়সূচীর উন্নতির জন্য অন্তর্দৃষ্টি পান।',
                '৪. নির্ধারিত মিটিং দেখুন: আয়োজকরা সমস্ত বুক করা মিটিং দেখতে পারেন, সময়সূচী সহজে পরিচালনা করা যায়।',
                '৫. উপলভ্যতা নির্ধারণ করুন: নিরবচ্ছিন্ন সময়সূচীর জন্য আপনার উপলভ্যতা সংজ্ঞায়িত করুন এবং দ্বিগুণ বুকিং এড়ান।',
                '৬. সময় অঞ্চল সামঞ্জস্য: অংশগ্রহণকারীদের সময় অঞ্চলের উপর ভিত্তি করে মিটিং এর সময় স্বয়ংক্রিয়ভাবে সামঞ্জস্য করা হয়।',
                '৭. ব্যবহারকারী প্রোফাইল পরিচালনা: ব্যক্তিগত সময়সূচী এবং উপলভ্যতার জন্য প্রোফাইল সেটিংস আপডেট করুন।',
                '৮. Google Meet & Zoom এর সাথে একীভূতকরণ: সহজ প্রবেশের জন্য সরাসরি Google Meet বা Zoom থেকে মিটিং লিঙ্ক সহ মিটিং তৈরি করুন।',
            ],
        },
        fr: {
            title: 'Ce Que Nous Offrons',
            description: 'Chez Meetwise, nous proposons des fonctionnalités qui facilitent la planification et la rendent efficace :',
            features: [
                '1. Créer des Réunions : Configurez des réunions en quelques clics.',
                '2. Réserver des Réunions : Les utilisateurs peuvent réserver des réunions sans conflit d’horaire.',
                '3. Analyse des Réunions : Suivez la présence, la durée et l’engagement pour améliorer la planification future.',
                '4. Voir les Réunions Planifiées : Les organisateurs peuvent voir toutes les réunions réservées pour une gestion facile.',
                '5. Définir la Disponibilité : Définissez votre disponibilité pour une planification efficace sans double réservations.',
                '6. Compatibilité des Fuseaux Horaires : Les horaires sont ajustés automatiquement selon les fuseaux horaires des participants.',
                '7. Gestion du Profil Utilisateur : Mettez à jour les paramètres de profil pour une planification personnalisée et disponibilité.',
                '8. Intégration avec Google Meet & Zoom : Créez des réunions avec des liens directs depuis Google Meet ou Zoom.',
            ],
        },
        es: {
            title: 'Lo Que Ofrecemos',
            description: 'En Meetwise, ofrecemos funciones que facilitan la programación de reuniones de manera eficiente:',
            features: [
                '1. Crear Reuniones: Configure reuniones fácilmente con unos pocos clics.',
                '2. Reservar Reuniones: Los usuarios pueden reservar reuniones sin conflictos de horario.',
                '3. Análisis de Reuniones: Realice un seguimiento de la asistencia, duración y participación para mejorar la planificación futura.',
                '4. Ver Reuniones Programadas: Los organizadores pueden ver todas las reuniones reservadas para una gestión sencilla.',
                '5. Establecer Disponibilidad: Defina su disponibilidad para programar sin reservas duplicadas.',
                '6. Compatibilidad de Zona Horaria: Los horarios se ajustan automáticamente según las zonas horarias de los participantes.',
                '7. Gestión de Perfil de Usuario: Actualice los ajustes del perfil para una programación personalizada y disponibilidad.',
                '8. Integración con Google Meet & Zoom: Cree reuniones con enlaces directos desde Google Meet o Zoom.',
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
        <div className="text-black container mx-auto md:p-7 rounded-lg  hero-overlay bg-gray-200 md:py-28 py-10  px-4" >
            <h1 className="text-2xl pb-3 font-semibold rounded-2xl md:w-1/4 border-b-2 border-green-500 text-center mx-auto text-BLACK lg:text-3xl dark:text-white">
                {t.title}
            </h1>

            <p className="md:text-xl px-5 py-8 text-gray-600 font-bold ">{t.description} :</p>
            <ul className="mx-auto md:text-xl px-5 pb-5 grid grid-cols-1 md:grid-cols-2 gap-4" data-aos="fade-up">
    {t.features.map((feature, index) => (
        <li 
            key={index} 
            className="bg-gray-800 text-white rounded-lg shadow-lg p-5 transform transition-transform hover:scale-105 duration-300 ease-in-out"
        >
            <span className="font-semibold text-lg">{feature}</span>
        </li>
    ))}
</ul>
        </div>
    );
};

export default OurOffer;
