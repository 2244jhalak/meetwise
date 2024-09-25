"use client"
import Image from "next/image";
import logo from "/public/logo/LOGO.png";
import { useLanguage } from "../context/LanguageContext";

const Footer = () => {
  const content = {
    en: {
      tagline: "Simplifying the way you schedule meetings.",
      builtBy: "Designed and built with passion by the team.",
      product: "Product",
      overview: "Overview",
      meetWiseAI: "Meet-wise AI",
      integration: "Integration",
      company: "Company",
      about: "About",
      mission: "Mission and Values",
      pricing: "Pricing",
      resources: "Resources",
      career: "Career",
      contact: "Contact us",
      blog: "Blog",
      rights: "©MeetWise 2024 | Simplifying your online meeting experience. All rights reserved |",
    },
    bn: {
      tagline: "আপনার মিটিংগুলো সহজে নির্ধারণের পদ্ধতি।",
      builtBy: "ভালবাসার সঙ্গে ডিজাইন এবং তৈরি করা হয়েছে।",
      product: "পণ্য",
      overview: "সারসংক্ষেপ",
      meetWiseAI: "মিট-ওয়াইজ এআই",
      integration: "ইন্টিগ্রেশন",
      company: "কোম্পানি",
      about: "আমাদের সম্পর্কে",
      mission: "মিশন এবং মূল্যবোধ",
      pricing: "মূল্য নির্ধারণ",
      resources: "সংস্থান",
      career: "ক্যারিয়ার",
      contact: "যোগাযোগ করুন",
      blog: "ব্লগ",
      rights: "©MeetWise 2024 | আপনার অনলাইন মিটিং অভিজ্ঞতা সহজ করা। সমস্ত অধিকার সংরক্ষিত |",
    },
    es: {
      tagline: "Simplificando la forma en que programas reuniones.",
      builtBy: "Diseñado y construido con pasión por el equipo.",
      product: "Producto",
      overview: "Descripción general",
      meetWiseAI: "Meet-wise AI",
      integration: "Integración",
      company: "Empresa",
      about: "Acerca de",
      mission: "Misión y Valores",
      pricing: "Precios",
      resources: "Recursos",
      career: "Carrera",
      contact: "Contáctenos",
      blog: "Blog",
      rights: "©MeetWise 2024 | Simplificando su experiencia de reunión en línea. Todos los derechos reservados |",
    },
    fr: {
      tagline: "Simplifiant la manière dont vous planifiez des réunions.",
      builtBy: "Conçu et construit avec passion par l'équipe.",
      product: "Produit",
      overview: "Aperçu",
      meetWiseAI: "Meet-wise AI",
      integration: "Intégration",
      company: "Société",
      about: "À propos",
      mission: "Mission et valeurs",
      pricing: "Tarification",
      resources: "Ressources",
      career: "Carrière",
      contact: "Contactez-nous",
      blog: "Blog",
      rights: "©MeetWise 2024 | Simplifiant votre expérience de réunion en ligne. Tous droits réservés |",
    },
  };
  const {language} = useLanguage();  

  

  return (
    <div className="bg-[#F8ECFF] ">
      <div className="pt-16 flex flex-col md:flex-row gap-5 px-[10%]">
        {/* Left part */}
        <div className="flex-1">
          <Image src={logo} alt="Website logo" width={80} height={80} />
          <p className="text-xs md:text-lg lg:text-xl text-[#000000]">
            {content[language].tagline}
          </p>
          <h3 className="text-[#33118133] text-2xl md:text-5xl lg:text-7xl font-semibold">
            {/* Removed MeetWise name */}
          </h3>
        </div>
        {/* Right part */}
        <div className="grid grid-cols-3 gap-2 md:gap-5 border flex-1 text-black text-center">
          <div className="flex flex-col gap-3">
            <h2 className="text-lg font-bold">{content[language].product}</h2>
            <a href="/">{content[language].overview}</a>
            <a href="/">{content[language].meetWiseAI}</a>
            <a href="/">{content[language].integration}</a>
          </div>
          <div className="flex flex-col gap-3 border">
            <h2 className="text-lg font-bold">{content[language].company}</h2>
            <a href="/">{content[language].about}</a>
            <a href="/">{content[language].mission}</a>
            <a href="/">{content[language].pricing}</a>
          </div>
          <div className="flex flex-col gap-3 border">
            <h2 className="text-lg font-bold">{content[language].resources}</h2>
            <a href="/">{content[language].career}</a>
            <a href="/">{content[language].contact}</a>
            <a href="/">{content[language].blog}</a>
          </div>
        </div>
      </div>
      <p className="text-black text-center py-12">
        {content[language].rights} {content[language].builtBy}
      </p>
    </div>
  );
};

export default Footer;
