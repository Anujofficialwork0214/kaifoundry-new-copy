"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import img from "./../../../public/assets/WhoAreWe/FounderImg.svg";

const FounderSection = () => {
  const { ref, inView } = useInView({ triggerOnce: false, threshold: 0.2 });

  return (
    <section ref={ref} className="px-4 sm:px-6 lg:px-20 py-16 font-inter">
      <div className="max-w-6xl mx-auto flex flex-col items-center">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-[24px] md:text-[43px] xl:text-[45px] font-[600] text-center leading-tight sm:leading-[72px] mb-2"
        >
          Meet <span className="bg-color">Our Founder</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className=" text-[#808080] lg:text-[#5A5C62] text-[14px] lg:text-[16px] font-[400] text-center mb-24 text-base sm:text-lg leading-relaxed max-w-3xl"
        >
          We Focus on the details of everything we do. All to help businesses
          around the world.
        </motion.p>

        {/* Main Content */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-8">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={
              inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }
            }
            transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
            className="w-[263.82px] h-[270px] lg:w-[555px] lg:h-[568px] flex justify-center"
          >
            <Image
              src={img}
              alt="Founder"
              width={500}
              height={600}
              className="shadow-md object-cover"
              draggable="false"
              priority={true}
            />
          </motion.div>

          {/* Text Card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
            className=" w-[263.82px] h-[350px] lg:w-[555px] lg:h-[568px] bg-[#FAE3FF] px-6 py-8 flex flex-col justify-center "
          >
            <h3 className="text-[14px] lg:text-[20.55px] font-[700] text-[#333333] pb-2">
              VINAYAK KALRA
            </h3>
            <p className="text-[#D444F1] font-[600] text-[12px] lg:text-[18px]">
              Founder
            </p>
            <div className="w-10 border-b-3 border-[#D444F1] my-3"></div>
            <p className="text-[#4D4D4D] text-[12px] lg:text-[16px] font-[400] leading-relaxed">
              Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit, Sed Do
              Eiusmod Tempor Incididunt Ut Labore Et Dolore Magna Aliqua. Ut
              Enim Ad Minim Veniam, Quis Nostrud Exercitation Ullamco Laboris
              Nisi Ut Aliquip Ex Ea Commodo Consequat. Duis Aute Irure Dolor In
              Reprehenderit In Voluptate Velit Esse Cillum Dolore Eu Fugiat
              Nulla Pariatur.
            </p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.8, ease: "easeOut" }}
              className="flex gap-4 mt-6 text-[#D444F1] text-lg"
            >
              {/* <a href="#" className="hover:text-[#EA83FF] text-[22.96px] lg:text-[25px]"><FaFacebook /></a>
              <a href="#" className="hover:text-[#EA83FF] text-[22.96px] lg:text-[25px]"><IoLogoGithub /></a>
              <a href="#" className="hover:text-[#EA83FF] text-[22.96px] lg:text-[25px]"><FaLinkedin /></a> */}
              <svg
                width="25"
                height="25"
                viewBox="0 0 25 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_63702_61404)">
                  <path
                    d="M25 12.5C25 5.59644 19.4036 0 12.5 0C5.59644 0 0 5.59644 0 12.5C0 18.739 4.57104 23.9104 10.5469 24.8481V16.1133H7.37305V12.5H10.5469V9.74609C10.5469 6.61328 12.4131 4.88281 15.2683 4.88281C16.6355 4.88281 18.0664 5.12695 18.0664 5.12695V8.20312H16.4902C14.9375 8.20312 14.4531 9.16675 14.4531 10.1562V12.5H17.9199L17.3657 16.1133H14.4531V24.8481C20.429 23.9104 25 18.739 25 12.5Z"
                    fill="#D444F1"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_63702_61404">
                    <rect width="25" height="25" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              <svg
                width="25"
                height="25"
                viewBox="0 0 25 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M12.5 0C5.59625 0 0 5.605 0 12.5212C0 18.0525 3.58125 22.7462 8.54875 24.4012C9.17375 24.5162 9.40125 24.13 9.40125 23.7975C9.40125 23.5012 9.39125 22.7125 9.385 21.6687C5.9075 22.425 5.17375 19.99 5.17375 19.99C4.60625 18.5425 3.78625 18.1575 3.78625 18.1575C2.65125 17.3825 3.8725 17.3975 3.8725 17.3975C5.12625 17.485 5.78625 18.6875 5.78625 18.6875C6.90125 20.6 8.7125 20.0475 9.42375 19.7275C9.53875 18.9187 9.86125 18.3675 10.2188 18.055C7.44375 17.7387 4.525 16.6637 4.525 11.8662C4.525 10.5 5.0125 9.38125 5.81125 8.50625C5.6825 8.19 5.25375 6.91625 5.93375 5.19375C5.93375 5.19375 6.98375 4.85625 9.37125 6.47625C10.391 6.19814 11.443 6.05649 12.5 6.055C13.5625 6.06 14.6312 6.19875 15.63 6.47625C18.0163 4.85625 19.0637 5.1925 19.0637 5.1925C19.7463 6.91625 19.3162 8.19 19.1887 8.50625C19.9888 9.38125 20.4737 10.5 20.4737 11.8662C20.4737 16.6762 17.55 17.735 14.7662 18.045C15.215 18.4312 15.6138 19.195 15.6138 20.3637C15.6138 22.0362 15.5988 23.3875 15.5988 23.7975C15.5988 24.1325 15.8237 24.5225 16.4587 24.4C18.9479 23.5651 21.1117 21.9691 22.6444 19.8376C24.177 17.706 25.0011 15.1466 25 12.5212C25 5.605 19.4025 0 12.5 0Z"
                  fill="#D444F1"
                />
              </svg>
              <svg
                width="25"
                height="25"
                viewBox="0 0 25 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_63702_61408)">
                  <path
                    d="M23.1494 0H1.8457C0.825195 0 0 0.805664 0 1.80176V23.1934C0 24.1895 0.825195 25 1.8457 25H23.1494C24.1699 25 25 24.1895 25 23.1982V1.80176C25 0.805664 24.1699 0 23.1494 0ZM7.41699 21.3037H3.70605V9.37012H7.41699V21.3037ZM5.56152 7.74414C4.37012 7.74414 3.4082 6.78223 3.4082 5.5957C3.4082 4.40918 4.37012 3.44727 5.56152 3.44727C6.74805 3.44727 7.70996 4.40918 7.70996 5.5957C7.70996 6.77734 6.74805 7.74414 5.56152 7.74414ZM21.3037 21.3037H17.5977V15.5029C17.5977 14.1211 17.5732 12.3389 15.6689 12.3389C13.7402 12.3389 13.4473 13.8477 13.4473 15.4053V21.3037H9.74609V9.37012H13.3008V11.001H13.3496C13.8428 10.0635 15.0537 9.07227 16.8555 9.07227C20.6104 9.07227 21.3037 11.543 21.3037 14.7559V21.3037Z"
                    fill="#D444F1"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_63702_61408">
                    <rect width="25" height="25" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FounderSection;
