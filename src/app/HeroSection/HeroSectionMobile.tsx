"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function HeroSectionMob() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className=" bg-white text-black bg-gradient-to-b lg:bg-gradient-to-r from-[#A5C0EE] to-[#FBC5EC]  ">
      {/* Main Content */}
      <div
        className={`flex flex-col-reverse md:flex-row items-center  justify-between md:px-12 py-16 transition-opacity duration-1000 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        {/* <div className="md:w-1/2 text-center mt-12 lg:mt-0 md:text-left z-10 px-2">
          <h1
            className={` text-[24px] md:text-7xl font-bold transition-transform duration-1000 ${
              isVisible ? "translate-y-0" : "translate-y-10"
            }`}
          >
            Building Your{" "}
            <span className="bg-gradient-to-r from-[#821890] to-[#D444F1] bg-clip-text text-transparent">
              BUSINESSES
            </span>{" "}
            & Powering{" "}
            <span className="bg-gradient-to-r from-[#821890] to-[#D444F1] bg-clip-text text-transparent italic">
              WEB3
            </span>
          </h1>
          <p
            className={`text-[#808080]  mt-7 text-[14px] lg:text-3xl px-4 z-10 transition-opacity duration-1000 ${
              isVisible ? "opacity-100" : "opacity-0"
            }`}
          >
            We help businesses grow with smart strategies and the latest Web3
            technology, making success easier to achieve.
          </p>
          <div
            className={`flex items-center justify-center lg:justify-start relative top-6 transition-opacity duration-1000 ${
              isVisible ? "opacity-100" : "opacity-0"
            }`}
          >
            <div
              className="absolute inset-y-0 left-1/2 lg:left-0 right-0  bg-[#D444F1] rounded-full"
              style={{ width: "calc(42% - 10px)" }}
            ></div>
            <Link href="/HowWeHelp">
              <button
                className={`relative z-10 flex items-center px-6 py-3 rounded-full text-white font-semibold text-lg transition-transform duration-1000 transform ${
                  isVisible
                    ? "translate-x-0 bg-[#D444F1]"
                    : "translate-x-10 bg-[#D444F1]"
                }`}
              >
                HOW WE HELP
                <span className="ml-2 w-7 h-7 flex items-center justify-center border-2 border-white rounded-full">
                  ➜
                </span>
              </button>
            </Link>
            <Link href="/ContactUs">
              <button
                className={`relative z-10 ml-[-10px] px-6 py-3 rounded-full border border-purple-500 bg-white text-black font-semibold text-[15px] transition-transform duration-1000 transform ${
                  isVisible
                    ? "translate-x-0 bg-[#D444F1]"
                    : "translate-x-10 bg-[#D444F1]"
                }`}
              >
                Contact Us
              </button>
            </Link>
          </div>
        </div> */}
        <div className="lg:w-1/2 w-full mt-8 md:mt-5 relative  mx-auto lg:h-auto">
          <div className="absolute top-0 right-0 w-full h-200 lg:h-175  bg-gradient-to-b lg:bg-gradient-to-r from-[#A5C0EE] to-[#FBC5EC] rounded-lg z-0 flex lg:block justify-center items-center"></div>
          <Image
            src="/assets/cube.png"
            alt="Web3 Cube"
            width={500}
            height={500}
            className={`relative z-10 w-[300px] mx-auto h-[300px] lg:w-[500px] mt-16 lg:mt-0 lg:h-[500px] transition-transform duration-1000 ${
              isVisible ? "translate-y-0" : "translate-y-60"
            }`}
          />
        </div>
      </div>

      {/* <div className="relative lg:flex lg:flex-col hidden items-center justify-center px-16 md:px-14 pb-0">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="bg-white shadow-lg rounded-2xl flex items-center p-6 space-x-4 relative z-10 overflow-hidden  md:flex"
          style={{
            background: "linear-gradient(to right, #f8f5ff, #fce7f3)",
            borderRadius: "20px",
            marginLeft: "auto",
          }}
        >
          <div className="w-24 h-16 overflow-hidden rounded-lg">
            <Image
              src="/assets/abstract.png"
              alt="Abstract Design"
              width={116}
              height={64}
              className="object-cover"
            />
          </div>
          <div className="flex-1 ">
            <h2 className="font-semibold text-lg">Uncover our identity</h2>
            <p className="text-gray-600 text-sm">
              We are a creative hub shaping the future of digital design and
              technology.
            </p>
          </div>
          <Link href="/WhoAreWe">
            <div className="w-10 h-10 flex items-center justify-center bg-white rounded-full shadow-md cursor-pointer">
              <span className="text-purple-500 text-xl">→</span>
            </div>
          </Link>
        </motion.div>
      </div> */}
    </div>
  );
}
