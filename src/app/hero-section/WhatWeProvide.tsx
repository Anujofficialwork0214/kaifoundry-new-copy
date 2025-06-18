"use client";

import { motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import Link from "next/link";
import Image from "next/image";

interface Service {
  id: number;
  title: string;
  description: string;
  image: string;
  link: string;
}

interface ServiceCardProps {
  service: Service;
  isMobile: boolean;
  screenWidth: number;
}

const services: Service[] = [
  {
    id: 2,
    title: "GAME DEVELOPMENT",
    description:
      "We specialize in engaging game experiences, leveraging cutting-edge tech for captivating gameplay and stunning visuals.",
    image: "/svg/img2.svg",
    link: "/game-development",
  },
  {
    id: 1,
    title: "BLOCKCHAIN DEVELOPMENT",
    description:
      "We create blockchain solutions that help businesses grow whether it’s smart contracts, digital tokens, or decentralized apps.",
    image: "/svg/img3.svg",
    link: "/blockchain-service",
  },

  {
    id: 3,
    title: "AI SERVICES",
    description:
      "Unlock the power of AI. We build custom AI solutions to automate processes, gain insights, and enhance user experiences.",
    image: "/svg/img1.svg",
    link: "/ai-services",
  },
];

const CARD_WIDTH_PX = 500;
const CARD_MARGIN_PX = 16;
const TOTAL_CARD_WIDTH_PX = CARD_WIDTH_PX + CARD_MARGIN_PX;
const ANIMATION_DURATION_SECONDS = 10;

const ServiceCard = ({ service, isMobile, screenWidth }: ServiceCardProps) => (
  <Link href={service.link} passHref legacyBehavior

  >
    <a
      className="flex-shrink-0  h-104 md:w-[500px] lg:h-[530px] ml-0 lg:ml-2   rounded-4xl shadow-xl overflow-hidden md:mx-2 cursor-pointer block"
      style={{ minWidth: isMobile ? "100%" : "350px" }}
    >
      <div className="">
        <Image
          src={service.image}
          alt={service.title}
          className="w-full lg:h-[300px] h-64 object-cover"
          draggable="false"
          width={100}
          height={64}
        />
      </div>
      <div className="p-4 md:p-6">
        <h3

          className={`${
            screenWidth < 375 ? "text-[14px]" : ""
          } text-[16px] md:text-[20px] 2xl:text-[30.52px] font-bold text-[#333333] mb-2`}

        >
          {service.title}
        </h3>
        <p

          className={`${
            screenWidth < 375 ? "text-[12px]" : ""
          } text-[#333333] text-[14px] md:text-[17px] 2xl:text-[21.54px]  leading-0.3`}

        >
          {service.description}
        </p>
      </div>
    </a>
  </Link>
);

const WhatWeProvide = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [screenWidth, setScreenWidth] = useState<number>(0);
  const controls = useAnimation();
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: false });

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
      setScreenWidth(window.innerWidth);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, [window.innerWidth]);

  const singleSetWidth = services.length * TOTAL_CARD_WIDTH_PX;

  useEffect(() => {
    if (isMobile) {
      controls.stop();
      return;
    }

    if (inView) {
      controls.start({
        x: [0, -singleSetWidth],
        transition: {
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: ANIMATION_DURATION_SECONDS,
            ease: "linear",
          },
        },
      });
    } else {
      controls.stop();
    }
  }, [inView, controls, singleSetWidth, isMobile]);

  const displayServices = isMobile ? services : [...services, ...services];

  return (
    <section
      ref={ref}
      className="py-0 md:py-30 lg:px-14 px-0 bg-gray-50 overflow-hidden  "
    >
      <div className=" mx-auto flex flex-col md:flex-row px-4 md:px-0 items-center lg:items-start">
        <motion.div
          className="w-full mb-10 md:mb-0 md:pr-10 text-center md:text-left"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div className="mt-20 hidden  lg:block">
            <h2 className=" text-[24px] md:text-[52px] 2xl:text-[62px] font-bold text-gray-900 leading-tight">
              WHAT <br />
              WE <span className="bg-color">PROVIDE</span>
            </h2>
            <p className="text-[14px] md:text-[24px] 2xl:text-[32px] font-[400] lg:font-semibold text-[#434343] mt-6 lg:leading-10">
              Services That Drive Your Success
            </p>
          </div>
          <div className="mt-20 block lg:hidden">
            <h2 className=" text-[24px] lg:text-[62px] font-[700] text-gray-900 leading-tight">
              WHAT
              WE <span className="bg-color">PROVIDE</span>
            </h2>
            <p className="text-[14px] lg:text-[32px] font-[400] lg:font-semibold text-[#434343] mt-6 leading-0 lg:leading-10">
              Services That Drive Your Success
            </p>
          </div>
        </motion.div>
        <div className="relative w-full md:w-1/2 lg:w-2/3 pb-4 pt-0 lg:p-4 px-4 md:px-0 ">

          {isMobile ? (
            <>
              <hr className="text-[#E4E4E4] w-full h-[1.5px] mb-10 -mt-2" />
              <div className="flex flex-col gap-6">
                {services.map((service) => (
                  <ServiceCard
                    key={service.id}
                    service={service}
                    isMobile={isMobile}
                    screenWidth={screenWidth}
                  />
                ))}

              </div>
            </>
          ) : (
            <div className="slider-container w-7xl overflow-hidden  flex space-x-0.5   ">
              {/* <Image src="/svg/Line134.svg" alt="line" width={4} height={4} /> */}
              <img src="/svg/Line134.svg" alt="line" className="w-20 h-160 z-20 bg-gray-50 ml-0 " />
              {/* <div className = 'border-2 border-gray-500 z-20'></div> */}
              <motion.div
                className="flex items-center"
                animate={controls}
                initial={{ x: 0 }}
              >
                {displayServices.map((service, index) => (
                  <ServiceCard
                    key={`${service.id}-${index}`}
                    service={service}
                    isMobile={isMobile}
                    screenWidth={screenWidth}
                  />
                ))}
              </motion.div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default WhatWeProvide;
