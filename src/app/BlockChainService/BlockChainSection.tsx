"use client";
import { motion } from "framer-motion";

const features = [
  {
    name: "Scalability",
    icon: "/scalable.png",
  },
  {
    name: "Transparency",
    icon: "/1.png",
  },
  {
    name: "Security & Trust",
    icon: "/security.png",
  },
    {
    name: "Decentralization",
    icon: "/people.png",
  },
  {
    name: "Innovation",
    icon: "/2.png",
  },

  {
    name: "Automation",
    icon: "/3.png",
  },
];

export default function BlockchainSection() {
  return (
    <section className="relative bg-gradient-to-b from-white to-[#FBE8FF] py-20 px-8 md:px-16 lg:px-12">
      <div className="w-full mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-4">
        
        <motion.div 
          initial={{ opacity: 0, x: -50 }} 
          animate={{ opacity: 1, x: 0 }} 
          transition={{ duration: 0.6 }}
          className="text-center md:text-left"
        >
          <h2 className="text-xl sm:text-2xl md:text-[30px] lg:text-[42px] font-semibold text-[#333333] leading-tight">
            Blockchain <span className="text-[#BA24D5]">Development</span>:<br />
            <span className="block md:inline">Powering Secure Solutions</span> 
          </h2>
         <p className="mt-4 text-base sm:text-[12px] md:text-[18px] text-[#808080]">
  We help businesses use blockchain technology for enhanced {" "}
  <br className="hidden sm:inline" />
  transparency and automation.
</p>

        </motion.div>

        <div className="grid grid-cols-2 gap-12">
          {features.map((feature, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, x: 50 }} 
              animate={{ opacity: 1, x: 0 }} 
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="flex items-center space-x-3"
            >
              <img src={feature.icon} alt={feature.name} className="w-10 h-10 object-contain" />
              <span className="text-sm lg:text-lg sm:text-xs font-medium text-gray-900 whitespace-nowrap">
                {feature.name}
              </span>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
