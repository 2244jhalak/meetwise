"use client";

import Image from 'next/image';
import Sidebar from '../components/dashboard/Sidebar';
import { useSession } from 'next-auth/react';

import Notification from '../components/Notification';
import PrivateRoute from '../services/PrivateRoute';

const DashboardPage = () => {
    const { data: session, status } = useSession();

        return (
           <PrivateRoute>
             <div className="bg-blue-100 min-h-screen flex">
                <Sidebar />
                <div className="flex-1 p-6">
                    <h2 className="text-center font-semibold text-3xl text-blue-600">
                        Welcome to {
                            session?.user?.role === "admin" ? "Admin's dashboard":`${session?.user?.name}'s dashboard`
                        }
                    </h2>
                    <div className="flex justify-center mt-4">
                        <Image
                            className="md:w-[1100px] md:h-[600px] rounded-lg"
                            src="https://www.projectmanager.com/wp-content/uploads/2023/10/Project-Dashboard-Template-Excel-image.png"
                            alt="Project Dashboard"
                            width={1100}
                            height={600}
                        />
                    </div>
                    <div className="container mx-auto">
                         <Notification></Notification>
                    </div>
                </div>
            </div>
           </PrivateRoute>
        );
    }


export default DashboardPage;
