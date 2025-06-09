'use client'
import React from 'react';
import HeroSection from './HeroSection';
import AIServicesSection from './AIServicesSection';
import AiFaq from './AiFaq';
import EcosystemSection from '../Reusable/EcosystemSection';
import Contact from "../Reusable/Contact"
import WhyChooseAi from "./WhyChooseAi"
import WhatWeOfferAi from "./WhatWeOfferAi"
const AIServicesPage: React.FC = () => {
  return (
    <div>
   <HeroSection />
   <AIServicesSection/>
<WhatWeOfferAi/>
      <WhyChooseAi />
      <EcosystemSection />
      <AiFaq />
      <Contact/>


    </div>
  );
};

export default AIServicesPage;