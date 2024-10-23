"use client";
import React from 'react';
import { useSession } from 'next-auth/react';
import 'animate.css';
import Image from 'next/image';
const Welcome = () => {
    const { data: session } = useSession();
    const adminImage = "/banner/headway-5QgIuuBxKwM-unsplash.jpg"; // প্রশাসকের ছবি URL
    const userImage = "/banner/sided-view-hand-typing-keyboard.jpg";
    return (
        <div>
<div className="flex-1 p-6 relative">
    <div className="flex justify-center">
        <div className="relative">
            <Image
                className="md:w-[1100px] md:h-[600px] rounded-lg"
              
                src={session?.user?.role === "admin" ? adminImage : userImage} // শর্ত অনুযায়ী ছবি নির্বাচন
                alt={session?.user?.role === "admin" ? "Admin Dashboard" : "User Dashboard"} // যথাযথ ALT টেক্সট
              
                width={1100}
                height={600}
            />
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-lg z-10 "></div>
            {/* Centered Title and Description */}
            <div className='absolute text-white inset-0 flex text-center mx-auto flex-col items-center justify-center p-2'>
            <h1 className=" md:text-4xl text-3xl lg:text-6xl text-white font-bold z-20 animate__animated animate__backInLeft">
                {session?.user?.role === "admin" ? "Welcome to Admin Panel" : `Welcome to ${session?.user?.name}'s Dashboard`} </h1>
                <h2 className="mt-2 text-xl text-gray-100 z-20 font-medium animate__animated animate__backInRight">
                    {session?.user?.role === "admin" 
                        ? "Oversee and manage all scheduling activities seamlessly!" 
                        : "Easily manage your appointments and stay organized!"}
                </h2>
           
            </div>
          
        </div>
    </div>
</div>



        </div>
    );
};

export default Welcome;