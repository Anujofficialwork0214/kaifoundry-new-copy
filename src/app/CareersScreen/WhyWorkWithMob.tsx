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
          className="text-[24px] md:text-4xl lg:text-5xl font-bold text-gray-900"
          initial={{ opacity: 0, y: 50 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
         Why <span style={{ color: '#D444F1' }}>Work</span> With Us
        </motion.h2>

        {/* Benefits Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mt-10 mx-auto max-w-6xl ">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              className="flex items-start justify-start text-left p-4 bg-transparent"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="w-[3px]  h-14 lg:h-16 mr-3" style={{ backgroundColor: '#D444F1' }}></div>
              <div className="flex flex-col items-start gap-4 justify-start -mt-2">
                <h3 className="text-[16px] font-[600] md:text-2xl text-[#333333]">{benefit.title}</h3>
                <p className="text-[12px] md:text-base text-[#808080] ">{benefit.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyWorkWithUs;