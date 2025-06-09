'use client';

import React from 'react';

import HeroSection from './HeroSection';
import BlockchainSection from './BlockChainSection';


import WhyChooseBlock from "./WhyChooseBlock"
import EcosystemSection from '../Reusable/EcosystemSection';
import BlockFaq from './BlockFaq';
import Contact from "../Reusable/Contact"
import WhatWeOfferBlock from "./WhatweOfferBlock"


const BlockChainServicePage: React.FC = () => {
  
  return (
    <div>
   <HeroSection />
   <BlockchainSection/>
<WhatWeOfferBlock/>
      <WhyChooseBlock />
      <EcosystemSection />
      <BlockFaq/>
      <Contact/>

      
   

    </div>
  );
};

export default BlockChainServicePage;