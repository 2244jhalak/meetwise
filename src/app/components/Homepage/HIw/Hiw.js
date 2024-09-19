"use client";
import Image from 'next/image';
import React, { useEffect, useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css'; // Import slick styles
import 'slick-carousel/slick/slick-theme.css';

import 'aos/dist/aos.css'; // Import AOS styles
import AOS from 'aos';


const settings = {
    vertical: true,
    verticalSwiping: true,
    infinite: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false, // Remove arrows
    dots: false,   // Remove pagination dots
    autoplay: true, // Enable autoplay
    autoplaySpeed: 3000, // Set the autoplay speed in milliseconds
    pauseOnHover: true, 
};

const Hiw = () => {
    useEffect(() => {
        AOS.init({
          duration: 2000, // Duration of animations (optional)
          once: false, // Whether animation should happen only once while scrolling down (optional)
        });
      }, []);
    
    const sliderRef = useRef(null);

    useEffect(() => {
      const handleWheel = (event) => {
        if (sliderRef.current) {
          if (event.deltaY < 0) {
            sliderRef.current.slickPrev(); // Move to previous slide
          } else if (event.deltaY > 0) {
            sliderRef.current.slickNext(); // Move to next slide
          }
        }
      };
  
      window.addEventListener('wheel', handleWheel, { passive: true });
  
      return () => {
        window.removeEventListener('wheel', handleWheel);
      };
    }, []);
    return (
        <div className='container mx-auto mt-10 bg-[#F8ECFF] px-14 py-10 rounded-lg ' data-aos="fade-up">
        <div className='mb-7 mx-auto container text-center pb-7  flex flex-row items-center justify-between'>
        <div className='relative font-raleway font-bold text-left text-5xl w-1/2'>
      <h1 className='mb-3 text-[#2A106B]'>How It Works</h1>
      <div className='absolute bottom-0 left-0  border-b-2  border-violet-700 w-[20%] hover:w-[50%] transition-all duration-300 ease-in-out p-4 cursor-pointer'></div>
    </div>
            <p className='text-lg font-raleway w-1/2 text-slate-500 mt-4 text-left'>Invitees can easily schedule a meeting by selecting a time that works for them, and it will automatically sync with your calendar, preventing conflicts. </p>
        </div>
          <div data-aos="fade-up" className=' grid md:grid-cols-1 grid-cols-1 lg:grid-cols-2 gap-5 lg:py-8 lg:px-8 bg-violet-100 rounded-xl shadow-xl border border-t-violet-700'>
            {/* left side */}
            <div className="overflow-hidden   ">
              <Slider ref={sliderRef} {...settings} className="h-full">
                {/* Slide 1 */}
                <div className="mx-auto  mt-4 mb-6 dark:bg-gray-800 overflow-hidden cursor-pointer">
                  <div className="flex flex-col md:flex-row items-center ">
                    {/* Content Section (Left Side) */}
                    <div className="p-6 md:w-1/2">
                      <div>
                        <span className="text-xs font-medium text-[#2A106B] uppercase dark:text-blue-400 font-raleway">Step-1</span>
                        <a href="#" className="block mt-2 text-xl font-bold font-raleway  text-gray-800 transition-colors duration-300 transform dark:text-white hover:text-gray-600 hover:underline" tabIndex="0" role="link">
                        Create a Scheduling Link
                        </a>
                        <p className="mt-2 text-sm text-gray-600 dark:text-gray-400 font-raleway">
                        Connect your calendar and Calendly will help you create scheduling links and booking pages based on your availability. .
                        </p>
                      </div>
                      <div className="mt-4">
                       <div>
                       <button type="button" className="px-8 py-3 border transition-all duration-500 ease-in font-raleway  border-violet-700 hover:bg-violet-900 hover:text-white font-semibold rounded-full dark:bg-gray-800 dark:text-gray-00">Learn More</button>
                       </div>
                      </div>
                    </div>
                    {/* Image Section (Right Side) */}
                    <div className="md:w-1/2">
                      <Image className="object-cover w-full h-full " src="https://i.postimg.cc/7P0VvHwL/appointment-booking-with-calendar.png" alt="Article" layout="responsive" width={500} height={1000} />
                    </div>
                  </div>
                </div>
                {/* Slide 2 */}
                <div className=" mx-auto  mt-4 mb-6 dark:bg-gray-800 overflow-hidden cursor-pointer">
                  <div className="flex flex-col md:flex-row items-center">
                    {/* Content Section (Left Side) */}
                    <div className="p-6 md:w-1/2">
                      <div>
                        <span className="text-xs font-medium text-[#2A106B] uppercase dark:text-blue-400 font-raleway">Step-2</span>
                        <a href="#" className="block mt-2 text-xl font-bold font-raleway text-gray-800 t dark:text-white hover:text-gray-600 hover:underline" tabIndex="0" role="link">
                        Team-based scheduling
                        </a>
                        <p className="mt-2 text-sm text-gray-600 dark:text-gray-400 font-raleway">
                        Booking links can be based on different event types - from 15-minute Zoom calls to 30-minute in-person meetings – and rules. .
    
                        </p>
                      </div>
                      <div className="mt-4">
                      <div>
                       <button type="button" className="px-8 py-3 transition-all duration-500 ease-in border font-raleway  border-violet-700 hover:bg-violet-900 hover:text-white font-semibold rounded-full dark:bg-gray-800 dark:text-gray-00">Learn More</button>
                       </div>
                      </div>
                    </div>
                    {/* Image Section (Right Side) */}
                    <div className="md:w-1/2">
                      <Image className="object-cover w-full h-full md:h-full" src="https://i.postimg.cc/tC7JsHzH/hand-drawn-team-starting-business-project.png" alt="Article" layout="responsive" width={500} height={1000} />
                    </div>
                  </div>
                </div>
                {/* Slide 3 */}
                <div className=" mx-auto mt-4 mb-6 dark:bg-gray-800 overflow-hidden cursor-pointer">
                  <div className="flex flex-col md:flex-row items-center">
                    {/* Content Section (Left Side) */}
                    <div className="p-6 md:w-1/2">
                      <div>
                        <span className="text-xs font-medium text-[#2A106B] uppercase dark:text-blue-400">Step-3</span>
                        <a  className="block mt-2 text-xl font-bold font-raleway text-gray-800 transition-colors duration-300 transform dark:text-white hover:text-gray-600 hover:underline" tabIndex="0" role="link">
                        Workflows and integrations
                        </a>
                        <p className="mt-2 text-sm text-gray-600 font-raleway dark:text-gray-400">
                        Workflows and integrations connect Calendly to your process and other tools. 
                        </p>
                      </div>
                      <div className="mt-4">
                      <div>
                       <button type="button" className="px-8 py-3 transition-all duration-500 ease-in border font-raleway border-violet-700 hover:bg-violet-900 hover:text-white font-semibold rounded-full dark:bg-gray-800 dark:text-gray-00">Learn More</button>
                       </div>
                      </div>
                    </div>
                    {/* Image Section (Right Side) */}
                    <div className="md:w-1/2">
                      <Image className="object-cover w-full h-full md:h-full" src="https://i.postimg.cc/TYrdLYWF/time-management-concept-illustration.png" alt="Article" layout="responsive" width={500} height={1000} />
                    </div>
                  </div>
                </div>
         
              </Slider>
            </div>
    {/* right side code */}
         
         
          <div className="relative  bg-white rounded-2xl shadow-md p-6 " style={{ paddingTop: '56.25%' }}>
          <iframe  src="https://www.youtube.com/embed/HkLQUI_bDik?si=wLnfVaaMvAhsGxtY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen
           className="absolute top-0 left-0 w-full h-full p-5 pb-5">
          
          </iframe>
            
          </div>
        </div>
          </div>
    );
};

export default Hiw;