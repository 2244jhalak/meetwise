import Image from "next/image";
import { useLanguage } from "../context/LanguageContext";


const translations = {
  en: {
    title: 'Elevate Your Meetings with AI-powered Recording',
    description: 'With our advanced artificial intelligence technology, your meetings are not just recorded – they\'re transformed into valuable insights and productivity boosters.',
    startButton: 'Start for Free',
    demoButton: 'Watch Demo',
    activeUsers: '10K+ Active users per month',
    availableCountries: 'Available in over 23 countries',
  },
  bn: {
    title: 'এআই-সক্ষম রেকর্ডিংয়ের মাধ্যমে আপনার মিটিং উন্নত করুন',
    description: 'আমাদের উন্নত কৃত্রিম বুদ্ধিমত্তা প্রযুক্তির সাথে, আপনার মিটিংগুলি শুধু রেকর্ড করা হয় না - এগুলি মূল্যবান অন্তর্দৃষ্টি এবং উৎপাদনশীলতার উত্থান হিসেবে রূপান্তরিত হয়।',
    startButton: 'ফ্রি শুরু করুন',
    demoButton: 'ডেমো দেখুন',
    activeUsers: '১০K+ সক্রিয় ব্যবহারকারী প্রতি মাসে',
    availableCountries: '২৩+ অনেক দেশে উপলব্ধ',
  },
  fr: {
    title: 'Améliorez vos réunions avec un enregistrement alimenté par l\'IA',
    description: 'Avec notre technologie avancée d\'intelligence artificielle, vos réunions ne sont pas seulement enregistrées – elles sont transformées en précieuses informations et en leviers de productivité.',
    startButton: 'Commencer gratuitement',
    demoButton: 'Regarder la démo',
    activeUsers: '10K+ utilisateurs actifs par mois',
    availableCountries: 'Disponible dans plus de 23 pays',
  },
  es: {
    title: 'Eleva tus reuniones con grabación impulsada por IA',
    description: 'Con nuestra avanzada tecnología de inteligencia artificial, tus reuniones no solo se graban, sino que se transforman en valiosos conocimientos y potenciadores de productividad.',
    startButton: 'Comienza gratis',
    demoButton: 'Ver demo',
    activeUsers: '10K+ usuarios activos por mes',
    availableCountries: 'Disponible en más de 23 países',
  },
};

const Banner = () => {
  const { language } = useLanguage();
  
  return (
    <div className="bg-[#F8ECFF] py-10">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        {/* Left Side */}
        <div className="md:w-1/2 w-full text-center md:text-left p-5">
          <h1 className="text-4xl lg:text-7xl font-bold text-[#2A106B] mb-4">
            {translations[language].title}
          </h1>
          <p className="text-lg font-normal leading-7 text-[#5E5961] mb-6">
            {translations[language].description}
          </p>
          <div className="flex justify-center md:justify-start gap-4 mb-6">
            <button className="bg-[#331181] text-white px-6 py-3 rounded-md hover:bg-purple-700">
              {translations[language].startButton}
            </button>
            <button className="bg-[#FFFFFF] border border-purple-600 text-[#827B85] px-6 py-3 rounded-md hover:bg-purple-600 hover:text-white">
              {translations[language].demoButton}
            </button>
          </div>
          <div className="flex justify-center md:justify-start gap-8">
            <div className="lg:text-4xl font-semibold">
              {translations[language].activeUsers}{" "}
              
            </div>
            <div className="text-4xl font-semibold">
              {translations[language].availableCountries}{" "}
              
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div className="md:w-1/2 w-full p-14 flex flex-col items-center">
          <Image
            src="/banner/meetwise-banner-1.jpg"
            alt="Main Banner Image"
            width={600}
            height={400}
            className="w-full h-auto mb-6 rounded-lg"
          />
          <div className="flex gap-4">
            <Image
              src="/banner/meetwise-banner-1.jpg"
              alt="Secondary Image 1"
              width={300}
              height={200}
              className="w-1/2 h-auto rounded-lg"
            />
            <Image
              src="/banner/meetwise-banner-1.jpg"
              alt="Secondary Image 2"
              width={300}
              height={200}
              className="w-1/2 h-auto rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
