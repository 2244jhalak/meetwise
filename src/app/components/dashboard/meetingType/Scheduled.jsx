"use client";

import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { FaClock, FaCopy, FaLocationArrow, FaTrash } from 'react-icons/fa';
import Swal from 'sweetalert2';

const Scheduled = () => {
    const [meeting, setMeeting] = useState([]);
    const [error, setError] = useState(null);
    const session = useSession();
    const router = useRouter(); // Router hook 
    console.log(meeting);

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const response = await fetch(`${process.env.NEXT_PUBLIC_CLIENT_URL}/dashboard/meetingType/api/${session?.data?.user?.email}`);
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
        const link = `${process.env.NEXT_PUBLIC_CLIENT_URL}/dashboard/meetingType/${id}`; // Meeting URL with ID
        navigator.clipboard.writeText(link)
            .then(() => {
                alert('Link copied to clipboard!');
            })
            .catch((err) => {
                console.error('Failed to copy the link', err);
            });
    };

    // Function to delete a meeting
    const handleDeleteMeeting = (id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`${process.env.NEXT_PUBLIC_CLIENT_URL}/dashboard/meetingType/apis/${id}`, {
                    method: 'DELETE',
                })
                .then(response => response.json())
                .then(data => {
                    if (data.message === "Meeting deleted successfully") {
                        Swal.fire('Deleted!', 'Your meeting has been deleted.', 'success');
                        
                        // Reload the page after a short delay (2 seconds)
                        setTimeout(() => {
                            window.location.reload();
                        }, 1000); // 2000 milliseconds = 2 seconds
                    } else {
                        Swal.fire('Error!', data.message || 'There was a problem deleting the meeting.', 'error');
                    }
                })
                .catch(err => {
                    console.error('Failed to delete the meeting', err);
                    Swal.fire('Error!', 'There was a problem deleting the meeting.', 'error');
                });
            }
        });
    };
    

    // Function to navigate to the details page
    const handleViewDetails = (id) => {
        router.push(`/dashboard/meetingType/${id}`); // Navigates to the meeting details page using the ID
    };

    return (
        <div className='container font-raleway mx-auto mt-10 p-6 text-white bg-[#4A4947] shadow-lg min-h-screen rounded-md'>
            <h2 className='text-4xl font-bold mt-5 text-white text-center container mx-auto'>Your Meeting Library</h2>
            <div className="border border-orange-600 rounded-xl text-center mx-auto container w-[110px] mb-2 mt-2"></div>
            <p className='p-4 text-center mx-auto font-medium font-raleway text-lg'>View, manage, and share all your scheduled meetings in one place with quick access to copy meeting links</p>
            <div className='grid md:grid-cols-2 grid-cols-1 lg:grid-cols-3 gap-4 mt-5 '>
                {
                    meeting.map(meet => (
                        <div className='rounded-lg relative border border-green-500 bg-black text-white  shadow-2xl ' key={meet._id}>
                            <FaTrash 
                                className='absolute top-2 right-2 cursor-pointer' 
                                onClick={() => handleDeleteMeeting(meet._id)} 
                            />
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
                            <hr />
                            <div className='flex justify-between'>
                                <div className='flex items-center gap-2 text-green-600 cursor-pointer' onClick={() => handleCopyLink(meet._id)}>
                                    <FaCopy />
                                    <p>Copy Link</p>
                                </div>
                                <button 
                                    className='text-orange-500 underline cursor-pointer'
                                    onClick={() => handleViewDetails(meet._id)}
                                >
                                    View Details
                                </button>
                            </div>
                        </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default Scheduled;

