// import React, { useEffect, useRef } from "react";
// import { AiOutlineClose } from "react-icons/ai";
// import { FaGamepad, FaRobot } from "react-icons/fa";
// import { usePathname } from "next/navigation";
// import { SiBlockchaindotcom } from "react-icons/si";
// import Link from "next/link";

// interface ServicesPopupProps {
//   onClose: () => void;
// }

// const ServicesPopup: React.FC<ServicesPopupProps> = ({ onClose }) => {
//   const popupRef = useRef<HTMLDivElement>(null);
//   const pathname = usePathname();

//   useEffect(() => {
//     const handleOutsideClick = (event: MouseEvent) => {
//       if (
//         popupRef.current &&
//         !popupRef.current.contains(event.target as Node)
//       ) {
//         onClose(); // Close if clicked outside
//       }
//     };

//     const handleScroll = () => {
//       onClose(); // Close on scroll
//     };

//     document.addEventListener("mousedown", handleOutsideClick);
//     window.addEventListener("scroll", handleScroll);

//     return () => {
//       document.removeEventListener("mousedown", handleOutsideClick);
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, [onClose]);

//   const isActive = (path: string) => pathname === path;

//   return (
//     <div className="fixed inset-0 flex items-start mt-20 mx-auto z-50 container max-w-[1920px] justify-center">
//       <div
//         ref={popupRef}
//         className="bg-white shadow-lg rounded-b-lg p-6 w-full max-w-8xl opacity-100 relative"
//       >
//         <button
//           onClick={onClose}
//           className="absolute top-24 right-3 cursor-pointer text-gray-500 hover:text-gray-700"
//         >
//           <AiOutlineClose className="w-7 h-7" />
//         </button>

//         <div className="flex flex-col md:flex-row gap-8 py-10">
//           {/* Left Side */}
//           <div className="flex flex-col  items-start pl-20 w-full md:w-1/3 text-center">
//             <div className="flex flex-col items-start justify-start self-start ">
//               <h2 className="text-[38px] font-[600] mb-4">Services</h2>
//               <p className="text-[18px] max-w-md text-start">
//                 Empowering your business with tailored solutions for sustainable
//                 growth.
//               </p>
//             </div>
//           </div>

