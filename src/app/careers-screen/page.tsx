// 'use client'
// import React from 'react';
// import CareersSection from './CareersSection';
// import WhyWorkWithUs from './WhyWorkWithUs';
// import JobListings from './JobListings';
// import WhyWorkWithUsMob from './WhyWorkWithMob';
// import CareerSectionMob from './CareerSectionMob'
// import { ImArrowUp } from "react-icons/im";
// const CareersPage: React.FC = () => {
//   const [isMobile, setIsMobile] = React.useState(false);

//   React.useEffect(() => {
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
//       {isMobile ? <CareerSectionMob /> : <CareersSection />}
//       {isMobile ? <WhyWorkWithUsMob /> : <WhyWorkWithUs />}
//       <JobListings />
//       <button
//         onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
//         className="fixed bottom-6 right-6 bg-[#BA24D5] cursor-pointer text-white p-3 rounded-full shadow-md  transition"
//       >
//         <ImArrowUp />
//       </button>
//     </div>
//   );
// };

// export default CareersPage;

"use client";
import React, { useState, useEffect, useCallback } from "react";
import dynamic from "next/dynamic";
import { ImArrowUp } from "react-icons/im";

// Dynamically import components for mobile and desktop
const CareersSection = dynamic(() => import("./CareersSection"));
const WhyWorkWithUs = dynamic(() => import("./WhyWorkWithUs"));
const JobListings = dynamic(() => import("./JobListings"));
const WhyWorkWithUsMob = dynamic(() => import("./WhyWorkWithMob"));
const CareerSectionMob = dynamic(() => import("./CareerSectionMob"));

const CareersPage: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false);

  // Debounced resize handler to minimize re-renders
  const handleResize = useCallback(() => {
    setIsMobile(window.innerWidth < 768);
  }, []);

  useEffect(() => {
    handleResize(); // Initial check
    window.addEventListener("resize", handleResize);
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
      {isMobile ? <CareerSectionMob /> : <CareersSection />}
      {isMobile ? <WhyWorkWithUsMob /> : <WhyWorkWithUs />}
      <JobListings />

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

export default CareersPage;
