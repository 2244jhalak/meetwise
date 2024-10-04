
import Scheduled from '@/app/components/dashboard/Scheduled_Meeting/Scheduled';
import Sidebar from '@/app/components/dashboard/Sidebar';

const page = () => {

    
    return (
        <div>
            
            <Sidebar></Sidebar>
            <div className='container mx-auto'>
            <Scheduled></Scheduled>
           </div>
        </div>
    );
};

export default page;