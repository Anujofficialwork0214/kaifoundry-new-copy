'use client';
import React, { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
const HeroSection = dynamic(() => import('./HeroSection/Page'), { ssr: false });
const HeroSectionMob = dynamic(() => import('./HeroSection/HeroSectionMobile'), { ssr: false });
const WhatWeProvide = dynamic(() => import('./HeroSection/WhatWeProvide'), { ssr: false });
const WhatWeOffer = dynamic(() => import('./HeroSection/WhatWeOffer'), { ssr: false });
const WhyChooseHero = dynamic(() => import('./HeroSection/WhyChooseHome'), { ssr: false });
const EcosystemSection = dynamic(() => import('./Reusable/EcosystemSection'), { ssr: false });
const EcosystemMobile = dynamic(() => import('./Reusable/EcoSystemMobile'), { ssr: false });
const AnimatedSection = dynamic(() => import('./HeroSection/AnimatedImageCard'), { ssr: false });
const AnimatedSectionMob = dynamic(() => import('./HeroSection/AnimatedImageMobile'), { ssr: false });
const CoolStuff = dynamic(() => import('./HeroSection/CoolStuff'), { ssr: false });
const CoolStuffMob = dynamic(() => import('./HeroSection/CoolStuffMob'), { ssr: false });
const FaqHome = dynamic(() => import('./HeroSection/FaqHome'), { ssr: false });
const Contact = dynamic(() => import('./Reusable/Contact'), { ssr: false });

const Page = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize(); // initial check
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
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
