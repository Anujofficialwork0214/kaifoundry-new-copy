// 'use client'
// import React from 'react';
// import HowWeHelp from './HeroSection';
// import FileCoin from './FileCoin';
// import SolutionsSection from './SolutionsSection';
// import BussinessGrowthMob from './BussinessGrowthMob'
// import { ImArrowUp } from "react-icons/im";

// const HowWeHelpSection: React.FC = () => {

//   return (
//     <div>
//       <HowWeHelp />
//       <BussinessGrowthMob />
//       <FileCoin />
//       <SolutionsSection />
//       <button
//         onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
//         className="fixed bottom-6 right-6 bg-[#BA24D5] cursor-pointer text-white p-3 rounded-full shadow-md  transition"
//       >
//         <ImArrowUp />
//       </button>
//     </div>
//   );
// };

// export default HowWeHelpSection;

"use client";
import React, { useCallback } from "react";
import dynamic from "next/dynamic";
import { ImArrowUp } from "react-icons/im";

// Dynamically import components
const HowWeHelp = dynamic(() => import("./HeroSection"));
const FileCoin = dynamic(() => import("./FileCoin"));
const SolutionsSection = dynamic(() => import("./SolutionsSection"));
const BussinessGrowthMob = dynamic(() => import("./BussinessGrowthMob"));

// ScrollToTopButton component for handling scroll functionality
const ScrollToTopButton: React.FC = () => {
  const handleScrollToTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <button
      onClick={handleScrollToTop}
      className="fixed bottom-6 right-6 bg-[#BA24D5] cursor-pointer text-white p-3 rounded-full shadow-md transition"
    >
      <ImArrowUp />
    </button>
  );
};

const HowWeHelpSection: React.FC = () => {
  return (
    <div>
      <HowWeHelp />
      <BussinessGrowthMob />
      <FileCoin />
      <SolutionsSection />
      <ScrollToTopButton />
    </div>
  );
};

export default HowWeHelpSection;
