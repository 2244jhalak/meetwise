/* eslint-disable react-hooks/exhaustive-deps */
'use client'

import { useEffect, useState } from "react";
import BookingTableRow from "./BookingTableRow";
import { useSession } from "next-auth/react";

const ExpireTab = () => {
    const sortingType = '-1';
    const [meetings, setMeetings] = useState([]);
    const session = useSession();
    const mail = session?.data?.user?.email;
    const today = new Date();
    const formattedDate = `${today.getDate().toString().padStart(2, '0')}/${(today.getMonth() + 1).toString().padStart(2, '0')}/${today.getFullYear()}`;
    const formattedTime = `${today.getHours().toString().padStart(2, '0')}:${today.getMinutes().toString().padStart(2, '0')}`;

    const sortData = { mail, sortingType, formattedDate, formattedTime };

    useEffect(() => {
        const fetchBookingData = async () => {
            const queryParams = new URLSearchParams(sortData);
            try {
                const response = await fetch(`${process.env.NEXT_PUBLIC_CLIENT_URL}/dashboard/scheduledMeeting/api?${queryParams.toString()}`, {
                    method: 'GET',
                    headers: {
                        'Cache-Control': 'no-cache',
                    },
                });

                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }

                const data = await response.json();
                setMeetings(data);
            } catch (error) {
                console.error('Fetch error:', error);
            }
        };
        fetchBookingData();
    }, [formattedDate, formattedTime, sortingType, mail]);

    return (


        <div class="overflow-x-auto">
        <table class="min-w-full divide-y rounded-xl divide-gray-200 dark:divide-gray-700">
            <thead class="bg-gray-500 dark:bg-gray-800 font-raleway ">
                <tr>
                    <th scope="col" class="py-3.5 px-4 font-semibold text-xs text-left rtl:text-right text-slate-50 dark:text-gray-400">
                        Meeting Name
                    </th>
                    <th scope="col" class="px-12 py-3.5 font-semibold text-xs  text-left rtl:text-right text-slate-50 dark:text-gray-400">
                        User Name
                    </th>
                    <th scope="col" class="px-12 py-3.5 font-semibold text-xs  text-left rtl:text-right text-slate-50 dark:text-gray-400">
                        User Email
                    </th>
                    <th scope="col" class="px-4 py-3.5 font-semibold text-xs  text-left rtl:text-right text-slate-50 dark:text-gray-400">
                        Location
                    </th>
                    <th scope="col" class="px-4 py-3.5 font-semibold text-xs  text-left rtl:text-right text-slate-50 dark:text-gray-400">
                        Link
                    </th>
                    <th scope="col" class="px-4 py-3.5 font-semibold text-xs  text-left rtl:text-right text-slate-50 dark:text-gray-400">
                        Date
                    </th>
                    <th scope="col" class="px-4 py-3.5 font-semibold text-xs  text-left rtl:text-right text-slate-50 dark:text-gray-400">
                        Time
                    </th>
                </tr>
            </thead>
            <tbody class=" bg-gray-400  font-bold divide-y text-slate-950 divide-gray-500 dark:divide-gray-700 dark:bg-gray-900">
                {
                    meetings.map(meeting => <BookingTableRow key={meeting._id} meeting={meeting} />)
                }
            </tbody>
        </table>
    </div>
    

    );
};

export default ExpireTab;
