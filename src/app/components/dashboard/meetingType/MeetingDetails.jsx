'use client'; // Add this line at the very top

import { useSession } from 'next-auth/react';
import React, { useState, useEffect } from 'react';
import Calendar from 'react-calendar'; 
import 'react-calendar/dist/Calendar.css';

const parseDate = (dateString) => {
  const [day, month, year] = dateString.split('/');
  return new Date(year, month - 1, day); 
};

const MeetingDetails = ({ meetingDetails }) => {
  const startDate = parseDate(meetingDetails?.startDate);
  const endDate = parseDate(meetingDetails?.endDate);
  const session = useSession();
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedDay, setSelectedDay] = useState('');
  const [availability, setAvailability] = useState(null);
  const [availableTimes, setAvailableTimes] = useState([]); // State to hold available times for the selected day

  useEffect(() => {
    const fetchAvailability = async () => {
        try {
            const response = await fetch(`/dashboard/availability/available?email=${session?.data?.user?.email}`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                }
            });

            if (response.ok) {
                const result = await response.json();
                if (result && result.times) {
                    setAvailability(result);
                } else {
                    setAvailability(null);
                }
            } else {
                console.error('Error fetching availability');
            }
        } catch (error) {
            console.error('An error occurred while fetching availability:', error);
        }
    };

    if (session?.data?.user?.email) {
        fetchAvailability();
    }
  }, [session?.data?.user?.email]);

  const handleDateSelect = (date) => {
    const dayString = date.toLocaleString('en-US', { weekday: 'long' });
    setSelectedDate(date);
    setSelectedDay(dayString);

    // Filter available times for the selected day
    if (availability && availability.times) {
        const selectedDayAvailability = availability.times[dayString];

        // Check if the availability for the selected day is an object and not an array
        if (selectedDayAvailability && typeof selectedDayAvailability === 'object') {
            // Convert the object to an array with startTime and endTime
            const timesArray = [{
                startTime: selectedDayAvailability.startTime,
                endTime: selectedDayAvailability.endTime
            }];
            setAvailableTimes(timesArray); // Set available times as an array
        } else {
            setAvailableTimes(null); // No available times for this day
        }
    }
};
  console.log(availableTimes)

  const tileContent = ({ date }) => {
    const isInRange = date >= startDate && date <= endDate;
    const isSelected = selectedDate && date.toDateString() === selectedDate.toDateString();
    
    return (
      <div
        className={`w-full h-full flex items-center justify-center ${isSelected ? 'bg-red-500' : isInRange ? 'bg-green-500' : ''}`}
        onClick={() => handleDateSelect(date)} // Call handleDateSelect on date click
      >
        {/* Display the date */}
        <span className="text-white">{date.getDate()}</span>
      </div>
    );
  };

  const tileDisabled = ({ date }) => {
    return date < startDate || date > endDate; 
  };

  return (
    <div className="flex flex-col md:flex-row justify-around items-start p-4">
      {/* First Card: Meeting Details */}
      <div className="bg-white shadow-md rounded-lg p-4 w-full md:w-1/3 mb-4">
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
          </div>
        ) : (
          <p>No meeting details available.</p>
        )}
      </div>

      {/* Second Card: Calendar */}
      <div className="bg-white shadow-md rounded-lg p-4 w-full md:w-1/3 mb-4">
        <h2 className="text-lg font-bold mb-4">Meeting Calendar</h2>
        <Calendar
          tileContent={tileContent}
          tileDisabled={tileDisabled} 
          className="mt-2 bg-green-200"
        />
      </div>

      {/* Third Card: Selected Day */}
      <div className="bg-white shadow-md rounded-lg p-4 w-full md:w-1/3 mb-4">
        <h3 className="text-lg font-bold mb-4">Selected Day:</h3>
        {selectedDay ? (
          <p>{`You have selected: ${selectedDay}`}</p>
        ) : (
          <p>No day selected.</p>
        )}
        {availableTimes ? (
          <ul>
            {availableTimes.map((time, index) => (
              <li key={index}>
                {`Start Time: ${time.startTime}, End Time: ${time.endTime}`}
              </li>
            ))}
          </ul>
        ) : (
          <p>No available times for this day.</p>
        )}
      </div>
    </div>
  );
};

export default MeetingDetails;
