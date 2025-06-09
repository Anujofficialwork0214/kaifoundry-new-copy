"use client";
import React from "react";
import { motion } from "framer-motion";

type Feature = {
  icon: string;
  title: string;
  description: string;
};

type WhyChooseUsProps = {
  features: Feature[];
  heading?: string;
  highlightText?: string;
  backgroundColor?: string;
  suffixText?: string; 
};

const WhyChooseUs: React.FC<WhyChooseUsProps> = ({
  features,
  heading = "Why",
  highlightText = "Choose",
  backgroundColor = "bg-[#FBE8FF]",
  suffixText = "Us?", 
}) => {
  return (
    <section className={`py-44 ${backgroundColor}`}>
      <div className="container mx-auto px-6 md:px-12 text-center">
        {/* Heading */}
        <motion.h2
          className="text-[24px] md:text-4xl xl:text-5xl font-roboto font-bold text-[#000000]"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {heading}{" "}
          <span className="text-[#BA24D5]">{highlightText}</span>{" "}
          {suffixText}
        </motion.h2>

  {/* desktop */}

<div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16 ">
  {features.map((feature, index) => (
    <motion.div
      key={index}
      className=" py-20 px-4 bg-white h-full "
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      viewport={{ once: true }}
    >
      <div className="flex items-center justify-center w-24 h-24 mx-auto mb-6 bg-[#BA24D5] rounded-full">
        <img
          src={feature.icon}
          alt={feature.title}
          className="w-8 h-8 md:w-10 md:h-10 object-contain"
          draggable="false"
        />
      </div>
      <h3 className="text-xl font-semibold text-gray-900">{feature.title}</h3>
      <p className="text-gray-600 mt-4 text-[14px]">{feature.description}</p>
    </motion.div>
  ))}
</div>

{/* mobile */}
<div className="grid grid-cols-2 gap-4 mt-10 md:hidden">
  {features.map((feature, index) => (
    <motion.div
      key={index}
      className="p-4 bg-white flex flex-col justify-center items-center shadow-md"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      viewport={{ once: true }}
    >
      <div className="flex items-center justify-center w-20 h-20 mb-4 bg-[#D444F1] rounded-full">
        <img
          src={feature.icon}
          alt={feature.title}
          className="w-12 h-12 object-contain"
          draggable="false"
        />
      </div>
      <h3 className="text-sm font-semibold text-[#434343] text-center font-roboto">
        {feature.title}
      </h3>
      <p className="text-[#666666] mt-2 text-xs text-center font-roboto font-normal">
        {feature.description}
      </p>
    </motion.div>
  ))}
</div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
