"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { IoIosArrowBack } from "react-icons/io";
import { FaClock, FaFan, FaLocationArrow } from "react-icons/fa";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Swal from "sweetalert2";

const Create = () => {
  const session = useSession();
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [eventName, setEventName] = useState("");
  const [description, setDescription] = useState("");
  const [duration, setDuration] = useState("15 min");
  const [selected, setSelected] = useState("");
  const [url, setUrl] = useState("");
  const [availability, setAvailability] = useState({});
  const [availableTimes, setAvailableTimes] = useState(null);

  const [state, setState] = useState([
    {
      startDate: new Date(),
      endDate: null,
      key: "selection",
    },
  ]);
  // Time availability state

  // Function to generate date range between start and end date
  const generateDateRange = (start, end) => {
    const dates = [];
    let currentDate = new Date(start);

    while (currentDate <= new Date(end)) {
      dates.push(new Date(currentDate).toLocaleDateString("en-GB"));
      currentDate.setDate(currentDate.getDate() + 1); // Go to next day
    }

    return dates;
  };

  useEffect(() => {
    const fetchAvailability = async () => {
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_CLIENT_URL}/dashboard/availability/available?email=${session?.data?.user?.email}`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          }
        });

        if (response.ok) {
          const result = await response.json();

          // Check if 'times' is defined in the result
          if (result && result.times) {
            setAvailableTimes(result?.times);
          } else {
            setAvailableTimes(null); // In case no availability is returned
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

  // Update start and end time in the availability object
  // const handleTimeChange = (date, type, value) => {
  //   setAvailability((prev) => ({
  //     ...prev,
  //     [date]: {
  //       ...prev[date],
  //       [type]: value,
  //     },
  //   }));
  // };

  const isFormComplete = () => {
    // Check if any of the required fields are missing or if availability is empty
    if (!eventName || !description || !selected || !url || !availability || Object.keys(availability).length === 0) {
      return false;
    }

    // Check if each date in availability has a valid startTime and endTime
    for (const date in availability) {
      const { startTime, endTime } = availability[date];

      // Check if startTime and endTime are defined and are valid
      if (!startTime || !endTime || !isValidTime(startTime) || !isValidTime(endTime)) {
        return false;
      }
    }

    return true;
  };

  // Helper function to validate time format (you can customize this based on your needs)
  const isValidTime = (time) => {
    // Example: Check if time is a valid string (you can modify this based on your time format)
    return typeof time === 'string' && time.trim() !== '';
  };

  const handleTimeChange = (date, timeType, value) => {
    setAvailability((prevAvailability) => ({
      ...prevAvailability,
      [date]: {
        ...prevAvailability[date],
        [timeType]: value,
        bookedTimes: prevAvailability[date]?.bookedTimes ?? [], // Ensure bookedTimes is null if not present
      },
    }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!isFormComplete()) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Please fill in all the required fields!",
      });
      return;
    }

    const startDateLocal = new Date(state[0].startDate).toLocaleDateString("en-GB");
    const endDateLocal = state[0].endDate
      ? new Date(state[0].endDate).toLocaleDateString("en-GB")
      : null;

    const create = {
      name: session?.data?.user?.name,
      email: session?.data?.user?.email,
      eventName: eventName,
      description: description,
      duration: duration,
      selected: selected,
      url: url,
      startDate: startDateLocal,
      endDate: endDateLocal,
      availability: availability, // Include availability object
    };
    setLoading(true);
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_CLIENT_URL}/dashboard/createMeeting/api`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(create),
      });

      const data = await response.json();
      if (response.status === 200) {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Your meeting has been created",
          showConfirmButton: false,
          timer: 1500,
        });
        router.push("/dashboard/meetingType");
      }

    } catch (error) {
      console.error("Error creating event:", error);
    } finally {
      setLoading(false);
    }
  };
  const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const availableDays = daysOfWeek.filter(day => availableTimes && availableTimes[day]);


  return (
    <form onSubmit={handleSubmit} className="text-white flex lg:flex-row md:flex-col flex-col">
      <div className="lg:border-e-2 md:border-e-2 lg:w-1/3 md:w-full w-full min-h-screen">
        <div className="pt-5 space-y-3 pl-5 bg-black min-h-screen">
          <Link className="flex items-center space-x-2 text-lg" href="/dashboard">
            <IoIosArrowBack /> <h4>Cancel</h4>
          </Link>
          <h2 className="font-semibold text-2xl">Create New Event</h2>

          <h4 className="font-semibold">Event Name *</h4>
          <input
            className="py-2 w-4/5 border-2 rounded-lg pl-5 text-black"
            type="text"
            placeholder="Name of your meeting event"
            value={eventName}
            onChange={(e) => setEventName(e.target.value)}
          />

          <h4 className="font-semibold">Short Description</h4>
          <input
            className="py-2 w-4/5 border-2 rounded-lg pl-5 text-black"
            type="text"
            placeholder="Short Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />

          <h4 className="font-semibold">Duration *</h4>
          <select
            value={duration}
            onChange={(e) => setDuration(e.target.value)}
            className="border rounded-md p-2 text-black"
          >
            <option value="15 min">15 min</option>
            <option value="30 min">30 min</option>
            <option value="45 min">45 min</option>
            <option value="60 min">60 min</option>
          </select>

          <div className="flex mb-4">
            <button type="button" onClick={() => setSelected("Zoom")}>
              <Image
                src="https://i.ibb.co/mHdB8Lw/Zoom-Logo-PNG-Images-removebg-preview-2.png"
                width={100}
                height={100}
                alt="Zoom"
              />
            </button>
            <button type="button" onClick={() => setSelected("Meet")}>
              <Image
                src="https://i.ibb.co/pKVJTTX/Google-Meet-Logo-wine-removebg-preview.png"
                alt="Meet"
                height={100}
                width={100}
              />
            </button>
          </div>

          {selected && <p className="text-lg">Selected: {selected}</p>}

          {selected && (
            <input
              type="text"
              placeholder="Add URL"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              className="py-2 w-4/5 border-2 rounded-lg pl-5 text-black"
            />
          )}

          <button
            disabled={loading}
            className="py-2 w-4/5 text-lg font-raleway border-orange-600 rounded-lg pl-5 btn bg-green-700 text-white"
          >
            {loading ? <FaFan className="animate-spin"></FaFan> : "Create"}
          </button>
        </div>
      </div>

      <div className="bg-black lg:w-full md:w-full w-full grid grid-cols-3  gap-5 lg:shadow-2xl md:shadow-2xl lg:m-5 p-5 lg:h-[500px] md:h-[500px] h-[500px] mt-7">
        <div className=" w-full space-y-5">
          <h3 className="text-3xl font-extrabold font-raleway">
            Meet<span className="text-green-600">Wise</span>
          </h3>

          <h2 className="text-2xl font-bold">
            Event Name: <span className="text-xl font-medium">{eventName}</span>
          </h2>
          <h2 className="text-xl font-bold">
            Description: <span className="text-base font-medium">{description}</span>
          </h2>
          <div className="flex items-center space-x-2">
            <FaClock />
            <h2 className="font-semibold">Meeting Duration: {duration}</h2>
          </div>
          <div className="flex items-center space-x-2">
            <FaLocationArrow />
            <p className="font-raleway font-bold text-xl">
              Type: <span className="font-medium text-base">{selected} Meeting</span>
            </p>
          </div>
          <p className="cursor-pointer text-xl text-white font-bold">
            Meeting Url: <span className="text-blue-500 font-medium text-base">{url}</span>
          </p>

          {/* available times are here  */}
          <div className='bg-white text-black w-full p-4 h-64 ml-3'>
            {availableDays.map(day => <div key={day}>
              <h2 className="text-lg md:text-xl lg:*:text-2xl">{day}</h2>
              <div className='flex justify-between gap-1'>
                <h3 className='border p-2'><span className='font-semibold'>Start Time</span>  {availableTimes[day]?.startTime} </h3>
                <h3 className='border p-2'><span className='font-semibold'>End Time:</span> {availableTimes[day]?.endTime}</h3>
              </div>
            </div>)}
          </div>

        </div>

        <div className="w-full overflow-auto">
          <div className="lg:flex-1 md:flex-1 p-4 rounded-lg bg-white text-black ">
            <h2 className="font-semibold text-xl mb-4">Select Date & Time</h2>

            <div className="w-full border border-gray-300 rounded-lg shadow-lg overflow-x-auto"> {/* Added border and shadow */}
              <div className="min-w-full "> {/* Enable horizontal scrolling */}
                <DateRange
                  editableDateInputs={true}
                  onChange={(item) => setState([item.selection])}
                  moveRangeOnFirstSelection={false}
                  ranges={state}
                  minDate={new Date()}
                  className="w-full"
                  rangeColors={["green"]}// Ensure it takes full width of the parent
                />
              </div>
            </div>
          </div>
        </div>


        <div className="max-w-72 mx-auto  p-4  bg-white text-black rounded-lg shadow-lg">
          <h3 className="mt-4 text-lg font-semibold">All Dates in Selected Range:</h3>
          <div className="mt-4">
            {/* <p className="text-lg">
      Start Date: {new Date(state[0].startDate).toLocaleDateString("en-GB")}
    </p>
    <p className="text-lg">
      End Date: {state[0].endDate ? new Date(state[0].endDate).toLocaleDateString("en-GB") : "N/A"}
    </p> */}
            {state[0].endDate && (
              <>
                <div className="max-h-72 border font-raleway border-green-700 overflow-y-auto mt-5 pb-4">
                  <ul className="list-disc ml-6 ">
                    {generateDateRange(state[0].startDate, state[0].endDate).map((date, index) => (
                      <li key={index} className="flex items-center justify-between mt-5 ">
                        <span className="font-extrabold"> Date:{date}</span>
                        <div className="ml-4">
                          <label className="block text-sm font-medium text-gray-700">Start Time:</label>
                          <input
                            type="time"
                            className="mt-1 block border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-200"
                            value={availability[date]?.startTime || ""}
                            onChange={(e) => handleTimeChange(date, "startTime", e.target.value)}
                            required
                          />
                        </div>
                        <div className="ml-4">
                          <label className="block text-sm font-medium text-gray-700">End Time:</label>
                          <input
                            type="time"
                            className="mt-1 block border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-200"
                            value={availability[date]?.endTime || ""}
                            onChange={(e) => handleTimeChange(date, "endTime", e.target.value)}
                          />
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </>
            )}

          </div>
        </div>
      </div>
    </form>
  );
};

export default Create;