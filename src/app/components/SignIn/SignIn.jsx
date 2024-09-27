"use client"
import Image from "next/image";
import Link from 'next/link';
import { signIn, useSession } from "next-auth/react"
import React, { useState } from 'react';
import {FaEye, FaEyeSlash} from 'react-icons/fa';
import { useRouter } from 'next/navigation';

import Swal from 'sweetalert2';
import SocialLogin from '../SocialLogin/SocialLogin';

const SignIn = () => {
    const [showpassword, setShowpassword] = useState(false)
    const router = useRouter();
    const session = useSession();
    const handleLogin = async e => {
      e.preventDefault();
      const email = e.target.email.value;
      const password = e.target.password.value;

      const res = await signIn("credentials", {
        email,
        password,
        redirect:false
      });

      if (session?.status === "authenticated") {
        
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Successfully signed in!",
          showConfirmButton: false,
          timer: 1500
        });
        router.push("/dashboard");
        
      } else if (res.error) {
        Swal.fire({
          position: "top-end",
          icon: "error",
          title: "Invalid credentials. Please try again.",
          showConfirmButton: false,
          timer: 1500
        });
      }
    }

    return (
        <div className="container mx-auto bg-gray-100 ">
            <div className='flex flex-col gap-2 md:flex-row '>
                {/* left side  */}
                <div
  className="md:w-4/5 min-h-screen bg-[url('/banner/bg-3.jpg')] bg-cover bg-center flex justify-center items-center"
>
  <div className="w-2/3">
    <Image
      src="/banner/login-2.png"
      alt="Main Banner Image"
      width={800}
      height={400}
      className="w-full  h-auto object-contain"
    />
  </div>
</div>

              {/* form */}
            <div className="md:w-4/5 flex pt-5 flex-col items-center space-y-6 min-h-screen">
            <div className='relative font-raleway font-bold mx-auto text-5xl text-center'>
    <h1 className="text-2xl pb-3 font-extrabold text-center mx-auto text-gray-800 lg:text-3xl dark:text-white">
             Log In Now
    </h1>
    <div className='absolute bottom-0 left-1/2 transform -translate-x-1/2 mx-auto border-b-2 border-green-700 w-[50%] transition-all duration-300 ease-in-out p-4 cursor-pointer'></div>
  </div>
             
                <div className="card w-full bg-sky-50 max-w-sm shrink-0 shadow-2xl">
                    <form onSubmit={handleLogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font raleway font-bold text-lg">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control relative ">
                            <label className="label">
                                <span className="label-text font raleway font-bold text-lg">Password</span>
                            </label>
                            <input  type = {showpassword ? "text" : "password"} name="password" placeholder="password" className="input input-bordered " required />
                            <p onClick={() => setShowpassword(!showpassword)} className="absolute top-[44%] left-[82%] md:left-[85%]">
        {
          showpassword ? <FaEyeSlash className="h-[100%] text-black" /> :<FaEye className="h-[100%] text-black" ></FaEye>
     
        }
        </p>   
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover font raleway font-bold text-lg">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn bg-[#23576e] hover:bg-[#1c4657] transition-all duration-500 ease-in text-white font raleway font-bold text-lg">Login</button>
                        </div>
                    </form>
                    <div className='text-black text-left pb-5 space-y-2'>
                        
                        <div className='flex flex-row items-center justify-center space-x-5'>
                            <div className='rounded-2xl p-2 cursor-pointer'>
                               
                                 <SocialLogin></SocialLogin>
                            </div>
                            
                        </div>
                    </div>
                    <div className='flex flex-row text-black px-8 py-5 space-x-1'>
                        <p className="font-raleway font-bold">Create an account? Please</p>
                        <Link href="/signup"><span className='underline text-green-500 font-raleway   font-extrabold'>Signup</span></Link>
                    </div>
                </div>
            </div>
            </div>
            
        </div>
    );
};

export default SignIn;
