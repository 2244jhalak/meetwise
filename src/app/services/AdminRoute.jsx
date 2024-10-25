"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import Swal from "sweetalert2";

const AdminRoute = ({ children }) => {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (session?.user?.role === "user") {
      // Unauthorized access alert দেখান এবং কিছু সময় পর আগের পেজে পাঠান
      Swal.fire({
        title: 'Unauthorized Access',
        text: 'You are not an admin',
        icon: 'warning',
        confirmButtonText: 'OK',
        allowOutsideClick: false, // বাটন ক্লিক না করা পর্যন্ত বন্ধ হবে না
      }).then(() => {
        // 2 সেকেন্ড পর আগের পেজে ফেরত যান
        setTimeout(() => {
          router.back(); // আগের পেজে ফিরে যাওয়া
        }, 2000); // 2 সেকেন্ড দেরি
      });
    }
  }, [session?.user?.role, router, status]);

  if (status === "loading") {
    return (
      <div className="flex justify-center items-center mt-10">
        <div className="loading loading-ring loading-lg"></div>
      </div>
    ); // যখন সেশন লোড হচ্ছে তখন লোডিং দেখান
  }

  // যদি অ্যাডমিন লগইন করা থাকে তবে children রেন্ডার হবে
  return session?.user?.role === "admin" ? children : null;
};

export default AdminRoute;



