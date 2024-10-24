
const BookingTableRow = ({ meeting }) => {
    return (
        <tr>
            {/* meeting name  */}
            <td className="px-4 py-4 text-sm font-medium whitespace-nowrap">
                <h2 className="font-medium text-gray-800 dark:text-white ">{meeting?.meetingName || "Meeting Name"}</h2>
            </td>
            {/* user  */}
            <td className="px-12 py-4 text-sm font-medium whitespace-nowrap">
                <div className="inline px-3 py-1 text-sm font-normal rounded-full text-emerald-500 gap-x-2 bg-emerald-100/60 dark:bg-gray-800">
                    {meeting?.name}
                </div>
            </td>
            {/* user email   */}
            <td className="px-12 py-4 text-sm font-medium whitespace-nowrap">
                <div className="inline px-3 py-1 text-sm font-normal rounded-full text-emerald-500 gap-x-2 bg-emerald-100/60 dark:bg-gray-800">
                    {meeting?.email}
                </div>
            </td>

            <td className="px-4 py-4 text-sm whitespace-nowrap">
                <div>
                    <h4 className="text-gray-700 dark:text-gray-200">{meeting?.meetingLocation}</h4>

                </div>
            </td>



            <td className="px-4 py-4 text-sm whitespace-nowrap">
                <a target="_blank" className="link w-2/3 h-1.5">{meeting?.url}</a>
            </td>

            <td className="px-4 py-4 text-sm whitespace-nowrap">
                <div>
                    <h4 className="text-gray-700 dark:text-gray-200">{meeting?.selectedDate}</h4>
                </div>
            </td>

            <td className="px-4 py-4 text-sm whitespace-nowrap">
                <div>
                    <h4 className="text-gray-700 dark:text-gray-200">{meeting?.bookedTimeSlot}</h4>
                </div>
            </td>

        </tr>
    );
};

export default BookingTableRow;