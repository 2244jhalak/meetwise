// src/app/components/Links.js
import React from 'react';
import NavLink from './NavLink';
import { useLanguage } from '../../context/LanguageContext';


const content = {
  en: {
    home: 'Home',
    contact: 'Contact',
    about: 'About Us',
  },
  bn: {
    home: 'হোম',
    contact: 'যোগাযোগ',
    about: 'আমাদের সম্পর্কে',
  },
  es: {
    home: 'Inicio',
    contact: 'Contacto',
    about: 'Sobre nosotros',
  },
  fr: {
    home: 'Accueil',
    contact: 'Contact',
    about: 'À propos',
  },
};

const Links = () => {
  const { language } = useLanguage();

  const links = [
    {
      path: '/',
      element: content[language].home,
    },
    {
      path: '/contact',
      element: content[language].contact,
    },
    {
      path: '/about',
      element: content[language].about,
    },
  ];

  return (
    <div className='flex lg:flex-row flex-col items-start gap-4'>
      {links.map(link => (
        <NavLink key={link.element} className='pr-16' link={link}></NavLink>
      ))}
    </div>
  );
};

export default Links;
