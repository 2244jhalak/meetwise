"use client";

import CustomTabs from '@/app/components/dashboard/createMeeting/MeetingScheduled/ScheduledTab';
import Sidebar from '@/app/components/dashboard/Sidebar';
import PrivateRoute from '@/app/services/PrivateRoute';


const Page = () => {

    return (
        <PrivateRoute>
        <div className='bg-gray-200 min-h-screen md:flex md:flex-row md:justify-between'>
            <div className='md:w-1/4'>
                <Sidebar />
            </div>
            <div className='container mx-auto md:w-3/4 p-2'>
          
            <CustomTabs />
            </div>
        </div>
    </PrivateRoute>
      
    );
}



export default Page;
