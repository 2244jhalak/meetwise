import AllUsers from '@/app/components/dashboard/allUsers/AllUsers';
import Sidebar from '@/app/components/dashboard/Sidebar';
import PrivateRoute from '@/app/services/PrivateRoute';
import React from 'react';

const page = () => {
    return (
        <PrivateRoute>
        <div className=' bg-slate-950 min-h-screen md:flex md:flex-row md:justify-between'>
       <div className='md:w-1/4'>
           <Sidebar />
       </div>
       <div className='container mx-auto md:w-4/4 p-2'>
      <AllUsers></AllUsers>
       </div>
   </div>
      </PrivateRoute>
    );
};

export default page;