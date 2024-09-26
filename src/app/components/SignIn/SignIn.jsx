"use client"
import Image from "next/image";
import Link from 'next/link';
import { signIn, useSession } from "next-auth/react"
import React from 'react';

import { useRouter } from 'next/navigation';

import Swal from 'sweetalert2';
import SocialLogin from '../SocialLogin/SocialLogin';

const SignIn = () => {
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
        <div>
            <div className='flex  md:flex-row justify-between '>
                {/* left side  */}
                <div
  className="w-1/2 min-h-screen bg-[url('/banner/bg-2.jpg')] bg-cover bg-center flex justify-center items-center"
>
  <div>
    <Image
      src="/banner/login-1.png"
      alt="Main Banner Image"
      width={800}
      height={400}
      className="w-auto h-auto object-contain"
    />
  </div>
</div>

              {/* form */}
            <div className="bg-[url('/banner/bg-3.jpg')] bg-cover bg-center w-1/2 flex pt-5 flex-col items-center space-y-6 min-h-screen">
                <h2 className='text-2xl text-white font-semibold'>Login Now</h2>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <form onSubmit={handleLogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                    </form>
                    <div className='text-black text-center pb-5 space-y-2'>
                        
                        <div className='flex flex-row items-center justify-center space-x-5'>
                            <div className='rounded-2xl p-2 cursor-pointer'>
                                 <SocialLogin></SocialLogin>
                            </div>
                            
                        </div>
                    </div>
                    <div className='flex flex-row text-black px-8 py-5 space-x-1'>
                        <p>Create an account? Please</p>
                        <Link href="/signup"><span className='underline'>Signup</span></Link>
                    </div>
                </div>
            </div>
            </div>
            
        </div>
    );
};

export default SignIn;
