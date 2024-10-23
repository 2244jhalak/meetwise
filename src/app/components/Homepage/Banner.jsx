"use client"
import { useLanguage } from "../context/LanguageContext";
import animationData1 from '../../../../public/banner/animation-1.json';
import animationData2 from '../../../../public/banner/animation-2.json';
import animationData3 from '../../../../public/banner/animation-3.json';
import LottieAnimation from "../Lottie/LottieAnimation";
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from "next/link";

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
  console.log('time zone',Intl.DateTimeFormat().resolvedOptions().timeZone);
  const settings = {
    dots: false,  // প্যাগিনেশন ডটস অফ
    infinite: true,  // ইনফিনিট লুপ অন
    speed: 500,  // ট্রানজিশন স্পিড
    slidesToShow: 1,  // একবারে এক স্লাইড
    slidesToScroll: 1,  // একবারে এক স্লাইড স্ক্রল
    autoplay: true,  // অটোপ্লে চালু
    autoplaySpeed: 5000,  // ২ সেকেন্ড পর স্লাইড পরিবর্তন
    arrows: false,  // নেভিগেশন এরো বন্ধ
    vertical: true,  // y-axis বা উপরে থেকে নিচে স্লাইড
    verticalSwiping: true,  // Vertical swipe সক্রিয়
  }
  const { language } = useLanguage();

  return (
    <div className="container mx-auto bg-white/10 backdrop-blur-md backdrop-opacity-70 py-10"
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
            <Link href='/login'
              className="relative btn inline-block px-6 py-3 font-bold text-white rounded-full border border-transparent transition duration-300 ease-in-out overflow-hidden group"
              style={{
                background: 'linear-gradient(90deg, rgba(69,89,66,1) 0%, rgba(67,207,57,0.8241421568627451) 35%, rgba(117,154,162,1) 100%)',
              }}
            >
              <span className="relative z-10">{translations[language].startButton}</span>
              <span className="absolute inset-0 w-full h-full transition-all duration-300 ease-in-out transform rounded-full bg-transparent group-hover:translate-x-1 group-hover:translate-y-1"></span>
            </Link>


          </div>
          
        </div>

        {/* Right Side */}
        <div className="md:w-1/2 w-full p-5  ">
          <Slider {...settings}>
            <div className="flex-col flex items-center justify-center space-y-1 h-full">
              <LottieAnimation  animationData={animationData1} />
              <div><h1 className="container mx-auto text-center font-bold font-raleway text-green-600">Meeting Made Simple</h1></div>

            </div>
            <div className="flex-col flex items-center justify-center space-y-1 h-full">
              <LottieAnimation  animationData={animationData2} />
              <div><h1 className="container mx-auto text-center font-bold font-raleway text-green-600">Schedule with Ease</h1></div>

            </div>
            <div className="flex-col flex items-center justify-center space-y-1">
              <LottieAnimation animationData={animationData3} />
              <div><h1 className="container mx-auto text-center font-bold font-raleway text-green-600">Smart Time Management</h1></div>

            </div>
          </Slider>
        </div>
       
      </div>
    </div>
  );
};

export default Banner;
