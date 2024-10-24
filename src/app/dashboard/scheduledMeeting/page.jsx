"use client";

import CustomTabs from '@/app/components/dashboard/createMeeting/MeetingScheduled/ScheduledTab';
import Sidebar from '@/app/components/dashboard/Sidebar';
import PrivateRoute from '@/app/services/PrivateRoute';


const Page = () => {

    return (
        <PrivateRoute>
            <div className=" bg-[#4A4947] flex">
                <Sidebar />
                <div className='ml-72 min-h-screen'>
                    <h3 className='font-bold text-2xl text-white my-6'>All Upcoming and Expired Meeting Shown Here</h3>
                    <CustomTabs></CustomTabs>
                </div>

            </div>
        </PrivateRoute>
    );
}



export default Page;
