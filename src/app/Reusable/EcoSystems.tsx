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
    <div className="container text-center  md:p-6">
      <h2 className="text-xl  md:text-[58px] xl:text-[62px] font-bold text-[#414141] mt-20 mb-14 lg:my-14 ">
        <span className="bg-gradient-to-t from-[#BA24D5] to-[#ea9df6] bg-clip-text lg:text-transparent text-[#BA24D5]">{highlight}</span>{" "}
        {title.replace(highlight, "").trim()}
      </h2>
    
      <div className="flex justify-center  items-center mt-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-[40px] px-2 lg:px-0 justify-center items-center lg:gap-[50px] ">
          {items.map((eco, index) => (
            <div
              key={index}
              data-aos="fade-up"
              className="border border-fuchsia-500 rounded-2xl md:rounded-4xl flex flex-col items-center justify-center transition 
        w-[135px] h-[110px]  md:w-[170px] md:h-[155px] xl:w-[200px] xl:h-[200px]  "
            >
              <div className="flex items-center justify-center w-10 h-10 md:w-20 md:h-20 lg:w-20 lg:h-20">
                <Image
                  src={eco.icon}
                  alt={eco.name}
                  width={60}
                  height={60}
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
