'use client';
import { useState } from "react";
import { motion } from "framer-motion";

const solutions = [
  {
    title: "Custom Exchange",
    description: "Tailored solutions to meet your specific trading needs."
  },
  {
    title: "White Label Exchange",
    description: "Launch your own exchange with our white label solutions."
  },
  {
    title: "Margin Trading Exchange",
    description: "Enable margin trading for increased trading opportunities."
  },
  {
    title: "Decentralized Exchange",
    description: "Trade directly from your wallet with our DEX solutions."
  },
  {
    title: "Arbitrage Bots",
    description: "Automated tools that capitalize on price differences across multiple exchanges."
  },
  {
    title: "Derivatives Exchange",
    description: "A platform for trading futures, options, and other financial instruments."
  },
  {
    title: "Centralized Exchange ",
    description: "A regulated, high-liquidity exchange with seamless trading experiences."
  },
  {
    title: "P2P Exchange ",
    description: "A direct buyer-to-seller trading platform with secure escrow services."
  },
  {
    title: "Market Making Exchange ",
    description: "A liquidity-optimized exchange ensuring smooth and efficient trading."
  },
];

const SolutionsSection = () => {
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);
  const [selectedSolution, setSelectedSolution] = useState<number | null>(null);

  return (
    <div className="py-12 w-full">
      {/* Title */}
      <h2 className="text-4xl md:text-6xl font-semibold text-black text-center px-4 md:px-10">
      <span style={{ color: '#BA24D5' }}>Solutions  </span>  Built For <span style={{ color: '#BA24D5' }}>The Future</span>
      </h2>
      <p className="text-[#333333] mt-2 text-center px-4 md:px-70  text-base md:text-[22px] font-[400]">
        Blockchain solutions designed to power your business with security, <br /> efficiency, and scalability.
      </p>

      {/* List of Solutions */}
      <div className="mt-8 w-full flex flex-col space-y-4 ">
        {solutions.map((solution, index) => (
          <div key={index} className="relative w-full px-4 md:px-40 "> {/* Added consistent padding here */}
            <div
              className="relative overflow-hidden text-2xl md:text-3xl font-semibold" 
              style={{ color: '#BA24D5', padding: '2rem 0' }} // Set text color and padding
              onMouseEnter={() => setHoverIndex(index)}
              onMouseLeave={() => setHoverIndex(null)}
              onClick={() => setSelectedSolution(selectedSolution === index ? null : index)} // Toggle selection
            >
              {/* Background Hover Effect (Expands from both sides) */}
              <motion.div
                initial={{ width: 0, left: "50%" }}
                animate={hoverIndex === index ? { width: "100%", left: "0%" } : { width: 0, left: "50%" }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="absolute top-0 h-full"
                style={{
                  backgroundColor: '#F6D0FE',
                  opacity: 0.25,
                  backdropFilter: 'blur(80px)', // Adjust the blur value as needed
                }} // Light background color for hover effect
              />
              
              <span className="relative z-10 block w-full">
                {index + 1}. {solution.title}
              </span>

              {/* Always Visible Bottom Border Line */}
              <div className="absolute bottom-0 h-0.5" style={{ backgroundColor: '#BA24D5', width: '100%' }} /> {/* Line at the bottom */}
            </div>

            {/* Description Section (Smooth Slide Down) */}
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={selectedSolution === index ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="overflow-hidden bg-purple-50 rounded-lg" // Removed border
            >
              <div className="p-4 text-left"> {/* Added text-left for description */}
                
                <p className="text-gray-700 mt-2 text-base md:text-2xl"> {/* Increased text size */}
                  {solution.description}
                </p>
              </div>
            </motion.div>
          </div>
        ))}
      </div> 
    </div>
  );
};

export default SolutionsSection;