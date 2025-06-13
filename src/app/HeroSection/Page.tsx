"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import CountUp from "react-countup";
import { roboto } from "../Fonts/fonts";
import { GoArrowRight } from "react-icons/go";

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="  text-gray-800 pt-0 lg:pt-16 bg-white px-0 lg:px-10 w-full flex flex-col gap-12 lg:gap-44  ">
      {/* Main Content */}
      <div className={`flex flex-col-reverse lg:flex-row w-full  items-center  transition-opacity duration-1000 ${isVisible ? "opacity-100" : "opacity-0"}`}>
        {/* Text */}
        <div className="w-full lg:w-1/2 text-center md:text-left mt-20 z-10  flex flex-col justify-center  lg:justify-start">
          <h1 className={` lg:text-[62px] text-[24px] text-center lg:text-left font-bold transition-transform duration-1000 py-0 lg:py-10 leading-[1.3]`}>
            <span className="flex flex-row lg:flex-col items-center justify-center lg:items-start gap-x-2 text-center ">
              <span>Build Your</span>
              <span className="bg-gradient-to-r from-[#821890] to-[#D444F1] bg-clip-text text-transparent block">
                BUSINESSES
              </span>
            </span>
            & Powering
            <span className="bg-gradient-to-r pr-5  from-[#821890] to-[#D444F1] bg-clip-text text-transparent italic">
              WEB3
            </span>
          </h1>
          <p
            className={`text-gray-600 mt-3 text-[12px] text-center lg:text-left lg:text-[21px] transition-opacity duration-1000 ${
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
          <div className="relative mt-8">
  
  <motion.div
    className={`absolute top-0 left-0 h-full bg-[#D444F1] rounded-full ${
      isVisible ? "opacity-100" : "opacity-0"
    }`}
    initial={{ width: 0 }}
    animate={isVisible ? { width: "100%" } : { width: 0 }}
    transition={{ duration: 0.6, ease: "easeInOut" }}
  />
  
  
  <motion.div
    className={`flex relative top-0  md:flex rounded-full overflow-hidden`}
    initial={{ opacity: 0 }}
    animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
    transition={{ delay: 0.8, duration: 0.5 }} 
  >
    <Link href="/HowWeHelpScreen">
      <button
        className={`relative z-10 flex items-center px-4 py-2 lg:px-8 lg:py-3 text-white text-[11px] lg:text-lg transition-all duration-300 bg-[#D444F1] rounded-l-full rounded-r-none hover:bg-[#c13ae8]`}
      >
        HOW WE HELP
        <span className="ml-2 w-5 h-5 lg:w-7 lg:h-7 flex items-center justify-center border-2 border-white rounded-full font-light">
          ➜
        </span>
      </button>
    </Link>
    <Link href="/ContactUs">
      <button
        className={`relative z-10 -ml-[15px] lg:ml-[-10px] px-3 py-2 lg:px-6 lg:py-3 rounded-full border border-white lg:border-purple-500 bg-white text-black text-[12px] lg:text-lg transition-all duration-300 cursor-pointer hover:bg-gray-100`}
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
          <div className="absolute top-0 right-0 w-full h-[950px] lg:h-[680px] xl:h-185 bg-no-repeat bg-cover lg:bg-desktop-image lg:rounded-lg z-0 -mt-20 lg:-mt-42"
  style={{ backgroundImage: "url('/Rectangle 41.png')" }}
          >
              {" "}
            </div>
            <Image
              src="/assets/cube1.png"
              alt="Web3 Cube"
              width={400}
              height={400}
              draggable="false"
              className={`mx-auto z-10 w-[300px] h-[300px] lg:w-[400px] lg:h-[400px] transition-transform duration-1000 md:h-auto ${
                isVisible ? "translate-y-0" : "translate-y-60"
              } mt-40 lg:-mt-20`} 
            />
         <div className="absolute bottom-0 lg:-bottom-44 rounded-lg lg:rounded-2xl left-2/9 lg:left-1/2 p-1 lg:p-3 transform lg:-translate-x-1/2 flex flex-col items-center justify-center bg-white/50 lg:w-[600px]  border border-gray-300 ">
         <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}  
        >
          <div className="relative  rounded  lg:rounded-[24px] w-[280px] lg:w-[522px] xl:w-lg ">
            <div className="flex lg:gap-2 items-center bg-white lg:w-[560px] lg:-ml-6 rounded-lg lg:rounded-2xl pl-2 lg:pl-4 py-1 lg:py-2 lg:scale-y-[-1]  relative overflow-hidden inverted-radius ">
              <div className="w-[40px] h-[40px] lg:w-[160px] lg:scale-y-[-1]  lg:h-[80px] overflow-hidden rounded-lg lg:rounded-xl flex-shrink-0">
                <Image
                  src="/assets/abstract.png"
                  alt="Abstract Design"
                  width={160}
                  height={80}
                  className="object-cover w-full h-full"
                  draggable="false"
                />
              </div>
              <div className="flex-1 px-2 lg:px-0 lg:scale-y-[-1]">
                <h2 className="font-semibold text-[10.86px] lg:text-lg">Uncover our identity</h2>
                <p className="text-gray-600 text-[10px] lg:text-sm">
                  We are a creative hub shaping the future of digital design and
                  technology.
                </p>
              </div>
              
            </div>
            <Link href="/WhoAreWe">
                <div className="absolute -top-[2px] right-[10px] lg:-right-[15px] lg:top-[64px] w-6 h-6 lg:w-9 lg:h-9 bg-white rounded-full shadow-md flex items-center justify-center z-50">
                  <GoArrowRight className="text-[#6F1877] lg:text-[25px] text-[15px]" />
                </div>
              </Link>
          </div>
        </motion.div>
         </div>
         


        </div>

      </div>
      {/* Count Down */}
      <div className=" items-center z-20 justify-center mt-12 flex flex-col md:flex-row mx-2 lg:mx-0 ">
        <div className="w-full  items-center ">
          <div className=" bg-transparent lg:bg-white  rounded-lg lg:rounded-3xl  gradient-border  py-1 lg:py-0  flex items-center justify-around "
          >
            <div className="flex items-center text-center">
              <CountUp
                end={30}
                duration={2}
                className={`text-[20px] lg:text-[49.07px] font-[600] text-[#414141] ${roboto.className}`}
              />
              <span className="text-[20px] lg:text-[49.07px] font-[600] text-[#414141]">+</span>
              <span className={`text-[14px] lg:text-[26.17px] text-[#6E6E6E] whitespace-nowrap  ${roboto.className}`}>
                &nbsp;Projects
              </span>
            </div>
            <div className="flex items-center text-center">
              <CountUp
                end={40}
                duration={2}
                className={`text-[20px] lg:text-[49.07px] font-[600] text-[#414141] ${roboto.className}`}
              />
             <span className="text-[20px] lg:text-[49.07px] font-[600] text-[#414141]">+</span>
             <span className={`text-[14px] lg:text-[26.17px] text-[#6E6E6E] whitespace-nowrap  ${roboto.className}`}>
                &nbsp;Developers
              </span>
            </div>
            <div className="flex items-center text-center">
              <CountUp
                end={10}
                duration={2}
                className={`text-[20px] lg:text-[49.07px] font-[600] text-[#414141] ${roboto.className}`}
              />
             <span className="text-[20px] lg:text-[49.07px] font-[600] text-[#414141]">+</span>
             <span className={`text-[14px] lg:text-[26.17px] text-[#6E6E6E] whitespace-nowrap  ${roboto.className}`}>
                &nbsp;Ecosystems
              </span>
            </div>
          </div>
        </div>
      </div>

      
    </div>
  );
}


