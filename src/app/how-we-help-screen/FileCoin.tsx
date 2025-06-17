"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

// Hook to detect screen size
const useIsMobile = () => {
  if (typeof window !== "undefined") {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
      const handleResize = () => setIsMobile(window.innerWidth < 768);
      handleResize(); // check on load
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }, [window.innerWidth]);

    return isMobile;
  }
};

const FileCoin = () => {
  const isMobile = useIsMobile();

  return (
    <section className="font-inter lg:pt-20 pt-0 relative flex flex-col-reverse lg:flex-row gap-2 lg:gap-0 items-center justify-between lg:px-20 py-0 lg:py-16 bg-[#FFFFFF]">
      {/* Left Content */}
      <div className="text-center md:text-left max-w-3xl">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-[24px] lg:text-[62px] font-bold text-gray-900 leading-tight"
        >
          Kai Foundry’s{" "}
          <span className="bg-color">
            Filecoin{" "}
          </span>
          <span className="bg-color">
            Wallet{" "}
          </span>{" "}
          for{" "}
          <span className="bg-color">
            KaiOS
          </span>{" "}
          device
        </motion.h1>

        {/* Desktop Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-[#666666] text-[14px] lg:text-[22px] mt-4 hidden lg:block"
        >
          It is specially designed to facilitate the storage, sending, <br />{" "}
          and receiving of Filecoin (FIL) on devices running the KaiOS <br />{" "}
          operating system.
        </motion.p>

        {/* Mobile Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-[#666666] text-[14px] lg:text-[22px] px-2 mt-4 block lg:hidden"
        >
          It is specially designed to facilitate the storage, sending, and
          receiving of Filecoin (FIL) on devices running the KaiOS operating
          system.
        </motion.p>

        {/* Features Bubble */}
        <div className="w-full h-[200px] lg:w-[600px] lg:h-[300px] rounded-full bg-[radial-gradient(circle,_#D7CDFF80_20%,_#FBE8FF00_50%)] lg:bg-[radial-gradient(circle,_#D7CDFF80_10%,_#FBE8FF00_50%)] relative">
          <div className="flex justify-start items-start absolute top-1/4 left-10 lg:top-1/3 lg:left-5">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="grid grid-cols-3 md:grid-cols-3 gap-4 border-white border-t-2 border-b-2 lg:border-t-4 lg:border-b-4 py-0 px-4 md:px-10"
            >
              <div className="text-center border-r-2 lg:border-r-4 py-3 border-white pr-4 text-[12px] lg:text-[22px]">
                Secure <br /> storage
              </div>
              <div className="text-center border-r-2 lg:border-r-4 py-3 border-white pr-4 text-[12px] lg:text-[22px]">
                Send and <br /> receive FIL <br /> tokens
              </div>
              <div className="text-center text-[12px] py-3 lg:text-[22px] border-white">
                Recovery <br /> phrase <br /> protection
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Right Image with Responsive Animation */}
      <motion.div
        initial={
          isMobile
            ? { opacity: 0, y: 60, scale: 0.8 }
            : { opacity: 0, scale: 0.8 }
        }
        animate={
          isMobile ? { opacity: 1, y: 0, scale: 1 } : { opacity: 1, scale: 1 }
        }
        transition={{ duration: 0.8, delay: 0.3 }}
        className="relative mt-10 md:mt-0"
      >
        {/* Blurred Background */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#414141] to-[#414141] opacity-20 blur-3xl w-full h-full rounded-full"></div>

        {/* GIF Background */}
        <div
          className="absolute inset-0 w-full h-full lg:bg-desktop-animation scale-[1.5] lg:scale-[2.2] overflow-hidden"
          style={{
            backgroundImage: "url(/assets/HowWeHelp/bg.gif)",
            backgroundAttachment: "cover",
            backgroundPosition: "center",
            opacity: "20%",
          }}
        ></div>

        {/* Phone Image */}
        <Image
          src="/assets/HowWeHelp/phone2.png"
          alt="KaiOS Phone"
          width={550}
          height={550}
          className="relative z-10 w-[350px] h-[350px] lg:w-[550px] lg:h-[550px]"
          draggable={false}
          priority={true}
        />
      </motion.div>
    </section>
  );
};

export default FileCoin;
