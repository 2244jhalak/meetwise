import Image from 'next/image';
import Sidebar from '../components/dashboard/Sidebar';

const page = () => {
    return (
        <div className='bg-blue-100 min-h-screen'>
            <Sidebar></Sidebar>
            <div>
                <h2 className='text-center font-semibold text-3xl md:ml-32 text-blue-600 md:p-6'>Welcome to Dashboard</h2>
                <Image
                    className='mx-auto md:w-[1100px] md:p- md:mr-28 md:h-[600px]'
                    src="https://www.projectmanager.com/wp-content/uploads/2023/10/Project-Dashboard-Template-Excel-image.png"
                    alt="Description of image"
                    width={500}
                    height={300}
                />

            </div>
        </div>
    );
};

export default page;