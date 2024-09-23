import Link from "next/link";

const NavigationDash = ({ label, address, icon: Icon }) => {
    return (
        <Link href={address}
            end
            className="flex w-full items-center px-4 py-2 mt-5 text-gray-600 hover:bg-[#7B61FF]  hover:text-gray-700 transition-colors duration-300 transform"
        >
            <Icon className='w-5 h-5' />

            <span className='mx-4 font-medium text-black'>{label}</span>
        </Link>
    );
};

export default NavigationDash;
