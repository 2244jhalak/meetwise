'use client'; // Add this line at the very top

import { useSession } from 'next-auth/react';
import React, { useState, useEffect } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import Swal from 'sweetalert2'; // Import SweetAlert
import emailjs from '@emailjs/browser';

const parseDate = (dateString) => {
  const [day, month, year] = dateString.split('/');
  return new Date(year, month - 1, day);
};

const MeetingDetails = ({ meetingDetails }) => {
  const startDate = parseDate(meetingDetails?.startDate);
  const endDate = parseDate(meetingDetails?.endDate);
  const session = useSession();
  const [selectedDate, setSelectedDate] = useState(null);
  const [availability, setAvailability] = useState(meetingDetails?.availability || {});
  const [availableTimes, setAvailableTimes] = useState([]);
  const [selectedTime, setSelectedTime] = useState(null); // State to hold the selected time

  useEffect(() => {
    const fetchUpdatedMeetingDetails = async () => {
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_CLIENT_URL}/dashboard/createMeeting/api/${meetingDetails._id}`);
        if (!response.ok) {
          throw new Error('Failed to fetch updated meeting details.');
        }
        const updatedData = await response.json();
        setAvailability(updatedData.availability); // Update the availability state
      } catch (error) {
        console.error('Error fetching updated meeting details:', error);
      }
    };

    if (meetingDetails) {
      fetchUpdatedMeetingDetails();
    }
  }, [meetingDetails]);

  console.log(meetingDetails);

  const handleDateSelect = (date) => {
    const formattedDate = `${String(date.getDate()).padStart(2, '0')}/${String(date.getMonth() + 1).padStart(2, '0')}/${date.getFullYear()}`;
    setSelectedDate(date);

    if (availability) {
      const selectedDateAvailability = availability[formattedDate];

      if (selectedDateAvailability && typeof selectedDateAvailability === 'object') {
        const timesArray = [{
          startTime: selectedDateAvailability.startTime,
          endTime: selectedDateAvailability.endTime,
          bookedTimes: selectedDateAvailability.bookedTimes

        }];
        setAvailableTimes(timesArray);
      } else {
        setAvailableTimes([]);
      }
    }
  };


  const handleBookMeeting = async () => {
    if (selectedDate && selectedTime) {
      const formattedDate = `${String(selectedDate.getDate()).padStart(2, '0')}/${String(selectedDate.getMonth() + 1).padStart(2, '0')}/${selectedDate.getFullYear()}`;

      const timeToBook = selectedTime; // Get the selected time slot (e.g., "22:29-23:14")

      // Now update the database with the new availability
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_CLIENT_URL}/dashboard/createMeeting/api/${meetingDetails._id}`, {
          method: 'PATCH', // Use PATCH method here
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ selectedDate: formattedDate, bookedTimeSlot: timeToBook }), // Pass necessary data
        });

        if (!response.ok) {
          throw new Error('Failed to book the meeting.');
        }

        // Show success message with SweetAlert
        Swal.fire({
          title: 'Congratulations!',
          text: 'You successfully booked the meeting! 🎉',
          icon: 'success',
          confirmButtonText: 'OK',
        }).then(() => {


          // Reload the window after the user confirms the SweetAlert
          // window.location.reload();
        });

        const schedulingData = {
          organizer: meetingDetails.name, // Author name
          authorEmail: meetingDetails.email, // Author email
          duration: meetingDetails.duration, // Duration time
          selectedDate: formattedDate, // Selected date
          name: session?.data?.user?.name,
          email: session?.data?.user?.email,/// Replace with the actual user's email
          bookedTimeSlot: timeToBook, // Booked time slot
          meetingLocation: meetingDetails.selected,
          url: meetingDetails.url,
          meetingName: meetingDetails?.eventName,
        };
        //send email notification code here

        const [emailToAuthor, emailToUser] = await Promise.all([
          emailjs.send(process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID, process.env.NEXT_PUBLIC_MEETING_CREATOR_TEMPLATE_ID, schedulingData, process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY),
          emailjs.send(process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID, process.env.NEXT_PUBLIC_MEETING_BOOKING_TEMPLATE_ID, schedulingData, process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY),
        ]);

        if (emailToAuthor.status === 200 && emailToUser.status === 200) {
          // Show success message with SweetAlert
          Swal.fire({
            title: 'Congratulations!',
            text: 'You successfully booked the meeting! 🎉',
            icon: 'success',
            confirmButtonText: 'OK',
          }).then(() => {
            window.location.reload(); // Reload the window after success
          });
        } else {
          throw new Error('Failed to send email notifications.');
        }

        const bookingResponse = await fetch(`${process.env.NEXT_PUBLIC_CLIENT_URL}/dashboard/meetingType/apiBooking`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(schedulingData),
        });

        // const bookingResponseData = await bookingResponse.json();

        if (bookingResponse.status === 200) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Your meeting has been created",
            showConfirmButton: false,
            timer: 1500,
          });
        }

      } catch (error) {
        console.error(error);
        // Handle error (optional)
        Swal.fire({
          title: 'Error!',
          text: error.message,
          icon: 'error',
          confirmButtonText: 'OK',
        });
      }

    } else {
      alert('Please select both a date and a time to book.');
    }
  };



  const tileContent = ({ date }) => {
    const isInRange = date >= startDate && date <= endDate;
    const isSelected = selectedDate && date.toDateString() === selectedDate.toDateString();



    return (
      <div
        className={`w-full h-full flex items-center justify-center ${isSelected ? 'bg-red-500' : isInRange ? 'bg-green-500' : ''}`}
        onClick={() => handleDateSelect(date)}
      >
      </div>
    );
  };

  const tileDisabled = ({ date }) => {
    return date < startDate || date > endDate;
  };

  const handleTimeSelect = (time) => {
    setSelectedTime(time); // Update the selected time state
  };
  console.log(availableTimes)
  return (
    <div className="flex flex-col shadow-lg  backdrop-opacity-70 rounded-lg  md:flex-row gap-8 items-start p-4 font-raleway">
      <div className="border-t-0 text-slate-50 card glass border-b-0  border-l-0 border-2 border-dashed border-r-orange-500  border-t-orange-500  p-4 w-full md:w-1/3 mb-4 h-full flex-grow min-h-[400px]">
        <h2 className="text-2xl font-bold mb-4 text-orange-500">Meeting Details 📋</h2>
        {meetingDetails ? (
          <div className="space-y-2 ">
            <p><strong>Name:</strong><span className='text-slate-300'> {meetingDetails.name}</span></p>
            <p><strong>Email:</strong><span className='text-slate-300'> {meetingDetails.email}</span></p>
            <p><strong>Event Name:</strong><span className='text-slate-300'> {meetingDetails.eventName}</span></p>
            <p><strong>Duration:</strong><span className='text-slate-300'> {meetingDetails.duration} minutes</span></p>
            <p><strong>Type:</strong><span className='text-slate-300'> {meetingDetails.selected}</span></p>
            <p><strong>URL:</strong> <a href={meetingDetails.url} className="text-blue-500 underline"><span className='text-slate-300'> {meetingDetails.url}</span></a></p>
            <p><strong>Start Date:</strong><span className='text-slate-300'> {meetingDetails.startDate}</span></p>
            <p><strong>End Date:</strong><span className='text-slate-300'> {meetingDetails.endDate}</span></p>
          </div>
        ) : (
          <p>No meeting details available.</p>
        )}
      </div>

      <div className=" border-t-0 card glass text-slate-50 border-l-0 border-b-0 border-2 border-dashed border-r-blue-500  p-4 w-full md:w-1/3 mb-4 h-full flex-grow min-h-[400px]">
        <h2 className="text-2xl font-bold mb-4 text-blue-500">Select Your Date 📅</h2>
        <Calendar
          tileContent={tileContent}
          tileDisabled={tileDisabled}
          className="mt-2 bg-green-200"
          rangeColors={["green"]}
        />
      </div>

      <div className=" border-t-0 border-l-0  text-slate-50 card glass border-b-0 border-2 border-dashed border-l-green-500 border-r-green-500  p-4 w-full md:w-1/3 mb-4 h-full flex-grow min-h-[400px]">
        <h3 className="text-2xl font-bold mb-4 text-green-500">Select Your Time ⏰ :</h3>
        {selectedDate ? (
          <p>{`You have selected: ${selectedDate.toLocaleDateString('en-GB')}`}</p>
        ) : (
          <p>Select a Date And show its available time</p>
        )}

        <div className='max-h-40 overflow-y-auto mt-2'>
          {availableTimes.length > 0 ? (
            <ul>
              {availableTimes.map((time, index) => {
                const startTime = time.startTime;
                const endTime = time.endTime;
                const bookedTimes = time.bookedTimes || []; // Ensure bookedTimes is defined
                console.log(bookedTimes);

                const durationInMinutes = parseInt(meetingDetails?.duration) || 30;

                const addMinutes = (timeStr, minutes) => {
                  const [hour, minute] = timeStr.split(":").map(Number);
                  const date = new Date(0, 0, 0, hour, minute);
                  date.setMinutes(date.getMinutes() + minutes);
                  return date.toTimeString().slice(0, 5);
                };

                const getTimeSlots = (start, end) => {
                  let slots = [];
                  let currentTime = start;

                  while (currentTime < end) {
                    let nextTime = addMinutes(currentTime, durationInMinutes);
                    if (nextTime <= end) {
                      slots.push(`${currentTime} - ${nextTime}`);
                    }
                    currentTime = nextTime;
                  }

                  // Filter out booked times from the generated slots
                  return slots.filter(slot => {
                    return !bookedTimes.some(bookedTime =>
                      slot === bookedTime // Check if slot matches any booked time
                    );
                  });
                };

                const timeSlots = getTimeSlots(startTime, endTime);

                return (
                  <li className='text-center mx-auto' key={index}>
                    {timeSlots.length > 0 ? (
                      <ul className='flex flex-col gap-2'>
                        {timeSlots.map((slot, idx) => (
                          <li
                            className={`border-2 px-2 py-2 cursor-pointer font-raleway font-bold border-green-500 gap-5 rounded-2xl ${selectedTime === slot ? 'bg-orange-500' : 'hover:bg-green-500'}`}
                            key={idx}
                            onClick={() => handleTimeSelect(slot)} // Update selected time on click
                          >
                            {slot}
                          </li>
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
            <p></p>
          )}

        </div>

        <div className='container mx-auto mt-5 btn bg-green-700 text-white' onClick={handleBookMeeting}>
          <button >Booked</button>
        </div>
      </div>
    </div>
  );
};

export default MeetingDetails;
