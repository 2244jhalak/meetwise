"use client";

import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useLanguage } from '../context/LanguageContext'; // Import the useLanguage hook

const ChooseUs = () => {
    const translations = {
        en: {
            title: 'Some Important Information About Us',
            whyChooseUsTitle: 'Why Choose Us?',
            whyChooseUsDesc: 'We are driven by the belief that scheduling should not be an obstacle in your day-to-day operations. With our platform, we’ve focused on user-friendly design, robust integrations, and top-notch security so you can confidently schedule, knowing your data is safe. Our team continually works to improve and innovate, ensuring you have the best experience possible.',
            ourValuesTitle: 'Our Values',
            ourValuesDesc: `
                1. Simplicity: We believe in making the complex simple. 
                2. Efficiency: Time is precious, and we are here to help you save it. 
                3. Trust: Your privacy and security are our top priorities. 
                4. Innovation: Constantly improving to meet your needs.
            `,
            meetTeamTitle: 'Meet the Team',
            meetTeamDesc: 'Our team is a blend of developers, designers, and problem-solvers, all passionate about creating a product that makes a difference in people’s lives. We come from diverse backgrounds, united by our shared vision to create the best scheduling experience for our users.',
            joinUsTitle: 'Join Us',
            joinUsDesc: 'As we continue to grow, we invite you to join our journey! Whether you’re looking to schedule a meeting, suggest a feature, or collaborate with us, we’re here to help.'
        },
        bn: {
            title: 'আমাদের সম্পর্কে কিছু গুরুত্বপূর্ণ তথ্য',
            whyChooseUsTitle: 'আমাদের কেন নির্বাচন করবেন?',
            whyChooseUsDesc: 'আমরা বিশ্বাস করি যে সময় নির্ধারণ আপনার দৈনন্দিন কার্যক্রমে বাধা হওয়া উচিত নয়। আমাদের প্ল্যাটফর্মটি ব্যবহারকারী-বান্ধব ডিজাইন, শক্তিশালী ইন্টিগ্রেশন, এবং শীর্ষ স্তরের সুরক্ষার উপর গুরুত্ব দিয়েছে যাতে আপনি আত্মবিশ্বাসের সাথে সময় নির্ধারণ করতে পারেন। আমাদের দল নিয়মিত আপডেট এবং উদ্ভাবন করে চলেছে যাতে আপনি সেরা অভিজ্ঞতা পান।',
            ourValuesTitle: 'আমাদের মূল্যবোধ',
            ourValuesDesc: `
                ১. সরলতা: আমরা জটিল বিষয়কে সহজ করার চেষ্টা করি। 
                ২. দক্ষতা: সময় খুবই মূল্যবান, এবং আমরা তা সঞ্চয় করতে সাহায্য করি। 
                ৩. বিশ্বাস: আপনার গোপনীয়তা এবং নিরাপত্তা আমাদের শীর্ষ অগ্রাধিকার। 
                ৪. উদ্ভাবন: নিয়মিত উন্নতি করতে আমরা প্রতিজ্ঞাবদ্ধ।
            `,
            meetTeamTitle: 'আমাদের টিমের সাথে পরিচিত হন',
            meetTeamDesc: 'আমাদের দল ডেভেলপার, ডিজাইনার, এবং সমস্যার সমাধানকারী নিয়ে গঠিত, যারা একটি প্রোডাক্ট তৈরি করতে উত্সাহী যা মানুষের জীবনে পরিবর্তন আনে। আমরা বিভিন্ন পটভূমি থেকে এসেছি, তবে আমাদের শেয়ার্ড ভিশন হল সেরা সময় নির্ধারণের অভিজ্ঞতা প্রদান করা।',
            joinUsTitle: 'আমাদের সাথে যোগ দিন',
            joinUsDesc: 'আমরা যখন ক্রমবর্ধমান, আমরা আপনাকে আমাদের যাত্রায় যোগ দেওয়ার জন্য আমন্ত্রণ জানাচ্ছি! আপনি একটি বৈঠক নির্ধারণ করতে চান, একটি বৈশিষ্ট্য প্রস্তাব করতে চান, বা আমাদের সাথে সহযোগিতা করতে চান, আমরা সাহায্য করতে প্রস্তুত।'
        },
        fr: {
            title: 'Quelques Informations Importantes Sur Nous',
            whyChooseUsTitle: 'Pourquoi Nous Choisir ?',
            whyChooseUsDesc: 'Nous sommes motivés par la conviction que la planification ne devrait pas être un obstacle dans vos activités quotidiennes. Avec notre plateforme, nous nous sommes concentrés sur un design convivial, des intégrations robustes et une sécurité de premier ordre afin que vous puissiez planifier en toute confiance, sachant que vos données sont en sécurité. Notre équipe travaille continuellement à s\'améliorer et à innover, vous garantissant la meilleure expérience possible.',
            ourValuesTitle: 'Nos Valeurs',
            ourValuesDesc: `
                1. Simplicité : Nous croyons à la simplification du complexe. 
                2. Efficacité : Le temps est précieux, et nous sommes là pour vous aider à le préserver. 
                3. Confiance : Votre confidentialité et votre sécurité sont nos priorités absolues. 
                4. Innovation : Nous nous améliorons constamment pour répondre à vos besoins.
            `,
            meetTeamTitle: 'Rencontrez L\'équipe',
            meetTeamDesc: 'Notre équipe est un mélange de développeurs, de designers et de résolveurs de problèmes, tous passionnés par la création d\'un produit qui fait une différence dans la vie des gens. Nous venons d\'horizons divers, unis par notre vision partagée de créer la meilleure expérience de planification pour nos utilisateurs.',
            joinUsTitle: 'Rejoignez-Nous',
            joinUsDesc: 'Alors que nous continuons de croître, nous vous invitons à nous rejoindre dans notre aventure ! Que vous cherchiez à programmer une réunion, à suggérer une fonctionnalité ou à collaborer avec nous, nous sommes là pour vous aider.'
        },
        es: {
            title: 'Información Importante Sobre Nosotros',
            whyChooseUsTitle: '¿Por Qué Elegirnos?',
            whyChooseUsDesc: 'Estamos impulsados por la creencia de que la programación no debe ser un obstáculo en tus operaciones diarias. Con nuestra plataforma, nos hemos centrado en un diseño fácil de usar, integraciones robustas y una seguridad de primer nivel para que puedas programar con confianza, sabiendo que tus datos están seguros. Nuestro equipo trabaja continuamente para mejorar e innovar, asegurándote la mejor experiencia posible.',
            ourValuesTitle: 'Nuestros Valores',
            ourValuesDesc: `
                1. Simplicidad: Creemos en hacer lo complejo simple. 
                2. Eficiencia: El tiempo es valioso, y estamos aquí para ayudarte a ahorrarlo. 
                3. Confianza: Tu privacidad y seguridad son nuestras principales prioridades. 
                4. Innovación: Mejoramos constantemente para satisfacer tus necesidades.
            `,
            meetTeamTitle: 'Conoce al Equipo',
            meetTeamDesc: 'Nuestro equipo es una mezcla de desarrolladores, diseñadores y solucionadores de problemas, todos apasionados por crear un producto que haga una diferencia en la vida de las personas. Venimos de diversos orígenes, unidos por nuestra visión compartida de crear la mejor experiencia de programación para nuestros usuarios.',
            joinUsTitle: 'Únete a Nosotros',
            joinUsDesc: 'A medida que seguimos creciendo, te invitamos a unirte a nuestro viaje. Ya sea que estés buscando programar una reunión, sugerir una característica o colaborar con nosotros, estamos aquí para ayudarte.'
        }
    };

    const { language } = useLanguage(); // Get current language from context

    useEffect(() => {
        AOS.init({
            duration: 1500, // Animation duration
            once: true, // Animation happens only once
        });
    }, []);

    const t = translations[language]; // Get translations for the selected language

    return (
        <div className="container mx-auto md:py-12 bg-gray-200 px-4" >
            <h2 className="text-2xl pb-3 font-semibold rounded-2xl border-b-2 border-green-500 text-center mx-auto text-black lg:text-3xl md:w-1/2 dark:text-white px-8">
                {t.title}
            </h2>
            <div className="flex flex-col md:gap-4 md:flex-row mx-4 mt-10 justify-between">
                {/* Left side */}
                <section className="md:text-xl md:w-1/2 shadow-xl bg-white p-2 md:p-4 border-l-2 border-blue-800 rounded-2xl my-5" data-aos="fade-right">
                    <article className="my-2 md:my-4 px-5">
                        <h3 className="font-bold md:text-2xl mb-2 text-green-700">{t.whyChooseUsTitle}</h3>
                        <p>{t.whyChooseUsDesc}</p>
                    </article>
                    <article className="my-2 px-5">
                        <h3 className="font-bold md:text-2xl mb-2 text-green-700">{t.ourValuesTitle}</h3>
                        <p>{t.ourValuesDesc}</p>
                    </article>
                </section>

                {/* Right side */}
                <section className="md:w-1/2 md:text-xl md:p-4 border-r-2 rounded-2xl shadow-xl bg-white border-green-800 my-5" data-aos="fade-left">
                    <article className="my-2 md:my-4 px-5">
                        <h3 className="font-bold md:text-2xl mb-2 text-blue-700">{t.meetTeamTitle}</h3>
                        <p>{t.meetTeamDesc}</p>
                    </article>
                    <article className="my-2 px-5">
                        <h3 className="font-bold md:text-2xl mb-2 text-blue-700">{t.joinUsTitle}</h3>
                        <p>{t.joinUsDesc}</p>
                    </article>
                </section>
            </div>
        </div>
    );
};

export default ChooseUs;
