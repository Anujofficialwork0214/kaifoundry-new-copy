'use client'
import React from 'react';
import HowWeHelp from './HeroSection';
import FileCoin from './FileCoin';
import SolutionsSection from './SolutionsSection';
import BussinessGrowthMob from './BussinessGrowthMob'
import { ImArrowUp } from "react-icons/im";


const HowWeHelpSection: React.FC = () => {


  return (
    <div>
      <HowWeHelp />
      <BussinessGrowthMob />
      <FileCoin />
      <SolutionsSection />
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="fixed bottom-6 right-6 bg-[#BA24D5] cursor-pointer text-white p-3 rounded-full shadow-md  transition"
      >
        <ImArrowUp />
      </button>
    </div>
  );
};

export default HowWeHelpSection;