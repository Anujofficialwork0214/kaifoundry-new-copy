"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Image from "next/image";

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
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState<"left"|"right">("right");
  const [stack, setStack] = useState<number[]>([]);

  const nextSlide = () => {
    if (currentIndex < content.length - 1) {
      setDirection("right");
      setStack(prev => [...prev, currentIndex]);
      setCurrentIndex(prev => prev + 1);
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setDirection("left");
      setStack(prev => prev.slice(0, -1));
      setCurrentIndex(prev => prev - 1);
    }
  };

  const imageVariants = {
    enterRight: { x: 300, opacity: 0 },
    enterLeft: { x: -300, opacity: 0 },
    center: { x: 0, opacity: 1 },
    exitRight: { x: -300, opacity: 0 },
    exitLeft: { x: 300, opacity: 0 },
  };

  const textVariants = {
    enterRight: { x: 100, opacity: 0 },
    enterLeft: { x: -100, opacity: 0 },
    center: { x: 0, opacity: 1 },
    exitRight: { x: -100, opacity: 0 },
    exitLeft: { x: 100, opacity: 0 },
  };

  const canGoLeft = currentIndex > 0;
  const canGoRight = currentIndex < content.length - 1;

  return (
    <div className="flex flex-col items-center justify-center min-h-[85vh] bg-white text-black p-6 md:p-10 mt-16 relative">
      <div className="relative w-full md:w-1/2 h-[40vh] md:h-[85vh] flex justify-center items-center">
        <button
          onClick={prevSlide}
          style={{ backgroundColor: '#BA24D5' }}
          className={`absolute -left-4 top-1/2 p-3 rounded-xl text-white text-2xl hover:bg-purple-700 transition z-50 cursor-pointer ${
            !canGoLeft ? 'opacity-40 cursor-not-allowed' : ''
          }`}
          disabled={!canGoLeft}
        >
          <FaChevronLeft />
        </button>

        <div className="relative w-[255px] h-[300px] ">
          {stack.map((stackIndex, i) => (
            <motion.div
              key={`stack-${stackIndex}-${i}`}
              className="absolute top-0 left-0 w-full h-full"
              style={{
                zIndex: i + 1,
                transform: `translateX(${-10 * (stack.length - i)}px) translateY(${10 * (stack.length - i)}px)`,
              }}
              transition={{ duration: 0.3 }}
            >
              <Image
                src={content[stackIndex].image}
                alt="Blockchain"
                width={80}
                height={80}
                className="w-full h-full object-cover rounded-[24px] border-2 border-white"
                priority={true}
              />
            </motion.div>
          ))}
          
          {/* Current image */}
          <AnimatePresence custom={direction}>
            <motion.div
              key={currentIndex}
              className="absolute top-0 left-0 w-full h-full"
              initial={direction === "right" ? "enterRight" : ""}
              animate="center"
              exit={direction === "right" ? "exitLeft" : ""}
              variants={imageVariants}
              transition={{ duration: 0.5 }}
              style={{ zIndex: stack.length + 2 }}
            >
              <Image
                src={content[currentIndex].image}
                alt="Blockchain"
                width={80}
                height={80}
                priority={true}
                draggable="false"
                className="w-full h-full object-cover rounded-[24px] border-2 border-white"
              />
            </motion.div>
          </AnimatePresence>
        </div>

        <button
          onClick={nextSlide}
          style={{ backgroundColor: '#BA24D5' }}
          className={`absolute -right-4 top-1/2 p-3 rounded-xl text-white text-2xl hover:bg-purple-700 transition z-50 cursor-pointer ${
            !canGoRight ? 'opacity-40 cursor-not-allowed' : ''
          }`}
          disabled={!canGoRight}
        >
          <FaChevronRight />
        </button>
      </div>

      <div className="w-full md:w-1/2 my-12 md:mt-0 md:pl-10 text-center md:text-left overflow-hidden">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={currentIndex}
            custom={direction}
            initial={direction === "right" ? "enterRight" : "enterLeft"}
            animate="center"
            exit={direction === "right" ? "exitRight" : "exitRight"}
            variants={textVariants}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-[20px] md:text-5xl font-bold px-0 sm-10">
              {content[currentIndex].title}
            </h2>
            <motion.p
              className="mt-5 md:mt-10 text-lg text-[#666666] text-[14px] font-400"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              {content[currentIndex].description}
            </motion.p>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}


