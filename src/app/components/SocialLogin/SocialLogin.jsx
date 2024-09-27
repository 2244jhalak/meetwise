"use client"


import Image from "next/image";
import { signIn, useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import React from 'react';



const SocialLogin = () => {
    const router = useRouter();
    const session = useSession();
    const handleSignIn = async (provider) => {
        const res = await signIn(provider,{redirect:false});

    }
    if(session.status === 'authenticated'){
        router.push('/dashboard')
    }
    
    return (
        <div>
           <button className='flex flex-row items-center space-x-2 p-2 border border-blue-900 bg-slate-100 hover:bg-[#183c4b] transition-all duration-500 ease-in font-raleway rounded-md' onClick={()=>handleSignIn("google")}>
    <Image
        src="/banner/icong.png"
        alt="Google Icon"
        width={30} // Set a fixed width for the icon
        height={30} // Set a fixed height for the icon
        className="object-contain" // Ensure the image fits within the container
    />
    <p className="font-semibold text-black  hover:text-white transition-all duration-500 ease-in ">Continue With Google</p>
</button>

        </div>
    );
};

export default SocialLogin;