// import Link from "next/link";
// import { usePathname } from "next/navigation";
// import React, { useState, useEffect, useRef } from "react";
// import Button from "../Reusable/Button";
// import Image from "next/image";
// import { RiArrowDropDownLine } from "react-icons/ri";
// import ServicesPopup from "./NavbarPoup"; // Adjust the import path as necessary
// import { IoIosArrowDown } from "react-icons/io";
// import { MdDone } from "react-icons/md";
// import { Inter } from "next/font/google";
// import { useRouter } from "next/navigation";
// import { roboto } from "../Fonts/fonts";

// const inter = Inter({
//   subsets: ["latin"],
// });
// const Navbar: React.FC = () => {
//   const router = useRouter();
//   useEffect(() => {
//     router.prefetch("/BlockChainService");
//     router.prefetch("/GameDevelopment");
//     router.prefetch("/AIServices");
//   }, []);
//   const [isOpen, setIsOpen] = useState(false);
//   const [isOpenMenu, setIsOpenMenu] = useState(false);
//   const [isVisible, setIsVisible] = useState(true);
//   const [isPopupOpen, setIsPopupOpen] = useState(false);
//   const pathname = usePathname();
//   const lastScrollY = useRef(0);

//   useEffect(() => {
//     const prefetchRoutes = async () => {
//       await Promise.all([
//         router.prefetch("/HowWeHelpScreen"),
//         router.prefetch("/WhoAreWe"),
//         router.prefetch("/CareersScreen"),
//         router.prefetch("/BlockChainService"),
//         router.prefetch("/GameDevelopment"),
//         router.prefetch("/AIServices"),
//         router.prefetch("/blog"),
//         router.prefetch("/ContactUs"),
//       ]);
//     };

//     prefetchRoutes();
//   }, []);

//   useEffect(() => {
//     const handleOutsideClick = (e: MouseEvent) => {
//       const sidebar = document.getElementById("mobile-sidebar");
//       if (isOpen && sidebar && !sidebar.contains(e.target as Node)) {
//         setIsOpen(false);
//       }
//     };

//     const handleScrollClose = () => {
//       if (isOpen) {
//         setIsOpen(false);
//       }
//     };

//     document.addEventListener("mousedown", handleOutsideClick);
//     window.addEventListener("scroll", handleScrollClose);

//     return () => {
//       document.removeEventListener("mousedown", handleOutsideClick);
//       window.removeEventListener("scroll", handleScrollClose);
//     };
//   }, [isOpen]);

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsVisible(window.scrollY < lastScrollY.current);
//       lastScrollY.current = window.scrollY;
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const toggleMenu = () => setIsOpen(!isOpen);
//   const closeMenu = () => setIsOpen(false);
//   const isActive = (path: string) => pathname === path;
//   const togglePopup = () => setIsPopupOpen(!isPopupOpen);

//   return (
//     <>
//       <header
//         className={`fixed  ${
//           inter.className
//         } etop-0 left-0 right-0 w-full pt-5 z-50 transition-transform  px-4 duration-500 ease-in-out ${
//           isVisible ? "translate-y-0" : "-translate-y-full"
//         }`}
//       >
//         <nav className="max-w-[1920px] mx-auto py-2 px-0 md:px-5 lg:px-5 flex items-center justify-between md:backdrop-blur-md md:border md:border-gray-300 md:rounded-full transition-all duration-500 ease-in-out ">
//           <button
//             onClick={toggleMenu}
//             className="md:hidden focus:outline-none p-3 rounded-md bg-[#FFFFFF4D] "
//           >
//             <div className="flex flex-col space-y-1">
//               <svg
//                 width="21"
//                 height="4"
//                 viewBox="0 0 21 4"
//                 fill="none"
//                 xmlns="http://www.w3.org/2000/svg"
//               >
//                 <path
//                   d="M19.9297 1.9375L1.06969 1.9375"
//                   stroke="black"
//                   strokeWidth="2.05"
//                   strokeLinecap="round"
//                 />
//               </svg>

