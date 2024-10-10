import React from 'react';
import Signup from '../components/SignUp/Signup';
import Notification from '../components/Notification';

const page = () => {
    return (
        <div className=" container mx-auto bg-[url('/banner/dr3.jpg')] bg-center min-h-screen">
           <Signup></Signup>
           <div className="container mx-auto">
                <Notification></Notification>
           </div>
        </div>
    );
};

export default page;