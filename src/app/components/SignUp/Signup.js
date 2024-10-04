"use client"
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import Image from "next/image";
import { useState } from 'react';
import {FaEye, FaEyeSlash} from 'react-icons/fa';
import { FaFan } from 'react-icons/fa';
import SocialLogin from '../SocialLogin/SocialLogin';
import Swal from 'sweetalert2';
import { signIn } from 'next-auth/react';
import LottieAnimation from "../Lottie/LottieAnimation";
import signup from '../../../../public/banner/signup.json';

const Signup = () => {
    const [loading, setLoading] = useState(false);
    const [showpassword, setShowpassword] = useState(false)
    const [confirmshowpassword, setConfirmShowpassword] = useState(false)
    const router = useRouter();
   
   

const handleSubmit = async (e) => {
    e.preventDefault();

    const newUser = {
        name: e.target.name.value,
        email: e.target.email.value,
        password: e.target.password.value,
        confirm: e.target.passwordM.value,
    };

    // Check if passwords match
    if (newUser.password !== newUser.confirm) {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Passwords do not match!',
        });
        return; // Prevent form submission
    }

    const photo = e.target.photo.files[0];

    setLoading(true);

    try {
        // 1. Create FormData for file upload
        const formData = new FormData();
        formData.append("image", photo);

        // 2. Upload image via imgbb API
        const imgbbResponse = await fetch(`https://api.imgbb.com/1/upload?key=${process.env.NEXT_PUBLIC_IMGBB_API_KEY}`, {
            method: "POST",
            body: formData,
        });

        const imgbbData = await imgbbResponse.json();

        if (imgbbData.success) {
            const image = imgbbData.data.url;

            // 3. Send user info to MongoDB with photo URL
            const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/signup/api`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ ...newUser, image }),
            });

            if (response.ok) {
                // Automatically sign in the user
                await signIn('credentials', { email: newUser.email, password: newUser.password });
                
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Successfully signed up!",
                    showConfirmButton: false,
                    timer: 1500,
                });
                router.push("/dashboard"); // Redirect to home or desired page
            } else {
                throw new Error('Signup failed');
            }
        } else {
            throw new Error('Photo upload failed');
        }
    } catch (error) {
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: error.message,
        });
    } finally {
        setLoading(false); // Ensure loading state is reset
    }
};

  
    
    return (
        <div className='container mx-auto pb-5 '>
          <div className='flex flex-col gap-2 md:flex-row items-center justify-center'>
                      {/* left side  */}
                      <div
  className="md:w-1/2 min-h-screen md:pt-10 "
>
   <LottieAnimation animationData={signup}></LottieAnimation>
</div>

            <div className="md:w-1/2 flex pt-5 flex-col items-center space-y-6 min-h-screen">
            <div className='relative font-raleway font-bold mx-auto text-5xl text-center'>
    <h1 className="text-2xl pb-3 font-extrabold text-center mx-auto text-white lg:text-3xl dark:text-white">
            Create New account
    </h1>
    <div className='absolute bottom-0 left-1/2 transform -translate-x-1/2 mx-auto border-b-2 border-green-700 w-[50%] transition-all duration-300 ease-in-out p-4 cursor-pointer'></div>
  </div>
  
                <div className="card w-full px-4 bg-white/10 backdrop-blur-md backdrop-opacity-70 border border-green-200 shrink-0 shadow-2xl">
                    <form onSubmit={handleSubmit} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-raleway font-bold text-lg text-white">Name</span>
                            </label>
                            <input type="text" name='name' placeholder="name" className="input input-bordered text-black" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-raleway font-bold text-lg text-white">Profile Photo</span>
                            </label>
                            <input type="file" name="photo" className="file-input file-input-bordered text-black" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-raleway font-bold text-lg text-white">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="email" className="input input-bordered text-black" required />
                        </div>
                        <div className="form-control relative">
                            <label className="label">
                                <span className="label-text font-raleway font-bold text-lg text-white">Create Password</span>
                            </label>
                            <input type = {showpassword ? "text" : "password"} name='password' placeholder="create password" className="input input-bordered text-black" required />
                            <p onClick={() => setShowpassword(!showpassword)} className="absolute top-[64%] left-[82%] md:left-[85%]">
        {
          showpassword ? <FaEyeSlash className="h-[100%] text-black" /> :<FaEye className="h-[100%] text-black" ></FaEye>
     
        }
        </p>   
                        </div>
                        <div className="form-control relative">
                            <label className="label">
                                <span className="label-text font-raleway font-bold text-lg text-white">Confirm Password</span>
                            </label>
                            <input type = {confirmshowpassword ? "text" : "password"} name='passwordM' placeholder="confirm password" className="input input-bordered text-black" required />
                            <p onClick={() => setConfirmShowpassword(!confirmshowpassword)} className="absolute top-[64%] left-[82%] md:left-[85%]">
        {
         confirmshowpassword ? <FaEyeSlash className="h-[100%] text-black" /> :<FaEye className="h-[100%] text-black" ></FaEye>
     
        }
        </p>   
                        </div>
                        <div className="form-control mt-6">
                            <button disabled={loading} className="btn text-green bg-orange-600 hover:bg-orange-800 text-white">
                                {loading ? <FaFan className='animate-spin'></FaFan> : "Signup"}
                            </button>
                        </div>
                    </form>
                    <div className='text-black text-center pb-5 space-y-2'>
                        <div className='flex flex-row items-center justify-center space-x-5'>
                            <div className='rounded-2xl p-2 cursor-pointer'>
                                <SocialLogin></SocialLogin>
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-row text-white px-8 py-5 space-x-1 font-raleway font-bold'>
                        <p>Already have an account?Please</p>
                        <Link href="/login"><span className='underline text-green-500  font-raleway font-extrabold'>Login</span></Link>
                    </div>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Signup;
