"use client"
import AutoRecord from "./components/Homepage/AutoRecord";
import Banner from "./components/Homepage/Banner";

import Hiw from "./components/Homepage/HIw/Hiw";
import AllIntegrations from "./components/Homepage/AllIntegrations";
import Carousel from "./components/Homepage/Carousel";
import Footer from "./components/Shared/Footer";
import Navbar from "./components/Homepage/Navbar/Navbar";

import Notification from "./components/Notification";

import Partners from "./components/Homepage/Partners/Partners";






export default function Home() {

  // useEffect(() => {
  //   if ('serviceWorker' in navigator) {
  //     navigator.serviceWorker.register('/sw.js').then(registration => {
  //       console.log('Service Worker registered with scope:', registration.scope);
  //     }).catch(error => {
  //       console.error('Service Worker registration failed:', error);
  //     });
  //   }
  // }, []);
  


  // const eventTime = "2024-10-16 15:26"; // Example event time in "Asia/Dhaka" time zone
  // const eventTime =new Date(); // Example event time in "Asia/Dhaka" time zone



  return (
    <div className=" container mx-auto bg-[url('/banner/dr3.jpg')] bg-center min-h-screen">
      <div className=" container mx-auto bg-white/10 backdrop-blur-md backdrop-opacity-70">
        <div className="">
          <Navbar></Navbar>
        </div>
      </div>
      <Notification></Notification>
      <Banner />
      <Partners></Partners>
      <Hiw></Hiw>
      <AutoRecord></AutoRecord>
      <AllIntegrations></AllIntegrations>
      <Carousel></Carousel>
      {/* <div className="bg-orange-200">
        <TimeZoneSelector eventTime={eventTime}></TimeZoneSelector>
      </div> */}
      <Footer></Footer>
    </div>
  );
}
