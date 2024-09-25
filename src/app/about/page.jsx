import React from 'react';
import AboutHeader from '../components/AboutUs/AboutHeader';
import OurOffer from '../components/AboutUs/OurOffer';
import ChooseUs from '../components/AboutUs/ChooseUs';
import Navbar from '../components/Homepage/Navbar/Navbar';
import Footer from '../components/Shared/Footer';

const page = () => {
    return (
        <div>
            <div className="bg-[#f7ecff]">
               <div className="container mx-auto">
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