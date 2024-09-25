import React from 'react';
import Navbar from '../components/Homepage/Navbar/Navbar';
import Footer from '../components/Shared/Footer';

const layout = ({children}) => {
    return (
        <div>
            <div className="bg-[#f7ecff]">
               <div className="container mx-auto">
                  <Navbar></Navbar>
               </div>
            </div>
            {children}
            <Footer></Footer>
        </div>
    );
};

export default layout;