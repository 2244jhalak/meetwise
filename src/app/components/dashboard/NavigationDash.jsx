import Link from "next/link";

const NavigationDash = ({ label, address, icon: Icon }) => {
    return (
        <div className="group font-raleway">
            <Link href={address}
                end
                className="flex w-full items-center px-4 py-2 mt-5 text-black hover:bg-[#183C4B] hover:text-white transform transition-all duration-500 ease-in font-raleway"
            >
                <Icon className='w-5 h-5' />

                <span className='mx-4 font-medium text-black group-hover:text-white'>{label}</span>
            </Link>
        </div>
    );
};

export default NavigationDash;
