"use client";

import { motion } from "framer-motion";

const benefits = [
  {
    title: "Career Growth",
    description: "Learn, Upskill, And Advance In A Fast-Moving Industry.",
  },
  {
    title: "Innovate With Impact",
    description: "Build Cutting-Edge Blockchain Solutions That Shape The Future.",
  },
  {
    title: "Fun, Not Just Work",
    description: "A Team That Actually Enjoys Working Together.",
  },
  {
    title: "Competitive Pay & Perks",
    description: "Get Rewarded Well For Your Skills, With Great Benefits And Growth Opportunities.",
  },
  {
    title: "Ownership",
    description: "Take Charge Of Meaningful Projects And Make Real Decisions.",
  },
  {
    title: "Work With Experts",
    description: "Collaborate With Top Minds In Blockchain, AI, And Tech.",
  },
];

const WhyWorkWithUs = () => {
  return (
    <section className="py-20 bg-white text-center">
      <div className="container mx-auto px-6">
        {/* Title */}
        <motion.h2
          className="text-[24px] md:text-5xl xl:text-[45px] font-[600] text-[#333333]"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Why <span className="bg-color text-[24px] md:text-5xl xl:text-[45px] ">Work</span> With Us
        </motion.h2>

        {/* Benefits Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-20 mt-10 mx-auto py-10  w-[85%]">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              className="flex items-start text-left p-4 bg-transparent"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="w-[2px]  mr-3" style={{ height: 'calc(100% + 10px)', backgroundColor: '#D444F1' }}></div>
              <div>
                <h3 className="text-[19px] font-[600] text-[#333333]">{benefit.title}</h3>
                <p className="text-[14px] font-[400] text-[#333333] mt-3">{benefit.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyWorkWithUs;