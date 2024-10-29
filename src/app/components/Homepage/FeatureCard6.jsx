"use client"

import { useLanguage } from "../context/LanguageContext";

const translations = {
    en: {
      title: 'Selecting Meeting Type',
      promo:"Enable users to select different types of meetings such as one-on-one, group meetings, or webinars."
    },
    bn: {
      title: 'মিটিং টাইপ নির্বাচন করা হচ্ছে',
      promo:'একের পর এক, গ্রুপ মিটিং বা ওয়েবিনারের মতো বিভিন্ন ধরনের মিটিং বেছে নিতে ব্যবহারকারীদের সক্ষম করুন।'
      
    },
    fr: {
      title: "Sélection du type de réunion",
      promo:"Permettez aux utilisateurs de sélectionner différents types de réunions, telles que des réunions individuelles, de groupe ou des webinaires."
      
    },
    es: {
      title: 'Seleccionar el tipo de reunión',
      promo:'Permita a los usuarios seleccionar diferentes tipos de reuniones, como reuniones individuales, grupales o seminarios web.'
      
    },
  
  }
const FeatureCard6 = () => {
    const {language} = useLanguage();
    return (
        <div>
            <div className="card-body font-raleway">
                <h2 className="card-title text-white font-bold text-2xl">{translations[language].title}</h2>
                <p className="text-white text-base font medium">
                    {translations[language].promo}
                </p>
            </div>
        </div>
    );
};

export default FeatureCard6;