"use client"

import { useLanguage } from "../context/LanguageContext";

const translations = {
    en: {
      title: 'Create Meeting',
      promo:'The Create Meeting feature allows users to schedule meetings by specifying details like title, date, time, and duration.'
    },
    bn: {
      title: 'মিটিং তৈরি করুন',
      promo:'মিটিং তৈরি করুন বৈশিষ্ট্যটি ব্যবহারকারীদের শিরোনাম, তারিখ, সময় এবং সময়কালের মতো বিবরণ উল্লেখ করে মিটিং শিডিউল করতে দেয়।'
      
    },
    fr: {
      title: 'Créer une réunion',
      promo:"La fonctionnalité Créer une réunion permet aux utilisateurs de planifier des réunions en spécifiant des détails tels que le titre, la date, l'heure et la durée."
      
    },
    es: {
      title: 'Crear reunión',
      promo:'La función Crear reunión permite a los usuarios programar reuniones especificando detalles como título, fecha, hora y duración.'
      
    },
  
  }
const FeatureCard1 = () => {
    const {language} = useLanguage();
    return (
        <div>
            <div className="card-body">
                <h2 className="card-title">{translations[language].title}</h2>
                <p>
                    {translations[language].promo}
                </p>
            </div>
        </div>
    );
};

export default FeatureCard1;