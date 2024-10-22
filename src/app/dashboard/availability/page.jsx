"use client";

import AvailabilityForm from '@/app/components/dashboard/Availability/AvailabilityForm';
import Sidebar from '@/app/components/dashboard/Sidebar';
import PrivateRoute from '@/app/services/PrivateRoute';
  

const Page = () => {
    
        return (
<<<<<<< HEAD
            <div className=' bg-[#4A4947] min-h-screen md:flex md:flex-row md:justify-between'>
=======
            <PrivateRoute>
                <div className=' bg-[#4A4947] md:flex md:flex-row md:justify-between'>
>>>>>>> 961ba096884bf398fcfe6536680398407835414f
                <div className='md:w-1/4'>
                    <Sidebar />
                </div>
                <div className='container mx-auto md:w-3/4 p-4'>
                    <AvailabilityForm />
                </div>
            </div>
            </PrivateRoute>
        );
    }

    
  
export default Page;
