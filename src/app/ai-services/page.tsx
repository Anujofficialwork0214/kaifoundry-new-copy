'use client'
import React from 'react';
import { useEffect, useState } from "react";
import HeroSection from './HeroSection';
import AIServicesSection from './AIServicesSection';
import AiFaq from './AiFaq';
import EcosystemSection from '../Reusable/EcosystemSection';
import Contact from "../Reusable/Contact"
import WhyChooseAi from "./WhyChooseAi"
import WhatWeOfferAi from "./WhatWeOfferAi"
import EcosystemMobile from '../Reusable/EcoSystemMobile';

const AIServicesPage: React.FC = () => {
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
    <div>
      <HeroSection />
      <AIServicesSection />
      <WhatWeOfferAi />
      <WhyChooseAi />
      {isMobile ? <EcosystemMobile /> : <EcosystemSection />}
      <AiFaq />
      <Contact />


    </div>
  );
};

export default AIServicesPage;