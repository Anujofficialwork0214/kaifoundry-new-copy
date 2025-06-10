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
    <div className="text-center sm:px-50 p-6">
      <h2 className="text-2xl  md:text-5xl font-bold text-[#414141] my-20 ">
        <span className="text-[#BA24D5]">{highlight}</span>{" "}
        {title.replace(highlight, "").trim()}
      </h2>
      <div className="grid grid-cols-2  lg:grid-cols-4 gap-8 mt-16 ">
        {items.map((eco, index) => (
          <div
            key={index}
            data-aos="fade-up"
            className="border border-fuchsia-500 rounded-lg flex flex-col items-center justify-center transition 
              w-full h-[150px] p-4"
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
      </div>
    </div>
  );
};

export default EcoSystems;
