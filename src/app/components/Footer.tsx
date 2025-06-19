// import React, { FC } from "react";
// import Link from "next/link";
// import Image from "next/image";
// import { FaFacebookSquare, FaInstagram } from "react-icons/fa";
// import Button from "../Reusable/Button";

// interface FooterColumnProps {
//   title: string;
//   links: { label: string; href: string }[];
// }

// const FooterColumn: FC<FooterColumnProps> = ({ title, links }) => {
//   return (
//     <div>
//       <h3 className="font-[500] text-[14px] lg:text-[16.8px] mb-7 lg:mb-8">
//         {title}
//       </h3>
//       <ul className="flex flex-col gap-2">
//         {links.map((link, index) => (
//           <li
//             key={index}
//             className="text-[#FFFFFF] font-light opacity-70 text-[14px] lg:text-[19.02px] hover:underline transition duration-200"
//           >
//             <Link href={link.href} prefetch={true}>
//               {link.label}
//             </Link>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// // SocialIcons Component
// const SocialIcons: FC = () => {
//   return (
//     <div className="flex space-x-4 items-center">
//       <Link
//         className="border-fuchsia-200 border-[1px] rounded-full p-3 flex items-center justify-center"
//         href="https://facebook.com"
//         target="_blank"
//         rel="noopener noreferrer"
//       >
//         <FaFacebookSquare className="text-white text-2xl hover:text-gray-400 transition-colors duration-200 cursor-pointer" />
//       </Link>
//       <Link
//         className="border-fuchsia-200 border-[1px] rounded-full p-3 flex items-center justify-center"
//         href="https://instagram.com"
//         target="_blank"
//         rel="noopener noreferrer"
//       >
//         <FaInstagram className="text-white text-2xl hover:text-gray-400 transition-colors duration-200 cursor-pointer" />
//       </Link>
//     </div>
//   );
// };

// // ContactInfo Component
// interface ContactInfoProps {
//   phone: string;
//   email: string;
// }

// const ContactInfo: FC<ContactInfoProps> = ({ phone, email }) => {
//   return (
//     <div className="text-gray-300 flex flex-col items-start ">
//       {/* Horizontal Separator */}
//       <hr className="border-t border-white lg:border-[#232841] block  w-24 my-6  lg:-mt-8" />
//       <p>{phone}</p>
//       <p>
//         <a href={`mailto:${email}`} className="hover:text-white">
//           {email}
//         </a>
//       </p>
//     </div>
//   );
// };

// // --- Main Footer Component ---

// const navs = [
//   {
//     title: "Offerings",
//     links: [
//       { label: "STO", href: "/sto" },
//       { label: "Smart Contracts", href: "/smart-contracts" },
//       { label: "White Label Exchange Platform", href: "/exchange-platform" },
//       { label: "White Label Wallet", href: "/wallet" },
//     ],
//   },
//   {
//     title: "Services",
//     links: [
//       { label: "AI", href: "/ai-services" },
//       { label: "Gaming", href: "/game-development" },
//       { label: "Blockchain", href: "/blockchain-service" },
//       { label: "Web3 Solutions", href: "/web3" },
//     ],
//   },
//   {
//     title: "About",
//     links: [
//       { label: "Who We Are", href: "/who-are-we" },
//       { label: "What We Do", href: "/" },
//       { label: "Career", href: "/careers-screen" },
//       { label: "Portfolio", href: "/portfolio" },
//     ],
//   },
// ];

// const Footer: FC = () => {
//   return (
//     <footer
//       className="bg-[#821890] text-white p-8"
//       style={{ fontFamily: "Inter, sans-serif", minHeight: "500px" }}
//     >
//       <div className="flex  justify-between  items-center lg:hidden mb-5 ">
//         <div className="">
//           <Image
//             width={150}
//             height={250}
//             alt="logo"
//             src="/svg/Logo.svg"
//             draggable="false"
//           />
//         </div>

