/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";

const Banner = () => {
  return (
    <div className="bg-[#F8ECFF] py-10">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        {/* Left Side */}
        <div className="md:w-1/2 w-full text-center md:text-left p-5">
          <h1 className="text-4xl lg:text-7xl font-bold  text-[#2A106B] mb-4">
            Elevate Your Meetings with AI-powered Recording
          </h1>
          <p className=" text-lg font-normal leading-7 text-[#5E5961] mb-6">
            With our advanced artificial intelligence technology, your meetings
            are not just recorded – they're transformed into valuable insights
            and productivity boosters.
          </p>
          <div className="flex justify-center md:justify-start gap-4 mb-6">
            <button className="bg-[#331181] text-white px-6 py-3 rounded-md hover:bg-purple-700">
              Start for Free
            </button>
            <button className="bg-[#FFFFFF] border border-purple-600 text-[#827B85] px-6 py-3 rounded-md hover:bg-purple-600 hover:text-white">
              Watch Demo
            </button>
          </div>
          <div className="flex justify-center md:justify-start gap-8">
            <div className="lg:text-4xl font-semibold">
              10K+{" "}
              <span className="block text-sm font-medium">
                Active users per month
              </span>
            </div>
            <div className="text-4xl font-semibold">
              23+{" "}
              <span className="block  text-sm font-medium">
                Available in many country
              </span>
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div className="md:w-1/2 w-full p-14 flex flex-col items-center">
          <Image
            src="/banner/meetwise-banner-1.jpg"
            alt="Main Banner Image"
            width={600}
            height={400}
            className="w-full h-auto mb-6  rounded-lg"
          />
          <div className="flex gap-4">
            <Image
              src="/banner/meetwise-banner-1.jpg"
              alt="Secondary Image 1"
              width={300}
              height={200}
              className="w-1/2 h-auto rounded-lg"
            />
            <Image
              src="/banner/meetwise-banner-1.jpg"
              alt="Secondary Image 2"
              width={300}
              height={200}
              className="w-1/2 h-auto rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;