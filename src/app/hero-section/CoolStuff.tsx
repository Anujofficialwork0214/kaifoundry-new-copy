'use client'
import React from 'react';
import Image from 'next/image';
import Badge from '../Reusable/Badge';
import Button from '../Reusable/Button';
import Link from 'next/link'; // Import Link from next/link
import { motion } from 'framer-motion'; // Import motion from framer-motion

const CoolStuff = () => {
    return (
        <section className='bg-gradient-to-b from-white sm:via-0% via-50% via-[#FBE8FF] to-[#FBE8FF] sm:p-20 px-5'>
            <div className='max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-10'>
                <div className='text-center md:text-left'>
                    <h2 className='text-6xl font-bold mb-8'> {/* Increased font size */}
                        Wanna Build <span className='bg-clip-text text-transparent bg-gradient-to-t  from-[#BA24D5] to-[#E95DFF]'>Cool Stuff</span> With Us?
                    </h2>
                    <p className='text-[14px] font-400 text-[#666666] max-w-md '> {/* Changed to text-xl for larger font size */}
                        Be part of something big—innovate, grow, and shape the future with us. Join a team that values creativity, collaboration, and cutting-edge technology to drive meaningful change.
                    </p>
                    <Link href="/contact-us">{/* Wrap the Button with Link */}
                        <Button
                            text="Join Us"
                            className="hidden sm:inline-block mt-4 px-10 py-2 border border-[#6F1877] font-[500] text-[#6F1877] rounded-full hover:shadow-md  transition cursor-pointer"
                        />
                    </Link>
                </div>

                <div className='relative flex justify-center sm:px-0 px-5'>
                    <motion.div
                        initial={{ y: -50, opacity: 0 }} // Initial position and opacity
                        animate={{ y: 0, opacity: 1 }} // Final position and opacity
                        transition={{ duration: 0.5 }} // Animation duration
                    >
                        <Image
                            alt=''
                            src={'/assets/image.png'}
                            width={300}
                            height={500}
                            className='rounded-lg sm:w-[300px] w-[250px]'
                            draggable="false" // Prevent dragging
                        />
                    </motion.div>

                    {/* Badges without animation */}
                    <Badge text="100+" subText={`Projects\nDelivered`} position="top-[-10%] right-[15%]" width='w-[170] py-2 p-2' textSize="font-[500]" />
                    <Badge text="" subText="24/7 Learning" position="left-[6%] bottom-[30%] p-2" bgColor="bg-[#D444F1]" textColor="text-white"  width="w-24" />
                    
                    {/* Positioning "Shape Your Tomorrow" badge between the other two */}
                    <Badge text="" subText="Shape Your Tomorrow" position="left-[15%] bottom-[50%] p-2" width="w-28" textSize="text-[13px] font-[500]" />
                    
                    <Badge text="" subText="Break Boundaries" position="left-[20%] bottom-[25%]" textSize="text-[13px] font-[500] py-1 px-2" width="w-30" />
                    <Badge text="50+" subText={`Experts\nDriving Change`} position="bottom-[-17%] right-[20%]" bgColor="bg-[#D444F1] p-2"  textColor="text-white" width="w-44 px-4 py-5" />
                </div>
            </div>

            <Link href="/contact-us"> {/* Wrap the Button with Link for mobile view */}
                <Button
                    text="Join Us"
                    className="sm:hidden mt-4 px-6 cursor-pointer py-1 border border-[#6F1877] text-[#6F1877] rounded-full hover:bg-[#6F1877] hover:text-white transition justify-center items-center mx-auto block"
                />
            </Link>
        </section>
    );
};

export default CoolStuff;