//         <Button
//           className="bg-white py-0 px-0 lg:mr-0 lg:py-3 text-[10px] lg:text-[16.8px] text-[#192D53] font-inter font-[500] cursor-pointer"
//           text="Get In Touch"
//           href="/contact-us"
//         />
//       </div>
//       <div className="mx-auto grid grid-cols-12 lg:grid-cols-12 lg:gap-6 sm:grid-cols-2 gap-8">
//         {/* Logo - Start Aligned */}

//         <div className="col-span-4 lg:flex justify-start order-1 lg:col-span-4 hidden  ">
//           <Image
//             width={250}
//             height={250}
//             alt="logo"
//             src="/svg/Logo.svg"
//             className="w-[200px] h-[40px] lg:w-[250px] lg:h-[50px]"
//             draggable="false"
//           />
//         </div>

//         {/* Offerings */}

//         <div className="col-span-8 flex sm:order-2 order-3 lg:col-span-2">
//           <FooterColumn title={navs[0].title} links={navs[0].links} />
//         </div>

//         {/* Services */}
//         <div className="sm:col-span-2 flex sm:order-3 order-4 col-span-6">
//           <FooterColumn title={navs[1].title} links={navs[1].links} />
//         </div>

//         {/* About */}
//         <div className="sm:col-span-2 flex sm:order-4 order-5 col-span-6">
//           <FooterColumn title={navs[2].title} links={navs[2].links} />
//         </div>

//         {/* CTA Button */}

//         <div className="sm:col-span-2 lg:flex sm:order-6 justify-end order-2 col-span-6 hidden">
//           <Button
//             className="bg-white py-1 mr-4 lg:mr-0 lg:py-3 text-[12px] lg:text-[16.8px] text-[#192D53] font-inter font-[500] cursor-pointer"
//             text="Get In Touch"
//             href="/contact-us"
//           />
//         </div>
//       </div>

//       <div className="mx-auto grid grid-cols-11 mt-30  items-start text-left pt-6">
//         <div className="lg:col-span-5  col-span-2 flex flex-col justify-between  lg:flex-row items-start  ">
//           <SocialIcons />
//           <ContactInfo phone="123-456-7890" email="kaifoundry@gmail.com" />
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;

"use client";

import React, { FC, useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaFacebookSquare, FaInstagram } from "react-icons/fa";
import Button from "../Reusable/Button";

interface FooterColumnProps {
  title: string;
  links: { label: string; href: string }[];
}

