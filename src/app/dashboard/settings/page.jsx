"use client";

import Sidebar from "@/app/components/dashboard/Sidebar";
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
                <div className="p-4">
                    <h1 className="text-2xl font-bold">Settings Page</h1>
                    <p>I am settings</p>
                </div>
            </div>
        );
    }

    
    return null;
};

export default Page;
