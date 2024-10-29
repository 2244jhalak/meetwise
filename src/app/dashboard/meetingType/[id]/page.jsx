
import MeetingDetails from '@/app/components/dashboard/meetingType/MeetingDetails';
import PrivateRoute from '@/app/services/PrivateRoute';
import Link from 'next/link';
import React from 'react';
import { IoIosArrowBack } from "react-icons/io";

const Page = async ({ params }) => {
    const { id } = params; // Get the dynamic id from URL

    // Fetch meeting details based on the id
    const res = await fetch(`${process.env.NEXT_PUBLIC_CLIENT_URL}/dashboard/createMeeting/api/${id}`);
    if (!res.ok) {
        throw new Error('Failed to fetch meeting details');
    }
    const meetingDetails = await res.json();

    return (
        <PrivateRoute>
            <div className='bg-gray-300  container mx-auto min-h-screen'>
            <div className="text-left bg-gray-300 ">
      <Link className="flex items-center space-x-1 text-base" href="/dashboard">
        <IoIosArrowBack className="text-black " /><h4 className="text-black">Cancel</h4>
      </Link>
    </div>
             <h2 className='text-4xl font-bold  text-black text-center container mx-auto'>📅 Simplified Meeting Booking</h2>
            <div className="border border-green-600 rounded-xl text-center mx-auto container w-[200px] mb-2 mt-2"></div>
            <p className='p-2 pb-3 text-center mx-auto font-medium font-raleway text-xl text-gray-600'>Enjoy a stress-free meeting booking experience.</p>
            <MeetingDetails meetingDetails={meetingDetails} />
        </div>
        </PrivateRoute>
    );
};

export default Page;