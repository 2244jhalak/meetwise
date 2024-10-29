"use client";

import { useSession } from 'next-auth/react';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { FaEdit, FaEnvelope } from 'react-icons/fa';
import Swal from 'sweetalert2';


const UserInfo = () => {
    const { data: session } = useSession();
    const [formattedDate, setFormattedDate] = useState('');
    const [name, setName] = useState(session?.user?.name || '');
    const [title, setTitle] = useState(session?.user?.title || '');
    const [description, setDescription] = useState(session?.user?.description || '');
    const [image, setImage] = useState(session?.user?.image || '');
    const [imageFile, setImageFile] = useState(null); // State for image file

    console.log(session);

    useEffect(() => {
        const dateStr = session?.expires;
        const date = new Date(dateStr);

        if (!isNaN(date.getTime())) {
            const hours = date.getUTCHours() % 12 || 12;
            const minutes = String(date.getUTCMinutes()).padStart(2, '0');
            const seconds = String(date.getUTCSeconds()).padStart(2, '0');
            const ampm = date.getUTCHours() >= 12 ? 'PM' : 'AM';
            const formatted = `${date.getUTCFullYear()}-${String(date.getUTCMonth() + 1).padStart(2, '0')}-${String(date.getUTCDate()).padStart(2, '0')} ${hours}:${minutes}:${seconds} ${ampm}`;
            setFormattedDate(formatted);
        } else {
            setFormattedDate('Invalid date');
        }
    }, [session?.expires]);

    // Function to handle image preview
    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setImageFile(file);
            setImage(URL.createObjectURL(file)); // Preview the selected image
        }
    };

    const handleUpdate = async (e) => {
        e.preventDefault();
        let uploadedImageUrl = image;

        // Upload image to imgbb if a new image file is selected
        if (imageFile) {
            const formData = new FormData();
            formData.append('image', imageFile);

            try {
                const response = await fetch(`https://api.imgbb.com/1/upload?key=${process.env.NEXT_PUBLIC_IMGBB_API_KEY}`, {
                    method: 'POST',
                    body: formData,
                });
                const data = await response.json();
                if (data.success) {
                    uploadedImageUrl = data.data.url; // Get the uploaded image URL
                } else {
                    alert('Image upload failed: ' + data.message);
                    return; // Stop the update if the image upload fails
                }
            } catch (error) {
                console.error('Error uploading image:', error);
                return; // Stop the update if there is an error
            }
        }

        try {
            const response = await fetch(`${process.env.NEXT_PUBLIC_CLIENT_URL}/dashboard/profile/api/${session?.user?.email}`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ name, title, description, image: uploadedImageUrl, email: session?.user?.email }),
            });
            if (response.ok) {


                if (response.ok) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "User info updated successfully",
                        showConfirmButton: false,
                        timer: 1500,
                    });
                    // alert('User info updated successfully');
                    window.location.reload();



                }
            } else {
                // alert('Failed to update user info');
                Swal.fire({
                    title: 'Error!',
                    text: error.message,
                    icon: 'error',
                    confirmButtonText: 'OK',
                });
            }
        } catch (error) {
            console.error('Error updating user info:', error);
        }
    };

    return (
        <div className='px-3 bg-gray-300'>
            <h1 className="text-2xl text-black pb-3 font-semibold rounded-2xl md:w-1/4 border-b-2 border-green-600 text-center lg:mx-auto lg:text-3xl my-4 md:mx-auto mx-6">
                My Profile
            </h1>
            <div className=' text-white w-full lg:w-[700px] md:w-96 border-2 border-gray-700 bg-blue-100  rounded-lg shadow-lg glass p-6 mx-auto'>
                <h3 className='text-center text-2xl font-semibold text-green-800 mb-2'>Update Profile</h3>
                <div className="border border-blue-600 rounded-xl text-center mx-auto my-2 w-24"></div>

                {/* Update Profile Form */}
                <div className='lg:flex  justify-between'>
                    <div className='mt-8 mx-auto'>
                        <div className='flex flex-col items-center'>
                            <div className="avatar">
                                <div className="w-24 h-24 rounded-full border-4 border-gray-700 overflow-hidden">
                                    <Image src={image} alt='' width={96} height={96} className='object-cover'></Image>
                                </div>
                            </div>
                            <div className="text-2xl mt-2 font-extrabold text-green-600">
                                <h4>{name}</h4>
                            </div>
                            <div className='flex items-center font-bold mt-2'>
                                <FaEnvelope className='text-blue-900 mr-2' />
                                <p className='text-blue-900'>{session?.user?.email}</p>
                            </div>
                            <div className="text-lg font-bold mt-2 text-gray-800">
                                <h5>{title}</h5>
                            </div>
                            <div className="text-sm text-center mt-2 px-6 text-gray-700">
                                <h6>{description}</h6>
                            </div>

                        </div>
                    </div>
                    <form onSubmit={handleUpdate} className="space-y-4 w-80 mt-8 mx-auto">
                        <input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="Update name"
                            className="input input-bordered w-full bg-gray-900 text-gray-300 border-gray-700 focus:border-blue-500 focus:bg-slate-900"
                        />
                        <input
                            type="text"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            placeholder="Update title"
                            className="input input-bordered w-full bg-gray-900 text-gray-300 border-gray-700 focus:border-blue-500 focus:bg-slate-900"
                        />
                        <textarea
                            type="text"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            placeholder="Update description"
                            className="input input-bordered w-full bg-gray-900 text-gray-300 border-gray-700 focus:border-blue-500 focus:bg-slate-900"
                        />
                        <input
                            type="file"
                            accept="image/*"
                            onChange={handleImageChange}
                            className="file-input file-input-bordered text-gray-300 bg-gray-900 border-gray-700 hover:bg-slate-700"
                        />
                        <div className='flex justify-end'>
                            <button type="submit" className="btn btn-primary bg-blue-900 hover:bg-blue-950 border-0 px-6 py-2 mt-4">
                                <FaEdit /> Update Info
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default UserInfo;
