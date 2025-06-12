'use client';

import React from 'react';
import { useEffect, useState } from "react";
import HeroSection from './HeroSection';
import BlockchainSection from './BlockChainSection';
import WhyChooseBlock from "./WhyChooseBlock"
import EcosystemSection from '../Reusable/EcosystemSection';
import BlockFaq from './BlockFaq';
import Contact from "../Reusable/Contact"
import WhatWeOfferBlock from "./WhatweOfferBlock"
import EcosystemMobile from '../Reusable/EcoSystemMobile';


const BlockChainServicePage: React.FC = () => {
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
<WhatWeOfferBlock/>
      <WhyChooseBlock />
        {isMobile ?<EcosystemMobile/> : <EcosystemSection/>}
      <BlockFaq/>
      <Contact/>

      
   

    </div>
  );
};

export default BlockChainServicePage;