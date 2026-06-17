"use client"
import React, { useEffect, useState } from 'react';
import Header from "../webpage/components/Header";
import Topbar from "../webpage/components/Topbar";
import Footer from '../webpage/components/Footer';
import Herocheckout from '../webpage/details/hero';
import Detailspage from '../webpage/details/details';

const Details = () => {
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
      <Detailspage />
      <Footer />
    </div>
  );
};

export default Details;
