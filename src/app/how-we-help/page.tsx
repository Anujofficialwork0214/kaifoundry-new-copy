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

const scrollToTopSlowly = () => {
  const duration = 1000;
  const start = window.scrollY;
  const startTime = performance.now();

  const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);

  const animateScroll = (currentTime: number) => {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const easedProgress = easeOutCubic(progress);

    window.scrollTo(0, start * (1 - easedProgress));

    if (progress < 1) {
      requestAnimationFrame(animateScroll);
    }
  };

  requestAnimationFrame(animateScroll);
};

const HowWeHelpSection: React.FC = () => {
  return (
    <div>
      <HowWeHelp />
      <BussinessGrowthMob />
      <FileCoin />
      <SolutionsSection />
      <button
        onClick={scrollToTopSlowly}
        className="fixed bottom-6 right-6 bg-[#BA24D5] z-30 cursor-pointer text-white p-2 rounded-full shadow-md transition"
      >
        <svg
          width="25"
          height="25"
          viewBox="0 0 300 320"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M119.621 266.337H199.371V160.004H263.703L159.496 55.7969L55.2898 160.004H119.621V266.337Z"
            fill="white"
          />
        </svg>
      </button>
    </div>
  );
};

export default HowWeHelpSection;
