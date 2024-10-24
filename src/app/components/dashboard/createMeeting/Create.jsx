/* eslint-disable react/no-unescaped-entities */
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
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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
  
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    arrow:true,
   
    swipe: false,
   
      // No extra padding on the sides
  };
  // Time availability state

  // Time zone setting
  const eventTime = new Date(); // Example event time in "Asia/Dhaka" time zone


  // Function to generate date range between start and end date
  const generateDateRange = (startDate, endDate) => {
    let dates = [];
    let currentDate = new Date(startDate);
  
    while (currentDate <= endDate) {
      let dayName = currentDate.toLocaleDateString("en-US", { weekday: 'long' }); // Day name like Monday, Tuesday
      dates.push({ date: currentDate.toISOString().split('T')[0], day: dayName });
      currentDate.setDate(currentDate.getDate() + 1);
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
    <div className="container mx-auto">
       <div className="text-left ">
      <Link className="flex items-center space-x-1 text-base" href="/dashboard">
            <IoIosArrowBack  className="text-white "/><h4 className="text-white">Cancel</h4>
          </Link>
      </div>
    
    <form onSubmit={handleSubmit} className="text-white font-raleway">
     
    <div className=" w-full relative p-5 min-h-screen  flex justify-center bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/banner/banner6.jpg')"}}>
    <div className="absolute inset-0 bg-black opacity-50 h-full w-full"></div>
   
  {/* Cards or other content */}
  <div className="relative w-full  min-h-screen flex justify-center">
 
      <div className="lg:w-2/3 md:w-3/4 sm:w-full items-center"> 
      {/* Set width for slider container */}
      <div className="container mx-auto md:w-2/3  mb-5">
     
    <h2 className="font-semibold text-4xl text-center"> Simply Schedule Your Meeting</h2>
    
  
    <div className="border-b-2  border-green-500 w-1/3 mx-auto mb-2"></div>
    
    <p className="text-center text-gray-100 mt-2 ">Fill out the fields, pick your platform, and you're all set!</p>

  </div>
        <Slider {...settings}>
   
       
       {/* 1st */}
       <div className="pt-5 container mx-auto p-4 card glass bg-black opacity-95  min-h-[500px] border border-orange-600">
        
         <div className="container mx-auto md:w-2/3  space-y-3 ">
         <h4 className="font-bold text-2xl text-center text-green-500"><span className="text-white">Step 1:</span> Event Details</h4>
         <div className="flex justify-center mb-5">
  <div className="border-b rounded-lg border-orange-500 w-1/3"></div> {/* Orange border */}
</div>
          <h4 className="font-semibold">Event Name *</h4>
          <input
            className="py-2 w-4/5 border-2 rounded-lg pl-5 text-black"
            type="text"
            placeholder="Name of your meeting event"
            value={eventName}
            onChange={(e) => setEventName(e.target.value)}
          />

          <h4 className="font-semibold">Short Description *</h4>
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
           className="py-2 w-4/5 border-2 rounded-lg pl-5 text-black"
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
              className="py-2 w-4/5 border-2 rounded-lg pl-5 text-black"
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
          </div>

     

       

           {/* anam added part */}
           {/* <div className="bg-orange-100 md:w-[300px] text-black">
            <TimeZoneSelector eventTime={eventTime}></TimeZoneSelector>
          </div> */}

         
         
        </div>

{/* 2nd */}
          <div className="w-full overflow-auto card glass bg-black opacity-95 min-h-[450px]">
            <div className="lg:flex-1 md:flex-1 p-4 rounded-lg  text-black  ">
            <h4 className="font-bold text-2xl text-center text-green-500"><span className="text-white">Step 2:</span> Set Date</h4>
         <div className="flex justify-center mb-5 mt-1">
  <div className="border-b rounded-lg border-orange-500 w-1/5"></div> {/* Orange border */}
</div>
              <div className="container mx-auto lg:w-2/3  space-y-3  border  border-gray-300 rounded-lg shadow-lg overflow-x-auto"> {/* Added border and shadow */}
                <div className="w-full custom-datepicker-container "> {/* Enable horizontal scrolling */}
                  <DateRange
                    editableDateInputs={true}
                    onChange={(item) => setState([item.selection])}
                    moveRangeOnFirstSelection={false}
                    ranges={state}
                    minDate={new Date()}
                    className="w-full justify-center"
                    rangeColors={["green"]}// Ensure it takes full width of the parent
                  />
                </div>
              </div>
            </div>
          </div>
{/* 3rd */}

