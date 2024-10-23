"use client";

import { useSession } from 'next-auth/react';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { FaEnvelope, FaVoicemail } from 'react-icons/fa';


const UserInfo = () => {
    const { data: session } = useSession();
    const [formattedDate, setFormattedDate] = useState('');
    const [name, setName] = useState(session?.user?.name || '');
    const [title,setTitle] = useState(session?.user?.title || '');
    const [description,setDescription] = useState(session?.user?.description || '');
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
                body: JSON.stringify({ name,title,description, image: uploadedImageUrl, email: session?.user?.email }),
            });
            if (response.ok) {
                

                if (response.ok) {
                    alert('User info updated successfully');
                    window.location.reload()
                   
                    
                   
                }
            } else {
                alert('Failed to update user info');
            }
        } catch (error) {
            console.error('Error updating user info:', error);
        }
    };

    return (
        <div className='flex justify-center gap-5'>
          <div className='w-96 border-2 h-fit space-y-2 rounded-t-lg shadow-xl py-5'>
            <div className='flex justify-center'>
            <div className="avatar">
                <div className="w-24 rounded-full">
                  <Image src={image} alt='' width={50} height={50}></Image>
                </div>
            </div>
            
            </div>
            <div className="text-2xl flex justify-center">
                <h4>{name}</h4>
            </div>
            <div className="text-xl flex justify-center">
                <h5>{title}</h5>
            </div>
            <div className="text-xl ps-5">
                <h6>{description}</h6>
            </div>
            <div className='ps-5 flex gap-2 items-center pt-5'>
                <FaEnvelope></FaEnvelope>
                <p>{session?.user?.email}</p>
            </div>
          </div>
          {/* Update Profile */}
          <div className='w-96 border-2 h-fit space-y-2 rounded-t-lg shadow-xl py-5'>
               <div className='ps-8'>
               <form onSubmit={handleUpdate} className="mt-4">
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Update name"
                        className="input input-bordered w-full max-w-xs mb-2"
                    />
                    <input
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        placeholder="Update title"
                        className="input input-bordered w-full max-w-xs mb-2"
                    />
                    <textarea
                        type="text"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        placeholder="Update description"
                        className="input input-bordered w-full max-w-xs mb-2"
                    />

                    <input
                        type="file"
                        accept="image/*"
                        onChange={handleImageChange} // Call the image preview handler
                        className="file-input file-input-bordered text-black"
                    />

                    <div className='flex justify-end me-7 mt-2'>
                    <button type="submit" className="btn btn-primary">Update Info</button>
                    </div>
                </form>
               </div>
          </div>
       </div>    
    );
};

export default UserInfo;
