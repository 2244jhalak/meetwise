"use client"
import { useSession } from 'next-auth/react';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';

const UserInfo = () => {
    const session = useSession();
    const [formattedDate, setFormattedDate] = useState('');

  useEffect(() => {
    const dateStr = session?.data?.expires;
    const date = new Date(dateStr);

    // Check if date is valid
    if (!isNaN(date.getTime())) {
      const hours = date.getUTCHours() % 12 || 12; // Convert to 12-hour format
      const minutes = String(date.getUTCMinutes()).padStart(2, '0');
      const seconds = String(date.getUTCSeconds()).padStart(2, '0');
      const ampm = date.getUTCHours() >= 12 ? 'PM' : 'AM';

      const formatted = `${date.getUTCFullYear()}-${String(date.getUTCMonth() + 1).padStart(2, '0')}-${String(date.getUTCDate()).padStart(2, '0')} ${hours}:${minutes}:${seconds} ${ampm}`;
      setFormattedDate(formatted);
    } else {
      setFormattedDate('Invalid date');
    }
  }, []);

    return (
        <div className='flex justify-center'>
            <div className="stats shadow">
  

  <div className="stat">
    <div className="stat-figure text-secondary">
      <div className="avatar online">
        <div className="w-16 rounded-full">
          <Image alt='' src={session?.data?.user?.image} height={50} width={50}></Image>
        </div>
      </div>
    </div>
    <div className="text-3xl">{session?.data?.user?.name}</div>
    <div className="stat-title">{session?.data?.user?.email}</div>
    <div className="stat-desc text-secondary">Session Expires : {formattedDate}</div>
  </div>
</div>
        </div>
    );
};

export default UserInfo;