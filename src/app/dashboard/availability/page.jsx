"use client";

import AvailabilityForm from '@/app/components/dashboard/Availability/AvailabilityForm';
import Sidebar from '@/app/components/dashboard/Sidebar';
import { useSession } from 'next-auth/react';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Swal from 'sweetalert2';

const Page = () => {
    const { data: session, status } = useSession();
    const router = useRouter();

    useEffect(() => {
        if (status === "unauthenticated") {
            const currentUrl = window.location.pathname; // Current page URL
            Swal.fire({
                title: 'Unauthorized Access',
                text: 'Please log in first to view this page.',
                icon: 'warning',
                confirmButtonText: 'Go to Login',
            }).then(() => {
                // Redirecting to login page with the current URL as a query parameter
                router.push(`/login?redirect=${encodeURIComponent(currentUrl)}`);
            });
        }
    }, [status, router]);

    if (status === "authenticated") {
        return (
            <div className='md:flex md:flex-row md:justify-between'>
                <div className='md:w-1/4'>
                    <Sidebar />
                </div>
                <div className='container mx-auto md:w-3/4 p-4'>
                    <AvailabilityForm />
                </div>
            </div>
        );
    }

    return null; 
};

export default Page;
