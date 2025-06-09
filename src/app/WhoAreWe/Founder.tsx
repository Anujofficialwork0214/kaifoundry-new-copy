
"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaFacebookF, FaGithub, FaLinkedinIn } from "react-icons/fa";
import img from "./../../../public/assets/WhoAreWe/FounderImg.svg";

const FounderSection = () => {
  const { ref, inView } = useInView({ triggerOnce: false, threshold: 0.2 });

  return (
    <section ref={ref} className="px-4 sm:px-6 lg:px-20 py-16 font-inter">
      <div className="max-w-6xl mx-auto flex flex-col items-center">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-4xl sm:text-5xl md:text-6xl font-semibold text-center leading-tight sm:leading-[72px] mb-6"
        >
          Meet{" "}
          <span className="text-[#BA24D5] bg-clip-text">Our Founder</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-gray-600 text-center mb-12 text-base sm:text-lg leading-relaxed max-w-2xl"
        >
          We Focus on the details of everything we do. All to help businesses around the world.
        </motion.p>

        {/* Main Content */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-8">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
            className="w-full md:w-[400px] flex justify-center"
          >
            <Image
              src={img}
              alt="Founder"
              width={400}
              height={500}
              className="shadow-md object-cover"
              draggable="false"
            />
          </motion.div>

          {/* Text Card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
            className="w-full md:w-[420px] bg-[#FAE3FF] px-6 py-8 "
          >
            <h3 className="text-xl sm:text-2xl font-bold text-gray-800 pb-2">
              VINAYAK KALRA
            </h3>
            <p className="text-[#D444F1] font-semibold text-sm sm:text-base">
              Founder
            </p>
            <div className="w-10 border-b-2 border-[#D444F1] my-3"></div>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
              Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit, Sed Do Eiusmod Tempor Incididunt Ut Labore Et Dolore Magna Aliqua. Ut Enim Ad Minim Veniam, Quis Nostrud Exercitation Ullamco Laboris Nisi Ut Aliquip Ex Ea Commodo Consequat. Duis Aute Irure Dolor In Reprehenderit In Voluptate Velit Esse Cillum Dolore Eu Fugiat Nulla Pariatur.
            </p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.8, ease: "easeOut" }}
              className="flex gap-4 mt-6 text-[#D444F1] text-lg"
            >
              <a href="#" className="hover:text-[#EA83FF]"><FaFacebookF /></a>
              <a href="#" className="hover:text-[#EA83FF]"><FaGithub /></a>
              <a href="#" className="hover:text-[#EA83FF]"><FaLinkedinIn /></a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FounderSection;
