import React from 'react';
import AboutHeader from '../components/AboutUs/AboutHeader';
import OurOffer from '../components/AboutUs/OurOffer';
import ChooseUs from '../components/AboutUs/ChooseUs';
import Navbar from '../components/Homepage/Navbar/Navbar';
import Footer from '../components/Shared/Footer';

const page = () => {
    return (
        <div className=" container mx-auto bg-[url('/about/5052197.jpg')] bg-center min-h-screen">
        <div className=" container mx-auto backdrop-blur-md backdrop-opacity-70">
               <div className="container hero-overlay bg-opacity-50 mx-auto">
                  <Navbar></Navbar>
               </div>
            </div>
            <AboutHeader></AboutHeader>
            <OurOffer></OurOffer>
            <ChooseUs></ChooseUs>
            <Footer></Footer>
            
        </div>
    );
};

export default page;