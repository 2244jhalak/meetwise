"use client";
import Image from "next/image";
import logo from "/public/logo/MeetWise-logo.png";
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
      socialMedia: "Social media",
      rights:
        "© MeetWise 2024 | Simplifying your online meeting experience. All rights reserved |",
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
      socialMedia: "সামাজিক মাধ্যম",
      rights:
        "© MeetWise 2024 | আপনার অনলাইন মিটিং অভিজ্ঞতা সহজ করা। সমস্ত অধিকার সংরক্ষিত |",
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
      socialMedia: "Redes sociales",
      rights:
        "© MeetWise 2024 | Simplificando su experiencia de reunión en línea. Todos los derechos reservados |",
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
      socialMedia: "Réseaux sociaux",
      rights:
        "© MeetWise 2024 | Simplifiant votre expérience de réunion en ligne. Tous droits réservés |",
    },
  };
  const { language } = useLanguage();

  return (
    <div className="bg-gray-800  text-black">
      <footer className="flex flex-col md:flex-row py-14 text-gray-400 w-11/12 mx-auto">
        {/* remove the svg file  */}
        <aside>
          <p className="text-3xl font-bold text-slate-200">
            Meet<span className="text-green-500">Wise</span>
          </p>
          <p>{content[language].tagline}</p>
        </aside>

        <nav className="grid grid-cols-2 md:grid-cols-4 w-full">
          {/* 1st col  */}
          <nav className="flex flex-col mt-5 md:mt-0  md:text-right">
            <h6 className="footer-title text-white">
              {content[language].product}
            </h6>
            {/* <br /> */}
            <a className="link link-hover text-sm md:text-base mt-1" href="/">
              {" "}
              {content[language].overview}
            </a>
            {/* <br /> */}
            <a className="link link-hover text-sm md:text-base mt-1" href="/">
              {" "}
              {content[language].meetWiseAI}
            </a>
            {/* <br /> */}
            <a className="link link-hover text-sm md:text-base mt-1" href="/">
              {" "}
              {content[language].integration}
            </a>
          </nav>

          {/* 2nd col  */}
          <nav className=" flex flex-col mt-5 md:mt-0 md:text-right">
            <h6 className="footer-title text-white">
              {content[language].company}
            </h6>
            {/* <br /> */}
            <a className="link link-hover text-sm md:text-base mt-1" href="/">
              {" "}
              {content[language].about}
            </a>
            {/* <br /> */}
            <a className="link link-hover text-sm md:text-base mt-1" href="/">
              {" "}
              {content[language].mission}
            </a>
            {/* <br /> */}
            <a className="link link-hover text-sm md:text-base mt-1" href="/">
              {" "}
              {content[language].pricing}
            </a>
          </nav>

          {/* 3rd col  */}
          <nav className="flex flex-col mt-5 md:mt-0 md:text-right">
            <h6 className="footer-title text-white">
              {content[language].resources}
            </h6>
            <a className="link link-hover text-sm md:text-base mt-1" href="/">
              {" "}
              {content[language].career}
            </a>
            <a className="link link-hover text-sm md:text-base mt-1" href="/">
              {" "}
              {content[language].contact}
            </a>
            <a className="link link-hover text-sm md:text-base mt-1" href="/">
              {" "}
              {content[language].blog}
            </a>
          </nav>

          {/* 4th col social icon  */}
          <div className="space-y-3 text-gray-400 mt-5 md:mt-0 md:text-right">
            <div className="footer-title text-white">
              {content[language].socialMedia}
            </div>
            <div className="flex justify-start md:justify-end space-x-3">
              <a
                rel="noopener noreferrer"
                href="#"
                title="Facebook"
                className="flex items-center p-1"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 32 32"
                  className="w-5 h-5 fill-current"
                >
                  <path d="M32 16c0-8.839-7.167-16-16-16-8.839 0-16 7.161-16 16 0 7.984 5.849 14.604 13.5 15.803v-11.177h-4.063v-4.625h4.063v-3.527c0-4.009 2.385-6.223 6.041-6.223 1.751 0 3.584 0.312 3.584 0.312v3.937h-2.021c-1.984 0-2.604 1.235-2.604 2.5v3h4.437l-0.713 4.625h-3.724v11.177c7.645-1.199 13.5-7.819 13.5-15.803z"></path>
                </svg>
              </a>
              <a
                rel="noopener noreferrer"
                href="#"
                title="Twitter"
                className="flex items-center p-1"
              >
                <svg
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5 fill-current"
                >
                  <path d="M23.954 4.569a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.691 8.094 4.066 6.13 1.64 3.161a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.061a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.937 4.937 0 004.604 3.417 9.868 9.868 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63a9.936 9.936 0 002.46-2.548l-.047-.02z"></path>
                </svg>
              </a>
              <a
                rel="noopener noreferrer"
                href="#"
                title="Instagram"
                className="flex items-center p-1"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 32 32"
                  fill="currentColor"
                  className="w-5 h-5 fill-current"
                >
                  <path d="M16 0c-4.349 0-4.891 0.021-6.593 0.093-1.709 0.084-2.865 0.349-3.885 0.745-1.052 0.412-1.948 0.959-2.833 1.849-0.891 0.885-1.443 1.781-1.849 2.833-0.396 1.020-0.661 2.176-0.745 3.885-0.077 1.703-0.093 2.244-0.093 6.593s0.021 4.891 0.093 6.593c0.084 1.704 0.349 2.865 0.745 3.885 0.412 1.052 0.959 1.948 1.849 2.833 0.885 0.891 1.781 1.443 2.833 1.849 1.020 0.391 2.181 0.661 3.885 0.745 1.703 0.077 2.244 0.093 6.593 0.093s4.891-0.021 6.593-0.093c1.704-0.084 2.865-0.355 3.885-0.745 1.052-0.412 1.948-0.959 2.833-1.849 0.891-0.885 1.443-1.776 1.849-2.833 0.391-1.020 0.661-2.181 0.745-3.885 0.077-1.703 0.093-2.244 0.093-6.593s-0.021-4.891-0.093-6.593c-0.084-1.704-0.355-2.871-0.745-3.885-0.412-1.052-0.959-1.948-1.849-2.833-0.885-0.891-1.776-1.443-2.833-1.849-1.020-0.396-2.181-0.661-3.885-0.745-1.703-0.077-2.244-0.093-6.593-0.093zM16 2.88c4.271 0 4.781 0.021 6.469 0.093 1.557 0.073 2.405 0.333 2.968 0.553 0.751 0.291 1.276 0.635 1.844 1.197 0.557 0.557 0.901 1.088 1.192 1.839 0.22 0.563 0.48 1.411 0.553 2.968 0.072 1.688 0.093 2.199 0.093 6.469s-0.021 4.781-0.099 6.469c-0.084 1.557-0.344 2.405-0.563 2.968-0.303 0.751-0.641 1.276-1.199 1.844-0.563 0.557-1.099 0.901-1.844 1.192-0.556 0.22-1.416 0.48-2.979 0.553-1.697 0.072-2.197 0.093-6.479 0.093s-4.781-0.021-6.48-0.099c-1.557-0.084-2.416-0.344-2.979-0.563-0.76-0.303-1.281-0.641-1.839-1.199-0.563-0.563-0.921-1.099-1.197-1.844-0.224-0.556-0.48-1.416-0.563-2.979-0.057-1.677-0.084-2.197-0.084-6.459 0-4.26 0.027-4.781 0.084-6.479 0.083-1.563 0.339-2.421 0.563-2.979 0.276-0.761 0.635-1.281 1.197-1.844 0.557-0.557 1.079-0.917 1.839-1.199 0.563-0.219 1.401-0.479 2.964-0.557 1.697-0.061 2.197-0.083 6.473-0.083zM16 7.787c-4.541 0-8.213 3.677-8.213 8.213 0 4.541 3.677 8.213 8.213 8.213 4.541 0 8.213-3.677 8.213-8.213 0-4.541-3.677-8.213-8.213-8.213zM16 21.333c-2.948 0-5.333-2.385-5.333-5.333s2.385-5.333 5.333-5.333c2.948 0 5.333 2.385 5.333 5.333s-2.385 5.333-5.333 5.333zM26.464 7.459c0 1.063-0.865 1.921-1.923 1.921-1.063 0-1.921-0.859-1.921-1.921 0-1.057 0.864-1.917 1.921-1.917s1.923 0.86 1.923 1.917z"></path>
                </svg>
              </a>
            </div>
          </div>
        </nav>
      </footer>

      <hr className="mx-36" />
      {/* copyright line  */}
      <div className="py-6 p-14 text-sm text-center text-gray-400">
        {content[language].rights} {content[language].builtBy}
      </div>
    </div>
  );
};

export default Footer;
