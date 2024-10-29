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
import TimeZoneSelector from "../../Homepage/Timezone";
import 'animate.css';

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
      endDate: new Date(),
      key: "selection",
    },
  ]);
  // meeting creator,s timezone
  const userTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  // console.log(userTimeZone); // e.g., "America/New_York"

  // Time availability state

  // Time zone setting
  const eventTime = new Date(); // Example event time in "Asia/Dhaka" time zone



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

  const addMinutesToTime = (time, minutes) => {
    const [hours, minutesPart] = time.split(':');
    const date = new Date(0, 0, 0, hours, minutesPart);
    date.setMinutes(date.getMinutes() + minutes);
    const newHours = String(date.getHours()).padStart(2, '0');
    const newMinutes = String(date.getMinutes()).padStart(2, '0');
    return `${newHours}:${newMinutes}`;
  };

  const handleTimeChange = (date, timeType, value) => {
    setAvailability((prevAvailability) => {
      const updatedAvailability = {
        ...prevAvailability,
        [date]: {
          ...prevAvailability[date],
          [timeType]: value,
          bookedTimes: prevAvailability[date]?.bookedTimes,
        },
      };

      // If startTime is changed, update endTime based on default duration
      if (timeType === 'startTime') {
        const defaultDuration = parseInt(duration, 10); // Assuming duration is in minutes
        if (!isNaN(defaultDuration)) {
          const minEndTime = addMinutesToTime(value, defaultDuration);
          updatedAvailability[date].endTime = minEndTime; // Set endTime based on duration
        }
      }

      // If endTime is changed, check if it meets the requirements
      if (timeType === 'endTime') {
        const startTime = updatedAvailability[date].startTime;

        const startDateTime = new Date(`1970-01-01T${startTime}:00`);
        const endDateTime = new Date(`1970-01-01T${value}:00`);

        // If endTime is before startTime
        if (endDateTime <= startDateTime) {
          Swal.fire({
            title: 'Invalid Time',
            text: 'End time cannot be before start time!',
            icon: 'error',
            confirmButtonText: 'OK',
            background: "#000000",  // Black background
            color: "#F8FAFC",
          });
          return prevAvailability; // Return previous state to prevent change
        }

        // Calculate expected end time based on default duration
        const defaultDuration = parseInt(duration, 10);
        const expectedEndTime = addMinutesToTime(startTime, defaultDuration);
        const expectedEndDateTime = new Date(`1970-01-01T${expectedEndTime}:00`);

        // Check if the endTime is less than the expected end time
        if (endDateTime < expectedEndDateTime) {
          Swal.fire({
            title: 'Duration Mismatch',
            text: 'End time must be at least the duration from the start time!',
            icon: 'warning',
            confirmButtonText: 'OK',
            background: "#000000",  // Black background
            color: "#F8FAFC",
          });
          return prevAvailability; // Return previous state to prevent change
        }
      }

      return updatedAvailability;
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!isFormComplete()) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Please fill in all the required fields!",
        background: "#000000",  // Black background
        color: "#F8FAFC"
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
      availability: availability,
      createDate: new Date(), // Include availability object
      userTimeZone: userTimeZone,

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
          background: "#000000",  // Black background
          color: "#F8FAFC"
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
    <div className="container mx-auto">
      <div className="text-left bg-gray-200 ">
        <Link className="flex items-center space-x-1 text-base" href="/dashboard">
          <IoIosArrowBack className="text-black " /><h4 className="text-black">Cancel</h4>
        </Link>
      </div>

      <form onSubmit={handleSubmit} className="text-white flex lg:flex-row md:flex-col-reverse flex-col-reverse gap-2">
        <div className=" lg:w-1/3 md:w-full w-full min-h-screen">
          <div className="pt-5 space-y-3 pl-5  rounded-r-xl text-black bg-blue-50 min-h-screen">

            <h2 className="font-semibold text-2xl">Create New Event</h2>

            <h4 className="font-semibold">Event Name *</h4>
            <input
              className="py-2 w-4/5 border-2 rounded-lg pl-5 text-black dark:text-white"
              type="text"
              placeholder="Name of your meeting event"
              value={eventName}
              onChange={(e) => setEventName(e.target.value)}
            />

            <h4 className="font-semibold">Short Description</h4>
            <input
              className="py-2 w-4/5 border-2 rounded-lg pl-5 text-black dark:text-white"
              type="text"
              placeholder="Short Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />

            <h4 className="font-semibold">Duration *</h4>
            <select
              value={duration}
              onChange={(e) => setDuration(e.target.value)}
              className="py-2 w-4/5 border-2 rounded-lg pl-5 text-black dark:text-white mb-2"
            >
              <option value="15 min">15 min</option>
              <option value="30 min">30 min</option>
              <option value="45 min">45 min</option>
              <option value="60 min">60 min</option>
            </select>

            <h4 className="font-semibold">Select Type Add Url*</h4>

            {selected && (
              <input
                type="text"
                placeholder={`Add ${selected} url `}
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                className="py-2 w-4/5 border-2 rounded-lg pl-5 text-black dark:text-white"
              />
            )}
            <div className="flex pb-4">
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





            {/* anam added part */}
            {/* <div className="bg-orange-100 md:w-[300px] text-black">
            <TimeZoneSelector eventTime={eventTime}></TimeZoneSelector>
          </div> */}

            <button
              disabled={loading}
              className="py-2 w-4/5 text-lg font-raleway border-blue-600 rounded-lg pl-5 btn bg-green-700 hover:bg-green-900 text-white"
            >
              {loading ? <FaFan className="animate-spin"></FaFan> : "Create"}
            </button>

          </div>
        </div>
        <div className="bg-gray-200 lg:w-full text-black md:w-full w-full  lg:shadow-2xl md:shadow-2xl  px-5  min-h-screen ">
          <div className="container mx-auto md:w-2/3  mb-5 animate__animated animate__zoomIn">

            <h2 className="font-semibold text-4xl text-center "> Simply Schedule Your Meeting</h2>


            <div className="border-b-2  border-green-500 w-1/3 mx-auto mb-2"></div>

            {/* <p className="text-center text-gray-100 mt-2 ">Fill out the fields, pick your platform, and you're all set!</p> */}

          </div>

          <div className="  pt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-5 ">
            <div>
              <div className="w-full mx-auto p-4 card glass  bg-gray-800 opacity-90 text-white rounded-lg shadow-lg h-[450px] animate__animated animate__flipInY">
                <h2 className="text-lg md:text-xl lg:text-xl font-semibold">See Your Availability 🔍</h2>
                <div className="flex justify-start mb-5 mt-1">
                  <div className="border-b-2 rounded-lg border-green-500 w-1/5"></div> {/* Orange border */}
                </div>
                <div className="overflow-y-auto h-72">
                  <div className="grid grid-cols-1  gap-4">
                    {availableDays.map(day => (
                      <div
                        className="bg-green-800 p-4 rounded-lg shadow-md hover:bg-gray-700 transition duration-300 flex flex-col justify-center items-start gap-2"
                        key={day}
                      >
                        <h2 className="text-lg md:text-xl lg:text-xl font-semibold">{day}</h2>
                        <p className="text-sm md:text-base">
                          <span className="font-bold">Available:</span> {availableTimes[day]?.startTime} - {availableTimes[day]?.endTime}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
                <div className=" mt-5">
                  <Link className=" font-raleway text-lg" href="/dashboard/availability">
                    <h1>Update Your <span className="text-green-500 font-extrabold"> Availability</span> with Ease ✨.</h1>
                  </Link>

                </div>
              </div>
            </div>
            <div className="w-full mx-auto animate__animated animate__flipInY p-4 border-l-0  card glass  bg-gray-800 opacity-90 text-white rounded-lg shadow-lg h-[450px]">
              <h2 className="text-lg md:text-xl lg:text-xl font-semibold">Set Schedule Date 📅 </h2>
              <div className="flex justify-start mb-5 mt-1">
                <div className="border-b-2 rounded-lg border-green-500 w-1/5"></div> {/* Orange border */}
              </div>
              <div className="w-full overflow-auto">



                <div className="w-full border bg-gray-800 text-slate-50 border-gray-300 rounded-lg shadow-lg overflow-x-auto"> {/* Added border and shadow */}
                  <div className="min-w-full  custom-datepicker-container "> {/* Enable horizontal scrolling */}
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



            <div className="w-full mx-auto animate__animated animate__flipInY p-4 border-l-0  card glass bg-gray-800 opacity-90 text-white rounded-lg shadow-lg h-[450px]">
              <h2 className="text-lg md:text-xl lg:text-xl font-semibold">Set Schedule Time ⏳</h2>
              <div className="flex justify-start mb-2 mt-1">
                <div className="border-b-2 rounded-lg border-green-500 w-1/5"></div> {/* Orange border */}
              </div>

              <div className=" container mx-auto flex flex-row items-start gap-6">
                {/* Set Time Section */}
                <div className="flex-1">

                  <div className="">
                    {state[0].endDate && (
                      <>
                        <div className="max-h-72  font-raleway overflow-y-auto mt-5 pb-4">
                          <ul className="list-disc ml-3 ">
                            {generateDateRange(state[0].startDate, state[0].endDate).map((date, index) => (
                              <li key={index} className="flex flex-col items-start mt-2">
                                <div className="flex items-center">
                                  {/* Circle bullet point */}
                                  <div className="h-3 w-3 rounded-full bg-green-500 mr-2"></div>
                                  <span className="font-extrabold text-xl text-slate-50">{date}</span> {/* Show date with day */}
                                </div>
                                <div className="flex flex-row items-center mt-2 mb-2 justify-start ml-3">
                                  <div className="">
                                    <label className="block text-sm font-medium text-white">Start Time:</label>
                                    <input
                                      type="time"
                                      className="mt-1 w-3/4 block border text-black dark:text-white  border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-200"
                                      value={availability[date]?.startTime || ""}
                                      onChange={(e) => handleTimeChange(date, "startTime", e.target.value)}
                                      required
                                    />
                                  </div>
                                  <div className=" ">
                                    <label className="block text-sm font-medium text-white dark:text-white">End Time:</label>
                                    <input
                                      type="time"
                                      className="mt-1 block border w-3/4 text-black dark:text-white border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-200"
                                      value={availability[date]?.endTime || ""}
                                      onChange={(e) => handleTimeChange(date, "endTime", e.target.value)}
                                    />
                                  </div>
                                </div>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </>
                    )}

                  </div>

                </div>

                {/* Availability Section */}

              </div>
            </div>

          </div>


        </div>

      </form>
    </div>
  );
};

export default Create;