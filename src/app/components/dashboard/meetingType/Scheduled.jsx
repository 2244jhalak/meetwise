"use client";

import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { FaTrash, FaCopy, FaLocationArrow, FaClock, FaShare } from 'react-icons/fa';
import Swal from 'sweetalert2';
import { FaSearch } from 'react-icons/fa'; // Import the FaSearch icon
import 'aos/dist/aos.css';
import AOS from 'aos';

const Scheduled = () => {
    const [meeting, setMeeting] = useState([]); // All meetings state
    const [filteredMeetings, setFilteredMeetings] = useState([]); // Filtered meetings state
    const [searchTerm, setSearchTerm] = useState(''); // Search term state
    const [error, setError] = useState(null);
    const session = useSession();
    const router = useRouter(); // Router hook 
    // console.log(meeting);
    useEffect(() => {
        AOS.init({
          duration: 2000, // Duration of animations (optional)
          once: false, // Whether animation should happen only once while scrolling down (optional)
        });
      }, []);
    useEffect(() => {
        const fetchUser = async () => {
            try {
                const response = await fetch(`${process.env.NEXT_PUBLIC_CLIENT_URL}/dashboard/meetingType/api/${session?.data?.user?.email}`);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const userData = await response.json();
                setMeeting(userData);
                setFilteredMeetings(userData); // Set filtered meetings as default
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
            Swal.fire({
                title: 'Success!',
                text: ' Copied Meeting Link successfully.',
                icon: 'success',
                background: "#000000",  // Black background
                color: "#F8FAFC" // টেক্সটের কালার কাস্টমাইজ করতে পারেন
            });
        })
        .catch((err) => {
            Swal.fire({
                title: 'Error!',
                text: 'Error sharing the meeting. Please try again.',
                icon: 'error',
                background: "#000000",  // Black background
                color: "#F8FAFC" // টেক্সটের রঙ
            });
            console.error('Error copied meeting', err);})
    };
//  share details
const handleShareMeeting = (meet) => {
    const shareData = {
        title: meet.eventName,
        text: meet.description,
        url: `${process.env.NEXT_PUBLIC_CLIENT_URL}/dashboard/meetingType/${meet._id}`
    };

    if (navigator.share) {
        navigator.share(shareData)
            .then(() => {
                console.log('Meeting shared successfully');
            })
            .catch((err) => {
                console.error('Error sharing meeting', err);
            });
    } else {
        alert('Your browser does not support sharing via this method.');
    }
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
            confirmButtonText: 'Yes, delete it!',
            background: "#000000",  // Black background
           color: "#F8FAFC"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`${process.env.NEXT_PUBLIC_CLIENT_URL}/dashboard/meetingType/apis/${id}`, {
                    method: 'DELETE',
                })
                .then(response => response.json())
                .then(data => {
                    if (data.message === "Meeting deleted successfully") {
                        Swal.fire({
                            title: 'Deleted!',
                            text: 'Your meeting has been deleted.',
                            icon: 'success',
                           background: "#000000",  // Black background
                           color: "#F8FAFC"
                          });
                        
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

    // Function to handle search input
    const handleSearch = (event) => {
        const searchValue = event.target.value.toLowerCase();
        setSearchTerm(searchValue);

        // Filter meetings based on search term
        const filtered = meeting.filter((meet) =>
            meet.eventName.toLowerCase().includes(searchValue)
        );
        setFilteredMeetings(filtered);
    };

    return (
        <div className='container font-raleway mx-auto pr-6 pb-6 pt-2 pl-2 text-black bg-gray-200 shadow-lg min-h-screen rounded-md'>
            <h2 className='text-4xl font-bold mt-5 text-black text-center container mx-auto'>Your Meeting Library</h2>
            <div className="border border-green-600 rounded-xl text-center mx-auto container w-[110px] mb-2 mt-2"></div>
            <p className='p-4 text-center mx-auto font-medium font-raleway text-lg'>View, manage, and share all your scheduled meetings in one place with quick access to copy meeting links</p>
            
            {/* Search bar */}
          

<div className='text-center my-6'>
    <div className="relative w-1/2 mx-auto">
        <input
            type="text"
            placeholder="Search meetings by name..."
            value={searchTerm}
            onChange={handleSearch}
            className="p-3 pl-10 rounded-full w-full bg-white text-black border border-green-600 "
        />
        <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
            <FaSearch className="text-gray-400" size={20} /> {/* Search icon from react-icons */}
        </div>
    </div>
</div>




<div className='grid md:grid-cols-2 grid-cols-1 lg:grid-cols-3 gap-4 mt-5 ' >
    {
        filteredMeetings.map(meet => (
            <div className='rounded-lg relative border border-green-500 bg-gray-800 text-white shadow-2xl 'data-aos="fade-up" key={meet._id}>
                {/* Delete Icon */}
                <FaTrash 
                    className='absolute top-2 left-2 cursor-pointer' 
                    onClick={() => handleDeleteMeeting(meet._id)} 
                />
                {/* Share Icon */}
                <FaShare 
                    className='absolute top-2 right-2 cursor-pointer' 
                    onClick={() => handleShareMeeting(meet)} 
                />
                <div className='bg-green-700 w-full h-[30px] rounded-t-lg'></div>
                <div className='p-8 space-y-4'>
                    <h2 className='text-xl font-bold '>Event :<span className=''> {meet.eventName}</span></h2>
                    <h2 className='text-xl font-bold '>Description: <span className='text-base font-medium'>{meet.description}</span> </h2>
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
                            className='text-blue-500 underline cursor-pointer'
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
