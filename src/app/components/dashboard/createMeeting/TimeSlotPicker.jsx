import React, { useState, useEffect } from 'react';

const TimeSlotPicker = ({ duration }) => {
  const [timeSlots, setTimeSlots] = useState([]);

  // Function to generate time slots
  const generateTimeSlots = (startHour, interval) => {
    const slots = [];
    const startTime = new Date();
    startTime.setHours(startHour, 0, 0); // Set starting time
    for (let i = 0; i < 24 * 60; i += interval) {
      const slotTime = new Date(startTime.getTime() + i * 60000); // In minutes
      slots.push(slotTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));
    }
    return slots;
  };

  // Update time slots using useEffect
  useEffect(() => {
    const interval = parseInt(duration.split(' ')[0]); // Get minutes from duration
    setTimeSlots(generateTimeSlots(8, interval)); // Start from 8:00 AM
  }, [duration]);

  return (
    <div className="p-4 border rounded-lg shadow-md mx-8 h-96 overflow-y-auto"> {/* Set height for vertical scrolling */}
      <div className="flex flex-col space-y-2 mt-2"> {/* Vertical layout */}
        {timeSlots.map((slot, index) => (
          <button
            key={index}
            className="bg-white border border-blue-500 text-blue-500 p-2 rounded hover:text-black transition duration-200"
            // onClick={() => alert(`Selected Time Slot: ${slot}`)} 
          >
            {slot}
          </button>
        ))}
      </div>
    </div>
  );
};

export default TimeSlotPicker;


