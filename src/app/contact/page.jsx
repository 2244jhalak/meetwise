import React from 'react';
import ContactHeader from '../components/Contactpage/ContactHeader';
import Faq from '../components/Contactpage/Faq';
import Form from '../components/Contactpage/Form';
import Navbar from '../components/Homepage/Navbar/Navbar';
import Footer from '../components/Shared/Footer';

const page = () => {
    return (
        <div className='bg-[#F8ECFF]'>
        <div className="bg-[#f7ecff]">
               <div className="container mx-auto">
                  <Navbar></Navbar>
               </div>
            </div>
       <ContactHeader></ContactHeader>
       <Faq></Faq>
       <Form></Form>
       <Footer></Footer>
       
        </div>
    );
};

export default page;