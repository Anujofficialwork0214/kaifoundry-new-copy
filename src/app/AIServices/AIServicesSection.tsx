"use client";
import { motion } from "framer-motion";
import { Cog, Shield, LineChart, Users, Lightbulb, Expand } from "lucide-react";

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
    icon: "/3.png",
  },
    {
    name: "Security & Trust",
    icon: "/security.png",
  },
  {
    name: "Insights",
    icon: "/insight.png",
  },
  {
    name: "Personalization",
    icon: "/carbon_scale.png",
  },

  {
    name: "Innovation",
    icon: "/2.png",
  },
  {
    name: "Scalability",
    icon: "/custom2.png",
  },

];

export default function AIServicesSection() {
  return (
    // <section className="relative bg-gradient-to-b from-white to-[#FBE8FF] py-20 px-8 md:px-16 lg:px-32">
    //   <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-12">
        
       
    //     <motion.div 
    //       initial={{ opacity: 0, x: -50 }} 
    //       animate={{ opacity: 1, x: 0 }} 
    //       transition={{ duration: 0.6 }}
    //       className="text-left"
    //     >
    //       <h2 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
    //         Smarter Solutions with <span className="text-[#BA24D5]">AI</span>
    //       </h2>
    //       <p className="mt-4 text-lg text-gray-600">
    //         Harness the power of Artificial Intelligence to automate, optimize, and innovate—making your business faster, smarter, and more efficient.
    //       </p>
    //     </motion.div>

     
    //     <div className="grid grid-cols-2 gap-6">
    //       {features.map((feature, index) => (
    //         <motion.div 
    //           key={index}
    //           initial={{ opacity: 0, x: 50 }} 
    //           animate={{ opacity: 1, x: 0 }} 
    //           transition={{ duration: 0.6, delay: index * 0.1 }}
    //           className="flex items-center space-x-3"
    //         >
    //           <feature.icon className="h-7 w-7 text-[#BA24D5]" />
    //           <span className="text-lg font-medium text-gray-900">{feature.name}</span>
    //         </motion.div>
    //       ))}
    //     </div>

    //   </div>
    // </section>
     <section className="relative bg-gradient-to-b from-white to-[#FBE8FF] py-20 px-8 md:px-16 lg:px-12 ">
          <div className="w-full mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-8">
            
            <motion.div 
              initial={{ opacity: 0, x: -50 }} 
              animate={{ opacity: 1, x: 0 }} 
              transition={{ duration: 0.6 }}
              className="text-center md:text-left"
            >
              <h2 className="text-xl sm:text-2xl md:text-[38px] lg:text-[40px] font-bold text-gray-800 leading-tight">
            Smarter Solutions with <span>AI</span>
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Harness the power of Artificial Intelligence to automate, optimize, and innovate—making your business faster, smarter, and more efficient.
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
                  {/* <feature.icon className="h-7 w-7 text-[#BA24D5]" /> */}
                    <img src={feature.icon} alt={feature.name} className="w-8 h-8 object-contain" />
                  <span className="text-lg lg:text-lg sm:text-sm font-medium text-gray-900 whitespace-nowrap">{feature.name}</span>
                </motion.div>
              ))}
            </div>
        
          </div>
        </section>
  );
}
