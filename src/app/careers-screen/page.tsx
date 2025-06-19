
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

  // Scroll to top handler
  const handleScrollToTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div>
      {isMobile ? <CareerSectionMob /> : <CareersSection />}
      {isMobile ? <WhyWorkWithUsMob /> : <WhyWorkWithUs />}
      <JobListings />

      <button
        onClick={handleScrollToTop}
        className="fixed bottom-6 right-6 bg-[#BA24D5] cursor-pointer text-white p-3 rounded-full shadow-md transition"
      >
        <ImArrowUp />
      </button>

    </div>
  );
};

export default CareersPage;
