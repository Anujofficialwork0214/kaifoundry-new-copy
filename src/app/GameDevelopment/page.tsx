'use client'
import React from 'react';
import { useEffect, useState } from "react";
import HeroSection from './HeroSection';
import BlockchainSection from './GameDevlopmentSection';
import WhyChooseGame from "./WhyChooseGame"

import WhatWeOfferGame from "./WhatWeOfferGame"
import FaqGame from './FaqGame';
import Contact from "../Reusable/Contact"
import EcosystemSection from '../Reusable/EcosystemSection';
import EcosystemMobile from '../Reusable/EcoSystemMobile';

const GameDevelopmentPage: React.FC = () => {
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
   <BlockchainSection/>
      <WhatWeOfferGame />
      <WhyChooseGame />
    {isMobile ?<EcosystemMobile/> : <EcosystemSection/>}
      <FaqGame />
      <Contact/>

     </div>
  );
};

export default GameDevelopmentPage;