//               <svg
//                 width="21"
//                 height="3"
//                 viewBox="0 0 21 3"
//                 fill="none"
//                 xmlns="http://www.w3.org/2000/svg"
//               >
//                 <path
//                   d="M19.9297 1.9375L1.06969 1.9375"
//                   stroke="black"
//                   strokeWidth="2.05"
//                   strokeLinecap="round"
//                 />
//               </svg>
//               <svg
//                 width="21"
//                 height="4"
//                 viewBox="0 0 21 4"
//                 fill="none"
//                 xmlns="http://www.w3.org/2000/svg"
//               >
//                 <path
//                   d="M19.9297 1.9375L1.06969 1.9375"
//                   stroke="black"
//                   strokeWidth="2.05"
//                   strokeLinecap="round"
//                 />
//               </svg>
//             </div>
//           </button>

//           {/* Logo */}
//           <div className="hidden md:flex flex-shrink-0 ">
//             <Link href="/">
//               <Image
//                 src="/assets/logo.svg"
//                 alt="Logo"
//                 width={150}
//                 height={40}
//               />
//             </Link>
//           </div>

//           {/* Desktop Navigation */}
//           <ul className="hidden md:flex space-x-6 text-gray-700 flex-1 justify-center transition-all duration-500 ease-in-out xl:text-[20px] lg:text-[16px] md:text-[10px]">
//             <li>
//               <Link
//                 href="/HowWeHelpScreen"
//                 className={`${
//                   isActive("/HowWeHelpScreen")
//                     ? "text-[#821890]"
//                     : "text-gray-700"
//                 }`}
//                 prefetch={true}
//               >
//                 How We Help
//               </Link>
//             </li>
//             <li>
//               <Link
//                 href="/WhoAreWe"
//                 className={`${
//                   isActive("/WhoAreWe") ? "text-[#821890]" : "text-gray-700"
//                 }`}
//                 prefetch={true}
//               >
//                 Who We Are
//               </Link>
//             </li>
//             <li>
//               <Link
//                 href="/CareersScreen"
//                 className={`${
//                   isActive("/CareersScreen")
//                     ? "text-[#821890]"
//                     : "text-gray-700"
//                 }`}
//                 prefetch={true}
//               >
//                 Careers
//               </Link>
//             </li>
//             <li>
//               <button
//                 onClick={togglePopup}
//                 className="text-gray-700 flex items-center gap-1 focus:outline-none cursor-pointer"
//               >
//                 Services{" "}
//                 <Image
//                   src="/svg/stat_minus_1.svg"
//                   alt="stat"
//                   width={4}
//                   height={4}
//                   className="w-4 h-4 transition-transform duration-200"
//                 />
//                 {/* <RiArrowDropDownLine className="w-4 h-4 transition-transform duration-200" /> */}
//               </button>
//             </li>
//             <li>
//               <Link
//                 href="/blog"
//                 className={`${
//                   isActive("/blog") ? "text-[#821890]" : "text-gray-700"
//                 }`}
//                 prefetch={true}
//               >
//                 Blogs
//               </Link>
//             </li>
//           </ul>

//           <Button
//             className="bg-[#D444F1] text-white cursor-pointer"
//             text="Contact Us"
//             href="/ContactUs"
//           />
//         </nav>
//       </header>

//       {/* Sidebar Overlay */}
//       {isOpen && (
//         <div
//           className="fixed inset-0 bg-opacity-50 z-40 transition-opacity duration-500 ease-in-out"
//           onClick={closeMenu}
//         ></div>
//       )}

//       {/* Sidebar Menu */}

