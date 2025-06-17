"use client";
import { motion } from "framer-motion";
import { Cog, Shield, LineChart, Users, Lightbulb, Expand } from "lucide-react";
import Image from "next/image";

// const features = [
//   { name: "Automation", icon: Cog },
//   { name: "Security", icon: Shield },
//   { name: "Insights", icon: LineChart },
//   { name: "Personalization", icon: Users },
//   { name: "Innovation", icon: Lightbulb },
//   { name: "Scalability", icon: Expand },
// ];
const features = [
  {
    name: "Automation",
    icon: "/svg/tabler_automation.svg",
  },
  {
    name: "Security",
    icon: "/svg/security.svg",
  },
  {
    name: "Insights",
    icon: "/svg/insight.svg",
  },
  {
    name: "Personalization",
    icon: "/svg/personalization.svg",
  },
  {
    name: "Innovation",
    icon: "/svg/innovation.svg",
  },
  {
    name: "Scalability",
    icon: "/svg/carbon_scale.svg",
  },
];

export default function AIServicesSection() {
  return (
    <section className="relative bg-gradient-to-b from-white to-[#FBE8FF] py-16 px-8 md:px-16 lg:px-12 md:py-20 ">
      <div className="md:w-full mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-4">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center md:text-left"
        >
          {/* <h2 className="text-xl sm:text-2xl md:text-[52px] lg:text-[58px] font-bold text-gray-800 leading-tight">
            Smarter <span className="text-[#BA24D5]">Solutions</span> with{" "}
            <span>
              <span className="text-[#BA24D5]">AI</span>
            </span>
          </h2> */}
          {/* Mobile Only (up to md) */}
          <h2 className="block md:hidden text-2xl font-bold text-[#333333] ]  leading-tight -mt-8">
            Smarter <span className="bg-color font-bold">
              Solutions
            </span> with <span className="bg-color font-bold">
              AI
            </span>
          </h2>

          {/* Desktop Only (md and above) */}
          <h2 className="hidden md:block md:text-xl lg:text-5xl 2xl:text-[55px] font-bold text-[#333333] leading-tight -mt-8">
            Smarter <span className="bg-color font-bold">
              Solutions
            </span> with <span className="bg-color font-bold">
              AI
            </span>
          </h2>

          <p className="mt-4 text-[12px] md:text-lg 2xl:text-[22px] font-[400] text-[#333333]">
            Harness the power of Artificial Intelligence to automate, optimize,
            and innovate—making your business faster, smarter, and more
            efficient.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 gap-12  pt-4 lg:pt-0 ">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="flex items-center space-x-3"
            >
              {/* <feature.icon className="h-7 w-7 text-[#BA24D5]" /> */}
              <Image
                src={feature.icon}
                alt={feature.name}
                width={6}
                height={6}
                className="w-6 h-6 md:w-12 h:w-12 lg:w-12 lg:h-12 object-contain"
                priority={true}
              />
              <span className="text-sm lg:text-xl sm:text-xs font-medium text-gray-900 whitespace-nowrap">
                {feature.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
// "use client";
// import { motion } from "framer-motion";

// const features = [
//   { name: "Automation", icon: "/3.png" },
//   { name: "Security", icon: "/security.png" },
//   { name: "Insights", icon: "/insight.png" },
//   { name: "Personalization", icon: "/carbon_scale.png" },
//   { name: "Innovation", icon: "/2.png" },
//   { name: "Scalability", icon: "/custom2.png" },
// ];

// export default function AIServicesSection() {
//   return (
//     <section className="relative bg-gradient-to-b from-white to-[#FBE8FF] py-16 px-6 md:px-20 md:py-40">
//       <div className=" mx-auto grid grid-cols-1 md:grid-cols-[70%_30%] items-center gap-8">
//         {/* LEFT: Text */}
//         <motion.div
//           initial={{ opacity: 0, x: -50 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.6 }}
//           className="text-left"
//         >
//           <h2 className="text-3xl md:text-5xl xl:text-5xl 2xl:text-6xl font-bold text-gray-900">
//             Smarter <span className="text-[#BA24D5]">Solutions</span> with{" "}
//             <span className="text-[#BA24D5]">AI</span>
//           </h2>
//           <p className="mt-4 text-base sm:text-lg text-gray-700 max-w-xl">
//             Harness the power of Artificial Intelligence to automate, optimize,
//             and innovate—making your business faster, smarter, and more efficient.
//           </p>
//         </motion.div>

//         {/* RIGHT: Features */}
//         <div className="grid grid-cols-2 gap-y-12 gap-x-4">
//           {features.map((feature, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, x: 50 }}
//               animate={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.6, delay: index * 0.1 }}
//               className="flex items-center space-x-3"
//             >
//               <img
//                 src={feature.icon}
//                 alt={feature.name}
//                 className="w-6 h-6 md:w-10 h-w-10 lg:w-12 lg-w-12 object-contain"
//               />
//               <span className="text-base md:text-[22px] font-medium text-gray-900">{feature.name}</span>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }
