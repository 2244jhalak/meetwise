"use client"
import { signIn, useSession } from "next-auth/react";
import React, { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { useRouter, useSearchParams } from 'next/navigation';
import Swal from 'sweetalert2';
import SocialLogin from '../SocialLogin/SocialLogin';
import LottieAnimation from "../Lottie/LottieAnimation";
import Login from '../../../../public/banner/log.json';
import Link from "next/link";
export const dynamic = 'force-dynamic';

const SignIn = () => {
    const [showpassword, setShowpassword] = useState(false);
    const router = useRouter();
    const searchParams = useSearchParams();
   
    const callbackUrl = searchParams.get("callbackUrl") || "/dashboard"; // callbackUrl না থাকলে homepage এ পাঠাবে
    console.log(callbackUrl);
    const handleLogin = async e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;

        const res = await signIn("credentials", {
            email,
            password,
            redirect: false,
            callbackUrl:callbackUrl
        });

        if (res?.ok) {
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Successfully signed in!",
                showConfirmButton: false,
                timer: 1500
            });
            router.push(callbackUrl); // লগইন সফল হলে callbackUrl এ রিডাইরেক্ট করবে
        } else if (res?.error) {
            Swal.fire({
                position: "top-end",
                icon: "error",
                title: "Invalid credentials. Please try again.",
                showConfirmButton: false,
                timer: 1500
            });
        }
    };

    return (
        <div className="container mx-auto pb-5">
            <div className='flex flex-col gap-2 md:flex-row items-center justify-center'>
                {/* Left side */}
                <div className="md:w-4/5 min-h-screen md:pt-16">
                    <LottieAnimation animationData={Login}></LottieAnimation>
                </div>
                {/* Form */}
                <div className="md:w-4/5 flex pt-5 flex-col items-center space-y-6 min-h-screen">
                    <div className='relative font-raleway font-bold mx-auto text-5xl text-center'>
                        <h1 className="text-2xl pb-3 font-extrabold text-center mx-auto text-white lg:text-3xl dark:text-white">
                            Log In Now
                        </h1>
                        <div className='absolute bottom-0 left-1/2 transform -translate-x-1/2 mx-auto border-b-2 border-orange-600 w-[50%] transition-all duration-300 ease-in-out p-4 cursor-pointer'></div>
                    </div>
                    <div className="card w-full bg-white/10 backdrop-blur-md backdrop-opacity-70 border border-orange-200 max-w-sm shrink-0 shadow-2xl">
                        <form onSubmit={handleLogin} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font raleway text-white font-bold text-lg">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control relative">
                                <label className="label">
                                    <span className="label-text font raleway text-white font-bold text-lg">Password</span>
                                </label>
                                <input type={showpassword ? "text" : "password"} name="password" placeholder="password" className="input input-bordered" required />
                                <p onClick={() => setShowpassword(!showpassword)} className="absolute top-[44%] left-[82%] md:left-[85%]">
                                    {showpassword ? <FaEyeSlash className="h-[100%] text-black" /> : <FaEye className="h-[100%] text-black" />}
                                </p>
                                <label className="label">
                                    <a href="#" className="label-text-alt link text-white link-hover font raleway font-bold text-lg">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn bg-green-700 hover:bg-green-900 transition-all duration-500 ease-in text-white font raleway font-bold text-lg">Login</button>
                            </div>
                        </form>
                        <div className='text-black text-left pb-3'>
                            <div className='flex flex-row items-center justify-center space-x-5'>
                                <div className='rounded-2xl p-2 cursor-pointer'>
                                    <SocialLogin />
                                </div>
                            </div>
                        </div>
                        <div className='flex flex-row text-black px-8 py-2 space-x-1'>
                            <p className="font-raleway font-bold text-white">Create an account? Please</p>
                            <Link href="/signup"><span className='underline text-orange-600 font-raleway font-extrabold'>Signup</span></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignIn;
