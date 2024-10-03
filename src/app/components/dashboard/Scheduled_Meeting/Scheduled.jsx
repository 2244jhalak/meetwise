"use client"

import { useSession } from 'next-auth/react';
import React, { useEffect, useState } from 'react';
import { FaClock, FaCopy, FaLocationArrow } from 'react-icons/fa';

const Scheduled = () => {
    const [meeting, setMeeting] = useState([]);
    const [error, setError] = useState(null);
    const session = useSession();
    console.log(meeting)

    useEffect(() => {
        const fetchUser = async () => {
            
                try {
                    const response = await fetch(`http://localhost:3000/dashboard/scheduledMeeting/api/${session?.data?.user?.email}`);
                    
                    
                    if (!response.ok) {
                        throw new Error('Network response was not ok');
                    }
                    const userData = await response.json();
                    setMeeting(userData);
                    console.log(userData);
                } catch (err) {
                    setError(err.message);
                }
           
        };

        fetchUser();
    }, [session?.data?.user?.email]);
    return (
        <div className='pl-[250px]'>
            <h2 className='text-3xl mt-5'>Scheduled Meeting</h2>
            <div className='grid grid-cols-3 gap-4 mt-5'>
                {
                    meeting.map(meet=><div className='rounded-lg p-8 shadow-2xl space-y-4' key={meet._id}>
                        <h2 className='text-xl'>{meet.eventName}</h2>
                        <div className='flex items-center justify-between'>
                        <div className='flex items-center gap-2'>
                            <FaClock></FaClock>
                            <p>{meet.duration}</p>
                        </div>
                        <div className='flex items-center gap-2'>
                            <FaLocationArrow></FaLocationArrow>
                            <p>{meet.selected}</p>
                        </div>
                        </div>
                        <hr></hr>
                        <div className='flex justify-end'>
                            <div className='flex items-center gap-2 text-blue-500 cursor-pointer'>
                            <FaCopy></FaCopy>
                            <p>Copy Link</p>
                            </div>
                        </div>
                    </div>)
                }
            </div>
            
        </div>
    );
};

export default Scheduled;
