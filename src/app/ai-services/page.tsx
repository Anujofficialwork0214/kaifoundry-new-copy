// 'use client'
// import React from 'react';
// import { useEffect, useState } from "react";
// import HeroSection from './HeroSection';
// import AIServicesSection from './AIServicesSection';
// import AiFaq from './AiFaq';
// import EcosystemSection from '../Reusable/EcosystemSection';
// import Contact from "../Reusable/Contact"
// import WhyChooseAi from "./WhyChooseAi"
// import WhatWeOfferAi from "./WhatWeOfferAi"
// import EcosystemMobile from '../Reusable/EcoSystemMobile';
// import { ImArrowUp } from "react-icons/im";
// const AIServicesPage: React.FC = () => {
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
//       <AIServicesSection />
//       <WhatWeOfferAi />
//       <WhyChooseAi />
//       {isMobile ? <EcosystemMobile /> : <EcosystemSection />}
//       <AiFaq />
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

// export default AIServicesPage;

"use client";
import React, { useEffect, useState, useCallback } from "react";
import { ImArrowUp } from "react-icons/im";

import dynamic from "next/dynamic";

const HeroSection = dynamic(() => import("./HeroSection"));
const AIServicesSection = dynamic(() => import("./AIServicesSection"));
const AiFaq = dynamic(() => import("./AiFaq"));
const EcosystemSection = dynamic(() => import("../Reusable/EcosystemSection"));
const Contact = dynamic(() => import("../Reusable/Contact"));
const WhyChooseAi = dynamic(() => import("./WhyChooseAi"));
const WhatWeOfferAi = dynamic(() => import("./WhatWeOfferAi"));
const EcosystemMobile = dynamic(() => import("../Reusable/EcoSystemMobile"));
const AIServicesPage: React.FC = () => {
  const [isMobile, setIsMobile] = useState<boolean>(false);

  // Memoized resize handler to prevent unnecessary re-renders
  const handleResize = useCallback(() => {
    setIsMobile(window.innerWidth < 768);
  }, []);

  useEffect(() => {
    // Set initial screen size
    handleResize();

    // Add resize event listener
    window.addEventListener("resize", handleResize);

    // Cleanup event listener on unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [handleResize]);

  // Function to scroll to top smoothly
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div>
      <HeroSection />
      <AIServicesSection />
      <WhatWeOfferAi />
      <WhyChooseAi />
      {isMobile ? <EcosystemMobile /> : <EcosystemSection />}
      <AiFaq />
      <Contact />
      <button
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 bg-[#BA24D5] cursor-pointer text-white p-3 rounded-full shadow-md  transition"
      >
        <ImArrowUp />
      </button>
    </div>
  );
};

export default AIServicesPage;