const FooterColumn: FC<FooterColumnProps> = ({ title, links }) => {
  return (
    <div>
      <h3 className="font-[500] text-[14px] lg:text-[16.8px] mb-7 lg:mb-8">
        {title}
      </h3>
      <ul className="flex flex-col gap-2">
        {links.map((link, index) => (
          <li
            key={index}
            className="text-[#FFFFFF] font-light opacity-70 text-[14px] lg:text-[19.02px] hover:underline transition duration-200"
          >
            <Link href={link.href} prefetch={true}>
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

// SocialIcons Component
const SocialIcons: FC = () => {
  return (
    <div className="flex space-x-4 items-center">
      <Link
        className="border-fuchsia-200 border-[1px] rounded-full p-3 flex items-center justify-center"
        href="https://facebook.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaFacebookSquare className="text-white text-2xl hover:text-gray-400 transition-colors duration-200 cursor-pointer" />
      </Link>
      <Link
        className="border-fuchsia-200 border-[1px] rounded-full p-3 flex items-center justify-center"
        href="https://instagram.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaInstagram className="text-white text-2xl hover:text-gray-400 transition-colors duration-200 cursor-pointer" />
      </Link>
    </div>
  );
};

// ContactInfo Component
interface ContactInfoProps {
  phone: string;
  email: string;
}

const ContactInfo: FC<ContactInfoProps> = ({ phone, email }) => {
  return (
    <div className="text-gray-300 flex flex-col items-start ">
      <hr className="border-t border-white lg:border-[#232841] block w-24 my-6 lg:-mt-8" />
      <p>{phone}</p>
      <p>
        <a href={`mailto:${email}`} className="hover:text-white">
          {email}
        </a>
      </p>
    </div>
  );
};

// --- Main Footer Component ---

const navs = [
  {
    title: "Offerings",
    links: [
      { label: "STO", href: "/" },
      { label: "Smart Contracts", href: "/" },
      { label: "White Label Exchange Platform", href: "/" },
      { label: "White Label Wallet", href: "/" },
    ],
  },
  {
    title: "Services",
    links: [
      { label: "AI", href: "/ai-services" },
      { label: "Gaming", href: "/game-development" },
      { label: "Blockchain", href: "/blockchain-service" },
      { label: "Web3 Solutions", href: "/" },
    ],
  },
  {
    title: "About",
    links: [
      { label: "Who We Are", href: "/who-are-we" },
      { label: "What We Do", href: "/" },
      { label: "Careers", href: "/careers-screen" },
      { label: "Portfolio", href: "/" },
    ],
  },
];

const Footer: FC = () => {
  const [footerVisible, setFooterVisible] = useState(false);

  useEffect(() => {
    // Show the footer after 3 seconds
    const timeout = setTimeout(() => {
      setFooterVisible(true);
    }, 3000); // Delay in milliseconds (3000ms = 3 seconds)

    // Cleanup timeout when the component unmounts
    return () => clearTimeout(timeout);
  }, []);

  return (
    <footer
      className="bg-[#821890] text-white p-8"
      style={{
        fontFamily: "Inter, sans-serif",
        minHeight: "500px",
        transition: "opacity 1s ease, visibility 1s ease", // Add a smooth transition
        opacity: footerVisible ? 1 : 0, // Initially set opacity to 0
        visibility: footerVisible ? "visible" : "hidden", // Set visibility to hidden initially
      }}
    >
      <div className="flex justify-between items-center lg:hidden mb-5 ">
        <div>
          <Image
            width={150}
            height={250}
            alt="logo"
            src="/svg/Logo.svg"
            draggable="false"
          />
        </div>

        <Button
          className="bg-white py-0 px-0 lg:mr-0 lg:py-3 text-[10px] lg:text-[16.8px] text-[#192D53] font-inter font-[500] cursor-pointer"
          text="Get In Touch"
          href="/contact-us"
        />
      </div>

      <div className="mx-auto grid grid-cols-12 lg:grid-cols-12 lg:gap-6 sm:grid-cols-2 gap-8">
        <div className="col-span-4 lg:flex justify-start order-1 lg:col-span-4 hidden ">
          <Image
            width={250}
            height={250}
            alt="logo"
            src="/svg/Logo.svg"
            className="w-[200px] h-[40px] lg:w-[250px] lg:h-[50px]"
            draggable="false"
          />
        </div>

        <div className="col-span-8 flex sm:order-2 order-3 lg:col-span-2">
          <FooterColumn title={navs[0].title} links={navs[0].links} />
        </div>

        <div className="sm:col-span-2 flex sm:order-3 order-4 col-span-6">
          <FooterColumn title={navs[1].title} links={navs[1].links} />
        </div>

        <div className="sm:col-span-2 flex sm:order-4 order-5 col-span-6">
          <FooterColumn title={navs[2].title} links={navs[2].links} />
        </div>

        <div className="sm:col-span-2 lg:flex sm:order-6 justify-end order-2 col-span-6 hidden">
          <Button
            className="bg-white py-1 mr-4 lg:mr-0 lg:py-3 text-[12px] lg:text-[16.8px] text-[#192D53] font-inter font-[500] cursor-pointer"
            text="Get In Touch"
            href="/contact-us"
          />
        </div>
      </div>

      <div className="mx-auto grid grid-cols-11 mt-30 items-start text-left pt-6">
        <div className="lg:col-span-5 col-span-2 flex flex-col justify-between lg:flex-row items-start ">
          <SocialIcons />
          <ContactInfo phone="123-456-7890" email="kaifoundry@gmail.com" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
