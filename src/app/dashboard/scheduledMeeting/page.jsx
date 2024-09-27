import Meeting_Tab from '@/app/components/dashboard/Scheduled_Meeting/Meeting_Tab';
import React from 'react';

const page = () => {
    return (
        <div>
            <h1 className='text-2xl my-6 font-semibold'>Scheduled Meeting</h1> 
            <hr/>
            <Meeting_Tab></Meeting_Tab>
        </div>
    );
};

export default page;