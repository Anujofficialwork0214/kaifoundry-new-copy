"use client";

import { useInView } from "react-intersection-observer";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link"; // Import Link for navigation
import pic from "../../../public/assets/WhoAreWe/Home.svg";
import { roboto } from "../Fonts/fonts";

const Home = () => {
  const { ref, inView } = useInView({ triggerOnce: false, threshold: 0.2 });

  return (
    <section
      ref={ref}
      className="w-full bg-white py-16 lg:mt-0 md:mt-[70px] overflow-x-hidden relative z-0 "
    >
   <div className="w-full px-6 md:px-10 flex flex-col-reverse lg:flex-row items-center justify-between max-w-[1728px] mx-auto mt-10">

        {/* <div className="max-w-xl text-center lg:text-left mt-[-5%]  "> */}
        <div className="max-w-xl text-center lg:text-left mt-10 lg:mt-[-5%]">

          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 1.0, ease: "easeInOut" }}
            className={`text-[24px] lg:text-[62px] font-[700] flex justify-center lg:justify-start ${roboto.className}`}
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#BA24D5] to-[#EA83FF]">
              Kai Foundry
            </span>
            :
            <span className="inline lg:hidden text-[24px]  font-[700] text-gray-900">{" "}This Is</span>
          </motion.h2>

          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 1.0, ease: "easeInOut" }}
            className={`text-[24px] lg:text-[62px] font-[700] text-gray-900 lg:-mt-6 ${roboto.className}`}
          >
            <span className="hidden lg:block">This Is</span>
            <span className="block lg:-mt-6">
              <span className="italic  text-transparent bg-clip-text bg-gradient-to-r from-[#BA24D5] to-[#EA83FF]">
                Who
              </span>{" "}
              We Are
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, ease: "easeInOut", delay: 1.0 }}
            className="text-[#808080] font-[400] ml-2 mt-4 text-[14px] lg:text-[22px]"
          >
            A team of innovators, creators, and problem-solvers shaping the
            future of blockchain.
          </motion.p>

          <Link href="/ContactUs"> {/* Link to the Contact Us page */}
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, ease: "easeInOut", delay: 0.9 }}
            className="bg-[#D444F1] mt-12 ml-2 text-white hover:bg-[#B33BC1] rounded-full py-2 lg:py-3 px-2 lg:px-4 w-36 lg:w-40 transition duration-300"
            >
              Contact Us
            </motion.button>
          </Link>
        </div>

        <div className="mt-10 lg:mt-0 lg:ml-10">
          <div className="rounded-3xl overflow-hidden ">
            <Image src={pic} alt="Team Working" width={650} height={400}
              draggable="false" />
          
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;