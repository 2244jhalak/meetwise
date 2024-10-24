"use client";

import CustomTabs from '@/app/components/dashboard/createMeeting/MeetingScheduled/ScheduledTab';
import Sidebar from '@/app/components/dashboard/Sidebar';
import PrivateRoute from '@/app/services/PrivateRoute';


const Page = () => {

    return (
        <PrivateRoute>
            <div className="bg-slate-950 min-h-screen md:flex md:flex-row md:justify-between">
                <div className='md:w-1/4'>
                    <Sidebar />
                </div>
                <div className='md:ml-72 min-h-screen'>
                    <h3 className='container mx-auto md:w-4/4 p-2'>All Upcoming and Expired Meeting Shown Here</h3>
                    <CustomTabs />
                </div>
            </div>
        </PrivateRoute>
    );
}



export default Page;
