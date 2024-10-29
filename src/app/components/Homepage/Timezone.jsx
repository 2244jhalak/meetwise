// components/TimeZoneSelector.js
import { useState, useEffect } from 'react';
import moment from 'moment-timezone';

const TimeZoneSelector = ({ eventTime }) => {
  // Get list of time zones from moment-timezone
  const timezones = moment.tz.names();

  // State to store selected time zone and converted time
  const [selectedTimezone, setSelectedTimezone] = useState('');
  const [convertedTime, setConvertedTime] = useState('');

  // Effect to set default time zone on component mount
  useEffect(() => {
    const userTimeZone = moment.tz.guess(); // Guess user's time zone
    setSelectedTimezone(userTimeZone);
  }, []);

  // Function to handle time zone change
  const handleTimezoneChange = (e) => {
    const timezone = e.target.value;
    setSelectedTimezone(timezone);
    convertEventTime(eventTime, timezone);
  };

  // Function to convert event time to the selected time zone
  const convertEventTime = (time, timezone) => {
    const eventMoment = moment.tz(time, Intl.DateTimeFormat().resolvedOptions().timeZone); // assuming event time is in Dhaka time
    const userLocalTime = eventMoment.clone().tz(timezone);
    setConvertedTime(userLocalTime.format('YYYY-MM-DD HH:mm'));
  };

  // Run conversion whenever selected time zone or event time changes
  useEffect(() => {
    if (selectedTimezone) {
      convertEventTime(eventTime, selectedTimezone);
    }
  }, [eventTime, selectedTimezone]);

  return (
    <div className=' text-black pl-4 p-1 bg-gray-800'>
      <h3 className=' text-white  font-bold'>Check Your Time Zone</h3>
      <select className='dark:text-white' value={selectedTimezone} onChange={handleTimezoneChange}>
        {timezones.map((tz) => (
          <option className='dark:text-white' key={tz} value={tz}>
            {tz}
          </option>
        ))}
      </select>

      <div>
        {/* <h4 >Event Time in Your Time Zone:</h4> */}
        <p className='text-white' >{convertedTime ? convertedTime : "Loading..."}</p>
      </div>
    </div>
  );
};

export default TimeZoneSelector;
