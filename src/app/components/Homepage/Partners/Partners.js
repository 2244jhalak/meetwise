"use client"; // Ensure client-side rendering
import React from "react";
import Marquee from "react-fast-marquee"; // Import Marquee for scrolling
import Image from "next/image"; // Import Image component from Next.js
import { useLanguage } from "../../context/LanguageContext";

const translations = {
  en: {
    title: "Our Trusted Partners",
    description:
      "Collaborating with leading brands to streamline scheduling and productivity.",
  },
  bn: {
    title: "আমাদের বিশ্বস্ত অংশীদার",
    description:
      "সূচি ও উৎপাদনশীলতা বাড়াতে শীর্ষ ব্র্যান্ডগুলোর সঙ্গে অংশীদারিত্ব।",
  },
  fr: {
    title: "Nos partenaires de confiance",
    description:
      "Collaboration avec des marques de premier plan pour optimiser la planification et la productivité.",
  },
  es: {
    title: "Nuestros socios de confianza",
    description:
      "Colaboración con marcas líderes para optimizar la programación y productividad.",
  },
};

const Partners = () => {
  const { language } = useLanguage();
  return (
    <div id="partner" className=" container mx-auto">
      <div className=" rounded-t-xl shadow-t-xl pt-10   bg-gray-100 ">
        <div className="flex flex-col items-center justify-center ">
          <h1 className="text-2xl pb-3 font-semibold my-4 md:my-8 rounded-2xl  border-b-2 border-green-500 text-center mx-auto text-black lg:text-3xl md:w-1/4 dark:text-white">
            {translations[language].title}
          </h1>

          <p className="text-lg font-raleway w-1/2 text-gray-500 mt-4 text-center my-8">
            {translations[language].description}
          </p>
        </div>

        {/* Gradient background with transparency on the edges */}
        <div className="relative overflow-hidden">
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white/70 to-transparent z-10"></div>
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white/70 to-transparent z-10"></div>

          <Marquee
            direction="right"
            speed={30} // Speed in px/s
            gradient={false} // Disable Marquee's built-in gradient
            pauseOnHover={true} // Pause on hover
            pauseOnClick={false} // No pause on click
            delay={0} // No delay
            loop={0} // Infinite loop
            className="pb-5 z-0 cursor-pointer"
          >
            {/* Partner Logos */}
            {[
              "calender-removebg-preview.png",
              "outlook.png",
              "zoom.png",
              "calendly.png",
              "meet-removebg-preview.png",
              "slack2.png",
            ].map((logo, index) => (
              <div key={index} className="mx-5">
                {/* Card Design */}
                <div className="bg-white rounded-lg shadow-lg p-4 flex items-center justify-center">
                  <Image
                    src={`/partner/${logo}`}
                    alt={`Partner Logo ${index + 1}`}
                    width={200}
                    height={200}
                    className="object-contain h-20 w-auto" // Adjust height as necessary
                  />
                </div>
              </div>
            ))}
          </Marquee>
        </div>
      </div>
    </div>
  );
};

export default Partners;
