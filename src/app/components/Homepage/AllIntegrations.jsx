import Image from 'next/image';
import React from 'react';
import { FaVideo } from "react-icons/fa";

const AllIntegrations = () => {
    return (
        <div className='bg-fuchsia-50 md:py-16 md:px-28 p-5 text-center mx-auto'>
            <h3 className='text-4xl font-bold mb-10'>All Integrations</h3>
            <div className='md:flex justify-between gap-5 mx-auto'>
                <div className='bg-white p-7 rounded-2xl w-96 text-start mt-5'>
                    <div className='rounded-full p-4 w-14 bg-white shadow-2xl'>
                        <FaVideo className='text-green-500 text-2xl mb-2' />
                    </div>
                    <h3 className='text-xl my-2 font-bold'>Google Meet</h3>
                    <p>Effortesly integrate our AI-powered recording website with google meet for an enhanced meeting experience</p>
                </div>
                <div className='bg-white p-7 rounded-2xl w-96 text-start mt-5'>
                    <div className='rounded-full p-4 w-14 bg-white shadow-2xl'>
                        <FaVideo className='text-blue-500 text-2xl mb-2' />
                    </div>
                    <h3 className='text-xl my-2 font-bold'>Zoom</h3>
                    <p>Transform your Zoom meetings with the integration of our AI-powered recording website. By seamlessly connecting our platform...</p>
                </div>
                <div className='bg-white p-7 rounded-2xl w-96 text-start mt-5'>
                    <div className='rounded-full p-4 w-14 bg-white shadow-2xl'>
                        <FaVideo className='text-red-500 text-2xl mb-2' />
                    </div>
                    <h3 className='text-xl my-2 font-bold'>Microsoft Team</h3>
                    <p>Elevate your Microsoct Teams meetings with the integration of our AI-powered recording website. Connecting seamlessly with Microsoft Teams...</p>
                </div>
            </div>

        </div>
    );
};

export default AllIntegrations;