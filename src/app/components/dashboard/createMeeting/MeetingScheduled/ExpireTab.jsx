/* eslint-disable react-hooks/exhaustive-deps */
'use client'

import { useEffect, useState } from "react";
import BookingTableRow from "./BookingTableRow";

const ExpireTab = () => {
    const sortingType = '-1';
    const [meetings, setMeetings] = useState([])
    const today = new Date();
    const formattedDate = `${today.getDate().toString().padStart(2, '0')}/${(today.getMonth() + 1).toString().padStart(2, '0')}/${today.getFullYear()}`;
    const formattedTime = `${today.getHours().toString().padStart(2, '0')}:${today.getMinutes().toString().padStart(2, '0')}`;

    const sortData = { sortingType, formattedDate, formattedTime };

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
    }, [formattedDate, formattedTime, sortingType]);

    return (


        <table class="w-full divide-y divide-gray-200 dark:divide-gray-700 overflow-x-auto">
            <thead class="bg-gray-50 dark:bg-gray-800">
                <tr>
                    <th scope="col" class="py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                        Meeting Name
                    </th>

                    <th scope="col" class="px-12 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                        User Name
                    </th>
                    <th scope="col" class="px-12 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                        User Email
                    </th>

                    <th scope="col" class="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                        Location
                    </th>

                    <th scope="col" class="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">Link</th>

                    <th scope="col" class="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">Date</th>

                    <th scope="col" class="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">Time</th>
                </tr>
            </thead>

            {/* table body here   */}
            <tbody class="bg-white divide-y divide-gray-200 dark:divide-gray-700 dark:bg-gray-900">
                {
                    meetings.map(meeting => <BookingTableRow key={meeting._id} meeting={meeting} />)
                }
            </tbody>

        </table>

    );
};

export default ExpireTab;
