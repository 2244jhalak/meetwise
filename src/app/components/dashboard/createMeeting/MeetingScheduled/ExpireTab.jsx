/* eslint-disable react-hooks/exhaustive-deps */
'use client'

import { useEffect, useState } from "react";

const ExpireTab = () => {
    const sortingType = '-1';
    const [meeting, setMeeting] = useState([])
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
                setMeeting(data);
            } catch (error) {
                console.error('Fetch error:', error);
            }
        };
        fetchBookingData();
    }, [formattedDate, formattedTime, sortingType]);

    return (
        <div>
            Expire content here
        </div>
    );
};

export default ExpireTab;
