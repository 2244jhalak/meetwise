import AllUsers from '@/app/components/dashboard/allUsers/AllUsers';
import Sidebar from '@/app/components/dashboard/Sidebar';
import React from 'react';

const page = () => {
    return (
        <div>
            <Sidebar></Sidebar>
            <div className='pl-[270px] mt-10'>
                <AllUsers></AllUsers>
            </div>
        </div>
    );
};

export default page;