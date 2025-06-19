'use client'
import React from "react";
import Home from "./Home";
import FeaturesSection from "./Features";
import CoreValuesSection from "./Core";
import FounderSection from "./Founder";
import { ImArrowUp } from "react-icons/im";


const WhoAreWePage: React.FC = () => {

  return (
    <div>
      <Home />
      <FeaturesSection />
      <CoreValuesSection />
      <FounderSection />
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="fixed bottom-6 right-6 bg-[#BA24D5] cursor-pointer text-white p-3 rounded-full shadow-md  transition"
      >
        <ImArrowUp />
      </button>
    </div>
  );
};

export default WhoAreWePage;