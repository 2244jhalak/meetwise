"use client"
import AutoRecord from "./components/Homepage/AutoRecord";
import Banner from "./components/Homepage/Banner";
import TryMeet from "./components/Homepage/TryMeet";
import Hiw from "./components/Homepage/HIw/Hiw";
import AllIntegrations from "./components/Homepage/AllIntegrations";
import Carousel from "./components/Homepage/Carousel";
import Footer from "./components/Shared/Footer";
import Navbar from "./components/Homepage/Navbar/Navbar";




export default function Home() {
  
  return (
    <div className=" container mx-auto">
      <div className="bg-[#8EA2A2] container mx-auto">
          <div className="">
            <Navbar></Navbar>
          </div>
      </div>
      <Banner />
      <Hiw></Hiw>
      <AutoRecord></AutoRecord>
      <AllIntegrations></AllIntegrations>
      <Carousel></Carousel>
      <TryMeet />
      
      <Footer></Footer>
    </div>
  );
}
