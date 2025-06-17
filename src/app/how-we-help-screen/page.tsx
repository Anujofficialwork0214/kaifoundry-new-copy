'use client'
import React from 'react';
import HowWeHelp from './HeroSection';
import FileCoin from './FileCoin';
import SolutionsSection from './SolutionsSection';
import BussinessGrowthMob from './BussinessGrowthMob'
import FileCoinMob from './FileCoinMob';


const HowWeHelpSection: React.FC = () => {
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
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
      <HowWeHelp />
      <BussinessGrowthMob />
      <FileCoin />
      <SolutionsSection />
    </div>
  );
};

export default HowWeHelpSection;