// "use client";
// import React, { useEffect, useState } from "react";
// import Image from "next/image";
// import Link from "next/link";
// import { motion } from "framer-motion";
// import CountUp from "react-countup";

// export default function HeroSection() {
//   const [isVisible, setIsVisible] = useState(false);

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setIsVisible(true);
//     }, 100);

//     return () => clearTimeout(timer);
//   }, []);

//   return (
//     <div className=" bg-white text-gray-800 pt-16  w-full  ">
//       {/* Main Content */}
//       <div
//         className={`flex flex-col md:flex-row items-center xl:mx-10 transition-opacity duration-1000 ${
//           isVisible ? "opacity-100" : "opacity-0"
//         }`}
//       >
//         <div className="md:w-1/2 text-center md:text-left mt-20 ">
//           <h1
//             className={` lg:text-5xl xl:text-6xl md:text-3xl font-bold transition-transform duration-1000 py-10 leading-[1.3]`}
//           >
//             Building Your{""}
//             <span className="bg-gradient-to-r from-[#821890] to-[#D444F1] bg-clip-text text-transparent flex ">
//               BUSINESSES
//             </span>
//             & Powering
//             <span className="bg-gradient-to-r pr-5  from-[#821890] to-[#D444F1] bg-clip-text text-transparent italic">
//               WEB3
//             </span>
//           </h1>
//           <p
//             className={`text-gray-600 mt-3 md:text-[14px] xl:text-[28px] lg:text-[21px] transition-opacity duration-1000 ${
//               isVisible ? "opacity-100" : "opacity-0"
//             }`}
//           >
//             We help businesses grow with smart strategies
//             <br />
//             and the latest Web3 technology, making
//             <br />
//             success easier to achieve.
//           </p>
//           <div
//             className={`flex items-center relative top-6 md:flex transition-opacity duration-1000 mt-8 ${
//               isVisible ? "opacity-100" : "opacity-0"
//             }`}
//           >
//             <div
//               className="absolute inset-y-0 left-0 right-0 bg-[#D444F1]  rounded-full  w-[calc(80%-10px)] lg:w-[calc(60%-10px)]  xl:w-80 "
//               // style={{ width: "calc(48% - 10px)" }}
//             ></div>
//             <Link href="/HowWeHelpScreen">
//               <button
//                 className={`relative z-10 flex items-center px-8 py-3 text-white text-[18px] text-lg transition-transform duration-1000 transform ${
//                   isVisible
//                     ? "translate-x-0 bg-[#D444F1]"
//                     : "translate-x-10 bg-[#D444F1]"
//                 } rounded-l-full rounded-r-none`}
//               >
//                 HOW WE HELP
//                 <span className="ml-2 w-7 h-7 flex items-center justify-center border-2 border-white rounded-full font-light">
//                   ➜
//                 </span>
//               </button>
//             </Link>
//             <Link href="/ContactUs">
//               <button
//                 className={`relative z-10 ml-[-10px] px-6 py-3 rounded-full border border-purple-500 bg-white text-black text-lg transition-transform duration-1000 transform cursor-pointer ${
//                   isVisible
//                     ? "translate-x-0 bg-[#D444F1]"
//                     : "translate-x-10 bg-[#D444F1]"
//                 }`}
//               >
//                 Contact Us
//               </button>
//             </Link>
//           </div>
//         </div>
//         <div className="md:w-1/2 mt-8 md:mt-5 relative">
//           <div className="absolute top-0 right-0 w-full h-[650px] lg:h-[680px] xl:h-185 bg-gradient-to-r from-[#A5C0EE] to-[#FBC5EC] rounded-lg z-0 -mt-20 lg:-mt-42">
//             {" "}
//           </div>
//           <Image
//             src="/assets/cube1.png"
//             alt="Web3 Cube"
//             width={400}
//             height={400}
//             draggable="false"
//             className={`mx-auto z-10 hidden md:block transition-transform duration-1000 md:h-auto ${
//               isVisible ? "translate-y-0" : "translate-y-60"
//             } -mt-20`} // Animate from bottom to top
//           />
//         </div>
//       </div>

