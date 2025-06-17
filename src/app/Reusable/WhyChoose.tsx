"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

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
  const [fontFamily, setFontFamily] = useState("Inter, sans-serif");

  useEffect(() => {
    if (typeof window !== "undefined") {
      setFontFamily(
        window.innerWidth >= 768 ? "Manrope, sans-serif" : "Inter, sans-serif"
      );
    }
  }, []);
  return (
    <section className={` py-20 lg:py-44 px-0 lg:px-14 ${backgroundColor} `}>
      <div className=" px-6 md:px-0 text-center">
        {/* Heading */}
        <motion.h2
          className="text-[24px] md:text-5xl 2xl:text-6xl font-roboto font-bold text-[#000000]"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {heading} <span className="bg-color">{highlightText}</span>{" "}
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
              <div className="flex items-center justify-center w-28 h-28 mx-auto mb-6 bg-[#BA24D5] rounded-full">
                <Image
                  src={feature.icon}
                  alt={feature.title}
                  width={8}
                  height={8}
                  className="w-8 h-8 md:w-14 md:h-14 object-contain"
                  draggable="false"
                />
              </div>
              <h3 className="text-xl font-semibold lg:font-bold lg:text-[21px] text-center text-gray-900">
                {feature.title}
              </h3>
              <p className="text-black mt-10 text-[14px] lg:text-[14.6px]">
                {feature.description}
              </p>
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
                <Image
                  src={feature.icon}
                  alt={feature.title}
                  width={10}
                  height={10}
                  className="w-10 h-10 md:w-12 md:h-12 lg:w-12 lg:h-12 object-contain"
                  draggable="false"
                />
              </div>
              <h3
                className="text-sm font-semibold text-[#434343] text-center"
                style={{ fontFamily }}
              >
                {feature.title}
              </h3>
              <p
                className="text-[#666666] mt-2 text-xs text-center  font-normal"
                style={{ fontFamily }}
              >
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
