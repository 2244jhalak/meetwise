import AvailabilityForm from '@/app/components/dashboard/Availability/AvailabilityForm';
import Sidebar from '@/app/components/dashboard/Sidebar';
import React from 'react';

const page = () => {
    return (
      <>
      <Sidebar></Sidebar>
      <div className='container mx-auto '>
          <AvailabilityForm></AvailabilityForm>
        </div>
      </>
        
    );
};

export default page;