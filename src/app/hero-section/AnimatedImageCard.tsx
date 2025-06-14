"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";

const content = [
  {
    image: "/assets/img2.jpg",
    title: "Founded as a Blockchain Solutions Provider",
    description:
      "We have successfully completed 30+ projects, showcasing their ability to handle complex blockchain solutions across various industries, including white-label exchanges, multi-currency wallets, and stablecoin platforms.",
  },
  {
    image: "/assets/img1.jpg",
    title: "Building the Future with FileCoin Wallet",
    description:
      "Vinayak Karla discusses the development and impact of the Filecoin wallet in Bangalore, exploring new frontiers in blockchain and decentralized storage solutions",
  },
  {
    image: "/assets/img3.jpg",
    title: "Leading in Blockchain Innovation and Decentralized Solutions",
    description:
      "From innovative solutions to enterprise adoption, Kai Foundry leads the way in delivering scalable, decentralized blockchain technologies.",
  },
];

export default function AnimatedSection() {
  const [index, setIndex] = useState(0);
  const [ref, inView] = useInView({ threshold: 0.1 }); // Trigger when 10% of the section is in view

  useEffect(() => {
    const interval = setInterval(() => {
      if (inView && index < content.length - 1) {
        setIndex((prev) => prev + 1);
      }
    }, 2000);

    return () => clearInterval(interval);
  }, [index, inView]);

  return (

    <div
  ref={ref}
  className="flex flex-row flex-nowrap items-center justify-center my-20 bg-white text-black  md:p-10 overflow-hidden gap-4"
>
  <div className="relative flex-shrink-0  w-full md:w-1/2 h-[500px] flex justify-center items-center ">
    <AnimatePresence>
      {inView &&
        content.map((item, i) => i <= index && (
          <motion.img
            key={item.image}
            src={item.image}
            alt="Blockchain"
            className="absolute w-3/4 h-full object-cover rounded-4xl  border-2 border-white"
            initial={{ y: 100 + 10 * i, opacity: 0, x: 20 * i }}
            animate={{ y: 20 * i, opacity: 1, x: 20 * i }}
            exit={{ y: -100 - 20 * i, opacity: 0 }}
            transition={{ duration: 1 }}
          />
        ))}
    </AnimatePresence>
  </div>

  <div className="max-w-[700px] text-left ">
    <AnimatePresence mode="wait">
      {inView && (
        <>
          <motion.h2
            key={content[index].title}
            className="text-4xl md:text-5xl font-bold tracking-wide"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -50, opacity: 0 }}
            transition={{ duration: 1 }}
          >
            {content[index].title}
          </motion.h2>
          <motion.p
            key={content[index].description}
            className="mt-6 text-xl md:text-2xl text-gray-600 leading-relaxed"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -50, opacity: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            {content[index].description}
          </motion.p>
        </>
      )}
    </AnimatePresence>
  </div>
</div>

  );
}