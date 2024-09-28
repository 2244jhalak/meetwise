"use client";

import Image from "next/image";
import { signIn, useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react';

const SocialLogin = () => {
    const router = useRouter();
    const { data: session, status } = useSession();

    useEffect(() => {
        if (status === 'authenticated') {
            router.push('/dashboard');
        }
    }, [status, router]);

    const handleSignIn = async (provider) => {
        const res = await signIn(provider, { redirect: false });
        
        if (res?.error) {
            console.error("Login failed:", res.error);
        } else {
            // If the sign-in was successful, this line ensures the session is updated
            if (res?.ok) {
                router.push('/dashboard'); // Redirect to dashboard
            }
        }
    };

    return (
        <div>
            <button 
                className='flex flex-row items-center space-x-2 p-2 border border-blue-900 bg-slate-100 hover:bg-[#183c4b] transition-all duration-500 ease-in font-raleway rounded-md' 
                onClick={() => handleSignIn("google")}
            >
                <Image
                    src="/banner/icong.png"
                    alt="Google Icon"
                    width={30}
                    height={30}
                    className="object-contain"
                />
                <p className="font-semibold text-black hover:text-white transition-all duration-500 ease-in">Continue With Google</p>
            </button>
        </div>
    );
};

export default SocialLogin;

