"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { IoIosArrowBack } from 'react-icons/io';
import { FaClock, FaFan, FaLocationArrow } from 'react-icons/fa';
import { DateRange } from 'react-date-range';
import 'react-date-range/dist/styles.css'; 
import 'react-date-range/dist/theme/default.css'; 
import TimeSlotPicker from './TimeSlotPicker';  // Assuming you have TimeSlotPicker
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import Swal from 'sweetalert2';

const Create = () => {
  const session = useSession();
  const router = useRouter();
  const [ loading, setLoading ] = useState(false);
  const [eventName, setEventName] = useState("");
  const [duration, setDuration] = useState('15 min');
  const [selected, setSelected] = useState('');
  const [url, setUrl] = useState('');
  const [state, setState] = useState([
    {
      startDate: new Date(),
      endDate: null,
      key: 'selection'
    }
  ]);
  
  const handleSelect = (option) => {
    setSelected(option);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!eventName || !selected || !url) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Please fill in all the required fields!',
      });
      return;
    }

    const startDateLocal = new Date(state[0].startDate).toLocaleDateString('en-GB');
    const endDateLocal = state[0].endDate ? new Date(state[0].endDate).toLocaleDateString('en-GB') : null;

    const create = {
      name: session?.data?.user?.name,
      email: session?.data?.user?.email,
      eventName: eventName,
      duration: duration,
      selected: selected,
      url: url,
      startDate: startDateLocal,  
      endDate: endDateLocal,
    };
    setLoading(true);
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/dashboard/createMeeting/api`, { 
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(create),
      });
  
      const data = await response.json();
      if(response.status === 200){
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Your meeting has been created",
          showConfirmButton: false,
          timer: 1500
        });
        router.push('/dashboard/meetingType');
      }
  
      console.log(data, response.status);
  
    } catch (error) {
      console.error('Error creating event:', error);
    } finally{
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className='flex lg:flex-row md:flex-col flex-col'>
      <div className='lg:border-e-2 md:border-e-2 lg:w-1/3 md:w-full w-full min-h-screen'>
        <div className='pt-5 space-y-3 pl-5'>
          <Link className='flex items-center space-x-2 text-lg' href="/dashboard">
            <IoIosArrowBack /> <h4>Cancel</h4>
          </Link>
          <h2 className='font-semibold text-2xl'>Create New Event</h2>
          
          <h4 className='font-semibold'>Event Name *</h4>
          <input
            className='py-2 w-4/5 border-2 rounded-lg pl-5'
            type="text"
            placeholder='Name of your meeting event'
            value={eventName}
            onChange={(e) => setEventName(e.target.value)}
          />
          <h4 className='font-semibold'>Duration *</h4>
          <select value={duration} onChange={(e) => setDuration(e.target.value)} className="border rounded-md p-2">
            <option value="15 min">15 min</option>
            <option value="30 min">30 min</option>
            <option value="45 min">45 min</option>
            <option value="60 min">60 min</option>
          </select>

          <div className="flex mb-4">
            <button type="button" onClick={() => handleSelect('Zoom')}>
              <Image src="https://i.ibb.co/mHdB8Lw/Zoom-Logo-PNG-Images-removebg-preview-2.png" width={100} height={100} alt='Zoom' />
            </button>
            <button type="button" onClick={() => handleSelect('Meet')}>
              <Image src="https://i.ibb.co/pKVJTTX/Google-Meet-Logo-wine-removebg-preview.png" alt='Meet' height={100} width={100} />
            </button>
          </div>
          {selected && <p className="text-lg">Selected: {selected}</p>}
          {selected && (
            <input
              type="text"
              placeholder="Add URL"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              className='py-2 w-4/5 border-2 rounded-lg pl-5'
            />
          )}

          <button disabled={loading} className='py-2 w-4/5 border-2 rounded-lg pl-5 btn bg-[#4E9BFF] text-white'>
          {loading ? <FaFan className='animate-spin'></FaFan> : "Create"}
          </button>
        </div>
      </div>

      <div className="lg:w-full md:w-full w-full flex lg:flex-row md:flex-row flex-col lg:shadow-2xl md:shadow-2xl lg:m-5 pt-5 pl-5 lg:h-[500px] md:h-[500px] h-[500px] space-y-5">
        <div className='lg:w-2/6 md:w-2/6 w-full space-y-5'>
          <h3 className="text-lg">MeetWise</h3>
          <p>Business Name</p>
          <h2 className='text-2xl font-semibold'>{eventName}</h2>
          <div className='flex items-center space-x-2'>
            <FaClock />
            <h2 className='font-semibold'>{duration}</h2>
          </div>
          <div className='flex items-center space-x-2'>
            <FaLocationArrow />
            <p>{selected} Meeting</p>
          </div>
          <p className='cursor-pointer text-blue-500'>{url}</p>
        </div>
        
        <div className='lg:w-4/6 md:w-4/6 w-full flex'>
          <div className='lg:flex-1 md:flex-1'>
            <h2 className='font-semibold text-xl mb-4'>Select Date & Time</h2>

            <DateRange
              editableDateInputs={true}
              onChange={item => setState([item.selection])}
              moveRangeOnFirstSelection={false}
              ranges={state}
              minDate={new Date()} 
            />
          </div>
          <button type="button" className="lg:flex-1 md:flex-1" onClick={(e) => e.preventDefault()}>
            <TimeSlotPicker duration={duration} /> 
          </button>
        </div>
      </div>
    </form>
  );
};

export default Create;

