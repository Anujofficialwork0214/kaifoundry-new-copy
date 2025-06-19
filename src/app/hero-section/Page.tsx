// "use client";
// import React, { useEffect, useState } from "react";
// import Image from "next/image";
// import Link from "next/link";
// import { motion } from "framer-motion";
// import CountUp from "react-countup";
// import { roboto } from "../Fonts/fonts";
// import { GoArrowRight } from "react-icons/go";
// import { FaArrowRight } from "react-icons/fa6";

// export default function HeroSection() {
//   const [isVisible, setIsVisible] = useState(false);

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setIsVisible(true);
//     }, 100);

//     return () => clearTimeout(timer);
//   }, []);

//   return (
//     <div className="  text-gray-800 pt-0 lg:pt-16 bg-white px-0 lg:px-12 w-full flex flex-col gap-12 lg:gap-28  ">
//       {/* Main Content */}
//       <div
//         className={`flex flex-col-reverse lg:flex-row w-full  items-center  transition-opacity duration-1000 ${
//           isVisible ? "opacity-100" : "opacity-0"
//         }`}
//       >
//         {/* Text */}
//         <div className="w-full lg:w-1/2 text-center md:text-left mt-20 z-10  flex flex-col justify-center  lg:justify-start">
//           <h1
//             className={`md:text-[62px] lg:text-[62px] 2xl:text-[65px] text-[24px] text-center lg:text-left font-bold transition-transform duration-1000 py-0 lg:py-10 leading-[1.2]`}
//           >
//             <span className="flex flex-row lg:flex-col items-center justify-center lg:items-start gap-x-2 text-center ">
//               <span>Building Your</span>
//               <span className="bg-color block">BUSINESSES</span>
//             </span>
//             & Powering
//             <span className="bg-color"> WEB3</span>
//           </h1>
//           <p
//             className={` lg:text-black  mt-3 lg:mt-0 text-[12px] text-center md:text-[21px] lg:text-left 2xl:text-[27px] lg:text-[24px] transition-opacity duration-1000 ${
//               isVisible ? "opacity-100" : "opacity-0"
//             }`}
//           >
//             We help businesses grow with smart strategies
//             <br />
//             and the latest Web3 technology, making
//             <br />
//             success easier to achieve.
//           </p>
//           <div className="flex justify-center lg:justify-start">
//             <div className="relative mt-14">
//               {/* bg-[#ba24d5] */}
//               <motion.div
//                 className={`absolute top-0 left-0 h-full bg-[#BA24D5] rounded-full ${
//                   isVisible ? "opacity-100 bg-[#BA24D5]" : "opacity-0"
//                 }`}
//                 initial={{ width: 0 }}
//                 animate={isVisible ? { width: "100%" } : { width: 0 }}
//                 transition={{ duration: 0.5, ease: "easeInOut" }}
//               />

//               <motion.div
//                 className={`flex items-center relative top-0  md:flex pl-8 overflow-hidden`}
//                 initial={{ opacity: 0 }}
//                 animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
//                 transition={{ delay: 1, duration: 0.7 }}
//               >
//                 <Link href="/how-we-help-screen" className="pr-3 lg:pr-0">
//                   <button
//                     className={`relative z-10 flex items-center px-4 py-2 lg:pl-3 lg:pr-8 lg:py-3  text-white text-[11px] lg:text-lg transition-all duration-300 bg-[#BA24D5] `}
//                   >
//                     HOW WE HELP
//                     <span className="ml-2 w-5 h-5 lg:w-8 lg:h-8 flex items-center justify-center border-2 border-white rounded-full font-light">
//                       <FaArrowRight />
//                     </span>
//                   </button>
//                 </Link>
//                 <Link href="/contact-us">
//                   <button
//                     className={`relative z-10 mr-[2px] -ml-[13px]  lg:ml-[-16px] lg:mr-[2px] px-3 py-[7px]   lg:px-10 lg:py-[11.6px] rounded-full   bg-white text-black text-[12px] lg:text-lg transition-all duration-300 cursor-pointer hover:bg-gray-100`}
//                   >
//                     Contact Us
//                   </button>
//                 </Link>
//               </motion.div>
//             </div>
//           </div>
//         </div>
//         {/* Image */}
//         <div className="w-full lg:w-1/2 mt-5 md:mt-5 relative">
//           <div className="absolute top-0 right-0 w-full h-[950px] lg:h-[680px] xl:h-185 bg-no-repeat bg-cover bg-desktop-image lg:rounded-lg z-0 -mt-20 lg:-mt-42"></div>
//           <Image
//             src="/assets/cube1.png"
//             alt="Web3 Cube"
//             width={400}
//             height={400}
//             draggable="false"
//             className={`mx-auto z-10 w-[300px] h-[300px] lg:w-[400px] lg:h-[400px] transition-transform duration-1000 md:h-auto ${
//               isVisible ? "translate-y-0" : "translate-y-40"
//             } mt-40 lg:mt-0`}
//             priority={true}
//           />
//           {/* <div className="absolute bottom-0 lg:-bottom-44 rounded-lg lg:rounded-2xl left-2/9 lg:left-1/2 p-1 lg:p-3 transform lg:-translate-x-1/2 flex flex-col items-center justify-center bg-white/50 lg:w-[590px]  border border-gray-300 ">
//          <motion.div
//           initial={{ y: 50, opacity: 0 }}
//           animate={{ y: 0, opacity: 1 }}
//           transition={{ duration: 1, ease: "easeOut" }}
//         >
//           <div className="relative  rounded  lg:rounded-[24px] w-[280px] lg:w-[522px] xl:w-lg ">
//             <div className="flex lg:gap-2 items-center bg-white lg:w-[560px] lg:-ml-6 rounded-lg lg:rounded-2xl pl-2 lg:pl-4 py-1 lg:py-2 lg:scale-y-[-1]  relative overflow-hidden inverted-radius ">
//               <div className="w-[40px] h-[40px] lg:w-[160px] lg:scale-y-[-1]  lg:h-[80px] overflow-hidden rounded-lg lg:rounded-xl flex-shrink-0">
//                 <Image
//                   src="/assets/abstract.png"
//                   alt="Abstract Design"
//                   width={160}
//                   height={80}
//                   className="object-cover w-full h-full"
//                   draggable="false"
//                 />
//               </div>
//               <div className="flex-1 px-2 lg:px-0 lg:scale-y-[-1]">
//                 <h2 className="font-semibold text-[10.86px] lg:text-lg">Uncover our identity</h2>
//                 <p className="text-gray-600 text-[10px] lg:text-sm">
//                   We are a creative hub shaping the future of digital design and
//                   technology.
//                 </p>
//               </div>

