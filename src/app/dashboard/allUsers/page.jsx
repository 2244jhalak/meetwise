import AllUsers from '@/app/components/dashboard/allUsers/AllUsers';
import Sidebar from '@/app/components/dashboard/Sidebar';
import PrivateRoute from '@/app/services/PrivateRoute';
import AdminRoute from '@/app/services/AdminRoute'
import React from 'react';

const page = () => {

    return (
      
            <PrivateRoute>
                <AdminRoute>
            <div>
            <Sidebar></Sidebar>
            <div className='pl-[270px] mt-10'>
                <AllUsers></AllUsers>
            </div>
        </div>
            </AdminRoute>
            </PrivateRoute>
            
        

    );
};

export default page;