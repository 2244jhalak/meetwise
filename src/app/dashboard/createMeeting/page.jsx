"use client";

import Create from '@/app/components/dashboard/createMeeting/Create';
import PrivateRoute from '@/app/services/PrivateRoute';


const Page = () => {
    
        return (
           <PrivateRoute>
             <div className='bg-gray-200'>
                <Create />
            </div>
           </PrivateRoute>
        );
    }

    

export default Page;