//           {/* Right Side Service Cards */}
//           <div className="grid md:grid-cols-2 grid-cols-1 gap-12 w-4xl ">
//             <Link
//               href="/BlockChainService"
//               passHref
//               prefetch={true}
//               onClick={onClose}
//             >
//               <ServiceItem
//                 icon={
//                   <svg
//                     width="40"
//                     height="40"
//                     viewBox="0 0 239 239"
//                     fill="none"
//                     xmlns="http://www.w3.org/2000/svg"
//                   >
//                     <path
//                       d="M198.481 149.198V74.9133L136.578 40.0938M101.912 40.0938L40.0078 74.9133V149.198M54.8647 172.414L119.245 208.625L158.863 186.34L183.624 172.414M119.245 84.8179L134.101 93.4845L148.958 102.151V136.817L134.101 145.484L119.245 154.15L104.388 145.484L89.5308 136.817V102.151L104.388 93.4845L119.245 84.8179ZM119.245 84.8179V50.1519M148.958 134.341L183.624 154.15M89.5308 134.341L54.8647 154.15"
//                       stroke="#4D4D4D"
//                       stroke-width="15"
//                       stroke-linecap="round"
//                       stroke-linejoin="round"
//                     />
//                     <path
//                       d="M119.248 50.1591C127.453 50.1591 134.104 43.5074 134.104 35.3022C134.104 27.097 127.453 20.4453 119.248 20.4453C111.042 20.4453 104.391 27.097 104.391 35.3022C104.391 43.5074 111.042 50.1591 119.248 50.1591Z"
//                       stroke="#4D4D4D"
//                       stroke-width="15"
//                       stroke-linecap="round"
//                       stroke-linejoin="round"
//                     />
//                     <path
//                       d="M40.0092 178.917C48.2145 178.917 54.8661 172.265 54.8661 164.06C54.8661 155.855 48.2145 149.203 40.0092 149.203C31.804 149.203 25.1523 155.855 25.1523 164.06C25.1523 172.265 31.804 178.917 40.0092 178.917Z"
//                       stroke="#4D4D4D"
//                       stroke-width="15"
//                       stroke-linecap="round"
//                       stroke-linejoin="round"
//                     />
//                     <path
//                       d="M198.482 178.917C206.687 178.917 213.339 172.265 213.339 164.06C213.339 155.855 206.687 149.203 198.482 149.203C190.277 149.203 183.625 155.855 183.625 164.06C183.625 172.265 190.277 178.917 198.482 178.917Z"
//                       stroke="#4D4D4D"
//                       stroke-width="15"
//                       stroke-linecap="round"
//                       stroke-linejoin="round"
//                     />
//                   </svg>
//                 }
//                 title="Blockchain Development"
//                 description="Solutions tailored to your needs."
//                 isActive={isActive("/BlockChainService")}
//               />
//             </Link>
//             <Link
//               href="/GameDevelopment"
//               passHref
//               prefetch={true}
//               onClick={onClose}
//             >
//               <ServiceItem
//                 icon={
//                   <svg
//                     width="40"
//                     height="40"
//                     viewBox="0 0 238 238"
//                     fill="none"
//                     xmlns="http://www.w3.org/2000/svg"
//                   >
//                     <path
//                       d="M217.05 115.527C208.508 76.9079 195.837 52.2733 175.53 46.2702C171.597 45.1229 167.519 44.5505 163.422 44.571C150.937 44.571 141.085 51.9994 118.851 51.9994C96.6166 51.9994 86.7461 44.571 74.2802 44.571C70.0123 44.5483 65.762 45.1202 61.6519 46.2702C41.3165 52.2733 28.7532 76.9311 20.1129 115.527C11.2917 154.948 12.8888 186.097 30.1321 192.077C42.2033 196.255 52.9977 187.615 63.2211 174.898C74.8281 160.413 89.1232 155.956 118.851 155.956C148.579 155.956 162.317 160.413 173.942 174.898C184.156 187.624 195.35 196.158 207.101 192.151C226.145 185.646 225.876 155.413 217.05 115.527Z"
//                       stroke="#4D4D4D"
//                       stroke-width="15"
//                       stroke-miterlimit="10"
//                     />
//                     <path
//                       d="M135.571 113.282C140.699 113.282 144.856 109.125 144.856 103.996C144.856 98.8682 140.699 94.7109 135.571 94.7109C130.442 94.7109 126.285 98.8682 126.285 103.996C126.285 109.125 130.442 113.282 135.571 113.282Z"
//                       fill="#4D4D4D"
//                     />
//                     <path
//                       d="M155.996 133.712C154.159 133.712 152.363 133.167 150.835 132.145C149.308 131.124 148.118 129.672 147.416 127.974C146.713 126.276 146.531 124.408 146.891 122.606C147.251 120.804 148.138 119.15 149.439 117.852C150.74 116.554 152.396 115.672 154.199 115.316C156.002 114.961 157.87 115.148 159.566 115.854C161.262 116.56 162.711 117.754 163.728 119.284C164.746 120.814 165.287 122.612 165.282 124.449C165.276 126.908 164.295 129.264 162.554 131C160.813 132.737 158.455 133.712 155.996 133.712Z"
//                       fill="#4D4D4D"
//                     />
//                     <path
//                       d="M155.996 92.8524C161.125 92.8524 165.282 88.6951 165.282 83.5668C165.282 78.4385 161.125 74.2812 155.996 74.2812C150.868 74.2812 146.711 78.4385 146.711 83.5668C146.711 88.6951 150.868 92.8524 155.996 92.8524Z"
//                       fill="#4D4D4D"
//                     />
//                     <path
//                       d="M176.426 113.282C181.554 113.282 185.712 109.125 185.712 103.996C185.712 98.8682 181.554 94.7109 176.426 94.7109C171.298 94.7109 167.141 98.8682 167.141 103.996C167.141 109.125 171.298 113.282 176.426 113.282Z"
//                       fill="#4D4D4D"
//                     />
//                     <path
//                       d="M74.2853 81.7109V126.282M96.5707 103.996H52"
//                       stroke="#4D4D4D"
//                       stroke-width="14.8569"
//                       stroke-linecap="round"
//                       stroke-linejoin="round"
//                     />
//                   </svg>
//                 }
//                 title="Game Development"
//                 description="Experiences that drive players."
//                 isActive={isActive("/GameDevelopment")}
//               />
//             </Link>
//             <Link href="/AIServices" passHref prefetch={true} onClick={onClose}>
//               <ServiceItem
//                 icon={
//                   <svg
//                     width="40"
//                     height="40"
//                     viewBox="0 0 239 238"
//                     fill="none"
//                     xmlns="http://www.w3.org/2000/svg"
//                   >
//                     <path
//                       d="M99.4376 69.6184L94.3268 83.4254C87.6313 101.531 84.2836 110.584 77.6772 117.19C71.0709 123.796 62.0181 127.144 43.9125 133.84L30.1055 138.951L43.9125 144.061C62.0181 150.757 71.0709 154.114 77.6772 160.711C84.2836 167.307 87.6313 176.37 94.3268 194.476L99.4376 208.283L104.548 194.476C111.244 176.37 114.602 167.317 121.198 160.711C127.794 154.105 136.857 150.757 154.963 144.061L168.77 138.951L154.963 133.84C136.857 127.144 127.804 123.796 121.198 117.19C114.592 110.584 111.244 101.531 104.548 83.4254L99.4376 69.6184ZM178.674 30L176.485 35.913C173.613 43.6782 172.177 47.5608 169.354 50.3837C166.521 53.2164 162.639 54.6525 154.874 57.515L148.961 59.7138L154.884 61.9027C162.639 64.775 166.521 66.2112 169.344 69.034C172.177 71.8667 173.613 75.7493 176.476 83.5145L178.674 89.4275L180.863 83.5145C183.736 75.7493 185.172 71.8667 187.995 69.0439C190.827 66.2112 194.71 64.775 202.475 61.9126L208.388 59.7138L202.465 57.5249C194.71 54.6525 190.827 53.2164 188.004 50.3936C185.172 47.5608 183.736 43.6782 180.873 35.913L178.674 30Z"
//                       stroke="#4D4D4D"
//                       stroke-width="15"
//                       stroke-linecap="round"
//                       stroke-linejoin="round"
//                     />
//                   </svg>
//                 }
//                 title="AI Services"
//                 description="Unlock the power of AI."
//                 isActive={isActive("/AIServices")}
//               />
//             </Link>
//             <div /> {/* empty div to maintain grid layout if needed */}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// const ServiceItem: React.FC<{
//   icon: React.ReactNode;
//   title: string;
//   description: string;
//   isActive: boolean;
// }> = ({ icon, title, description, isActive }) => {
//   return (
//     <div
//       className={`flex items-center gap-6 cursor-pointer px-3 py-6
//       transition-all duration-300 ease-in-out
//       ${
//         isActive
//           ? "border-t-2 border-[#BA24D5]"
//           : "border-t-2 border-transparent"
//       }`}
//     >
//       <div className="bg-[#FAE4FF] p-2 rounded-full">{icon}</div>
//       <div className="flex flex-col gap-1">
//         <h3 className="text-[22px] font-semibold">{title}</h3>
//         <p className=" text-[16px]">{description}</p>
//       </div>
//     </div>
//   );
// };

