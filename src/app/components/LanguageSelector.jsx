// src/app/components/LanguageSelector.js

import { useLanguage } from "./context/LanguageContext";


const LanguageSelector = () => {
  const { language, changeLanguage } = useLanguage();

  return (
    <div className="language-selector">
      <label htmlFor="language" className="mr-2 font-medium">
        {language === 'en' && 'Select the language:'}
        {language === 'fr' && 'Sélectionnez la langue:'}
        {language === 'es' && 'Selecciona el idioma:'}
        {language === 'bn' && 'ভাষা নির্বাচন করুন:'}
      </label>
      <select
        id="language"
        value={language}
        onChange={(e) => changeLanguage(e.target.value)}
        className="border rounded p-2"
      >
        <option value="en">English</option>
        <option value="fr">Français</option>
        <option value="es">Español</option>
        <option value="bn">বাংলা</option>
      </select>
    </div>
  );
};

export default LanguageSelector;

