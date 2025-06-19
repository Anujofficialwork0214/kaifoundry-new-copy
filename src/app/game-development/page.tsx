// 'use client'
// import React from 'react';
// import { useEffect, useState } from "react";
// import HeroSection from './HeroSection';
// import BlockchainSection from './GameDevlopmentSection';
// import WhyChooseGame from "./WhyChooseGame"
// import { ImArrowUp } from "react-icons/im";
// import WhatWeOfferGame from "./WhatWeOfferGame"
// import FaqGame from './FaqGame';
// import Contact from "../Reusable/Contact"
// import EcosystemSection from '../Reusable/EcosystemSection';
// import EcosystemMobile from '../Reusable/EcoSystemMobile';

// const GameDevelopmentPage: React.FC = () => {
//   const [isMobile, setIsMobile] = useState(false);

//   useEffect(() => {
//     const handleResize = () => {
//       setIsMobile(window.innerWidth < 768);
//     };

//     handleResize();
//     window.addEventListener("resize", handleResize);

//     return () => {
//       window.removeEventListener("resize", handleResize);
//     };
//   }, []);
//   return (
//     <div>
//       <HeroSection />
//       <BlockchainSection />
//       <WhatWeOfferGame />
//       <WhyChooseGame />
//       {isMobile ? <EcosystemMobile /> : <EcosystemSection />}
//       <FaqGame />
//       <Contact />
//       <button
//         onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
//         className="fixed bottom-6 right-6 bg-[#BA24D5] cursor-pointer text-white p-3 rounded-full shadow-md  transition"
//       >
//         <ImArrowUp />
//       </button>

//     </div>
//   );
// };

// export default GameDevelopmentPage;

"use client";
import React, { useEffect, useState, useCallback } from "react";
import { ImArrowUp } from "react-icons/im";

// Dynamically import components with Next.js
import dynamic from "next/dynamic";

const HeroSection = dynamic(() => import("./HeroSection"));
const BlockchainSection = dynamic(() => import("./GameDevlopmentSection"));
const WhyChooseGame = dynamic(() => import("./WhyChooseGame"));
const WhatWeOfferGame = dynamic(() => import("./WhatWeOfferGame"));
const FaqGame = dynamic(() => import("./FaqGame"));
const Contact = dynamic(() => import("../Reusable/Contact"));
const EcosystemSection = dynamic(() => import("../Reusable/EcosystemSection"));
const EcosystemMobile = dynamic(() => import("../Reusable/EcoSystemMobile"));

const GameDevelopmentPage: React.FC = () => {
  const [isMobile, setIsMobile] = useState<boolean>(false);

  // Memoized resize handler to avoid unnecessary re-renders
  const handleResize = useCallback(() => {
    setIsMobile(window.innerWidth < 768);
  }, []);

  useEffect(() => {
    // Initial screen check
    handleResize();

    // Add resize event listener
    window.addEventListener("resize", handleResize);

    // Cleanup event listener on unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [handleResize]);

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

  return (
    <div>
      <HeroSection />
      <BlockchainSection />
      <WhatWeOfferGame />
      <WhyChooseGame />
      {isMobile ? <EcosystemMobile /> : <EcosystemSection />}
      <FaqGame />
      <Contact />

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

export default GameDevelopmentPage;
