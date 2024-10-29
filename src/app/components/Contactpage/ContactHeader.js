"use client";
import React from "react";
import { useLanguage } from "../context/LanguageContext"; // Language context import

const translations = {
  en: {
    title: "Contact Us",
    description:
      "Have any questions or feedback? We are here to help! Reach out to us through our contact form, and we will get back to you as soon as possible.",
  },
  bn: {
    title: "আমাদের সাথে যোগাযোগ করুন",
    description:
      "আপনার কি কোন প্রশ্ন বা মতামত আছে? আমরা সাহায্য করতে এখানে আছি! আমাদের যোগাযোগ ফর্মের মাধ্যমে আমাদের সাথে যোগাযোগ করুন, এবং আমরা যত তাড়াতাড়ি সম্ভব আপনার সাথে যোগাযোগ করব।",
  },
  fr: {
    title: "Contactez-nous",
    description:
      "Vous avez des questions ou des commentaires? Nous sommes là pour vous aider! Contactez-nous via notre formulaire de contact et nous vous répondrons dès que possible.",
  },
  es: {
    title: "Contáctanos",
    description:
      "¿Tienes alguna pregunta o comentario? ¡Estamos aquí para ayudar! Comuníquese con nosotros a través de nuestro formulario de contacto y le responderemos lo antes posible.",
  },
};

const ContactHeader = () => {
  const { language } = useLanguage(); // Get current language from context

  return (
    <div className="container mx-auto  backdrop-blur-md ">
      <div
        className="hero h-[300px] lg:h-[350px] rounded-sm"
        style={{
          backgroundImage: `url('')`, // Add your image URL here
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className=" bg-opacity-50"></div>
        <div className="px-4 text-center text-neutral-content">
          <div className="my-auto">
            <h1 className="text-4xl md:text-6xl w-full pt-7 text-white font-extrabold font-raleway mb-4">
              {translations[language].title}{" "}
              {/* Dynamic title based on language */}
            </h1>
            dsf
            <p className="mt-2 md:mt-5 text-base md:text-xl w-full text-gray-200 p-4 font-raleway md:mb-4">
              {translations[language].description}{" "}
              {/* Dynamic description based on language */}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactHeader;
