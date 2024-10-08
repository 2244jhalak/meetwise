
import Scheduled from '@/app/components/dashboard/meetingType/Scheduled';
import Sidebar from '@/app/components/dashboard/Sidebar';
import React from 'react';

const page = () => {
    return (
        <div>
           <Sidebar></Sidebar>
           <div className='container mx-auto'>
            <Scheduled></Scheduled>
           </div>
            
        </div>
    );
};

export default page;