import React from "react";
import { useLanguage } from "../context/LanguageContext";


const TryMeet = () => {
  const { language } = useLanguage(); 

  const texts = {
    en: {
      title: "Try Meet wise",
      description: "With our advanced artificial intelligence, your meetings are not just recorded; they are transformed into valuable insights and productivity boosters.",
      buttonStart: "Start for free",
      buttonHover: "Hover Me"
    },
    bn: {
      title: "মিট ওয়াইজ চেষ্টা করুন",
      description: "আমাদের উন্নত কৃত্রিম বুদ্ধিমত্তার মাধ্যমে আপনার মিটিংগুলি শুধু রেকর্ড করা হয় না; বরং সেগুলি মূল্যবান অন্তর্দৃষ্টি এবং উৎপাদনশীলতার বৃদ্ধিতে রূপান্তরিত হয়।",
      buttonStart: "ফ্রি শুরু করুন",
      buttonHover: "আমাকে হভার করুন"
    },
    es: {
      title: "Prueba Meet wise",
      description: "Con nuestra inteligencia artificial avanzada, tus reuniones no solo se graban; se transforman en valiosos conocimientos y potenciadores de productividad.",
      buttonStart: "Comenzar gratis",
      buttonHover: "Pasa el ratón sobre mí"
    },
    fr: {
      title: "Essayez Meet wise",
      description: "Avec notre intelligence artificielle avancée, vos réunions ne sont pas seulement enregistrées; elles se transforment en précieuses idées et boosters de productivité.",
      buttonStart: "Commencer gratuitement",
      buttonHover: "Survolez-moi"
    }
  };

  const currentTexts = texts[language] || texts.en; // বর্তমান ভাষার টেক্সট নির্ধারণ করুন

  return (
    <div className="bg-white py-[10%]">
      <h2 className="text-lg md:text-2xl lg:text-6xl text-[#331181] font-medium text-center">
        {currentTexts.title}
      </h2>
      <p className="text-center my-10 text-black">
        {currentTexts.description}
      </p>

      {/* buttons are here */}
      <div className="flex justify-center items-center gap-6">
        <button className="cursor-pointer transition-all bg-[#33118199] text-white px-6 py-2 rounded-3xl border-[#331181B3] border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px] active:border-b-[2px] active:brightness-90 active:translate-y-[2px]">
          {currentTexts.buttonStart}
        </button>

        <button className="bg-white text-[#331181] border border-[#331181] border-b-4 font-medium overflow-hidden relative px-4 py-2 rounded-3xl hover:bg-[#331181] hover:text-white hover:brightness-150 hover:border-t-4 hover:border-b active:opacity-75 outline-none duration-300 group">
          <span className="bg-[#331181] shadow-[#331181] absolute -top-[150%] left-0 inline-flex w-80 h-[5px] rounded-md opacity-50 group-hover:top-[150%] duration-500 shadow-[0_0_10px_10px_rgba(0,0,0,0.3)]"></span>
          {currentTexts.buttonHover}
        </button>
      </div>
      <div className="flex items-center justify-center rounded-3xl bg-slate-100 w-auto">
        <iframe
          className="p-4 rounded-2xl"
          width="560"
          height="315"
          src="https://www.youtube.com/embed/T-OTCU1xXmY?si=Mt3m5RNjwMpZWKUo"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default TryMeet;
