"use client"

import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const OurOffer = () => {
    useEffect(() => {
        AOS.init({
            duration: 1500, // Duration of animations (optional)
            once: false, // Whether animation should happen only once while scrolling down (optional)
        });
    }, []);

    return (
        <div className=" text-gray-200 container mx-auto md:p-7 shadow-xl hero-overlay bg-opacity-50 md:my-28 my-10 backdrop-blur-md backdrop-opacity-70" data-aos="fade-up">
            <h1 className="text-2xl pb-3 font-semibold rounded-2xl md:w-1/4  border-b-2 border-green-500 text-center mx-auto text-gray-200 lg:text-3xl dark:text-white">
                What We Offer
            </h1>

            <p className="md:text-xl px-5 my-8">At Meetwise, we offer a range of features designed to save you time:</p>
            <ul className="mx-auto md:text-xl px-5 pb-5">
                <li className="my-2"><span className=" font-semibold">1.Smart Calendar Integration:</span> Sync with Google Calendar, Outlook, and more to ensure all your meetings are in one place.</li>
                <li className="my-2"><span className="font-semibold">2.Automatic Time Zone Adjustments:</span>No more confusion over time zones – we automatically adjust meeting times based on participants’ locations.</li>
                <li className="my-2"><span className="font-semibold">3.Flexible Scheduling:</span>Offer multiple time slots, set buffers between meetings, and avoid double bookings.</li>
                <li className="my-2"><span className="font-semibold">4.Group Scheduling:</span>Need to coordinate with a team? Our group scheduling tools make it easy to find a common time.</li>
                <li className="my-2"><span className="font-semibold">5.Customizable Meeting Pages</span>Personalize your meeting links with branding, agendas, and more.</li>

            </ul>

        </div>
    );
};

export default OurOffer;