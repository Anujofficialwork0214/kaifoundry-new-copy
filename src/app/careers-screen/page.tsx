'use client'
import React from 'react';
import CareersSection from './CareersSection';
import WhyWorkWithUs from './WhyWorkWithUs';
import JobListings from './JobListings';
import WhyWorkWithUsMob from './WhyWorkWithMob';
import CareerSectionMob from './CareerSectionMob'
import { ImArrowUp } from "react-icons/im";
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
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="fixed bottom-6 right-6 bg-[#BA24D5] cursor-pointer text-white p-3 rounded-full shadow-md  transition"
      >
        <ImArrowUp />
      </button>
    </div>
  );
};

export default CareersPage;