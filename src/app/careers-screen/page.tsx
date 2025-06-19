'use client'
import React from 'react';
import CareersSection from './CareersSection';
import WhyWorkWithUs from './WhyWorkWithUs';
import JobListings from './JobListings';
import WhyWorkWithUsMob from './WhyWorkWithMob';
import CareerSectionMob from './CareerSectionMob'

const CareersPage: React.FC = () => {
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
      {isMobile ? <CareerSectionMob /> : <CareersSection />}
      {isMobile ? <WhyWorkWithUsMob /> : <WhyWorkWithUs />}
      <JobListings />
      
    </div>
  );
};

export default CareersPage;