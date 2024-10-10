"use client";
import { useSession, signIn, getSession, signOut } from 'next-auth/react';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';

const UserInfo = () => {
    const { data: session } = useSession();
    const [formattedDate, setFormattedDate] = useState('');
    const [name, setName] = useState(session?.user?.name || '');
    const [image, setImage] = useState(session?.user?.image || '');
    const [imageFile, setImageFile] = useState(null); // New state for image file
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
            const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/dashboard/profile/api`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ name, image: uploadedImageUrl, email: session?.user?.email }),
            });
            if (response.ok) {
                alert('User info updated successfully');

                // Manually refresh session
                const updatedSession = await getSession();
                setName(updatedSession.user.name);
                setImage(updatedSession.user.image);
                signOut({ callbackUrl: '/login' });
            } else {
                alert('Failed to update user info');
            }
        } catch (error) {
            console.error('Error updating user info:', error);
        }
    };

    return (
        <div className='flex justify-center'>
            <div className="flex flex-col">
                <div className="stat">
                    <div className="stat-figure text-secondary">
                        <div className="avatar online">
                            <div className="w-16 rounded-full">
                                <Image alt='' src={session?.user?.image} height={50} width={50}></Image>
                            </div>
                        </div>
                    </div>
                    <div className="text-3xl">{session?.user?.name}</div>
                    <div className="stat-title">{session?.user?.email}</div>
                    <div className="stat-desc text-secondary">Session Expires : {formattedDate}</div>
                </div>

                {/* Update Form */}
                <form onSubmit={handleUpdate} className="mt-4">
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Update name"
                        className="input input-bordered w-full max-w-xs mb-2"
                    />
                    
                    <input
                        type="file"
                        accept="image/*"
                        onChange={(e) => setImageFile(e.target.files[0])}
                        
                        className="file-input file-input-bordered text-black"
                    />
                    
                    <button type="submit" className="btn btn-primary">Update Info</button>
                </form>
            </div>
        </div>
    );
};

export default UserInfo;
