"use client";

import Sidebar from "@/app/components/dashboard/Sidebar";
import PrivateRoute from "@/app/services/PrivateRoute";


const Page = () => {

        return (
           <PrivateRoute>
             <div className="flex">
                <Sidebar />
                <div className="p-4">
                    <h1 className="text-2xl font-bold">Settings Page</h1>
                    <p>I am settings</p>
                </div>
            </div>
           </PrivateRoute>
        );
    }

    

export default Page;
