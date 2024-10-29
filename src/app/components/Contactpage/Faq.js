// Faq.js
"use client";
import React, { useEffect } from 'react';
import Image from "next/image";
import { useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useLanguage } from '../context/LanguageContext';


const Faq = () => {
  const { language } = useLanguage(); // Use the language context
  useEffect(() => {
    AOS.init({
      duration: 2000,
      once: false,
    });
  }, []);
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    if (activeIndex === index) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };

  const texts = {
    en: {
      title: "Got Questions? We've Got Answers!",
      description: "Whether you're curious about our services, need details on our processes, or have any other inquiries, our FAQ section is here to help.",
      faqs: [
        {
          question: "How can I schedule an appointment?",
          answer: "You can schedule an appointment by visiting our scheduling page and selecting the time that works best for you.",
        },
        {
          question: "Can I reschedule my appointment?",
          answer: "Yes, you can reschedule your appointment through our scheduling system up to 24 hours before the appointment time.",
        },
        {
          question: "What happens if I miss my appointment?",
          answer: "If you miss your appointment, you will need to contact us to reschedule. We recommend rescheduling as soon as possible.",
        },
        {
          question: "How do I cancel my appointment?",
          answer: "You can cancel your appointment by accessing the scheduling page or contacting us directly.",
        },
      ],
    },
    bn: {
      title: "আপনার কি প্রশ্ন আছে? আমাদের কাছে উত্তর আছে!",
      description: "যদি আপনি আমাদের সেবা সম্পর্কে আগ্রহী হন, আমাদের প্রক্রিয়া সম্পর্কে বিস্তারিত জানতে চান, বা অন্য কোন অনুসন্ধান থাকে, তবে আমাদের FAQ বিভাগ এখানে সহায়তার জন্য রয়েছে।",
      faqs: [
        {
          question: "আমি কিভাবে একটি অ্যাপয়েন্টমেন্ট নির্ধারণ করতে পারি?",
          answer: "আপনি আমাদের নির্ধারণ পৃষ্ঠায় গিয়ে এবং আপনার জন্য সেরা সময়টি নির্বাচন করে একটি অ্যাপয়েন্টমেন্ট নির্ধারণ করতে পারেন।",
        },
        {
          question: "আমি কি আমার অ্যাপয়েন্টমেন্ট পুনঃনির্ধারণ করতে পারি?",
          answer: "হ্যাঁ, আপনি অ্যাপয়েন্টমেন্টের সময়ের 24 ঘণ্টা আগে পর্যন্ত আমাদের নির্ধারণ সিস্টেমের মাধ্যমে আপনার অ্যাপয়েন্টমেন্ট পুনঃনির্ধারণ করতে পারেন।",
        },
        {
          question: "যদি আমি আমার অ্যাপয়েন্টমেন্ট মিস করি তাহলে কি হবে?",
          answer: "যদি আপনি আপনার অ্যাপয়েন্টমেন্ট মিস করেন, তাহলে আপনাকে পুনঃনির্ধারণের জন্য আমাদের সাথে যোগাযোগ করতে হবে। আমরা যত দ্রুত সম্ভব পুনঃনির্ধারণের পরামর্শ দিচ্ছি।",
        },
        {
          question: "আমি কিভাবে আমার অ্যাপয়েন্টমেন্ট বাতিল করতে পারি?",
          answer: "আপনি নির্ধারণ পৃষ্ঠা ব্যবহার করে বা আমাদের সরাসরি যোগাযোগ করে আপনার অ্যাপয়েন্টমেন্ট বাতিল করতে পারেন।",
        },
      ],
    },
    fr: {
      title: "Vous avez des questions ? Nous avons des réponses !",
      description: "Que vous soyez curieux de nos services, que vous ayez besoin de détails sur nos processus ou que vous ayez d'autres questions, notre section FAQ est là pour vous aider.",
      faqs: [
        {
          question: "Comment puis-je prendre un rendez-vous ?",
          answer: "Vous pouvez prendre un rendez-vous en visitant notre page de planification et en sélectionnant le moment qui vous convient le mieux.",
        },
        {
          question: "Puis-je reprogrammer mon rendez-vous ?",
          answer: "Oui, vous pouvez reprogrammer votre rendez-vous via notre système de planification jusqu'à 24 heures avant l'heure du rendez-vous.",
        },
        {
          question: "Que se passe-t-il si je manque mon rendez-vous ?",
          answer: "Si vous manquez votre rendez-vous, vous devrez nous contacter pour le reprogrammer. Nous vous recommandons de reprogrammer dès que possible.",
        },
        {
          question: "Comment annuler mon rendez-vous ?",
          answer: "Vous pouvez annuler votre rendez-vous en accédant à la page de planification ou en nous contactant directement.",
        },
      ],
    },
    es: {
      title: "¿Tienes preguntas? ¡Nosotros tenemos respuestas!",
      description: "Ya sea que tengas curiosidad sobre nuestros servicios, necesites detalles sobre nuestros procesos o tengas otras preguntas, nuestra sección de preguntas frecuentes está aquí para ayudar.",
      faqs: [
        {
          question: "¿Cómo puedo programar una cita?",
          answer: "Puedes programar una cita visitando nuestra página de programación y seleccionando el momento que mejor te funcione.",
        },
        {
          question: "¿Puedo reprogramar mi cita?",
          answer: "Sí, puedes reprogramar tu cita a través de nuestro sistema de programación hasta 24 horas antes de la hora de la cita.",
        },
        {
          question: "¿Qué pasa si pierdo mi cita?",
          answer: "Si pierdes tu cita, necesitarás contactarnos para reprogramarla. Te recomendamos reprogramar lo antes posible.",
        },
        {
          question: "¿Cómo cancelo mi cita?",
          answer: "Puedes cancelar tu cita accediendo a la página de programación o contactándonos directamente.",
        },
      ],
    },
  };

  return (
    <div className='container mx-auto pt-10 md:py-12 bg-gray-200 rounded-lg' >

      <div className='flex flex-col items-center justify-center '>
        <div className='relative font-raleway font-bold mx-auto text-5xl text-center'>
          <h1 className="text-2xl pb-3 font-semibold text-center mx-auto text-black lg:text-3xl dark:text-white">
            {texts[language].title}
          </h1>
          <div className='absolute bottom-0 left-1/2 transform -translate-x-1/2 mx-auto border-b-2 border-green-500 w-[50%] hover:w-[100%] transition-all duration-300 ease-in-out p-4 cursor-pointer'></div>
        </div>

        <p className='text-lg font-raleway w-1/2 text-gray-500 mt-4 text-center'>
          {texts[language].description}
        </p>
      </div>
      <div className='flex items-center md:gap-10 md:flex-row flex-col mt-4' data-aos="fade-up">
        {/* image side */}
        <div className=' md:w-1/2 md:pt-7'>
          <Image
            src="/Contact/team-working-project-together.jpg"
            alt="Main Banner Image"
            width={600}
            height={400}
            className="w-full h-auto md:mb-6 mb-2  rounded-lg"
          />
        </div>
        {/* faq section */}
        <div className=' md:w-1/2'>
          <section className=" dark:bg-gray-900 font-raleway">
            <div className="container max-w-4xl px-6 py-10 mx-auto">

              <div className="mt-12 space-y-8">
                {texts[language].faqs.map((faq, index) => (
                  <div key={index} className="border-2 border-gray-700 rounded-lg dark:border-gray-700">
                    <button
                      className="flex items-center justify-between w-full p-8"
                      onClick={() => toggleFAQ(index)}
                    >
                      <h1 className="font-semibold text-black dark:text-white">
                        {faq.question}
                      </h1>
                      <span className="text-black bg-green-500 rounded-full">
                        <svg
                          className={`w-6 h-6 transform ${activeIndex === index ? 'rotate-180' : 'rotate-0'
                            }`}
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v8m0 0l4-4m-4 4l-4-4" />
                        </svg>
                      </span>
                    </button>
                    {activeIndex === index && (
                      <div className="p-6 border-t-2 border-gray-700">
                        <p className="text-black">{faq.answer}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Faq;
