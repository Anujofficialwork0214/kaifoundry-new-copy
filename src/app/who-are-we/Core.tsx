"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import img1 from "./../../../public/assets/WhoAreWe/CoreImg1.svg";
import img2 from "./../../../public/assets/WhoAreWe/CoreImg2.svg";
import img3 from "./../../../public/assets/WhoAreWe/CoreImg3.svg";
import { manrope } from "../Fonts/fonts";

const coreValues = [
  {
    img: img1,
    title: "Innovation First",
    description:
      "We push boundaries, creating cutting-edge blockchain solutions that drive progress.",
  },

  {
    img: img2,
    title: "Grow Together",
    description:
      "We believe in teamwork, continuous learning, and evolving with the industry.",
  },
  {
    img: img3,
    title: "User-Centric Approach",
    description:
      "We design with people in mind, making blockchain technology accessible and seamless.",
  },

];

const CoreValuesSection = () => {
  const { ref, inView } = useInView({ triggerOnce: false, threshold: 0.2 });

  return (
    <section ref={ref} className="px-6 lg:px-20 py-16 bg-[#FCEBFF] ">
      <div className="max-w-6xl mx-auto flex flex-col  items-center">
        {/* Heading Animation */}
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="text-[28px] lg:text-[62px] font-[600] text-center mb-12"
        >
          Our{" "}
          <span className="bg-color">
            Core
          </span>{" "}
          Values
        </motion.h2>

        {/* Cards Animation */}
        <div className="flex flex-col md:flex-row justify-center gap-8 lg:gap-8">
          {coreValues.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{
                duration: 0.4,
                delay: inView ? index * 0.2 + 0.3 : 0,
                ease: "easeOut",
              }}
              className={`bg-white shadow-lg rounded-2xl p-4 lg:p-6 flex ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}  lg:flex-col items-center text-center max-w-md  lg:w-[484px]`}
            >
              <Image
                src={value.img}
                alt={value.title}
                width={250}
                height={250}
                draggable="false"
                priority={true}
                className="mb-6 w-[150px] h-[150px] lg:w-[250px] lg:h-[250px] object-cover"
              />
              <div className="flex flex-col">
                <h3 className={`text-[14px] lg:text-[26.09px] text-[#333333] lg:text-2xl font-[900] mb-2 lg:mb-8 text-left lg:text-center `}>{value.title}</h3>
                <p className={`text-[#333333] text-[12px] lg:text-[16.73px]  text-left lg:text-center`}>{value.description}</p>
              </div>

            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreValuesSection;
