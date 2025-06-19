"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";

interface FAQItemProps {
  question: string;
  answer: string;
}

const FaqItem: React.FC<FAQItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      initial={{
        borderBottomWidth: 0,
        borderColor: "rgba(209, 213, 219, 0.4)",
      }}
      animate={{
        borderBottomWidth: isOpen ? 1.5 : 1,
        borderColor: isOpen ? "rgba(209, 213, 219, 0.4)" : "#000000",
      }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className="border-gray-300"
    >
      <button
        className="w-full flex justify-between items-center py-4 text-left text-[#414141] font-[500] text-[14px] lg:text-[20px] font-inter"
        onClick={() => setIsOpen(!isOpen)}
      >
        {question}
        <motion.div
          animate={{ rotate: isOpen ? 90 : 0 }} // Smooth rotation
          transition={{ duration: 0.5, ease: "easeInOut" }} // Smooth transition
          className="cursor-pointer"
        >
          {/* <FiChevronRight className="text-[18px] font-bold h-12 w-6  md:text-xl lg:text-xl text-[#414141] cursor-pointer" /> */}
          <svg
            width="21"
            height="21"
            viewBox="0 0 21 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11.7214 11.8015L5.96484 6.04497L7.71684 4.29297L15.2254 11.8015L7.71684 19.3101L5.96484 17.5581L11.7214 11.8015Z"
              fill="#414141"
            />
          </svg>
        </motion.div>
      </button>

      {/* Animate the answer section */}
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
        exit={{ height: 0, opacity: 0 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="overflow-hidden"
      >
        <p className="text-[#414141] pb-4 text-[14px] font-medium md:text-[15px] lg:text-[15px]">
          {" "}
          {/* Increased font size to text-xl */}
          {answer}
        </p>
      </motion.div>
    </motion.div>
  );
};

export default FaqItem;
