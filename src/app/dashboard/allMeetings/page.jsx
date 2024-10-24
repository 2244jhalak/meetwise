"use client";

import AllMeetings from '@/app/components/dashboard/allMeetings/AllMeetings';
import Sidebar from '@/app/components/dashboard/Sidebar';
import AdminRoute from '@/app/services/AdminRoute';
import PrivateRoute from '@/app/services/PrivateRoute';
 

const Page = () => {
    
        return (
            <PrivateRoute>

                <AdminRoute>
                <div className=' bg-[#4A4947] md:flex md:flex-row md:justify-between'>

                <div className=' bg-slate-950 md:flex md:flex-row md:justify-between'>

                <div className='md:w-1/4'>
                    <Sidebar />
                </div>
                <div className='container mx-auto md:w-4/4 p-5'>
                    <AllMeetings></AllMeetings>
                </div>
            </div>
                 </div>
                </AdminRoute>
            </PrivateRoute>
        );
    }

    
 
export default Page;
