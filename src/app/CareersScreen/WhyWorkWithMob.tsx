"use client";

import { motion } from "framer-motion";

const benefits = [
  {
    title: "Competitive Pay & Perks",
    description: "Get Rewarded Well For Your Skills, With Great Benefits And Growth Opportunities.",
  },
  {
    title: "Career Growth",
    description: "Learn, Upskill, And Advance In A Fast-Moving Industry.",
  },
  {
    title: "Ownership",
    description: "Take Charge Of Meaningful Projects And Make Real Decisions.",
  },
  {
    title: "Innovate With Impact",
    description: "Build Cutting-Edge Blockchain Solutions That Shape The Future.",
  },
  {
    title: "Work With Experts",
    description: "Collaborate With Top Minds In Blockchain, AI, And Tech.",
  },
  {
    title: "Fun, Not Just Work",
    description: "A Team That Actually Enjoys Working Together.",
  },
];

const WhyWorkWithUs = () => {
  return (
    <section className="py-2 lg:py-20 bg-white text-center">
      <div className="container mx-auto px-6">
        {/* Title */}
        <motion.h2 
          className="text-[24px] font-[700] text-[#333333]"
          initial={{ opacity: 0, y: 50 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
         Why <span style={{ color: '#D444F1' }}>Work</span> With Us
        </motion.h2>

        {/* Benefits Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-10 mx-auto max-w-6xl ">
          {benefits.map((benefit, index) => (
            <motion.div
            key={index}
            className="flex items-start justify-start text-left bg-transparent"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <div className="relative pl-4">
  <div className="absolute left-0 top-0 bottom-0 w-[1.5px] h-[60px] bg-[#D444F1] rounded-full" />
  <div className="flex flex-col gap-2">
    <h3 className="text-[16px] font-semibold text-[#333333]">
      {benefit.title}
    </h3>
    <p className="text-[12px] font-normal text-[#808080]">
      {benefit.description}
    </p>
  </div>
</div>

          </motion.div>
          
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyWorkWithUs;