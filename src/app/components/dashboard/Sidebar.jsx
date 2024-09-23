"use client";
import { GrLogout } from 'react-icons/gr'
import { CiClock2 } from "react-icons/ci";
import { BsHandbag } from "react-icons/bs";
import { BsFillBagCheckFill } from "react-icons/bs";
import { FcSettings } from "react-icons/fc"
import { ImProfile } from "react-icons/im";

import { AiOutlineBars } from 'react-icons/ai'
import Link from "next/link";
import NavigationDash from "./NavigationDash";
import { useState } from 'react';

const Sidebar = () => {
    const [isActive, setActive] = useState(false);

    const handleToggle = () => {
        setActive(!isActive)
    }

    return (
        <>
            {/* Small Screen Navbar */}
            <div className='bg-[#D6B0EC] text-gray-800 flex justify-between md:hidden'>
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
                    <AiOutlineBars className='h-5 w-5' />
                </button>
            </div>

            {/* Sidebar */}
            <div
                className={`z-10 md:fixed flex flex-col justify-between overflow-x-hidden bg-[#D6B0EC] w-64 space-y-6 px-2 py-4 absolute inset-y-0 left-0 transform ${isActive && '-translate-x-full'
                    }  md:translate-x-0  transition duration-200 ease-in-out`}
            >
                <div>
                    <div>
                        <div className='w-full text-white hidden md:flex px-4 py-2 shadow-lg rounded-lg justify-center items-center bg-[#34D399] mx-auto'>
                            <Link href='/'>
                                Meetwise

                            </Link>
                        </div>
                    </div>

                    {/* Nav Items */}


                </div>

                <div>
                    <NavigationDash
                        label='Meeting Type'
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
                        label='Settings'
                        address='/dashboard/settings'
                        icon={FcSettings}
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
                        className='flex w-full items-center px-4 py-2 mt-5 text-gray-600 hover:bg-[#7B61FF] hover:text-gray-700 transition-colors duration-300 transform'
                    >
                        <GrLogout className='w-5 h-5' />

                        <span className='mx-4 font-medium'>Logout</span>
                    </button>
                </div>
            </div>
        </>
    )
}

export default Sidebar;