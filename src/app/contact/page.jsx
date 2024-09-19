import React from 'react';
import ContactHeader from '../components/Contactpage/ContactHeader';
import Faq from '../components/Contactpage/Faq';
import Form from '../components/Contactpage/Form';

const page = () => {
    return (
        <div className='bg-[#F8ECFF]'>
       <ContactHeader></ContactHeader>
       <Faq></Faq>
       <Form></Form>
        </div>
    );
};

export default page;