"use client";

import React from "react";
import { motion } from "framer-motion";
import { Manrope } from "next/font/google";
import { useEffect, useState } from "react";

// Define the type for services
type Service = {
  title: string;
  description: string;
};

type ServicesProps = {
  services: Service[];
  heading?: string;
  subheading?: string;

  suffixText?: string;
  breakHeading?: string;
};
const manrope = Manrope({
  subsets: ["latin"],
});

const Services: React.FC<ServicesProps> = ({
  services,
  heading = "",
  subheading = "",

  suffixText = "",
  breakHeading = "",
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
    <section
      className="py-20 bg-white relative top-0"
      style={{
        backgroundImage: `url('/assets/background/bg2.gif')`,
        backgroundSize: "cover",
        backgroundPosition: "left",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="mx-auto px-6 md:px-12 text-center">
        {/* Heading */}
        <motion.h2
          className="text-2xl md:text-6xl text-[#333333] font-semibold font-roboto  mb-20 "
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          {suffixText} <span className="text-[#BA24D5]">{heading} </span>
          {subheading}
          <br />
          {breakHeading}
        </motion.h2>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
          {services.map((service, index) => (
            <motion.div
            key={index}
            className="relative pt-2 pl-0  lg:p-4 lg:pl-0 mb-6 max-w-100 mx-auto bg-transparent"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            {/* Animated top line */}
            <motion.div
              className="absolute top-0 left-0 h-[2px] bg-[#D444F1]"
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            />
          
            <h3
              className={`text-[18px] md:text-2xl font-semibold text-left text-[#0E0E0E] ${manrope.className}`}
            >
              {service.title}
            </h3>
            <p
              className="text-[#575656] mt-3 text-left text-sm md:text-base"
              style={{ fontFamily }}
            >
              {service.description}
            </p>
          </motion.div>
          
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