//       <div
//         id="mobile-sidebar"
//         className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg z-50 transform transition-transform duration-500 ease-in-out ${
//           isOpen ? "translate-x-0" : "-translate-x-full"
//         }`}
//       >
//         <button
//           onClick={closeMenu}
//           className="absolute top-4 right-4 cursor-pointer text-gray-700 text-2xl"
//         >
//           &times;
//         </button>
//         <nav className="flex flex-col items-start  text-gray-700">
//           <Link href="/" className="px-6 pt-6 pb-2 w-full flex flex-col  gap-5">
//             <Image src="/svg/Group.svg" alt="Logo" width={20} height={20} />
//             <div className={`text-[20px] font-[500] ${roboto.className}`}>
//               Kai Foundary
//             </div>
//           </Link>
//           <Link
//             href="/"
//             className={`${
//               isActive("/")
//                 ? "text-[#BA24D5] font-[500] bg-gradient-to-r from-white to-[#F6D0FE]"
//                 : "text-[#4D4D4D] bg-transparent font-[400]"
//             }  cursor-pointer text-[14px] px-6 py-3 w-full `}
//             onClick={closeMenu}
//             prefetch={true}
//           >
//             Home
//           </Link>
//           <Link
//             href="/HowWeHelpScreen"
//             className={`${
//               isActive("/HowWeHelpScreen")
//                 ? "text-[#BA24D5] font-[500] bg-gradient-to-r from-white to-[#F6D0FE]"
//                 : "text-[#4D4D4D] bg-transparent font-[400]"
//             }  cursor-pointer text-[14px] px-6 py-3 w-full `}
//             onClick={closeMenu}
//             prefetch={true}
//           >
//             How We Help
//           </Link>
//           <Link
//             href="/WhoAreWe"
//             className={`${
//               isActive("/WhoAreWe")
//                 ? "text-[#BA24D5] font-[500] bg-gradient-to-r from-white to-[#F6D0FE]"
//                 : "text-[#4D4D4D] bg-transparent font-[400]"
//             }  cursor-pointer text-[14px] px-6 py-3 w-full`}
//             onClick={closeMenu}
//             prefetch={true}
//           >
//             Who We Are
//           </Link>
//           <Link
//             href="/CareersScreen"
//             className={`${
//               isActive("/CareersScreen")
//                 ? "text-[#821890] font-[500] bg-gradient-to-r from-white to-[#F6D0FE]"
//                 : "text-[#4D4D4D] bg-transparent "
//             }  cursor-pointer text-[14px] px-6 py-3 w-full`}
//             prefetch={true}
//             onClick={closeMenu}
//           >
//             Careers
//           </Link>

//           <Link
//             href="/blog"
//             className={`${
//               isActive("/blog")
//                 ? "text-[#BA24D5] font-[500] bg-gradient-to-r from-white to-[#F6D0FE]"
//                 : "text-[#4D4D4D] bg-transparent font-[400]"
//             }  cursor-pointer text-[14px] px-6 py-3 w-full`}
//             prefetch={true}
//             onClick={closeMenu}
//           >
//             Blogs
//           </Link>
//           <button
//             onClick={(e) => {
//               e.preventDefault();
//               setIsOpenMenu(!isOpenMenu);
//             }}
//             className={`text-gray-700 focus:outline-none flex justify-between w-full items-center px-6 py-4 ${
//               ["/BlockChainService", "/GameDevelopment", "/AIServices"].some(
//                 (path) => isActive(path)
//               )
//                 ? "bg-gradient-to-r from-white to-[#F6D0FE]"
//                 : "bg-transparent"
//             }`}
//           >
//             <div
//               className={`${
//                 ["/BlockChainService", "/GameDevelopment", "/AIServices"].some(
//                   (path) => isActive(path)
//                 )
//                   ? "text-[#BA24D5] "
//                   : "text-[#4D4D4D] bg-transparent font-[400]"
//               }  cursor-pointer text-[14px]`}
//             >
//               {isActive("/BlockChainService")
//                 ? "Blockchain Development"
//                 : isActive("/GameDevelopment")
//                 ? "Gaming"
//                 : isActive("/AIServices")
//                 ? "AI Services"
//                 : "Services"}
//             </div>

