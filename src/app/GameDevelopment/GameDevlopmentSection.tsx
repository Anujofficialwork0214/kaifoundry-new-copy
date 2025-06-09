"use client";
import { motion } from "framer-motion";
import { PaintBrushIcon, GlobeAltIcon, UserIcon, DevicePhoneMobileIcon, CubeIcon, ArrowsUpDownIcon } from "@heroicons/react/24/solid";
import { IoColorPaletteOutline } from "react-icons/io5";

const features = [
  { name: "Immersive", icon: IoColorPaletteOutline },
  { name: "Cross-Platform", icon: DevicePhoneMobileIcon },
  { name: "Web3-Ready", icon: GlobeAltIcon },
  { name: "Optimized", icon: CubeIcon },
  { name: "Customizable", icon: UserIcon },
  { name: "End-to-End", icon: ArrowsUpDownIcon },
];

export default function GameDevelopmentSection() {
  return (

    <section className="relative bg-gradient-to-b from-white to-[#FBE8FF] py-20 px-8 md:px-16 lg:px-12 ">
  <div className="w-full mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-8">
    
    <motion.div 
      initial={{ opacity: 0, x: -50 }} 
      animate={{ opacity: 1, x: 0 }} 
      transition={{ duration: 0.6 }}
      className="text-center md:text-left"
    >
      <h2 className="text-xl sm:text-2xl md:text-[38px] lg:text-[40px] font-bold text-gray-800 leading-tight">
        Turning <span className="text-[#BA24D5]">Ideas</span> into <span className="text-[#BA24D5]">Games</span> 
        <br /> That <span className="text-[#BA24D5]">People</span> Love
      </h2>
      <p className="mt-4 text-base sm:text-lg text-gray-600">
        We create fun, immersive, and high-quality games that keep players coming back for more. We bring your vision to life!
      </p>
    </motion.div>

    <div className="grid grid-cols-2 gap-6">
      {features.map((feature, index) => (
        <motion.div 
          key={index}
          initial={{ opacity: 0, x: 50 }} 
          animate={{ opacity: 1, x: 0 }} 
          transition={{ duration: 0.6, delay: index * 0.1 }}
          className="flex items-center space-x-3"
        >
          <feature.icon className="h-7 w-7 text-[#BA24D5]" />
          <span className="text-lg lg:text-lg sm:text-sm font-medium text-gray-900 whitespace-nowrap">{feature.name}</span>
        </motion.div>
      ))}
    </div>

  </div>
</section>

  );
}
