import React from 'react';
import SignIn from '../components/SignIn/SignIn';

const page = () => {
    return (
        <div className=" container mx-auto bg-[url('/banner/dr3.jpg')] bg-center min-h-screen">
            <SignIn></SignIn>
        </div>
    );
};

export default page;