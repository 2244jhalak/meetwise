"use client";

import MeetingAnalytics from '@/app/components/dashboard/meetingAnalytics/MeetingAnalytics';
import Sidebar from '@/app/components/dashboard/Sidebar';
import PrivateRoute from '@/app/services/PrivateRoute';


const Page = () => {

    return (
        <PrivateRoute>
            {/* <div className=' bg-[#4A4947] md:flex md:flex-row md:justify-between'>
                <div className='md:w-1/4'>
                    <Sidebar />
                </div>
                <div>
                    <h2 className='text-4xl font-bold pt-3 text-white text-center container mx-auto'>📅 Simplified Meeting Booking</h2>
                    <div className="border border-orange-600 rounded-xl text-center mx-auto container w-[200px] mb-2 mt-2"></div>
                    <p className='p-2 pb-3 text-center mx-auto font-medium font-raleway text-xl text-gray-300'>Enjoy a stress-free meeting booking experience.</p>
                    <MeetingAnalytics />
                </div>
            </div> */}
            <div className=' bg-[#4A4947] md:flex md:flex-row md:justify-between'>
                <div className='md:w-1/4'>
                    <Sidebar />
                </div>
                <div className='container mx-auto md:w-4/4 p-2'>
                    <MeetingAnalytics />
                </div>
            </div>
        </PrivateRoute>

    );
}


export default Page;
