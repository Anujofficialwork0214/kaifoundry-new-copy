'use client';
import { useState } from "react";
import { motion } from "framer-motion";

const solutions = [
  {
    title: "Custom Exchange",
    description: "A fully tailored trading platform designed to meet your specific business needs."
  },
  {
    title: "White Label Exchange",
    description: " A ready-made, customizable exhange solution for quick market entry."
  },
  {
    title: "Margin Trading Exchange",
    description: "Enable margin trading for increased trading opportunities."
  },
  {
    title: "Decentralized Exchange",
    description: "A trustless, peer-to-peer trading platform with enhanced security."
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
      <h2 className="text-[24px] lg:text-[62px] font-semibold text-black text-center px-4 md:px-10">
      <span className="bg-clip-text lg:text-transparent bg-gradient-to-t from-[#BA24D5] to-[#ea9df6] text-[#BA24D5]">Solutions  </span>  Built For <span className="bg-clip-text lg:text-transparent bg-gradient-to-t from-[#BA24D5] to-[#ea9df6] text-[#BA24D5]">The Future</span>
      </h2>
      <p className="text-[#666666] lg:text-[#333333]  mt-2 text-center px-4 md:px-70  text-[14px] lg:text-[22px] font-[400]">
        Blockchain solutions designed to power your business with security, <br /> efficiency, and scalability.
      </p>

      {/* List of Solutions */}
      <div className="mt-8 w-full flex flex-col space-y-0 py-4">
        {solutions.map((solution, index) => (
          <div key={index} className="relative w-full px-0  md:px-40 " > 
          
            <div
              className="relative overflow-hidden text-2xl w-full    cursor-pointer md:text-3xl font-semibold" 
              style={{ color: '#BA24D5', padding: '2rem 0' ,

                
              }} 
              onMouseEnter={() => setHoverIndex(index)}
              onMouseLeave={() => setHoverIndex(null)}
              onClick={() => setSelectedSolution(selectedSolution === index ? null : index)} // Toggle selection
             
            >
              {/* {hoverIndex === index && selectedSolution !== index && (
                <motion.div
                  initial={{ 
                    y: '10%',
                    opacity: 0,
                    scale: 0.5
                  }}
                  animate={{ 
                    y: '-50%',
                    x:'200%',
                    opacity: 1,
                    scale: 2.5
                  }}
                  exit={{ 
                    y: '100%',
                    opacity: 0
                  }}
                  transition={{ 
                    duration: 1,
                    ease: [0.16, 1, 0.3, 1]
                  }}
                  className="absolute top-1/2 left-0 w-64 h-64 rounded-full z-0"
                  style={{
                    background: 'radial-gradient(circle, #F6D0FE 0%, #D7CDFF 100%)',
                    filter: 'blur(40px)',
                    transformOrigin: 'center'
                  }}
                />
              )} */}
              {hoverIndex === index && selectedSolution !== index && (
                <motion.div
                  initial={{ 
                    y: '100%',
                    opacity: 0,
                    scale: 0.8
                  }}
                  animate={{ 
                    y: '50%',
                    x:'-50%',
                    opacity: 1,
                    scale: 2.5
                  }}
                  transition={{ 
                    duration: 1.2, 
                    ease: [0.2, 0, 0, 1] 
                  }}
                  className="absolute bottom-0 left-1/2 w-80 h-80 rounded-full z-0"
                  style={{
                    background: 'radial-gradient(circle, #F6D0FE 0%, #D7CDFF 70%)',
                    filter: 'blur(50px)',
                    transform: 'translateX(-30%)'
                  }}
                />
              )}
              {selectedSolution === index && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  className="absolute top-0 left-0 mb-0 w-full h-full cursor-pointer z-0"
                  style={{
                    background: 'linear-gradient(90deg, #F6D0FE 0%, #D7CDFF 100%)',
                  }}
                />
              )}
              
              <span className="relative z-10 text-[18px] px-4 lg:px-6 lg:text-[24px] font-[600] text-[#BA24D5] block w-full">
                {index + 1}. {solution.title}
              </span>

              {/* Always Visible Bottom Border Line */}
             
            </div>

            {/* Description Section (Smooth Slide Down) */}
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={selectedSolution === index ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="overflow-hidden  " // Removed border
              style={{background: 'linear-gradient(90deg, #F6D0FE 0%, #D7CDFF 100%)',}}
            >
              <div className="p-4 text-left"> {/* Added text-left for description */}
                
                <p className="text-gray-700 mt-2 px-4 lg:px-6 text-base md:text-2xl"> {/* Increased text size */}
                  {solution.description}
                </p>
              </div>
            </motion.div>
            <div className="absolute bottom-0 h-[0.6px] lg:h-[1px] w-full lg:w-[79%]" style={{ backgroundColor: '#BA24D5' }} /> {/* Line at the bottom */}
          </div>
        ))}
      </div> 
    </div>
  );
};

export default SolutionsSection;