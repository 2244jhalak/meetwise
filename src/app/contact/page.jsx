import React from 'react';
import ContactHeader from '../components/Contactpage/ContactHeader';
import Faq from '../components/Contactpage/Faq';

const page = () => {
    return (
        <div className='bg-[#F8ECFF]'>
       <ContactHeader></ContactHeader>
       <Faq></Faq>
        </div>
    );
};

export default page;