'use client'
import React from "react";
import Home from "./Home";
import FeaturesSection from "./Features";
import CoreValuesSection from "./Core";
import FounderSection from "./Founder";



const WhoAreWePage: React.FC = () => {

  return (
    <div>
      <Home />
      <FeaturesSection />
      <CoreValuesSection />
      <FounderSection />
      
    </div>
  );
};

export default WhoAreWePage;