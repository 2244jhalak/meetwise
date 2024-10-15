"use client"
import AutoRecord from "./components/Homepage/AutoRecord";
import Banner from "./components/Homepage/Banner";
import TryMeet from "./components/Homepage/TryMeet";
import Hiw from "./components/Homepage/HIw/Hiw";
import AllIntegrations from "./components/Homepage/AllIntegrations";
import Carousel from "./components/Homepage/Carousel";
import Footer from "./components/Shared/Footer";
import Navbar from "./components/Homepage/Navbar/Navbar";
import Notification from "./components/Notification";




export default function Home() {
  
  return (
    <div className="bg-[#4A4947]">
    <div className=" container mx-auto bg-[url('/banner/dr3.jpg')] bg-center min-h-screen">
      <div className="container mx-auto bg-white/10 backdrop-blur-md backdrop-opacity-70">
          <div className="">
            <Navbar></Navbar>
            
          </div>
      </div>
      <div className="container mx-auto">
      <Notification></Notification>
      </div>
      
      <Banner />
      <Hiw></Hiw>
      <AutoRecord></AutoRecord>
      <AllIntegrations></AllIntegrations>
      <Carousel></Carousel>
      {/* <TryMeet /> */}
      
      <Footer></Footer>
    </div>
    </div>
  );
}