//       <div className="absolute bottom-0 right-0 flex flex-col items-center justify-center ">
//         <motion.div
//           initial={{ y: 50, opacity: 0 }}
//           animate={{ y: 0, opacity: 1 }}
//           transition={{ duration: 1, ease: "easeOut" }}
//           // className="bg-white shadow-lg lg:left-12 2xl:left-10  xl:ml-[520px] 2xl:ml-[610px] rounded-2xl items-center  p-4 relative z-10 overflow-hidden hidden md:flex -mt-16  -space-y-2 md:mr-10 lg:mr-0"
//           className="bg-white shadow-lg rounded-2xl items-center p-2 xl:p-4 relative z-10 overflow-hidden hidden md:flex  -mt-10  lg:-mt-16   -space-y-2 transform left-[48.5%] lg:left-[43%] xl:left-[45%] 2xl:left-[40%]   -translate-x-1/2"
//           // style={{
//           //   background: "linear-gradient(to right, #f8f5ff, #fce7f3)",
//           //   borderRadius: "20px",
//           //   marginLeft: "710px",
//           // }}
//           style={{
//             background: "linear-gradient(to right, #f8f5ff, #fce7f3)",
//             borderRadius: "20px",
//             // Default margin-left for screens smaller than 2xl
//           }}
//         >
//           <div className="relative    rounded-[24px] w-[380px] lg:w-[422px] xl:w-lg ">
//             <div className="flex items-center bg-white rounded-[18px]  pl-4 py-3  relative overflow-hidden">
//               {/* Left Abstract Image */}
//               <div className="w-[120px]  h-[80px] overflow-hidden rounded-xl flex-shrink-0">
//                 <Image
//                   src="/assets/abstract.png"
//                   alt="Abstract Design"
//                   width={120}
//                   height={80}
//                   className="object-cover w-full h-full"
//                   draggable="false"
//                 />
//               </div>

