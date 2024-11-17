import { Suspense } from "react";
import Notification from "../components/Notification";
import Signup from "../components/SignUp/Signup";

const page = () => {
  return (
    <div className="bg-blue-50 min-h-screen">
      <div className=" container mx-auto   min-h-screen">
        <Suspense>
          <Signup></Signup>
        </Suspense>

        <div className="container mx-auto">
          <Notification></Notification>
        </div>
      </div>
    </div>
  );
};

export default page;
