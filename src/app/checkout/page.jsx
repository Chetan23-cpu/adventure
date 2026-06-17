"use client"
import React, { useEffect, useState } from 'react';
import Header from "../webpage/components/Header";
import Topbar from "../webpage/components/Topbar";
import Footer from '../webpage/components/Footer';
import Checkoutpage from '../webpage/checkout/checkoutpage';
import Herocheckout from '../webpage/checkout/checkouthero';

const Checkout = () => {
    const [headerActive, setHeaderActive] = useState(false);
      useEffect(()=> {
          const handleScroll = () => {
            setHeaderActive(window.scrollY > 200);
          }
    
          window.addEventListener("scroll", handleScroll);
          return ()=>{
            window.removeEventListener("scroll", handleScroll);
          }
      },[]);
  return (
    <div>
      <div className="overflow-hidden">
        <Topbar />
        <div className="relative z-10">
          <Header />
        </div>
        <div
          className={`w-full transition-transform duration-500 fixed top-0 left-0 z-50 ${headerActive ? "translate-y-0" : "-translate-y-full"}`}
        >
          <Header />
        </div>
      </div>
      <Herocheckout />
      <Checkoutpage />
      <Footer />
    </div>
  );
};

export default Checkout;
