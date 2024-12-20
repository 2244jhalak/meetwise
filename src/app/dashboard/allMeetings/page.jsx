"use client";

import AllMeetings from '@/app/components/dashboard/allMeetings/AllMeetings';
import Sidebar from '@/app/components/dashboard/Sidebar';
import AdminRoute from '@/app/services/AdminRoute';
import PrivateRoute from '@/app/services/PrivateRoute';
 

const Page = () => {
    
        return (
            <PrivateRoute>

                <AdminRoute>
                <div className=' bg-gray-200 md:flex md:flex-row md:justify-between'>

             

                <div className='md:w-1/4'>
                    <Sidebar />
                </div>
                <div className='container mx-auto md:w-3/4 p-5'>
                    <AllMeetings></AllMeetings>
                </div>
            </div>
            
                </AdminRoute>
            </PrivateRoute>
        );
    }

    
 
export default Page;
