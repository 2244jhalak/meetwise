import AllUsers from '@/app/components/dashboard/allUsers/AllUsers';
import Sidebar from '@/app/components/dashboard/Sidebar';
import PrivateRoute from '@/app/services/PrivateRoute';
import AdminRoute from '@/app/services/AdminRoute'
import React from 'react';

const page = () => {

    return (
        <PrivateRoute>

        <AdminRoute>
        <div className=' bg-gray-200 md:flex md:flex-row md:justify-between'>

     

        <div className='md:w-1/4'>
            <Sidebar />
        </div>
        <div className='container mx-auto md:w-4/4 p-5'>
        <AllUsers></AllUsers>
        </div>
    </div>
    
        </AdminRoute>
    </PrivateRoute>
       
        

    );
};

export default page;