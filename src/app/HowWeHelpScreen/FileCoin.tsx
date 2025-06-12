"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const FileCoin = () => {
  return (
    <section className="font-inter lg:pt-20 pt-0 relative flex flex-col-reverse lg:flex-row items-center justify-between lg:px-20 py-0 lg:py-16 bg-[#FFFFFF]"> 
      {/* Left Content */}
      <div className="text-center md:text-left max-w-3xl">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-[24px] lg:text-[62px] font-bold text-gray-900 leading-tight" 
        >
          Kai Foundry’s <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#EA83FF] to-[#EA83FF]">Filecoin </span><span className="text-transparent bg-clip-text bg-gradient-to-r from-[#BA24D5] to-[#BA24D5]">Wallet </span>   for <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#EA83FF] to-[#BA24D5]">KaiOS</span> device
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-[#666666] text-[14px] lg:text-[22px] mt-4 hidden lg:block" 
        >
          It is specially designed to facilitate the storage, sending, <br /> and receiving of Filecoin (FIL) on devices running the KaiOS <br /> operating system.
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-[#666666] text-[14px] lg:text-[22px] px-2 mt-4 block lg:hidden" 
        >
          It is specially designed to facilitate the storage, sending,  and receiving of Filecoin (FIL) on devices running the KaiOS  operating system.
        </motion.p>

        {/* Features */}
        <div className="w-full h-[200px] lg:w-[600px] lg:h-[300px] rounded-full bg-[radial-gradient(circle,_#D7CDFF80_20%,_#FBE8FF00_50%)] lg:bg-[radial-gradient(circle,_#D7CDFF80_10%,_#FBE8FF00_50%)] relative">
          <div className="flex justify-start items-start absolute  top-1/4 left-10  lg:top-1/3 lg:left-5  ">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="grid grid-cols-3 md:grid-cols-3 gap-4 border-white border-t-2 border-b-2 lg:border-t-4 lg:border-b-4 py-0 px-4 md:px-10   " // Adjusted grid for mobile
            >
              {/* Feature 1 */}
              <div className=" text-center border-r-2 lg:border-r-4 py-3 lg:py-3 border-white pr-4 text-[12px] lg:text-[22px] mt-0 h-full ">
                Secure <br /> storage
              </div>
              {/* Feature 2 */}
              <div className=" text-center border-r-2   lg:border-r-4 py-3 lg:py-3 border-white h-full   pr-4 text-[12px] lg:text-[22px] ">
                Send and <br /> receive FIL <br /> tokens
              </div>
              {/* Feature 3 */}
              <div className="  text-center text-[12px] py-3 lg:py-3 lg:text-[22px] border-white  ">
                Recovery <br /> phrase <br /> protection
              </div>
            </motion.div>
          </div>
        </div>
        
      </div>

      {/* Right Image */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="relative mt-10 md:mt-0"
      >
        {/* Glowing Background */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#414141] to-[#414141] opacity-20 blur-3xl w-full h-full rounded-full"></div>

        {/* GIF Background */}
        <div className="absolute inset-0 w-full h-full rounded-full overflow-hidden">
  <Image
    src="/assets/HowWeHelp/bg.gif" 
    alt="Background GIF"
    layout="fill"
    objectFit="cover"
            className="opacity-20  inset-0 transform scale-200 "
            draggable="false"// Increased size and reduced opacity
  />
</div>

        {/* Phone Image */}
        <Image
          src="/assets/HowWeHelp/phone2.png" // Replace with your actual image path
          alt="KaiOS Phone"
          width={550} // Adjusted width for mobile
          height={550} // Adjusted height for mobile
          className="relative z-10 w-[450] h-[450] lg:w-[550] lg:h-[550]" // Ensure the phone image is above the GIF
          draggable={false}
        />
      </motion.div>
    </section>
  );
};

export default FileCoin;