<div className="w-full mx-auto p-4 card glass bg-black opacity-95 text-white rounded-lg shadow-lg h-[500px]">
  <h4 className="font-bold text-2xl text-center text-green-500">
    <span className="text-white">Step 3: </span>See Your Availability &Set Time
  </h4>
  <div className="flex justify-center mb-5 mt-1">
    <div className="border-b-2 rounded-lg border-orange-500 w-2/5"></div> {/* Orange border */}
  </div>
  <div className="mt-4 container mx-auto flex flex-row items-start gap-6">
    {/* Set Time Section */}
    <div className="flex-1">
      <h2 className="text-lg md:text-xl lg:text-xl font-semibold pl-4">Set Time</h2>
      <div className="flex justify-start  mt-1 pl-4">
    <div className="border-b rounded-lg border-green-600 w-1/5 "></div> {/* Orange border */}
  </div>
      <div className="">
        {state[0].endDate && (
          <div className="max-h-72 text-white z-20 font-raleway overflow-y-auto mt-2 pb-4">
           <ul className="list-disc ml-4">
  {generateDateRange(state[0].startDate, state[0].endDate).map((item, index) => (
    <li key={index} className="flex flex-col items-start mt-5">
      <div className="flex items-center">
        {/* Circle bullet point */}
        <div className="h-3 w-3 rounded-full bg-green-500 mr-2"></div>
        <span className="font-extrabold text-xl text-slate-50">{item.date} <span className="text-orange-500 font-bold">({item.day})</span></span> {/* Show date with day */}
      </div>
      <div className="flex flex-row items-center mt-2 mb-2 justify-around">
        <div className="ml-4 w-full">
          <label className="block text-sm font-medium text-white">Start Time:</label>
          <input
            type="time"
            className="mt-1 block text-black border w-full border-green-600 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-green-200"
            value={availability[item.date]?.startTime || ""}
            onChange={(e) => handleTimeChange(item.date, "startTime", e.target.value)}
            required
          />
        </div>
        <div className="ml-4">
          <label className="block text-sm font-medium text-white">End Time:</label>
          <input
            type="time"
            className="mt-1 block text-black border w-full border-green-600 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-green-200"
            value={availability[item.date]?.endTime || ""}
            onChange={(e) => handleTimeChange(item.date, "endTime", e.target.value)}
          />
        </div>
      </div>
    </li>
  ))}
</ul>

          </div>
        )}
      </div>
      <div className="text-left mt-6 pl-4">
        <button
          disabled={loading}
          className="py-2 w-3/5 text-lg font-raleway border-green-600 rounded-lg pl-5 btn bg-green-700 hover:bg-green-800 text-white"
        >
          {loading ? <FaFan className="animate-spin" /> : "Create"}
        </button>
      </div>
    </div>

    {/* Availability Section */}
    <div className="flex-1">
      <h2 className="text-lg md:text-xl lg:text-xl font-semibold">See Your Availability</h2>
      <div className="flex justify-start mb-5 mt-1">
    <div className="border-b rounded-lg border-green-500 w-1/5"></div> {/* Orange border */}
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
                <span className="font-bold">Available Time:</span> {availableTimes[day]?.startTime} - {availableTimes[day]?.endTime}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
</div>

          </Slider>
         
         
</div>
      </div>
      </div>

  {/* availability */}
  {/* <div className='bg-black text-white w-full p-6 pt-2'>
          <h1 className='text-3xl font-bold text-center mb-6'>See Your Available Times</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {availableDays.map(day => (
              <div
                className="bg-gray-800 p-4 rounded-lg shadow-md hover:bg-gray-700 transition duration-300 flex flex-col justify-center items-start gap-2"
                key={day}
              >
                <h2 className="text-lg md:text-xl lg:text-2xl font-semibold">{day}</h2>
                <p className="text-sm md:text-base">
                  <span className="font-bold">Start Time:</span> {availableTimes[day]?.startTime}
                </p>
                <p className="text-sm md:text-base">
                  <span className="font-bold">End Time:</span> {availableTimes[day]?.endTime}
                </p>
              </div>
            ))}
          </div>
        </div> */}
    </form>
    </div>
  );
};

export default Create;