"use client";
import React, { useEffect, useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useLanguage } from '../context/LanguageContext';


const Form = () => {
    const form = useRef();
    const { language } = useLanguage(); // Use the language context

    useEffect(() => {
        AOS.init({
          duration: 2000, // Duration of animations (optional)
          once: false, // Whether animation should happen only once while scrolling down (optional)
        });
    }, []);

    const [formData, setFormData] = useState({
        from_name: '',
        from_email: '',
        message: ''
    });

    const texts = {
        en: {
            title: "🚀 We’re Here to Help",
            subtitle: "Feel free to reach out to us for any inquiries or support. Just drop your details below.",
            namePlaceholder: "Your Name",
            emailPlaceholder: "Your Email",
            messagePlaceholder: "Your Message",
            submit: "Submit",
            getInTouch: "Get in touch",
            fillForm: "Fill in the form to start a conversation"
        },
        bn: {
            title: "🚀 আমরা সাহায্য করতে এখানে আছি",
            subtitle: "যেকোনো অনুসন্ধান বা সহায়তার জন্য আমাদের সাথে যোগাযোগ করতে পারেন। নিচে আপনার বিস্তারিত তথ্য দিন।",
            namePlaceholder: "আপনার নাম",
            emailPlaceholder: "আপনার ইমেইল",
            messagePlaceholder: "আপনার বার্তা",
            submit: "জমা দিন",
            getInTouch: "যোগাযোগ করুন",
            fillForm: "আলোচনা শুরু করার জন্য ফর্ম পূরণ করুন"
        },
        fr: {
            title: "🚀 Nous sommes là pour vous aider",
            subtitle: "N'hésitez pas à nous contacter pour toute question ou support. Il vous suffit de laisser vos coordonnées ci-dessous.",
            namePlaceholder: "Votre nom",
            emailPlaceholder: "Votre email",
            messagePlaceholder: "Votre message",
            submit: "Soumettre",
            getInTouch: "Entrer en contact",
            fillForm: "Remplissez le formulaire pour commencer une conversation"
        },
        es: {
            title: "🚀 Estamos aquí para ayudar",
            subtitle: "No dude en comunicarse con nosotros para cualquier consulta o soporte. Simplemente deje sus detalles a continuación.",
            namePlaceholder: "Tu nombre",
            emailPlaceholder: "Tu correo electrónico",
            messagePlaceholder: "Tu mensaje",
            submit: "Enviar",
            getInTouch: "Ponte en contacto",
            fillForm: "Complete el formulario para comenzar una conversación"
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs.send(
            'service_91t4uxw',
            'template_ef1tb9q',
            formData,
            'R6ugbQ72oiCVc6W_y'
        )
        .then((response) => {
            console.log('SUCCESS!', response.status, response.text);
            if(response.status === 200){
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Message sent successfully!",
                    showConfirmButton: false,
                    timer: 1500
                });
            }
            
            // Reset form fields
            setFormData({
                from_name: '',
                from_email: '',
                message: ''
            });
        })
        .catch((error) => {
            console.log('FAILED...', error);
            alert('Failed to send message. Please try again later.');
        });
    };

    return (
        <div className='container mx-auto'>
            <section className="py-6 bg-black/10 backdrop-blur-md backdrop-opacity-70 text-slate-50 mt-10" data-aos="fade-up">
                <div className='flex flex-col items-center justify-center'>
                    <h1 className="text-2xl pb-3 font-semibold text-center mx-auto text-slate-50 lg:text-3xl dark:text-white">
                        {texts[language].title}
                    </h1>
                    <p className='text-lg font-raleway w-1/2 text-slate-50 mt-2 text-center pb-10'>
                        {texts[language].subtitle}
                    </p>
                </div>
                <div className="grid max-w-6xl grid-cols-1 px-6 mx-auto lg:px-8 md:grid-cols-2 md:divide-x">
                    <div className="py-6 md:py-0 md:px-6 mt-16">
                        <h1 className="text-4xl font-bold font-raleway">{texts[language].getInTouch}</h1>
                        <p className="pt-2 pb-4 font-raleway">{texts[language].fillForm}</p>
                        {/* Contact information can be added here */}
                    </div>
                    <form noValidate onSubmit={handleSubmit} className="flex flex-col py-6 space-y-6 md:py-0 md:px-6 font-raleway">
                        <label className="block" htmlFor='from_name'>
                            <span className="pb-5 font-bold">Full name</span>
                            <input
                                name="from_name"
                                value={formData.from_name}
                                onChange={handleChange}
                                placeholder={texts[language].namePlaceholder}
                                type="text" className="block w-full rounded-md shadow-sm focus:ring focus:ring-opacity-75 focus:ring-violet-600 bg-white p-2" required/>
                        </label>
                        <label className="block" htmlFor='from_email'>
                            <span className="mb-2 font-bold">Email address</span>
                            <input
                                name="from_email"
                                value={formData.from_email}
                                onChange={handleChange}
                                placeholder={texts[language].emailPlaceholder} 
                                type="email" className="block w-full rounded-md shadow-sm focus:ring focus:ring-opacity-75 focus:ring-violet-600 bg-white p-2" required/>
                        </label>
                        <label className="block" htmlFor='message'>
                            <span className="mb-2 font-bold">Message</span>
                            <textarea
                                name="message"
                                placeholder={texts[language].messagePlaceholder}
                                value={formData.message}
                                onChange={handleChange} 
                                rows="3" className="block w-full p-2 rounded-md focus:ring focus:ring-opacity-75 focus:ring-orange-600 bg-white" required></textarea>
                        </label>
                        <input type='submit' value={texts[language].submit} className="self-center px-8 py-3 text-lg rounded focus:ring hover:ring focus:ring-opacity-75 bg-green-500 text-gray-50 focus:ring-green-600 hover:ring-green-800"></input>
                    </form>
                </div>
            </section>
        </div>
    );
};

export default Form;

