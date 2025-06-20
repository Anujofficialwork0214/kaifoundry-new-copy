"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

const steps = [
  {
    title: "Understanding Your Business",
    description:
      "We listen to your goals and challenges to see how blockchain can help. Our team analyzes your needs to find the best way to integrate blockchain.",
    icon: "/svg/book.svg",
  },
  {
    title: "Building The Right Solution",
    description:
      "We create a custom blockchain solution that fits your business needs.Every solution is designed to be scalable, secure, and easy to use.",
    icon: "/svg/office.svg",
  },
  {
    title: "Adding It To Your Business",
    description:
      "We integrate our solutions seamlessly, enhancing your existing processes and unlocking new opportunities for growth",
    icon: "/svg/stock.svg",
  },
  {
    title: "Supporting Your Growth",
    description:
      "We keep improving and updating your solution as your business grows. With ongoing support, we help you stay ahead in the blockchain world.",
    icon: "/svg/stockMarket.svg",
  },
];

const BusinessGrowth = () => {
  const [screenSize, setScreenSize] = useState("");
  const [animationsComplete, setAnimationsComplete] = useState(false);
  const [completedIndices, setCompletedIndices] = useState<Set<number>>(
    new Set()
  );

  useEffect(() => {
    if (typeof window !== "undefined") {
      const handleResize = () => {
        const width = window.innerWidth;
        console.log("Width  ==>", width);
        if (width >= 1024 && width < 1280) {
          setScreenSize("lg-1024-1280");
        } else if (width >= 1280 && width <= 1425) {
          setScreenSize("lg-md");
        } else if (width > 1425) {
          setScreenSize("lg-xl");
        } else {
          setScreenSize("");
        }
      };

      handleResize();
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);
  const handleAnimationComplete = (index: number) => {
    setCompletedIndices((prev) => {
      const newSet = new Set(prev);
      newSet.add(index);

      if (newSet.size === steps.length) {
        setAnimationsComplete(true);
      }

      return newSet;
    });
  };

  return (
    <section className="py-10 lg:py-20 px-6 md:px-20 text-center">
      <motion.h2
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-[22px] md:text-5xl 2xl:text-6xl font-semibold text-[#333333]"
      >
        Helping{" "}
        <span className="bg-color text-[22px] md:text-5xl 2xl:text-6xl">
          Your Business Grow
        </span>
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
        className="2xl:text-[18px] md:text-[16px] text-[#808080] text-[14px] lg:mt-4 mt-4 max-w-2xl flex justify-center mx-auto"
      >
        We help businesses grow with smart blockchain solutions, making things
        faster, safer, and more efficient.
      </motion.p>

      <div className="flex flex-col lg:flex-row items-center justify-between lg:mt-28 mt-6 relative">
        {steps.map((step, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
            onAnimationComplete={() => handleAnimationComplete(index)}
            className="flex flex-col items-center w-full lg:w-1/4 px-4 lg:px-6 text-center relative"
          >
            

            <div className="bg-gradient-to-b from-[#9F1AB1] to-[#E478FA] lg:p-4 p-3 rounded-tl-2xl rounded-tr-2xl rounded-br-2xl mt-4 lg:mt-0 shadow-lg relative">
              {animationsComplete && index < steps.length - 1 && (
              <div
                className={`
                absolute 
                ${
                  index % 2 === 0
                    ? "top-[-5px]"
                    
                    : "bottom-[-25px]"
                }
                
                hidden lg:block translate-x-[80px]
                xl:w-[170px]
                xl:translate-x-[80px] 
  h-[50px]   lg:translate-x-[100px] 2xl:w-[220px]
  w-[140px]
              `}
              >
                <Image
                  src={
                    index % 2 === 0
                      ? "/svg/Ellipse 82.png"
                      : "/svg/Ellipse 81.png"
                  }
                  alt="Arrow"
                  width={220}
                  height={50}
                  draggable="false"
                  className="hidden lg:block w-full"
                  priority={true}
                />
              </div>
            )}
              <Image
                src={step.icon}
                alt={step.title}
                width={60}
                height={60}
                draggable="false"
                className="w-10 h-10 lg:w-12 lg:h-12 "
                priority={true}
              />
            </div>

            <h3 className="text-[16px] lg:text-[16px] font-[600] lg:font-[500]  text-gray-900 mt-4">
              {step.title}
            </h3>

            <div
              className={`flex ${
                index % 2 !== 0 ? " flex-row-reverse" : "flex-row"
              } `}
            >
              {index < steps.length - 1 && (
                <Image
                  src="/svg/mobilearrow.svg"
                  alt="Arrow"
                  width={80}
                  height={30}
                  className={`block lg:hidden mt-12  w-[80px] h-[60px] object-contain ${
                    index % 2 !== 0 ? "rotate-y-180" : ""
                  }`}
                  draggable="false"
                />

              )}
              <p className="text-[#808080] text-[12px] lg:text-[14px] mt-4">
                {step.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default BusinessGrowth;
