
import React, { Suspense } from 'react';
import SignIn from '../components/SignIn/SignIn';
import Notification from '../components/Notification';

const page = () => {
    return (
        <div className=" container mx-auto bg-[url('/banner/dr3.jpg')] bg-center min-h-screen">
            <Suspense>
            <SignIn></SignIn>
            </Suspense>
            
            <div className="container mx-auto">
                 <Notification></Notification>
            </div>
        </div>
    );
};

export default page;