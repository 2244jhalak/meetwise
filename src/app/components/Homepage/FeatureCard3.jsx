import React from 'react';
import { useLanguage } from '../context/LanguageContext';
const translations = {
    en: {
      title: 'Meeting Library',
      promo:"The All Meetings section displays a list of scheduled meetings, including their title, date, and time."
    },
    bn: {
      title: 'মিটিং লাইব্রেরি',
      promo:'সমস্ত মিটিং বিভাগ তাদের শিরোনাম, তারিখ এবং সময় সহ নির্ধারিত মিটিংগুলির একটি তালিকা প্রদর্শন করে।'
      
    },
    fr: {
      title: 'Bibliothèque de réunion',
      promo:"La section Toutes les réunions affiche une liste des réunions planifiées, y compris leur titre, leur date et leur heure."
      
    },
    es: {
      title: 'Biblioteca de reuniones',
      promo:'La sección Todas las reuniones muestra una lista de reuniones programadas, incluido su título, fecha y hora.'
      
    },
  
  }

const FeatureCard3 = () => {
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

export default FeatureCard3;