// export default ServicesPopup;

import React, { useEffect, useRef } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { FaGamepad, FaRobot } from "react-icons/fa";
import { usePathname } from "next/navigation";
import { SiBlockchaindotcom } from "react-icons/si";
import Link from "next/link";

interface ServicesPopupProps {
  onClose: () => void;
}

const ServicesPopup: React.FC<ServicesPopupProps> = ({ onClose }) => {
  const popupRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (
        popupRef.current &&
        !popupRef.current.contains(event.target as Node)
      ) {
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

  const isActive = (path: string) => pathname === path;

  return (
    <div className="fixed inset-0 flex items-start mt-20 mx-auto z-50 container max-w-[1920px] justify-center">
      <div
        ref={popupRef}
        className="bg-white shadow-lg rounded-b-lg p-6 w-full max-w-8xl opacity-100 relative"
      >
        <button
          onClick={onClose}
          className="absolute top-24 right-3 cursor-pointer text-gray-500 hover:text-gray-700"
        >
          <AiOutlineClose className="w-7 h-7" />
        </button>

        <div className="flex flex-col md:flex-row gap-8 py-10">
          {/* Left Side */}
          <div className="flex flex-col  items-start pl-20 w-full md:w-1/3 text-center">
            <div className="flex flex-col items-start justify-start self-start ">
              <h2 className="text-[38px] font-[600] mb-4">Services</h2>
              <p className="text-[18px] max-w-md text-start">
                Empowering your business with tailored solutions for sustainable
                growth.
              </p>
            </div>
          </div>

          {/* Right Side Service Cards */}
          <div className="grid md:grid-cols-2 grid-cols-1 gap-12 w-4xl ">
            <Link
              href="/blockchain-service"
              passHref
              prefetch={true}
              onClick={onClose}
            >
              <ServiceItem
                icon={
                  <svg
                    width="40"
                    height="40"
                    viewBox="0 0 239 239"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M198.481 149.198V74.9133L136.578 40.0938M101.912 40.0938L40.0078 74.9133V149.198M54.8647 172.414L119.245 208.625L158.863 186.34L183.624 172.414M119.245 84.8179L134.101 93.4845L148.958 102.151V136.817L134.101 145.484L119.245 154.15L104.388 145.484L89.5308 136.817V102.151L104.388 93.4845L119.245 84.8179ZM119.245 84.8179V50.1519M148.958 134.341L183.624 154.15M89.5308 134.341L54.8647 154.15"
                      stroke="#4D4D4D"
                      stroke-width="15"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M119.248 50.1591C127.453 50.1591 134.104 43.5074 134.104 35.3022C134.104 27.097 127.453 20.4453 119.248 20.4453C111.042 20.4453 104.391 27.097 104.391 35.3022C104.391 43.5074 111.042 50.1591 119.248 50.1591Z"
                      stroke="#4D4D4D"
                      stroke-width="15"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M40.0092 178.917C48.2145 178.917 54.8661 172.265 54.8661 164.06C54.8661 155.855 48.2145 149.203 40.0092 149.203C31.804 149.203 25.1523 155.855 25.1523 164.06C25.1523 172.265 31.804 178.917 40.0092 178.917Z"
                      stroke="#4D4D4D"
                      stroke-width="15"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M198.482 178.917C206.687 178.917 213.339 172.265 213.339 164.06C213.339 155.855 206.687 149.203 198.482 149.203C190.277 149.203 183.625 155.855 183.625 164.06C183.625 172.265 190.277 178.917 198.482 178.917Z"
                      stroke="#4D4D4D"
                      stroke-width="15"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                }
                title="Blockchain Development"
                description="Solutions tailored to your needs."
                isActive={isActive("/blockchain-service")}
              />
            </Link>
            <Link
              href="/game-development"
              passHref
              prefetch={true}
              onClick={onClose}
            >
              <ServiceItem
                icon={
                  <svg
                    width="40"
                    height="40"
                    viewBox="0 0 238 238"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M217.05 115.527C208.508 76.9079 195.837 52.2733 175.53 46.2702C171.597 45.1229 167.519 44.5505 163.422 44.571C150.937 44.571 141.085 51.9994 118.851 51.9994C96.6166 51.9994 86.7461 44.571 74.2802 44.571C70.0123 44.5483 65.762 45.1202 61.6519 46.2702C41.3165 52.2733 28.7532 76.9311 20.1129 115.527C11.2917 154.948 12.8888 186.097 30.1321 192.077C42.2033 196.255 52.9977 187.615 63.2211 174.898C74.8281 160.413 89.1232 155.956 118.851 155.956C148.579 155.956 162.317 160.413 173.942 174.898C184.156 187.624 195.35 196.158 207.101 192.151C226.145 185.646 225.876 155.413 217.05 115.527Z"
                      stroke="#4D4D4D"
                      stroke-width="15"
                      stroke-miterlimit="10"
                    />
                    <path
                      d="M135.571 113.282C140.699 113.282 144.856 109.125 144.856 103.996C144.856 98.8682 140.699 94.7109 135.571 94.7109C130.442 94.7109 126.285 98.8682 126.285 103.996C126.285 109.125 130.442 113.282 135.571 113.282Z"
                      fill="#4D4D4D"
                    />
                    <path
                      d="M155.996 133.712C154.159 133.712 152.363 133.167 150.835 132.145C149.308 131.124 148.118 129.672 147.416 127.974C146.713 126.276 146.531 124.408 146.891 122.606C147.251 120.804 148.138 119.15 149.439 117.852C150.74 116.554 152.396 115.672 154.199 115.316C156.002 114.961 157.87 115.148 159.566 115.854C161.262 116.56 162.711 117.754 163.728 119.284C164.746 120.814 165.287 122.612 165.282 124.449C165.276 126.908 164.295 129.264 162.554 131C160.813 132.737 158.455 133.712 155.996 133.712Z"
                      fill="#4D4D4D"
                    />
                    <path
                      d="M155.996 92.8524C161.125 92.8524 165.282 88.6951 165.282 83.5668C165.282 78.4385 161.125 74.2812 155.996 74.2812C150.868 74.2812 146.711 78.4385 146.711 83.5668C146.711 88.6951 150.868 92.8524 155.996 92.8524Z"
                      fill="#4D4D4D"
                    />
                    <path
                      d="M176.426 113.282C181.554 113.282 185.712 109.125 185.712 103.996C185.712 98.8682 181.554 94.7109 176.426 94.7109C171.298 94.7109 167.141 98.8682 167.141 103.996C167.141 109.125 171.298 113.282 176.426 113.282Z"
                      fill="#4D4D4D"
                    />
                    <path
                      d="M74.2853 81.7109V126.282M96.5707 103.996H52"
                      stroke="#4D4D4D"
                      stroke-width="14.8569"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                }
                title="Game Development"
                description="Experiences that drive players."
                isActive={isActive("/game-development")}
              />
            </Link>
            <Link
              href="/ai-services"
              passHref
              prefetch={true}
              onClick={onClose}
            >
              <ServiceItem
                icon={
                  <svg
                    width="40"
                    height="40"
                    viewBox="0 0 239 238"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M99.4376 69.6184L94.3268 83.4254C87.6313 101.531 84.2836 110.584 77.6772 117.19C71.0709 123.796 62.0181 127.144 43.9125 133.84L30.1055 138.951L43.9125 144.061C62.0181 150.757 71.0709 154.114 77.6772 160.711C84.2836 167.307 87.6313 176.37 94.3268 194.476L99.4376 208.283L104.548 194.476C111.244 176.37 114.602 167.317 121.198 160.711C127.794 154.105 136.857 150.757 154.963 144.061L168.77 138.951L154.963 133.84C136.857 127.144 127.804 123.796 121.198 117.19C114.592 110.584 111.244 101.531 104.548 83.4254L99.4376 69.6184ZM178.674 30L176.485 35.913C173.613 43.6782 172.177 47.5608 169.354 50.3837C166.521 53.2164 162.639 54.6525 154.874 57.515L148.961 59.7138L154.884 61.9027C162.639 64.775 166.521 66.2112 169.344 69.034C172.177 71.8667 173.613 75.7493 176.476 83.5145L178.674 89.4275L180.863 83.5145C183.736 75.7493 185.172 71.8667 187.995 69.0439C190.827 66.2112 194.71 64.775 202.475 61.9126L208.388 59.7138L202.465 57.5249C194.71 54.6525 190.827 53.2164 188.004 50.3936C185.172 47.5608 183.736 43.6782 180.873 35.913L178.674 30Z"
                      stroke="#4D4D4D"
                      stroke-width="15"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                }
                title="AI Services"
                description="Unlock the power of AI."
                isActive={isActive("/ai-services")}
              />
            </Link>
            <div /> {/* empty div to maintain grid layout if needed */}
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
  isActive: boolean;
}> = ({ icon, title, description, isActive }) => {
  return (
    <div
      className={`flex items-center gap-6 cursor-pointer px-3 py-6
      transition-all duration-300 ease-in-out
      ${
        isActive
          ? "border-t-2 border-[#BA24D5]"
          : "border-t-2 border-transparent"
      }`}
    >
      <div className="bg-[#FAE4FF] p-2 rounded-full">{icon}</div>
      <div className="flex flex-col gap-1">
        <h3 className="text-[22px] font-[400]">{title}</h3>
        <p className=" text-[16px]">{description}</p>
      </div>
    </div>
  );
};

export default ServicesPopup;
