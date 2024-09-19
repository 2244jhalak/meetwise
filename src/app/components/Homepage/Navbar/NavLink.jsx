"use client"
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const NavLink = ({link}) => {
    const path = usePathname();

    return (
        <div className=''>
            
            <Link className={`mr-16 px-3 rounded-2xl py-1 m-auto ${link.path===path?'bg-[#6b579c] text-white':''}`} href={link.path}>{link.element}</Link>
        </div>
    );
};

export default NavLink;