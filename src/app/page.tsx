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
    </>
  );
};

export default Page;
