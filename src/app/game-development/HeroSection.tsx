"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const HeroSection = () => {
  return (
    <section className="relative flex items-center py-60 w-full overflow-hidden px-2 md:px-6 ">
      {/* Background GIF */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/assets/background/gd_bg.gif"
          alt="Background"
          className="w-full h-full object-cover "
          width={1920}
          height={1080}
          draggable="false"
        />
      </div>

      <motion.div
        initial={{ x: "-100%" }}
        animate={{ x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="absolute inset-y-0 left-0 w-full md:w-[52.8%] bg-transparent md:bg-white/50 backdrop-blur-sm md:backdrop-blur-md  z-10"
      ></motion.div>

      <div className="w-full flex justify-center md:justify-start">
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative z-20 w-full md:w-2/3 lg:w-1/2 flex flex-col items-center text-center md:items-start md:text-left p-8 rounded-lg"
        >
          <h2 className="text-3xl md:text-3xl lg:text-5xl xl:text-[70px] 2xl:text-[74px] font-bold text-[#333333] md:leading-20 ">
            Game That Keep <br />
            <span className="bg-clip-text bg-gradient-to-t from-[#BA24D5] to-[#ea9df6] lg:text-transparent text-[#BA24D5]">Players</span> Hooked
          </h2>
          {/* <p className="text-gray-600 text-base md:text-[20px] mt-4 ">
        We create engaging, high-performance games <br /> that players love — seamless, fun, and built for <br /> the future of gaming
      </p> */}
          {/* Mobile version — Single line */}
          <p className=" text-base text-[#333333]  mt-4 block md:hidden">
            We create engaging, high-performance games that players love —
            seamless, fun, and built for the future of gaming.
          </p>

          {/* Desktop version — With line breaks */}
          <p className="text-[#333333] text-[12px] md:text-[20px] 2xl:text-[28px]  mt-4 hidden md:block">
            We create engaging, high-performance games <br />
            that players love — seamless, fun, and built for <br />
            the future of gaming.
          </p>

          <Link href="/contact-us">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="hidden sm:block bg-[#D444F1] mt-12 text-white cursor-pointer hover:bg-[#B33BC1] rounded-full py-3 px-4 w-40 transition duration-300"
            >
              Contact Us
            </motion.button>
          </Link>
          <Link href="/contact-us">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="block sm:hidden bg-[#D444F1] mt-6 text-sm text-white cursor-pointer hover:bg-[#B33BC1] rounded-full py-2 px-3  transition duration-300"
            >
              Contact Us
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
