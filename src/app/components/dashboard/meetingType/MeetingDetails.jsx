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
       
      </div>
    );
  };

  const tileDisabled = ({ date }) => {
    return date < startDate || date > endDate; 
  };

  return (
    <div className="flex flex-col md:flex-row gap-8 items-center p-4">
      {/* First Card: Meeting Details */}
      <div className="bg-white shadow-md rounded-lg p-4 w-full md:w-1/3 mb-4 h-full">
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
      <div className="bg-white shadow-md rounded-lg p-4 w-full md:w-1/3 mb-4 h-full">
        <h2 className="text-lg font-bold mb-4">Meeting Calendar</h2>
        <Calendar
          tileContent={tileContent}
          tileDisabled={tileDisabled} 
          className="mt-2 bg-green-200"
        />
      </div>

      <div className="bg-white shadow-md rounded-lg p-4 w-full md:w-1/3 mb-4 h-full">
  <h3 className="text-lg font-bold mb-4">Selected Time:</h3>
  {selectedDay ? (
    <p>{`You have selected: ${selectedDay}`}</p>
  ) : (
    <p>No day selected.</p>
  )}
  <div className='max-h-40 overflow-y-auto mt-2'>
  {availableTimes ? (
    <ul className=''>
      {availableTimes.map((time, index) => {
        const startTime = time.startTime;
        const endTime = time.endTime;

        // Get duration from meetingDetails and convert it to minutes
        const durationInMinutes = parseInt(meetingDetails?.duration) || 30; // Default to 30 if not available

        const getTimeSlots = (start, end) => {
          let slots = [];
          let currentTime = start;

          // Function to add duration minutes to a time string
          const addMinutes = (timeStr, minutes) => {
            const [hour, minute] = timeStr.split(":").map(Number);
            const date = new Date(0, 0, 0, hour, minute);
            date.setMinutes(date.getMinutes() + minutes);
            return date.toTimeString().slice(0, 5); // HH:MM format
          };

          // Loop through and generate slots based on duration
          while (currentTime < end) {
            let nextTime = addMinutes(currentTime, durationInMinutes);
            if (nextTime <= end) {
              slots.push(`${currentTime} - ${nextTime}`);
            }
            currentTime = nextTime;
          }
          return slots;
        };

        const timeSlots = getTimeSlots(startTime, endTime);

        return (
          <li className='text-center mx-auto' key={index}>
            {timeSlots.length > 0 ? (
              <ul className='flex flex-col gap-2'>
                {timeSlots.map((slot, idx) => (
                  <li className=' border-2 px-2 py-2 hover:bg-green-500 cursor pointer font-raleway font-bold border-green-500 gap-5 rounded-2xl ' key={idx}>{slot}</li>
                ))}
              </ul>
            ) : (
              <p>No time slots available.</p>
            )}
          </li>
        );
      })}
    </ul>
  ) : (
    <p>No available times for this day.</p>
  )}</div>
  <div className='container mx-auto  mt-5 btn bg-green-700 text-white'><button>Booked</button></div>
</div>


    </div>
  );
};

export default MeetingDetails;
