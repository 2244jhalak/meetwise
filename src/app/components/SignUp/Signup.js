"use client"
import Link from 'next/link';
import { useRouter } from 'next/navigation';

import { useState } from 'react';

import { FaFacebook, FaGithub, FaFan } from 'react-icons/fa';
import SocialLogin from '../SocialLogin/SocialLogin';
import Swal from 'sweetalert2';

const Signup = () => {
    const [loading, setLoading] = useState(false);
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
        const response = await fetch('http://localhost:3000/signup/api', {
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
        <div>
            <div className="bg-base-200 flex pt-5 flex-col items-center space-y-6 min-h-screen">
                <h2 className='text-2xl text-black font-semibold'>Signup Now</h2>
  
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <form onSubmit={handleSubmit} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name='name' placeholder="name" className="input input-bordered text-black" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Profile Photo</span>
                            </label>
                            <input type="file" name="photo" className="file-input file-input-bordered text-black" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="email" className="input input-bordered text-black" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Create Password</span>
                            </label>
                            <input type="password" name='password' placeholder="create password" className="input input-bordered text-black" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Confirm Password</span>
                            </label>
                            <input type="password" name='passwordM' placeholder="confirm password" className="input input-bordered text-black" required />
                        </div>
                        <div className="form-control mt-6">
                            <button disabled={loading} className="btn btn-primary">
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
                    <div className='flex flex-row text-black px-8 py-5 space-x-1'>
                        <p>Already have an account?Please</p>
                        <Link href="/login"><span className='underline'>Login</span></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Signup;
