'use client';
import React, { useState } from 'react';
import Calendar from 'react-calendar'; 
import 'react-calendar/dist/Calendar.css';

const parseDate = (dateString) => {
  const [day, month, year] = dateString.split('/');
  return new Date(year, month - 1, day); 
};

const MeetingDetails = ({ meetingDetails }) => {
  
  const startDate = parseDate(meetingDetails?.startDate);
  const endDate = parseDate(meetingDetails?.endDate);
  
  // State to keep track of the selected date
  const [selectedDate, setSelectedDate] = useState(null);

  // Function to determine if a date tile should be highlighted
  const tileContent = ({ date }) => {
    const isInRange = date >= startDate && date <= endDate;
    const isSelected = selectedDate && date.toDateString() === selectedDate.toDateString();
    
    return (
      <div
        className={`w-full h-full flex items-center justify-center ${
          isSelected ? 'bg-red-500' : isInRange ? 'bg-green-500' : ''
        }`}
        onClick={() => setSelectedDate(date)} // Set the selected date on click
      >
       {/* Display the date */}   </div>
    );
  };

  // Function to disable dates outside the start-end range
  const tileDisabled = ({ date }) => {
    return date < startDate || date > endDate; 
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-full p-4">
        <h2 className="text-lg font-bold mb-4">Meeting Calendar</h2>
        <Calendar
          tileContent={tileContent}
          tileDisabled={tileDisabled} 
          className="mt-2  bg-green-200"
        />
      </div>
    </div>
  );
};

export default MeetingDetails;
