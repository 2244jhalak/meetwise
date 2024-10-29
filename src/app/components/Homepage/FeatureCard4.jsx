"use client"

import { useLanguage } from "../context/LanguageContext";

const translations = {
  en: {
    title: 'Meeting Booking',
    promo: "Allow users to easily book their meetings, including selecting dates, times, and preferences."
},
bn: {
    title: 'মিটিং বুকিং',
    promo: 'ব্যবহারকারীদের তাদের মিটিংগুলি সহজেই বুক করতে দিন, তারিখ, সময় এবং পছন্দ নির্বাচন সহ।'
},
fr: {
    title: "Réservation de réunion",
    promo: "Permettez aux utilisateurs de réserver facilement leurs réunions, y compris la sélection des dates, heures et préférences."
},
es: {
    title: 'Reserva de reuniones',
    promo: 'Permita a los usuarios reservar fácilmente sus reuniones, incluida la selección de fechas, horarios y preferencias.'
},

  }
const FeatureCard4 = () => {
    const {language} =useLanguage()
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

export default FeatureCard4;