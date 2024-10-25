/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { useLanguage } from '../context/LanguageContext';
const translations = {
    en: {
      title: 'Language Detector',
      promo:"Automatically detect the user's preferred language for a more personalized experience."
    },
    bn: {
      title: 'ভাষা আবিষ্কারক',
      promo:'আরও ব্যক্তিগতকৃত অভিজ্ঞতার জন্য স্বয়ংক্রিয়ভাবে ব্যবহারকারীর পছন্দের ভাষা সনাক্ত করুন।'
      
    },
    fr: {
      title: 'Détecteur de langue',
      promo:"Détectez automatiquement la langue préférée de l'utilisateur pour une expérience plus personnalisée."
      
    },
    es: {
      title: 'Detector de idioma',
      promo:'Detecta automáticamente el idioma preferido del usuario para una experiencia más personalizada.'
      
    },
  
  }

const FeatureCard2 = () => {
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

export default FeatureCard2;