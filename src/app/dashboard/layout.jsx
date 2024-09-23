"use client";
// import { FaUserCircle } from "react-icons/fa";
import Sidebar from "../components/dashboard/Sidebar";

const layout = ({ children }) => {
    return (
        <div className="relative min-h-screen md:flex">
            <Sidebar />
            <div className="flex-1 md:ml-64">
                <div className="p-5">
                    <div className="flex justify-end">
                        {/* <FaUserCircle /> */}
                    </div>

                    {children}

                </div>
            </div>
        </div>
    );
};

export default layout;