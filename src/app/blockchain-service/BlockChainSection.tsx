"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const features = [
  {
    name: "Scalability",
    icon: "/svg/scalability.svg",
  },
  {
    name: "Transparency",
    icon: "/svg/transparancy.svg",
  },
  {
    name: "Security & Trust",
    icon: "/svg/security.svg",
  },
  {
    name: "Decentralization",
    icon: "/svg/people.svg",
  },
  {
    name: "Innovation",
    icon: "/svg/innovation.svg",
  },

  {
    name: "Automation",
    icon: "/svg/tabler_automation.svg",
  },
];

export default function BlockchainSection() {
  return (
    <section className="relative bg-gradient-to-b from-white to-[#FBE8FF] py-20  md:px-16 lg:px-12 md:py-24">
      <div className="w-full mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-4">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center md:text-left"
        >
          <h2 className="text-xl md:text-[30px] lg:text-[40px] 2xl:text-[50px] font-semibold text-[#333333] leading-tight">
            Blockchain <span className="bg-color">Development</span>:
            <br />
            <span className="block md:inline">Powering Secure <span >
               Solutions</span></span>
          </h2>
          <p className="mt-4 text-base text-[12px] md:text-[18px] lg:text-xl text-[#808080] px-2 lg:px-0">
            We help businesses use blockchain technology for enhanced{" "}
            <br className="hidden sm:inline" />
            transparency and automation.
          </p>
        </motion.div>

        <div className="md:w-full mx-auto grid grid-cols-2 gap-6 justify-center items-center pt-4 lg:pt-0  md:grid-cols-2 md:gap-12">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="flex items-center space-x-3"
            >
              <Image
                src={feature.icon}
                alt={feature.name}
                className="w-6 h-6 md:w-12 h:w-12 lg:w-12 lg:h-12 object-contain"
                width={6}
                height={6}
              />
              <span className="text-sm lg:text-xl sm:text-xs font-medium text-[#000000] whitespace-nowrap">
                {feature.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
