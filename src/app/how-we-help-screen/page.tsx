'use client'
import React from 'react';
import HowWeHelp from './HeroSection';
import FileCoin from './FileCoin';
import SolutionsSection from './SolutionsSection';
import BussinessGrowthMob from './BussinessGrowthMob'



const HowWeHelpSection: React.FC = () => {


  return (
    <div>
      <HowWeHelp />
      <BussinessGrowthMob />
      <FileCoin />
      <SolutionsSection />
      
    </div>
  );
};

export default HowWeHelpSection;