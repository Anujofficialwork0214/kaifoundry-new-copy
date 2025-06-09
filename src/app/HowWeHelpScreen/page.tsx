
// 'use client'
// import React from 'react';
// import HowWeHelp from './HeroSection';
// import BusinessGrowth from './BusinessGrowthSection';
// import HeroSection2 from './Hero2';
// import SolutionsSection from './SolutionsSection';

// // Import mobile versions of the components
// import HowWeHelpMob from './../MobileView/HowWeHelpScreen/HeroSection'; // Mobile version
// import BusinessGrowthMob from './../MobileView/HowWeHelpScreen/BusinessGrowthSection'; // Mobile version
// import HeroSection2Mob from './../MobileView/HowWeHelpScreen/Hero2'; // Mobile version
// import SolutionsSectionMob from './../MobileView/HowWeHelpScreen/SolutionsSection'; // Mobile version

// const HowWeHelpSection: React.FC = () => {
//   const [isMobile, setIsMobile] = React.useState(false);

//   React.useEffect(() => {
//     const handleResize = () => {
//       setIsMobile(window.innerWidth < 768); // Adjust the breakpoint as needed
//     };

//     handleResize(); // Check on initial load
//     window.addEventListener("resize", handleResize); // Add event listener

//     return () => {
//       window.removeEventListener("resize", handleResize); // Cleanup
//     };
//   }, []);

//   return (
//     <div>
//       {isMobile ? <HowWeHelpMob /> : <HowWeHelp />}
//       {isMobile ? <BusinessGrowthMob /> : <BusinessGrowth />}
//       {isMobile ? <HeroSection2Mob /> : <HeroSection2 />}
//       {isMobile ? <SolutionsSectionMob /> : <SolutionsSection />}
//     </div>
//   );
// };

// export default HowWeHelpSection;



'use client'
import React from 'react';
import HowWeHelp from './HeroSection';
import BusinessGrowth from './BusinessGrowthSection';
import FileCoin from './FileCoin';
import SolutionsSection from './SolutionsSection';
import BussinessGrowthMob from './BussinessGrowthMob'
import FileCoinMob from './FileCoinMob';
// // Import mobile versions of the components
// import HowWeHelpMob from './../MobileView/HowWeHelpScreen/HeroSection'; // Mobile version
// import BusinessGrowthMob from './../MobileView/HowWeHelpScreen/BusinessGrowthSection'; // Mobile version
// import HeroSection2Mob from './../MobileView/HowWeHelpScreen/Hero2'; // Mobile version
// import SolutionsSectionMob from './../MobileView/HowWeHelpScreen/SolutionsSection'; // Mobile version

const HowWeHelpSection: React.FC = () => {
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // Adjust the breakpoint as needed
    };

    handleResize(); // Check on initial load
    window.addEventListener("resize", handleResize); // Add event listener

    return () => {
      window.removeEventListener("resize", handleResize); // Cleanup
    };
  }, []);

  return (
    <div>
    <HowWeHelp />
       {isMobile ? <BussinessGrowthMob /> : <BusinessGrowth />}
   {isMobile ? <FileCoinMob/> : <FileCoin/>}
     <SolutionsSection />
    </div>
  );
};

export default HowWeHelpSection;