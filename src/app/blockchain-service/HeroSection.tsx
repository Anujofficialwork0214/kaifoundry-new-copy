"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const HeroSection = () => {
  return (
    <section className="relative flex items-center py-50 w-full overflow-hidden px-2 md:px-6 ">
      {/* Background GIF */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/assets/background/bc_bg.gif"
          alt="Background"
          className="w-full h-full object-cover opacity-50 sm:opacity-100"
          width={1920}
          height={1080}
          draggable="false"
          priority={true}
          unoptimized
        />
      </div>

      <motion.div
        initial={{ x: "-100%" }}
        animate={{ x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="absolute inset-y-0 left-0 w-full md:w-[52.8%] bg-transparent md:bg-white/50 backdrop-blur-sm md:backdrop-blur-md  z-10  "
      />
      <div className="w-full flex justify-center md:justify-start">
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative z-20 w-full md:w-2/3 lg:w-1/2 flex flex-col items-center text-center md:items-start md:text-left p-8 rounded-lg"
        >
          <h2 className="font-bold text-[#333333]">
            {/* Small  */}
            <span className="block md:hidden text-xl   ">
              Empowering Innovation with{" "}
              <span className="bg-color">Blockchain</span>{" "}
              Solutions
            </span>

            {/* Medium  */}
            <span className="hidden md:block md:text-[52px] lg:text-[55px] xl:text-[59px]  text-[24px]  leading-tight">
              Empowering <br />
              Innovation with <br />
              <span className="bg-color">Blockchain</span>{" "}
              Solutions
            </span>
          </h2>

          <p className="text-[#333333] text-[12px] md:text-[16px] xl:text-[16px]  mt-4">
            Secure, scalable, and customized blockchain
            <br className="hidden md:inline" />
            development for the digital future.
          </p>

          {/* large */}
          <Link href="/contact-us">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#BA24D5] mt-10 text-white hover:bg-[#B33BC1] cursor-pointer rounded-full w-34 py-3 px-2 lg:py-3 lg:px-3 lg:w-34 transition duration-300">
              Contact Us
            </motion.button>
          </Link>

        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
