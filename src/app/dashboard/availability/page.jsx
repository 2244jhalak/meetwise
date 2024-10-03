import AvailabilityForm from '@/app/components/dashboard/Availability/AvailabilityForm';
import Sidebar from '@/app/components/dashboard/Sidebar';
import React from 'react';

const page = () => {
    return (
      <>
      <div className='md:flex md:flex-row md:justify-between'>
      <div className='md:w-1/4'><Sidebar></Sidebar></div>
      <div className='container mx-auto md:w-3/4 p-4 '>
          <AvailabilityForm></AvailabilityForm>
        </div>
        </div>
      </>
        
    );
};

export default page;