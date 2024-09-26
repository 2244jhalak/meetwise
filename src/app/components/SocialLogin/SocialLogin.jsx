"use client"
import Image from "next/image";
import Google from "/public/Google/unnamed-removebg-preview";

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
            <button className='flex flex-row' onClick={()=>handleSignIn("google")}>
                <Image src={Google} alt="" height={50} width={50}></Image>
                <p>Continue With Google</p>
                </button>
        </div>
    );
};

export default SocialLogin;