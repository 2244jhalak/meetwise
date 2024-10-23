"use client"; // Ensure client-side rendering
import React from 'react';
import Marquee from 'react-fast-marquee'; // Import Marquee for scrolling
import Image from 'next/image'; // Import Image component from Next.js

const Partners = () => {
    return (
        <div className='container mx-auto bg-black/60 backdrop-blur-md backdrop-opacity-70 py-10'>
            <h1 className="text-2xl pb-3 font-semibold my-4 md:my-8 rounded-2xl  border-b-2 border-green-500 text-center mx-auto text-slate-100 lg:text-3xl md:w-1/4 dark:text-white">Our Trusted Partners</h1>
         
            {/* Gradient background with transparency on the edges */}
            <div className="relative overflow-hidden">
                <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-black/80 to-transparent z-10"></div>
                <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-black/80 to-transparent z-10"></div>

                <Marquee direction="right"
                    speed={30}         // Speed in px/s
                    gradient={false}   // Disable Marquee's built-in gradient
                    pauseOnHover={true} // Pause on hover
                    pauseOnClick={false} // No pause on click
                    delay={0}           // No delay
                    loop={0}            // Infinite loop
                    className='pt-5 pb-5 z-0 cursor-pointer'>
                    
                    {/* Partner Logos */}
                    <div style={{ margin: "0 20px" }}>
                        <Image
                            src="/partner/calender-removebg-preview.png" 
                            alt="Google Calendar"
                            width={200}
                            height={200}
                        />
                    </div>
                    <div style={{ margin: "0 20px" }}>
                        <a></a>
                        <Image
                            src="/partner/outlook.png"
                            alt="Outlook"
                            width={200}
                            height={200}
                        />
                    </div>
                    <div style={{ margin: "0 20px" }}>
                        <Image
                            src="/partner/zoom.png"
                            alt="Zoom"
                            width={200}
                            height={200}
                        />
                    </div>
                    <div style={{ margin: "0 20px" }}>
                        <Image
                            src="/partner/calendly.png"
                            alt="Calendly"
                            width={200}
                            height={200}
                        />
                    </div>
                    <div style={{ margin: "0 20px" }}>
                        <Image
                            src="/partner/meet-removebg-preview.png"
                            alt="Google Meet"
                            width={300}
                            height={300}
                        />
                    </div>
                    <div style={{ margin: "0 20px" }}>
                        <Image
                            src="/partner/slack-removebg-preview.png"
                            alt="Zoom"
                            width={300}
                            height={200}
                        />
                    </div>
                </Marquee>
            </div>
        </div>
    );
};

export default Partners;
