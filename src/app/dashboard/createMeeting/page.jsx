import Create from '@/app/components/dashboard/createMeeting/Create';
import React from 'react';

const page = () => {
    return (
        <div>
            <Create></Create>
        </div>
    );
};

export default page;
import LeftPart from "@/app/components/CreateMeeting/LeftPart";

const page = () => {
    return (
        <div className="">
            {/* left part  */}
            <LeftPart />
            {/* right part */}
        </div>
    );
};

export default page;