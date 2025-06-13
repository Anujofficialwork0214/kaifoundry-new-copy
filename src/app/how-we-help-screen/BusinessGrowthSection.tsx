"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const steps = [
  {
    title: "Understanding Your Business",
    description: "We listen to your goals and challenges to see how blockchain can help.",
    icon: "/assets/HowWeHelp/icons/handshake.png",
  },
  {
    title: "Building The Right Solution",
    description: "We create a custom blockchain solution that fits your business.",
    icon: "/assets/HowWeHelp/icons/doc.png",
  },
  {
    title: "Adding It To Your Business",
    description: "We integrate blockchain seamlessly into your operations.",
    icon: "/assets/HowWeHelp/icons/bri.png",
  },
  {
    title: "Supporting Your Growth",
    description: "We keep improving and updating your solution as your business grows.",
    icon: "/assets/HowWeHelp/icons/growth.png",
  },
];

const BusinessGrowth = () => {
  return (
    <section className="py-20 px-6 md:px-20 text-center">
      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-[62px] font-bold text-gray-900"
      >
        Helping <span className="text-[#b243c3]">Your Business Grow</span>
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
        className="text-gray-600 text-[22px] mt-4"
      >
        We help businesses grow with smart blockchain solutions, making things faster,
        <br />safer, and more efficient.
      </motion.p>

      {/* Steps Section */}
      <div className="flex flex-col md:flex-row items-center justify-between mt-12 relative ">
        {steps.map((step, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="flex flex-col items-center w-full md:w-1/4 px-4 md:px-6 text-center relative"
          >
         
            {index < steps.length - 1 && (
              <div className={`absolute ${index % 2 === 0 ? 'top-[0px]': 'bottom-[100px]'} left-1/3 transform translate-x-[110px] `}>
                <Image
                  src={index % 2 === 0 ? "/svg/Ellipse 82.png" : "/svg/Ellipse 81.png"} 
                  alt="Arrow"
                  width={500} 
                  height={900} 
                  draggable="false" 
                />
              </div>
            )}

            {/* Icon with Background */}
            <div className="bg-gradient-to-r from-[#b051be] to-[#b65ede] p-4 rounded-tl-2xl rounded-tr-2xl rounded-br-2xl shadow-lg relative">
              <Image src={step.icon} alt={step.title} width={60} height={60}
              draggable="false"/>
            </div>

            {/* Title */}
            <h3 className="text-[20px] font-[500]  text-gray-900 mt-4 opacity-80">{step.title}</h3>

            {/* Description */}
            <p className="text-[#4D4D4D] text-[16px]  font-[400] mt-4 ">{step.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default BusinessGrowth;
