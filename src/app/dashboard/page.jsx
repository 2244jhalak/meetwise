"use client";
import Sidebar from '../components/dashboard/Sidebar';

import Notification from '../components/Notification';
import PrivateRoute from '../services/PrivateRoute';
import { useSession } from 'next-auth/react';
import Welcome from '../components/dashboard/welcomePannel/Welcome';

const DashboardPage = () => {
    const { data: session } = useSession();
        return (  <PrivateRoute>
            <div className=' bg-gray-300 min-h-screen md:flex md:flex-row md:justify-between'>
           <div className='md:w-1/4'>
               <Sidebar />
           </div>
           <div className='container mx-auto md:w-4/4 p-2'>
         <Welcome></Welcome>
         <div className="container mx-auto">
                         <Notification></Notification>
                    </div>
           </div>
       </div>
          </PrivateRoute>
           
        );
    }


export default DashboardPage;
