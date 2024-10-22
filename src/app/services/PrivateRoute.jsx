"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import Swal from "sweetalert2";

const PrivateRoute = ({ children }) => {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "unauthenticated") {
        Swal.fire({
            title: 'Unauthorized Access',
            text: 'Please log in first to view this page.',
            icon: 'warning',
            
        })

      // আগের পেজে ফেরত যাওয়ার জন্য লগইন পেজে রিডাইরেক্ট করুন
      router.push(`/login?callbackUrl=${window.location.pathname}`);
      
    }
  }, [status, router]);

  if (status === "loading") {
    return <div className="flex justify-center items-center mt-10">
        <div className="loading loading-ring loading-lg"></div>
    </div>; // যখন সেশন লোড হচ্ছে তখন লোডিং দেখান
  }

  // যদি লগইন করা থাকে তবে children রেন্ডার হবে, নাহলে রিডাইরেক্ট হবে
  return session ? children : null;
};

export default PrivateRoute;