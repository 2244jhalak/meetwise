"use client";

import Sidebar from "@/app/components/dashboard/Sidebar";
import UserInfo from "@/app/components/dashboard/UserInfo";

import PrivateRoute from "@/app/services/PrivateRoute";

const Page = () => {

    return (
        <PrivateRoute>
            <div className=" bg-slate-950 bg-center min-h-screen md:flex md:flex-row md:justify-between ">
                <div className='md:w-1/4'>
                    <Sidebar />
                </div>
                <div className='container mx-auto md:w-4/4 p-2'>
                    <UserInfo />
                </div>
            </div>
        </PrivateRoute>
    );
}




export default Page;
