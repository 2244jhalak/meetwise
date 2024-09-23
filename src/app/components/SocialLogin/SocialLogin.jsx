"use client"

import { signIn, useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import React from 'react';

import { FaGoogle } from 'react-icons/fa';

const SocialLogin = () => {
    const router = useRouter();
    const session = useSession();
    const handleSignIn = async (provider) => {
        const res = await signIn(provider,{redirect:false});

    }
    if(session.status === 'authenticated'){
        router.push('/')
    }
    
    return (
        <div>
            <button onClick={()=>handleSignIn("google")}><FaGoogle></FaGoogle></button>
        </div>
    );
};

export default SocialLogin;