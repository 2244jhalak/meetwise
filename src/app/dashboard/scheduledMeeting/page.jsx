"use client";

import Sidebar from '@/app/components/dashboard/Sidebar';
import PrivateRoute from '@/app/services/PrivateRoute';
 

const Page = () => {
    
        return (
            <PrivateRoute>
                <div className=" bg-[#4A4947] flex">
                <Sidebar />
               
            </div>
            </PrivateRoute>
        );
    }

    

export default Page;
