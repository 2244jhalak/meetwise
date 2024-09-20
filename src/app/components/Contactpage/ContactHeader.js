import React from 'react';

const ContactHeader = () => {
  return (
    <div className='container mx-auto'>
      <div
        className="hero h-[300px] md:h-[450px] rounded-sm"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.7)),url('/Contact/asethetic.jpg')`,
          backgroundSize: 'cover',        // Ensure the image covers the container
          backgroundPosition: 'center',   // Center the image
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="hero-overlay bg-opacity-70"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="my-auto">
            <h1 className=" text-4xl md:text-6xl w-full pt-20  text-white font-extrabold font-raleway mb-4" >Contact Us</h1>
            <p className="mt-2 md:mt-5 text-base md:text-xl w-full  text-gray-200  font-raleway md:mb-4" >
              Have any questions or feedback? We are here to help! Reach out to us through our contact form, and we will get back to you as soon as possible.
            </p>

          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactHeader;