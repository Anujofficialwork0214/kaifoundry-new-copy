
"use client";

import React, { FC, useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
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
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M17.1984 0.199219H2.79844C1.47484 0.199219 0.398438 1.27562 0.398438 2.59922V16.9992C0.398438 18.3228 1.47484 19.3992 2.79844 19.3992H9.99844V12.7992H7.59844V9.79922H9.99844V7.39922C9.99844 6.44444 10.3777 5.52877 11.0529 4.85363C11.728 4.1785 12.6437 3.79922 13.5984 3.79922H15.9984V6.79922H14.7984C14.136 6.79922 13.5984 6.73682 13.5984 7.39922V9.79922H16.5984L15.3984 12.7992H13.5984V19.3992H17.1984C18.522 19.3992 19.5984 18.3228 19.5984 16.9992V2.59922C19.5984 1.27562 18.522 0.199219 17.1984 0.199219Z"
            fill="white"
          />
        </svg>
      </Link>
      <Link
        className="border-fuchsia-200 border-[1px] rounded-full p-3 flex items-center justify-center"
        href="https://instagram.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9.99844 1.93416C12.543 1.93416 12.89 1.93416 13.931 1.93416C14.8563 1.93416 15.3189 2.16548 15.6659 2.28115C16.1286 2.51247 16.4755 2.62814 16.8225 2.97512C17.1695 3.32211 17.4008 3.6691 17.5165 4.13175C17.6322 4.47874 17.7478 4.94139 17.8635 5.86669C17.8635 6.90765 17.8635 7.13898 17.8635 9.79922C17.8635 12.4595 17.8635 12.6908 17.8635 13.7317C17.8635 14.6571 17.6322 15.1197 17.5165 15.4667C17.2852 15.9293 17.1695 16.2763 16.8225 16.6233C16.4755 16.9703 16.1286 17.2016 15.6659 17.3173C15.3189 17.433 14.8563 17.5486 13.931 17.6643C12.89 17.6643 12.6587 17.6643 9.99844 17.6643C7.3382 17.6643 7.10687 17.6643 6.06591 17.6643C5.14061 17.6643 4.67796 17.433 4.33097 17.3173C3.86832 17.086 3.52133 16.9703 3.17434 16.6233C2.82735 16.2763 2.59603 15.9293 2.48037 15.4667C2.3647 15.1197 2.24904 14.6571 2.13338 13.7317C2.13338 12.6908 2.13338 12.4595 2.13338 9.79922C2.13338 7.13898 2.13338 6.90765 2.13338 5.86669C2.13338 4.94139 2.3647 4.47874 2.48037 4.13175C2.71169 3.6691 2.82735 3.32211 3.17434 2.97512C3.52133 2.62814 3.86832 2.39681 4.33097 2.28115C4.67796 2.16548 5.14061 2.04982 6.06591 1.93416C7.10687 1.93416 7.45386 1.93416 9.99844 1.93416ZM9.99844 0.199219C7.3382 0.199219 7.10687 0.199219 6.06591 0.199219C5.02494 0.199219 4.33097 0.430545 3.75266 0.66187C3.17434 0.893195 2.59603 1.24018 2.01772 1.8185C1.4394 2.39681 1.20808 2.85946 0.861089 3.55344C0.629763 4.13175 0.5141 4.82573 0.398438 5.86669C0.398438 6.90765 0.398438 7.25464 0.398438 9.79922C0.398438 12.4595 0.398438 12.6908 0.398438 13.7317C0.398438 14.7727 0.629763 15.4667 0.861089 16.045C1.09241 16.6233 1.4394 17.2016 2.01772 17.7799C2.59603 18.3583 3.05868 18.5896 3.75266 18.9366C4.33097 19.1679 5.02494 19.2836 6.06591 19.3992C7.10687 19.3992 7.45386 19.3992 9.99844 19.3992C12.543 19.3992 12.89 19.3992 13.931 19.3992C14.9719 19.3992 15.6659 19.1679 16.2442 18.9366C16.8225 18.7052 17.4008 18.3583 17.9792 17.7799C18.5575 17.2016 18.7888 16.739 19.1358 16.045C19.3671 15.4667 19.4828 14.7727 19.5984 13.7317C19.5984 12.6908 19.5984 12.3438 19.5984 9.79922C19.5984 7.25464 19.5984 6.90765 19.5984 5.86669C19.5984 4.82573 19.3671 4.13175 19.1358 3.55344C18.9045 2.97512 18.5575 2.39681 17.9792 1.8185C17.4008 1.24018 16.9382 1.00886 16.2442 0.66187C15.6659 0.430545 14.9719 0.314881 13.931 0.199219C12.89 0.199219 12.6587 0.199219 9.99844 0.199219Z"
            fill="white"
          />
          <path
            d="M9.99844 4.82573C7.22253 4.82573 5.02494 7.02332 5.02494 9.79922C5.02494 12.5751 7.22253 14.7727 9.99844 14.7727C12.7743 14.7727 14.9719 12.5751 14.9719 9.79922C14.9719 7.02332 12.7743 4.82573 9.99844 4.82573ZM9.99844 13.0378C8.2635 13.0378 6.75988 11.6498 6.75988 9.79922C6.75988 8.06428 8.14784 6.56066 9.99844 6.56066C11.7334 6.56066 13.237 7.94862 13.237 9.79922C13.237 11.5342 11.7334 13.0378 9.99844 13.0378Z"
            fill="white"
          />
          <path
            d="M15.0876 5.86669C15.7264 5.86669 16.2442 5.34885 16.2442 4.71006C16.2442 4.07128 15.7264 3.55344 15.0876 3.55344C14.4488 3.55344 13.931 4.07128 13.931 4.71006C13.931 5.34885 14.4488 5.86669 15.0876 5.86669Z"
            fill="white"
          />
        </svg>
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
      { label: "STO", href: "#services" },
      { label: "Smart Contracts", href: "#services" },
      { label: "White Label Exchange Platform", href: "#services" },
      { label: "White Label Wallet", href: "#services" },
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
   
    const timeout = setTimeout(() => {
      setFooterVisible(true);
    }, 3000); 
    
    return () => clearTimeout(timeout);
  }, []);

  return (
    <footer
      className="bg-[#821890] text-white p-8"
      style={{
        fontFamily: "Inter, sans-serif",
        minHeight: "500px",
        transition: "opacity 1s ease, visibility 1s ease", 
        opacity: footerVisible ? 1 : 0, 
        visibility: footerVisible ? "visible" : "hidden", 
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
