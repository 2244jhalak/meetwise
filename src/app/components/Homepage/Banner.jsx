import Image from "next/image";
import { useLanguage } from "../context/LanguageContext";


const translations = {
  en: {
    title: 'Simplify Scheduling with Meetwise',
    description: 'Meetwise takes the hassle out of scheduling by letting you book meetings with ease. Focus on what matters and leave the scheduling to us.',
    startButton: 'Sign Up for Free',
    demoButton: 'See How It Works',
    activeUsers: '10M+ Active users worldwide',
    availableCountries: 'Used in over 190 countries',
  },
  bn: {
    title: 'মিটওয়াইজ দিয়ে সময় নির্ধারণকে সহজ করুন',
    description: 'মিটওয়াইজ আপনার সময় নির্ধারণের ঝামেলা দূর করে সহজে মিটিং বুক করার সুযোগ দেয়। গুরুত্বপূর্ণ কাজের উপর মনোনিবেশ করুন, সময় নির্ধারণ আমাদের উপর ছেড়ে দিন।',
    startButton: 'ফ্রি সাইন আপ করুন',
    demoButton: 'কিভাবে কাজ করে দেখুন',
    activeUsers: '১০M+ সক্রিয় ব্যবহারকারী বিশ্বজুড়ে',
    availableCountries: '১৯০+ দেশে ব্যবহৃত হচ্ছে',
  },
  fr: {
    title: 'Simplifiez la planification avec Meetwise',
    description: 'Meetwise élimine les tracas de la planification en vous permettant de réserver des réunions facilement. Concentrez-vous sur l\'essentiel et laissez-nous gérer la planification.',
    startButton: 'Inscrivez-vous gratuitement',
    demoButton: 'Découvrez comment ça marche',
    activeUsers: '10M+ utilisateurs actifs dans le monde',
    availableCountries: 'Utilisé dans plus de 190 pays',
  },
  es: {
    title: 'Simplifica la programación con Meetwise',
    description: 'Meetwise elimina las complicaciones de la programación permitiéndote reservar reuniones con facilidad. Concéntrate en lo importante y deja la programación en nuestras manos.',
    startButton: 'Regístrate gratis',
    demoButton: 'Mira cómo funciona',
    activeUsers: '10M+ usuarios activos en todo el mundo',
    availableCountries: 'Utilizado en más de 190 países',
  },
  
}


const Banner = () => {
  const { language } = useLanguage();
  
  return (
    <div className="container mx-auto bg-[url('/banner/bg-6.jpg')] bg-cover bg-center"
   >
      <div className="container   mx-auto flex flex-col-reverse md:flex-row  items-center justify-between">
        {/* Left Side */}
        <div className="md:w-1/2 w-full text-center md:text-left p-5">
          <h1 className="text-4xl lg:text-7xl font-bold text-slate-100 mb-4">
            {translations[language].title}
          </h1>
          <p className="text-lg font-normal leading-7 text-slate-200  mb-6">
            {translations[language].description}
          </p>
          <div className="flex justify-center md:justify-start gap-4 mb-6">
            <button className="border border-white text-white px-6 py-3 rounded-md transition-all duration-500 ease-in font-raleway hover:bg-[#081b23]">
              {translations[language].startButton}
            </button>
           
          </div>
          {/* <div className="flex justify-center md:justify-start gap-8">
            <div className="lg:text-4xl font-semibold">
              {translations[language].activeUsers}{" "}
              
            </div>
            <div className="text-4xl font-semibold">
              {translations[language].availableCountries}{" "}
              
            </div> */}
          {/* </div> */}
        </div>

        {/* Right Side */}
        <div className="md:w-1/2 w-full p-14 flex flex-col items-center ">
          <Image
            src="/banner/banner3.jpg"
            alt="Main Banner Image"
            width={600}
            height={400}
            className="w-full h-auto mb-6 rounded-lg border border-white shadow-xl"
          />
          <div className="flex gap-4">
            <Image
              src="/banner/banner5.jpg"
              alt="Secondary Image 1"
              width={300}
              height={200}
              className="w-1/2 h-auto rounded-lg border border-white shadow-xl"
            />
            <Image
              src="/banner/banner6.jpg"
              alt="Secondary Image 2"
              width={300}
              height={200}
              className="w-1/2 h-auto rounded-lg border border-white shadow-xls"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
