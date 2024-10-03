"use client"

import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const ChooseUs = () => {
    useEffect(() => {
        AOS.init({
            duration: 1500, // Duration of animations (optional)
            once: false, // Whether animation should happen only once while scrolling down (optional)
        });
    }, []);

    return (
        <div className="container mx-auto md:my-12 backdrop-blur-md backdrop-opacity-70" data-aos="fade-up">
            <h1 className="text-2xl pb-3 font-semibold rounded-2xl  border-b-2 border-orange-500 text-center mx-auto text-gray-200 lg:text-3xl md:w-1/2 dark:text-white">Some Important Information About Us</h1>
            <div className="flex flex-col md:gap-4 md:flex-row mx-8 mt-10 justify-between">
                {/* left side */}
                <div className="md:text-xl md:w-1/2 shadow-xl bg-green-50/90 p-2 md:p-4 border-r-2 border-blue-800 rounded-2xl my-5">
                    <div className="my-2 md:my-4 px-5">
                        <h1 className="font-semibold md:text-2xl mb-2">Why Choose Us?</h1>
                        <p>We are driven by the belief that scheduling should not be an obstacle in your day-to-day operations. With our platform, we’ve focused on user-friendly design, robust integrations, and top-notch security so you can confidently schedule, knowing your data is safe. Our team continually works to improve and innovate, ensuring you have the best experience possible.</p>
                    </div>
                    <div className="my-2 px-5">
                        <h1 className="font-semibold md:text-2xl mb-2">Our Value</h1>
                        <p>
                            1. <span className=" md:font-semibold">Simplicity:</span> We believe in making the complex simple. <br />
                            2. <span className="md:font-semibold">Efficiency:</span> Time is precious, and we are here to help you save it. <br />
                            3. <span className="md:font-semibold">Trust:</span> Your privacy and security are our top priorities. <br />
                            4. <span className="md:font-semibold">Innovation:</span> Constantly improving to meet your needs.
                        </p>
                    </div>

                </div>
                {/* right side */}
                <div className="md:w-1/2 md:text-xl md:p-4 border-l-2 rounded-2xl shadow-xl bg-orange-50/90 border-blue-800 my-5">
                    <div className="my-2 md:my-4 px-5">
                        <h1 className="font-semibold md:text-2xl mb-2">Meet the Team</h1>
                        <p>Our team is a blend of developers, designers, and problem-solvers, all passionate about creating a product that makes a difference in people’s lives. We come from diverse backgrounds, united by our shared vision to create the best scheduling experience for our users.</p>
                    </div>
                    <div className="px-5">
                        <h1 className="font-semibold md:text-2xl mb-2">Join Us </h1>
                        <p>As we continue to grow, we invite you to join our journey! Whether you’re looking to schedule a meeting, suggest a feature, or collaborate with us, we’re here to help</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ChooseUs;