"use client"

import { usePathname } from 'next/navigation';
import Links from './Links';
import { FaBars, FaWindowClose } from "react-icons/fa";
import { useState } from "react";

import { signOut, useSession } from 'next-auth/react';
import Image from 'next/image';
import Link from 'next/link';
import LanguageSelector from '../../LanguageSelector';
import { useLanguage } from '../../context/LanguageContext';


const translations = {
    en: {
        dashboard: 'Dashboard',
        login: 'Login',
        logout: 'Logout',
    },
    bn: {
        dashboard: 'ড্যাশবোর্ড',
        login: 'লগইন',
        logout: 'লগআউট',
    },
    fr: {
        dashboard: 'Tableau de bord',
        login: 'Connexion',
        logout: 'Déconnexion',
    },
    es: {
        dashboard: 'Tablero',
        login: 'Iniciar sesión',
        logout: 'Cerrar sesión',
    },
};

const Navbar = () => {
    const [open, setOpen] = useState(false);
    const path = usePathname();
    const session = useSession();
    const { language } = useLanguage();

    return (
        <div className='flex justify-between items-start md:items-center'>
            <div onClick={() => setOpen(!open)} className='container mx-auto p-5 lg:hidden '>
                <p>
                    {open ? <FaWindowClose className='text-black' /> : <FaBars className='text-black' />}
                </p>
            </div>
            <div className='font-semibold flex items-center space-x-2'>
                
                <h2 className='text-2xl md:text-4xl font-bold text-slate-100 font-raleway ml-6'>
                    <i>Meet<span className='text-green-600'>Wise</span></i>
                </h2>
            </div>
            <div className={`${open ? 'top-16 z-50 block item-start font-bold font-raleway lg:bg-white md:bg-white bg-white' : '-top-72 gap-5 text-green-600'} flex lg:flex-row font-raleway font-bold flex-col px-2 py-4 absolute lg:static items-center rounded-b-lg ms-4 text-[13px] z-50  duration-1000 lg:gap-5 text-black`}>
                <Links />
                <LanguageSelector />
                {session.data ? (
                    <div className='flex items-center space-x-2'>
                        
                        <Link href="/dashboard">{translations[language].dashboard}</Link>
                        <Image
                            src={session?.data?.user?.image}
                            width={50}
                            height={50}
                            alt='User Profile Picture'
                            className='rounded-full'
                            title={session?.data?.user?.name}
                        />
                        <button className='btn  border border-slate-300 bg-[#28272B]  hover:bg-green-500  text-white' onClick={() => signOut()}>{translations[language].logout}</button>
                    </div>
                ) : (
                    <Link href='/login' className='btn border border-slate-300 bg-[#28272B]   hover:bg-green-500  text-white'>{translations[language].login}</Link>
                )}
            </div>
        </div>
    );
};

export default Navbar;
