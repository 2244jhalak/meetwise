"use client";
import Swal from "sweetalert2";
import { useSession } from "next-auth/react";
import React, { useEffect, useState } from "react";
export const dynamic = "force-dynamic";
import "animate.css";
const AvailabilityForm = () => {
  const [selectedDays, setSelectedDays] = useState([]);
  const [timeData, setTimeData] = useState({});
  const session = useSession();
  const [availability, setAvailability] = useState(null);

  // Fake Data
  const availabilityData = {
    daysOfWeek: [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ],
  };

  const handleDayChange = (day) => {
    if (selectedDays.includes(day)) {
      setSelectedDays(selectedDays.filter((d) => d !== day));
      const updatedTimeData = { ...timeData };
      delete updatedTimeData[day];
      setTimeData(updatedTimeData); // Remove time input for unselected day
    } else {
      setSelectedDays([...selectedDays, day]);
      setTimeData({ ...timeData, [day]: { startTime: "", endTime: "" } }); // Initialize time data for new day
    }
  };

 
  const handleTimeChange = (day, timeType, value) => {
    // Get the current start time for the specific day
    const currentStartTime = timeData[day]?.startTime;
  
    // Update the time data
    const updatedTimeData = {
      ...timeData,
      [day]: {
        ...timeData[day],
        [timeType]: value,
      },
    };
  
    // If the time type is endTime, check the condition
    if (timeType === 'endTime') {
      const startDateTime = new Date(`1970-01-01T${currentStartTime}:00`);
      const endDateTime = new Date(`1970-01-01T${value}:00`);
  
      // If endTime is before startTime, show an error and reset endTime
      if (endDateTime <= startDateTime) {
        Swal.fire({
          title: 'Invalid Time',
          text: 'End time cannot be before start time!',
          icon: 'error',
          confirmButtonText: 'OK',
          background: "#000000",  // Black background
          color: "#F8FAFC",  
        });
        
        // Reset end time to start time
        updatedTimeData[day].endTime = currentStartTime; 
      }
    }
  
    // Update the state with the potentially modified time data
    setTimeData(updatedTimeData);
  };
  

  const handleSubmit = async (e) => {
    e.preventDefault();

    const availability = {
      name: session?.data?.user?.name,
      email: session?.data?.user?.email,
      times: timeData, // Ensure timeData is populated
    };

    console.log("Submitted Availability:", availability); // Check if the object looks correct

    try {
      const response = await fetch("/dashboard/availability/available", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(availability), // Check the request payload
      });

      const responseData = await response.json(); // Parse response data
      console.log("Server Response:", responseData); // Check what the server returns

      if (response.ok) {
        Swal.fire({
          title: "Success!",
          text: "Availability successfully saved.",
          icon: "success",
          confirmButtonText: "OK",
          background: "#000000",  // Black background
          color: "#F8FAFC", 
        }).then(() => {
          window.location.reload();
        });
      } else {
        Swal.fire({
          title: "Error!",
          text: "Failed to save availability.",
          icon: "error",
          confirmButtonText: "Try Again",
          background: "#000000",  // Black background
          color: "#F8FAFC", 
        });
      }
    } catch (error) {
      console.error("Error submitting availability:", error);
    }
  };

  useEffect(() => {
    const fetchAvailability = async () => {
      try {
        const response = await fetch(
          `/dashboard/availability/available?email=${session?.data?.user?.email}`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

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
          console.error("Error fetching availability");
        }
      } catch (error) {
        console.error("An error occurred while fetching availability:", error);
      }
    };

    if (session?.data?.user?.email) {
      fetchAvailability();
    }
  }, [session?.data?.user?.email]);

  return (
    <div className="container mx-auto  p-6 text-black bg-gray-300 shadow-lg rounded-md pl-6">
       <h1 className="text-2xl pb-3 font-semibold my-4 md:my-8 rounded-2xl  border-b-2 border-green-500 text-center mx-auto text-black lg:text-3xl md:w-1/4 dark:text-white"> Save Your Availability</h1>
     
      {/* <h1 className="text-2xl  font-semibold text-center ">Save Your Availability</h1>
            <div className="border border-green-600 text-center mx-auto container w-[90px] mb-5"></div> */}
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* First Column: Days */}
          <div className="bg-blue-100 border-2 border-dashed border-l-0 border-r-0  border-t-blue-500 px-5 py-5 rounded-lg shadow-lg animate__animated animate__flipInY">
            <label className="block text-green-600 font-bold text-2xl font-raleway">
              Select Days
            </label>
            <div className="border border-blue-600 w-[60px] mb-5"></div>
            <div className="flex flex-col items-start  space-y-2">
              {availabilityData.daysOfWeek.map((day, index) => (
                <div key={index} className="flex items-center gap-2 ">
                  <input
                    type="checkbox"
                    id={day}
                    name="days"
                    value={day}
                    className="h-4 w-4 rounded-xl focus:ring-green-500 checked:bg-green-500"
                    checked={selectedDays.includes(day)}
                    onChange={() => handleDayChange(day)}
                  />
                  <label htmlFor={day} className=" text-lg ">
                    {day}
                  </label>
                </div>
              ))}
            </div>
          </div>

          {/* Second Column: Time Inputs */}
          <div className=" px-5 bg-blue-100 border-2 border-dashed border-l-0 border-r-0  border-t-green-500 py-5 rounded-lg shadow-lg animate__animated animate__flipInY">
            <label className="block text-green-600 font-bold text-2xl font-raleway">
              Set Time
            </label>
            <div className="border border-blue-00 w-[60px] mb-5"></div>
            <div className="max-h-80 overflow-y-auto">
            {selectedDays.map((day) => (
  <div key={day} className="mb-4">
    <h3 className="text-xl font-semibold mb-2 text-blue-600">
      {day}
    </h3>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {/* Start Time */}
      <div className="mb-4">
        <label className="block pb-2 font-raleway">
          Start Time
        </label>
        <input
          type="time"
          value={timeData[day]?.startTime || ""}
          onChange={(e) =>
            handleTimeChange(day, "startTime", e.target.value)
          }
          className="border border-green-200 text-black dark:text-white p-2 rounded-md w-full"
          required
        />
      </div>

      {/* End Time */}
      <div className="mb-4">
        <label className="block pb-2 font-raleway">
          End Time
        </label>
        <input
          type="time"
          value={timeData[day]?.endTime || ""}
          onChange={(e) =>
            handleTimeChange(day, "endTime", e.target.value)
          }
          className="border border-green-200 text-black dark:text-white p-2 rounded-md w-full"
          required
        />
      </div>
    </div>
  </div>
))}

            </div>
          </div>
        </div>

        {/* Save Button */}
        <div className="text-center mt-7 py-5">
          <button
            type="submit"
            className="px-6 py-2 bg-green-700 text-white rounded-md hover:bg-green-900"
          >
            Save Availability
          </button>
        </div>
      </form>
    </div>
  );
};

export default AvailabilityForm;
