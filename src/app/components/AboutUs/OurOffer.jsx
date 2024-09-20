
const OurOffer = () => {
    return (
        <div className=" container mx-auto md:p-7 shadow-xl  bg-[#F8ECFF] my-12">
            <h1 className="text-2xl pb-3 font-semibold rounded-2xl md:w-1/4  border-b-2 border-black text-center mx-auto text-gray-800 lg:text-3xl dark:text-white">
                What We Offer
            </h1>

            <p className="md:text-xl my-2">At Meetwise, we offer a range of features designed to save you time:</p>
            <ul className="mx-auto md:text-xl">
                <li className="my-2"><span className=" font-semibold">1.Smart Calendar Integration:</span> Sync with Google Calendar, Outlook, and more to ensure all your meetings are in one place.</li>
                <li className="my-2"><span className="font-semibold">2.Automatic Time Zone Adjustments:</span>No more confusion over time zones – we automatically adjust meeting times based on participants’ locations.</li>
                <li className="my-2"><span className="font-semibold">3.Flexible Scheduling:</span>Offer multiple time slots, set buffers between meetings, and avoid double bookings.</li>
                <li className="my-2"><span className="font-semibold">4.Group Scheduling:</span>Need to coordinate with a team? Our group scheduling tools make it easy to find a common time.</li>
                <li className="my-2"><span className="font-semibold">5.Customizable Meeting Pages</span>Personalize your meeting links with branding, agendas, and more.</li>

            </ul>

        </div>
    );
};

export default OurOffer;