import React from 'react';
import ContactHeader from '../components/Contactpage/ContactHeader';
import Faq from '../components/Contactpage/Faq';
import Form from '../components/Contactpage/Form';
import Navbar from '../components/Homepage/Navbar/Navbar';
import Footer from '../components/Shared/Footer';
import Notification from '../components/Notification';

const page = () => {
    return (
        <div className=" container mx-auto bg-[url('/about/5052197.jpg')] bg-center min-h-screen">
        <div className=" container mx-auto bg-black/10 backdrop-blur-md backdrop-opacity-70">
            <div className="container hero-overlay bg-opacity-50 mx-auto">
              <Navbar></Navbar>
            </div>
        </div>
        <div className="container mx-auto">
             <Notification></Notification>
        </div>
        <ContactHeader></ContactHeader>
       <Faq></Faq>
       <Form></Form>
        <Footer></Footer>
      </div>
      
    );
};

export default page;