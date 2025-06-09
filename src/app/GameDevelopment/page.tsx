
import React from 'react';
import HeroSection from './HeroSection';
import BlockchainSection from './GameDevlopmentSection';
import WhyChooseGame from "./WhyChooseGame"

import WhatWeOfferGame from "./WhatWeOfferGame"
import FaqGame from './FaqGame';
import Contact from "../Reusable/Contact"
import EcosystemSection from '../Reusable/EcosystemSection';

const GameDevelopmentPage: React.FC = () => {
  return (
    <div>
   <HeroSection />
   <BlockchainSection/>
      <WhatWeOfferGame />
      <WhyChooseGame />
      <EcosystemSection/>
      <FaqGame />
      <Contact/>

     </div>
  );
};

export default GameDevelopmentPage;