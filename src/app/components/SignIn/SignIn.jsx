"use client"
import Link from 'next/link';
import { signIn } from "next-auth/react"
import React from 'react';
import { FaFacebook, FaGithub, FaGoogle } from 'react-icons/fa';
import { useRouter } from 'next/navigation';
import SocialLogin from '../SocialLogin/SocialLogin';
import Swal from 'sweetalert2';

const SignIn = () => {
    const router = useRouter();
    const handleLogin = async e => {
      e.preventDefault();
      const email = e.target.email.value;
      const password = e.target.password.value;

      const res = await signIn("credentials", {
        email,
        password,
        redirect: false
      });

      if (res.status === 200) {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Successfully signed in!",
          showConfirmButton: false,
          timer: 1500
        });
        router.push("/");
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
            <div className="bg-base-200 flex pt-5 flex-col items-center space-y-6 min-h-screen">
                <h2 className='text-2xl text-black font-semibold'>Login Now</h2>
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
                        <p className='text-xl font-semibold'>Login with</p>
                        <div className='flex flex-row items-center justify-center space-x-5'>
                            <div className='rounded-2xl p-2 bg-slate-400 cursor-pointer'><SocialLogin /></div>
                            <div className='rounded-2xl p-2 bg-slate-400 cursor-pointer'><FaFacebook /></div>
                            <div className='rounded-2xl p-2 bg-slate-400 cursor-pointer'><FaGithub /></div>
                        </div>
                    </div>
                    <div className='flex flex-row text-black px-8 py-5 space-x-1'>
                        <p>Create an account? Please</p>
                        <Link href="/signup"><span className='underline'>Signup</span></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignIn;
