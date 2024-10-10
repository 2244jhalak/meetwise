"use client";

import Sidebar from "@/app/components/dashboard/Sidebar";
import UserInfo from "@/app/components/dashboard/UserInfo";
import { useSession } from "next-auth/react";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Swal from "sweetalert2"; 

const Page = () => {
    const { data: session, status } = useSession();
    const router = useRouter();

    useEffect(() => {
        if (status === "unauthenticated") {
            
            Swal.fire({
                title: 'Unauthorized Access',
                text: 'Please log in first to view this page.',
                icon: 'warning',
                confirmButtonText: 'Go to Login',
            }).then(() => {
                
                router.push('/login');
            });
        }
    }, [status, router]);

    if (status === "authenticated") {
        return (
            <div className="flex">
                <Sidebar />
                <div className="pl-[350px] mt-10">
                    <UserInfo></UserInfo>
                </div>
            </div>
        );
    }

    
    return null;
};

export default Page;
