"use client";

import React from "react";
import { motion, useInView } from "framer-motion";
import { Manrope } from "next/font/google";
import { useEffect, useState, useRef } from "react";



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
  const headingRef = useRef(null);
  const isInView = useInView(headingRef, { once: true, amount: 0.5 });
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
      <div className="text-center">
        {/* Heading */}
        <motion.h2
          ref={headingRef}
          className="text-[24px] md:text-5xl xl:text-[45px] text-[#333333] font-medium lg:py-10 lg:px-0   py-0  mb-20 "
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          {suffixText} <span className="bg-color font-[600]">{heading} </span>
          {subheading}
          <br />
          {breakHeading}
        </motion.h2>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12 px-6 lg:px-0">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="relative pt-2 pl-0  lg:py-4  lg:pl-0 lg:mb-10 mb-6 max-w-100 mx-auto bg-transparent"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.1 }}
              viewport={{ once: true }}
            >

              <motion.div
                className="absolute top-0 left-0 h-[2px] bg-[#D444F1] lg:mb-0"
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                transition={{
                  ease: [0.25, 0.1, 0.25, 1],
                  duration: 0.5
                }}
                viewport={{ once: true }}
              />


              <h3
                className={`text-[18px] md:text-2xl font-semibold text-left mt-2 text-[#0E0E0E]  `}
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
