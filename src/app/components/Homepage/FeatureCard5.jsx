"use client"

import { useLanguage } from "../context/LanguageContext";

const translations = {
    en: {
      title: 'Meeting Availability',
      promo:"Set and manage your availability to streamline the meeting scheduling process."
    },
    bn: {
      title: 'সভা প্রাপ্যতা',
      promo:'মিটিং শিডিউলিং প্রক্রিয়াটিকে স্ট্রীমলাইন করতে আপনার প্রাপ্যতা সেট করুন এবং পরিচালনা করুন।'
      
    },
    fr: {
      title: "Disponibilité des réunions",
      promo:"Définissez et gérez votre disponibilité pour rationaliser le processus de planification des réunions."
      
    },
    es: {
      title: 'Disponibilidad de reuniones',
      promo:'Configure y administre su disponibilidad para agilizar el proceso de programación de reuniones.'
      
    },
  
  }
const FeatureCard5 = () => {
    const {language}=useLanguage();
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

export default FeatureCard5;