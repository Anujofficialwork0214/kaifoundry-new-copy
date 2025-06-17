"use client";
import { motion } from "framer-motion";

const features = [
  { name: "Immersive", icon: "/svg/people.svg" },
  { name: "Cross-Platform", icon: "/svg/crossPlatform.svg" },
  { name: "Web3-Ready", icon: "/svg/web3.svg" },
  { name: "Optimized", icon: "/svg/optimized.svg" },
  { name: "Customizable", icon: "/svg/personalization.svg" },
  { name: "End-to-End", icon: "/svg/arrowRT.svg" },
];

export default function GameDevelopmentSection() {
  return (
    <section className="relative bg-gradient-to-b from-white to-[#FBE8FF] py-20 lg:py-28 px-8 md:px-16 lg:px-16 ">
      <div className="w-full mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-8">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center md:text-left"
        >
          <h2 className="text-xl md:text-[30px] lg:text-[42px] 2xl:text-[50px]  font-bold text-[#333333] leading-tight">
            Turning <span className="bg-clip-text bg-gradient-to-t from-[#BA24D5] to-[#ea9df6] text-transparent  ">Ideas</span> into{" "}
            <span className="bg-clip-text  bg-gradient-to-t from-[#BA24D5] to-[#ea9df6] text-transparent ">Games</span>
            <br /> That <span className="bg-clip-text  bg-gradient-to-t from-[#BA24D5] to-[#ea9df6] text-transparent ">People</span> Love
          </h2>
          <p className="mt-4 text-base md:text-lg text-[#333333] px-2">
            We create fun, immersive, and high-quality games that keep players
            coming back for more. We bring your vision to life!
          </p>
        </motion.div>

        <div className="md:w-full mx-auto grid grid-cols-2 md:grid-cols-2 items-center gap-8 md:gap-12">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="flex items-center space-x-3"
            >
              {/* <feature.icon className="w-6 h-6 md:w-8 ms:w-8 lg:w-8 lg-w-8  text-[#BA24D5]" /> */}
              <img
                src={feature.icon}
                alt={feature.name}
                  className="w-6 h-6 md:w-12 h:w-12 lg:w-12 lg:h-12 object-contain"
              />
              <span className="text-sm lg:text-lg sm:text-xs font-medium text-[#000000] whitespace-nowrap">
                {feature.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