//               {/* Center Text */}
//               <div className="flex-1 px-4">
//                 <h2 className="font-semibold text-lg">Uncover our identity</h2>
//                 <p className="text-gray-600 text-sm">
//                   We are a creative hub shaping the future of digital design and
//                   technology.
//                 </p>
//               </div>
//               <Link href="/WhoAreWe">
//                 <div className="relative w-[75px] translate-x-[12px] h-full flex items-center justify-center">
//                   <div className="absolute  h-[65px] w-[68px] bg-[#fce7f3] rounded-tl-[18px]  rounded-bl-[-5px] -top-70" />

//                   {/* Arrow circle */}
//                   <div className="relative z-10 w-14 h-14 bg-white rounded-full shadow-md  border-[6px]  border-[#fce7f3]  flex items-center justify-center   top-7 ml-1">
//                     <span className="text-purple-600 text-xl">→</span>
//                   </div>
//                 </div>
//               </Link>
//             </div>{" "}
//           </div>
//         </motion.div>
//       </div>

//       <div className=" items-center  justify-center flex flex-col md:flex-row  ">
//         <div className=" w-7xl lg:w-full  items-center ">
//           <div className="bg-white rounded-full border border-fuchsia-300 border-r-0 border-l-0 shadow-sm flex items-center justify-around p-3 sm:p-4">
//             <div className="flex items-baseline text-center">
//               <CountUp
//                 end={30}
//                 duration={2}
//                 className="text-2xl sm:text-3xl font-semibold text-gray-800"
//               />
//               <span className="text-2xl font-bold">+</span>
//               <span className="text-sm sm:text-base text-gray-600 whitespace-nowrap">
//                 &nbsp;Projects
//               </span>
//             </div>
//             <div className="flex items-baseline text-center">
//               <CountUp
//                 end={40}
//                 duration={2}
//                 className="text-2xl sm:text-3xl font-semibold text-gray-800"
//               />
//               <span className="text-2xl font-bold">+</span>
//               <span className="text-sm sm:text-base text-gray-600 whitespace-nowrap">
//                 &nbsp;Developers
//               </span>
//             </div>
//             <div className="flex items-baseline text-center">
//               <CountUp
//                 end={10}
//                 duration={2}
//                 className="text-2xl sm:text-3xl font-semibold text-gray-800"
//               />
//               <span className="text-2xl font-bold">+</span>
//               <span className="text-sm sm:text-base text-gray-600 whitespace-nowrap">
//                 &nbsp;Ecosystems
//               </span>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
