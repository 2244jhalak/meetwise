"use client";
import React, { useState } from 'react';
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { FaUnlockKeyhole } from "react-icons/fa6";
import { MdOutlineUploadFile,  MdAttachEmail } from "react-icons/md";
const Signup = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setshowConfirmPassword] = useState(false);
    const [file, setFile] = useState(null); // Only one declaration for `file`
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    // State for error messages
    const [errors, setErrors] = useState({});

    // Form validation
    const handleSubmit = (e) => {
        e.preventDefault();
        let formErrors = {};

        if (!username) {
            formErrors.username = 'Username is required';
        }

        if (!email) {
            formErrors.email = 'Email is required';
        }

        if (!password) {
            formErrors.password = 'Password is required';
        }

        if (!confirmPassword) {
            formErrors.confirmPassword = 'Please confirm your password';
        } else if (password !== confirmPassword) {
            formErrors.confirmPassword = 'Passwords do not match';
        }
        setErrors(formErrors);

        // Check if there are no errors
        if (Object.keys(formErrors).length === 0) {
            // Submit the form (handle form submission logic)
            console.log('Form submitted');
        }
    };

    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
    };

    return (
        <div className=' bg-[#F8ECFF] py-10'>
            <div className="flex md:flex-row flex-col gap-10  lg:px-24 md:px-8 px-5  ">
                <div className=" w-full md:w-1/2 lg:mt-24 md:mt-20">
                    <img src="https://i.postimg.cc/MTYBf7s3/Online-calendar-amico-1.png" alt="" />
                </div>
                <div className="bg-white shadow-2xl border border-violet-700  transition-all duration-500 ease-in font-raleway cursor-pointer shadow-slate-700 w-full md:w-1/2 p-8 rounded-xl dark:bg-gray-50 dark:text-gray-800">
                    <h1 className="text-2xl font-bold text-center font-raleway">Create New Account</h1>
                    <div className='justify-center mx-auto border-b-2 h-px w-[100px] hover:w-[200px] border-violet-700 transition-all duration-300 ease-in-out p-1 cursor-pointer mb-6'></div>
                    <form className="w-full p-4" onSubmit={handleSubmit}>
                        {/* Username Field */}
                        <div>
                            <label className="label">
                                <span className="label-text font-raleway text-base md:text-lg font-bold text-black">Username</span>
                            </label>
                            <div className="relative flex items-center mt-2 border border-violet-400 rounded-lg">
                                <span className="absolute">
                                <FaUser  className="w-5 h-5 text-gray-300 ml-2 dark:text-gray-500"/>
                                </span>
                                <input
                                    type="text"
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                    className="block w-full py-3  text-gray-700 placeholder:text-xs placeholder:font-raleway bg-gray-50 font-raleway border rounded-lg px-11 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-violet-500 dark:focus:border-violet-300 focus:ring-violet-300 focus:outline-none focus:ring focus:ring-opacity-40"
                                    placeholder="Enter your Username"
                                />
                            </div>
                            {errors.username && <p className="text-red-500 text-sm">{errors.username}</p>}
                        </div>

                        {/* File Input */}
                        <div className='mt-3'>
                            <label className="label">
                                <span className="label-text font-raleway text-base md:text-lg font-bold text-black">Choose Photo</span>
                            </label>
                            <div className="flex items-center bg-gray-50 px-3 py-3 mx-auto mt-2 text-center border-2 border-dashed rounded-lg dark:border-gray-600 dark:bg-gray-900">
                                <input
                                    type="file"
                                    onChange={handleFileChange}
                                    className="hidden placeholder:text-xs"
                                    id="profile-photo"
                                />
                                <label htmlFor="profile-photo" className="flex items-center cursor-pointer">
                                <MdOutlineUploadFile className="w-5 h-5 text-gray-300  dark:text-gray-500" />
                                    <h2 className="mx-3 text-gray-400 text-xs">Choose Profile Photo</h2>
                                </label>
                                {file && <div className="ml-4 text-sm text-gray-500">{file.name} selected</div>}
                            </div>
                        </div>
                 {/* Email Field */}
              <div className="mt-3">
              <label className="label">
                <span className="label-text font-raleway text-base md:text-lg font-bold text-black">
                  Email
                </span>
              </label>
              <div className="relative flex items-center mt-2">
                <span className="absolute">
                <MdAttachEmail   className="w-5 h-5 text-gray-300 ml-3 dark:text-gray-500"/>
                </span>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="block w-full py-3 placeholder:text-xs text-gray-700 bg-gray-50 border rounded-lg px-11 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-violet-500 dark:focus:border-violet-300 focus:ring-violet-300  focus:outline-none focus:ring focus:ring-opacity-40"
                  placeholder=" Enter Your email address"
                />
              </div>
              {errors.email && (
                <p className="text-red-500 text-sm">{errors.email}</p>
              )}
            </div>
            {/* PASSWORD  */}
                     <div className='mt-3'>
  <label className="label">
    <span className="label-text font-raleway text-base md:text-lg font-bold text-black">Password</span>
  </label>
  <div className="relative flex items-center mt-2 gap-3">
    <span className="absolute">
    <FaUnlockKeyhole  className="w-5  h-5 text-gray-300 ml-3 dark:text-gray-500"/>
    </span>
    <input
     type = {showPassword ? "text" : "password"}
      value={password}
      onChange={(e) => setPassword(e.target.value)}
      className="block w-full px-10 py-3 placeholder:text-xs text-gray-700 bg-gray-50 border rounded-lg dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600  focus:border-violet-500 dark:focus:border-violet-300 focus:ring-violet-300  focus:outline-none focus:ring focus:ring-opacity-40"
      placeholder="Enter Your Password"
    />
    <p onClick={() => setShowPassword(!showPassword)} className="absolute top-[37%] left-[82%] md:left-[94%]">
        {
          showPassword ? <FaEyeSlash className="h-[100%] text-black" /> :<FaEye className="h-[100%] text-black" ></FaEye>
     
        }
        </p>  
  </div>
  {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}
  
                      </div>
            {/* Confirm Password Field */}
                      <div className='mt-3'>
           <label className="label">
    <span className="label-text font-raleway text-base md:text-lg font-bold text-black">Confirm Password</span>
              </label>
          <div className="relative flex items-center mt-2">
    <span className="absolute">
    <FaUnlockKeyhole  className="w-5  h-5 text-gray-300 ml-3 dark:text-gray-500"/>
    </span>
    <input
     type = {showConfirmPassword? "text" : "password"}
      value={confirmPassword}
      onChange={(e) => setConfirmPassword(e.target.value)}
      className="block w-full px-10 py-3 placeholder:text-xs text-gray-700 bg-gray-50 border rounded-lg dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600  focus:border-violet-500 dark:focus:border-violet-300 focus:ring-violet-300  focus:outline-none focus:ring focus:ring-opacity-40"
      placeholder="Confirm Password"
    />
    <p onClick={() => setshowConfirmPassword(!showConfirmPassword)} className="absolute top-[37%] left-[82%] md:left-[94%]">
        {
         showConfirmPassword ? <FaEyeSlash className="h-[100%] text-black" /> :<FaEye className="h-[100%] text-black" ></FaEye>
     
        }
        </p>  
  </div>
  {errors.confirmPassword && <p className="text-red-500 text-sm">{errors.confirmPassword}</p>}
  
                      </div>

            {/* Submit Button */}
             < div className="mt-5">
               <button
                type="submit"
               className="w-full font-semibold btn-primary transition-all duration-500 ease-in font-raleway bg-[#5e3c85] border-[#010c3a] hover:bg-[#482b69] text-white py-3 text-lg md:text-xl font-raleway rounded-lg" >
                Submit
              </button>
             </div>
             <div className="form-control mt-6">
        <p className="text-left font-raleway text-xs md:text-lg font-bold  text-black">Already Have An Account? <a className='text-violet-800'>Login Here</a></p>
        </div>
                        {/* Other form fields go here, same as your existing code */}
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Signup;
