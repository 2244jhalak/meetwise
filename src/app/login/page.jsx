import React from 'react';
import SignIn from '../components/SignIn/SignIn';
import Notification from '../components/Notification';

const page = () => {
    return (
        <div className=" container mx-auto bg-[url('/banner/dr3.jpg')] bg-center min-h-screen">
            <SignIn></SignIn>
            <div className="container mx-auto">
                 <Notification></Notification>
            </div>
        </div>
    );
};

export default page;