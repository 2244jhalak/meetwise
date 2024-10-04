"use client";
import Swal from 'sweetalert2'; 
import { useSession } from 'next-auth/react';
import React, { useEffect, useState } from 'react';

const AvailabilityForm = () => {
    const [selectedDays, setSelectedDays] = useState([]);
    const [timeData, setTimeData] = useState({});
    const session = useSession();
    const [availability, setAvailability] = useState(null); 

    // Fake Data
    const availabilityData = {
        daysOfWeek: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
    };

    const handleDayChange = (day) => {
        if (selectedDays.includes(day)) {
            setSelectedDays(selectedDays.filter((d) => d !== day));
            const updatedTimeData = { ...timeData };
            delete updatedTimeData[day];
            setTimeData(updatedTimeData);  // Remove time input for unselected day
        } else {
            setSelectedDays([...selectedDays, day]);
            setTimeData({ ...timeData, [day]: { startTime: '', endTime: '' } });  // Initialize time data for new day
        }
    };

    const handleTimeChange = (day, timeType, value) => {
        setTimeData({
            ...timeData,
            [day]: {
                ...timeData[day],
                [timeType]: value,
            }
        });
    };

    const handleSubmit = async (e) => {
      e.preventDefault();
  
      const availability = {
          name: session?.data?.user?.name,
          email: session?.data?.user?.email,
          times: timeData,  // Ensure timeData is populated
      };
  
      console.log('Submitted Availability:', availability); // Check if the object looks correct
  
      try {
          const response = await fetch("/dashboard/availability/available", {
              method: "PUT",
              headers: {
                  "Content-Type": "application/json",
              },
              body: JSON.stringify(availability),  // Check the request payload
          });
  
          const responseData = await response.json(); // Parse response data
          console.log('Server Response:', responseData);  // Check what the server returns
  
          if (response.ok) {
              Swal.fire({
                  title: 'Success!',
                  text: 'Availability successfully saved.',
                  icon: 'success',
                  confirmButtonText: 'OK',
              }).then(() => {
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
      } catch (error) {
          console.error('Error submitting availability:', error);
      }
  };

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
  
                  // Check if 'times' is defined in the result
                  if (result && result.times) {
                      setAvailability(result);
                      setTimeData(result.times || {});
                      setSelectedDays(Object.keys(result.times) || []);
                  } else {
                      setAvailability(null); // In case no availability is returned
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

    return (
        <div className="container mx-auto mt-10 p-6 bg-[#d0d8d9] shadow-lg rounded-md">
             {/* Display Saved Availability */}
             {/* {availability && (
                <div className="mt-6">
                    <h3 className="text-3xl font-bold font-raleway text-center text-green-800 mb-5 ">Your Saved Availability:</h3>
                    <ul className="list-disc pl-5 ">
                        {Object.keys(availability.times || {}).map((day) => (
                            <li className="text-xl font-raleway font-bold"key={day}>
                                {day}: Start Time - {availability.times[day].startTime}, End Time - {availability.times[day].endTime}
                            </li>
                        ))}
                    </ul>
                </div>
            )} */}
            <h1 className="text-2xl  font-semibold text-center text-gray-800">Save Your Availability</h1>
            <div className="border border-green-900 text-center mx-auto container w-[90px] mb-5"></div>
            <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* First Column: Days */}
                    <div className="bg-blue-50  border border-green-500 px-5 py-5 rounded-lg shadow-lg">
                        <label className="block text-gray-700 font-bold text-2xl font-raleway">Select Days</label>
                        <div className="border border-green-900 w-[60px] mb-5"></div>
                        <div className="flex flex-col items-start  space-y-2">
                            {availabilityData.daysOfWeek.map((day, index) => (
                                <div key={index} className="flex items-center gap-2 ">
                                    <input
                                        type="checkbox"
                                        id={day}
                                        name="days"
                                        value={day}
                                        className="h-4 w-4"
                                        checked={selectedDays.includes(day)}
                                        onChange={() => handleDayChange(day)}
                                    />
                                    <label htmlFor={day} className="text-gray-700 text-lg">{day}</label>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Second Column: Time Inputs */}
                    <div className="bg-blue-50 px-5 border border-green-500 py-5 rounded-lg shadow-lg">
                        <label className="block text-gray-700 font-bold text-2xl font-raleway">Set Time</label>
                        <div className="border border-green-900 w-[60px] mb-5"></div>
                        {selectedDays.map((day) => (
                            <div key={day} className="mb-4">
                                <h3 className="text-xl font-semibold mb-2">{day}</h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    {/* Start Time */}
                                    <div className="mb-4">
                                        <label className="block text-gray-700 pb-2 font-raleway">Start Time</label>
                                        <input
                                            type="time"
                                            value={timeData[day]?.startTime || ''}
                                            onChange={(e) => handleTimeChange(day, 'startTime', e.target.value)}
                                            className="border border-green-200 p-2 rounded-md w-full"
                                            required
                                        />
                                    </div>

                                    {/* End Time */}
                                    <div className="mb-4">
                                        <label className="block text-gray-700 pb-2 font-raleway">End Time</label>
                                        <input
                                            type="time"
                                            value={timeData[day]?.endTime || ''}
                                            onChange={(e) => handleTimeChange(day, 'endTime', e.target.value)}
                                            className="border border-green-200 p-2 rounded-md w-full"
                                            required
                                        />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Save Button */}
                <div className="text-center mt-7 py-5">
                    <button type="submit" className="px-6 py-2 bg-green-700 text-white rounded-md hover:bg-green-900">
                        Save Availability
                    </button>
                </div>
            </form>

         
        </div>
    );
};

export default AvailabilityForm;
