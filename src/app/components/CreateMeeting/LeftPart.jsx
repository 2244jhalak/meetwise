"use client"
import Link from "next/link";
import { MdKeyboardDoubleArrowLeft } from "react-icons/md";
import zoomImg from '../../../../public/createMeeting/zoom.png'
import meetImg from "../../../../public/createMeeting/google_meet.png"
import Image from "next/image";
import { useState } from "react";

const LeftPart = () => {

    const [meetLocation, setMeetLocation] = useState('');
    return (
        <div>
            {/* back to dashboard clicking cancel button */}
            <Link href={'/dashboard'} className="flex items-center gap-2 ml-0">
                <MdKeyboardDoubleArrowLeft />   cancel
            </Link>

            <h3 className="font-bold text-lg md:text-xl lg:text-3xl">Create New Event</h3>
            <hr />

            <form>
                {/* meeting name  */}
                <div className="flex flex-col gap-2 py-3">
                    <label className="block font-semibold text-sm">Meeting Name <span className="text-red-600 text-sm">*</span> </label
                    >
                    <div className="">
                        <input
                            type="text"
                            name="eventname"
                            placeholder="Enter Your event name"
                            className="block w-56 rounded-md py-1.5 px-2 ring-1 ring-inset ring-gray-400 focus:text-gray-800"
                        />
                    </div>
                </div>

                {/* meeting duration  */}
                <div className="flex flex-col gap-2 py-3">
                    <label className="block font-semibold text-sm">Duration <span className="text-red-600 text-sm">*</span> </label
                    >
                    <select className="py-3 border-gray-500 rounded-lg max-w-fit px-3">
                        <option value="">Select a meeting duration </option>
                        <option value="15">15 minute</option>
                        <option value="30">30 minute</option>
                        <option value="45">45 minute</option>
                        <option value="60">1 hour</option>
                    </select>
                </div>

                {/* meeting location  */}
                <label className="block font-semibold text-sm">Location <span className="text-red-600 text-sm">*</span> </label
                >

                <div className="grid grid-cols-4 gap-3 w-1/3 py-4">

                    <div className={`w-16 h-16 flex flex-col gap-2 ${meetLocation === 'zoom' ? 'text-blue-500 bg-blue-200 rounded-lg' : ''}`} onClick={() => setMeetLocation('zoom')}>
                        <Image src={zoomImg} alt="meeting location" width={70} height={70} />
                        <h2 className="text-center">Zoom</h2>
                    </div>
                    <div className={`w-16 h-16 flex flex-col gap-2 ${meetLocation === 'meet' ? 'text-blue-500 bg-blue-200 rounded-lg' : ''}`} onClick={() => setMeetLocation('meet')}>
                        <Image src={meetImg} alt="meeting location" width={70} height={70} />
                        <h2 className="text-center">Meet</h2>
                    </div>
                    <div className={`w-16 h-16 flex flex-col gap-2 ${meetLocation === 'phone' ? 'text-blue-500 bg-blue-200 rounded-lg' : ''}`} onClick={() => setMeetLocation('phone')}>
                        <Image src={zoomImg} alt="meeting location" width={70} height={70} />
                        <h2 className="text-center">Phone</h2>
                    </div>
                    <div className={`w-16 h-16 flex flex-col gap-2 ${meetLocation === 'map' ? 'text-blue-500 bg-blue-200 rounded-lg' : ''}`} onClick={() => setMeetLocation('map')}>
                        <Image src={meetImg} alt="meeting location" width={70} height={70} />
                        <h2 className="text-center">map</h2>
                    </div>

                </div>

                {/* meeting name  */}
                <div className="flex flex-col gap-2 py-6">
                    <label className="block font-semibold text-sm">Add Url <span className="text-red-600 text-sm">*</span> </label
                    >
                    <div className="">
                        <input
                            type="text"
                            name="Url"
                            placeholder="Enter Your event name"
                            className="block w-56 rounded-md py-1.5 px-2 ring-1 ring-inset ring-gray-400 focus:text-gray-800"
                        />
                    </div>
                </div>

                <input type="submit" value="Create" className="btn btn-outline btn-info w-full" />


            </form>

        </div>
    );
};

export default LeftPart;