// "use client";
// import { useState, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

// const content = [
//   {
//     image: "/assets/img2.jpg",
//     title: "Founded as a Blockchain Solutions Provider",
//     description:
//       "We have successfully completed 30+ projects, showcasing their ability to handle complex blockchain solutions across various industries, including white-label exchanges, multi-currency wallets, and stablecoin platforms.",
//   },
//   {
//     image: "/assets/img1.jpg",
//     title: "Building the Future with FileCoin Wallet",
//     description:
//       "Vinayak Karla discusses the development and impact of the Filecoin wallet in Bangalore, exploring new frontiers in blockchain and decentralized storage solutions",
//   },
//   {
//     image: "/assets/img3.jpg",
//     title: "Leading in Blockchain Innovation and Decentralized Solutions",
//     description:
//       "From innovative solutions to enterprise adoption, Kai Foundry leads the way in delivering scalable, decentralized blockchain technologies.",
//   },
// ];

// export default function AnimatedImageMobile() {
//   const [index, setIndex] = useState(0);
//   const [direction, setDirection] = useState(0); 

//   const nextSlide = () => {
//     setDirection(0);
//     setIndex((prev) => (prev + 1) % content.length);
//   };

//   const prevSlide = () => {
//     setDirection(1);
//     setIndex((prev) => (prev - 1 + content.length) % content.length);
//   };

//   useEffect(() => {
//     const interval = setInterval(() => {
//       nextSlide();
//     }, 3000);

//     return () => clearInterval(interval);
//   }, []);

//   const variants = {
//     enter: (direction: number) => ({
//       x: direction === 0 ? 100 : -100,
//       opacity: 0,
//     }),
//     center: {
//       x: 0,
//       opacity: 1,
//     },
//     exit: (direction: number) => ({
//       x: direction === 0 ? -100 : 100,
//       opacity: 0,
//     }),
//   };

//   return (
//     <div className="flex flex-col items-center sm:justify-center min-h-[85vh] sm:min-h-screen bg-white text-black p-6 md:p-10 mt-16 relative">
      
//       <div className="relative w-full md:w-1/2 h-[40vh] md:h-[85vh] flex justify-center items-center">
//         <button
//           onClick={prevSlide}
//           style={{ backgroundColor: '#BA24D5' }} 
//           className="absolute -left-3 top-1/2 p-3 rounded-xl text-white text-2xl hover:bg-purple-700 transition z-10 cursor-pointer"
//         >
//           <FaChevronLeft />
//         </button>

//         <AnimatePresence custom={direction} mode="wait">
//           <motion.div
//             key={index}
//             custom={direction}
//             variants={variants}
//             initial="enter"
//             animate="center"
//             exit="exit"
//             transition={{ duration: 0.5 }}
//             className="absolute  h-full "
//           >
//             <img
//               src={content[index].image}
//               alt="Blockchain"
//               className="w-[255px] h-[300px] object-cover rounded-[24px] border-2 border-white"
//             />
//           </motion.div>
//         </AnimatePresence>
//         <button
//           onClick={nextSlide}
//           style={{ backgroundColor: '#BA24D5' }} 
//           className="absolute -right-3  top-1/2  p-3 rounded-xl text-white text-2xl hover:bg-purple-700 transition z-10 cursor-pointer"
//         >
//           <FaChevronRight />
//         </button>
//       </div>
//       <div className="w-full md:w-1/2 mt-24 md:mt-0 md:pl-10 text-center md:text-left">
//         <AnimatePresence mode="wait">
//           <motion.div
//             key={index}
//             initial={{ y: 50, opacity: 0 }}
//             animate={{ y: 0, opacity: 1 }}
//             exit={{ y: -50, opacity: 0 }}
//             transition={{ duration: 0.5 }}
//           >
//             <h2 className="text-[20px] md:text-5xl font-bold px-0 sm-10 ">
//               {content[index].title}
//             </h2>
//             <motion.p
//               className="mt-5 md:mt-10 text-lg text-[#666666] text-[14px] font-400"
//               initial={{ y: 50, opacity: 0 }}
//               animate={{ y: 0, opacity: 1 }}
//               transition={{ duration: 0.5, delay: 0.2 }}
//             >
//               {content[index].description}
//             </motion.p>
//           </motion.div>
//         </AnimatePresence>
//       </div>
//     </div>
//   );
// }