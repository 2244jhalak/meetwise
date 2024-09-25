import React from 'react';
import AboutHeader from '../components/AboutUs/AboutHeader';
import OurOffer from '../components/AboutUs/OurOffer';
import ChooseUs from '../components/AboutUs/ChooseUs';
import Navbar from '../components/Homepage/Navbar/Navbar';
import Footer from '../components/Shared/Footer';

const page = () => {
    return (
        <div>
            
            <AboutHeader></AboutHeader>
            <OurOffer></OurOffer>
            <ChooseUs></ChooseUs>
            
        </div>
    );
};

export default page;