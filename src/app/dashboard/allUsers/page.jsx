import AllUsers from '@/app/components/dashboard/allUsers/AllUsers';
import Sidebar from '@/app/components/dashboard/Sidebar';
import PrivateRoute from '@/app/services/PrivateRoute';
import React from 'react';

const page = () => {
    return (
        <PrivateRoute>
            <div className='bg-slate-950 text-gray-400'>
                <Sidebar></Sidebar>
                <div className='pl-[270px] py-10'>
                    <AllUsers></AllUsers>
                </div>
            </div>
        </PrivateRoute>
    );
};

export default page;