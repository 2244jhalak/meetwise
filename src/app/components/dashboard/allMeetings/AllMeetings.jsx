"use client";

import React, { useEffect, useState } from 'react';
import { FaClock, FaLocationArrow } from 'react-icons/fa';


const AllMeetings = () => {
    const [meeting, setMeeting] = useState([]);

    // Function to fetch users
    const fetchUser = async () => {
        try {
            const response = await fetch(`${process.env.NEXT_PUBLIC_CLIENT_URL}/dashboard/allMeetings/api`, {
                method: 'GET',
                headers: {
                    'Cache-Control': 'no-cache', // Ensure fresh data is fetched
                },
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const meetingsData = await response.json();
            setMeeting(meetingsData.data || meetingsData);
        } catch (err) {
            setError(err.message);
        }
    };

    // Fetch users when the component mounts
    useEffect(() => {
        fetchUser();
    }, []);

    

    return (
        <div className='container font-raleway mx-auto mt-10 p-6 text-white shadow-lg min-h-screen rounded-md'>
            <h2 className='text-4xl font-bold mt-5 text-white text-center container mx-auto'>All Meetings</h2>
            <div className="border border-orange-600 rounded-xl text-center mx-auto container w-[110px] mb-2 mt-2"></div>
            <p className='p-4 text-center mx-auto font-medium font-raleway text-lg'>View, manage, and share all your scheduled meetings in one place with quick access to copy meeting links</p>
            <div className='grid md:grid-cols-2 grid-cols-1 lg:grid-cols-3 gap-4 mt-5 '>
                {
                    meeting.map(meet => (
                        <div className='rounded-lg relative border border-green-500 bg-black text-white  shadow-2xl ' key={meet._id}>
                            
                            <div className='bg-green-700 w-full h-[30px] rounded-t-lg'></div>
                            <div className='p-8 space-y-4'>
                            <h2 className='text-xl font-bold '>Event Name:<span className=''>{meet.eventName}</span></h2>
                            <h2 className='text-xl font-bold '>Description: <span className='text-base font-medium'>{meet.eventName}</span> </h2>
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
                           
                            
                        </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default AllMeetings;