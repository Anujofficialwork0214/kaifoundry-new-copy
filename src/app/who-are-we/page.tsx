
// 'use client'
// import React from "react";
// import Home from "./Home";
// import FeaturesSection from "./Features";
// import CoreValuesSection from "./Core";
// import FounderSection from "./Founder";
// import { ImArrowUp } from "react-icons/im";

// const WhoAreWePage: React.FC = () => {

//   return (
//     <div>
//       <Home />
//       <FeaturesSection />
//       <CoreValuesSection />
//       <FounderSection />
//       <button
//         onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
//         className="fixed bottom-6 right-6 bg-[#BA24D5] cursor-pointer text-white p-3 rounded-full shadow-md  transition"
//       >
//         <ImArrowUp />
//       </button>
//     </div>
//   );
// };

// export default WhoAreWePage;

"use client";
import React, { useCallback } from "react";
import dynamic from "next/dynamic";
import { ImArrowUp } from "react-icons/im";


// Dynamically import the sections
const Home = dynamic(() => import("./Home"));
const FeaturesSection = dynamic(() => import("./Features"));
const CoreValuesSection = dynamic(() => import("./Core"));
const FounderSection = dynamic(() => import("./Founder"));

// ScrollToTopButton component for handling the scroll functionality
const ScrollToTopButton: React.FC = () => {
  const handleScrollToTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <button
      onClick={handleScrollToTop}
      className="fixed bottom-6 right-6 bg-[#BA24D5] cursor-pointer text-white p-3 rounded-full shadow-md transition"
    >
      <ImArrowUp />
    </button>
  );
};

const WhoAreWePage: React.FC = () => {
  return (
    <div>
      <Home />
      <FeaturesSection />
      <CoreValuesSection />
      <FounderSection />

      <ScrollToTopButton />

    </div>
  );
};

export default WhoAreWePage;
