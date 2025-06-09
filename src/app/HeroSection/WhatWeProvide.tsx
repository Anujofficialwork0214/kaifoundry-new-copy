"use client";

import { motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import Link from "next/link";

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
}

const services: Service[] = [
    {
    id: 2,
    title: "GAME DEVELOPMENT",
    description:
      "We specialize in engaging game experiences, leveraging cutting-edge tech for captivating gameplay and stunning visuals.",
    image: "/svg/img2.svg",
    link: "/GameDevelopment",
  },
  {
    id: 1,
    title: "BLOCKCHAIN DEVELOPMENT",
    description:
      "We create blockchain solutions that help businesses grow whether it’s smart contracts, digital tokens, or decentralized apps.",
    image: "/svg/img3.svg",
    link: "/BlockChainService",
  },

  {
    id: 3,
    title: "AI SERVICES",
    description:
      "Unlock the power of AI. We build custom AI solutions to automate processes, gain insights, and enhance user experiences.",
    image: "/svg/img1.svg",
    link: "/AIServices",
  },
];

const CARD_WIDTH_PX = 500;
const CARD_MARGIN_PX = 16;
const TOTAL_CARD_WIDTH_PX = CARD_WIDTH_PX + CARD_MARGIN_PX;
const ANIMATION_DURATION_SECONDS = 20;

// const ServiceCard = ({ service, isMobile }: ServiceCardProps) => (
//   <Link href={service.link} passHref legacyBehavior>
//     <a
//       className="flex-shrink-0 w-full md:w-[500px] bg-white rounded-xl shadow-lg overflow-hidden mx-2 cursor-pointer block"
//       style={{ minWidth: isMobile ? "100%" : `${CARD_WIDTH_PX}px` }}
//     >
//       <div className="overflow-hidden h-80">
//         <img
//           src={service.image}
//           alt={service.title}
//           className="w-full h-full object-cover"
//         />
//       </div>
//       <div className="p-4 md:p-6">
//         <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2">
//           {service.title}
//         </h3>
//         <p className="text-gray-700 text-sm md:text-base leading-relaxed">
//           {service.description}
//         </p>
//       </div>
//     </a>
//   </Link>
// );
const ServiceCard = ({ service, isMobile }: ServiceCardProps) => (
  <Link href={service.link} passHref legacyBehavior>
    <a
      className="flex-shrink-0 w-full md:w-[350px] bg-white rounded-xl shadow-lg overflow-hidden mx-2 cursor-pointer block"
      style={{ minWidth: isMobile ? "100%" : "350px" }}
    >
      <div className="overflow-hidden">
        <img
          src={service.image}
          alt={service.title}
          className="w-full h-64 object-cover"
          draggable="false"
        />
      </div>
      <div className="p-4 md:p-6">
        <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2">
          {service.title}
        </h3>
        <p className="text-gray-700 text-sm md:text-base leading-relaxed">
          {service.description}
        </p>
      </div>
    </a>
  </Link>
);

const WhatWeProvide = () => {
  const [isMobile, setIsMobile] = useState(false);
  const controls = useAnimation();
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: false });

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
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
    // <section ref={ref} className="py-20 md:py-40 bg-gray-50 overflow-hidden ">
    //   <div className="container mx-auto flex flex-col md:flex-row px-4 md:px-12 items-center md:items-start">
    //     <motion.div
    //       className="w-full md:w-1/3 mb-10 md:mb-0 md:pr-10 text-center md:text-left"
    //       initial={{ opacity: 0, x: -50 }}
    //       whileInView={{ opacity: 1, x: 0 }}
    //       viewport={{ once: true, amount: 0.3 }}
    //       transition={{ duration: 0.6, ease: "easeOut" }}
    //     >
    //       <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
    //         WHAT <br />
    //         WE <span className="text-[#D444F1]">PROVIDE</span>
    //       </h2>
    //       <p className="text-xl md:text-2xl lg:text-3xl font-semibold text-gray-600 mt-4">
    //         Services That Drive Your Success
    //       </p>
    //     </motion.div>
    //     <div className="relative w-full md:w-2/3  py-4">
    //       {isMobile ? (
    //         <div className="flex flex-col gap-6">
    //           {services.map((service) => (
    //             <ServiceCard
    //               key={service.id}
    //               service={service}
    //               isMobile={isMobile}
    //             />
    //           ))}
    //         </div>
    //       ) : (
    //         <div className="slider-container w-full overflow-hidden">
    //           <motion.div
    //             className="flex"
    //             animate={controls}
    //             initial={{ x: 0 }}
    //           >
    //             {displayServices.map((service, index) => (
    //               <ServiceCard
    //                 key={`${service.id}-${index}`}
    //                 service={service}
    //                 isMobile={isMobile}
    //               />
    //             ))}
    //           </motion.div>
    //         </div>
    //       )}
    //     </div>
    //   </div>
    // </section>
<section ref={ref} className="py-20 md:py-40 bg-gray-50 overflow-hidden">
  <div className="container mx-auto flex flex-col md:flex-row px-4 md:px-12 items-center md:items-start">
<motion.div
  className="w-full md:w-1/3 mt-10 md:mt-0 mb-10 md:mb-0 md:pr-10 text-center md:text-left"
  initial={{ opacity: 0, x: -50 }}
  whileInView={{ opacity: 1, x: 0 }}
  viewport={{ once: true, amount: 0.3 }}
  transition={{ duration: 0.6, ease: "easeOut" }}
>
  <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
    WHAT <br />
    WE <span className="text-[#D444F1]">PROVIDE</span>
  </h2>
  <p className="text-base sm:text-lg md:text-2xl lg:text-3xl font-semibold text-gray-600 mt-4">
    Services That Drive Your Success
  </p>
</motion.div>



    <div className="relative w-full md:w-2/3 py-4">
      {isMobile ? (
        <div className="flex flex-col gap-6 items-center justify-center">
          {services.map((service) => (
            <ServiceCard
              key={service.id}
              service={service}
              isMobile={isMobile}
            />
          ))}
        </div>
      ) : (
        <div className="slider-container w-full overflow-hidden">
          <motion.div
            className="flex"
            animate={controls}
            initial={{ x: 0 }}
          >
            {displayServices.map((service, index) => (
              <ServiceCard
                key={`${service.id}-${index}`}
                service={service}
                isMobile={isMobile}
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
