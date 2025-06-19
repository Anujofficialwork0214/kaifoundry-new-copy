"use client";
import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";

const HeroSection = dynamic(() => import("./hero-section/Page"), {
  ssr: false,
});
const HeroSectionMob = dynamic(
  () => import("./hero-section/HeroSectionMobile"),
  { ssr: false }
);
const WhatWeProvide = dynamic(() => import("./hero-section/WhatWeProvide"), {
  ssr: false,
});
const WhatWeOffer = dynamic(() => import("./hero-section/WhatWeOffer"), {
  ssr: false,
});
const WhyChooseHero = dynamic(() => import("./hero-section/WhyChooseHome"), {
  ssr: false,
});
const EcosystemSection = dynamic(() => import("./Reusable/EcosystemSection"), {
  ssr: false,
});
const EcosystemMobile = dynamic(() => import("./Reusable/EcoSystemMobile"), {
  ssr: false,
});
const AnimatedSection = dynamic(
  () => import("./hero-section/AnimatedImageCard"),
  { ssr: false }
);
const AnimatedSectionMob = dynamic(
  () => import("./hero-section/AnimatedImageMobile"),
  { ssr: false }
);
const CoolStuff = dynamic(() => import("./hero-section/CoolStuff"), {
  ssr: false,
});
const CoolStuffMob = dynamic(() => import("./hero-section/CoolStuffMob"), {
  ssr: false,
});
const FaqHome = dynamic(() => import("./hero-section/FaqHome"), { ssr: false });
const Contact = dynamic(() => import("./Reusable/Contact"), { ssr: false });

const Page = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize(); // initial check
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      {/* {isMobile ? <HeroSectionMob /> : <HeroSection />} */}
      <HeroSection />
      <WhatWeProvide />
      <WhatWeOffer />
      <WhyChooseHero />
      {isMobile ? <EcosystemMobile /> : <EcosystemSection />}
      {isMobile ? <AnimatedSectionMob /> : <AnimatedSection />}
      {isMobile ? <CoolStuffMob /> : <CoolStuff />}
      <FaqHome />
      <Contact />
      
    </>
  );
};

export default Page;
