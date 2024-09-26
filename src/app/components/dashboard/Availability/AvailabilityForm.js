"use client";
import Swal from 'sweetalert2'; 

import { useSession } from 'next-auth/react';
import React, { useEffect, useState } from 'react';
const AvailabilityForm = () => {
    const [startTime, setStartTime] = useState('');
    const [selectedDays, setSelectedDays] = useState([]);
    const [endTime, setEndTime] = useState('');
    const session = useSession();
    const [availability, setAvailability] = useState(null); 
      // Fake Data
  const availabilityData = {
   
   
    daysOfWeek: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const selectedDays = formData.getAll('days');
  
    const availability = {
         name: session?.data?.user?.name,
         email: session?.data?.user?.email,
         startTime: startTime,
         endTime: endTime,
         days: selectedDays,
    };

    console.log('Submitted Availability:', availability);

    // Use PUT instead of POST
    const response = await fetch("/dashboard/availability/available", {
      method: "PUT",  // Change to PUT
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(availability),
    });
    
    console.log(response);
    if (response.ok) {
      // Show success 
      Swal.fire({
        title: 'Success!',
        text: 'Availability successfully saved.',
        icon: 'success',
        confirmButtonText: 'OK',
      }).then(() => {
        // Reload  page 
        window.location.reload();
      });
    } else {
    
      Swal.fire({
        title: 'Error!',
        text: 'Failed to save availability.',
        icon: 'error',
        confirmButtonText: 'Try Again',
      });
    }
    
};
useEffect(() => {
  const fetchAvailability = async () => {
      const response = await fetch(`/dashboard/availability/available?email=${session?.data?.user?.email}`, {
          method: "GET",
          headers: {
              "Content-Type": "application/json",
          }
      });

      if (response.ok) {
        const result = await response.json();
        setAvailability(result);

        // Set default start and end times
        setStartTime(result?.startTime || '');
        setEndTime(result?.endTime || '');

        // Set default selected days
        setSelectedDays(result?.days || []);
      }  else {
          console.error('Error fetching availability');
      }
  };

  if (session?.data?.user?.email) {
      fetchAvailability();  // Fetch availability based on logged-in user’s email
  }
}, [session?.data?.user?.email]);

const handleDayChange = (day) => {
  if (selectedDays.includes(day)) {
    setSelectedDays(selectedDays.filter((d) => d !== day)); 
  } else {
    setSelectedDays([...selectedDays, day]); 
  }
};

    return (
        <div className=" mx-auto mt-10 p-6 bg-[#d0d8d9] shadow-lg rounded-md h-[700px]">
          
    <div className='relative font-raleway font-bold mx-auto text-5xl text-center'>
    <h1 className="text-2xl pb-3 font-semibold text-center mx-auto text-gray-800 lg:text-3xl dark:text-white">
   Save Your Availability
    </h1>
    <div className='absolute bottom-0 left-1/2 transform -translate-x-1/2 mx-auto border-b-2 border-green-700 w-[20%] hover:w-[50%] transition-all duration-300 ease-in-out p-4 cursor-pointer'></div>
  </div>
      <form onSubmit={handleSubmit}>
        {/* Set Time Section */}
        <div className="mb-4 bg-blue-50 px-5 py-5 rounded-lg shadow-lg mt-3">
          <label className="block text-gray-700  font-bold font-raleway text-2xl ">Set Time</label>
          <div className='border border-green-900 w-[60px] mb-2'></div>
          <div className="flex flex-col space-y-2">
               
                 <div className='grid grid-cols-1 md:grid-cols-2 gap-6 '>
                    {/* Start Time */}
        <div className="mb-4">
          <label className="block text-gray-700 pb-2 font-raleway font-medium">Set Start Time</label>
          <input
            type="time"
            value={startTime}
            onChange={(e) => setStartTime(e.target.value)}
            className="border border-green-200 p-2 rounded-md w-full font-raleway font-semibold text-base"
            required
          

          />
        </div>

        {/* End Time */}
        <div className="mb-4">
          <label className="block text-gray-700 pb-2 font-raleway font-medium">Set End Time</label>
          <input
            type="time"
            value={endTime}
            onChange={(e) => setEndTime(e.target.value)}
            className="border border-green-200 p-2 rounded-md w-full font-raleway font-semibold text-base"
            required
          />
        </div>
          </div>
        </div>
        </div>
        {/* Set Date Section */}
        <div className="mb-4 bg-blue-50 px-5 py-10 rounded-lg shadow-lg ">
        <label className="block text-gray-700  font-bold font-raleway text-2xl ">Set Date</label>
          <div className='border border-green-900 w-[60px] mb-2'></div>
          <div className="flex flex-wrap space-x-4 space-y-2">
            {availabilityData.daysOfWeek.map((day, index) => (
              <div key={index} className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  id={day}
                  name="days"
                  value={day}
                  className="h-4 w-4 bg-green-500 font-raleway "
                  checked={selectedDays.includes(day)}
                  onChange={() => handleDayChange(day)}
                  
                />
                <label htmlFor={day} className="text-gray-700 font-raleway text-lg">{day}</label>
              </div>
            ))}
          </div>
        </div>

        {/* Save Button */}
        <div className="text-center mt-7 py-5">
          <button
            type="submit"
            className="px-6 py-2 font-raleway font-bold bg-green-700 text-white rounded-md hover:bg-green-900"
          >
            Save Availability
          </button>
        </div>
      </form>
      {/* {availability && (
                <div>
                    <h3>Your Availability:</h3>
                    <p>Days: {availability.days.join(", ")}</p>
                    <p>Start Time: {availability.startTime}</p>
                    <p>End Time: {availability.endTime}</p>
                </div>
            )} */}
    </div>
    );
};

export default AvailabilityForm;