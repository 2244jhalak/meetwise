"use client";

import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { FaClock, FaCopy, FaLocationArrow } from 'react-icons/fa';

const Scheduled = () => {
    const [meeting, setMeeting] = useState([]);
    const [error, setError] = useState(null);
    const session = useSession();
    const router = useRouter(); // Router hook 

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/dashboard/meetingType/api/${session?.data?.user?.email}`);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const userData = await response.json();
                setMeeting(userData);
            } catch (err) {
                setError(err.message);
            }
        };

        fetchUser();
    }, [session?.data?.user?.email]);

    // Function to copy the meeting link
    const handleCopyLink = (id) => {
        const link = `${process.env.NEXT_PUBLIC_API_URL}/dashboard/meetingType/${id}`; // Meeting URL with ID
        navigator.clipboard.writeText(link)
            .then(() => {
                alert('Link copied to clipboard!');
            })
            .catch((err) => {
                console.error('Failed to copy the link', err);
            });
    };

    // Function to navigate to the details page
    const handleViewDetails = (id) => {
        router.push(`/dashboard/meetingType/${id}`); // Navigates to the meeting details page using the ID
    };

    return (
        <div className='pl-[250px]'>
            <h2 className='text-3xl mt-5'>Scheduled Meeting</h2>
            <div className='grid grid-cols-3 gap-4 mt-5'>
                {
                    meeting.map(meet => (
                        <div className='rounded-lg p-8 shadow-2xl space-y-4' key={meet._id}>
                            <h2 className='text-xl'>{meet.eventName}</h2>
                            <div className='flex items-center justify-between'>
                                <div className='flex items-center gap-2'>
                                    <FaClock />
                                    <p>{meet.duration}</p>
                                </div>
                                <div className='flex items-center gap-2'>
                                    <FaLocationArrow />
                                    <p>{meet.selected}</p>
                                </div>
                            </div>
                            <hr />
                            <div className='flex justify-between'>
                                <div className='flex items-center gap-2 text-blue-500 cursor-pointer' onClick={() => handleCopyLink(meet._id)}>
                                    <FaCopy />
                                    <p>Copy Link</p>
                                </div>
                                <button 
                                    className='text-blue-500 underline cursor-pointer'
                                    onClick={() => handleViewDetails(meet._id)}
                                >
                                    View Details
                                </button>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default Scheduled;
