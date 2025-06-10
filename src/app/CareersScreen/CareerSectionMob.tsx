"use client";

import Image from "next/image";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
const images = [
  {
    src: "/assets/careers/img1.png",
    alt: "Career Image 1",
  },
  {
    src: "/assets/careers/img2.png",
    alt: "Career Image 2",
  },
  {
    src: "/assets/careers/img3.png",
    alt: "Career Image 3",
  },
  {
    src: "/assets/careers/img4.png",
    alt: "Career Image 4",
  },
  {
    src: "/assets/careers/img5.png",
    alt: "Career Image 5",
  },
  {
    src: "/assets/careers/img6.png",
    alt: "Career Image 6",
  },
];

const CareersSection = () => {
  const { ref, inView } = useInView({ triggerOnce: false, threshold: 0.2 });
  return (
    <section className="py-20 bg-white text-center" ref={ref}>
      <div className="container mx-auto px-6">
        {/* Title */}
        <motion.h2
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="text-[24px] lg:text-[62px] font-[600] text-gray-900"
         >
          Careers
        </motion.h2>
        <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, ease: "easeInOut", delay: 1.0 }} 
            className="text-[#808080] text-[14px] md:text-xl font-[500] mt-2"
          >
          Join A Team That Turns Ideas Into Impact
          </motion.p>
          
        
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, ease: "easeInOut", delay: 1.0 }} 
            className="text-[#808080] text-[14px] md:text-xl font-[500] ">
          One Block At A Time!
        </motion.p>
        <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        >
        <div className="flex flex-col gap-4 mt-10 mx-auto max-w-xs lg:hidden">

{/* First Row with First Image and Second/Third Images */}
<div className="flex gap-2">
  <div className="flex-1">
    <Image
      src={images[0].src}
      alt={images[0].alt}
      width={150}
      height={250}
                className=" object-cover"
                  draggable="false"
    />
  </div>
  <div className="flex flex-col gap-4">
    <div className="flex-1">
      <Image
        src={images[1].src}
        alt={images[1].alt}
        width={150}
        height={200}
                  className=" object-cover"
                    draggable="false"
      />
    </div>
    <div className="flex-1">
      <Image
        src={images[2].src}
        alt={images[2].alt}
        width={146}
        height={100}
                  className=" object-cover"
                    draggable="false"
      />
    </div>
  </div>
</div>

{/* Second Row */}
<div className="flex gap-4">
  <div className="flex-1">
    <Image
      src={images[3].src}
      alt={images[3].alt}
      width={650}
      height={250}
                className=" object-cover"
                  draggable="false"
    />
  </div>
  <div className="flex flex-col gap-4">
    <div className="flex-1">
      <Image
        src={images[5].src}
        alt={images[5].alt}
        width={120}
        height={120}
                  className=" object-cover"
                    draggable="false"
      />
    </div>
    <div className="flex-1">
      <Image
        src={images[4].src}
        alt={images[4].alt}
        width={120}
        height={20}
                  className=" object-cover"
                    draggable="false"
      />
    </div>
  </div>
</div>

</div>
</motion.div>
      </div>
    </section>
    
  );
};

export default CareersSection;