'use client';

import React from 'react';
import { motion } from 'framer-motion';

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

const Services: React.FC<ServicesProps> = ({
  services,
  heading = '',
  subheading = '',

  suffixText = "", 
   breakHeading="",
}) => {
  return (
    <section
      className="py-20 bg-white relative"
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
          className="text-2xl md:text-5xl text-[#333333] font-semibold font-roboto mb-20"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
           {suffixText}{" "}
          <span className="text-[#BA24D5]">{heading} </span> 
            {subheading}
          <br />
        
          {breakHeading}
 


        </motion.h2>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="p-4 border-t-2 mb-6 max-w-100 mx-auto"
              style={{ borderColor: "#D444F1" }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-[18px] md:text-2xl  font-semibold text-left text-[#0E0E0E]">
                {service.title}
              </h3>
              <p className="text-[#575656] mt-3 text-left text-sm md:text-base font-manrope ">
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
