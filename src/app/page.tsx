
'use client'
import React from 'react'
import { useEffect, useState } from "react";
import HeroSection from './HeroSection/Page'
import HeroSectionMob from './HeroSection/HeroSectionMobile';
import WhatWeProvide from './HeroSection/WhatWeProvide';
import WhatWeOffer from './HeroSection/WhatWeOffer';
import WhyChooseHero from './HeroSection/WhyChooseHome';
import EcosystemSection from './Reusable/EcosystemSection';
import AnimatedSection from './HeroSection/AnimatedImageCard';
import AnimatedSectionMob from './HeroSection/AnimatedImageMobile';
import CoolStuff from './HeroSection/CoolStuff';
import CoolStuffMob from "./HeroSection/CoolStuffMob"
import FaqHome from './HeroSection/FaqHome';
import Contact from './Reusable/Contact'
const page = () => {
    const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize(); 
    window.addEventListener("resize", handleResize); 

    return () => {
      window.removeEventListener("resize", handleResize); 
    };
  }, []);

  return (
    <>
      {isMobile ? <HeroSectionMob /> : <HeroSection />}
      <WhatWeProvide />
      <WhatWeOffer />
      <WhyChooseHero />
      <EcosystemSection />
      {isMobile ? <AnimatedSectionMob /> : <AnimatedSection />}
            {isMobile ? <CoolStuffMob /> : <CoolStuff />}
      <FaqHome />
      <Contact/>
    </>
  )
}

export default page