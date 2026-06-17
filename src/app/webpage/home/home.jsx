"use client";
import React, { useEffect, useState } from 'react'

import About from '@/app/webpage/components/About'
import Faq from '@/app/webpage/components/Faq'
import Header from '@/app/webpage/components/Header'
import Hero from '@/app/webpage/components/Hero'
import Services from '@/app/webpage/components/Services'
import Stats from '@/app/webpage/components/Stats'
import Testimonials from '@/app/webpage/components/Testimonials'
import Topbar from '@/app/webpage/components/Topbar'
import Work from '@/app/webpage/components/Work'
import  Contact  from '@/app/webpage/components/Contact'

import Footer from '@/app/webpage/components/Footer'

const Main= () => {
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

console.log(headerActive);

  return (
    <div className='overflow-hidden'>
        <Topbar />
        <div className='relative z-10'>
          <Header />
        </div>
        <div className={`w-full transition-transform duration-500 fixed top-0 left-0 z-50 ${headerActive ? "translate-y-0" : "-translate-y-full"}`}>
          <Header />
        </div>
        <Hero />
        <About />
        <Stats />
        <Services />
        <Work />
        <Testimonials />
        <Faq />
        <Contact />
        <Footer />

        {/* Temp div */}
      
    </div>
  )
}

export default Main;