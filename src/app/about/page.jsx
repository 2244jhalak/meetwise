/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import AboutHeader from '../components/AboutUs/AboutHeader';
import OurOffer from '../components/AboutUs/OurOffer';
import ChooseUs from '../components/AboutUs/ChooseUs';
import Navbar from '../components/Homepage/Navbar/Navbar';
import Footer from '../components/Shared/Footer';
import Notification from '../components/Notification';


const page = () => {
    return (
        <div className=" container mx-auto bg-[url('/about/5052197.jpg')] bg-center min-h-screen">
        <div className="  container mx-auto bg-black/10 backdrop-blur-md backdrop-opacity-70">
        <div className="">
          <Navbar></Navbar>
        </div>
      </div>
            <div className="container mx-auto">
                 <Notification></Notification>
            </div>
            <AboutHeader></AboutHeader>
            <OurOffer></OurOffer>
            <ChooseUs></ChooseUs>
            <Footer></Footer>
            
        </div>
    );
};

export default page;