"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const HeroSection = () => {
  return (
    // <section className="relative flex items-center py-50 w-full overflow-hidden px-6 md:px-20">

    //   <div className="absolute inset-0 z-0">
    //     <Image
    //       src="/assets/background/ai_bg.gif"
    //       alt="Background"

    //       className="w-full h-full object-cover"
    //       width={1920}
    //       height={1080}

    //     />
    //   </div>

    //   <motion.div
    //     initial={{ x: '-100%' }}
    //     animate={{ x: 0 }}
    //     transition={{ duration: 0.8, ease: "easeOut" }}
    //     className="absolute inset-y-0 left-0 w-1/2 bg-white/30 backdrop-blur-md z-10"
    //   ></motion.div>

    //   <motion.div
    //     initial={{ x: -100, opacity: 0 }}
    //     animate={{ x: 0, opacity: 1 }}
    //     transition={{ duration: 0.8, ease: "easeOut" }}
    //     className="relative z-20 text-left p-8 rounded-lg w-full md:w-2/3 lg:w-1/2"
    //   >
    //     <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold text-gray-900">
    //     <span className="text-[#E95DFF]">AI Services</span>
    //        That Think, Learn & Evolve <br />

    //     </h2>
    //     <p className="text-gray-600 text-base md:text-lg mt-4">
    //       Unlock the power of Artificial Intelligence to automated tasks, drive insights and create smater solutions for your business
    //     </p>
    //     <Link href="/ContactUs">
    //       <motion.button
    //         whileHover={{ scale: 1.05 }}
    //         whileTap={{ scale: 0.95 }}
    //         className="mt-6 px-6 py-3 rounded-full bg-gradient-to-r from-[#E95DFF] to-[#D680FF] text-white text-lg font-medium shadow-lg transition"
    //       >
    //         Contact Us
    //       </motion.button>
    //     </Link>
    //   </motion.div>
    // </section>
    <section className="relative flex items-center py-60 w-full overflow-hidden px-6 md:px-6 ">
      {/* Background GIF */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/assets/background/Fluidsphere.gif"
          alt="Background"
          className="w-full h-full object-cover"
          width={1920}
          height={1080}
          draggable="false"
          priority={true}
        />
      </div>

      <motion.div
        initial={{ x: "-100%" }}
        animate={{ x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className=" absolute inset-y-0 left-0 w-full md:w-[52.8%] bg-white/50 backdrop-blur-sm md:backdrop-blur-md z-10"
      ></motion.div>

      <div className="w-full flex justify-center md:justify-start">
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative z-20 w-full md:w-2/3 lg:w-1/2 flex flex-col items-center text-center md:items-start md:text-left p-8 rounded-lg"
        >
          {/* <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold text-gray-900">
        <span className="text-[#9F1AB1]">AI Solutions </span>
           That Think, Learn & Evolve <br />
      
        </h2> */}
          <h2 className="text-[#333333] font-bold">
            {/* Small screens: single-line version */}
            <span className="block md:hidden text-xl sm:text-3xl">
              <span className=" bg-color font-bold">AI Solutions</span>{" "}
              That Think, Learn & Evolve
            </span>

            {/* Mobile only */}


            {/* Medium and larger screens only */}
            <span className="hidden md:block text-3xl lg:text-4xl xl:text-[60px] leading-tight">
              <span className="bg-color font-bold">
                AI Solutions
              </span>
              {" "}That Think, Learn & Evolve
            </span>

          </h2>

          <p className="text-[#333333] md:text-lg mt-6 text-[12px] md:text-[20px] 2xl:text-[28px]  ">
            Unlock the power of Artificial Intelligence to automated tasks,
            drive insights and create smater solutions for your business
          </p>
      
          <Link href="/contact-us">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
             className="bg-[#BA24D5] hover:bg-[#821890]  mt-10 text-white cursor-pointer rounded-full w-34 py-3 px-2 lg:py-3 lg:px-3 lg:w-34 transition duration-300">
              Contact Us
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
