"use client";

import React, { useEffect, useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css'; // Import calendar styles
import dayjs from 'dayjs'; // For easier date manipulation

const MeetingDetails = ({ meetingDetails }) => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [selectedDate, setSelectedDate] = useState(new Date());

    useEffect(() => {
        if (!meetingDetails) {
            setError('No meeting details found.');
        }
    }, [meetingDetails]);

    const isSameDay = (date1, date2) => dayjs(date1).isSame(date2, 'day');

    const highlightDates = ({ date, view }) => {
        if (view === 'month') { // Only highlight days in the month view
            const { startDate, endDate } = meetingDetails || {};
            if (isSameDay(date, new Date(startDate)) || isSameDay(date, new Date(endDate))) {
                return 'bg-green-300 text-white'; // Highlighted with green background
            }
        }
        return '';
    };

    if (loading) return <div>Loading...</div>;
    if (error) return <div className="text-red-500">Error: {error}</div>;

    return (
        <div className="p-6 border rounded-lg shadow-md bg-white">
            <h2 className="text-2xl font-semibold mb-4">Meeting Details</h2>
            {meetingDetails ? (
                <div className="space-y-2">
                    <p><strong>Name:</strong> {meetingDetails.name}</p>
                    <p><strong>Email:</strong> {meetingDetails.email}</p>
                    <p><strong>Event Name:</strong> {meetingDetails.eventName}</p>
                    <p><strong>Duration:</strong> {meetingDetails.duration}</p>
                    <p><strong>Type:</strong> {meetingDetails.selected}</p>
                    <p><strong>URL:</strong> <a href={meetingDetails.url} className="text-blue-500 underline">{meetingDetails.url}</a></p>
                    <p><strong>Start Date:</strong> {meetingDetails.startDate}</p>
                    <p><strong>End Date:</strong> {meetingDetails.endDate}</p>
                    
                    {/* Calendar for displaying highlighted start and end dates */}
                    <div className="mt-4">
                        <Calendar
                            onChange={setSelectedDate}
                            value={selectedDate}
                            tileClassName={highlightDates} // Highlight specific dates
                        />
                        <p className="mt-2 text-gray-700">Selected Date: {selectedDate.toDateString()}</p>
                    </div>
                </div>
            ) : (
                <p>No meeting details found.</p>
            )}
        </div>
    );
};

export default MeetingDetails;