//             <IoIosArrowDown
//               className={`transition-transform duration-300 ${
//                 isOpenMenu ? "rotate-180" : ""
//               } cursor-pointer`}
//             />
//           </button>
//           <div
//             className={`overflow-hidden transition-all px-6  duration-500 ease-in-out p-0 ${
//               isOpenMenu ? "max-h-60 opacity-100" : "max-h-0 opacity-0 hidden"
//             }`}
//           >
//             <ul className="bg-white mt-2  px-2 space-y-4 text-sm font-medium text-gray-700">
//               <li
//                 className={`text-[#414141] cursor-pointer text-[12px] font-[400] flex gap-4 items-center w-full`}
//               >
//                 <Link
//                   href="/BlockChainService"
//                   passHref
//                   prefetch={true}
//                   onClick={closeMenu}
//                 >
//                   Blockchain Development
//                 </Link>
//                 {isActive("/BlockChainService") && (
//                   <MdDone className="text-[#D444F1]" />
//                 )}
//               </li>
//               <li
//                 className={`text-[#414141] cursor-pointer text-[12px] font-[400] flex justify-between items-center w-full`}
//               >
//                 <Link
//                   href="/GameDevelopment"
//                   passHref
//                   prefetch={true}
//                   onClick={closeMenu}
//                 >
//                   Gaming
//                 </Link>
//                 {isActive("/GameDevelopment") && (
//                   <MdDone className="text-[#D444F1]" />
//                 )}
//               </li>
//               <li
//                 className={`
//               text-[#414141]  cursor-pointer text-[12px] font-[400] flex justify-between items-center w-full`}
//               >
//                 <Link
//                   href="/AIServices"
//                   passHref
//                   prefetch={true}
//                   onClick={closeMenu}
//                 >
//                   AI Services
//                 </Link>
//                 {isActive("/AIServices") && (
//                   <MdDone className="text-[#D444F1]" />
//                 )}
//               </li>
//             </ul>
//           </div>
//           {/* <Link href="/ContactUs" className="px-6">
//           <button className="bg-[#D444F1]   text-white px-4 py-2 rounded-full hover:bg-pink-600 mt-4 w-full transition-all  cursor-pointer duration-500 ease-in-out">
//             Contact Us
//             </button>
//             </Link> */}
//         </nav>
//       </div>

//       {/* Services Popup */}
//       {isPopupOpen && <ServicesPopup onClose={togglePopup} />}
//     </>
//   );
// };

// export default Navbar;

import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState, useEffect, useRef } from "react";
import Button from "../Reusable/Button";
import Image from "next/image";
import { RiArrowDropDownLine } from "react-icons/ri";
import ServicesPopup from "./NavbarPoup"; // Adjust the import path as necessary
import { IoIosArrowDown } from "react-icons/io";
import { MdDone } from "react-icons/md";
import { Inter } from "next/font/google";
import { useRouter } from "next/navigation";
import { roboto } from "../Fonts/fonts";

