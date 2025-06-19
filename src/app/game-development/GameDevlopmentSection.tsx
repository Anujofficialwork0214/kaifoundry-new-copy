"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const features = [
  { name: "Immersive", icon: "/immersive.svg" },
  { name: "Cross-Platform", icon: "/svg/crossPlatform.svg" },
  { name: "Web3-Ready", icon: "/svg/web3.svg" },
  { name: "Optimized", icon: "/svg/optimized.svg" },
  { name: "Customizable", icon: "/svg/personalization.svg" },
  { name: "End-to-End", icon: "/svg/arrowRT.svg" },
];

export default function GameDevelopmentSection() {
  return (
    <section className="relative bg-gradient-to-b from-white to-[#FBE8FF] py-20 lg:py-28 px-8 md:px-16 lg:px-12 ">
      <div className="w-full mx-auto grid grid-cols-1 md:grid-cols-[55%_45%] items-center gap-8">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center md:text-left"
        >
          <h2 className="md:text-xl lg:text-5xl 2xl:text-[53px] font-semibold leading-tight text-[#333333] ">
            Turning <span className="bg-color">Ideas</span> into{" "}
            <span className="bg-color ">Games</span>
            <br /> That <span className="bg-color ">People</span> Love
          </h2>
          <p className="mt-4 text-[12px] md:text-lg 2xl:text-[22px] lg:p-2 font-[400] text-[#333333] px-2">
            We create fun, immersive, and high-quality games that keep players
            coming back for more. We bring your vision to life!
          </p>
        </motion.div>

        <div className="md:w-full mx-auto grid grid-cols-2 md:grid-cols-2 items-center gap-8 md:gap-12 lg:px-10">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="flex items-center space-x-3"
            >
              {/* <feature.icon className="w-6 h-6 md:w-8 ms:w-8 lg:w-8 lg-w-8  text-[#BA24D5]" /> */}
              <Image
                src={feature.icon}
                alt={feature.name}
                width={6}
                height={6}
              className="w-6 h-6 md:w-10 h:w-10 lg:w-10 lg:h-10 object-contain"
                priority={true}
              />
              <span className="text-sm lg:text-[16px] sm:text-xs font-medium text-[#000000] whitespace-nowrap">
                {feature.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
