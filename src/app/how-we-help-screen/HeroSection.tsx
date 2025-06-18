"use client";
import Image from "next/image";
import Link from "next/link";

const HowWeHelp = () => {
  return (
    <section className="flex flex-col md:flex-row-reverse w-full items-center text-center px-6 pt-20 pb-8 lg:py-32 md:text-left md:px-20 md:justify-between relative">

      {/* Background GIF Container */}
      <div className="absolute inset-y-0 right-0 lg:right-20 z-0 w-full h-full md:w-1/3 md:h-[1000px] transform -translate-y-40 lg:-translate-y-40 -translate-x-15">
        <Image
          src="/assets/HowWeHelp/bg.gif"
          alt="Background GIF"
          fill
          style={{ objectFit: "cover" }}
          className="opacity-20 inset-0 transform scale-130"
          draggable={false}
          priority={true}
        />

      </div>

      {/* Blockchain Image */}
      <div className="w-full md:w-1/2 flex justify-center relative z-10">
        <Image
          src="/assets/HowWeHelp/blockchain.png"
          alt="Blockchain"
          width={580}
          height={580}
          className="drop-shadow-lg"
          draggable={false}
          priority={true}
          

        />
      </div>

      {/* Text Section */}
      <div className="w-full  md:w-1/2 mt-10 md:mt-20 z-10">
        <h2 className=" lg:text-[62px] font-bold hidden lg:block leading-[1.3]">
          {/* How We Help <br /> */}

          <span className="text-black">How We Help</span> <br />
          {/* <span className="text-black opacity-70"> <br /></span> */}


          <span className="bg-color">BUSINESSES GROW</span> <br />
          <span className="text-black">With</span>
   
          <span className="bg-color ">{" "}Blockchain</span>
        </h2>
        <h2 className="text-[24px]  font-bold block lg:hidden ">
          {/* How We Help <br /> */}

          <span className="text-black">How We Help </span>
      


          <span className="bg-color">Businesses</span><br />
          <span className="bg-color">Grow {" "}</span>
          <span className="text-black">With</span>
        
          <span className="bg-color">{" "}Blockchain</span>
        </h2>
        {/* Mobile */}
        <p className="text-gray-800 text-[14px] mt-4 md:hidden">
          At Kai Foundry, we craft blockchain solutions tailored to your business needs, empowering you to innovate, secure your operations, and scale your growth.
        </p>

        {/* Desktop  */}
        <p className="text-gray-800 text-[14px] md:text-[20px] 2xl:text-[26px] lg:mt-5 mt-4 hidden md:block">
          At Kai Foundry, we craft blockchain solutions tailored to your business needs, empowering you to innovate, secure  your operations, and scale your growth.
        </p>

        <Link href="/contact-us">
          <button
            className="mt-10 text-white bg-[#BA24D5] hover:bg-[#821890]  cursor-pointer rounded-full w-34 py-3 px-2 lg:py-3 lg:px-3 lg:w-34 transition duration-300">
            Contact Us
          </button>
        </Link>
      </div>

    </section>
  );
};

export default HowWeHelp;