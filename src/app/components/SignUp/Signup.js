"use client"
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import Image from "next/image";
import { useState } from 'react';
import {FaEye, FaEyeSlash} from 'react-icons/fa';
import { FaFacebook, FaGithub, FaFan } from 'react-icons/fa';
import SocialLogin from '../SocialLogin/SocialLogin';
import Swal from 'sweetalert2';

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
        confirm: e.target.passwordM.value
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
    
      // 1. ফাইল আপলোডের জন্য FormData তৈরি
      const formData = new FormData();
      formData.append("image", photo);
      
      // 2. imgbb API এর মাধ্যমে ছবি আপলোড করা
      const imgbbResponse = await fetch(`https://api.imgbb.com/1/upload?key=${process.env.NEXT_PUBLIC_IMGBB_API_KEY}`, {
        method: "POST",
        body: formData,
      });
    
      const imgbbData = await imgbbResponse.json();
    
      if (imgbbData.success) {
        const image = imgbbData.data.url;
        // 3. MongoDB তে ছবি URL সহ ব্যবহারকারীর তথ্য পাঠানো
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/signup/api`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ ...newUser, image }), // photoUrl যোগ করা
        });
    
        setLoading(false);
        
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Successfully signed up!",
          showConfirmButton: false,
          timer: 1500
        });
    
        if (response.status === 200) {
          router.push("/login");
        }       
      } else {
        alert("Photo upload failed");
        setLoading(false);
      }
    };
    
    return (
        <div className='container mx-auto bg-gray-100 '>
          <div className='flex flex-col gap-2 md:flex-row'>
                      {/* left side  */}
                      <div
  className="md:w-3/5 min-h-screen bg-[url('/banner/bg-3.jpg')] bg-cover bg-center flex justify-center items-center"
>
  <div className="w-2/3">
    <Image
      src="/banner/signup.png"
      alt="Main Banner Image"
      width={800}
      height={400}
      className="w-full  h-auto object-contain"
    />
  </div>
</div>

            <div className="md:w-4/5 flex pt-5 flex-col items-center space-y-6 min-h-screen">
            <div className='relative font-raleway font-bold mx-auto text-5xl text-center'>
    <h1 className="text-2xl pb-3 font-extrabold text-center mx-auto text-gray-800 lg:text-3xl dark:text-white">
            Create New account
    </h1>
    <div className='absolute bottom-0 left-1/2 transform -translate-x-1/2 mx-auto border-b-2 border-green-700 w-[50%] transition-all duration-300 ease-in-out p-4 cursor-pointer'></div>
  </div>
  
                <div className="card w-full bg-sky-50 max-w-sm shrink-0 shadow-2xl">
                    <form onSubmit={handleSubmit} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-raleway font-bold text-lg">Name</span>
                            </label>
                            <input type="text" name='name' placeholder="name" className="input input-bordered text-black" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-raleway font-bold text-lg">Profile Photo</span>
                            </label>
                            <input type="file" name="photo" className="file-input file-input-bordered text-black" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-raleway font-bold text-lg">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="email" className="input input-bordered text-black" required />
                        </div>
                        <div className="form-control relative">
                            <label className="label">
                                <span className="label-text font-raleway font-bold text-lg">Create Password</span>
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
                                <span className="label-text font-raleway font-bold text-lg">Confirm Password</span>
                            </label>
                            <input type = {confirmshowpassword ? "text" : "password"} name='passwordM' placeholder="confirm password" className="input input-bordered text-black" required />
                            <p onClick={() => setConfirmShowpassword(!confirmshowpassword)} className="absolute top-[64%] left-[82%] md:left-[85%]">
        {
         confirmshowpassword ? <FaEyeSlash className="h-[100%] text-black" /> :<FaEye className="h-[100%] text-black" ></FaEye>
     
        }
        </p>   
                        </div>
                        <div className="form-control mt-6">
                            <button disabled={loading} className="btn text-green bg-green-600 hover:bg-green-800 text-white">
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
                    <div className='flex flex-row text-black px-8 py-5 space-x-1 font-raleway font-bold'>
                        <p>Already have an account?Please</p>
                        <Link href="/login"><span className='underline text-[#1c4657]  font-raleway font-extrabold'>Login</span></Link>
                    </div>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Signup;
