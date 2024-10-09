"use client"
import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const AboutHeader = () => {
    const translations = {
        en: {
          title: 'About Us',
          description: 'Welcome to Meetwise, your go-to platform for effortless and efficient meeting scheduling. We are a team of tech enthusiasts, committed to simplifying the way individuals and businesses schedule their meetings. In today’s fast-paced world, coordinating calendars should be a breeze, and that’s exactly what we aim to provide.',
        },
        bn: {
          title: 'আমাদের সম্পর্কে',
          description: 'মিটওয়াইজে স্বাগতম, এটি আপনার সময় নির্ধারণকে সহজ ও কার্যকরী করার প্ল্যাটফর্ম। আমরা প্রযুক্তি উত্সাহী একটি দল, যারা ব্যক্তিগত এবং ব্যবসায়িক বৈঠকগুলির সময় নির্ধারণকে সহজতর করার প্রতিশ্রুতি দিয়েছি। বর্তমান দ্রুতগামী বিশ্বে, ক্যালেন্ডার সমন্বয় করা খুব সহজ হওয়া উচিত, এবং আমরা সেটাই প্রদান করতে চাই।',
        },
        fr: {
          title: 'À propos de nous',
          description: 'Bienvenue sur Meetwise, votre plateforme de référence pour une planification de réunions simple et efficace. Nous sommes une équipe de passionnés de technologie, engagés à simplifier la façon dont les individus et les entreprises planifient leurs réunions. Dans le monde d\'aujourd\'hui, la coordination des calendriers devrait être un jeu d\'enfant, et c\'est exactement ce que nous visons à offrir.',
        },
        es: {
          title: 'Sobre nosotros',
          description: 'Bienvenido a Meetwise, tu plataforma ideal para programar reuniones de manera fácil y eficiente. Somos un equipo de entusiastas de la tecnología, comprometidos con simplificar la forma en que las personas y empresas programan sus reuniones. En el mundo acelerado de hoy, coordinar calendarios debería ser sencillo, y eso es lo que buscamos proporcionar.',
        },
    };

    const { language } = useLanguage(); // Access the selected language

    return (
        <div className='container mx-auto'>
            <div
                className="hero h-[300px] md:h-[450px] rounded-sm"
                style={{
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                }}
            >
                <div className="hero-overlay bg-opacity-50"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="my-auto">
                        {/* Use optional chaining to prevent errors */}
                        <h1 className="text-4xl md:text-6xl w-full pt-20 text-white font-extrabold font-raleway mb-4">
                            {translations[language]?.title || 'About Us'}
                        </h1>
                        <p className="mt-2 md:mt-5 text-base md:text-xl w-full text-gray-200 p-4 font-raleway md:mb-4">
                            {translations[language]?.description || 'Default description here...'}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutHeader;