const inter = Inter({
  subsets: ["latin"],
});
const Navbar: React.FC = () => {
  const router = useRouter();
  useEffect(() => {
    router.prefetch("/blockchain-service");
    router.prefetch("/game-development");
    router.prefetch("/ai-services");
  }, []);
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [isScrolling, setIsScrolling] = useState(false);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const pathname = usePathname();
  const lastScrollY = useRef(0);

  useEffect(() => {
    const prefetchRoutes = async () => {
      await Promise.all([
        router.prefetch("/how-we-help-screen"),
        router.prefetch("/who-are-we"),
        router.prefetch("/careers-screen"),
        router.prefetch("/blockchain-service"),
        router.prefetch("/game-development"),
        router.prefetch("/ai-services"),
        router.prefetch("/blog"),
        router.prefetch("/contact-us"),
      ]);
    };

    prefetchRoutes();
  }, []);

  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      const sidebar = document.getElementById("mobile-sidebar");
      if (isOpen && sidebar && !sidebar.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };

    const handleScrollClose = () => {
      if (isOpen) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    window.addEventListener("scroll", handleScrollClose);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
      window.removeEventListener("scroll", handleScrollClose);
    };
  }, [isOpen]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolling(true);
      setIsVisible(window.scrollY < lastScrollY.current);
      lastScrollY.current = window.scrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);
  const isActive = (path: string) => pathname === path;
  const togglePopup = () => setIsPopupOpen(!isPopupOpen);

  return (
    <>
      <header
        className={`fixed  ${inter.className
          } etop-0 left-0 right-0 w-full pt-5 z-50 transition-transform  lg:px-4 px-0 duration-500 ease-in-out ${isVisible ? "translate-y-0" : "-translate-y-full"
          }`}
      >
        <nav className={`max-w-[1920px] mx-auto py-2 px-2 md:px-5 lg:px-5 flex items-center justify-between ${isScrolling ? 'backdrop-blur-md' : ''} lg:backdrop-blur-md md:border md:border-gray-300 md:rounded-full transition-all duration-500 ease-in-out `}>
          <button
            onClick={toggleMenu}
            className="md:hidden focus:outline-none p-3 rounded-md bg-[#FFFFFF4D] "
          >
            <div className="flex flex-col space-y-1">
              <svg
                width="21"
                height="4"
                viewBox="0 0 21 4"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M19.9297 1.9375L1.06969 1.9375"
                  stroke="black"
                  strokeWidth="2.05"
                  strokeLinecap="round"
                />
              </svg>

              <svg
                width="21"
                height="3"
                viewBox="0 0 21 3"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M19.9297 1.9375L1.06969 1.9375"
                  stroke="black"
                  strokeWidth="2.05"
                  strokeLinecap="round"
                />
              </svg>
              <svg
                width="21"
                height="4"
                viewBox="0 0 21 4"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M19.9297 1.9375L1.06969 1.9375"
                  stroke="black"
                  strokeWidth="2.05"
                  strokeLinecap="round"
                />
              </svg>
            </div>
          </button>

          {/* Logo */}
          <div className="hidden md:flex flex-shrink-0 ">
            <Link href="/">
              <Image
                src="/assets/logo.svg"
                alt="Logo"
                width={150}
                height={40}
                priority={true}
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex space-x-6 text-gray-700 flex-1 justify-center transition-all duration-500 ease-in-out md:text-[16px] xl:text-[20px] lg:text-[16px] ">
            <li>
              <Link
                href="/how-we-help-screen"
                className={`${isActive("/how-we-help-screen")
                    ? "text-[#821890]"
                    : "text-gray-700"
                  }`}
                prefetch={true}
              >
                How We Help
              </Link>
            </li>
            <li>
              <Link
                href="/who-are-we"
                className={`${isActive("/who-are-we") ? "text-[#821890]" : "text-gray-700"
                  }`}
                prefetch={true}
              >
                Who We Are
              </Link>
            </li>
            <li>
              <Link
                href="/careers-screen"
                className={`${isActive("/careers-screen")
                    ? "text-[#821890]"
                    : "text-gray-700"
                  }`}
                prefetch={true}
              >
                Careers
              </Link>
            </li>
            <li>
              <button
                onClick={togglePopup}
                className="text-gray-700 flex items-center gap-1 focus:outline-none cursor-pointer"
              >
                Services{" "}
                <Image
                  src="/svg/stat_minus_1.svg"
                  alt="stat"
                  width={4}
                  height={4}
                  className="w-4 h-4 transition-transform duration-200"
                  priority={true}
                />
              </button>
            </li>
            <li>
              <Link
                href="/blog"
                className={`${isActive("/blog") ? "text-[#821890]" : "text-gray-700"
                  }`}
                prefetch={true}
              >
                Blogs
              </Link>
            </li>
          </ul>

          <Button
            className="bg-[#BA24D5] text-white cursor-pointer px-6 py-2 hover:bg-[#821890]"
            text="Contact Us"
            href="/contact-us"
          />
        </nav>
      </header>

      {/* Sidebar Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-opacity-50 z-40 transition-opacity duration-500 ease-in-out"
          onClick={closeMenu}
        ></div>
      )}

      {/* Sidebar Menu */}

      <div
        id="mobile-sidebar"
        className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg z-50 transform transition-transform duration-500 ease-in-out ${isOpen ? "translate-x-0" : "-translate-x-full"
          }`}
      >
        <button
          onClick={closeMenu}
          className="absolute top-4 right-4 cursor-pointer text-gray-700 text-2xl"
        >
          &times;
        </button>
        <nav className="flex flex-col items-start  text-gray-700">
          <Link href="/" className="px-6 pt-6 pb-2 w-full flex flex-col  gap-5">
            <Image src="/svg/Group.svg" alt="Logo" width={20} height={20} />
            <div className={`text-[20px] font-[600] ${roboto.className}`}>
              Kai Foundry
            </div>
          </Link>
          <Link
            href="/"
            className={`${isActive("/")
                ? "text-[#821890] font-[500] bg-gradient-to-r from-white to-[#F6D0FE]"
                : "text-[#4D4D4D] bg-transparent font-[400]"
              }  cursor-pointer text-[14px] px-6 py-3 w-full `}
            onClick={closeMenu}
            prefetch={true}
          >
            Home
          </Link>
          <Link
            href="/how-we-help-screen"
            className={`${isActive("/how-we-help-screen")
                ? "text-[#821890] font-[500] bg-gradient-to-r from-white to-[#F6D0FE]"
                : "text-[#4D4D4D] bg-transparent font-[400]"
              }  cursor-pointer text-[14px] px-6 py-3 w-full `}
            onClick={closeMenu}
            prefetch={true}
          >
            How We Help
          </Link>
          <Link
            href="/who-are-we"
            className={`${isActive("/who-are-we")
                ? "text-[#821890] font-[500] bg-gradient-to-r from-white to-[#F6D0FE]"
                : "text-[#4D4D4D] bg-transparent font-[400]"
              }  cursor-pointer text-[14px] px-6 py-3 w-full`}
            onClick={closeMenu}
            prefetch={true}
          >
            Who We Are
          </Link>
          <Link
            href="/careers-screen"
            className={`${isActive("/careers-screen")
                ? "text-[#821890] font-[500] bg-gradient-to-r from-white to-[#F6D0FE]"
                : "text-[#4D4D4D] bg-transparent "
              }  cursor-pointer text-[14px] px-6 py-3 w-full`}
            prefetch={true}
            onClick={closeMenu}
          >
            Careers
          </Link>

          <Link
            href="/blog"
            className={`${isActive("/blog")
                ? "text-[#821890] font-[500] bg-gradient-to-r from-white to-[#F6D0FE]"
                : "text-[#4D4D4D] bg-transparent font-[400]"
              }  cursor-pointer text-[14px] px-6 py-3 w-full`}
            prefetch={true}
            onClick={closeMenu}
          >
            Blogs
          </Link>
          <button
            onClick={(e) => {
              e.preventDefault();
              setIsOpenMenu(!isOpenMenu);
            }}
            className={`text-gray-700 focus:outline-none flex justify-between w-full items-center px-6 py-4 ${["/blockchain-service", "/game-development", "/ai-services"].some(
              (path) => isActive(path)
            )
                ? "bg-gradient-to-r from-white to-[#F6D0FE]"
                : "bg-transparent"
              }`}
          >
            <div
              className={`${[
                  "/blockchain-service",
                  "/game-development",
                  "/ai-services",
                ].some((path) => isActive(path))
                  ? "text-[#821890] "
                  : "text-[#4D4D4D] bg-transparent font-[400]"
                }  cursor-pointer text-[14px]`}
            >
              {isActive("/blockchain-service")
                ? "Blockchain Development"
                : isActive("/game-development")
                  ? "Gaming"
                  : isActive("/ai-services")
                    ? "AI Services"
                    : "Services"}
            </div>

            <IoIosArrowDown
              className={`transition-transform duration-300 ${isOpenMenu ? "rotate-180" : ""
                } cursor-pointer`}
            />
          </button>
          <div
            className={`overflow-hidden transition-all px-6  duration-500 ease-in-out p-0 ${isOpenMenu ? "max-h-60 opacity-100" : "max-h-0 opacity-0 hidden"
              }`}
          >
            <ul className="bg-white mt-2  px-2 space-y-4 text-sm font-medium text-gray-700">
              <li
                className={`text-[#414141] cursor-pointer text-[12px] font-[400] flex gap-4 items-center w-full`}
              >
                <Link
                  href="/blockchain-service"
                  passHref
                  prefetch={true}
                  onClick={closeMenu}
                >
                  Blockchain Development
                </Link>
                {isActive("/blockchain-service") && (
                  <MdDone className="text-[#821890]" />
                )}
              </li>
              <li
                className={`text-[#414141] cursor-pointer text-[12px] font-[400] flex justify-between items-center w-full`}
              >
                <Link
                  href="/game-development"
                  passHref
                  prefetch={true}
                  onClick={closeMenu}
                >
                  Gaming
                </Link>
                {isActive("/game-development") && (
                  <MdDone className="text-[#821890]" />
                )}
              </li>
              <li
                className={`
              text-[#414141]  cursor-pointer text-[12px] font-[400] flex justify-between items-center w-full`}
              >
                <Link
                  href="/ai-services"
                  passHref
                  prefetch={true}
                  onClick={closeMenu}
                >
                  AI Services
                </Link>
                {isActive("/ai-services") && (
                  <MdDone className="text-[#821890]" />
                )}
              </li>
            </ul>
          </div>
        </nav>
      </div>

      {/* Services Popup */}
      {isPopupOpen && <ServicesPopup onClose={togglePopup} />}
    </>
  );
};

export default Navbar;
