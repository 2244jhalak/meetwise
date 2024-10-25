"use client"

import { useLanguage } from "../context/LanguageContext";

const translations = {
    en: {
      title: 'Updating Profile',
      promo:"Allow users to easily update their profile information, including personal details and preferences."
    },
    bn: {
      title: 'প্রোফাইল আপডেট করা হচ্ছে',
      promo:'ব্যবহারকারীদের ব্যক্তিগত বিবরণ এবং পছন্দ সহ তাদের প্রোফাইল তথ্য সহজেই আপডেট করার অনুমতি দিন।'
      
    },
    fr: {
      title: "Mise à jour du profil",
      promo:"Permettez aux utilisateurs de mettre facilement à jour les informations de leur profil, y compris les informations personnelles et les préférences."
      
    },
    es: {
      title: 'Actualizando perfil',
      promo:'Permita a los usuarios actualizar fácilmente la información de su perfil, incluidos los detalles personales y las preferencias.'
      
    },
  
  }
const FeatureCard4 = () => {
    const {language} =useLanguage()
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

export default FeatureCard4;