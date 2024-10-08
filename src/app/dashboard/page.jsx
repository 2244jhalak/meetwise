"use client";

import Image from 'next/image';
import Sidebar from '../components/dashboard/Sidebar';
import { useSession } from 'next-auth/react';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Swal from 'sweetalert2';  

const DashboardPage = () => {
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
            <div className="bg-blue-100 min-h-screen flex">
                <Sidebar />
                <div className="flex-1 p-6">
                    <h2 className="text-center font-semibold text-3xl text-blue-600">
                        Welcome to Dashboard
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
                </div>
            </div>
        );
    }

    return null; 
};

export default DashboardPage;
