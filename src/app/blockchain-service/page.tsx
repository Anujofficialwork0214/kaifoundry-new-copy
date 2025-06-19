"use client";

import React from "react";
import { useEffect, useState } from "react";
import HeroSection from "./HeroSection";
import BlockchainSection from "./BlockChainSection";
import WhyChooseBlock from "./WhyChooseBlock";
import EcosystemSection from "../Reusable/EcosystemSection";
import BlockFaq from "./BlockFaq";
import Contact from "../Reusable/Contact";
import WhatWeOfferBlock from "./WhatweOfferBlock";
import EcosystemMobile from "../Reusable/EcoSystemMobile";
import { ImArrowUp } from "react-icons/im";

const BlockChainServicePage: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
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
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="fixed bottom-6 right-6 bg-[#BA24D5] cursor-pointer text-white p-3 rounded-full shadow-md  transition"
      >
        <ImArrowUp />
      </button>
    </div>
  );
};

export default BlockChainServicePage;
