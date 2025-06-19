// "use client";

// import React from "react";
// import { useEffect, useState } from "react";
// import HeroSection from "./HeroSection";
// import BlockchainSection from "./BlockChainSection";
// import WhyChooseBlock from "./WhyChooseBlock";
// import EcosystemSection from "../Reusable/EcosystemSection";
// import BlockFaq from "./BlockFaq";
// import Contact from "../Reusable/Contact";
// import WhatWeOfferBlock from "./WhatweOfferBlock";
// import EcosystemMobile from "../Reusable/EcoSystemMobile";
// import { ImArrowUp } from "react-icons/im";

// const BlockChainServicePage: React.FC = () => {
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
//       <WhatWeOfferBlock />
//       <WhyChooseBlock />
//       {isMobile ? <EcosystemMobile /> : <EcosystemSection />}
//       <BlockFaq />
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

// export default BlockChainServicePage;

"use client";


import React, { useState, useEffect, useCallback } from "react";
import dynamic from "next/dynamic";
import { ImArrowUp } from "react-icons/im";


// Dynamically import the components
const HeroSection = dynamic(() => import("./HeroSection"));
const BlockchainSection = dynamic(() => import("./BlockChainSection"));
const WhyChooseBlock = dynamic(() => import("./WhyChooseBlock"));
const EcosystemSection = dynamic(() => import("../Reusable/EcosystemSection"));
const BlockFaq = dynamic(() => import("./BlockFaq"));
const Contact = dynamic(() => import("../Reusable/Contact"));
const WhatWeOfferBlock = dynamic(() => import("./WhatweOfferBlock"));
const EcosystemMobile = dynamic(() => import("../Reusable/EcoSystemMobile"));

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

const BlockChainServicePage: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize(); // Initial check
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div>
      <HeroSection />
      <BlockchainSection />
      <WhatWeOfferBlock />
      <WhyChooseBlock />
      {isMobile ? <EcosystemMobile /> : <EcosystemSection />}
      <BlockFaq />
      <Contact />

      <ScrollToTopButton />

    </div>
  );
};

export default BlockChainServicePage;
