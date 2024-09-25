"use client";
import React from 'react';
import { useState } from 'react';
import { useSession } from 'next-auth/react';
const AvailabilityForm = () => {
    const [startTime, setStartTime] = useState('');
    const [endTime, setEndTime] = useState('');
      // Fake Data
  const availabilityData = {
   
    daysOfWeek: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const selectedDays = formData.getAll('days');
  
    
    const availability =[ {
        startTime: startTime,
        EndTime: endTime,
      days:selectedDays,
    }];
    console.log('Submitted Availability:', availability);
    // You can make an API call to save the availability data here.
  };
    return (
        <div className=" mx-auto mt-10 p-6 bg-[#F8ECFF] shadow-lg rounded-md h-[500px]">
    <div className='relative font-raleway font-bold mx-auto text-5xl text-center'>
    <h1 className="text-2xl pb-3 font-semibold text-center mx-auto text-gray-800 lg:text-3xl dark:text-white">
   Set Your Availability
    </h1>
    <div className='absolute bottom-0 left-1/2 transform -translate-x-1/2 mx-auto border-b-2 border-violet-700 w-[20%] hover:w-[50%] transition-all duration-300 ease-in-out p-4 cursor-pointer'></div>
  </div>
      <form onSubmit={handleSubmit}>
        {/* Set Time Section */}
        <div className="mb-4">
          <label className="block text-gray-700 mb-2 font-bold font-raleway ">Set Time</label>
          <div className="flex flex-col space-y-2">
               
                 <div className='grid grid-cols-1 md:grid-cols-2 gap-6 '>
                    {/* Start Time */}
        <div className="mb-4">
          <label className="block text-gray-700 mb-2 font-raleway">Set Start Time</label>
          <input
            type="time"
            value={startTime}
            onChange={(e) => setStartTime(e.target.value)}
            className="border border-gray-300 p-2 rounded-md w-full"
            required
          />
        </div>

        {/* End Time */}
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Set End Time</label>
          <input
            type="time"
            value={endTime}
            onChange={(e) => setEndTime(e.target.value)}
            className="border border-gray-300 p-2 rounded-md w-full"
            required
          />
        </div>
          </div>
        </div>
        </div>
        {/* Set Date Section */}
        <div className="mb-4">
          <label className="block text-gray-700 mb-2 font-bold font-raleway">Set Date</label>
          <div className="flex flex-wrap space-x-4 space-y-2">
            {availabilityData.daysOfWeek.map((day, index) => (
              <div key={index} className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  id={day}
                  name="days"
                  value={day}
                  className="h-4 w-4"
                />
                <label htmlFor={day} className="text-gray-700 font-raleway">{day}</label>
              </div>
            ))}
          </div>
        </div>

        {/* Save Button */}
        <div className="text-center mt-7 py-5">
          <button
            type="submit"
            className="px-6 py-2 font-raleway font-bold bg-violet-700 text-white rounded-md hover:bg-violet-900"
          >
            Save Availability
          </button>
        </div>
      </form>
    </div>
    );
};

export default AvailabilityForm;