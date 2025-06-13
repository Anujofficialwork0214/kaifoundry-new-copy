"use client";

import Image from "next/image";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

type Ecosystem = {
  name: string;
  icon: string;
};

type EcosystemsProps = {
  title?: string;
  highlight?: string;
  items: Ecosystem[];
};

const EcoSystems: React.FC<EcosystemsProps> = ({
  title = "Ecosystems We Work With",
  highlight = "Ecosystems",
  items,
}) => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="text-center  md:p-6">
      <h2 className="text-xl  md:text-[58px] xl:text-[62px] font-bold text-[#414141] my-20 ">
        <span className="bg-clip-text text-transparent bg-gradient-to-t  from-[#BA24D5] to-[#E95DFF]">{highlight}</span>{" "}
        {title.replace(highlight, "").trim()}
      </h2>
      {/* <div className="grid grid-cols-2  lg:grid-cols-4 gap-8 md:gap-[10px]  justify-center items-center lg:gap-[90px] mt-16 ">
        {items.map((eco, index) => (
          <div
            key={index}
            data-aos="fade-up"
            className="border border-fuchsia-500 rounded-2xl md:rounded-4xl flex flex-col items-center justify-center transition 
             w-[145px] h-[120px] lg:w-[190px] lg:h-[175px] xl:w-[250px] xl:h-[217px]  "
          >
            <div className="flex items-center justify-center w-10 h-10 md:w-20 md:h-20 lg:w-20 lg:h-20">
              <Image
                src={eco.icon}
                alt={eco.name}
                width={50}
                height={50}
                draggable="false"
              />
            </div>
            <p className="mt-4 md:mt-2 lg:mt-2 text-sm md:text-lg  text-[#414141] font-semibold">
              {eco.name}
            </p>
          </div>
        ))}
      </div> */}
      <div className="flex justify-center items-center mt-16">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-[40px] justify-center items-center lg:gap-[50px] ">
          {items.map((eco, index) => (
            <div
              key={index}
              data-aos="fade-up"
              className="border border-fuchsia-500 rounded-2xl md:rounded-4xl flex flex-col items-center justify-center transition 
        w-[145px] h-[120px]  md:w-[190px] md:h-[175px] xl:w-[250px] xl:h-[217px]  "
            >
              <div className="flex items-center justify-center w-10 h-10 md:w-20 md:h-20 lg:w-20 lg:h-20">
                <Image
                  src={eco.icon}
                  alt={eco.name}
                  width={50}
                  height={50}
                  draggable="false"
                />
              </div>
              <p className="mt-4 md:mt-2 lg:mt-2 text-sm md:text-lg text-[#414141] font-semibold">
                {eco.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EcoSystems;
