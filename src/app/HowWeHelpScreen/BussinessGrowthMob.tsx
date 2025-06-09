"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

const steps = [
  {
    title: "Understanding Your Business",
    description: "We listen to your goals and challenges to see how blockchain can help. Our team analyzes your needs to find the best way to integrate blockchain.",
    icon: "/assets/HowWeHelp/icons/handshake.png",
  },
  {
    title: "Building The Right Solution",
    description: "We create a custom blockchain solution that fits your business needs.Every solution is designed to be scalable, secure, and easy to use.",
    icon: "/assets/HowWeHelp/icons/doc.png",
  },
  {
    title: "Adding It To Your Business",
    description: "We integrate our solutions seamlessly, enhancing your existing processes and unlocking new opportunities for growth",
    icon: "/assets/HowWeHelp/icons/bri.png",
  },
  {
    title: "Supporting Your Growth",
    description: "We keep improving and updating your solution as your business grows. With ongoing support, we help you stay ahead in the blockchain world.",
    icon: "/assets/HowWeHelp/icons/growth.png",
  },
];

  

const BusinessGrowth = () => {
  const [screenSize, setScreenSize] = useState('');

useEffect(() => {
  const handleResize = () => {
    const width = window.innerWidth;
    console.log("Width  ==>",width)
    if (width >= 1024 && width < 1280) {
      setScreenSize('lg-1024-1280');
    } else if (width >= 1280 && width <= 1425) {
      setScreenSize('lg-md');
    } else if (width > 1425) {
      setScreenSize('lg-xl');
    } else {
      setScreenSize('');
    }

  };

  handleResize();
  window.addEventListener('resize', handleResize);
  return () => window.removeEventListener('resize', handleResize);
}, []);
  return (
    <section className="py-20 px-6 md:px-20 text-center">
      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="lg:text-[62px] text-[24px]  font-bold text-gray-900"
      >
        Helping <span className="text-[#E95DFF] text-[24px] lg:text-[62px]">Your Business Grow</span>
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
        className="lg:text-[22px] text-[#808080] text-[14px] mt-4"
      >
        We help businesses grow with smart blockchain solutions, making things faster, safer, and more efficient.
      </motion.p>

  {/* Steps Section */}
  <div className="flex flex-col lg:flex-row items-center justify-between mt-12 relative">
    {steps.map((step, index) => (
      <motion.div
        key={index}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: index * 0.2 }}
        viewport={{ once: true }}
        className="flex flex-col items-center w-full lg:w-1/4 px-4 lg:px-6 text-center relative"
      >
     
        {index < steps.length - 1 && (
           <div className={`
            absolute 
            ${index % 2 === 0 ? 'top-[0px]' : 
              screenSize === 'lg-1024-1280' ? 'bottom-[250px]' :
              screenSize === 'lg-md' ? 'bottom-[210px]' :  
              screenSize === 'lg-xl' ? 'bottom-[160px]' : ''}
            ${
              screenSize === 'lg-1024-1280' ? 'left-1/2 translate-x-[50px]' : 
              screenSize === 'lg-md' ? 'left-1/2 translate-x-[50px]' : 
              screenSize === 'lg-xl' ? 'left-1/3 translate-x-[110px]' : ''}
            hidden lg:block
          `}>
            <Image
               src={index % 2 === 0 ? "/svg/Ellipse 82.png" : "/svg/Ellipse 81.png"} 
              alt="Arrow"
              width={1900} 
              height={960} 
              draggable="false" 
              className="hidden lg:block"
            />
          </div>
        )}

        {/* Icon with Background */}
        <div className="bg-gradient-to-r from-[#E95DFF] to-[#D680FF] p-4 rounded-tl-2xl rounded-tr-2xl rounded-br-2xl shadow-lg relative">
          <Image src={step.icon} alt={step.title} width={60} height={60} draggable="false"/>
        </div>

        {/* Title */}
        <h3 className="text-[16px] lg:text-[20px] font-[600] lg:font-[500]  text-gray-900 mt-4">{step.title}</h3>
        
        {/* Description */}
        <div className={`flex ${index % 2 !==0 ? ' flex-row-reverse':'flex-row'}`}>
        {index < steps.length - 1 && (
        <Image
              src={
                index % 2 === 0
                ? "/svg/img_1.png"
                : "/svg/img_2.png"}
              alt="Arrow"
              width={50}
              height={30} 
              className={`block lg:hidden mt-8`}
              draggable="false"
            />)}
            <p className="text-[#808080] text-[12px] lg:text-[16px] mt-4">{step.description}</p>
        </div>
        

      </motion.div>
    ))}
  </div>
</section>
  );
};

export default BusinessGrowth;