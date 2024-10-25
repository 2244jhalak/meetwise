
import React, { Suspense } from 'react';
import SignIn from '../components/SignIn/SignIn';
import Notification from '../components/Notification';

const page = () => {
    return (
        <div className='bg-black min-h-screen'>
            <div className=" container mx-auto  min-h-screen">
            <Suspense>
            <SignIn></SignIn>
            </Suspense>
            
            <div className="container mx-auto">
                 <Notification></Notification>
            </div>
        </div>
        </div>
        
    );
};

export default page;