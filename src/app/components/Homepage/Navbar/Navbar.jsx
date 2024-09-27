"use client"
import { usePathname } from 'next/navigation';
import Links from './Links';
import { FaBars, FaWindowClose } from "react-icons/fa";
import { useState } from "react";
import { TbBrandMeetup } from "react-icons/tb";
import { signOut, useSession } from 'next-auth/react';
import Image from 'next/image';
import Link from 'next/link';
import LanguageSelector from '../../LanguageSelector';

const Navbar = () => {
    const [open,setOpen]=useState(false);
    const path = usePathname();
    const session = useSession();
    console.log(session); 
    return (
        <div className='flex justify-between items-start md:items-center'>
            <div onClick={()=>setOpen(!open)} className='container mx-auto p-5 lg:hidden '>
             <p className=''>
                   {open?<FaWindowClose className='text-black'></FaWindowClose>:<FaBars className='text-black'></FaBars>}
             </p>
        </div> 
        <div className='font-semibold flex items-center space-x-2'>
            <TbBrandMeetup className='text-[#6b579c] text-5xl'></TbBrandMeetup>
            
            <h2 className='text-2xl md:text-4xl font-bold text-[#183c4b] font-raleway'><i>Meet<span className='text-green-600'>Wise</span></i></h2>
            
        </div>
        <div className={`${open ?'top-16 block z-50 item-start font-bold font-raleway lg:bg-white md:bg-white bg-white':'-top-72 gap-5 text-black'} flex lg:flex-row font-raleway font-bold flex-col px-2 py-4 absolute lg:static items-center rounded-b-lg ms-4 text-[13px]  duration-1000 lg:gap-10 text-black`}>
        
        
        <Links></Links>
        <LanguageSelector></LanguageSelector>
        {
            session.data ?
            <div className='flex items-center space-x-2'>
                <Link href="/dashboard">Dashboard</Link>
                <Image
      src={session?.data?.user?.image} 
      width={50} 
      height={50} 
      alt='User Profile Picture' 
      className='rounded-full'
      title={session?.data?.user?.name}
       // এটি ছবিকে গোলাকার করতে Tailwind CSS ক্লাস
    />
                <button className='btn btn-warning' onClick={()=>signOut()}>Logout</button>
                

            </div>
            
            
            :
            <Link href='/login' className='btn bg-[#24ab53] hover:bg-[#218443] font-raleway text-white'>Login</Link>
        }
        </div>
            
            
        </div>
    );
};

export default Navbar;