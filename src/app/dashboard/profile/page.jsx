import Sidebar from "@/app/components/dashboard/Sidebar";
import UserInfo from "@/app/components/dashboard/UserInfo";


const page = () => {
    return (
        <div>
            <Sidebar></Sidebar>
            <UserInfo></UserInfo>
        </div>
    );
};

export default page;