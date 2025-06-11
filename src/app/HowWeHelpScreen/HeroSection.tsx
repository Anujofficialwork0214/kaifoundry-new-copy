"use client";
import Image from "next/image";
import Link from "next/link";

const HowWeHelp = () => {
  return (
    <section className="flex flex-col md:flex-row-reverse w-full items-center text-center px-6 pt-16 pb-8 lg:py-16 md:text-left md:px-20 md:justify-between relative">

      {/* Background GIF Container */}
      <div className="absolute inset-y-0 right-0 lg:right-20 z-0 w-full h-full md:w-1/3 md:h-[1000px] transform -translate-y-40 lg:-translate-y-50 -translate-x-5"> 
      <Image
  src="/assets/HowWeHelp/bg.gif"
  alt="Background GIF"
  fill
  style={{ objectFit: "cover" }}
  className="opacity-20"
  draggable={false}
/>

      </div>

      {/* Blockchain Image */}
      <div className="w-full md:w-1/2 flex justify-center relative z-10">
        <Image
          src="/assets/HowWeHelp/blockchain.png"
          alt="Blockchain"
          width={480}  
          height={480} 
          loading="lazy"
          className="drop-shadow-lg"
          draggable={false} 

        />
      </div>
     
      {/* Text Section */}
      <div className="w-full  md:w-2/3 mt-10 md:mt-20 z-10">
        <h2 className=" lg:text-[62px] font-bold hidden lg:block leading-[1.1]">
          {/* How We Help <br /> */}
   
  <span className="text-black">Ho</span>
  <span className="text-black opacity-70">w We Help <br /></span>


          <span className="bg-clip-text text-transparent bg-gradient-to-t  from-[#BA24D5] to-[#E95DFF]">Businesses Grow</span> <br />
          <span className="text-black">Wi</span>
  <span className="text-black opacity-70">th</span>
          <span className="bg-clip-text text-transparent bg-gradient-to-t  from-[#BA24D5] to-[#E95DFF] italic">Blockchain</span>
        </h2>
        <h2 className="text-[24px]  font-bold block lg:hidden ">
          {/* How We Help <br /> */}
   
  <span className="text-black">Ho</span>
  <span className="text-black opacity-70">w We Help </span>


          <span className="bg-clip-text text-transparent bg-gradient-to-t from-[#BA24D5] to-[#E95DFF]">Businesses</span><br />
          <span className="bg-clip-text text-transparent bg-gradient-to-t from-[#BA24D5] to-[#E95DFF]">Grow {" "}</span> 
          <span className="text-black">Wi</span>
  <span className="text-black opacity-70">th</span>
          <span className="bg-clip-text text-transparent bg-gradient-to-t from-[#BA24D5] to-[#E95DFF] italic">Blockchain</span>
        </h2>
        <p className="text-gray-600 text-[14px] md:text-[22px] mt-4">
          At Kai Foundry, we craft blockchain solutions tailored to your
          business needs, empowering you to innovate, secure your operations,
          and scale your growth.
        </p>
        <Link href="/ContactUs">
          <button
                          className="bg-[#D444F1] mt-12 text-white hover:bg-[#B33BC1] cursor-pointer rounded-full w-26 py-2 px-2 lg:py-3 lg:px-3 lg:w-34 transition duration-300">
            Contact Us
          </button>
        </Link>
      </div>

    </section>
  );
};

export default HowWeHelp;