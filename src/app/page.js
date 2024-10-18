"use client"
import AutoRecord from "./components/Homepage/AutoRecord";
import Banner from "./components/Homepage/Banner";

import Hiw from "./components/Homepage/HIw/Hiw";
import AllIntegrations from "./components/Homepage/AllIntegrations";
import Carousel from "./components/Homepage/Carousel";
import Footer from "./components/Shared/Footer";
import Navbar from "./components/Homepage/Navbar/Navbar";
import Timezone from "./components/Homepage/Timezone";
import TimeZoneSelector from "./components/Homepage/Timezone";





export default function Home() {

  // const eventTime = "2024-10-16 15:26"; // Example event time in "Asia/Dhaka" time zone
  const eventTime =new Date(); // Example event time in "Asia/Dhaka" time zone


  return (
    <div className=" container mx-auto bg-[url('/banner/dr3.jpg')] bg-center min-h-screen">
      <div className=" container mx-auto bg-white/10 backdrop-blur-md backdrop-opacity-70">
        <div className="">
          <Navbar></Navbar>
        </div>
      </div>
      <Banner />
      <Hiw></Hiw>
      <AutoRecord></AutoRecord>
      <AllIntegrations></AllIntegrations>
      <Carousel></Carousel>
      <div className="bg-orange-200">
        <TimeZoneSelector eventTime={eventTime}></TimeZoneSelector>
      </div>
      <Footer></Footer>
    </div>
  );
}
