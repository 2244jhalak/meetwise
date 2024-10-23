"use client";

import { useSession } from 'next-auth/react';
import React, { useEffect, useState } from 'react';
import { Bar, Pie } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement } from 'chart.js';

// Register necessary components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement);

const MeetingAnalytics = () => {
    const [meeting, setMeeting] = useState([]);
    const [filteredMeetings, setFilteredMeetings] = useState([]);
    const [error, setError] = useState(null);
    const session = useSession();

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const response = await fetch(`${process.env.NEXT_PUBLIC_CLIENT_URL}/dashboard/meetingAnalytics/api/${session?.data?.user?.email}`);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const userData = await response.json();
                setMeeting(userData);
                setFilteredMeetings(userData);
            } catch (err) {
                setError(err.message);
            }
        };

        fetchUser();
    }, [session?.data?.user?.email]);

    const getMeetingsOverTimeData = () => {
        const meetingCounts = {};
        filteredMeetings.forEach(meet => {
            const date = new Date(meet.date).toLocaleDateString();
            meetingCounts[date] = (meetingCounts[date] || 0) + 1;
        });

        return {
            labels: Object.keys(meetingCounts),
            datasets: [{
                label: 'Meetings Over Time',
                data: Object.values(meetingCounts),
                backgroundColor: 'rgba(75, 192, 192, 0.6)',
            }]
        };
    };

    const getMeetingTypeDistributionData = () => {
        const typeCounts = {};
        filteredMeetings.forEach(meet => {
            const type = meet.selected;
            typeCounts[type] = (typeCounts[type] || 0) + 1;
        });

        return {
            labels: Object.keys(typeCounts),
            datasets: [{
                label: 'Meeting Type Distribution',
                data: Object.values(typeCounts),
                backgroundColor: [
                    'rgba(255, 99, 132, 0.6)',
                    'rgba(54, 162, 235, 0.6)',
                    'rgba(255, 206, 86, 0.6)',
                    'rgba(75, 192, 192, 0.6)',
                ],
            }]
        };
    };

    return (
        <div className='container font-raleway mx-auto mt-6 p-4 text-white shadow-lg rounded-md'>
            <h2 className='text-3xl font-bold text-center'>Your Meeting Analytics</h2>
            <div className="border border-orange-600 rounded-xl text-center mx-auto mb-2 mt-2 w-24"></div>

            {/* Chart Section */}
            <div className="flex flex-col sm:flex-row justify-center gap-4 mt-4">
                <div className="bg-slate-800 p-4 rounded-lg shadow-md flex-1 min-w-[300px]" style={{ height: '500px' }}>
                    <h3 className="text-xl font-bold text-center">Meetings Over Time</h3>
                    <Bar 
                        data={getMeetingsOverTimeData()} 
                        options={{
                            responsive: true,
                            maintainAspectRatio: true, // Maintain the aspect ratio so height doesn't increase
                            plugins: {
                                legend: {
                                    display: true,
                                    position: 'top',
                                },
                            },
                            scales: {
                                x: {
                                    ticks: {
                                        autoSkip: true,
                                        maxTicksLimit: 5,
                                    },
                                },
                                y: {
                                    beginAtZero: true,
                                    max: Math.max(...Object.values(getMeetingsOverTimeData().datasets[0].data)) + 1,
                                },
                            },
                        }} 
                    />
                </div>

                <div className="bg-slate-800 p-4 rounded-lg shadow-md flex-1 min-w-[300px]" style={{ height: '500px' }}>
                    <h3 className="text-xl font-bold text-center">Meeting Type Distribution</h3>
                    <Pie 
                        data={getMeetingTypeDistributionData()} 
                        options={{
                            responsive: true,
                            maintainAspectRatio: true, // Maintain the aspect ratio so height doesn't increase
                            plugins: {
                                legend: {
                                    display: true,
                                    position: 'top',
                                },
                            },
                        }} 
                    />
                </div>
            </div>
        </div>
    );
};

export default MeetingAnalytics;