//             </div>
//             <Link href="/who-are-we">
//                 <div className="absolute -top-[2px] right-[10px] lg:-right-[15px] lg:top-[64px] w-6 h-6 lg:w-9 lg:h-9 bg-white rounded-full shadow-md flex items-center justify-center z-50">
//                   <GoArrowRight className="text-[#6F1877] lg:text-[25px] text-[15px]" />
//                 </div>
//               </Link>
//           </div>
//         </motion.div>
//          </div> */}
//         </div>
//       </div>
//       {/* Count Down */}
//       <div className=" items-center z-20 justify-center mt-0 flex flex-col md:flex-row mx-2 lg:mx-0 ">
//         <div className="w-full  items-center ">
//           <div className=" bg-transparent lg:bg-white  rounded-lg lg:rounded-3xl  gradient-border  py-1 lg:py-0  flex items-center justify-around ">
//             <div className="flex items-center text-center">
//               <CountUp
//                 end={30}
//                 duration={2}
//                 className={`text-[20px] lg:text-[49.07px] font-[600] text-[#414141] ${roboto.className}`}
//               />
//               <span className="text-[20px] lg:text-[49.07px] font-[600] text-[#414141]">
//                 +
//               </span>
//               <span
//                 className={`text-[14px] lg:text-[26.17px] text-[#6E6E6E] whitespace-nowrap  ${roboto.className}`}
//               >
//                 &nbsp;Projects
//               </span>
//             </div>
//             <div className="flex items-center text-center">
//               <CountUp
//                 end={40}
//                 duration={2}
//                 className={`text-[20px] lg:text-[49.07px] font-[600] text-[#414141] ${roboto.className}`}
//               />
//               <span className="text-[20px] lg:text-[49.07px] font-[600] text-[#414141]">
//                 +
//               </span>
//               <span
//                 className={`text-[14px] lg:text-[26.17px] text-[#6E6E6E] whitespace-nowrap  ${roboto.className}`}
//               >
//                 &nbsp;Developers
//               </span>
//             </div>
//             <div className="flex items-center text-center">
//               <CountUp
//                 end={10}
//                 duration={2}
//                 className={`text-[20px] lg:text-[49.07px] font-[600] text-[#414141] ${roboto.className}`}
//               />
//               <span className="text-[20px] lg:text-[49.07px] font-[600] text-[#414141]">
//                 +
//               </span>
//               <span
//                 className={`text-[14px] lg:text-[26.17px] text-[#6E6E6E] whitespace-nowrap  ${roboto.className}`}
//               >
//                 &nbsp;Ecosystems
//               </span>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import CountUp from "react-countup";
import { roboto } from "../Fonts/fonts"; // Assuming you've already set this up in your Fonts module
// import { GoArrowRight } from "react-icons/go";
import { FaArrowRight } from "react-icons/fa6";

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="text-gray-800 pt-0 lg:pt-16 bg-white px-0 lg:px-12 w-full flex flex-col gap-12 lg:gap-28">
      {/* Main Content */}
      <div
        className={`flex flex-col-reverse lg:flex-row w-full items-center transition-opacity duration-1000 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        {/* Text */}
        <div className="w-full lg:w-1/2 text-center md:text-left mt-20 z-10 flex flex-col justify-center lg:justify-start">
          <h1
            className={`md:text-[62px] lg:text-[62px] 2xl:text-[65px] text-[24px] text-center lg:text-left font-bold transition-transform duration-1000 py-0 lg:py-10 leading-[1.2]`}
          >
            <span className="flex flex-row lg:flex-col items-center justify-center lg:items-start gap-x-2 text-center ">
              <span>Building Your</span>
              <span className="bg-color block">BUSINESSES</span>
            </span>
            & Powering
            <span className="bg-color"> WEB3</span>
          </h1>
          <p
            className={`lg:text-black mt-3 lg:mt-0 text-[12px] text-center md:text-[21px] lg:text-left 2xl:text-[27px] lg:text-[24px] transition-opacity duration-1000 ${
              isVisible ? "opacity-100" : "opacity-0"
            }`}
          >
            We help businesses grow with smart strategies
            <br />
            and the latest Web3 technology, making
            <br />
            success easier to achieve.
          </p>
          <div className="flex justify-center lg:justify-start">
            <div className="relative mt-14">
              {/* bg-[#ba24d5] */}
              <motion.div
                className={`absolute top-0 left-0 h-full bg-[#BA24D5] rounded-full ${
                  isVisible ? "opacity-100 bg-[#BA24D5]" : "opacity-0"
                }`}
                initial={{ width: 0 }}
                animate={isVisible ? { width: "100%" } : { width: 0 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
              />

              <motion.div
                className={`flex items-center relative top-0 md:flex pl-8 overflow-hidden`}
                initial={{ opacity: 0 }}
                animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
                transition={{ delay: 1, duration: 0.7 }}
              >
                <Link href="/how-we-help-screen" className="pr-3 lg:pr-0">
                  <button
                    className={`relative z-10 flex items-center px-4 py-2 lg:pl-3 lg:pr-8 lg:py-3  text-white text-[11px] lg:text-lg transition-all duration-300 bg-[#BA24D5] `}
                  >
                    HOW WE HELP
                    <span className="ml-2 w-5 h-5 lg:w-8 lg:h-8 flex items-center justify-center border-2 border-white rounded-full font-light">
                      <FaArrowRight />
                    </span>
                  </button>
                </Link>
                <Link href="/contact-us">
                  <button
                    className={`relative z-10 mr-[2px] -ml-[13px]  lg:ml-[-16px] lg:mr-[2px] px-3 py-[7px]   lg:px-10 lg:py-[11.6px] rounded-full   bg-white text-black text-[12px] lg:text-lg transition-all duration-300 cursor-pointer hover:bg-gray-100`}
                  >
                    Contact Us
                  </button>
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
        {/* Image */}
        <div className="w-full lg:w-1/2 mt-5 md:mt-5 relative">
          <div className="absolute top-0 right-0 w-full h-[950px] lg:h-[680px] xl:h-185 bg-no-repeat bg-cover bg-desktop-image lg:rounded-lg z-0 -mt-20 lg:-mt-42"></div>
          <Image
            src="/assets/cube1.png"
            alt="Web3 Cube"
            width={400}
            height={400}
            draggable="false"
            className={`mx-auto z-10 w-[300px] h-[300px] lg:w-[400px] lg:h-[400px] transition-transform duration-1000 md:h-auto ${
              isVisible ? "translate-y-0" : "translate-y-40"
            } mt-40 lg:mt-0`}
            priority={true} // Ensure hero image is prioritized for LCP
          />
        </div>
      </div>

      {/* Count Down */}
      <div className="items-center z-20 justify-center mt-0 flex flex-col md:flex-row mx-2 lg:mx-0">
        <div className="w-full items-center">
          <div className="bg-transparent lg:bg-white rounded-lg lg:rounded-3xl gradient-border py-1 lg:py-0 flex items-center justify-around">
            <div className="flex items-center text-center">
              <CountUp
                end={30}
                duration={2}
                className={`text-[20px] lg:text-[49.07px] font-[600] text-[#414141] ${roboto.className}`}
              />
              <span className="text-[20px] lg:text-[49.07px] font-[600] text-[#414141]">
                +
              </span>
              <span
                className={`text-[14px] lg:text-[26.17px] text-[#6E6E6E] whitespace-nowrap ${roboto.className}`}
              >
                &nbsp;Projects
              </span>
            </div>
            <div className="flex items-center text-center">
              <CountUp
                end={40}
                duration={2}
                className={`text-[20px] lg:text-[49.07px] font-[600] text-[#414141] ${roboto.className}`}
              />
              <span className="text-[20px] lg:text-[49.07px] font-[600] text-[#414141]">
                +
              </span>
              <span
                className={`text-[14px] lg:text-[26.17px] text-[#6E6E6E] whitespace-nowrap ${roboto.className}`}
              >
                &nbsp;Developers
              </span>
            </div>
            <div className="flex items-center text-center">
              <CountUp
                end={10}
                duration={2}
                className={`text-[20px] lg:text-[49.07px] font-[600] text-[#414141] ${roboto.className}`}
              />
              <span className="text-[20px] lg:text-[49.07px] font-[600] text-[#414141]">
                +
              </span>
              <span
                className={`text-[14px] lg:text-[26.17px] text-[#6E6E6E] whitespace-nowrap ${roboto.className}`}
              >
                &nbsp;Ecosystems
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
