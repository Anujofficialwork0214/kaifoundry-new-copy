"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

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

export default function AnimatedImageMobile() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0); // 0 for right, 1 for left

  const nextSlide = () => {
    setDirection(0);
    setIndex((prev) => (prev + 1) % content.length);
  };

  const prevSlide = () => {
    setDirection(1);
    setIndex((prev) => (prev - 1 + content.length) % content.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const variants = {
    enter: (direction: number) => ({
      x: direction === 0 ? 100 : -100,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction === 0 ? -100 : 100,
      opacity: 0,
    }),
  };

  return (
    <div className="flex flex-col items-center sm:justify-center min-h-[85vh] sm:min-h-screen bg-white text-black p-6 md:p-10 relative">
      
      <div className="relative w-full md:w-1/2 h-[40vh] md:h-[85vh] flex justify-center items-center">
        <button
          onClick={prevSlide}
          style={{ backgroundColor: '#BA24D5' }} 
          className="absolute left-0 top-1/2 transform -translate-y-1/2 p-4 rounded-xl text-white text-3xl hover:bg-purple-700 transition z-10"
        >
          <FaChevronLeft />
        </button>

        <AnimatePresence custom={direction} mode="wait">
          <motion.div
            key={index}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.5 }}
            className="absolute w-[90%] md:w-[85%] h-full"
          >
            <img
              src={content[index].image}
              alt="Blockchain"
              className="w-full h-full object-cover rounded-4xl shadow-2xl border-2 border-white"
            />
          </motion.div>
        </AnimatePresence>
        <button
          onClick={nextSlide}
          style={{ backgroundColor: '#BA24D5' }} 
          className="absolute right-0 top-1/2 transform -translate-y-1/2 p-4 rounded-xl text-white text-3xl hover:bg-purple-700 transition z-10"
        >
          <FaChevronRight />
        </button>
      </div>
      <div className="w-full md:w-1/2 mt-20 md:mt-0 md:pl-10 text-center md:text-left">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -50, opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold">
              {content[index].title}
            </h2>
            <motion.p
              className="mt-5 md:mt-10 text-lg text-gray-600"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              {content[index].description}
            </motion.p>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}