"use client";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import { motion } from "framer-motion";
import img1 from "./../../../public/assets/WhoAreWe/FeaturesImg1.svg";
import img2 from "./../../../public/assets/WhoAreWe/FeaturesImg2.svg";
import img3 from "./../../../public/assets/WhoAreWe/FeaturesImg3.svg";
import { roboto } from "../Fonts/fonts";


const features = [
  {
    img: img1,
    title: "Make Blockchain Accessible",
    description:
      "We Simplify Blockchain Technology, Making It Easier For Businesses To Integrate And Benefit From It.",
  },
  {
    img: img2,
    title: "Secure And Trustworthy",
    description:
      "Our Goal Is To Make Blockchain Safer, So Businesses And Users Can Trust Their Data And Transactions.",
  },
  {
    img: img3,
    title: "Champion Decentralization",
    description:
      "We Believe People Should Own Their Digital Assets And Data Without Depending On Big Companies.",
  },
];

const FeaturesSection = () => {
  const { ref, inView } = useInView({ triggerOnce: false, threshold: 0.2 });

  return (
    <section
      ref={ref}
      className="px-6 lg:px-20 py-6 lg:py-16 bg-white w-full flex items-center pt-10 lg:pt-24 relative z-10"
      style={{
        backgroundImage: `url('/assets/background/bg3.gif')`,
        backgroundSize: "cover",
        backgroundPosition: "inverted",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center lg:items-start lg:justify-between gap-12 w-full">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className={`text-[24px] lg:text-[62px] font-[700] lg:text-[600] text-center lg:text-left lg:w-1/2 `}
        >
          What
          <span className="text-transparent bg-clip-text bg-gradient-to-t from-[#BA24D5] to-[#ea9df6]">
            {" "}
            Drives
          </span>{" "}
          Us
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-12 lg:w-1/2">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{
                duration: 0.4,
                delay: inView ? 0.4 + 0.2 * index : 0,
              }}
              className="flex flex-col items-center lg:items-start text-center lg:text-left gap-4"
            >
              <div className="w-20 h-20 flex-shrink-0 mx-auto lg:mx-0">
                <Image
                  src={feature.img}
                  alt={feature.title}
                  width={80}
                  height={80}
                  draggable="false"
                />
              </div>

              <h3 className="text-[16px] lg:text-[24px] font-[600] text-[#333333] mt-3">{feature.title}</h3>

              <p className="text-[12px] lg:text-[20px] font-[400] text-[#333333] mt-2">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
