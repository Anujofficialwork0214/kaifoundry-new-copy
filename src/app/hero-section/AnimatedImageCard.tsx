// "use client";
// import { useState, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { useInView } from "react-intersection-observer";

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

// export default function AnimatedSection() {
//   const [index, setIndex] = useState(0);
//   const [ref, inView] = useInView({ threshold: 0.1 }); // Trigger when 10% of the section is in view
//   const [prevIndex, setPrevIndex] = useState<number | null>(null);
//   useEffect(() => {
//     const interval = setInterval(() => {
//       if (inView && index < content.length - 1) {
//          setPrevIndex(index);
//         setIndex((prev) => prev + 1);
//       }
//     }, 3000);

//     return () => clearInterval(interval);
//   }, [index, inView]);

//   return (

//     <div
//   ref={ref}
//   className="container flex flex-row flex-nowrap  items-center justify-center my-20  text-black  md:p-18   overflow-hidden gap-4"
// >
//   <div className="relative flex w-full  md:w-1/2 h-[600px]   items-center">
//     <AnimatePresence>
//       {inView &&
//         content.map((item, i) => i <= index && (
//           <motion.img
//             key={item.image}
//             src={item.image}
//             alt="Blockchain"
//             className="absolute w-[90%]  object-cover rounded-4xl  border-2 border-white"
//             initial={{ y: 100 + 10 * i, opacity: 0, x: 20 * i }}
//             animate={{ y: 30 * i, opacity: 1, x: 30 * i }}
//             viewport={{once:true}}
//             transition={{ duration: 1 }}
//           />
//         ))}
//     </AnimatePresence>
//   </div>

//   <div className="w-1/2  text-left flex items-center   ">
//     <AnimatePresence mode="wait">
//     {inView && (
//       <motion.div
//         key={index}
//         initial={{ y: 300, opacity: 1 }}
//         animate={{ y: 0, opacity: 1 }}
//         exit={{ y: -300, opacity: 1 }}
//         className="ml-10"
//         transition={{ duration: 1,ease: "easeInOut" }}
//       >
//         <h2 className="text-xl md:text-3xl font-bold tracking-wide">
//           {content[index].title}
//         </h2>
//         <p className="mt-6 text-lg md:text-xl text-gray-600 leading-relaxed">
//           {content[index].description}
//         </p>
//       </motion.div>
//     )}
//     {/* {prevIndex !== null && (
//           <motion.div
//             key={`prev-text-${prevIndex}`}
//             className=""
//             initial={{ y: 0, opacity: 1 }}
//             animate={{ y: -500, opacity: 1 }}
//             transition={{ duration: 1, ease: "easeInOut" }}
//           >
//             <h2 className="text-4xl md:text-5xl font-bold ">
//               {content[prevIndex].title}
//             </h2>
//             <p className="mt-6 text-xl md:text-2xl text-gray-600 leading-relaxed">
//               {content[prevIndex].description}
//             </p>
//           </motion.div>
//         )}

//         <motion.div
//           key={`curr-text-${index}`}
//           className=""
//           initial={{ y: 300, opacity: 1 }}
//           animate={{ y: -100, opacity: 1 }}
//           transition={{ duration: 1, ease: "easeInOut" }}
//         >
//           <h2 className="text-4xl md:text-5xl font-bold ">
//             {content[index].title}
//           </h2>
//           <p className="mt-6 text-xl md:text-2xl text-gray-600 leading-relaxed">
//             {content[index].description}
//           </p>
//         </motion.div> */}
//     </AnimatePresence>
//   </div>
// </div>

//   );
// }

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

  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      const timeouts = content.map((_, i) => {
        if (i > 0) {
          return setTimeout(() => {
            setIndex(i);
          }, i * 4000);
        }
        return null;
      }).filter((t): t is ReturnType<typeof setTimeout> => t !== null);

      return () => {
        timeouts.forEach((timeoutId) => clearTimeout(timeoutId));
      };
    }
  }, [inView]);


  return (
    <div
      ref={ref}
      className=" flex flex-row flex-nowrap items-center justify-center my-20 text-black py-44 2xl:py-20 xl:py-28 lg:pl-18  overflow-hidden gap-4"
    >
      <div className="container relative flex w-full md:w-1/2 h-[600px] items-center">
        <AnimatePresence mode="wait">
          {inView &&
            content.map((item, i) => i <= index && (
              <motion.img
                key={item.image}
                src={item.image}
                alt="Blockchain"
                className="absolute w-[90%]  object-cover rounded-4xl border-2 border-white"
                initial={{ y: 100 + 10 * i, opacity: 0, x: 20 * i }}
                animate={{ y: 30 * i, opacity: 1, x: 30 * i }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
                
              />
            ))}
        </AnimatePresence>
      </div>

      <div className="w-1/2 text-left flex items-center h-[600px] mr-10 relative overflow-hidden">
        <AnimatePresence mode="wait">
          {inView && (
            <motion.div
              key={index}
              initial={{ y: 400, opacity: 1 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -400, opacity: 1 }}
              className="absolute ml-10"
              transition={{ duration: 1, ease: "easeInOut" }}
              viewport={{ once: true }}
            >
              <h2 className="text-xl md:text-[40px] lg:text-[43px] xl:text-[43px] font-[700] tracking-wide text-[#333333]">
                {content[index].title}
              </h2>
              <p className="mt-6 text-lg md:text-[20px] lg:text-[22px]  text-[#333333]">
                {content[index].description}
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
