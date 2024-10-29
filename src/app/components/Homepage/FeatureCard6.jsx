"use client"

import { useLanguage } from "../context/LanguageContext";

const translations = {
  en: {
    title: 'Meeting Schedule Overview',
    promo: "After booking, organizers can view their scheduled meetings sorted as upcoming and expired."
  },
  bn: {
    title: 'মিটিং সময়সূচির বিবরণ',
    promo: 'বুকিং করার পর, আয়োজকরা তাদের নির্ধারিত মিটিংগুলি আসন্ন এবং মেয়াদোত্তীর্ণ হিসাবে সাজানো দেখতে পারবেন।'
  },
  fr: {
    title: "Aperçu du calendrier des réunions",
    promo: "Après la réservation, les organisateurs peuvent voir leurs réunions planifiées triées en à venir et expirées."
  },
  es: {
    title: 'Resumen del horario de reuniones',
    promo: 'Después de reservar, los organizadores pueden ver sus reuniones programadas organizadas como próximas y vencidas.'
  }
  
  
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