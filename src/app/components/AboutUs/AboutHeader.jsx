import React from 'react';

const AboutHeader = () => {
    return (
        <div className='container mx-auto'>
            <div
                className="hero h-[300px] md:h-[450px] rounded-sm"
                style={{
                    // backgroundImage: `url('')`,
                    backgroundSize: 'cover',        // Ensure the image covers the container
                    backgroundPosition: 'center',   // Center the image
                    backgroundRepeat: 'no-repeat'
                }}
            >
                <div className="hero-overlay bg-opacity-50"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="my-auto">
                        <h1 className=" text-4xl md:text-6xl w-full pt-20  text-white font-extrabold font-raleway mb-4" >About Us</h1>
                        <p className="mt-2 md:mt-5 text-base md:text-xl w-full  text-gray-200 p-4  font-raleway md:mb-4" >
                            Welcome to Meetwise, your go-to platform for effortless and efficient meeting scheduling. We are a team of tech enthusiasts, committed to simplifying the way individuals and businesses schedule their meetings. In today’s fast-paced world, coordinating calendars should be a breeze, and that’s exactly what we aim to provide.
                        </p>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutHeader;