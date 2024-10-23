/* eslint-disable react/no-unescaped-entities */
"use client"

import { useState, useEffect } from 'react';

const Notification = () => {
  const [isOnline, setIsOnline] = useState(true);

  useEffect(() => {
    const updateOnlineStatus = () => {
      setIsOnline(navigator.onLine);
    };

    window.addEventListener('online', updateOnlineStatus);
    window.addEventListener('offline', updateOnlineStatus);

    return () => {
      window.removeEventListener('online', updateOnlineStatus);
      window.removeEventListener('offline', updateOnlineStatus);
    };
  }, []);

  if (isOnline) {
    return null;
  }

  return (
    <div className="fixed bottom-5 right-10 bg-yellow-300 z-50 text-black border border-yellow-600 p-4 rounded-lg shadow-lg">
      <p className="font-semibold">You are currently offline. Please check your internet connection.</p>
   
    </div>
  );
};

export default Notification;
