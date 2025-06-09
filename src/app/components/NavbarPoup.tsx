import React, { useEffect, useRef } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { FaGamepad, FaRobot } from "react-icons/fa";
import { SiBlockchaindotcom } from "react-icons/si";
import Link from "next/link";

interface ServicesPopupProps {
  onClose: () => void;
}

const ServicesPopup: React.FC<ServicesPopupProps> = ({ onClose }) => {
  const popupRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (popupRef.current && !popupRef.current.contains(event.target as Node)) {
        onClose(); // Close if clicked outside
      }
    };

    const handleScroll = () => {
      onClose(); // Close on scroll
    };

    document.addEventListener("mousedown", handleOutsideClick);
    window.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [onClose]);

  return (
    <div className="fixed inset-0 flex items-start mt-20 mx-auto z-50 container justify-center bg-black/30 backdrop-blur-sm">
      <div
        ref={popupRef}
        className="bg-white shadow-lg rounded-lg p-6 w-full max-w-8xl opacity-100 relative"
      >
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
        >
          <AiOutlineClose className="w-6 h-6" />
        </button>
        <div className="flex flex-col md:flex-row gap-8 py-19">
          <div className="flex flex-col justify-center items-start pl-10 w-full md:w-1/3 text-center">
            <div className="flex flex-col items-start justify-start">
              <h2 className="text-5xl font-bold mb-4">Services</h2>
              <p className="text-gray-600 max-w-md text-start">
                Empowering your business with tailored solutions for sustainable growth.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 grid-cols-1 gap-6 w-full md:w-1/2">
            <Link href="/BlockChainService" passHref>
              <ServiceItem
                icon={<SiBlockchaindotcom className="text-purple-600 text-4xl" />}
                title="Blockchain Development"
                description="Solutions tailored to your needs."
              />
            </Link>
            <Link href="/AIServices" passHref>
              <ServiceItem
                icon={<FaRobot className="text-purple-600 text-4xl" />}
                title="AI Services"
                description="Unlock the power of AI."
              />
            </Link>
            <Link href="/GameDevelopment" passHref>
              <ServiceItem
                icon={<FaGamepad className="text-purple-600 text-4xl" />}
                title="Game Development"
                description="Experiences that drive players."
              />
            </Link>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
};

const ServiceItem: React.FC<{
  icon: React.ReactNode;
  title: string;
  description: string;
}> = ({ icon, title, description }) => {
  return (
    <div className="flex items-center gap-3 cursor-pointer hover:bg-gray-100 p-2 rounded-md transition">
      <div className="bg-purple-100 p-3 rounded-full">{icon}</div>
      <div>
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-gray-500">{description}</p>
      </div>
    </div>
  );
};

export default ServicesPopup;