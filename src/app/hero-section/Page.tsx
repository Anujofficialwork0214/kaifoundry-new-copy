"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import CountUp from "react-countup";
import { roboto } from "../Fonts/fonts"; // Assuming you've already set this up in your Fonts module


export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="text-gray-800 pt-0 lg:pt-16 bg-white px-0 lg:px-12 w-full flex flex-col gap-12 lg:gap-36">
      {/* Main Content */}
      <div
        className={`flex flex-col-reverse lg:flex-row w-full items-center transition-opacity duration-1000 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        {/* Text */}

        <div className="w-full lg:w-1/2 text-center md:text-left mt-20 z-10 flex flex-col justify-center lg:justify-start">
          <h1
            className={`md:text-[52px] lg:text-[55px] xl:text-[58px]  text-[24px] text-center lg:text-left font-bold transition-transform duration-1000 py-0 lg:py-10 leading-[1.2]`}
          >
            <span className="flex flex-row lg:flex-col items-center justify-center lg:items-start gap-x-2 text-center ">
              <span>Building Your</span>
              <span className="bg-color block">BUSINESSES</span>
            </span>
            & Powering
            <span className="bg-color"> WEB3</span>
          </h1>
          <p
            className={`lg:text-black mt-3 lg:mt-0 text-[12px] text-center md:text-[18px] lg:text-left xl:text-[21px] lg:text-[18px] transition-opacity duration-1000 ${
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
                transition={{ duration: 1.5, ease: "easeInOut" }}
              />

              <motion.div
                className={`flex items-center relative top-0 md:flex pl-8 overflow-hidden`}
                initial={{ opacity: 0 }}
                animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
                transition={{ delay: 1, duration: 1.5 }}
              >
                <Link href="/how-we-help-screen" className="pr-3 lg:pr-0">
                  <button
                    className={`relative z-10 flex items-center px-4 py-2 lg:pl-3 lg:pr-8 lg:py-3  text-white text-[11px] lg:text-lg xl:text-[15px] transition-all duration-300 bg-[#BA24D5] `}
                  >
                    HOW WE HELP
                    <span className="ml-2 w-5 h-5 lg:w-8 lg:h-8 flex items-center justify-center rounded-full font-light">
                      <svg
                        width="356"
                        height="356"
                        viewBox="0 0 356 356"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect
                          x="7.56606"
                          y="7.56606"
                          width="340.868"
                          height="340.868"
                          rx="166.453"
                          stroke="white"
                          strokeWidth="15.1321"
                        />
                        <path
                          d="M187.225 117.676C189.396 115.496 192.343 114.267 195.419 114.26C198.496 114.253 201.449 115.468 203.629 117.638L255.954 169.725C258.133 171.896 259.362 174.844 259.369 177.92C259.376 180.996 258.161 183.949 255.991 186.13L203.904 238.454C201.721 240.572 198.793 241.748 195.751 241.729C192.709 241.709 189.796 240.496 187.641 238.35C185.485 236.203 184.258 233.296 184.225 230.255C184.191 227.213 185.354 224.28 187.462 222.087L218.793 189.613L108.581 189.864C105.504 189.871 102.551 188.655 100.37 186.484C98.1896 184.314 96.9606 181.366 96.9536 178.289C96.9466 175.212 98.1622 172.258 100.333 170.078C102.504 167.897 105.452 166.668 108.529 166.661L218.741 166.411L187.262 134.08C185.082 131.909 183.854 128.962 183.847 125.885C183.84 122.809 185.055 119.856 187.225 117.676Z"
                          fill="white"
                        />
                      </svg>
                    </span>
                  </button>
                </Link>
                <Link href="/contact-us">
                  <button
                    className={`relative z-10 mr-[1.5px] mt-[1px] lg:mt-0 -ml-[13px]  lg:ml-[-16px] lg:mr-[2px] px-3 py-[7.5px]   lg:px-10 lg:py-[13.7px] rounded-full   bg-white text-black text-[12px] lg:text-lg xl:text-[15px] transition-all duration-300 cursor-pointer hover:bg-gray-100`}
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
                className={`text-[20px] lg:text-[49.07px] xl:text-[46px] font-[600] text-[#414141] ${roboto.className}`}
              />

              <span className="text-[20px] lg:text-[49.07px] xl:text-[46px] font-[600] text-[#414141]">
                +
              </span>

              <span
                className={`text-[14px] lg:text-[26.17px] xl:text-[23px] text-[#6E6E6E] whitespace-nowrap  ${roboto.className}`}
              >
                &nbsp;Projects
              </span>
            </div>
            <div className="flex items-center text-center">
              <CountUp
                end={40}
                duration={2}
                className={`text-[20px] lg:text-[49.07px] xl:text-[46px] font-[600] text-[#414141] ${roboto.className}`}
              />

              <span className="text-[20px] lg:text-[49.07px] xl:text-[46px] font-[600] text-[#414141]">
                +
              </span>

              <span
                className={`text-[14px] lg:text-[26.17px] xl:text-[23px] text-[#6E6E6E] whitespace-nowrap  ${roboto.className}`}
              >
                &nbsp;Developers
              </span>
            </div>
            <div className="flex items-center text-center">
              <CountUp
                end={10}
                duration={2}
                className={`text-[20px] lg:text-[49.07px] xl:text-[46px] font-[600] text-[#414141] ${roboto.className}`}
              />

              <span className="text-[20px] lg:text-[49.07px] xl:text-[46px] font-[600] text-[#414141]">
                +
              </span>

              <span
                className={`text-[14px] lg:text-[26.17px] xl:text-[23px] text-[#6E6E6E] whitespace-nowrap  ${roboto.className}`}
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
