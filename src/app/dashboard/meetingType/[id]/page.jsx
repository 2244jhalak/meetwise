
import MeetingDetails from '@/app/components/dashboard/meetingType/MeetingDetails';
import React from 'react';

const Page = async ({ params }) => {
    const { id } = params; // Get the dynamic id from URL

    // Fetch meeting details based on the id
    const res = await fetch(`${process.env.NEXT_PUBLIC_CLIENT_URL}/dashboard/createMeeting/api/${id}`);
    if (!res.ok) {
        throw new Error('Failed to fetch meeting details');
    }
    const meetingDetails = await res.json();

    return (
        <div>
            <h1>Meeting Type</h1>
            <MeetingDetails meetingDetails={meetingDetails} />
        </div>
    );
};

export default Page;