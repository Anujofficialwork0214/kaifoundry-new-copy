"use client";

import { motion, useAnimation } from "framer-motion";
import { useEffect, useState, useRef } from "react";
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
      "We craft immersive gaming experiences with extra-ordinary visuals, mechanics, and performance.",
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
      "Using the power of enhance user experiences and grow business opportunities.",
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
      className="flex-shrink-0  h-104 md:w-[450px] lg:h-[480px]  ml-0 lg:ml-2   rounded-4xl overflow-hidden md:mx-2 cursor-pointer block"
      style={{
        minWidth: isMobile ? "100%" : "350px",
        boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"
      }}
    >
      <div className="">
        <Image
          src={service.image}
          alt={service.title}
          className="w-full lg:h-[300px] h-[200px] object-cover"
          draggable="false"
          width={80}
          height={54}
        />
      </div>
      <div className="p-4 md:p-6 ">
        <h3

          className={`${screenWidth < 375 ? "text-[14px]" : ""} text-[16px] md:text-[21.52px] lg:text-[24.52px] xl:text-[24.50px] 2xl:text-[24.52px] font-[600] text-[#333333] mb-2`}
        >
          {service.title}
        </h3>
        <p

          className={`${screenWidth < 375 ? "text-[12px]" : ""
            } text-[#333333] text-[12px] md:text-[16px] lg:text-[16px] xl:text-[16px] 2xl:text-[18px] leading-0.3`}

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
  const [scrolled, setScrolled] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
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

  useEffect(() => {
    const scrollEl = scrollRef.current;
    if (!scrollEl) return;

    const handleScroll = () => {
      if (scrollEl.scrollTop > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    scrollEl.addEventListener("scroll", handleScroll);
    return () => scrollEl.removeEventListener("scroll", handleScroll);
  }, []);

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
      className="py-0 md:py-30 lg:px-14 px-0  overflow-hidden bg-white "
    >
      <div className=" mx-auto flex flex-col md:flex-row px-0 md:px-0 items-center lg:items-start">
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

        </motion.div>
        <div className="relative w-full md:w-1/2 lg:w-2/3 pb-4 pt-0 lg:p-4 px-4 md:px-0 ">

          {/* {isMobile ? (
            <>
              <hr className="text-[#E4E4E4] sticky  w-full h-[2px]  -mt-2" />
              <div className="flex flex-col gap-6 overflow-y-scroll scrollbar-hide h-[700px]">
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
          )  */}

          {isMobile ? (
            <div className="flex flex-col h-screen overflow-hidden w-full relative">
              <div className="mt-16 block sticky   w-full text-center z-30 lg:hidden self-center">
                <h2 className=" text-[24px] lg:text-[62px] font-[700] text-gray-900 leading-tight">
                  WHAT
                  WE <span className="bg-color">PROVIDE</span>
                </h2>
                <p className="text-[14px] lg:text-[32px] font-[400] lg:font-semibold text-[#434343] mt-4 leading-0 lg:leading-10">
                  Services That Drive Your Success
                </p>
                <hr className={`text-[#E4E4E4] sticky top-0 w-full  bg-[#E4E4E4] transition-all duration-300 ${scrolled ? "mb-0" : "mb-2"
                  } mt-6 z-10`} />
              </div>
              <div className="flex flex-col gap-6 overflow-y-auto px-2  pb-6 mt-0 scrollbar-hide" ref={scrollRef}>
                {services.map((service) => (
                  <ServiceCard
                    key={service.id}
                    service={service}
                    isMobile={isMobile}
                    screenWidth={screenWidth}
                  />
                ))}
              </div>
            </div>
          ) : (
            <div className="slider-container w-7xl overflow-hidden  flex space-x-0.5   ">

              <Image src="/svg/Line134.svg" width={20} height={140} alt="line" className="w-20 h-140 z-20 bg-white ml-0 " />

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
