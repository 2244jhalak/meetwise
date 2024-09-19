/* eslint-disable react/no-unescaped-entities */
"use client";
import React, { useEffect } from 'react';
import Image from "next/image";
import { useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Faq = () => {
    useEffect(() => {
        AOS.init({
          duration: 2000, // Duration of animations (optional)
          once: false, // Whether animation should happen only once while scrolling down (optional)
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
  
    return (
        <div className='container mx-auto pt-7 bg-[#F8ECFF]'  data-aos="fade-up">
              
              <div className='flex flex-col items-center justify-center '>
  <div className='relative font-raleway font-bold mx-auto text-5xl text-center'>
    <h1 className="text-2xl pb-3 font-semibold text-center mx-auto text-gray-800 lg:text-3xl dark:text-white">
    Got Questions? We've Got Answers!
    </h1>
    <div className='absolute bottom-0 left-1/2 transform -translate-x-1/2 mx-auto border-b-2 border-violet-700 w-[50%] hover:w-[100%] transition-all duration-300 ease-in-out p-4 cursor-pointer'></div>
  </div>

  <p className='text-lg font-raleway w-1/2 text-slate-500 mt-4 text-center'>
  Whether you're curious about our services, need details on our processes, or have any other inquiries, our FAQ section is here to help. 
  </p>
</div>
            <div className='flex items-center gap-10 md:flex-row flex-col mt-3'  data-aos="fade-up">
                {/* image side */}
                <div className=' w-1/2'>
                <Image
            src="/Contact/team-working-project-together.jpg"
            alt="Main Banner Image"
            width={600}
            height={400}
            className="w-full h-auto mb-6  rounded-lg"
          />
                </div>
                {/* faq section */}
                <div className=' w-1/2'>
                <section className=" dark:bg-gray-900 font-raleway">
      <div className="container max-w-4xl px-6 py-10 mx-auto">
       

        <div className="mt-12 space-y-8">
          {/* FAQ 1 */}
          <div className="border-2 border-gray-100 rounded-lg dark:border-gray-700">
            <button
              className="flex items-center justify-between w-full p-8"
              onClick={() => toggleFAQ(1)}
            >
              <h1 className="font-semibold text-gray-700 dark:text-white">
                How can I schedule an appointment?
              </h1>
              <span className="text-white bg-blue-500 rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d={
                      activeIndex === 1 ? 'M18 12H6' : 'M12 6v6m0 0v6m0-6h6m-6 0H6'
                    }
                  />
                </svg>
              </span>
            </button>

            {activeIndex === 1 && (
              <div>
                <hr className="border-gray-200 dark:border-gray-700" />
                <p className="p-8 text-sm text-gray-500 dark:text-gray-300">
                  You can schedule an appointment by visiting our scheduling page and selecting the time that works best for you.
                </p>
              </div>
            )}
          </div>

          {/* FAQ 2 */}
          <div className="border-2 border-gray-100 rounded-lg dark:border-gray-700">
            <button
              className="flex items-center justify-between w-full p-8"
              onClick={() => toggleFAQ(2)}
            >
              <h1 className="font-semibold text-gray-700 dark:text-white">
                Can I reschedule my appointment?
              </h1>
              <span className="text-white bg-blue-500 rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d={
                      activeIndex === 2 ? 'M18 12H6' : 'M12 6v6m0 0v6m0-6h6m-6 0H6'
                    }
                  />
                </svg>
              </span>
            </button>

            {activeIndex === 2 && (
              <div>
                <hr className="border-gray-200 dark:border-gray-700" />
                <p className="p-8 text-sm text-gray-500 dark:text-gray-300">
                  Yes, you can reschedule your appointment through our scheduling system up to 24 hours before the appointment time.
                </p>
              </div>
            )}
          </div>

          {/* FAQ 3 */}
          <div className="border-2 border-gray-100 rounded-lg dark:border-gray-700">
            <button
              className="flex items-center justify-between w-full p-8"
              onClick={() => toggleFAQ(3)}
            >
              <h1 className="font-semibold text-gray-700 dark:text-white">
                What happens if I miss my appointment?
              </h1>
              <span className="text-white bg-blue-500 rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d={
                      activeIndex === 3 ? 'M18 12H6' : 'M12 6v6m0 0v6m0-6h6m-6 0H6'
                    }
                  />
                </svg>
              </span>
            </button>

            {activeIndex === 3 && (
              <div>
                <hr className="border-gray-200 dark:border-gray-700" />
                <p className="p-8 text-sm text-gray-500 dark:text-gray-300">
                  If you miss your appointment, you will need to contact us to reschedule. We recommend rescheduling as soon as possible.
                </p>
              </div>
            )}
          </div>

          {/* FAQ 4 */}
          <div className="border-2 border-gray-100 rounded-lg dark:border-gray-700">
            <button
              className="flex items-center justify-between w-full p-8"
              onClick={() => toggleFAQ(4)}
            >
              <h1 className="font-semibold text-gray-700 dark:text-white">
                How do I cancel my appointment?
              </h1>
              <span className="text-white bg-blue-500 rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d={
                      activeIndex === 4 ? 'M18 12H6' : 'M12 6v6m0 0v6m0-6h6m-6 0H6'
                    }
                  />
                </svg>
              </span>
            </button>

            {activeIndex === 4 && (
              <div>
                <hr className="border-gray-200 dark:border-gray-700" />
                <p className="p-8 text-sm text-gray-500 dark:text-gray-300">
                  You can cancel your appointment by accessing the scheduling page or contacting us directly.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
                </div>
            </div>
        </div>
    );
};

export default Faq;