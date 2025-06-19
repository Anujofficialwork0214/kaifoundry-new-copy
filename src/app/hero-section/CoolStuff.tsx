'use client'
import React, { useRef, useEffect } from 'react';
import Image from 'next/image';
import Badge from '../Reusable/Badge';
import Button from '../Reusable/Button';
import Link from 'next/link';
import { motion, useInView, useAnimation } from 'framer-motion';

const CoolStuff = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [inView, controls]);

  const badgeVariants = {
    hidden: { opacity: 0 },
    visible: (i: number) => ({
      opacity: 1,
      transition: {
        delay: i * 0.2,
        duration: 0.3,
        ease: "easeOut",
      },
    }),
  };

  return (
    <section className='bg-gradient-to-b from-white sm:via-0% via-50% via-[#FBE8FF] to-[#FBE8FF] p-20 lg:py-36'>
      <div className='w-full grid grid-cols-1 md:grid-cols-2 items-center gap-10'>
        <div className='text-center md:text-left '>
          <h2 className='text-[54px] xl:text-[51px] font-[600] mb-8 hidden lg:block text-[#333333]'>
            Wanna Build <span className='bg-color'>Cool<br/> Stuff</span> With Us?
          </h2>
          <h2 className='text-6xl font-bold mb-8 block lg:hidden'>
            Wanna Build <span className='bg-color'>Cool<br/> Stuff</span> With Us?
          </h2>
          <p className='text-[20px] xl:text-[17px] font-[400] text-[#4D4D4D]'>
            Be part of something big—innovate, grow, and shape the future with us. Join a team that values creativity, collaboration, and cutting-edge technology to drive meaningful change.
          </p>
          <Link href="/contact-us">
            <Button
              text="Join Us"
              className="hidden sm:inline-block mt-4 px-10 py-2 border border-[#6F1877] font-[500] text-[#6F1877] rounded-full hover:shadow-md transition cursor-pointer"
            />
          </Link>
        </div>

        {/* Image + Badges Section */}
        <div className='relative flex justify-center sm:px-0 px-5' ref={ref}>
          <motion.div
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            <Image
              alt=''
              src={'/assets/image.png'}
              width={300}
              height={500}
              className='rounded-lg sm:w-[300px] w-[250px]'
              draggable="false"
              priority={true}
            />
          </motion.div>

          {/* Animated Badges */}
          <motion.div
            initial="hidden"
            animate={controls}
            className="absolute w-full h-full"
          >
            <motion.div custom={0} variants={badgeVariants}>
              <Badge text="100+" subText={`Projects\nDelivered`} position="top-[-10%] right-[15%]" width='w-[170] py-2 p-2' textSize="font-[500]" />
            </motion.div>
            <motion.div custom={1} variants={badgeVariants}>
              <Badge text="" subText="24/7 Learning" position="left-[6%] bottom-[30%] p-2" bgColor="bg-[#D444F1]" textColor="text-white" width="w-24" />
            </motion.div>
            <motion.div custom={2} variants={badgeVariants}>
              <Badge text="" subText="Shape Your Tomorrow" position="left-[15%] bottom-[50%] p-2" width="w-28" textSize="text-[13px] font-[500]" />
            </motion.div>
            <motion.div custom={3} variants={badgeVariants}>
              <Badge text="" subText="Break Boundaries" position="left-[20%] bottom-[25%]" textSize="text-[13px] font-[500] py-1 px-2" width="w-30" />
            </motion.div>
            <motion.div custom={4} variants={badgeVariants}>
              <Badge text="50+" subText={`Experts\nDriving Change`} position="bottom-[-17%] right-[20%]" bgColor="bg-[#D444F1] p-2" textColor="text-white" width="w-44 px-4 py-5" />
            </motion.div>
          </motion.div>
        </div>
      </div>

      <Link href="/contact-us">
        <Button
          text="Join Us"
          className="sm:hidden mt-4 px-6 cursor-pointer py-1 border border-[#6F1877] text-[#6F1877] rounded-full hover:bg-[#6F1877] hover:text-white transition justify-center items-center mx-auto block"
        />
      </Link>
    </section>
  );
};

export default CoolStuff;
