"use client";

import Sidebar from "@/app/components/dashboard/Sidebar";
import UserInfo from "@/app/components/dashboard/UserInfo";

import PrivateRoute from "@/app/services/PrivateRoute";

const Page = () => {
    
        return (
            <PrivateRoute>
                <div className="flex">
                <Sidebar />
                <div className="pl-[350px] mt-10">
                    <UserInfo></UserInfo>
                </div>
            </div>
            </PrivateRoute>
        );
    }

    


export default Page;
