"use client";
import React, { useEffect, useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Form = () => {
    const form = useRef();
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
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
    
        emailjs.send(
          'service_91t4uxw', // replace with your service ID
          'template_ef1tb9q', // replace with your template ID
          formData,
          'R6ugbQ72oiCVc6W_y' // replace with your user ID
        )
          .then((response) => {
            console.log('SUCCESS!', response.status, response.text);
            if(response.status===200){
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
       
        <section className="py-6 bg-black/10 backdrop-blur-md backdrop-opacity-70 text-slate-50 mt-10 "  data-aos="fade-up">
        <div className='flex flex-col items-center justify-center '>
        <div className='relative font-raleway font-bold mx-auto text-5xl text-center'>
          <h1 className="text-2xl pb-3 font-semibold text-center mx-auto text-slate-50 lg:text-3xl dark:text-white">
          🚀 We’re Here to Help
          </h1>
          <div className='absolute bottom-0 left-1/2 transform -translate-x-1/2 mx-auto border-b-2 border-green-700 w-[50%] hover:w-[100%] transition-all duration-300 ease-in-out p-4 cursor-pointer'></div>
        </div>

        <p className='text-lg font-raleway w-1/2 text-slate-50 mt-2 text-center pb-10'>
        Feel free to reach out to us for any inquiries or support. Just drop your details below.</p>
      </div>
            <div className="grid max-w-6xl grid-cols-1 px-6 mx-auto lg:px-8 md:grid-cols-2 md:divide-x">
                <div className="py-6 md:py-0 md:px-6 mt-16">
                    <h1 className="text-4xl font-bold font-raleway">Get in touch</h1>
                    <p className="pt-2 pb-4 font-raleway">Fill in the form to start a conversation</p>
                    <div className="space-y-4 font-raleway">
                        <p className="flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mr-2 sm:mr-6">
                                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"></path>
                            </svg>
                            <span>Fake address, 9999 City</span>
                        </p>
                        <p className="flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mr-2 sm:mr-6">
                                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
                            </svg>
                            <span>+0123456789</span>
                        </p>
                        <p className="flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mr-2 sm:mr-6">
                                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                            </svg>
                            <span>contact@ecodomain.com</span>
                        </p>
                    </div>
                </div>
                <form 
                noValidate=""
                onSubmit={handleSubmit}
                 className="flex flex-col py-6 space-y-6 md:py-0 md:px-6 font-raleway">
                    <label className="block" htmlFor='from_name'>
                        <span className="pb-5 font-bold">Full name</span>
                        <input
                        name="from_name"
                        value={formData.from_name}
                        onChange={handleChange}
                        placeholder="Your Name"
                        type="text" className="block w-full rounded-md shadow-sm focus:ring focus:ring-opacity-75 focus:ring-violet-600 bg-white p-2" required/>
                    </label>
                    <label className="block" htmlFor='from_email'>
                        <span className="mb-2 font-bold">Email address</span>
                        <input
                        name="from_email"
                        value={formData.from_email}
                        onChange={handleChange}
                        placeholder="Your Email" 
                        type="email" className="block w-full rounded-md shadow-sm focus:ring focus:ring-opacity-75 focus:ring-violet-600 bg-white p-2"
                        required
                        />
                    </label>
                    <label className="block" htmlFor='message'>
                        <span className="mb-2 font-bold">Message</span>
                        <textarea
                        name="message"
                        placeholder="Your Message"
                        value={formData.message}
                        onChange={handleChange} 
                        rows="3" className="block w-full p-2 rounded-md focus:ring focus:ring-opacity-75 focus:ring-orange-600 bg-white" required></textarea>
                    </label>
                    <input type='submit' value="Submit" className="self-center px-8 py-3 text-lg rounded focus:ring hover:ring focus:ring-opacity-75 bg-green-500 text-gray-50 focus:ring-green-600 hover:ring-green-800"></input>
                </form>
            </div>
        </section>
    </div>

    );
};

export default Form;
