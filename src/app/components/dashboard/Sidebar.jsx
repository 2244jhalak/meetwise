"use client";
import { GrLogout } from 'react-icons/gr'
import { CiClock2 } from "react-icons/ci";
import { BsHandbag, BsPlus } from "react-icons/bs";
import { BsFillBagCheckFill } from "react-icons/bs";
import { FcSettings } from "react-icons/fc"
import { ImProfile, ImUsers } from "react-icons/im";

import { AiOutlineBars } from 'react-icons/ai'
import Link from "next/link";
import NavigationDash from "./NavigationDash";
import { useState } from 'react';

import { usePathname } from 'next/navigation';
import { signOut, useSession } from 'next-auth/react';
import { IoMdAnalytics } from 'react-icons/io';


const Sidebar = () => {
    const [isActive, setActive] = useState(false);
    const pathname = usePathname();
    const session = useSession();
    console.log(pathname);
    const [admin,setAdmin] = useState(true);
    const [user,setUser] = useState(false);
    const handleAdmin = () =>{
        setAdmin(true);
        setUser(false);
    }
    const handleUser = () =>{
        setUser(true);
        setAdmin(false);
    }
    const handleToggle = () => {
        setActive(!isActive)
    }

    return (
        <>

            {/* Small screen Navbar */}
            <div className=' bg-black text-white flex justify-between md:hidden '>
                <div>
                    <div className='block cursor-pointer p-4 font-bold'>
                        <Link href='/'>
                            Meetwise
                            {/* <img
                                // className='hidden md:block'
                                src='https://i.ibb.co/4ZXzmq5/logo.png'
                                alt='logo'
                                width='100'
                                height='100'
                            /> */}
                        </Link>
                    </div>
                </div>

                <button onClick={handleToggle}>
                    <AiOutlineBars className='h-5 mr-3 w-5' />
                </button>
            </div>

            {/* Sidebar */}
            <div
                className={`z-30 lg:z-10 md:fixed flex flex-col justify-between overflow-x-hidden text-white bg-black w-64 space-y-6 px-2 py-4 absolute inset-y-0 left-0 transform ${isActive && '-translate-x-full'
                    }  md:translate-x-0  transition duration-200 ease-in-out`}
            >
                <div>
                    <div>
                        <div className='w-full text-2xl text-white hidden md:flex px-4 py-2 shadow-lg rounded-lg justify-center items-center card glass mx-auto'>
                            <Link href='/' >
                                <h1 className='text-white font-extrabold'>Meet<span className='text-green-600'>Wise</span></h1>
                            </Link>
                        </div>
                    </div>


                    {/* Nav Items */}
                </div>
                {
                    session?.data?.user?.role==="admin"?
                    
                        <div className='flex ps-14 pt-10 fixed '>
                     <div className="">
                        <button onClick={handleAdmin} className={`${admin?"text-white bg-green-600 rounded-l-3xl p-2":"disabled"}`}>Admin</button>
                        <button onClick={handleUser} className={`${user?"text-white bg-green-600 rounded-r-3xl p-2":"disabled"}`}>User</button>
                     </div>
                    
                    </div>
                    :
                    <>
                    <div className='container mx-auto text-white '>
                    <NavigationDash
                        label='Create Meeting'
                        address='/dashboard/createMeeting'
                        icon={BsPlus}
                    />

                    <NavigationDash
                        label='Meeting Library'
                        address='/dashboard/meetingType'
                        icon={BsHandbag}
                    />
                    <NavigationDash
                        label='Scheduled Meeting'
                        address='/dashboard/scheduledMeeting'
                        icon={BsFillBagCheckFill}
                    />
                    <NavigationDash
                        label='Availability'
                        address='/dashboard/availability'
                        icon={CiClock2}
                    />
                    <NavigationDash
                        label='Meeting Analytics'
                        address='/dashboard/meetingAnalytics'
                        icon={IoMdAnalytics}
                    />
                    

                </div>

                <div>
                    <hr />

                    {/* Admin's Power */}
                    {
                        session?.data?.user?.role === "admin" ?
                            <NavigationDash
                                label='All Users'
                                address='/dashboard/allUsers'
                                icon={ImUsers}
                            />
                            :
                            ""

                    }
                    {
                        session?.data?.user?.role === "admin" ?
                            <NavigationDash
                                label='All Meetings'
                                address='/dashboard/allMeetings'
                                icon={ImUsers}
                            />
                            :
                            ""

                    }

                    {/* Profile Menu */}
                    <NavigationDash
                        label='Profile'
                        address='/dashboard/profile'
                        icon={ImProfile}
                    />

                    <button
                        onClick={()=>signOut()}
                        className='flex w-full items-center px-4 py-2 mt-5 rounded-xl text-white hover:bg-green-700 hover:text-white transform transition-all duration-500 ease-in font-raleway'
                    >
                        <GrLogout className='w-5 h-5' />

                        <span className='mx-4 font-medium'>Logout</span>
                    </button>
                </div>
                </>

                }
                {
                    admin?
                    <>
                    

                    
                    {
                        session?.data?.user?.role === "admin" ?
                            <NavigationDash
                                label='All Users'
                                address='/dashboard/allUsers'
                                icon={ImUsers}
                            />
                            :
                            ""

                    }
                    {
                        session?.data?.user?.role === "admin" ?
                            <NavigationDash
                                label='All Meetings'
                                address='/dashboard/allMeetings'
                                icon={ImUsers}
                            />
                            :
                            ""

                    }
                    {
                        session?.data?.user?.role === "admin" ?
                        <NavigationDash
                        label='Profile'
                        address='/dashboard/profile'
                        icon={ImProfile}
                    />
                            :
                            ""

                    }
                    {
                        session?.data?.user?.role === "admin" ?
                        <button
                        onClick={()=>signOut()}
                        className='flex w-full items-center px-4 py-2 mt-5 rounded-xl text-white hover:bg-green-700 hover:text-white transform transition-all duration-500 ease-in font-raleway'
                    >
                        <GrLogout className='w-5 h-5' />

                        <span className='mx-4 font-medium'>Logout</span>
                    </button>
                            :
                            ""

                    }

                    {/* Profile Menu */}
                   
                
                
                    </>
                    :
                    <>
                    <div className='container mx-auto text-white '>
                    <NavigationDash
                        label='Create Meeting'
                        address='/dashboard/createMeeting'
                        icon={BsPlus}
                    />

                    <NavigationDash
                        label='Meeting Library'
                        address='/dashboard/meetingType'
                        icon={BsHandbag}
                    />
                    <NavigationDash
                        label='Scheduled Meeting'
                        address='/dashboard/scheduledMeeting'
                        icon={BsFillBagCheckFill}
                    />
                    <NavigationDash
                        label='Availability'
                        address='/dashboard/availability'
                        icon={CiClock2}
                    />
                    <NavigationDash
                        label='Meeting Analytics'
                        address='/dashboard/meetingAnalytics'
                        icon={IoMdAnalytics}
                    />
                    

                </div>

                <div>
                    <hr />

                    

                    {/* Profile Menu */}
                    <NavigationDash
                        label='Profile'
                        address='/dashboard/profile'
                        icon={ImProfile}
                    />

                    <button
                        onClick={()=>signOut()}
                        className='flex w-full items-center px-4 py-2 mt-5 rounded-xl text-white hover:bg-green-700 hover:text-white transform transition-all duration-500 ease-in font-raleway'
                    >
                        <GrLogout className='w-5 h-5' />

                        <span className='mx-4 font-medium'>Logout</span>
                    </button>
                </div>
                    </>
                }
                

                
            </div>

        </>

    )

}
export default Sidebar;