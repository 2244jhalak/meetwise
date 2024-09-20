import React from 'react';
import AboutHeader from '../components/AboutUs/AboutHeader';
import OurOffer from '../components/AboutUs/OurOffer';
import ChooseUs from '../components/AboutUs/ChooseUs';

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